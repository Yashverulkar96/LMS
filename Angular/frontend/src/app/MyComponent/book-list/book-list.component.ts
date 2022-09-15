import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';
import { Book } from '../../Models/book'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  Booklist!: Book[];
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.getbook();
    // this.Booklist=[{
    //   "id":1,
    //   "name":"book1",
    //   "price":100,
    //   "writer":"writer1"
    // }]
  }

  private getbook(){
    this.bookservice.getbooklist().subscribe(data => {
      this.Booklist=data;
    }
    );
  }

}
