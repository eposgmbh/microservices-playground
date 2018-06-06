import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ToDosModule } from './todos.module';
import { ToDo } from './todo';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ToDosService {
  private readonly serviceUrl = `${environment.apiGatewayUri}bff/todos`;

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.serviceUrl);
  }

  addToDo(toDo: ToDo) {
    return this.http.post(this.serviceUrl, toDo);
  }

  updateToDo(toDo: ToDo) {
    return this.http.put(this.serviceUrl + '/' + toDo.id, toDo);
  }
}
