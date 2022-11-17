import { Component, OnInit } from '@angular/core';
import { TxProcessingModule } from './tx-processing/tx-processing.module';

let allData:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor( private txProcessingModule: TxProcessingModule){}

  ngOnInit(): void {
    allData = this.txProcessingModule.getDataByType()
  };

  getSummary() {

    let summaryResult: any = {
      total: allData.total,
      typeSummary: []
    };

    for(let data of allData.dataGroupedByType) {
      summaryResult.typeSummary.push({
        type: data.type,
        summary: data.content.length
      })
    }

    return summaryResult
  };

  getAllData() {
    return allData.dataGroupedByType;
  };

}
