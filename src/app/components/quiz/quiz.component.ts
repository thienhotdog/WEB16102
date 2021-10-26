import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz';
import {Users} from '../../../models/users';
import {UserService} from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 
  questions: any = [{}];
  curentQuiz = 0;
  answerSelected = false;
  correctAnswer = 0;
  incorrectAnswer = 0;
  users:Users[] =[];
  randomize: number = 0;
  seconds: number = 0;
  time: any;
  constructor(private QuizService: QuizService, private UserService: UserService, private route: Router) { 
  }
  timeOut(){
    return Math.floor(this.seconds/3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60)
  }

  ngOnInit(): void {
    this.QuizService.getQuiz().subscribe(data =>{
       this.questions = data; 
  
       this.startTime();
    })
  }
  checkAnswer(option: boolean){
    console.log(option);
    this.curentQuiz++;
    console.log(this.questions.length);
    if(option){
      this.correctAnswer++;
      console.log(this.correctAnswer)
    }else{
      this.incorrectAnswer++;
    }
    localStorage.setItem('question', JSON.stringify(this.correctAnswer));
    if(this.curentQuiz == 10){
      clearInterval(this.time);
      this.route.navigate(['/result'])
    }
  }
  startTime(){
    this.time = setInterval(() =>{
      this.seconds++;
      localStorage.setItem('setiem', this.seconds.toString());
    }, 1000);
  }
}
