import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../services/constants.service'

@Injectable({
  providedIn: 'root'
})

export class CommitHistoryService {
  gitCommitUrl: string;
  constructor(
    private http: HttpClient,
    private _constant: ConstantsService
  ) {     
    this.gitCommitUrl = this._constant.gitCommitsUrl 
  }

  getCommitHistory = (numb) => {
    return this.http.get(this.gitCommitUrl + '&page=' + numb)
  }
}
