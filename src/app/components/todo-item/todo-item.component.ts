import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/Todo/todo.model';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem:Todo;
  constructor() {

  }

  ngOnInit(): void {
  }

}
