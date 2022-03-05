import { Component, OnInit } from '@angular/core'
import { Todo } from './Model/Todo/todo.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Todos = new Array<Todo>()
  constructor()
  {
    this.Todos.push(new Todo('name1'))
    this.Todos.push(new Todo('name1'))
    this.Todos.push(new Todo('name1'))
  }
  handleAddTodo(todo:string)
  {
    this.Todos.unshift(new Todo(todo))
  }
}
