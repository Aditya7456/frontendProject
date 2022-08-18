import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Student } from './Student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  // baseUrl = "http://localhost:3000/students"
  baseUrl = "http://localhost:8090/api/v1/students/"

  addStudent(student:Student)
  {
    return this.http.post(this.baseUrl + "add",student);
  }

  getStudent()
  {
    return this.http.get(this.baseUrl + "getAll");
  }
}
