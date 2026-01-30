import React from 'react';
import SearchInterface from '@/components/SearchInterface';
import { fetchLegislators } from '@/lib/scrapers/legislators';
import { fetchMayors } from '@/lib/scrapers/mayors';
import { fetchTaipeiBureauHeads } from '@/lib/scrapers/taipei-bureau';
import { fetchNewTaipeiBureauHeads } from '@/lib/scrapers/new-taipei-bureau';
import { fetchTaoyuanBureauHeads } from '@/lib/scrapers/taoyuan-bureau';
import { fetchTaichungBureauHeads } from '@/lib/scrapers/taichung-bureau';
import { fetchTainanBureauHeads } from '@/lib/scrapers/tainan-bureau';
import { fetchKaohsiungBureauHeads } from '@/lib/scrapers/kaohsiung-bureau';
import { fetchTaipeiCouncilors } from '@/lib/scrapers/taipei-councilors';
import { fetchNewTaipeiCouncilors } from '@/lib/scrapers/new-taipei-councilors';
import { Politician } from '@/types';

export const revalidate = 86400;

export default async function Home() {
  // Use Promise.allSettled to prevent one failure from crashing the entire page build
  const results = await Promise.allSettled([
    fetchLegislators(),
    fetchMayors(),
    fetchTaipeiBureauHeads(),
    fetchNewTaipeiBureauHeads(),
    fetchTaoyuanBureauHeads(),
    fetchTaichungBureauHeads(),
    fetchTainanBureauHeads(),
    fetchKaohsiungBureauHeads(),
    fetchTaipeiCouncilors(),
    fetchNewTaipeiCouncilors(),
  ]);

  // Helper to extract data or return empty array on failure
  const getData = <T,>(result: PromiseSettledResult<T[]>) => {
    if (result.status === 'fulfilled') return result.value;
    console.error('Data fetch failed:', result.reason);
    return [];
  };

  const [
    legislators,
    mayors,
    taipeiHeads,
    newTaipeiHeads,
    taoyuanHeads,
    taichungHeads,
    tainanHeads,
    kaohsiungHeads,
    taipeiCouncilors,
    newTaipeiCouncilors
  ] = results.map(getData);

  const allPoliticians = [
    ...(mayors as Politician[]),
    ...(legislators as Politician[]),
    ...(taipeiHeads as Politician[]),
    ...(newTaipeiHeads as Politician[]),
    ...(taoyuanHeads as Politician[]),
    ...(taichungHeads as Politician[]),
    ...(tainanHeads as Politician[]),
    ...(kaohsiungHeads as Politician[]),
    ...(taipeiCouncilors as Politician[]),
    ...(newTaipeiCouncilors as Politician[])
  ];

  return (
    <div className="py-4 space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          台灣政要通
        </h1>
        <p className="text-sm text-muted-foreground">
          收錄 {allPoliticians.length} 位公職人員資料
        </p>
      </div>

      <SearchInterface initialData={allPoliticians} />
    </div>
  );
}
