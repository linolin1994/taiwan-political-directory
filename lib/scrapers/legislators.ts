import axios from 'axios';
import * as cheerio from 'cheerio';
import { Politician } from '@/types';

// Static mapping for 11th Regional Legislators (2024-2028)
// Source: CEC & Legislative Yuan
const DISTRICT_MAP: Record<string, { city: string; area: string }> = {
    // Taipei
    '吳思瑤': { city: '臺北市', area: '第一選區（北投、士林13里）' },
    '王世堅': { city: '臺北市', area: '第二選區（大同、士林38里）' },
    '王鴻薇': { city: '臺北市', area: '第三選區（中山、松山13里）' },
    '李彥秀': { city: '臺北市', area: '第四選區（內湖、南港）' },
    '吳沛憶': { city: '臺北市', area: '第五選區（萬華、中正21里）' },
    '羅智強': { city: '臺北市', area: '第六選區（大安）' },
    '徐巧芯': { city: '臺北市', area: '第七選區（信義、松山13里）' },
    '賴士葆': { city: '臺北市', area: '第八選區（文山、中正10里）' },
    // New Taipei
    '洪孟楷': { city: '新北市', area: '第一選區（石門、三芝、淡水、八里、林口、泰山）' },
    '林淑芬': { city: '新北市', area: '第二選區（五股、蘆洲、三重16里）' },
    '李坤城': { city: '新北市', area: '第三選區（三重103里）' },
    '吳秉叡': { city: '新北市', area: '第四選區（新莊75里）' },
    '蘇巧慧': { city: '新北市', area: '第五選區（樹林、鶯歌、新莊9里）' },
    '張宏陸': { city: '新北市', area: '第六選區（板橋西）' },
    '葉元之': { city: '新北市', area: '第七選區（板橋東）' },
    '張智倫': { city: '新北市', area: '第八選區（中和）' },
    '林德福': { city: '新北市', area: '第九選區（永和、中和17里）' },
    '吳琪銘': { city: '新北市', area: '第十選區（土城、三峽）' },
    '羅明才': { city: '新北市', area: '第十一選區（新店、深坑、石碇、坪林、烏來）' },
    '廖先翔': { city: '新北市', area: '第十二選區（汐止、金山、萬里、瑞芳、平溪、雙溪、貢寮）' },
    // Taoyuan
    '牛煦庭': { city: '桃園市', area: '第一選區（蘆竹、龜山、桃園15里）' },
    '涂權吉': { city: '桃園市', area: '第二選區（楊梅、新屋、大園、觀音）' },
    '魯明哲': { city: '桃園市', area: '第三選區（中壢73里）' },
    '萬美玲': { city: '桃園市', area: '第四選區（桃園66里）' },
    '呂玉玲': { city: '桃園市', area: '第五選區（平鎮、龍潭）' },
    '邱若華': { city: '桃園市', area: '第六選區（八德、大溪、復興、中壢12里）' },
    // Taichung
    '蔡其昌': { city: '臺中市', area: '第一選區（大甲、大安、外埔、清水、梧棲）' },
    '顏寬恒': { city: '臺中市', area: '第二選區（沙鹿、龍井、大肚、烏日、霧峰）' },
    '楊瓊瓔': { city: '臺中市', area: '第三選區（后里、神岡、大雅、潭子）' },
    '廖偉翔': { city: '臺中市', area: '第四選區（西屯、南屯）' },
    '黃健豪': { city: '臺中市', area: '第五選區（北屯、北區）' },
    '羅廷瑋': { city: '臺中市', area: '第六選區（西區、中區、東區、南區）' },
    '何欣純': { city: '臺中市', area: '第七選區（太平、大里）' },
    '江啟臣': { city: '臺中市', area: '第八選區（豐原、石岡、東勢、新社、和平）' },
    // Tainan
    '賴惠員': { city: '臺南市', area: '第一選區（後壁、白河、北門、學甲、鹽水、新營等）' },
    '郭國文': { city: '臺南市', area: '第二選區（七股、佳里、麻豆、官田、善化等）' },
    '陳亭妃': { city: '臺南市', area: '第三選區（安南、北區）' },
    '林宜瑾': { city: '臺南市', area: '第四選區（新市、永康、新化）' },
    '林俊憲': { city: '臺南市', area: '第五選區（安平、中西、南區、東區16里）' },
    '王定宇': { city: '臺南市', area: '第六選區（仁德、歸仁、關廟、龍崎、東區29里）' },
    // Kaohsiung
    '邱議瑩': { city: '高雄市', area: '第一選區（桃源、那瑪夏、甲仙、六龜等）' },
    '邱志偉': { city: '高雄市', area: '第二選區（茄萣、湖內、路竹、永安、岡山等）' },
    '李柏毅': { city: '高雄市', area: '第三選區（楠梓、左營）' },
    '林岱樺': { city: '高雄市', area: '第四選區（仁武、鳥松、大寮、林園）' },
    '李昆澤': { city: '高雄市', area: '第五選區（三民、苓雅8里）' },
    '黃捷': { city: '高雄市', area: '第六選區（鼓山、鹽埕、前金、新興、苓雅61里）' },
    '許智傑': { city: '高雄市', area: '第七選區（鳳山）' },
    '賴瑞隆': { city: '高雄市', area: '第八選區（旗津、前鎮、小港）' },
    // Keelung
    '林沛祥': { city: '基隆市', area: '全市' },
    // Hsinchu City
    '鄭正鈐': { city: '新竹市', area: '全市' },
    // Hsinchu County
    '徐欣瑩': { city: '新竹縣', area: '第一選區（竹北、新埔、關西等）' },
    '林思銘': { city: '新竹縣', area: '第二選區（竹東、寶山、北埔等）' },
    // Miaoli
    '陳超明': { city: '苗栗縣', area: '第一選區（竹南、後龍、造橋等）' },
    '邱鎮軍': { city: '苗栗縣', area: '第二選區（頭份、三灣、南庄等）' },
    // Changhua
    '陳秀寶': { city: '彰化縣', area: '第一選區（伸港、線西、和美、鹿港等）' },
    '黃秀芳': { city: '彰化縣', area: '第二選區（彰化市、花壇、芬園）' },
    '謝衣鳳': { city: '彰化縣', area: '第三選區（芳苑、二林、埔鹽、溪湖等）' },
    '陳素月': { city: '彰化縣', area: '第四選區（大村、員林、永靖等）' },
    // Nantou
    '馬文君': { city: '南投縣', area: '第一選區（埔里、草屯、中寮等）' },
    '游顥': { city: '南投縣', area: '第二選區（南投市、名間、集集等）' },
    // Yunlin
    '丁學忠': { city: '雲林縣', area: '第一選區（麥寮、臺西、東勢等）' },
    '劉建國': { city: '雲林縣', area: '第二選區（崙背、二崙、西螺等）' },
    // Chiayi City
    '王美惠': { city: '嘉義市', area: '全市' },
    // Chiayi County
    '蔡易餘': { city: '嘉義縣', area: '第一選區（六腳、東石、朴子等）' },
    '陳冠廷': { city: '嘉義縣', area: '第二選區（溪口、大林、梅山等）' },
    // Pingtung
    '鍾佳濱': { city: '屏東縣', area: '第一選區（屏東市、麟洛、九如等）' },
    '徐富癸': { city: '屏東縣', area: '第二選區（萬丹、泰武、竹田等）' },
    // Yilan
    '陳俊宇': { city: '宜蘭縣', area: '全縣' },
    // Hualien
    '傅崐萁': { city: '花蓮縣', area: '全縣' },
    // Taitung
    '黃建賓': { city: '臺東縣', area: '全縣' },
    // Penghu
    '楊曜': { city: '澎湖縣', area: '全縣' },
    // Kinmen
    '陳玉珍': { city: '金門縣', area: '全縣' },
    // Lienchiang
    '陳雪生': { city: '連江縣', area: '全縣' },
    // Indigenous
    '鄭天財': { city: '全國', area: '平地原住民' },
    'Sra．Kacaw': { city: '全國', area: '平地原住民' }, // Alias
    '陳瑩': { city: '全國', area: '平地原住民' },
    '黃仁': { city: '全國', area: '平地原住民' },
    '高金素梅': { city: '全國', area: '山地原住民' },
    '伍麗華': { city: '全國', area: '山地原住民' },
    'Saidhai．Tahovecahe': { city: '全國', area: '山地原住民' }, // Alias
    '盧縣一': { city: '全國', area: '山地原住民' },
};

