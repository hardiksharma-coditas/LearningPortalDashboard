import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard-guard';

//loginPage
const loginPage = () => import('../app/pages/login/login').then(c => c.Login)

//adminPage
const adminPage=()=>import('../app/pages/admin-page/admin-page').then(c=>c.AdminPage)
//admin Children
const adminChildren=()=>import('../app/routes/admin.routes')

//instructorPage
const instructorPage=()=>import('../app/pages/instructor-page/instructor-page').then(c=>c.InstructorPage)
const instructorChildren=()=>import('../app/routes/instructor.routes')

//studentPage
const studentPage=()=>import('../app/pages/student-page/student-page').then(c=>c.StudentPage)
const studentChildren=()=>import('../app/routes/student.routes')

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
        canActivate:[authGuardGuard],
        loadComponent:adminPage,
        loadChildren:adminChildren
    },
    {
        path:'instructor',
        canActivate:[authGuardGuard],
        loadComponent:instructorPage,
        loadChildren:instructorChildren
    },
    {
        path:'student',
        canActivate:[authGuardGuard],
        loadComponent:studentPage,
        loadChildren:studentChildren
    }
];
