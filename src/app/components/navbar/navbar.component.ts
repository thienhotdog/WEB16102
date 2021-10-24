import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { QuizComponent } from '../quiz/quiz.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, private time:  QuizComponent) { }

  ngOnInit(): void {
  }

  SignOut(){
    localStorage.clear();
    this.route.navigate(['']);
  }
}
