import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDosComponent } from './todos.component';

const routes: Routes = [
  { path: '', component: ToDosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDosRoutingModule { }
