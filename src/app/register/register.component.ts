import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  student:Student={
    uname: "",
    email: "",
    phone: "",
    password: "",
    course: "",
    dob: new Date
  }
  
  register()
  {
   // storing the student data in the json server
    this.service.addStudent(this.student).subscribe(data=>{
      console.log(data);
      alert("Student Registered Successfully!")
      this.router.navigate(['/login']);
    })
  }


}
