import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  constructor(private service:CrudService,private route:Router){

  }
  
  editform = new FormGroup({
    userid : new FormControl(),
    bookid : new FormControl(),
    book : new FormControl(),
    title:new FormControl(),
    active:new FormControl(),
    author:new FormControl(),
    publisher:new FormControl(),
    releasedDate:new FormControl(),
    price:new FormControl(),
    content:new FormControl(),
    category:new FormControl()

  });
 

  editSubmitted(){
    var cred={
      userid : 1,
      bookid:1,
      title:"",
      active:"",
      author:"",
      publisher:"",
      releasedDate:"",
      price:"",
      content:"",
      category:""
    };
    cred.userid=this.editform.value.userid!;
    cred.bookid=this.editform.value.bookid!;
    cred.title=this.editform.value.title;
    cred.active=this.editform.value.active;
    cred.author=this.editform.value.author;
    cred.publisher=this.editform.value.publisher;
    cred.releasedDate=this.editform.value.releasedDate;
    cred.price=this.editform.value.price;
    cred.content=this.editform.value.content;
    cred.category=this.editform.value.category;

    console.log("request is ",this.editform.value)
    this.service.updateBook(cred).subscribe((res) =>{
      var obj = JSON.stringify(res);
      console.log("response is = ",obj.indexOf("Successfully"));
      console.log("message is",res);
      if(obj.indexOf("Successfully")>1){
        alert("Successfully edit book");
      }
      else{
        alert("Book cannot be edited");
      }
      
    });
  

  }

}
