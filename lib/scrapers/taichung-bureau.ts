
import { Politician } from '@/types';

// Source: User provided list
const TAICHUNG_BUREAU_DATA: Politician[] = [
    // City Leadership
    // Mayor Lu Shiow-yen is already in mayors.ts
    { id: 'TXG-VICE-1', name: '黃國榮', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '副市長', lastUpdated: '2026-01-28' },
    { id: 'TXG-VICE-2', name: '賴淑惠', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '副市長', lastUpdated: '2026-01-28' },
    { id: 'TXG-VICE-3', name: '鄭照新', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '副市長', lastUpdated: '2026-01-28' },
    { id: 'TXG-SEC-GEN', name: '黃崇典', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '秘書長', lastUpdated: '2026-01-28' },
    { id: 'TXG-DEP-SEC-1', name: '張大春', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '副秘書長', lastUpdated: '2026-01-28' },
    { id: 'TXG-DEP-SEC-2', name: '林育鴻', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '副秘書長', lastUpdated: '2026-01-28' },

    // Bureau Heads
    { id: 'TXG-SEC', name: '謝佳蓁', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '處長', department: '秘書處', lastUpdated: '2026-01-28' },
    { id: 'TXG-CIVIL', name: '吳世瑋', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '民政局', lastUpdated: '2026-01-28' }, // Note: 代理
    { id: 'TXG-FIN', name: '游麗玲', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '財政局', lastUpdated: '2026-01-28' },
    { id: 'TXG-EDU', name: '蔣偉民', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '教育局', lastUpdated: '2026-01-28' },
    { id: 'TXG-ECON', name: '張峯源', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '經濟發展局', lastUpdated: '2026-01-28' },
    { id: 'TXG-CONST', name: '陳大田', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '建設局', lastUpdated: '2026-01-28' }, // Note: 代理
    { id: 'TXG-TRANS', name: '葉昭甫', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '交通局', lastUpdated: '2026-01-28' },
    { id: 'TXG-URBAN', name: '李正偉', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '都市發展局', lastUpdated: '2026-01-28' }, // Note: 代理
    { id: 'TXG-WATER', name: '范世億', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '水利局', lastUpdated: '2026-01-28' },
    { id: 'TXG-AGRI', name: '李逸安', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '農業局', lastUpdated: '2026-01-28' }, // Note: 代理
    { id: 'TXG-TOUR', name: '陳美秀', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '觀光旅遊局', lastUpdated: '2026-01-28' },
    { id: 'TXG-SOC', name: '廖靜芝', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '社會局', lastUpdated: '2026-01-28' },
    { id: 'TXG-LABOR', name: '林淑媛', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '勞工局', lastUpdated: '2026-01-28' },
    { id: 'TXG-POLICE', name: '吳敬田', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '警察局', lastUpdated: '2026-01-28' },
    { id: 'TXG-FIRE', name: '孫福佑', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '消防局', lastUpdated: '2026-01-28' },
    { id: 'TXG-HEALTH', name: '曾梓展', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '衛生局', lastUpdated: '2026-01-28' },
    { id: 'TXG-ENV', name: '吳盛忠', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '環境保護局', lastUpdated: '2026-01-28' },
    { id: 'TXG-CULT', name: '陳佳君', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '文化局', lastUpdated: '2026-01-28' }, // Note: 代理
    { id: 'TXG-LAND', name: '曾國鈞', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '地政局', lastUpdated: '2026-01-28' },
    { id: 'TXG-LEGAL', name: '李善植', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '法制局', lastUpdated: '2026-01-28' },
    { id: 'TXG-NEWS', name: '欒治誼', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '新聞局', lastUpdated: '2026-01-28' },
    { id: 'TXG-TAX', name: '沈政安', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '地方稅務局', lastUpdated: '2026-01-28' },
    { id: 'TXG-SPORT', name: '游志祥', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '運動局', lastUpdated: '2026-01-28' },
    { id: 'TXG-DIGITAL', name: '林谷隆', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '數位發展局', lastUpdated: '2026-01-28' },
    { id: 'TXG-MRT', name: '蘇瑞文', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '局長', department: '捷運工程局', lastUpdated: '2026-01-28' },
    { id: 'TXG-ACCT', name: '林淑勤', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '處長', department: '主計處', lastUpdated: '2026-01-28' },
    { id: 'TXG-PERS', name: '陳月春', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '處長', department: '人事處', lastUpdated: '2026-01-28' },
    { id: 'TXG-ETHICS', name: '林煥淳', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '處長', department: '政風處', lastUpdated: '2026-01-28' },
    { id: 'TXG-RDEC', name: '林鼎超', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '主任委員', department: '研究發展考核委員會', lastUpdated: '2026-01-28' },
    { id: 'TXG-INDIG', name: '楊馨怡', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '主任委員', department: '原住民族事務委員會', lastUpdated: '2026-01-28' },
    { id: 'TXG-HAKKA', name: '江俊龍', role: 'BUREAU_HEAD', city: '臺中市', party: '無黨籍', title: '主任委員', department: '客家事務委員會', lastUpdated: '2026-01-28' },
];

export async function fetchTaichungBureauHeads(): Promise<Politician[]> {
    return Promise.resolve(TAICHUNG_BUREAU_DATA);
}
