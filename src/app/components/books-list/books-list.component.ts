import { CrudService } from 'src/app/service/crud.service';
import { Book } from './../../service/book';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
Books:any=[];
constructor(private CrudApi:CrudService,route:Router){}
ngOnInit():void{
  this.CrudApi.getBooks().subscribe(res=>{
    console.log(res);
    this.Books=res;
  })
}
 delete(id:any,i:any){
   console.log(id);
   if(window.confirm("Book will be deleted permanentely")){
      this.CrudApi.deleteBook(id).subscribe(res=>{
        this.Books.splice(i,1);
      })
   }
 } 
  

}

