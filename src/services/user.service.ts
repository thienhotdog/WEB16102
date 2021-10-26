import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Users} from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers():Observable<any>{
    const listUrl =`${environment.apiUrl}/guests`;
    return this.http.get<Users[]>(listUrl)
  }
  AddGuests(registerData: any): Observable<any>{
    let listUrl =  `${environment.apiUrl}/guests`
    return this.http.post(listUrl, registerData)
  }
  getUsersUpdate():Observable<any>{
    const listUrl = `${environment.apiUrl}/guestsUpdate`;
    return this.http.get<Users[]>(listUrl)
  }
  addUsers(signup: any): Observable<any>{
    const listUrl = `${environment.apiUrl}/signup`;
    return this.http.post(listUrl, signup);
  }
  loginUser(data : any): Observable<any>{
    const listUrl = `${environment.apiUrl}/signin`;
    return this.http.post<Users[]>(listUrl, data)
  }
}
