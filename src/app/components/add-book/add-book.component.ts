import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private service:CrudService,private route:Router){

  }
  
  subscribeform = new FormGroup({
    bookid : new FormControl(),
    userid : new FormControl()
  });
 

  subscribeSubmitted(){
    var cred={
      bookid : 1,
      userid:1
    };
    cred.bookid=this.subscribeform.value.bookid!;
    cred.userid=this.subscribeform.value.userid!;

    this.service.subscribeBook(cred).subscribe((res) =>{
      var obj = JSON.stringify(res);
      console.log("response is = ",obj.indexOf("Successfully"));
      console.log("message is",res);
      if(obj.indexOf("Successfully")>1){
        alert("Successfully signed in");
        this.route.navigate(['/search']);
      }
      else{
        alert("Invalid username or password")
      }
      
    });
  

  }


}
