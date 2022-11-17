import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataTestJson } from '../data-test-json';

// export interface txTypes {
//   type: 'income' | 'outcome' | 'loan' | 'investment',
//   _id: string,
//   amount: number,
//   name: {
//     first: string,
//     last: string,
//   },
//   company: string,
//   email: string,
//   phone: string,
//   address: string,
// };

class txTypes {
  address: string = "";
  amount: number = 0;
  company: string = "";
  email: string = "";
  name: object = {
    first: '',
    last: '',
  };
  phone: string = "";
  type: 'income' | 'outcome' | 'loan' | 'investment' = "income";
  _id: string = "";
};

let types:Array<'income' | 'outcome' | 'loan' | 'investment'> = ['income', 'outcome', 'loan', 'investment'];

interface groupedByType {
  type: 'income' | 'outcome' | 'loan' | 'investment',
  content: object[]
};

let total:number = 0;
let dataGroupedByType: groupedByType[] = [];
types.forEach(type => {
  dataGroupedByType.push({
    type,
    content:[],
  });
});

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TxProcessingModule { 
  private txJson:Array<txTypes> = JSON.parse(dataTestJson);  

  getDataByType(){
    this.txJson.forEach(transaction => {
      total++     
      for (let group of dataGroupedByType) {   
        if(transaction.type === group.type){
          group.content.push(transaction);
          return;
        }
      }
    });

    // console.log(`Чет работает.. ${JSON.stringify(dataGroupedByType)}`);
    // console.log(`total: ${total}`);
    return {dataGroupedByType, total};

  }
}
