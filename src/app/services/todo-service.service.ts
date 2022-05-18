import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {title: "Title1", description: "Description1"},
      {title: "Title2", description: "Description2"},
    ];
  }

  getTodos() {
    console.log(this.todos);
    
    return this.todos;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodos(todo: Todo, index: number) {
    this.todos[index] = todo;
  }

}
