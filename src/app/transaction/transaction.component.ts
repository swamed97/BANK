import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
transarray:any
  constructor(private http:HttpClient) {
    var userid = JSON.parse(localStorage.getItem('IDE')||'')
     this.http.get('http://localhost:3002/transactions/'+userid).subscribe((result:any)=>{
      if(result){
        this.transarray=result.details
        console.log("lk",this.transarray)
      }
     })
  }

  ngOnInit(): void {
  }

}
