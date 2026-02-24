export interface Client {
  id: string;
  name: string;
  logo: string;
  typeTh: string;
  typeEn: string;
}

export const clients: Client[] = [
  {
    id: 'client-001',
    name: 'Sansiri',
    logo: 'SANSIRI',
    typeTh: 'อสังหาริมทรัพย์',
    typeEn: 'Real Estate',
  },
  {
    id: 'client-002',
    name: 'Central Group',
    logo: 'CENTRAL',
    typeTh: 'ห้างสรรพสินค้า',
    typeEn: 'Retail',
  },
  {
    id: 'client-003',
    name: 'Minor International',
    logo: 'MINOR',
    typeTh: 'โรงแรมและรีสอร์ต',
    typeEn: 'Hotels & Resorts',
  },
  {
    id: 'client-004',
    name: 'กรมโยธาธิการ',
    logo: 'DPT',
    typeTh: 'หน่วยงานราชการ',
    typeEn: 'Government',
  },
  {
    id: 'client-005',
    name: 'Land & Houses',
    logo: 'LH',
    typeTh: 'อสังหาริมทรัพย์',
    typeEn: 'Real Estate',
  },
  {
    id: 'client-006',
    name: 'Anantara',
    logo: 'ANANTARA',
    typeTh: 'โรงแรมหรู',
    typeEn: 'Luxury Hotels',
  },
];
