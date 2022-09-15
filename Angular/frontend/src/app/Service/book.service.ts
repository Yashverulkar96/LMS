import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // baseUrl ="http://127.0.0.1:8000/books/";
  constructor(private httpClient: HttpClient) { }

  getbooklist():Observable<Book[]>{
    return this.httpClient.get<Book[]>("http://127.0.0.1:8000/books/")
  }
}
