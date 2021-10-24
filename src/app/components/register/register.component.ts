import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

  constructor(private UserService: UserService,  private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  infoUser = this.fb.group({
    "name": [""],
    "email": [""]
  })
  get f(){
    return this.infoUser.controls
  }
  Onsubmit(name: string, email: string){
      this.UserService.AddUsers(name,email).subscribe(data =>{
        localStorage.clear();
        localStorage.setItem('userss', JSON.stringify(data));
        
       setTimeout(() =>{
        this.route.navigate(["/quiz"])
       },2000)
      })

     
  }
}
