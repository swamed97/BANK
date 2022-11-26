import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 RegisterForm = this.fb.group({
  userid:['',[Validators.required]],
  email:['',[Validators.required]],
  password:['',[Validators.required]],
  balance:['',[Validators.required]]

 })

  constructor(private rout:Router,private mo:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var userid:any = this.RegisterForm.value.userid
    var email:any = this.RegisterForm.value.email
    var pswd:any = this.RegisterForm.value.password
    var balance:any = this.RegisterForm.value.balance
    console.log("aa",userid)


    if(this.RegisterForm.valid){
      this.mo.reg(userid,email,pswd,balance).subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.rout.navigateByUrl('')
        }
      })
    }
   
    
  }

}
