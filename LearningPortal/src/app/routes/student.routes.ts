import { Routes } from "@angular/router";
import { MyCourseComponent } from "../pages/student/my-course-component/my-course-component";

const courseComponent=()=>import('../pages/admin/course-component/course-component').then(c=>c.CourseComponent)

const activeUsers=()=>import('../pages/admin/active-users-component/active-users-component').then(c=>c.ActiveUsersComponent)

const myCourseComponent=()=>import('../pages/student/my-course-component/my-course-component').then(c=>c.MyCourseComponent)

export const studentRoutes: Routes = [
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    },
    {
        path:'courses',
        loadComponent:courseComponent
    },
     {
        path:'users',
        loadComponent:activeUsers
    },
     {
        path:'mycourses',
        loadComponent:myCourseComponent
    }
];

export default studentRoutes;