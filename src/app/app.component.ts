import { Component, OnInit } from '@angular/core';
import { CommitHistoryService } from '../services/commit-history.service';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  commitHistories;
  p: number = 1;
  totalRecord: number;
  perPage: number;
  collection: any[];

  constructor(
    private CommitHistoryService: CommitHistoryService,
    private Constants: ConstantsService
  ) {
    this.totalRecord = this.Constants.totalRecord
    this.perPage = this.Constants.perPage
  }

  ngOnInit() {
    this.commitHistories = this.CommitHistoryService.getCommitHistory(1);
  }

  paginateData = (pgNumb) => {
    this.p = pgNumb;
    this.commitHistories = this.CommitHistoryService.getCommitHistory(pgNumb);
  }

  getLatestCommit = () => {
    this.p = 1;
    this.commitHistories = this.CommitHistoryService.getCommitHistory(1);
  }
}
