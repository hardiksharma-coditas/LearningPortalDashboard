import { Component, inject, OnInit } from '@angular/core';
import { GetStudents } from '../../../services/instructor/get-students';
import { User } from '../../../types/user';
import { ProfileCard } from '../../../components/profile-card/profile-card';
import { UserCard } from "../../../components/user-card/user-card";

@Component({
  selector: 'app-students-das-board',
  imports: [ProfileCard, UserCard],
  templateUrl: './students-das-board.html',
  styleUrl: './students-das-board.scss'
})
export class StudentsDashBoard implements OnInit {
   
  students:User[]=[]
  page:number=1
  limit:number=5
  getStudentService=inject(GetStudents)
   
  ngOnInit(): void {
    this.getStudents(this.page,this.limit)
  }

  getStudents(page:number,limit:number){
    this.getStudentService.getStudents(page,limit).subscribe({
      next:(data)=>{
        console.log(data)
        this.students=data.data
      }
    })
  }
  
}
