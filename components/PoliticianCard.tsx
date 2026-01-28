import React from 'react';
import { Politician } from '@/types';
import { cn } from '@/lib/utils';

interface PoliticianCardProps {
  politician: Politician;
}

const PartyBadge = ({ party }: { party?: string }) => {
  // Safe default
  const safeParty = party || '無黨籍';
  
  let colorClass = 'bg-gray-100 text-gray-800 border-gray-200';
  let displayText = safeParty.replace('中國', '').replace('台灣', '');

  // Custom styling and text shortening
  if (safeParty.includes('國民黨')) {
    colorClass = 'bg-blue-100 text-blue-800 border-blue-200';
  } else if (safeParty.includes('民主進步黨') || safeParty.includes('民進黨')) {
    colorClass = 'bg-[#1B9431] text-white border-[#1B9431]'; // DPP Green
    displayText = '民進黨'; // Shorten for layout
  } else if (safeParty.includes('民眾黨')) {
    colorClass = 'bg-cyan-100 text-cyan-800 border-cyan-200';
  } else if (safeParty.includes('時代力量')) {
    colorClass = 'bg-yellow-100 text-yellow-800 border-yellow-200';
  } else if (safeParty.includes('新黨')) {
    colorClass = 'bg-yellow-50 text-yellow-600 border-yellow-200'; // New Party Yellow
  }

  return (
    <span className={cn("px-2 py-0.5 text-[10px] font-bold rounded-full border shrink-0", colorClass)}>
      {displayText}
    </span>
  );
};

export function PoliticianCard({ politician }: PoliticianCardProps) {
  const [imgError, setImgError] = React.useState(false);

  if (!politician) return null;

  const primaryLink = 
    politician.links?.website || 
    politician.links?.wiki || 
    `https://www.google.com/search?q=${encodeURIComponent((politician.name || '') + ' ' + (politician.title || ''))}`;

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <a 
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer h-full relative"
    >
      {/* 1. Top Image Section */}
      <div className="w-full aspect-[4/3] bg-gray-50 relative overflow-hidden flex items-center justify-center border-b border-gray-50">
        {!imgError && politician.photoUrl ? (
          <img 
            src={politician.photoUrl} 
            alt={politician.name || 'Politician'} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full text-gray-300 group-hover:text-gray-400 transition-colors">
            <span className="text-5xl mb-2">👤</span>
          </div>
        )}
        
        {/* Role Badge (Overlaid on Image Top-Right) */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-gray-700 rounded-full shadow-sm border border-gray-100">
          {politician.title}
        </span>
      </div>
      
      {/* 2. Content Section */}
      <div className="flex-1 p-4 flex flex-col gap-3">
        
        {/* Name & Party */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
             <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">
               {politician.name || 'Unknown'}
             </h3>
             {/* External Link Icon Hint */}
             <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </div>
          <div className="flex">
            <PartyBadge party={politician.party} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-50"></div>

        {/* Details: City & Area */}
        <div className="text-sm space-y-2 text-gray-600 flex-grow">
          {/* Location Row */}
          <div className="flex items-start gap-2">
            <span className="text-base shrink-0 mt-0.5">📍</span>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-base leading-tight">
                {politician.city}
              </span>
              {/* Detailed Area / Department */}
              <span className="text-gray-500 text-xs mt-1 leading-relaxed">
                {politician.department ? (
                   <span className="font-medium text-gray-700">{politician.department}</span>
                ) : (
                   politician.area
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent bar based on party color logic could go here, but keep it clean for now */}
      <div className="h-1 w-full bg-gray-50 group-hover:bg-blue-500/20 transition-colors"></div>
    </a>
  );
}
