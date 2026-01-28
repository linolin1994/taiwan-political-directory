// Scraper for Taiwan Mayors (County & City)
import { Politician } from '@/types';

// 六都首長與主要縣市首長名單 (Hardcoded for stability and speed)
// Updated: 2024-2026 Term
// Image URLs set to empty to force fallback icon (as requested due to broken links)
const MAYORS_DATA: Politician[] = [
  // 六都
  { id: 'TPE-MAYOR', name: '蔣萬安', role: 'MAYOR', city: '臺北市', party: '中國國民黨', title: '市長', photoUrl: '', lastUpdated: new Date().toISOString() },
  { id: 'NTPC-MAYOR', name: '侯友宜', role: 'MAYOR', city: '新北市', party: '中國國民黨', title: '市長', photoUrl: '', lastUpdated: new Date().toISOString() },
  { id: 'TYN-MAYOR', name: '張善政', role: 'MAYOR', city: '桃園市', party: '中國國民黨', title: '市長', photoUrl: '', lastUpdated: new Date().toISOString() },
  { id: 'TLC-MAYOR', name: '盧秀燕', role: 'MAYOR', city: '臺中市', party: '中國國民黨', title: '市長', photoUrl: '', lastUpdated: new Date().toISOString() },
  { id: 'TNN-MAYOR', name: '黃偉哲', role: 'MAYOR', city: '臺南市', party: '民主進步黨', title: '市長', photoUrl: '', lastUpdated: new Date().toISOString() },
  { id: 'KHH-MAYOR', name: '陳其邁', role: 'MAYOR', city: '高雄市', party: '民主進步黨', title: '市長', photoUrl: '', lastUpdated: new Date().toISOString() },
  
  // 其他縣市 (部分範例)
  // { id: 'HSZ-MAYOR', name: '高虹安', role: 'MAYOR', city: '新竹市', party: '台灣民眾黨', title: '市長', lastUpdated: new Date().toISOString() },
  // { id: 'HSC-MAYOR', name: '楊文科', role: 'MAYOR', city: '新竹縣', party: '中國國民黨', title: '縣長', lastUpdated: new Date().toISOString() },
  // { id: 'KEE-MAYOR', name: '謝國樑', role: 'MAYOR', city: '基隆市', party: '中國國民黨', title: '市長', lastUpdated: new Date().toISOString() },
];

export async function fetchMayors(): Promise<Politician[]> {
  // In a real app, we would scrape this, but for stability of "Six Capitals" request, we return static data.
  return Promise.resolve(MAYORS_DATA);
}
