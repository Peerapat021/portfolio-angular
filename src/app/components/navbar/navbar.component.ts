import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styles: [`
    :host {
      --font-display: 'Space Grotesk', 'IBM Plex Sans Thai', system-ui, sans-serif;
      --font-sans: 'IBM Plex Sans', 'IBM Plex Sans Thai', system-ui, sans-serif;
      display: block;
    }
    :host ::ng-deep .font-display { font-family: var(--font-display); }
    :host ::ng-deep .font-sans    { font-family: var(--font-sans); }

    a:focus-visible, button:focus-visible {
      outline: 2px solid #2955C8;
      outline-offset: 2px;
    }

    /* ── สถานะ "เลื่อนแล้ว": พื้นเป็นกระดาษสว่าง ใช้ตัวอักษรเข้ม ── */
    nav.is-scrolled .brand-mark    { border-color: rgba(41,85,200,.5); color: #2955C8; }
    nav.is-scrolled .brand-name    { color: #14202B; }
    nav.is-scrolled .brand-tagline { color: #3B4750; }
    nav.is-scrolled .nav-link      { color: #3B4750; }
    nav.is-scrolled .nav-link:hover,
    nav.is-scrolled .nav-link-active { color: #14202B; }
    nav.is-scrolled .nav-underline { background: #2955C8; }
    nav.is-scrolled .status-text   { color: #3B4750; }
    nav.is-scrolled .cta-link      { border-color: #C9D2D8; color: #14202B; }
    nav.is-scrolled .cta-link:hover{ border-color: #2955C8; color: #2955C8; }
    nav.is-scrolled .burger-bar    { background: #14202B; }

    /* ── สถานะ "อยู่บนสุด": นาวบาร์โปร่งใส พื้นหลังจริงอาจเข้ม
       จึงสลับเป็นตัวอักษรสว่างเพื่อให้อ่านออก ── */
    nav.is-top .brand-mark    { border-color: rgba(245,248,250,.55); color: #F5F8FA; }
    nav.is-top .brand-name    { color: #F5F8FA; }
    nav.is-top .brand-tagline { color: rgba(245,248,250,.72); }
    nav.is-top .nav-link      { color: rgba(245,248,250,.78); }
    nav.is-top .nav-link:hover,
    nav.is-top .nav-link-active { color: #F5F8FA; }
    nav.is-top .nav-underline { background: #7DB0FF; }
    nav.is-top .status-text   { color: rgba(245,248,250,.78); }
    nav.is-top .cta-link      { border-color: rgba(245,248,250,.4); color: #F5F8FA; }
    nav.is-top .cta-link:hover{ border-color: #F5F8FA; color: #F5F8FA; }
    nav.is-top .burger-bar    { background: #F5F8FA; }

    .pulse { animation: pulse 2.4s cubic-bezier(0, 0, .2, 1) infinite; }
    @keyframes pulse {
      75%, 100% { transform: scale(2.4); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .pulse { animation: none; }
      * { transition-duration: .01ms !important; }
    }
  `],
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  navLinks = [
    { label: 'หน้าแรก', path: '/' },
    { label: 'เกี่ยวกับ', path: '/about' },
    { label: 'ผลงาน', path: '/projects' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }
}