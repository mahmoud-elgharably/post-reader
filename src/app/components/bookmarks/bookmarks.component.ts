import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  bookmarkList: Link[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
        this.bookmarkList = this.bookmarkService.getBookmarks();
  }

  clearBookmarks(): void {
    this.bookmarkService.clearBookmarks();
    this.bookmarkList = [];
    alert("Cleared!");
  }

}
