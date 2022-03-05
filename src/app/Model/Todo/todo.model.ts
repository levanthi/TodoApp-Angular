import { v4 as uuidv4 } from 'uuid';

export class Todo {
  private name
  private id
  constructor(name:string) {
    this.name=name
    this.id=uuidv4()
  }
  getName(){
    return this.name
  }
}
