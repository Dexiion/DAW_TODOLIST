import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: '',component: TodoListComponent },
  { path: 'create-ToDo', loadChildren: () => import("./components/create-todo/create-todo.module").then(x => x.CreateTodoModule) },
  { path: 'edit-todo/:id', loadChildren: () => import("./components/edit-todo/edit-todo.module").then(x => x.EditTodoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
