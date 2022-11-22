import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  constructor(private service:CrudService,private route:Router){

  }
  searchform = new FormGroup({
    category : new FormControl(""),
    title : new FormControl(""),
    author : new FormControl(""),
    price : new FormControl(""),
    publisher : new FormControl("")
  });

  searchSubmitted(){
    var cred={
      category : "",
      title :"",
      author :"",
      price:"",
      publisher:""
    };
    cred.category=this.searchform.value.category!;
    cred.title=this.searchform.value.title!;
    cred.author=this.searchform.value.author!;
    cred.price=this.searchform.value.price!;
    cred.publisher=this.searchform.value.publisher!;

    this.service.searchBook(cred).subscribe((res) =>{
      var obj = JSON.stringify(res);
      console.log("message is",res);
      
    });
  
  }
  
}
