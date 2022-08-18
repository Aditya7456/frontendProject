import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String = ""
  pwd:String = ""
  stu:any
  constructor(private service:StudentService, private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.service.getStudent().subscribe(student=>{

      this.stu = student;
      var isUser:boolean = false;
      console.log("email " + this.email + " pass " + this.pwd);
      for(let x = 0; x<this.stu.length; x++)
      {
        if(this.stu[x].email==this.email && this.stu[x].password == this.pwd)
        {
          isUser = true;
          alert("Login Successfully!");
          this.router.navigate(['/dashboard']);
          break;
        }
      }
      if(!isUser)
      {
        alert("Please Enter Valid Credentails!");
        window.location.reload();
      }
      
    })
  }
}
