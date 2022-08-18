import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

  students:any

  constructor(private service:StudentService) { }

  ngOnInit(): void {

    this.service.getStudent().subscribe(data=>{
      this.students = data;
    })
  }

}
