import { Subscribe } from './subscribe';
import { Search } from './search';
import { Register } from './register';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Book } from './book';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //nodesjs api link
  REST_API:string = "http://localhost:9091/api/v1/digitalbooks";
  REST_API2:string = "http://localhost:9090/api/v1/digitalbooks";
  httpHeaders = new HttpHeaders().set('Content-Type','application/json')

  constructor(private httpClient:HttpClient) { }

  login(data:Login){
    let API_URL = `${this.REST_API}/signin`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError));
  }

  register(data:Register){
    let API_URL = `${this.REST_API}/signup`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError));
  }
  //add records
  createBook(data:Book):Observable<any>{
    let API_URL = `${this.REST_API}/createbook`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError));
  }
  subscribeBook(data:Subscribe):Observable<any>{
    let API_URL = `${this.REST_API}/subscribe`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError));
  }

  getBooks(){
    return this.httpClient.get(`${this.REST_API}`);
  }
  searchBook(data:Search) :Observable<any>{
    let API_URL = `${this.REST_API2}/search`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError))}

  updateBook(id:any , data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(catchError(this.handleError))
  }  
  
  deleteBook(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //handlling client error
      errorMessage = error.error.message;
    }
      else{
        //handling server error
        errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`
      }
      console.log(errorMessage);
      return throwError(errorMessage);
      
    }

  }
    

