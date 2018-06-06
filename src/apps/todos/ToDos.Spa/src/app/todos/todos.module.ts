import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDosRoutingModule } from './todos-routing.module';
import { ToDosComponent } from './todos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, ToDosRoutingModule],
  declarations: [ToDosComponent],
  exports: [ToDosComponent]
})
export class ToDosModule { }
