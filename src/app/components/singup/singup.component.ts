import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private fb: FormBuilder, private UserService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  infoUser = this.fb.group({
    "name": ['',[Validators.required]],
    "email": ["",[Validators.required,  Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]],
    "password":["",[Validators.required]]
  })
  get f(){
    return this.infoUser.controls
  }

  Onsubmit(){
    this.UserService.addUsers(this.infoUser.value).subscribe(data =>{
      console.log(data)
      alert('đăng ký thành công');
      this.route.navigate(['/signin'])
    })
  }
}
