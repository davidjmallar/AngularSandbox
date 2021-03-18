import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {
  text = 0;
  constructor(private route: ActivatedRoute) { }
  public clickMethod(): void {
    this.text++;
    console.log('clicked');
  }
  ngOnInit(): void {
  }
}
