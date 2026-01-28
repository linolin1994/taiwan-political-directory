export type Role = 'MAYOR' | 'COUNCILOR' | 'LEGISLATOR' | 'BUREAU_HEAD';

export interface Politician {
  id: string; // Unique ID (e.g., "TPE-MAYOR-CHIANG", "LY-11-01")
  name: string;
  role: Role;
  city: string; // e.g., "臺北市", "全國" (for at-large legislators)
  area?: string; // e.g., "第1選區", "平地原住民"
  party: string; // e.g., "中國國民黨", "民主進步黨", "台灣民眾黨", "無黨籍"
  title: string; // e.g., "市長", "局長", "議員", "立法委員"
  department?: string; // e.g., "教育局" (Only for BUREAU_HEAD)
  photoUrl?: string;
  contact?: {
    phone?: string;
    address?: string;
    email?: string;
  };
  links?: {
    website?: string;
    facebook?: string;
    wiki?: string;
  };
  lastUpdated: string; // ISO date string
}

export interface CityData {
  name: string;
  code: string; // e.g., "TPE", "NTPC"
  mayor?: Politician;
  bureauHeads: Politician[];
  councilors: Politician[];
  legislators: Politician[]; // Legislators representing this area
}