export async function fetchLegislators(): Promise<Politician[]> {
  // Scrape Legislative Yuan Website - 11th Term Members
  const URL = 'https://www.ly.gov.tw/Pages/List.aspx?nodeid=109';

  try {
    const { data } = await axios.get(URL, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        },
        timeout: 10000, // 10 seconds timeout to prevent build hang
    });
    const $ = cheerio.load(data);
    const legislators: Politician[] = [];

    // Valid selector based on HTML inspection
    $('.six-legislatorAvatar').each((i, el) => {
        const linkEl = $(el).find('a');
        const link = linkEl.attr('href');
        
        // Name
        const nameEl = $(el).find('.legislatorname');
        const name = nameEl.text().trim();
        
        // Party (from icon alt text, e.g., "中國國民黨徽章")
        const partyImg = $(el).find('.six-party-icon');
        const partyAlt = partyImg.attr('alt') || '';
        let party = partyAlt.replace('徽章', '').trim();
        
        // Fix: "無" -> "無黨籍"
        if (party === '無' || !party) {
            party = '無黨籍';
        }
        
        // Photo
        const photoImg = $(el).find('img.img-thumbnail');
        const photoSrc = photoImg.attr('src');
        
        if (!name) return;

        // Determine City/Area from Mapping
        let city = '全國';
        let area = '不分區';
        
        // Check partial match for names with indigenous aliases (e.g. "鄭天財 Sra．Kacaw")
        // or exact match
        const mappedInfo = DISTRICT_MAP[name] || 
                           Object.entries(DISTRICT_MAP).find(([k, v]) => name.includes(k))?.[1];

        if (mappedInfo) {
            city = mappedInfo.city;
            area = mappedInfo.area;
        }

        legislators.push({
            id: `LY-11-${name}-${i}`,
            name: name,
            role: 'LEGISLATOR',
            city: city,
            area: area,
            party: party,
            title: '立法委員',
            photoUrl: photoSrc ? (photoSrc.startsWith('http') ? photoSrc : `https://www.ly.gov.tw${photoSrc}`) : undefined,
            links: {
                website: link ? `https://www.ly.gov.tw${link}` : undefined
            },
            lastUpdated: new Date().toISOString(),
        });
    });
    
    // De-duplicate based on name
    const uniqueLegislators = Array.from(new Map(legislators.map(item => [item.name, item])).values());
    
    return uniqueLegislators;

  } catch (error) {
    console.error('Error fetching legislators from HTML:', error);
    return [];
  }
}

