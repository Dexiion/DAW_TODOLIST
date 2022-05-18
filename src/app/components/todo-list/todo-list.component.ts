import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosList: Todo[] = [];

  constructor(private _todoService :TodoServiceService) {   }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todosList = this._todoService.getTodos();
    
  }

  deleteTodo(index: number) {
    
    this._todoService.deleteTodo(index);
    this.loadTodos();
  }

}
