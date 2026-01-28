
import { Politician } from '@/types';

// Source: User provided list (Personnel Department 1150119)
const KEELUNG_BUREAU_DATA: Politician[] = [
    // City Leadership (Mayor moved to mayors.ts to avoid duplication)
    { id: 'KLU-VICE', name: '邱佩琳', role: 'BUREAU_HEAD', city: '基隆市', party: '台灣民眾黨', title: '副市長', lastUpdated: '2026-01-19' },
    { id: 'KLU-SEC-GEN', name: '方定安', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '秘書長', lastUpdated: '2026-01-19' },

    // Secretariat
    { id: 'KLU-ADV-1', name: '楊桂杰', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '參議', department: '秘書長室', lastUpdated: '2026-01-19' },
    { id: 'KLU-ADV-2', name: '郭憲平', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '參議', department: '秘書長室', lastUpdated: '2026-01-19' },
    { id: 'KLU-ADV-3', name: '張元良', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '參議', department: '秘書長室', lastUpdated: '2026-01-19' },
    { id: 'KLU-ADV-4', name: '陳新埤', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '參議', department: '秘書長室', lastUpdated: '2026-01-19' },
    { id: 'KLU-ADV-5', name: '劉美蘭', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '參議', department: '秘書長室', lastUpdated: '2026-01-19' },
    { id: 'KLU-ADV-6', name: '楊華中', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '參議', department: '秘書長室', lastUpdated: '2026-01-19' },
    { id: 'KLU-CPO', name: '莊惠媛', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '消保官', department: '秘書長室', lastUpdated: '2026-01-19' },

    // Departments
    { id: 'KLU-CIVIL', name: '呂謦煒', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '民政處', lastUpdated: '2026-01-19' },
    { id: 'KLU-FIN', name: '謝妙蓮', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '財政處', lastUpdated: '2026-01-19' },
    { id: 'KLU-IND', name: '蔡馥嚀', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '產業發展處', lastUpdated: '2026-01-19' },
    { id: 'KLU-EDU', name: '徐嬿立', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '教育處', lastUpdated: '2026-01-19' },
    { id: 'KLU-WORKS', name: '簡翊哲', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '工務處', lastUpdated: '2026-01-19' },
    { id: 'KLU-TRANS', name: '陳耀川', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '交通處', lastUpdated: '2026-01-19' },
    { id: 'KLU-URBAN', name: '謝孝昆', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '都市發展處', lastUpdated: '2026-01-19' },
    { id: 'KLU-SOC', name: '楊玉欣', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '社會處', lastUpdated: '2026-01-19' },
    { id: 'KLU-LAND', name: '謝旻成', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '地政處', lastUpdated: '2026-01-19' },
    { id: 'KLU-GEN', name: '陳瑋', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '綜合發展處', lastUpdated: '2026-01-19' },
    { id: 'KLU-CHILD', name: '吳雨潔', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '兒童及少年事務處', lastUpdated: '2026-01-19' },
    { id: 'KLU-PERS', name: '林燕菲', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '人事處', lastUpdated: '2026-01-19' },
    { id: 'KLU-ETHICS', name: '李國正', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '政風處', lastUpdated: '2026-01-19' },
    { id: 'KLU-ACCT', name: '林玉敏', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '主計處', lastUpdated: '2026-01-19' },
    
    // Agencies
    { id: 'KLU-POLICE', name: '林信雄', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '局長', department: '警察局', lastUpdated: '2026-01-19' },
    { id: 'KLU-FIRE', name: '游家懿', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '局長', department: '消防局', lastUpdated: '2026-01-19' },
    { id: 'KLU-HEALTH', name: '張賢政', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '局長', department: '衛生局', lastUpdated: '2026-01-19' },
    { id: 'KLU-CULTURE', name: '江亭玫', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '局長', department: '文化觀光局', lastUpdated: '2026-01-19' },
    { id: 'KLU-ENV', name: '馬仲豪', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '局長', department: '環保局', lastUpdated: '2026-01-19' },
    { id: 'KLU-TAX', name: '歐秋霞', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '局長', department: '稅務局', lastUpdated: '2026-01-19' },
    { id: 'KLU-BUS', name: '鍾惠存', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '處長', department: '公車處', lastUpdated: '2026-01-19' },
    { id: 'KLU-HOSP', name: '張賢政', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '代理院長', department: '市立醫院', lastUpdated: '2026-01-19' },

    // District Offices
    { id: 'KLU-DIST-ZN', name: '傅俊昇', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '中正區公所', lastUpdated: '2026-01-19' },
    { id: 'KLU-DIST-XY', name: '陳盈宇', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '信義區公所', lastUpdated: '2026-01-19' },
    { id: 'KLU-DIST-RA', name: '李宗奇', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '仁愛區公所', lastUpdated: '2026-01-19' },
    { id: 'KLU-DIST-ZS', name: '陳錫洺', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '中山區公所', lastUpdated: '2026-01-19' },
    { id: 'KLU-DIST-AL', name: '汪海淙', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '安樂區公所', lastUpdated: '2026-01-19' },
    { id: 'KLU-DIST-NN', name: '陳得林', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '暖暖區公所', lastUpdated: '2026-01-19' },
    { id: 'KLU-DIST-QD', name: '林賢家', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '區長', department: '七堵區公所', lastUpdated: '2026-01-19' },
    
    // Other Offices
    { id: 'KLU-ANIMAL', name: '陳柏廷', role: 'BUREAU_HEAD', city: '基隆市', party: '無黨籍', title: '所長', department: '動物保護防疫所', lastUpdated: '2026-01-19' },
];

export async function fetchKeelungBureauHeads(): Promise<Politician[]> {
    return Promise.resolve(KEELUNG_BUREAU_DATA);
}
