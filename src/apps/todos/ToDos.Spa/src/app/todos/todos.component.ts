import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';

import { ToDo } from './todo';
import { ToDosService } from './todos.service';
import { LoadingIndicatorService } from '../loading-indicator.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class ToDosComponent implements OnInit {
  constructor(private toDosService: ToDosService, private loadingIndicatorService: LoadingIndicatorService) { }

  dataSource: MatTableDataSource<ToDo>;
  displayedColumns = ['text', 'userId', 'updated', 'done'];
  newToDo = new ToDo();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.reloadToDos();
  }

  reloadToDos() {
    this.loadingIndicatorService.show();

    this.toDosService.getToDos().subscribe(toDos => {
      // sort ToDos descending by 'updated' date
      toDos.sort((a, b) => a.updated > b.updated ? -1 : a.updated === b.updated ? 0 : 1);

      this.dataSource = new MatTableDataSource(toDos);
      this.dataSource.sort = this.sort;

      this.loadingIndicatorService.hide();
    });
  }

  addToDo() {
    this.loadingIndicatorService.show();

    this.toDosService.addToDo(this.newToDo).subscribe(() => {
      this.newToDo = new ToDo();
      this.reloadToDos();
    });
  }

  updateToDo(toDo: ToDo) {
    this.loadingIndicatorService.show();

    toDo.done = !toDo.done;

    this.toDosService.updateToDo(toDo).subscribe(() => {
      this.loadingIndicatorService.hide();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
