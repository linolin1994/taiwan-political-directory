'use client';

import React, { useState, useMemo, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import PinyinMatch from 'pinyin-match'; // New import
import { Politician } from '@/types';
import { PoliticianCard } from '@/components/PoliticianCard';
import { refreshData } from '@/app/actions';

interface SearchInterfaceProps {
  initialData: Politician[];
}

const normalize = (str: string = '') => {
  return str.replace(/台/g, '臺').toLowerCase().trim();
};

const MAIN_PARTIES = ['中國國民黨', '民主進步黨', '台灣民眾黨', '時代力量', '新黨', '無黨籍'];

// Helper to parse Chinese/Numeric district numbers for sorting
// e.g. "第一選區" -> 1, "第10選區" -> 10, "平地原住民" -> 100
const getDistrictOrder = (area: string | undefined) => {
  if (!area) return 999;
  if (area.includes('平地原住民')) return 101;
  if (area.includes('山地原住民')) return 102;
  if (area.includes('不分區')) return 103;
  
  // Extract digits first (e.g. "第12選區")
  const digitMatch = area.match(/第(\d+)選區/);
  if (digitMatch) return parseInt(digitMatch[1], 10);

  // Map Chinese numerals if digits not found
  const cnNums: Record<string, number> = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10, '十一': 11, '十二': 12, '十三': 13, '十四': 14, '十五': 15, '十六': 16 };
  const cnMatch = area.match(/第([一二三四五六七八九十]+)選區/);
  if (cnMatch) {
     const val = cnNums[cnMatch[1]];
     return val || 999;
  }
  
  return 999;
};

