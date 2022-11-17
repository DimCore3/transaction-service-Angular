import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public allData:any = [];
  constructor( private appComponent: AppComponent ){}

  ngOnInit(): void {
    this.allData = this.appComponent.getAllData();
  }
}
