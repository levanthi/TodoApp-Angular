import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Model/Todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() Todos:Array<Todo>;
  @Output() todoNeedAdd = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  nameInput=''
  handleAddTodo()
  {
    if(this.nameInput)
    {
      this.todoNeedAdd.emit(this.nameInput)
      this.nameInput=''
    }
  }
  hadnleIsEnter(event:KeyboardEvent)
  {
    if(event.key==='Enter')
    {
      this.handleAddTodo()
    }
  }
}
