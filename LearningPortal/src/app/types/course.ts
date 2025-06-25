export interface Course{

    id:string,
    name:string
    type:'paid'|'free',
    cost:string,
    instructor:string,
    duration:string
}

export interface Courses{
    
  first: number,
  prev: null|number,
  next: number,
  last: number,
  pages: number,
  items: number,
  data:Course[]

}