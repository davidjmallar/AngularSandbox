import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  list = [
    {age: 1, name:'Joe'},
    {age: 2, name:'Jane'},
    {age: 2, name:'Jane'},
    {age: 2, name:'Jane'},
    {age: 2, name:'Jane'},
    {age: 2, name:'Jane'},
    {age: 2, name:'Jane'},
    {age: 2, name:'Jane'},
  ];

  ngOnInit(): void {
  }

}
