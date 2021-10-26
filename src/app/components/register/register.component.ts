import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

import {Router} from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
   constructor(private UserService: UserService,  private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  infoUser = this.fb.group({
    "name": ['',[Validators.required]],
    "email": ["",[Validators.required,  Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]]
  })
  get f(){
    return this.infoUser.controls
  }
  Onsubmit(){
      this.UserService.AddGuests(this.infoUser.value).subscribe(data =>{
        localStorage.clear();
        localStorage.setItem('userss', JSON.stringify(data));
        
       setTimeout(() =>{
        this.route.navigate(["/quiz"])
       },2000)
      }) 
  }
}
