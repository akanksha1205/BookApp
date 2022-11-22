import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'signin',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
 // {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'book-list',component:BooksListComponent},
  {path:'createbook',component:AddBookComponent},
  {path:'edit',component:UpdateBookComponent},
  {path:'search',component:SearchBookComponent},
  {path:'subscribe',component:SubscribeComponent},
  {path:'create',component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ViewToBeDisplayed = [LoginComponent,RegisterComponent,AddBookComponent,SearchBookComponent,DashboardComponent,SubscribeComponent,AddBookComponent]