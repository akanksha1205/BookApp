import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  constructor(private service:CrudService,private route:Router){

  }
 
  registerform = new FormGroup({
    username : new FormControl(""),
    usertype : new FormControl(""),
    email : new FormControl(""),
    Password : new FormControl("")
  });

  registerSubmitted(){
    var cred={
      username : "",
      usertype :"",
      email :"",
      Password:""
    };
    cred.username=this.registerform.value.username!;
    cred.usertype=this.registerform.value.usertype!;
    cred.email=this.registerform.value.email!;
    cred.Password=this.registerform.value.Password!;

    this.service.register(cred).subscribe((res) =>{
      var obj = JSON.stringify(res);
      console.log("response is = ",obj.indexOf("successfully"));
      console.log("message is",res);
      if(obj.indexOf("successfully")>1){
        confirm("Successfully registered")
        this.route.navigate(['/signin']);
      }
      
    });
  
  }

}
