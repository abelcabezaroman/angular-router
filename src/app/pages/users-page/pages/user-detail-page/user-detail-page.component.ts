import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {

  idUser;

  actualUser;

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idUser = params.get('idUser');
      // SIMULACIÓN PETICIÓN API CON FETCH
      this.actualUser = this.findUser(this.idUser);
    });
  }
  
  // SIMULACION API
  userList =  [
    {
      id: 1,
      name: 'Jose',
      role: 'Profesor',
      from: 'Portugal'
    },
    {
      id: 2,
      name: 'Pedro',
      role: 'Student',
      from: 'Japón'
    },
    {
      id: 3,
      name: 'Laura',
      role: 'Student',
      from: 'Jamaica'
    }
  ];

  findUser(idUser){
    return this.userList.find(user => user.id == idUser);
  }

}
