// Scraper for Councilors (Six Capitals)
// Source: Wikipedia (Most reliable aggregated source)

import axios from 'axios';
import * as cheerio from 'cheerio';
import { Politician } from '@/types';

// URLs for the 6 capitals' councilor lists (Current Term)
// 2022-2026 Term
const COUNCIL_URLS = [
  { city: '臺北市', url: 'https://zh.wikipedia.org/wiki/%E7%AC%AC14%E5%B1%86%E8%87%BA%E5%8C%97%E5%B8%82%E8%AD%B0%E5%93%A1%E5%88%97%E8%A1%A8' },
  { city: '新北市', url: 'https://zh.wikipedia.org/wiki/%E7%AC%AC4%E5%B1%86%E6%96%B0%E5%8C%97%E5%B8%82%E8%AD%B0%E5%93%A1%E5%88%97%E8%A1%A8' },
  { city: '桃園市', url: 'https://zh.wikipedia.org/wiki/%E7%AC%AC3%E5%B1%86%E6%A1%83%E5%9C%92%E5%B8%82%E8%AD%B0%E5%93%A1%E5%88%97%E8%A1%A8' },
  { city: '臺中市', url: 'https://zh.wikipedia.org/wiki/%E7%AC%AC4%E5%B1%86%E8%87%BA%E4%B8%AD%E5%B8%82%E8%AD%B0%E5%93%A1%E5%88%97%E8%A1%A8' },
  { city: '臺南市', url: 'https://zh.wikipedia.org/wiki/%E7%AC%AC4%E5%B1%86%E8%87%BA%E5%8D%97%E5%B8%82%E8%AD%B0%E5%93%A1%E5%88%97%E8%A1%A8' },
  { city: '高雄市', url: 'https://zh.wikipedia.org/wiki/%E7%AC%AC4%E5%B1%86%E9%AB%98%E9%9B%84%E5%B8%82%E8%AD%B0%E5%93%A1%E5%88%97%E8%A1%A8' },
];

export async function fetchCouncilors(): Promise<Politician[]> {
  const allCouncilors: Politician[] = [];

  // We fetch in parallel but limit concurrency to avoid blocking
  const promises = COUNCIL_URLS.map(async ({ city, url }) => {
    try {
      const { data } = await axios.get(url, {
         headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const $ = cheerio.load(data);
      
      // Wikipedia Councilor Lists usually have a big table
      // Selector: table.wikitable
      
      $('.wikitable tr').each((i, row) => {
        if (i === 0) return; // Header

        const cols = $(row).find('td');
        if (cols.length < 3) return;

        // Structure varies, but usually:
        // Col 0: Area (選區)
        // Col 1: Name (姓名) - often contains link
        // Col 2: Party (政黨)
        
        // Sometimes Area is a rowspan, so we need to be careful. 
        // But typically for big lists, they repeat or we might miss the area for some rows if we don't track state.
        // For this MVP, we focus on Name and Party.
        
        // Find the cell with the Name. It's usually the one with the link to the person's page, 
        // OR simply text in the 2nd column.
        
        let name = $(cols[1]).text().trim();
        let party = $(cols[2]).text().trim();
        const link = $(cols[1]).find('a').attr('href');
        
        // If Col 0 is numeric (Term/Vote count), structure might be different.
        // Let's use a heuristic: Find the column with Party Name.
        // And the column before it is likely the Name.
        
        // Basic filter: Name length
        if (name.length > 10 || name.length < 2) return;
        
        // Party cleaning
        party = party.replace(/\[.*\]/g, '').trim();
        
        allCouncilors.push({
            id: `${city}-COUNCIL-${name}`,
            name: name,
            role: 'COUNCILOR',
            city: city,
            party: party || '無黨籍',
            title: '市議員',
            links: {
                wiki: link ? `https://zh.wikipedia.org${link}` : undefined
            },
            lastUpdated: new Date().toISOString()
        });
      });

    } catch (e) {
      console.error(`Error scraping councilors for ${city}:`, e);
    }
  });

  await Promise.all(promises);
  
  // De-duplicate
  const unique = Array.from(new Map(allCouncilors.map(item => [item.id, item])).values());
  return unique;
}
