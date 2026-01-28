
import { Politician } from '@/types';

// Source: Taoyuan City Government Personnel Department
// Last Updated: 2026-01-28 (from website data)

const TAOYUAN_BUREAU_DATA: Politician[] = [
    // Bureau Heads
    { id: 'TY-CIVIL', name: '劉思遠', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '民政局', lastUpdated: '2026-01-28' },
    { id: 'TY-EDU', name: '劉仲成', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '教育局', lastUpdated: '2026-01-28' },
    { id: 'TY-SOC', name: '陳寶民', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '社會局', lastUpdated: '2026-01-28' },
    { id: 'TY-LABOR', name: '李賢祥', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '勞動局', lastUpdated: '2026-01-28' },
    { id: 'TY-FIN', name: '歐美鐶', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '財政局', lastUpdated: '2026-01-28' },
    { id: 'TY-ECON', name: '張誠', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '經濟發展局', lastUpdated: '2026-01-28' },
    { id: 'TY-AGRI', name: '陳冠義', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '農業局', lastUpdated: '2026-01-28' },
    { id: 'TY-LAND', name: '蔡金鐘', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '地政局', lastUpdated: '2026-01-28' },
    { id: 'TY-URBAN', name: '江南志', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '都市發展局', lastUpdated: '2026-01-28' },
    { id: 'TY-WORKS', name: '汪在宙', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '工務局', lastUpdated: '2026-01-28' },
    { id: 'TY-WATER', name: '劉振宇', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '水務局', lastUpdated: '2026-01-28' },
    { id: 'TY-INDIG', name: '巴奈．母路', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '原住民族行政局', lastUpdated: '2026-01-28' },
    { id: 'TY-TRANS', name: '張新福', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '交通局', lastUpdated: '2026-01-28' },
    { id: 'TY-TOUR', name: '陳靜芳', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '觀光旅遊局', lastUpdated: '2026-01-28' },
    { id: 'TY-POLICE', name: '廖恆裕', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '警察局', lastUpdated: '2026-01-28' },
    { id: 'TY-HEALTH', name: '賈蔚', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '衛生局', lastUpdated: '2026-01-28' },
    { id: 'TY-ENV', name: '顏己喨', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '環境保護局', lastUpdated: '2026-01-28' },
    { id: 'TY-FIRE', name: '龔永信', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '消防局', lastUpdated: '2026-01-28' },
    { id: 'TY-CULT', name: '邱正生', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '文化局', lastUpdated: '2026-01-28' },
    { id: 'TY-TAX', name: '姚世昌', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '地方稅務局', lastUpdated: '2026-01-28' },
    { id: 'TY-LEGAL', name: '賴彌鼎', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '法務局', lastUpdated: '2026-01-28' },
    { id: 'TY-HAKKA', name: '范姜泰基', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '客家事務局', lastUpdated: '2026-01-28' },
    { id: 'TY-YOUTH', name: '侯佳齡', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '青年事務局', lastUpdated: '2026-01-28' },
    { id: 'TY-SPORT', name: '許彥輝', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '體育局', lastUpdated: '2026-01-28' },
    { id: 'TY-MRT', name: '劉慶豐', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '捷運工程局', lastUpdated: '2026-01-28' },
    { id: 'TY-WOMEN', name: '杜慈容', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '局長', department: '婦幼發展局', lastUpdated: '2026-01-28' },
    { id: 'TY-NEWS', name: '羅楚東', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '處長', department: '新聞處', lastUpdated: '2026-01-28' },
    { id: 'TY-SEC', name: '于建國', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '處長', department: '秘書處', lastUpdated: '2026-01-28' },
    { id: 'TY-PERS', name: '林妙貞', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '處長', department: '人事處', lastUpdated: '2026-01-28' },
    { id: 'TY-ACCT', name: '蔡進滿', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '處長', department: '主計處', lastUpdated: '2026-01-28' },
    { id: 'TY-ETHICS', name: '廖常新', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '處長', department: '政風處', lastUpdated: '2026-01-28' },
    { id: 'TY-SMART', name: '廖修武', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '主任委員', department: '智慧城鄉發展委員會', lastUpdated: '2026-01-28' },

    // District Mayors
    { id: 'TY-DIST-TAOYUAN', name: '許敏松', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '桃園區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-ZHONGLI', name: '李日強', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '中壢區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-PINGZHEN', name: '蕭巧如', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '平鎮區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-BADE', name: '蔡豊展', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '八德區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-YANGMEI', name: '施永恭', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '楊梅區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-DAXI', name: '徐景揚', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '大溪區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-LUZHU', name: '李岳壇', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '蘆竹區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-DAYUAN', name: '余誌松', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '大園區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-GUISHAN', name: '張嘉平', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '龜山區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-LONGTAN', name: '鄧昱綵', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '龍潭區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-XINWU', name: '鄭詩鈿', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '新屋區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-GUANYIN', name: '劉草典', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '觀音區公所', lastUpdated: '2026-01-28' },
    { id: 'TY-DIST-FUXING', name: '蘇佐璽', role: 'BUREAU_HEAD', city: '桃園市', party: '無黨籍', title: '區長', department: '復興區公所', lastUpdated: '2026-01-28' },
];

export async function fetchTaoyuanBureauHeads(): Promise<Politician[]> {
    return Promise.resolve(TAOYUAN_BUREAU_DATA);
}
