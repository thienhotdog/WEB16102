import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
 
  constructor(private fb: FormBuilder, private UserService: UserService, private route: Router) { }

  ngOnInit(): void {
  }


  infoUser = this.fb.group({
    "password": ['',[Validators.required]],
    "email": ["",[Validators.required,  Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]]
  })
  get f(){
    return this.infoUser.controls
  }


  Onsubmit(){
    this.UserService.loginUser(this.infoUser.value).subscribe(data =>{
      console.log(data.user);
      alert('đăng nhập thành công')
      localStorage.clear();
      localStorage.setItem('userss', JSON.stringify(data.user));
      this.route.navigate(['/quiz'])
    })
  }
}
