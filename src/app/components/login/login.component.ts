import { CrudService } from './../../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:CrudService,private route:Router){

  }
  
  loginForm = new FormGroup({
    UserName : new FormControl(""),
    Password : new FormControl("")
  });
 

  loginSubmitted(){
    // var cred={
    //   UserName : "",
    //   Password:""
    // };

    let data = this.loginForm.value

    if(data.UserName === 'admin' && data.Password === 'admin'){
      confirm("Successfully signed in");
      this.route.navigate(['/search']);

      localStorage.setItem('userType','author')
      this.service.setUserType();
    }
    // cred.UserName=this.loginForm.value.UserName!;
    // cred.Password=this.loginForm.value.Password!;

    // this.service.login(cred).subscribe((res) =>{
    //   var obj = JSON.stringify(res);
    //   console.log("response is = ",obj.indexOf("Successfully"));
    //   console.log("message is",res);
    //   if(obj.indexOf("Successfully")>1){
    //     confirm("Successfully signed in");
    // localStorage.setItem('userType',<<res.userType>>)
    //   this.service.setUserType();
    //     this.route.navigate(['/search']);
    //   }
    //   else{
    //     alert("Invalid username or password")
    //   }
      
    // });
  

  }


}
