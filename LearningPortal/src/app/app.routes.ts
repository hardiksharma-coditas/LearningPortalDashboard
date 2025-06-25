import { Routes } from '@angular/router';

//loginPage
const loginPage = () => import('../app/pages/login/login').then(c => c.Login)

//adminPage
const adminPage=()=>import('../app/pages/admin-page/admin-page').then(c=>c.AdminPage)

//instructorPage
const instructorPage=()=>import('../app/pages/instructor-page/instructor-page').then(c=>c.InstructorPage)

//studentPage
const studentPage=()=>import('../app/pages/student-page/student-page').then(c=>c.StudentPage)

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: loginPage,
    },
    {
        path:'admin',
        loadComponent:adminPage
    },
    {
        path:'instructor',
        loadComponent:instructorPage
    },
    {
        path:'student',
        loadComponent:studentPage
    }
];
