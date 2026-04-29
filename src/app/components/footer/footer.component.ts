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
    { label: 'GitHub', url: 'https://github.com/Peerapat021', icon: 'GH' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/m-jay-179b16320/', icon: 'LI' },
    { label: 'Line', url: 'https://line.me/ti/p/ifQioXpF1k', icon: 'LI' },
  ];
}