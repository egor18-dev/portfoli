import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  public projects !: Project [];

  constructor (private _projectsService : ProjectsService) {}

  ngOnInit(): void {
    this._projectsService.retrieveProjects().then((tempProjects : Project []) => {
      this.projects = tempProjects;
    });
  }

}
