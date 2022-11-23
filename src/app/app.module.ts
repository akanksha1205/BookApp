import { CrudService } from './service/crud.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ViewToBeDisplayed } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewToBeDisplayed,
    SearchBookComponent,
    RegisterComponent,
    LoginComponent,
    SubscribeComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
