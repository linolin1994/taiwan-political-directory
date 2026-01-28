
import { Politician } from '@/types';

// Source: Tainan City Government Website
// Scraped at: 2026-01-28
const TAINAN_BUREAU_DATA: Politician[] = [
    // Secretariat
    { id: 'TNN-SEC', name: '黃國照', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '處長', department: '秘書處', lastUpdated: '2026-01-28' },
    { id: 'TNN-LEGAL', name: '楊璿圓', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '處長', department: '法制處', lastUpdated: '2026-01-28' },
    { id: 'TNN-NEWS', name: '蘇恩恩', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '處長', department: '新聞及國際關係處', lastUpdated: '2026-01-28' },
    { id: 'TNN-INDIG', name: '白惠蘭', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '主任委員', department: '原住民族事務委員會', lastUpdated: '2026-01-28' },
    { id: 'TNN-PERS', name: '游梅子', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '處長', department: '人事處', lastUpdated: '2026-01-28' },
    { id: 'TNN-HAKKA', name: '陳新裕', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '主任委員', department: '客家事務委員會', lastUpdated: '2026-01-28' },
    { id: 'TNN-ACCT', name: '李錫東', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '處長', department: '主計處', lastUpdated: '2026-01-28' },
    { id: 'TNN-ETHICS', name: '張堯星', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '處長', department: '政風處', lastUpdated: '2026-01-28' },
    { id: 'TNN-RDEC', name: '王效文', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '主任委員', department: '研究發展考核委員會', lastUpdated: '2026-01-28' },

    // Departments
    { id: 'TNN-CIVIL', name: '姜淋煌', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '民政局', lastUpdated: '2026-01-28' },
    { id: 'TNN-EDU', name: '鄭新輝', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '教育局', lastUpdated: '2026-01-28' },
    { id: 'TNN-AGRI', name: '李芳林', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '農業局', lastUpdated: '2026-01-28' },
    { id: 'TNN-ECON', name: '張婷媛', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '經濟發展局', lastUpdated: '2026-01-28' },
    { id: 'TNN-TOUR', name: '林國華', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '觀光旅遊局', lastUpdated: '2026-01-28' },
    { id: 'TNN-WORKS', name: '陳世仁', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '工務局', lastUpdated: '2026-01-28' },
    { id: 'TNN-WATER', name: '邱忠川', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '水利局', lastUpdated: '2026-01-28' },
    { id: 'TNN-SOC', name: '郭乃文', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '社會局', lastUpdated: '2026-01-28' },
    { id: 'TNN-LABOR', name: '王鑫基', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '勞工局', lastUpdated: '2026-01-28' },
    { id: 'TNN-LAND', name: '陳淑美', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '地政局', lastUpdated: '2026-01-28' },
    { id: 'TNN-URBAN', name: '林榮川', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '都市發展局', lastUpdated: '2026-01-28' },
    { id: 'TNN-CULT', name: '黃雅玲', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '文化局', lastUpdated: '2026-01-28' },
    { id: 'TNN-TRANS', name: '王銘德', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '交通局', lastUpdated: '2026-01-28' },
    { id: 'TNN-HEALTH', name: '李翠鳳', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '衛生局', lastUpdated: '2026-01-28' },
    { id: 'TNN-ENV', name: '許仁澤', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '環境保護局', lastUpdated: '2026-01-28' },
    { id: 'TNN-POLICE', name: '林國清', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '警察局', lastUpdated: '2026-01-28' },
    { id: 'TNN-FIRE', name: '楊宗林', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '消防局', lastUpdated: '2026-01-28' },
    { id: 'TNN-TAX', name: '李建賢', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '財政稅務局', lastUpdated: '2026-01-28' },
    { id: 'TNN-SPORT', name: '陳良乾', role: 'BUREAU_HEAD', city: '臺南市', party: '無黨籍', title: '局長', department: '體育局', lastUpdated: '2026-01-28' },
];

export async function fetchTainanBureauHeads(): Promise<Politician[]> {
    return Promise.resolve(TAINAN_BUREAU_DATA);
}
