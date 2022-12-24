import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  @Input() photographerName: string;
  @Input() lsVar: string;
  @Input() ssVar: string;

  constructor() {
    this.photographerName = '';
    this.lsVar = '';
    this.ssVar = '';
  }

  ngOnInit(): void {
    localStorage.setItem('myCat', 'Tom');
    this.lsVar = <string>localStorage.getItem('myCat');
    localStorage.removeItem('myCat');
    localStorage.clear();
    
    sessionStorage.setItem("key", "Basall"); // Save data to sessionStorage
    this.ssVar = <string>sessionStorage.getItem("key"); // Get saved data from sessionStorage
    sessionStorage.removeItem("key"); // Remove saved data from sessionStorage
    sessionStorage.clear(); // Remove all saved data from sessionStorage  
  }

}
