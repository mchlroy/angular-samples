import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteventsComponent } from './testevents.component';

describe('TesteventsComponent', () => {
  let component: TesteventsComponent;
  let fixture: ComponentFixture<TesteventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
