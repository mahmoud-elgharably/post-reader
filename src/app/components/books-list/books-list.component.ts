import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  bookList: Book[] = [];

  ngOnInit(): void {
    this.bookList = [
      {
        id: 1,
        title: 'Pride and Prejudice',
      },
      {
        id: 2,
        title: 'The Great Gatsby',
      },
      {
        id: 3,
        title: 'The Catcher in the Rye',
      }
    ]
  }

  markAsFavorite(book: Book): void {
    console.log(`${book.title} has been added to favorites.`);
  }

}
