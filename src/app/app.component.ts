import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookshop';
  userType:any 

 
  constructor(private api:CrudService){
    this.api.userTypeSubject$.subscribe(data => {
      this.userType = data
    })
  }

  logout(){
    localStorage.clear();
    this.api.setUserType();
  }
}
