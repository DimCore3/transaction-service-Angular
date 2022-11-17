import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {
  @Input() item: any = {};

  showSum:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
