import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Model/Todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() Todos!:Array<Todo>;
  @Output() todoNeedAdd = new EventEmitter()
  @Output() idRemove = new EventEmitter()
  @Output() idStatusChange = new EventEmitter()
  @Output() nameChange = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }
  nameInput=''
  handleAddTodo(event:Event)
  {
    if(this.nameInput)
    {
      let target = event.target as Element
      target = target.parentElement?.firstElementChild || new Element
      let inputElement = target as HTMLInputElement
      this.todoNeedAdd.emit(this.nameInput)
      this.nameInput=''
      inputElement.focus()
    }
  }
  hadnleIsEnter(event:KeyboardEvent)
  {
    if(event.key==='Enter')
    {
      this.handleAddTodo(event)
    }
  }
  onRemove(event:string)
  {
    this.idRemove.emit(event)
  }
  onStatusChange(event:string)
  {
    this.idStatusChange.emit(event)
  }
  onNameChange(event:{name:string,id:string})
  {
    this.nameChange.emit(event)
  }
}
