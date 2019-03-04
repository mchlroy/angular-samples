import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeststructuraldirectivesComponent } from './teststructuraldirectives.component';

describe('TeststructuraldirectivesComponent', () => {
  let component: TeststructuraldirectivesComponent;
  let fixture: ComponentFixture<TeststructuraldirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeststructuraldirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeststructuraldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
