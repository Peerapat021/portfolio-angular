import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styles: [`
    :host {
      /* Archivo = ตัวละติน (grotesque หนาแน่น) · Anuphan = ตัวไทยที่รูปทรงเข้ากัน */
      font-family: 'Archivo', 'Anuphan', system-ui, -apple-system, sans-serif;
      font-feature-settings: 'tnum' 1;
      display: block;
      background: #F7F7F5;
      color: #101214;
      -webkit-font-smoothing: antialiased;
    }

    /* โฟกัสด้วยคีย์บอร์ดต้องมองเห็นชัด */
    a:focus-visible {
      outline: 2px solid #D6321F;
      outline-offset: 3px;
    }

    /* motion มีจุดเดียว: hero เผยตัวตอนโหลด */
    .reveal { animation: reveal .55s cubic-bezier(.2, .7, .3, 1) both; }
    .reveal + .reveal { animation-delay: .08s; }
    @keyframes reveal {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: none; }
    }

    .ping { animation: ping 2.4s cubic-bezier(0, 0, .2, 1) infinite; }
    @keyframes ping {
      75%, 100% { transform: scale(2.4); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .reveal, .ping { animation: none; }
      * { transition-duration: .01ms !important; }
    }
  `],
})
export class HomeComponent {

  availability = 'พร้อมเริ่มงาน · รับพิจารณาตำแหน่ง Full-stack และ Backend';

  /** แก้ค่าตรงนี้ให้เป็นของจริงก่อนเอาไปใช้สมัครงาน */
  contact = {
    email: 'peerapat.dev@gmail.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    resume: 'assets/peerapat-kallabut-resume.pdf',
  };

  quickFacts = [
    { label: 'ฐานที่ทำงาน', value: 'กรุงเทพฯ / ทำงานทางไกลได้' },
    { label: 'ประสบการณ์', value: '2 ปี' },
    { label: 'ถนัดที่สุด', value: 'Next.js + Laravel + MySQL' },
  ];

  stats = [
    { value: '2', label: 'ปีประสบการณ์' },
    { value: '4', label: 'ระบบที่ส่งมอบแล้ว' },
    { value: '6', label: 'ภาษาที่ใช้งานได้' },
    { value: '5', label: 'เฟรมเวิร์กที่เคยใช้' },
  ];

  capabilities = [
    {
      title: 'วิเคราะห์ระบบ',
      detail: 'คุยกับผู้ใช้เพื่อเก็บ requirement แปลงเป็น flow และขอบเขตงานที่ชัดเจน ก่อนเริ่มเขียนโค้ด',
    },
    {
      title: 'ออกแบบฐานข้อมูล',
      detail: 'ออกแบบ schema แบบ normalize วาง index และความสัมพันธ์ของตารางให้รองรับรายงานและการขยายระบบภายหลัง',
    },
    {
      title: 'พัฒนา Backend API',
      detail: 'เขียน REST API พร้อมระบบยืนยันตัวตน สิทธิ์การใช้งานตามบทบาท และการตรวจสอบข้อมูลฝั่งเซิร์ฟเวอร์',
    },
    {
      title: 'ทำหน้าเว็บให้ใช้งานจริง',
      detail: 'ประกอบ UI ที่ตอบสนองทุกขนาดจอ เชื่อม API และจัดการสถานะโหลดกับข้อผิดพลาดให้ผู้ใช้เข้าใจได้',
    },
  ];

  stackGroups = [
    { label: 'Frontend', items: ['Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend', items: ['Laravel (PHP)', 'ASP.NET Core', 'Java', 'Python'] },
    { label: 'ฐานข้อมูล', items: ['MySQL', 'SQL Server', 'การออกแบบ Schema'] },
    { label: 'เครื่องมือ', items: ['Docker', 'Git / GitHub', 'Postman', 'Figma'] },
  ];

  featuredProjects = [
    {
      id: 'car-rental',
      name: 'ระบบจัดการธุรกิจเช่ารถ',
      year: '2025',
      role: 'ทำคนเดียวทั้งระบบ',
      desc: 'เว็บแอปสำหรับร้านเช่ารถ ดูแลตั้งแต่การจอง ตารางรถ ไปจนถึงหน้าหลังบ้านของเจ้าของร้าน',
      highlights: [
        'ออกแบบฐานข้อมูลการจองที่กันการจองซ้อนคันเดียวกัน',
        'หน้าแดชบอร์ดสรุปสถานะรถและรายได้แบบเรียลไทม์',
        'แยกสิทธิ์ผู้ดูแลระบบกับพนักงานหน้าร้าน',
      ],
      stack: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    },
    {
      id: 'pos-wms',
      name: 'ระบบขายหน้าร้านและคลังสินค้า',
      year: '2024',
      role: 'พัฒนาหลัก',
      desc: 'ระบบ POS พร้อมการจัดการสต็อกสำหรับธุรกิจ SME ใช้งานได้ตั้งแต่แคชเชียร์จนถึงฝ่ายคลัง',
      highlights: [
        'ตัดสต็อกอัตโนมัติทุกครั้งที่ขาย พร้อมประวัติการเคลื่อนไหวสินค้า',
        'รายงานยอดขายรายวันและรายเดือนสำหรับเจ้าของกิจการ',
        'กำหนดสิทธิ์การเข้าถึงตามบทบาทของพนักงาน',
      ],
      stack: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    },
  ];
}