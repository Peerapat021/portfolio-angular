import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

export interface Project {
  id: string;
  name: string;
  desc: string;
  highlights: string[];
  stack: string[];
  status: 'Completed' | 'In Progress';
  tags: string[];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 'car-rental',
    name: 'Car Rental Management',
    desc: 'Real-world web application for managing a car rental business end-to-end.',
    highlights: [
      'Vehicle management, booking & customer modules',
      'Rental scheduling and availability tracking',
      'Admin dashboard for cars and rental records',
      'Backend APIs and database schema',
    ],
    stack: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    status: 'Completed',
    tags: ['Web App', 'Next.js', 'TypeScript', 'Docker'],
  },
  {
    id: 'pos-wms',
    name: 'POS & Warehouse System (e-WMS)',
    desc: 'Sales and inventory management system built for SMEs requiring full POS and stock control.',
    highlights: [
      'POS features for sales transactions',
      'Product and inventory management modules',
      'Role-based access control (staff vs admin)',
      'Sales tracking and reporting features',
    ],
    stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'],
    status: 'Completed',
    tags: ['Web App', 'PHP', 'Management', 'Docker'],
  },
  {
    id: 'qa-hub',
    name: 'Q&A Hub Online Platform',
    desc: 'Online question-and-answer platform for creating and interacting with discussion threads.',
    highlights: [
      'Create questions and post answers',
      'User authentication and role-based access',
      'Comment and interaction system',
      'Category management for organising questions',
    ],
    stack: ['Python', 'LINE Messaging API'],
    status: 'Completed',
    tags: ['Web App', 'Python', 'Platform', 'Docker'],
  },
  {
    id: 'motorcycle-sales',
    name: 'Motorcycle Sales Management',
    desc: 'Sales management system for a motorcycle dealership covering products, customers, and transactions.',
    highlights: [
      'Motorcycle product information and details',
      'Customer and sales transaction management',
      'Tracking motorcycle sales records',
      'Database structure for vehicle and sales data',
    ],
    stack: ['Java', 'MySQL'],
    status: 'Completed',
    tags: ['Management', 'Java', 'Docker'],
  },
  {
    id: 'discord-bot-saas',
    name: 'Discord Bot SaaS Platform',
    desc: 'SaaS platform for managing Discord bots with subscription and billing features.',
    highlights: [
      'Discord bot integration and management',
      'Subscription and billing system',
      'User authentication and role-based access',
      'Database structure for bot and user data',
    ],
    stack: ['Next.js', 'MySQL' , 'Docker'],
    status: 'Completed',
    tags: ['SaaS', 'Next.js', 'Docker'],
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    desc: 'Expense tracking application for monitoring personal or business expenses.',
    highlights: [
      'Expense tracking and categorization',
      'User authentication and role-based access',
      'Database structure for expense and user data',
    ],
    stack: ['Next.js', 'Supabase (PostgreSQL)', 'Docker'],
    status: 'Completed',
    tags: ['Web App', 'Next.js', 'Docker', 'Supabase'],
  },
  {
    id: 'weka',
    name: 'WEKA',
    desc: 'WEKA is a machine learning tool for data mining tasks.',
    highlights: [
      'Machine learning algorithms and models',
      'Data preprocessing and feature selection',
      'Model evaluation and validation',
      'Database structure for machine learning data',
    ],
    stack: ['WEKA'],
    status: 'Completed',
    tags: ['WEKA'],
  },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, NgFor, NgClass],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  filterTags = ['All', 'Web App', 'Management', 'Next.js', 'PHP', 'Python', 'Java', 'SaaS', 'Docker', 'Supabase', 'WEKA'];
  activeFilter = 'All';

  get filteredProjects() {
    if (this.activeFilter === 'All') return ALL_PROJECTS;
    return ALL_PROJECTS.filter(p => p.tags.includes(this.activeFilter));
  }
}