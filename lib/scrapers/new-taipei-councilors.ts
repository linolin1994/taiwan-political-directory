// Scraper for New Taipei City Councilors
// Strategy: Static Verified List (第4屆 - 2022-2026 Term)
// Source: Official New Taipei City Council website + User-verified data
// Data collected and verified: 2026-01-30

import { Politician } from '@/types';

const NEW_TAIPEI_COUNCILORS_DATA: Politician[] = [
    // 第一選區：淡水區、三芝區、石門區、八里區
    { id: 'NTPC-C-001', name: '陳偉杰', role: 'COUNCILOR', city: '新北市', area: '議員第一選區（淡水、三芝、石門、八里）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-002', name: '蔡錦賢', role: 'COUNCILOR', city: '新北市', area: '議員第一選區（淡水、三芝、石門、八里）', party: '無黨團結聯盟', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-003', name: '鄭宇恩', role: 'COUNCILOR', city: '新北市', area: '議員第一選區（淡水、三芝、石門、八里）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-004', name: '陳家琪', role: 'COUNCILOR', city: '新北市', area: '議員第一選區（淡水、三芝、石門、八里）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第二選區：五股區、泰山區、林口區
    { id: 'NTPC-C-005', name: '蔡淑君', role: 'COUNCILOR', city: '新北市', area: '議員第二選區（五股、泰山、林口）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-006', name: '陳明義', role: 'COUNCILOR', city: '新北市', area: '議員第二選區（五股、泰山、林口）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-007', name: '李宇翔', role: 'COUNCILOR', city: '新北市', area: '議員第二選區（五股、泰山、林口）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-008', name: '宋明宗', role: 'COUNCILOR', city: '新北市', area: '議員第二選區（五股、泰山、林口）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第三選區：新莊區
    { id: 'NTPC-C-009', name: '蔣根煌', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '中國國民黨', title: '議長', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-010', name: '蔡健棠', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-011', name: '戴湘儀', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-012', name: '鍾宏仁', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-013', name: '林秉宥', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-014', name: '翁震州', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-015', name: '陳世軒', role: 'COUNCILOR', city: '新北市', area: '議員第三選區（新莊）', party: '台灣民眾黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第四選區：三重區、蘆洲區
    { id: 'NTPC-C-016', name: '彭佳芸', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-017', name: '李翁月娥', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '無黨團結聯盟', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-018', name: '顏蔚慈', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-019', name: '王威元', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-020', name: '黃桂蘭', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-021', name: '邱婷蔚', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-022', name: '陳啟能', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-023', name: '李余典', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-024', name: '李倩萍', role: 'COUNCILOR', city: '新北市', area: '議員第四選區（三重、蘆洲）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第五選區：板橋區
    { id: 'NTPC-C-025', name: '林國春', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-026', name: '葉元之', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-027', name: '戴瑋姗', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-028', name: '黃淑君', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-029', name: '周勝考', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-030', name: '曾煥嘉', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-031', name: '山田摩衣', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-032', name: '劉美芳', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-033', name: '黃俊哲', role: 'COUNCILOR', city: '新北市', area: '議員第五選區（板橋）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第六選區：中和區
    { id: 'NTPC-C-034', name: '金瑞龍', role: 'COUNCILOR', city: '新北市', area: '議員第六選區（中和）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-035', name: '陳錦錠', role: 'COUNCILOR', city: '新北市', area: '議員第六選區（中和）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-036', name: '邱烽堯', role: 'COUNCILOR', city: '新北市', area: '議員第六選區（中和）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-037', name: '張維倩', role: 'COUNCILOR', city: '新北市', area: '議員第六選區（中和）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-038', name: '張嘉玲', role: 'COUNCILOR', city: '新北市', area: '議員第六選區（中和）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-039', name: '游輝宂', role: 'COUNCILOR', city: '新北市', area: '議員第六選區（中和）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第七選區：永和區
    { id: 'NTPC-C-040', name: '連斐璠', role: 'COUNCILOR', city: '新北市', area: '議員第七選區（永和）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-041', name: '陳鴻源', role: 'COUNCILOR', city: '新北市', area: '議員第七選區（永和）', party: '中國國民黨', title: '副議長', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-042', name: '許昭興', role: 'COUNCILOR', city: '新北市', area: '議員第七選區（永和）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第八選區：土城區、樹林區、三峽區、鶯歌區
    { id: 'NTPC-C-043', name: '林金結', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-044', name: '洪佳君', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-045', name: '卓冠廷', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-046', name: '彭一書', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-047', name: '江怡臻', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-048', name: '蘇泓欽', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '無黨籍', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-049', name: '廖宜琨', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-050', name: '林銘仁', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-051', name: '呂家愷', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-052', name: '黃永昌', role: 'COUNCILOR', city: '新北市', area: '議員第八選區（土城、樹林、三峽、鶯歌）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第九選區：新店區、深坑區、石碇區、坪林區、烏來區
    { id: 'NTPC-C-053', name: '黃心華', role: 'COUNCILOR', city: '新北市', area: '議員第九選區（新店、深坑、石碇、坪林、烏來）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-054', name: '陳儀君', role: 'COUNCILOR', city: '新北市', area: '議員第九選區（新店、深坑、石碇、坪林、烏來）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-055', name: '陳乃瑜', role: 'COUNCILOR', city: '新北市', area: '議員第九選區（新店、深坑、石碇、坪林、烏來）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-056', name: '劉哲彰', role: 'COUNCILOR', city: '新北市', area: '議員第九選區（新店、深坑、石碇、坪林、烏來）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-057', name: '陳永福', role: 'COUNCILOR', city: '新北市', area: '議員第九選區（新店、深坑、石碇、坪林、烏來）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第十選區：瑞芳區、平溪區、雙溪區、貢寮區
    { id: 'NTPC-C-058', name: '林裔綺', role: 'COUNCILOR', city: '新北市', area: '議員第十選區（瑞芳、平溪、雙溪、貢寮）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第十一選區：汐止區、萬里區、金山區
    { id: 'NTPC-C-059', name: '白珮茹', role: 'COUNCILOR', city: '新北市', area: '議員第十一選區（汐止、萬里、金山）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-060', name: '廖先翔', role: 'COUNCILOR', city: '新北市', area: '議員第十一選區（汐止、萬里、金山）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-061', name: '張錦豪', role: 'COUNCILOR', city: '新北市', area: '議員第十一選區（汐止、萬里、金山）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-062', name: '周雅玲', role: 'COUNCILOR', city: '新北市', area: '議員第十一選區（汐止、萬里、金山）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第十二選區：平地原住民（全市）
    { id: 'NTPC-C-063', name: '楊春妹', role: 'COUNCILOR', city: '新北市', area: '議員第十二選區（平地原住民）', party: '中國國民黨', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-064', name: '宋雨蓁', role: 'COUNCILOR', city: '新北市', area: '議員第十二選區（平地原住民）', party: '無黨籍', title: '市議員', lastUpdated: new Date().toISOString() },
    { id: 'NTPC-C-065', name: '蘇錦雄 Payen Talu', role: 'COUNCILOR', city: '新北市', area: '議員第十二選區（平地原住民）', party: '民主進步黨', title: '市議員', lastUpdated: new Date().toISOString() },

    // 第十三選區：山地原住民（全市）
    { id: 'NTPC-C-066', name: '馬見 Lahuy Ipin', role: 'COUNCILOR', city: '新北市', area: '議員第十三選區（山地原住民）', party: '無黨籍', title: '市議員', lastUpdated: new Date().toISOString() },
];

export async function fetchNewTaipeiCouncilors(): Promise<Politician[]> {
    return NEW_TAIPEI_COUNCILORS_DATA;
}
