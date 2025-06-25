import { Routes } from "@angular/router";

//courses
const courses=()=>import('../pages/admin/course-component/course-component').then(c=>c.CourseComponent)

//students
const studentsDashBoard=()=>import('../pages/instructor/students-das-board/students-das-board').then(c=>c.StudentsDashBoard)

//Ratings
const ratings=()=>import('../pages/instructor/ratings/ratings').then(c=>c.Ratings)

export const instructorRoutes: Routes = [
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    },
    {
        path:'courses',
        loadComponent:courses
    },
     {
        path:'students',
        loadComponent:studentsDashBoard
    },
     {
        path:'ratings',
        loadComponent:ratings
    }
];

export default instructorRoutes;