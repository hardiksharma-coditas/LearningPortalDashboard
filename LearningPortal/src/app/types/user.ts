export interface User{

    id:string,
    name:string,
    email:string,
    password:string|number,
    role:'admin'|'student'|'instructor',
    token:string
}