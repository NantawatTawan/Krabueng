export interface Pattern {
  id: string;
  nameEn: string;
  nameTh: string;
  category: 'Classic' | 'Natural' | 'European' | 'Modern';
  descriptionTh: string;
  descriptionEn: string;
  priceRange: string;
  image: string;
  isPopular: boolean;
}

export const patterns: Pattern[] = [
  {
    id: 'pattern-001',
    nameEn: 'Ashlar Cut Stone',
    nameTh: 'ลายหินแสกกระหํา',
    category: 'European',
    descriptionTh: 'ลายหินแบบสี่เหลี่ยมผืนผ้าขนาดต่างกันแบบเฉพาะของอิตาลี สร้างความรู้สึกหรูหรา',
    descriptionEn: 'European-style ashlar cut stone pattern with varying rectangular sizes creating an elegant, sophisticated look.',
    priceRange: '฿2,500 - ฿3,500/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=201',
    isPopular: true
  },
  {
    id: 'pattern-002',
    nameEn: 'Random Stone',
    nameTh: 'ลายหินแบบสุ่ม',
    category: 'Natural',
    descriptionTh: 'ลายหินธรรมชาติแบบไม่สม่ำเสมอ ทำให้ดูเป็นธรรมชาติและนุ่มนวล',
    descriptionEn: 'Natural-looking random stone pattern with irregular sizing for an organic, rustic appearance.',
    priceRange: '฿2,000 - ฿3,000/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=202',
    isPopular: true
  },
  {
    id: 'pattern-003',
    nameEn: 'Wood Deck',
    nameTh: 'ลายไม้แปลงลาด',
    category: 'Modern',
    descriptionTh: 'ลายไม้ที่มีลักษณะเป็นแปลงลาด สร้างความอบอุ่นและสมัยใหม่',
    descriptionEn: 'Wood plank style pattern that creates warmth and contemporary appeal for patios and decks.',
    priceRange: '฿2,200 - ฿3,200/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=203',
    isPopular: false
  },
  {
    id: 'pattern-004',
    nameEn: 'Flemish',
    nameTh: 'ลายเฟลมมิช',
    category: 'European',
    descriptionTh: 'ลายหินแบบเก่าของยุโรป มีความเป็นประวัติศาสตร์และสง่างาม',
    descriptionEn: 'Historic European Flemish pattern with a charming, timeless aesthetic perfect for traditional designs.',
    priceRange: '฿2,400 - ฿3,400/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=204',
    isPopular: true
  },
  {
    id: 'pattern-005',
    nameEn: 'Fan Pattern',
    nameTh: 'ลายพัดเล็ก',
    category: 'Modern',
    descriptionTh: 'ลายพัดขนาดเล็ก สร้างความสวยงามและความน่าสนใจ',
    descriptionEn: 'Small fan-shaped pattern tiles arranged in an attractive, decorative style for accent areas.',
    priceRange: '฿2,300 - ฿3,300/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=205',
    isPopular: false
  },
  {
    id: 'pattern-006',
    nameEn: 'Large Fan Pattern',
    nameTh: 'ลายพัดใหญ่',
    category: 'European',
    descriptionTh: 'ลายพัดขนาดใหญ่แบบยุโรป สร้างความเป็นศิลปะและสง่างาม',
    descriptionEn: 'Large European fan pattern creating artistic borders and dramatic focal points on larger surfaces.',
    priceRange: '฿2,600 - ฿3,600/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=206',
    isPopular: true
  },
  {
    id: 'pattern-007',
    nameEn: 'Flag Stone',
    nameTh: 'ลายหินธงศาสตร์',
    category: 'Classic',
    descriptionTh: 'ลายหินแบบธงศาสตร์ทั่วไป ใช้งานทั่วไปได้ดี',
    descriptionEn: 'Classic flag stone pattern suitable for versatile applications from residential to commercial spaces.',
    priceRange: '฿1,800 - ฿2,800/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=207',
    isPopular: true
  },
  {
    id: 'pattern-008',
    nameEn: 'Appalachian Stone',
    nameTh: 'ลายหินอัปพลาเชียน',
    category: 'Natural',
    descriptionTh: 'ลายหินอเมริกันแบบธรรมชาติ เหมาะสำหรับพื้นที่ขนาดใหญ่',
    descriptionEn: 'American Appalachian stone pattern with natural texture perfect for large-scale industrial projects.',
    priceRange: '฿1,900 - ฿2,900/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=208',
    isPopular: false
  },
  {
    id: 'pattern-009',
    nameEn: 'London Cobble',
    nameTh: 'ลายหินลอนดอนคอบเบิล',
    category: 'European',
    descriptionTh: 'ลายหินอังกฤษแบบดั้งเดิม มีความสง่างามและยาวนาน',
    descriptionEn: 'Traditional British London cobble pattern combining elegance with durability for high-traffic areas.',
    priceRange: '฿2,200 - ฿3,200/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=209',
    isPopular: true
  },
  {
    id: 'pattern-010',
    nameEn: 'Brick Running Bond',
    nameTh: 'ลายอิฐสไตล์คลาสสิก',
    category: 'Classic',
    descriptionTh: 'ลายอิฐแบบวิ่งบอนด์ที่เป็นเคลื่องไหวสวยงาม',
    descriptionEn: 'Classic brick running bond pattern providing traditional appeal with excellent structural appearance.',
    priceRange: '฿1,700 - ฿2,700/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=210',
    isPopular: false
  },
  {
    id: 'pattern-011',
    nameEn: 'Slate Texture',
    nameTh: 'ลายศิลปะสเลต',
    category: 'Natural',
    descriptionTh: 'ลายสเลตธรรมชาติสร้างเนื้อสัมผัส ทำให้ดูราคาแพง',
    descriptionEn: 'Natural slate texture pattern creating realistic stone appearance with premium aesthetic.',
    priceRange: '฿2,300 - ฿3,300/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=211',
    isPopular: false
  },
  {
    id: 'pattern-012',
    nameEn: 'Herringbone',
    nameTh: 'ลายนกพิราบ',
    category: 'Modern',
    descriptionTh: 'ลายเรียงแบบนกพิราบ สร้างความเป็นเรขาคณิตสมัยใหม่',
    descriptionEn: 'Modern herringbone pattern creating geometric appeal suitable for contemporary designs.',
    priceRange: '฿2,400 - ฿3,400/ตร.ม.',
    image: 'https://picsum.photos/300/300?random=212',
    isPopular: true
  }
];
