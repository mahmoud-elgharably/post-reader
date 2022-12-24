import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() marked: EventEmitter<Book> = new EventEmitter();

  constructor() {
    this.book={
      id: 0,
      title: ''
    }
  }

}
