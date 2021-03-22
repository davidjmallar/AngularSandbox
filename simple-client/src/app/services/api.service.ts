import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../fifth/fifth.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient : HttpClient) {
    console.log('Http api service Ctor');
  }

  getTodos() : Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(environment.settings.backendUri);
  }

}
