import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      id: 1,
      title: 'POS System',
      description: 'ระบบขายหน้าร้าน',
      image: 'assets/images/pos.png',
      tech: ['Laravel', 'MySQL']
    },
    {
      id: 2,
      title: 'Booking App',
      description: 'ระบบจองออนไลน์',
      image: 'assets/images/booking.png',
      tech: ['React', 'Node.js']
    }
  ];

  getProjects() {
    return of(this.projects);
  }

  getProjectById(id: number) {
    return of(this.projects.find(p => p.id === id));
  }
}