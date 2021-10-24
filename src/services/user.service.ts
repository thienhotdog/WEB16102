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
    const listUrl =`${environment.apiUrl}/userss`;
    return this.http.get<Users[]>(listUrl)
  }
  AddUsers(name : any, email : any): Observable<any>{
    const body = {
      name: name,
      email: email
    }
    // console.log(body)
    let listUrl =  `${environment.apiUrl}/userss`
    return this.http.post(listUrl, body)
  }
  getUsersUpdate():Observable<any>{
    const listUrl = `${environment.apiUrl}/usersUpdate`;
    return this.http.get<Users[]>(listUrl)
  }
}
