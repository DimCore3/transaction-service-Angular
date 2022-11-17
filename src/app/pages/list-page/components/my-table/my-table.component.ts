import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  tableTabID: number = 0;
  private querySubscription: Subscription;
  @Input() allData: any = {};
  
  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.querySubscription = route.queryParams.subscribe (
        (queryParam: any) => {
            this.tableTabID = queryParam['tab'];
        }
    );
    this.querySubscription.unsubscribe();
  }

  ngOnInit(): void {
    
  };

  go() {
    this.router.navigate(['navigator'], { queryParams: { tab: this.tableTabID }});
  };
}
