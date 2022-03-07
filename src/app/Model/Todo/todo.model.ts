import { v4 as uuidv4 } from 'uuid';

export class Todo {
  private name
  private id
  private isCompleted
  constructor(name:string) {
    this.name=name
    this.id=uuidv4()
    this.isCompleted=false
  }
  getName(){
    return this.name
  }
  setName(name:string){
    this.name=name
  }
  getId(){
    return this.id
  }
  getIsCompleted(){
    return this.isCompleted
  }
  changeStatus(){
    this.isCompleted = !this.isCompleted
  }
}
