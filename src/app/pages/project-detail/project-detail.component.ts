import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ALL_PROJECTS, Project } from '../projects/projects.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass],
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  projectIndex = '';
  projectMeta: { key: string; value: string }[] = [];
  prevProject: Project | undefined;
  nextProject: Project | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idx = ALL_PROJECTS.findIndex(p => p.id === id);
      this.project = ALL_PROJECTS[idx];

      if (this.project) {
        this.projectIndex = `PROJECT_${idx < 9 ? '0' : ''}${idx + 1}`;
        this.prevProject = idx > 0 ? ALL_PROJECTS[idx - 1] : undefined;
        this.nextProject = idx < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[idx + 1] : undefined;

        this.projectMeta = [
          { key: 'status', value: this.project.status },
          { key: 'tech_stack', value: this.project.stack.join(', ') },
          { key: 'category', value: this.project.tags.join(', ') },
          { key: 'developer', value: 'Peerapat Kallabut' },
        ];
      }
    });
  }
}