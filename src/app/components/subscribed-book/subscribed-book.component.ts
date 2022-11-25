import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-subscribed-book',
  templateUrl: './subscribed-book.component.html',
  styleUrls: ['./subscribed-book.component.css']
})
export class SubscribedBookComponent {
  @Input() public Books: any;
  userType:any
  constructor(private crudApi: CrudService, route: Router) { }
  ngOnInit(): void {
    console.log("BOOK VALUE IS",this.Books)

    this.crudApi.userTypeSubject$.subscribe(data => {
      this.userType = data

      
      console.log('---usertype on booklist component---', data)
    });
  }
}
