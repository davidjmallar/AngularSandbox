import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { ApiService } from '../services/api.service';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ELEMENT_DATA: Todo[] = [
  {userId: 1, title: 'gfgdsg', id: 1.0079, completed: true},
  {userId: 1, title: 'Hydrogen', id: 1.0079, completed: true},
  {userId: 16, title: 'dsadsa', id: 123.0079, completed: true},
  {userId: 10, title: 'Hydrogen', id: 1.0032179, completed: false},
  {userId: 100, title: 'dsafsa', id: 121.3210079, completed: true},
  {userId: 13, title: 'Hydrogen', id: 121.0079, completed: false},
  {userId: 15, title: 'gfsgd', id: 431.0079, completed: true},
];

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit, OnDestroy {
  
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource : Todo[] = [];
  isLoading = false;

  constructor(private apiService : ApiService) { }
  
  sub : Subscription | undefined;

  ngOnInit(): void {
    this.isLoading = true;
    this.sub = this.apiService.getTodos().subscribe(response=>{
      this.dataSource = response;
      this.isLoading = false;
    }, err=>{
      this.isLoading = false;
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
