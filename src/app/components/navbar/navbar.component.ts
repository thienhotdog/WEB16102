import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient  ) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.submitScore().subscribe(data =>{
      console.log(data)
    })
    localStorage.clear();
    this.route.navigate(['']);
  }

  getQuestion(){
    const questions = JSON.parse(localStorage.getItem('question') || "[]");
    return questions
  }
  getTime(){
    const seconds = JSON.parse(localStorage.getItem('setiem') || "[]");

    return Math.floor(seconds/3600) + ':' + Math.floor(seconds / 60) + ':' + Math.floor(seconds % 60)
  }

  submitScore(){
    var body = JSON.parse(localStorage.getItem('userss') || "[]");
    body.question = 0 + this.getQuestion();
    body.setiem = this.getTime();
    body.id = null;
    console.log(body)
    let listUrl =  `${environment.apiUrl}/guestsUpdate`
    return this.http.post(listUrl, body); 
  }
}
