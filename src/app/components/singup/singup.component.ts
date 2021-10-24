import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  emailPattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
  constructor(private fb: FormBuilder) { }

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

  }
}
