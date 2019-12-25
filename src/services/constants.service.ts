import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  constructor() { }
  
  gitCommitsUrl: string = 'https://api.github.com/repos/twbs/bootstrap/commits?per_page=100';
  readonly totalRecord: number = 19300;
  readonly perPage: number = 100;
}
