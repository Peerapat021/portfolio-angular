import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}