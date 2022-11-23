import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnDestroy {

  booklist: any = []

  constructor(private service: CrudService, private route: Router) {

  }
  searchform = new FormGroup({
    category: new FormControl(""),
    title: new FormControl(""),
    author: new FormControl(""),
    price: new FormControl(""),
    publisher: new FormControl("")
  });

  searchSubmitted() {
    var cred = {
      category: "",
      title: "",
      author: "",
      price: "",
      publisher: ""
    };
    cred.category = this.searchform.value.category!;
    cred.title = this.searchform.value.title!;
    cred.author = this.searchform.value.author!;
    cred.price = this.searchform.value.price!;
    cred.publisher = this.searchform.value.publisher!;


    this.booklist = [
      {
        "bookID": 1,
        "title": "JungleBook",
        "author": "abc",
        "publisher": "ak",
        "releasedDate": "9 nov 2012",
        "category": "thriller",
        "price": "200",
        "active": "yes",
        "content": "animals"
      },
      {
        "bookID": 4,
        "title": "fish",
        "author": "try",
        "publisher": "ht",
        "releasedDate": "5 oct 2002",
        "category": "thriller",
        "price": "450",
        "active": "yes",
        "content": "time"
      }
    ]

    this.service.searchBook(cred).subscribe((res) => {
      this.booklist = res.bookList
    });
  }

  ngOnDestroy() {
    this.booklist = [];
    console.log('Component Destroyed')
  }

}

