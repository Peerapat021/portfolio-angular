import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
})
export class AboutComponent {

  identityFields = [
    { key: 'name', value: 'Peerapat Kallabut' },
    { key: 'nickname', value: 'Jay' },
    { key: 'role', value: 'Web Developer' },
    {
      key: 'email',
      value: '<a href="mailto:peerapatkallabut@gmail.com" class="text-[#2955C8] hover:underline">peerapatkallabut@gmail.com</a>',
    },
    { key: 'phone', value: '096-9683-547' },
    { key: 'location', value: 'Thailand' },
    {
      key: 'available',
      value: '<span class="text-[#2955C8] inline-flex items-center gap-1.5"><span class="inline-block w-1.5 h-1.5 rounded-full bg-[#2955C8]"></span>Open to opportunities</span>',
    },
  ];

  skillCategories = [
    {
      icon: '⌨',
      name: 'Languages',
      skills: ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python', 'PHP'],
    },
    {
      icon: '⚡',
      name: 'Frameworks',
      skills: ['Next.js', 'Angular', 'React', 'Nuxt.js', 'Node.js', 'Laravel', 'ASP.NET Core', 'Spring Boot'],
    },
    {
      icon: '🎨',
      name: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'TypeScript', 'React', 'Next.js', 'Angular', 'Nuxt.js'],
    },
    {
      icon: '🔧',
      name: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Navicat', 'Figma', 'VS Code', 'Windsurf', 'IntelliJ IDEA'],
    },
  ];

  education = [
    {
      degree: 'Bachelor of Information Technology',
      school: 'Buriram Rajabhat University',
      years: '2022 – 2026',
    },
    {
      degree: 'Diploma in Information Technology',
      school: 'Buriram Technical College',
      years: '2020 – 2022',
    },
  ];
}