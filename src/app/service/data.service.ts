import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  currname:any

  constructor(private http:HttpClient,private rout:Router) { }
 
   
    
  
    reg(userid:any,email:any,pswd:any,balance:any){
      const data = {
        userid,
        email,
        pswd,
        balance
      }
    return this.http.post('http://localhost:3002/register',data)
   
  }

  log(userid:any,pswd:any){
    const datas = {
      userid,
      pswd
    }
    return this.http.post('http://localhost:3002/login',datas)
  
   
  }


}