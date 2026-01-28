
import { Politician } from '@/types';

// Source: Kaohsiung City Government Personnel Department
// Scraped at: 2026-01-28 from https://kpdforum.kcg.gov.tw/Manager2/Gov_Manager_Info.aspx

const KAOHSIUNG_BUREAU_DATA: Politician[] = [
    // City Leadership
    // Mayor Chen Chi-mai is already in mayors.ts
    { id: 'KHH-VICE-1', name: '林欽榮', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '副市長', lastUpdated: '2026-01-28' },
    { id: 'KHH-VICE-2', name: '羅達生', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '副市長', lastUpdated: '2026-01-28' },
    { id: 'KHH-VICE-3', name: '李懷仁', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '副市長', lastUpdated: '2026-01-28' },
    { id: 'KHH-SEC-GEN', name: '郭添貴', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '秘書長', lastUpdated: '2026-01-28' },
    { id: 'KHH-DEP-SEC-1', name: '王啓川', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '副秘書長', lastUpdated: '2026-01-28' },
    { id: 'KHH-DEP-SEC-2', name: '王宏榮', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '副秘書長', lastUpdated: '2026-01-28' },
    { id: 'KHH-DEP-SEC-3', name: '張家興', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '副秘書長', lastUpdated: '2026-01-28' },
    
    // Departments
    { id: 'KHH-ADMIN', name: '張硯卿', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '處長', department: '行政暨國際處', lastUpdated: '2026-01-28' },
    { id: 'KHH-CIVIL', name: '閻青智', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '民政局', lastUpdated: '2026-01-28' },
    { id: 'KHH-FIN', name: '陳勇勝', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '財政局', lastUpdated: '2026-01-28' },
    { id: 'KHH-EDU', name: '吳立森', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '教育局', lastUpdated: '2026-01-28' },
    { id: 'KHH-ECON', name: '廖泰翔', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '經濟發展局', lastUpdated: '2026-01-28' },
    { id: 'KHH-OCEAN', name: '石慶豐', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '海洋局', lastUpdated: '2026-01-28' },
    { id: 'KHH-AGRI', name: '姚志旺', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '農業局', lastUpdated: '2026-01-28' },
    { id: 'KHH-TOUR', name: '高閔琳', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '觀光局', lastUpdated: '2026-01-28' },
    { id: 'KHH-URBAN', name: '吳文彥', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '都市發展局', lastUpdated: '2026-01-28' },
    { id: 'KHH-WORKS', name: '楊欽富', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '工務局', lastUpdated: '2026-01-28' },
    { id: 'KHH-WATER', name: '蔡易勲', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '代理局長', department: '水利局', lastUpdated: '2026-01-28' },
    { id: 'KHH-SOC', name: '蔡宛芬', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '社會局', lastUpdated: '2026-01-28' },
    { id: 'KHH-LABOR', name: '江健興', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '勞工局', lastUpdated: '2026-01-28' },
    { id: 'KHH-POLICE', name: '趙瑞華', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '警察局', lastUpdated: '2026-01-28' },
    { id: 'KHH-FIRE', name: '王志平', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '消防局', lastUpdated: '2026-01-28' },
    { id: 'KHH-HEALTH', name: '黃志中', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '衛生局', lastUpdated: '2026-01-28' },
    { id: 'KHH-ENV', name: '張瑞琿', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '環保局', lastUpdated: '2026-01-28' },
    { id: 'KHH-MRT', name: '吳嘉昌', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '捷運工程局', lastUpdated: '2026-01-28' },
    { id: 'KHH-CULT', name: '王文翠', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '文化局', lastUpdated: '2026-01-28' },
    { id: 'KHH-TRANS', name: '張淑娟', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '交通局', lastUpdated: '2026-01-28' },
    { id: 'KHH-LEGAL', name: '王世芳', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '法制局', lastUpdated: '2026-01-28' },
    { id: 'KHH-LAND', name: '陳冠福', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '地政局', lastUpdated: '2026-01-28' },
    { id: 'KHH-NEWS', name: '項賓和', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '新聞局', lastUpdated: '2026-01-28' },
    { id: 'KHH-DRUG', name: '陳盈秀', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '毒品防制局', lastUpdated: '2026-01-28' },
    { id: 'KHH-SPORT', name: '侯尊堯', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '運動發展局', lastUpdated: '2026-01-28' },
    { id: 'KHH-YOUTH', name: '林楷軒', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '局長', department: '青年局', lastUpdated: '2026-01-28' },
    { id: 'KHH-RDEC', name: '陳博洲', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '主任委員', department: '研究發展考核委員會', lastUpdated: '2026-01-28' },
    { id: 'KHH-INDIG', name: '洪羽珊', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '主任委員', department: '原住民事務委員會', lastUpdated: '2026-01-28' },
    { id: 'KHH-HAKKA', name: '楊瑞霞', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '主任委員', department: '客家事務委員會', lastUpdated: '2026-01-28' },
    { id: 'KHH-ACCT', name: '林順裕', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '處長', department: '主計處', lastUpdated: '2026-01-28' },
    { id: 'KHH-PERS', name: '康人方', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '處長', department: '人事處', lastUpdated: '2026-01-28' },
    { id: 'KHH-ETHICS', name: '歐建志', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '處長', department: '政風處', lastUpdated: '2026-01-28' },
    { id: 'KHH-OU', name: '陳月端', role: 'BUREAU_HEAD', city: '高雄市', party: '無黨籍', title: '校長', department: '高雄市立空中大學', lastUpdated: '2026-01-28' },
];

export async function fetchKaohsiungBureauHeads(): Promise<Politician[]> {
    return Promise.resolve(KAOHSIUNG_BUREAU_DATA);
}
