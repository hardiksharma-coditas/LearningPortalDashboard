import { Component, inject, OnInit } from '@angular/core';
import { UserCard } from "../../../components/user-card/user-card";
import { User, Users } from '../../../types/user';
import { GetActiveUsers } from '../../../services/admin/get-active-users';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-active-users-component',
  imports: [UserCard,ReactiveFormsModule],
  templateUrl: './active-users-component.html',
  styleUrl: './active-users-component.scss'
})
export class ActiveUsersComponent implements OnInit{

  activeusers:User[]=[]
  getActiveUsersService=inject(GetActiveUsers)
  page:number=1
  limit:number=5
  totalPages:number=0
  filter:string=''
  searchElement=new FormControl('')

  ngOnInit(): void {
    this.getUsers(this.page,this.limit)
  }

  moveLeft() {
    if (this.page > 1) {
      --this.page;
    }

    this.getUsers(this.page,this.limit)
  }

  moveRight() {

    if (this.page < this.totalPages) {
      ++this.page
    }

     this.getUsers(this.page,this.limit)

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
  this.getUsers(this.page,this.limit)
  }


  getUsers(page:number,limit:number){
    this.getActiveUsersService.getUsers(page,limit).subscribe({
      next:(data)=>{
        this.activeusers=data.data
        console.log(data)
      }
    })
  }


}
