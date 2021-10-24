import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  
            

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }
  
  getUserName(){
    var userName  = JSON.parse(localStorage.getItem('userss') || "[]");

    return userName.name;
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
    body.question = this.getQuestion();
    body.setiem = this.getTime();
    console.log(body)
    let listUrl =  `${environment.apiUrl}/usersUpdate`
    return this.http.post(listUrl, body); 
  }
  submit(){
    this.submitScore().subscribe(data =>{
      console.log(data)
    })
    localStorage.clear();
    this.route.navigate(['/home'])
   
  }
  
}
