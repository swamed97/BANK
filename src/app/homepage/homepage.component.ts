import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 
  damt:any

 
  wamt:any

  crntname:any
Newarray:any = []
 userid:any = JSON.parse(localStorage.getItem('IDE')||'')

  constructor(private po:DataService,private rout:Router,private http:HttpClient) {
 
   }

  ngOnInit(): void {
    
  }


  dept(){ 
    var userid = JSON.parse(localStorage.getItem('IDE')||'')
    var balance = this.damt
    const data = {
      userid,
      balance
    }
    return this.http.post("http://localhost:3002/deposit",data).subscribe((result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl('transaction')
    })
  }

  with(){ 
    var userid = JSON.parse(localStorage.getItem('IDE')||'')
    var balance = this.wamt
    const data = {
      userid,
      balance
    }
    return this.http.post("http://localhost:3002/withdraw",data).subscribe((result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl('transaction')
    })
  }
  }

