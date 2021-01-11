import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  userList =  [
    {
      id: 1,
      name: 'Jose',
    },
    {
      id: 2,
      name: 'Pedro',
    },
    {
      id: 3,
      name: 'Laura',
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
