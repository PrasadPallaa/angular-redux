import { EmployeeModel } from './../model/employee.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

   getAllEmployees(): Observable<EmployeeModel[]> {
     return this.http.get<EmployeeModel[]>('https://jsonplaceholder.typicode.com/posts');
   }
}
