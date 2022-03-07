import { Component, DoCheck, OnChanges, OnInit, SimpleChanges,ChangeDetectionStrategy    } from '@angular/core'
import { Todo } from './Model/Todo/todo.model'

@Component({
  selector: 'app-root',
   changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnChanges,DoCheck {

  Todos = new Array<Todo>()
  searchInput = ''
  constructor()
  {

  }
  //life cycle hooks
  ngDoCheck(): void {
    console.log(this.Todos);

  }
  ngOnInit(): void {
    console.log('onInit is called!')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange is called')
  }
  //Handle event
  handleAddTodo(todo:string)
  {
    this.Todos.unshift(new Todo(todo))
  }
  handleRemove(e:string)
  {
    this.Todos = this.Todos.filter((todo)=>{
      return todo.getId()!==e
    })
  }
  handleStatusChange(event:string)
  {
    // Create new Todos
      // const newTodos = [...this.Todos]
      // for(let i=0;i<newTodos.length;i++)
      // {
      //   if(newTodos[i].getId()===event)
      //   {
      //     newTodos[i].changeStatus()
      //     break
      //   }
      // }
      // this.Todos = newTodos
    // Handle on current Todos
    for(let i=0;i<this.Todos.length;i++)
      {
        if(this.Todos[i].getId()===event)
        {
          this.Todos[i].changeStatus()
          break
        }
      }
  }
  handleNameChange(event:{name:string,id:string})
  {
    for(let i=0;i<this.Todos.length;i++)
    {
      if(this.Todos[i].getId()===event.id)
      {
        this.Todos[i].setName(event.name)
        break
      }
    }
  }
  handleSearchInput(event:string){
    this.searchInput = event
  }
  filter():Array<Todo>{
    return this.Todos.filter(todo=>{
      return todo.getName().includes(this.searchInput)
    })
  }
}
