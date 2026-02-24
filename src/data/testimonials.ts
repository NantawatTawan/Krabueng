export interface Testimonial {
  id: string;
  name: string;
  roleTh: string;
  roleEn: string;
  companyTh: string;
  companyEn: string;
  contentTh: string;
  contentEn: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-001',
    name: 'สมชาย ภูมิภัทร์',
    roleTh: 'เจ้าของโครงการ',
    roleEn: 'Project Owner',
    companyTh: 'วิลล่าหรูส่วนพลู',
    companyEn: 'Luxury Villa Samsen',
    contentTh: 'ทีมลาลาโบว์มีความเชี่ยวชาญอย่างแท้จริง พื้นคอนกรีตแสตมป์ของพวกเขาสวยงามมากและทนทาน ราคากลมกลืนกับคุณภาพ ขอแนะนำให้ทุกคนสนใจ',
    contentEn: 'The Lalabow team is truly professional and knowledgeable. Their stamped concrete work is beautiful and durable. The pricing is reasonable for the quality offered. I highly recommend their services.',
    rating: 5
  },
  {
    id: 'testimonial-002',
    name: 'นพรัตน์ สืบสันต์',
    roleTh: 'ผู้จัดการโครงการ',
    roleEn: 'Project Manager',
    companyTh: 'รีสอร์ตท่องเที่ยวหัวหิน',
    companyEn: 'Hua Hin Beach Resort',
    contentTh: 'ลาลาโบว์เสร็จตามกำหนดเวลาและภายในงบประมาณ พื้นของพวกเขามีคุณภาพสูงและสวยมากสำหรับโครงการรีสอร์ตของเรา ลูกค้าของเราพอใจมากกับผลลัพธ์',
    contentEn: 'Lalabow completed our project on time and within budget. Their concrete surfaces are high quality and look stunning for our resort. Our guests are very pleased with the results.',
    rating: 5
  },
  {
    id: 'testimonial-003',
    name: 'ดร.ประสิทธิ์ สุวรรณ',
    roleTh: 'สถาปนิก',
    roleEn: 'Architect',
    companyTh: 'บริษัทออกแบบสถาปัตยกรรม',
    companyEn: 'Architectural Design Firm',
    contentTh: 'ฉันได้ส่วนความเห็นใจกับลาลาโบว์เป็นลูกค้าหลายโครงการ พวกเขารู้วิธีบันทึกการออกแบบของฉันเป็นผลงานคอนกรีต ชั้นฝีมือสูง',
    contentEn: 'I have recommended Lalabow to multiple clients for their architectural projects. They understand my design vision perfectly and execute it with superior craftsmanship.',
    rating: 5
  },
  {
    id: 'testimonial-004',
    name: 'วัชรา ชีวาวรรณ์',
    roleTh: 'ผู้บริหาร',
    roleEn: 'General Manager',
    companyTh: 'ห้างสรรพสินค้า',
    companyEn: 'Shopping Mall',
    contentTh: 'โครงการคอนกรีตแสตมป์ของลาลาโบว์สำหรับทางเข้าของเรามีลักษณะเป็นมืออาชีพและเป็นสัญลักษณ์ของร้านค้า ผู้มาเยี่ยมชมชื่นชม',
    contentEn: 'Lalabow\'s stamped concrete for our mall entrance looks professional and represents our brand well. Visitors frequently compliment the flooring.',
    rating: 5
  },
  {
    id: 'testimonial-005',
    name: 'ศรีสวัสดิ์ พิศพลรักษ์',
    roleTh: 'ผู้อำนวยการ',
    roleEn: 'Director',
    companyTh: 'วัดวิสัยทัศน์',
    companyEn: 'Visionary Temple',
    contentTh: 'ลาลาโบว์ช่วยเรากลับชีวิตใหม่ให้ลานวัดของเรา พื้นคอนกรีตแสตมป์ของพวกเขามีลักษณะสง่างามและเหมาะสมกับสถาปัตยกรรมของวัด',
    contentEn: 'Lalabow helped renovate our temple courtyard beautifully. Their stamped concrete has an elegant appearance that complements the temple\'s architecture perfectly.',
    rating: 5
  },
  {
    id: 'testimonial-006',
    name: 'ปิยพัฒน์ อริยะไพร',
    roleTh: 'เจ้าของธุรกิจ',
    roleEn: 'Business Owner',
    companyTh: 'ร้านอาหารร่วมสมัย',
    companyEn: 'Contemporary Restaurant',
    contentTh: 'ลานรับประทานอาหารของร้านของฉันดูสวยงามและสไตล์เพราะพื้นคอนกรีตแสตมป์ลายพัดของลาลาโบว์ การจัดการโครงการดีมาก',
    contentEn: 'My restaurant\'s outdoor dining area looks beautiful and stylish thanks to Lalabow\'s fan pattern concrete. Their project management was excellent throughout.',
    rating: 5
  }
];
