import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
  ];

  socials = [
    { label: 'GitHub', url: 'https://github.com', icon: 'GH' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'LI' },
    { label: 'Twitter', url: 'https://twitter.com', icon: 'TW' },
  ];
}