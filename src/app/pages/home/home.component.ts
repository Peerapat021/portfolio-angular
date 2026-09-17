import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styles: [`
    :host {
      /* Space Grotesk = หัวข้อ/ตัวเลข (เส้นสายเรขาคณิตแบบงานเขียนแบบ) */
      /* IBM Plex Sans / Sans Thai = เนื้อหา · IBM Plex Mono = ข้อมูล/ตัวเลขจริงเท่านั้น */
      --font-display: 'Space Grotesk', 'IBM Plex Sans Thai', system-ui, sans-serif;
      --font-sans: 'IBM Plex Sans', 'IBM Plex Sans Thai', system-ui, sans-serif;
      --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
      display: block;
      background: #EDF1F4;
      -webkit-font-smoothing: antialiased;
    }

    :host ::ng-deep .font-display { font-family: var(--font-display); }
    :host ::ng-deep .font-sans    { font-family: var(--font-sans); }
    :host ::ng-deep .font-mono    { font-family: var(--font-mono); }

    a:focus-visible {
      outline: 2px solid #2955C8;
      outline-offset: 3px;
    }

    /* จุดสถานะ: กะพริบเบา ๆ สื่อว่า "พร้อมตอนนี้" */
    .pulse { animation: pulse 2.4s cubic-bezier(0, 0, .2, 1) infinite; }
    @keyframes pulse {
      75%, 100% { transform: scale(2.4); opacity: 0; }
    }

    /* จุดที่กล้าที่สุดของหน้า: เส้นไทม์ไลน์กระบวนการทำงานค่อย ๆ ต่อกันทีละขั้น
       เล่นครั้งเดียวตอนเลื่อนมาถึง ไม่ใช่ทุกครั้งที่ hover */
    .pipeline-step {
      opacity: 0;
      transform: translateY(10px);
      border-color: transparent;
      transition: opacity .5s ease, transform .5s ease, border-color .5s ease .1s;
    }
    .pipeline-step .node {
      transform: scale(0);
      transition: transform .35s cubic-bezier(.34,1.56,.64,1) .3s;
    }
    :host ::ng-deep .pipeline-in-view .pipeline-step {
      opacity: 1;
      transform: none;
      border-color: #C4CDD3;
    }
    :host ::ng-deep .pipeline-in-view .pipeline-step .node {
      transform: scale(1);
    }

    @media (prefers-reduced-motion: reduce) {
      .pulse { animation: none; }
      .pipeline-step, .pipeline-step .node {
        opacity: 1; transform: none; transition: none; border-color: #C4CDD3;
      }
    }
  `],
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('pipelineSection') pipelineSection?: ElementRef<HTMLElement>;

  availability = 'พร้อมเริ่มงาน · รับพิจารณาตำแหน่ง Full-stack และ Backend';
  lastUpdated = 'กันยายน 2569';

  /** แก้ค่าตรงนี้ให้เป็นของจริงก่อนเอาไปใช้สมัครงาน */
  contact = {
    email: 'peerapat.dev@gmail.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    resume: 'assets/peerapat-kallabut-resume.pdf',
  };

  stats = [
    { value: '2', label: 'ปีประสบการณ์' },
    { value: '4', label: 'ระบบที่ส่งมอบแล้ว' },
    { value: '6', label: 'ภาษาที่ใช้งานได้' },
    { value: '5', label: 'เฟรมเวิร์กที่เคยใช้' },
  ];

  /** สี่ขั้นตอนจริงที่ทำในทุกโปรเจกต์ เรียงตามลำดับที่ลงมือทำจริง */
  pipeline = [
    {
      title: 'วิเคราะห์ระบบ',
      detail: 'คุยกับผู้ใช้เพื่อเก็บ requirement แปลงเป็น flow และขอบเขตงานที่ชัดเจนก่อนเริ่มเขียนโค้ด',
    },
    {
      title: 'ออกแบบฐานข้อมูล',
      detail: 'ออกแบบ schema แบบ normalize วาง index และความสัมพันธ์ของตารางให้รองรับรายงานและการขยายระบบ',
    },
    {
      title: 'พัฒนา Backend API',
      detail: 'เขียน REST API พร้อมระบบยืนยันตัวตน สิทธิ์การใช้งานตามบทบาท และตรวจสอบข้อมูลฝั่งเซิร์ฟเวอร์',
    },
    {
      title: 'ทำหน้าเว็บให้ใช้งานจริง',
      detail: 'ประกอบ UI ที่ตอบสนองทุกขนาดจอ เชื่อม API และจัดการสถานะโหลด/ข้อผิดพลาดให้ผู้ใช้เข้าใจได้',
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

  ngAfterViewInit(): void {
    const el = this.pipelineSection?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') {
      el?.classList.add('pipeline-in-view');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('pipeline-in-view');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
  }
}