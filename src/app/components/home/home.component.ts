import { Component, OnInit } from '@angular/core';
import {Users} from '../../../models/users';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:Users[] =[];
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsersUpdate().subscribe(data =>{
      this.users = data;
      console.log(data)
    })
  }

  

}
