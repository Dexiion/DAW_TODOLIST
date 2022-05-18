import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _todoService :TodoServiceService, private router: Router ) { 
    var title = "";
    var description = "";

    this.form = this.fb.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
    })
  }

  submit() {
    
    var todo: Todo = {
      title: this.form.value.title,
      description: this.form.value.description
    }
    
    this._todoService.addTodo(todo);
    this.router.navigate(['/']);
  };

  ngOnInit(): void {
  }

}
