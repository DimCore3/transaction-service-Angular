import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  total:any = {};
  showTotal: boolean = false;

  public item: object = {};

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.total = this.appComponent.getSummary();
    console.log('total in summary: ', this.total)
  }
}
