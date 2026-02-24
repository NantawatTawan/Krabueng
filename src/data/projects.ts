export interface Project {
  id: string;
  slug: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  locationTh: string;
  locationEn: string;
  area: number;
  year: number;
  type: 'private' | 'government';
  patternType: string;
  images: string[];
  highlightsTh: string[];
  highlightsEn: string[];
}

export const projects: Project[] = [
  {
    id: '001',
    slug: 'villa-bangna-bangkok',
    titleTh: 'วิลล่าหรู ส่วนพลู บางนา',
    titleEn: 'Luxury Villa Patio - Bang Na, Bangkok',
    descriptionTh: 'โครงการออกแบบและติดตั้งพื้นคอนกรีตแสตมป์สำหรับห้องนั่งเล่นและพื้นลานชั้นล่างของวิลล่าหรูที่มีพื้นที่กว้างขวาง',
    descriptionEn: 'A comprehensive stamped concrete installation for a luxury villa featuring living spaces and expansive patio areas with intricate stone patterns.',
    locationTh: 'บางนา, กรุงเทพมหานคร',
    locationEn: 'Bang Na, Bangkok',
    area: 450,
    year: 2024,
    type: 'private',
    patternType: 'Ashlar Cut Stone',
    images: [
      'https://picsum.photos/600/400?random=101',
      'https://picsum.photos/600/400?random=102',
      'https://picsum.photos/600/400?random=103'
    ],
    highlightsTh: ['ลายศิลปะแบบเก่าเก่าแกประเทศอิตาลี', 'ขนาด 450 ตร.ม.', 'สีธรรมชาติแบบดินหินทราย'],
    highlightsEn: ['Italian Ashlar pattern design', '450 sq.m. area', 'Natural sand and stone tones']
  },
  {
    id: '002',
    slug: 'resort-huahin',
    titleTh: 'รีสอร์ตท่องเที่ยว หัวหิน',
    titleEn: 'Beach Resort - Hua Hin',
    descriptionTh: 'พื้นคอนกรีตแสตมป์ในพื้นที่สาธารณะของรีสอร์ทท่องเที่ยวสำหรับพื้นลานนั่งเล่น สระว่ายน้ำ และเส้นทางเดิน',
    descriptionEn: 'Stamped concrete surfaces for a beach resort featuring lounge areas, pool surrounds, and pathways with decorative stone patterns.',
    locationTh: 'หัวหิน, ประจวบคีรีขันธ์',
    locationEn: 'Hua Hin, Prachuap Khiri Khan',
    area: 680,
    year: 2024,
    type: 'private',
    patternType: 'Random Stone',
    images: [
      'https://picsum.photos/600/400?random=104',
      'https://picsum.photos/600/400?random=105',
      'https://picsum.photos/600/400?random=106'
    ],
    highlightsTh: ['ลายหินแบบสุ่ม', 'พื้นที่ 680 ตร.ม.', 'ทนต่อสภาพอากาศทะเล'],
    highlightsEn: ['Random stone pattern', '680 sq.m. area', 'Marine weather resistant']
  },
  {
    id: '003',
    slug: 'shopping-mall-nonthaburi',
    titleTh: 'ห้างสรรพสินค้า นนทบุรี',
    titleEn: 'Shopping Mall - Nonthaburi',
    descriptionTh: 'พื้นคอนกรีตแสตมป์แบบอิฐเหลืองแดงสำหรับพื้นที่โถงลานโล่งของห้างสรรพสินค้า',
    descriptionEn: 'Brick-pattern stamped concrete flooring for the main atrium and outdoor plaza of a commercial shopping mall.',
    locationTh: 'นนทบุรี',
    locationEn: 'Nonthaburi',
    area: 1200,
    year: 2023,
    type: 'government',
    patternType: 'Brick Running Bond',
    images: [
      'https://picsum.photos/600/400?random=107',
      'https://picsum.photos/600/400?random=108',
      'https://picsum.photos/600/400?random=109'
    ],
    highlightsTh: ['ลายอิฐสไตล์คลาสสิก', 'พื้นที่ใหญ่ 1200 ตร.ม.', 'สำหรับพื้นที่สาธารณะ'],
    highlightsEn: ['Classic brick running bond pattern', 'Large-scale 1200 sq.m. project', 'High-traffic commercial area']
  },
  {
    id: '004',
    slug: 'private-house-sukhumvit',
    titleTh: 'บ้านพักอาศัยส่วนตัว สุขุมวิท',
    titleEn: 'Private Residence - Sukhumvit',
    descriptionTh: 'ติดตั้งพื้นคอนกรีตแสตมป์ลายไม้สำหรับลานบ้านและพื้นที่นั่งเล่นหน้าบ้าน',
    descriptionEn: 'Wood-textured stamped concrete installation for a residential property featuring front porch and entertainment areas.',
    locationTh: 'สุขุมวิท, กรุงเทพมหานคร',
    locationEn: 'Sukhumvit, Bangkok',
    area: 280,
    year: 2024,
    type: 'private',
    patternType: 'Wood Deck',
    images: [
      'https://picsum.photos/600/400?random=110',
      'https://picsum.photos/600/400?random=111',
      'https://picsum.photos/600/400?random=112'
    ],
    highlightsTh: ['ลายไม้สไตล์ยุโรป', 'พื้นที่ 280 ตร.ม.', 'สีน้ำตาลเข้มอบอุ่น'],
    highlightsEn: ['European wood deck pattern', '280 sq.m. area', 'Warm brown tones']
  },
  {
    id: '005',
    slug: 'temple-renovation-bangkok',
    titleTh: 'วัดพระในกรุงเทพ',
    titleEn: 'Temple Renovation - Bangkok',
    descriptionTh: 'โครงการปรับปรุงพื้นคอนกรีตแสตมป์ลายหินแบบเฟลมมิชในบริเวณลานหน้าวัด',
    descriptionEn: 'Temple courtyard renovation featuring Flemish stone pattern stamped concrete for ceremonial and public areas.',
    locationTh: 'กรุงเทพมหานคร',
    locationEn: 'Bangkok',
    area: 320,
    year: 2023,
    type: 'government',
    patternType: 'Flemish',
    images: [
      'https://picsum.photos/600/400?random=113',
      'https://picsum.photos/600/400?random=114',
      'https://picsum.photos/600/400?random=115'
    ],
    highlightsTh: ['ลายเฟลมมิชแบบดั้งเดิม', 'พื้นที่ 320 ตร.ม.', 'สำหรับสถานที่ศาสนา'],
    highlightsEn: ['Traditional Flemish pattern', '320 sq.m. area', 'Religious site application']
  },
  {
    id: '006',
    slug: 'restaurant-patio-chiang-mai',
    titleTh: 'ร้านอาหารลานนอกเชียงใหม่',
    titleEn: 'Restaurant Patio - Chiang Mai',
    descriptionTh: 'ติดตั้งพื้นคอนกรีตแสตมป์ลายพัดใหญ่สำหรับลานรับประทานอาหารของร้านอาหารร่วมสมัย',
    descriptionEn: 'Large fan-pattern stamped concrete for an outdoor dining area of a contemporary restaurant venue.',
    locationTh: 'เชียงใหม่',
    locationEn: 'Chiang Mai',
    area: 350,
    year: 2023,
    type: 'private',
    patternType: 'Large Fan Pattern',
    images: [
      'https://picsum.photos/600/400?random=116',
      'https://picsum.photos/600/400?random=117',
      'https://picsum.photos/600/400?random=118'
    ],
    highlightsTh: ['ลายพัดขนาดใหญ่สไตล์ยุโรป', 'พื้นที่ 350 ตร.ม.', 'สีเข้มคลาสสิก'],
    highlightsEn: ['European large fan pattern', '350 sq.m. area', 'Classic dark tones']
  },
  {
    id: '007',
    slug: 'condominium-entrance-bangkok',
    titleEn: 'Condominium Entrance - Bangkok',
    titleTh: 'โครงการคอนโดมิเนียม ทางเข้าอาคาร',
    descriptionTh: 'พื้นคอนกรีตแสตมป์ลายหินธงศาสตร์สำหรับพื้นที่ทางเข้าโครงการคอนโดมิเนียมขนาดใหญ่',
    descriptionEn: 'Flag stone pattern stamped concrete for the entrance area of a large residential condominium complex.',
    locationTh: 'สาทร, กรุงเทพมหานคร',
    locationEn: 'Sathorn, Bangkok',
    area: 560,
    year: 2024,
    type: 'private',
    patternType: 'Flag Stone',
    images: [
      'https://picsum.photos/600/400?random=119',
      'https://picsum.photos/600/400?random=120',
      'https://picsum.photos/600/400?random=121'
    ],
    highlightsTh: ['ลายหินแบบธงศาสตร์', 'พื้นที่ 560 ตร.ม.', 'จัดสรรหลากหลายสี'],
    highlightsEn: ['Flag stone pattern', '560 sq.m. area', 'Multi-color arrangement']
  },
  {
    id: '008',
    slug: 'warehouse-parking-ayutthaya',
    titleTh: 'ลานจอดรถโกดัง อยุธยา',
    titleEn: 'Warehouse Parking Lot - Ayutthaya',
    descriptionTh: 'พื้นลานจอดรถแบบหินอัปพลาเชียนสำหรับพื้นที่จัดเก็บและโกดังโลจิสติกส์',
    descriptionEn: 'Appalachian stone pattern parking and storage area for an industrial logistics warehouse facility.',
    locationTh: 'อยุธยา',
    locationEn: 'Ayutthaya',
    area: 2000,
    year: 2023,
    type: 'government',
    patternType: 'Appalachian Stone',
    images: [
      'https://picsum.photos/600/400?random=122',
      'https://picsum.photos/600/400?random=123',
      'https://picsum.photos/600/400?random=124'
    ],
    highlightsTh: ['ลายหินอัปพลาเชียน', 'พื้นที่ขนาดใหญ่ 2000 ตร.ม.', 'สำหรับใช้ประกอบการโลจิสติกส์'],
    highlightsEn: ['Appalachian stone pattern', 'Large-scale 2000 sq.m. project', 'Industrial logistics application']
  },
  {
    id: '009',
    slug: 'community-plaza-samut-prakan',
    titleTh: 'ลานสาธารณะชุมชน สมุทรปราการ',
    titleEn: 'Community Plaza - Samut Prakan',
    descriptionTh: 'พื้นคอนกรีตแสตมป์ลายหินลอนดอนคอบเบิลสำหรับลานสาธารณะชุมชนพร้อมพื้นที่นั่งเล่นและเส้นทางเดิน',
    descriptionEn: 'London cobble pattern stamped concrete for a public community plaza with seating areas and walkways.',
    locationTh: 'สมุทรปราการ',
    locationEn: 'Samut Prakan',
    area: 780,
    year: 2024,
    type: 'government',
    patternType: 'London Cobble',
    images: [
      'https://picsum.photos/600/400?random=125',
      'https://picsum.photos/600/400?random=126',
      'https://picsum.photos/600/400?random=127'
    ],
    highlightsTh: ['ลายหินลอนดอนคอบเบิลแบบดั้งเดิม', 'พื้นที่ 780 ตร.ม.', 'พื้นที่สาธารณะชุมชน'],
    highlightsEn: ['Traditional London cobble pattern', '780 sq.m. area', 'Public community space']
  }
];
