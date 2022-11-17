import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { MyTableComponent } from './pages/list-page/components/my-table/my-table.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableContentComponent } from './pages/list-page/components/my-table/table-content/table-content.component';
import { TxProcessingModule } from './tx-processing/tx-processing.module';
import { TransactionSummaryComponent } from './pages/summary-page/transaction-summary/transaction-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SummaryPageComponent,
    MyTableComponent,
    TableContentComponent,
    TransactionSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TxProcessingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
