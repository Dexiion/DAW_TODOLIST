import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  form: FormGroup;
  index: number;

  constructor(private fb: FormBuilder, private _todoService :TodoServiceService, private router: Router, private route: ActivatedRoute) {
    var index = 0;
    this.route.params.subscribe( params => index = params['id'] );
    this.index = index;
    var todo = this._todoService.getTodos()[index];
    
    var title = todo.title;
    var description = todo.description;

    var title = "";
    var description = "";

    this.form = this.fb.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
    })
    
   }

  ngOnInit(): void {}

  submit() {
    
    var todo: Todo = {
      title: this.form.value.title,
      description: this.form.value.description,
    }
    this._todoService.updateTodos(todo, this.index);
    this.router.navigate(['/']);
    
  }



}
