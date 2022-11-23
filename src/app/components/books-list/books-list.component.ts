import { CrudService } from 'src/app/service/crud.service';
import { Book } from './../../service/book';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  @Input() public Books: any;
  userType:any
  constructor(private crudApi: CrudService, route: Router) { }
  ngOnInit(): void {
    console.log(this.Books)

    this.crudApi.userTypeSubject$.subscribe(data => {
      this.userType = data

      console.log('---usertype on booklist component---', data)
    })
  }
  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm("Book will be deleted permanentely")) {
      this.crudApi.deleteBook(id).subscribe(res => {
        this.Books.splice(i, 1);
      })
    }
  }


}

