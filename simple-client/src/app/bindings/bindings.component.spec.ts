import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsComponent } from './bindings.component';

describe('TestComponent', () => {
  let component: BindingsComponent;
  let fixture: ComponentFixture<BindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
