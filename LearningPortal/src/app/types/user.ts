export interface User{

    id:string,
    name:string,
    email:string,
    password:string|number,
    role:'admin'|'student'|'instructor',
    token:string,
    status:'active'|'left'
}

export interface Users{
   
  first: string,
  prev: null|string,
  next: null|string,
  last:  string,
  pages: string,
  items: string,
  data: User[]
}