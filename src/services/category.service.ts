import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
   getList(): Observable<Category[]>{
     let listUrl = `${environment.apiUrl}/category`
     return this.http.get<Category[]>(listUrl)
   } 

}

