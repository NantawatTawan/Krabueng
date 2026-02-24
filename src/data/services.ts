export interface Service {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  icon: string;
  features: { th: string; en: string }[];
}

export const services: Service[] = [
  {
    id: 'service-001',
    titleTh: 'คอนกรีตพิมพ์ลาย',
    titleEn: 'Stamped Concrete',
    descriptionTh: 'บริการออกแบบและติดตั้งพื้นคอนกรีตพิมพ์ลายระดับพรีเมียม ลวดลายหลากหลายกว่า 30 แบบ สีสันให้เลือกกว่า 20 เฉดสี',
    descriptionEn: 'Premium design and installation of stamped concrete flooring with over 30 patterns and 20 color options available.',
    icon: 'Stamp',
    features: [
      { th: 'ลายพิมพ์กว่า 30 แบบ', en: 'Over 30 pattern designs' },
      { th: 'สีมาตรฐาน 20+ เฉดสี', en: '20+ standard colors' },
      { th: 'รับประกันคุณภาพ 5 ปี', en: '5-year quality warranty' },
    ],
  },
  {
    id: 'service-002',
    titleTh: 'ก่อสร้างและเทพื้นคอนกรีต',
    titleEn: 'Concrete Construction',
    descriptionTh: 'บริการเทพื้นคอนกรีตครบวงจร ตั้งแต่การเตรียมฐานราก เทเนื้อคอนกรีต จนถึงการตกแต่งขั้นสุดท้าย',
    descriptionEn: 'Complete concrete construction from foundation preparation and pouring to finishing and final decoration.',
    icon: 'HardHat',
    features: [
      { th: 'เตรียมฐานรากมาตรฐาน', en: 'Standard foundation prep' },
      { th: 'คอนกรีตเกรดพรีเมียม', en: 'Premium grade concrete' },
      { th: 'ตกแต่งขั้นสุดท้าย', en: 'Final finishing touches' },
    ],
  },
  {
    id: 'service-003',
    titleTh: 'ออกแบบและให้คำปรึกษา',
    titleEn: 'Design & Consultation',
    descriptionTh: 'ทีมสถาปนิกและผู้เชี่ยวชาญพร้อมให้คำปรึกษาเรื่องการเลือกลาย สี และการออกแบบพื้นที่ให้เหมาะสมกับโครงการ',
    descriptionEn: 'Expert architects and consultants ready to advise on pattern selection, colors, and space design for your project.',
    icon: 'Palette',
    features: [
      { th: 'เลือกลายและสีตามต้องการ', en: 'Custom pattern & color selection' },
      { th: 'ออกแบบแปลนพื้นที่', en: 'Area plan design' },
      { th: 'ประเมินราคาฟรี', en: 'Free cost estimation' },
    ],
  },
  {
    id: 'service-004',
    titleTh: 'ซ่อมแซมและบำรุงรักษา',
    titleEn: 'Repair & Maintenance',
    descriptionTh: 'บริการซ่อมแซมพื้นคอนกรีตพิมพ์ลายที่ชำรุด เคลือบผิวใหม่ และบำรุงรักษาเพื่อคงความสวยงามยาวนาน',
    descriptionEn: 'Repair damaged stamped concrete, resurface coating, and maintain beauty for long-lasting results.',
    icon: 'Wrench',
    features: [
      { th: 'ซ่อมแซมรอยร้าว', en: 'Crack repair' },
      { th: 'เคลือบผิวใหม่', en: 'Resurfacing coating' },
      { th: 'บำรุงรักษาประจำปี', en: 'Annual maintenance' },
    ],
  },
];
