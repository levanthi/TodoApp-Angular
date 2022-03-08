import { Component, EventEmitter, Input, Output,ElementRef, ViewChild } from '@angular/core';
import { Todo } from 'src/app/Model/Todo/todo.model';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todoItem !: Todo
  @Output() idRemove = new EventEmitter<string>()
  @Output() idStatusChange = new EventEmitter<string>()
  @Output() nameChange = new EventEmitter<{name:string,id:string}>()
  @ViewChild("todoName") todoName !:ElementRef
  @ViewChild("todoItemRef") todoItemRef!:ElementRef
  constructor() {
  }
  handleDelete(e:Event)
  {
    e.preventDefault()
    this.todoItemRef.nativeElement.setAttribute('style','animation:disappear .5s;')
    setTimeout(()=>{
      const target = e.target as Element
      this.idRemove.emit(target.id)
    },500)
  }
  onChangeStatus(event:Event)
  {
    event.preventDefault()
    const target = event.target as Element
    if(target)
    {
      this.idStatusChange.emit(target.id)
    }
  }
  onEditName(event:Event){
    event.preventDefault()
    this.todoName.nativeElement.setAttribute('contenteditable',true)
    this.todoName.nativeElement.focus()
    console.log('edit is called!!')
  }
  handleBlur(event:Event)
  {
    const target = event.target as Element
    const id = target.parentElement?.firstElementChild?.id
    this.todoName.nativeElement.setAttribute('contenteditable',false)
    if(id && target.innerHTML)
    {
      this.nameChange.emit({name:target.innerHTML,id:id})
    }
  }
  handleKeydown(event:KeyboardEvent){
    if(event.key==='Enter')
    {
      this.todoName.nativeElement.blur()
    }
  }
}
