import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private httpService: HttpService) { 
    this.users= [];
  }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => {
        this.users = data;
    });
  
  }

}
