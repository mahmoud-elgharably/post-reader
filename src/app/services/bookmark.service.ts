import { Injectable } from '@angular/core';
import { Link } from '../models/Link';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarkList: Link[] = [];

  constructor() { }

  getBookmarks(): Link[] {
    return this.bookmarkList;
  }

  addToBookmarks(bookmark: Link): Link[] {
    this.bookmarkList.push(bookmark);
    return this.bookmarkList;
  }

  clearBookmarks(): Link[] {
    this.bookmarkList = [];
    return this.bookmarkList;
  }

}
