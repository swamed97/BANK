import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
userid:any
pswd:any

  constructor(private rout:Router,private go:DataService) { }

  ngOnInit(): void {
  }
  login(){
    var userid=this.userid
    var pswd=this.pswd
    localStorage.setItem("IDE",JSON.stringify(userid))

    this.go.log(userid,pswd).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.rout.navigateByUrl('homepage')
      }
    },(result)=>{
      alert(result.error.message)
    })
  }
}

