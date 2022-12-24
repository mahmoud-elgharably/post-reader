import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  linkList: Link[] = [];

  constructor(private linkService: LinkService, private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark: Link): void {
    this.bookmarkService.addToBookmarks(bookmark);
    alert("Added!");
  }

}
