import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcourse',
  templateUrl: './viewallcourse.component.html',
  styleUrls: ['./viewallcourse.component.css']
})
export class ViewallcourseComponent implements OnInit {

  constructor(private myapi:ApiService) {
  this.fetchData()
   }
 fetchData=()=>{
  this.myapi.viewcourse().subscribe(
    (data)=>{
      this.viewcourse=data
    }
  )
 }


  viewcourse:any=[]


  ngOnInit(): void {
  }

}
