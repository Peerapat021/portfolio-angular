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