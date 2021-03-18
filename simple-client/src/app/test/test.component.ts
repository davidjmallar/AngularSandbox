import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  text = 0;
  constructor(private route: ActivatedRoute) { }
  public clickMethod(): void {
    this.text++;
    console.log('clicked');
  }
  ngOnInit(): void {
  }
}
