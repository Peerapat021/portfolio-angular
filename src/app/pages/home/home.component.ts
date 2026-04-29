import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  techStack = [
    'Next.js', 'TypeScript', 'Laravel', 'ASP.NET Core',
    'MySQL', 'Tailwind CSS', 'Docker', 'Python', 'PHP', 'Java'
  ];

  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '4+', label: 'Projects Built' },
    { value: '6+', label: 'Languages' },
    { value: '3+', label: 'Frameworks' },
  ];

  featuredProjects = [
    {
      id: 'car-rental',
      name: 'Car Rental Management',
      desc: 'Full-stack web application for managing a car rental business — booking, scheduling, vehicle tracking, and admin dashboard.',
      stack: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    },
    {
      id: 'pos-wms',
      name: 'POS & Warehouse System',
      desc: 'Sales and inventory management system for SMEs with role-based access, POS transactions, and reporting.',
      stack: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    },
  ];

  ngOnInit() {
    // Typewriter effect
    const words = ['Web Developer', 'Full-Stack Dev', 'System Designer', 'Problem Solver'];
    let wi = 0, ci = 0, deleting = false;
    const el = document.getElementById('typewriter');
    if (!el) return;
    const tick = () => {
      const word = words[wi];
      if (deleting) {
        el.textContent = word.substring(0, --ci);
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
        setTimeout(tick, 60);
      } else {
        el.textContent = word.substring(0, ++ci);
        if (ci === word.length) { deleting = true; setTimeout(tick, 2000); return; }
        setTimeout(tick, 90);
      }
    };
    setTimeout(tick, 800);
  }
}