export default function SearchInterface({ initialData }: SearchInterfaceProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedArea, setSelectedArea] = useState<string>('All'); // New Area Filter
  const [selectedParty, setSelectedParty] = useState<string>('All');
  const [selectedRole, setSelectedRole] = useState<string>('All');
  
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(async () => {
      // 1. Trigger Server Action to re-scrape/revalidate
      await refreshData();
      // 2. Refresh Server Components data without full page reload
      router.refresh();
    });
  };

  const cities = useMemo(() => {
    const citySet = new Set(initialData.map(p => p.city));
    return Array.from(citySet).filter(c => c !== '全國').sort();
  }, [initialData]);

  // Derived Areas based on Selected City
  const availableAreas = useMemo(() => {
    if (selectedCity === 'All') return [];
    const areas = new Set(
      initialData
        .filter(p => p.city === selectedCity && p.area)
        .map(p => p.area!) // Use full area string including details
    );
    return Array.from(areas).sort((a, b) => getDistrictOrder(a) - getDistrictOrder(b));
  }, [initialData, selectedCity]);

  // Reset Area when City changes
  React.useEffect(() => {
    setSelectedArea('All');
  }, [selectedCity]);

  // Setup Fuse.js instance
  const fuse = useMemo(() => {
    return new Fuse(initialData, {
      keys: ['name', 'city', 'party', 'title', 'department', 'area'],
      threshold: 0.3, // Match sensitivity
      ignoreLocation: true,
      useExtendedSearch: true,
    });
  }, [initialData]);

  const { groupedResults, totalCount } = useMemo(() => {
    let filtered = initialData;

    // 1. Tri-Core Search Logic
    if (searchTerm.trim()) {
       const normalizedTerm = normalize(searchTerm);
       
       // Core 1: Pinyin/Zhuyin Match (First Priority)
       // Allows "lxy" -> "盧秀燕", "tpe" -> "臺北市"
       const pinyinMatches = initialData.filter(p => {
          const combinedText = normalize(`${p.name} ${p.city} ${p.party} ${p.title} ${p.department || ''} ${p.area || ''}`);
          // PinyinMatch returns an array of indices if matched, false otherwise
          // We use it to check if the query matches ANY part of the combined text
          return PinyinMatch.match(combinedText, normalizedTerm); 
       });

       if (pinyinMatches.length > 0) {
          filtered = pinyinMatches;
       } else {
          // Core 2: Compact Match (For "台北市市長" without space)
          const compactTerm = normalizedTerm.replace(/\s/g, '');
          const compactMatches = initialData.filter(p => {
             const compactData = normalize(
               `${p.city}${p.title}${p.name}${p.party}${p.department || ''}${p.area || ''}`
             );
             return compactData.includes(compactTerm);
          });

          if (compactMatches.length > 0) {
             filtered = compactMatches;
          } else {
             // Core 3: Fuzzy Match (Typo tolerance)
             const results = fuse.search(normalizedTerm);
             filtered = results.map(r => r.item);
          }
       }
    }

    // 2. Filter by Category (Exact Match)
    filtered = filtered.filter(p => {
      const isCityMatch = selectedCity === 'All' || p.city === selectedCity;
      const isPartyMatch = selectedParty === 'All' || p.party === selectedParty;
      const isRoleMatch = selectedRole === 'All' || p.role === selectedRole;
      
      // Area Match: Partial match allows "第一選區" to match "第一選區（士林...）"
      // If selectedArea is "All", match all.
      // If selectedArea is a specific full string (e.g. "第一選區（北投...）"), exact match is safer if we want precise filtering,
      // but p.area might be slightly different if data inconsistency exists. 
      // However, since we derived availableAreas FROM p.area, exact match or inclusion should work.
      // Let's use inclusion to be safe, or exact match if we want to distinguish "First District (A)" vs "First District (B)"
      const isAreaMatch = selectedArea === 'All' || (p.area === selectedArea);

      return isCityMatch && isPartyMatch && isRoleMatch && isAreaMatch;
    });

    return {
      groupedResults: {
        mayors: filtered.filter(p => p.role === 'MAYOR'),
        bureau: filtered.filter(p => p.role === 'BUREAU_HEAD'),
        legislators: filtered.filter(p => p.role === 'LEGISLATOR'),
        councilors: filtered.filter(p => p.role === 'COUNCILOR'),
      },
      totalCount: filtered.length
    };
  }, [initialData, searchTerm, selectedCity, selectedParty, selectedRole, selectedArea, fuse]);

  return (
    <div className="space-y-4">
      {/* Sticky Search Header */}
      <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 space-y-3 sticky top-4 z-50 mx-1">
        
        {/* Row 1: Search + Refresh */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="🔍 搜尋..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
          </div>
          
          <button 
            onClick={handleRefresh}
            disabled={isPending}
            className="px-3 bg-blue-50 text-blue-700 rounded-lg font-bold text-xs flex flex-col items-center justify-center min-w-[60px] border border-blue-100 active:scale-95 transition-transform"
          >
            <span className={isPending ? "animate-spin text-lg" : "text-lg"}>🔄</span>
            <span className="mt-1">{isPending ? '...' : '更新'}</span>
          </button>
        </div>

        {/* Row 2: Filters (Grid Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
           {/* City Filter */}
           <div className="relative">
             <select 
               value={selectedCity} 
               onChange={(e) => setSelectedCity(e.target.value)}
               className="w-full pl-2 pr-6 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 appearance-none"
             >
               <option value="All">🌏 全台</option>
               {cities.map(city => (
                 <option key={city} value={city}>{city}</option>
               ))}
             </select>
             <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 text-xs">▼</div>
           </div>

           {/* Area Filter (Dynamic) */}
           <div className="relative">
             <select 
               value={selectedArea} 
               onChange={(e) => setSelectedArea(e.target.value)}
               disabled={selectedCity === 'All'}
               className={`w-full pl-2 pr-6 py-2 border border-gray-300 rounded-md text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-colors ${selectedCity === 'All' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 text-gray-800'}`}
               style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
             >
               <option value="All">📍 選區</option>
               {availableAreas.map(area => (
                 <option key={area} value={area}>
                    {/* Truncate very long options for display if needed, but browser handles dropdown width usually */}
                    {area}
                 </option>
               ))}
             </select>
             <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 text-xs">▼</div>
           </div>

           {/* Party Filter */}
           <div className="relative">
             <select 
               value={selectedParty} 
               onChange={(e) => setSelectedParty(e.target.value)}
               className="w-full pl-2 pr-6 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 appearance-none"
             >
               <option value="All">🏳️‍🌈 黨籍</option>
               {MAIN_PARTIES.map(party => (
                 <option key={party} value={party}>{party.replace('中國', '').replace('台灣', '')}</option>
               ))}
             </select>
             <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 text-xs">▼</div>
           </div>

           {/* Role Filter */}
           <div className="relative">
             <select 
               value={selectedRole} 
               onChange={(e) => setSelectedRole(e.target.value)}
               className="w-full pl-2 pr-6 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 appearance-none"
             >
               <option value="All">💼 職位</option>
               <option value="MAYOR">首長</option>
               <option value="LEGISLATOR">立委</option>
               <option value="BUREAU_HEAD">局處長</option>
               <option value="COUNCILOR">議員</option>
             </select>
             <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 text-xs">▼</div>
           </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6 px-2 pb-10">
        {totalCount === 0 ? (
          <div className="text-center py-20 opacity-40">
            <div className="text-6xl mb-4 grayscale">🧐</div>
            <p className="text-xl font-bold text-gray-400">沒有找到資料</p>
            <p className="text-sm mt-2 text-gray-400">請嘗試切換篩選條件</p>
          </div>
        ) : (
          <>
            {/* Sections... */}
            {groupedResults.mayors.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3 border-b pb-2 border-gray-100">
                  <span className="text-xl">🏛️</span> 
                  <h3 className="font-bold text-gray-800">縣市首長</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">{groupedResults.mayors.length}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {groupedResults.mayors.map(p => <PoliticianCard key={p.id} politician={p} />)}
                </div>
              </section>
            )}

            {groupedResults.bureau.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3 border-b pb-2 border-gray-100">
                  <span className="text-xl">💼</span> 
                  <h3 className="font-bold text-gray-800">局處首長</h3>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">{groupedResults.bureau.length}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {groupedResults.bureau.map(p => <PoliticianCard key={p.id} politician={p} />)}
                </div>
              </section>
            )}

            {groupedResults.legislators.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3 border-b pb-2 border-gray-100">
                  <span className="text-xl">📜</span> 
                  <h3 className="font-bold text-gray-800">立法委員</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">{groupedResults.legislators.length}</span>
                </div>
                
                {/* Group Legislators by City */}
                <div className="space-y-6">
                  {Object.entries(
                    groupedResults.legislators.reduce((acc, curr) => {
                      const city = curr.city || '不分區/其他';
                      if (!acc[city]) acc[city] = [];
                      acc[city].push(curr);
                      return acc;
                    }, {} as Record<string, typeof groupedResults.legislators>)
                  ).sort(([a], [b]) => {
                     // Custom sort order: 6 Capitals first, then others
                     const order = ['全國', '臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市'];
                     const idxA = order.indexOf(a);
                     const idxB = order.indexOf(b);
                     if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                     if (idxA !== -1) return -1;
                     if (idxB !== -1) return 1;
                     return a.localeCompare(b, 'zh-TW');
                  }).map(([city, politicians]) => (
                    <div key={city} className="pl-2 border-l-2 border-green-100">
                      <h4 className="text-sm font-bold text-gray-500 mb-2 pl-2 flex items-center">
                        📍 {city}
                        <span className="ml-2 text-xs font-normal bg-gray-100 px-1.5 rounded-full text-gray-500">{politicians.length}</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {politicians.map(p => <PoliticianCard key={p.id} politician={p} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {groupedResults.councilors.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3 border-b pb-2 border-gray-100">
                  <span className="text-xl">🗣️</span> 
                  <h3 className="font-bold text-gray-800">縣市議員</h3>
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-0.5 rounded-full">{groupedResults.councilors.length}</span>
                </div>
                
                {/* Group by Area (District) */}
                <div className="space-y-6">
                  {Object.entries(
                    groupedResults.councilors.reduce((acc, curr) => {
                      const area = curr.area || '其他區域';
                      if (!acc[area]) acc[area] = [];
                      acc[area].push(curr);
                      return acc;
                    }, {} as Record<string, typeof groupedResults.councilors>)
                  ).sort(([a], [b]) => getDistrictOrder(a) - getDistrictOrder(b))
                   .map(([area, politicians]) => (
                    <div key={area} className="pl-2 border-l-2 border-orange-100">
                      <h4 className="text-sm font-bold text-gray-500 mb-2 pl-2 flex items-center">
                        📍 {area}
                        <span className="ml-2 text-xs font-normal bg-gray-100 px-1.5 rounded-full text-gray-500">{politicians.length}</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {politicians.map(p => <PoliticianCard key={p.id} politician={p} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            <div className="text-center text-xs text-gray-300 pt-8">
              End of Results ({totalCount})
            </div>
          </>
        )}
      </div>
    </div>
  );
}
