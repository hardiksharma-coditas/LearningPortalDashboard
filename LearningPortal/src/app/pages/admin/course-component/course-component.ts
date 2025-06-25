import { Component, inject, OnInit } from '@angular/core';
import { CourseCard } from "../../../components/course-card/course-card";
import { Course } from '../../../types/course';
import { GetCoursesService } from '../../../services/admin/get-courses-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Modal } from '../../../shared/modal/modal';
import { AddCourse } from "../../instructor/add-course/add-course";
import { AddDirective } from '../../../directives/add-directive';

@Component({
  selector: 'app-course-component',
  imports: [CourseCard, ReactiveFormsModule, Modal, AddCourse],
  templateUrl: './course-component.html',
  styleUrl: './course-component.scss'
})
export class CourseComponent implements OnInit {

  courses: Course[] = []
  page: number = 1
  limit: number = 5
  totalPages: number = 0
  filter:string=''
  filteredCourses:Course[]=[]
  showModal:boolean=false

  searchElement=new FormControl('')

  getCourseService = inject(GetCoursesService)

  ngOnInit(): void {
    this.getCourses(this.page, this.limit);

    this.searchElement.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next:(data)=>{

        // this.filteredCourses=this.courses.filter()
      }
    })
  }

  openModal(){
    this.showModal=true
  }

  closeModal(){
    this.showModal=false
  }
  moveLeft() {
    if (this.page > 1) {
      --this.page;
    }

    this.getCourses(this.page,this.limit)
  }

  moveRight() {

    if (this.page < this.totalPages) {
      ++this.page
    }

     this.getCourses(this.page,this.limit)

  }

  search(e:Event){
  
  }


  setFilter(e:Event){
  const value=(e.target as HTMLSelectElement).value
  this.filter=value
  }

  setLimit(e: Event) {
  const value=(e.target as HTMLSelectElement).value
  console.log(value)
  this.limit=parseInt(value)
  this.getCourses(this.page,this.limit)
  }

  getCourses(page: number, limit: number) {
    this.getCourseService.getCourses(page, limit).subscribe({
      next: (data) => {
        console.log(data);
        this.courses = data.data
        this.filteredCourses=data.data
        this.totalPages = data.pages
      },
      error: (error) => {
        console.log(error)
      },
    })
  }

}
