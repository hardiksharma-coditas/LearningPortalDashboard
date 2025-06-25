import { Routes } from '@angular/router';

//courses
const courseComponent=()=>import('../pages/admin/course-component/course-component').then(c=>c.CourseComponent)

//Active Users
const activeUsersComponent=()=>import('../pages/admin/active-users-component/active-users-component').then(c=>c.ActiveUsersComponent)

//Stats
const statsComponent=()=>import('../pages/admin/stats-component/stats-component').then(c=>c.StatsComponent)

export const adminRoutes: Routes = [
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
        path:'activeusers',
        loadComponent:activeUsersComponent
    },
     {
        path:'stats',
        loadComponent:statsComponent
    }
];

export default adminRoutes;
