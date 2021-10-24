import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { 

  }
  getQuiz(): Observable<Quiz[]>{
    let listUrl = `${environment.apiUrl}/questions`
    return this.http.get<Quiz[]>(listUrl)
  }

 
}
