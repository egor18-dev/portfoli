import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _direction : string = '/assets/json/projects.json';

  constructor(private _httpClient : HttpClient) {}

  retrieveProjects () : Promise<Project []>{

    return new Promise((resolve, reject) => {
      
      this._httpClient.get(this._direction).subscribe({

        next: (data : any) => {
          const projects : Project [] = [];
          data.forEach((elem : Project) => projects.push(elem));
          resolve(projects);
        },
        error: (err : any) => {
          console.log(err);
        }

      });
    });

  }
}
