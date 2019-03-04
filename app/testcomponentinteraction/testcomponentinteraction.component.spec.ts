import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomponentinteractionComponent } from './testcomponentinteraction.component';

describe('TestcomponentinteractionComponent', () => {
  let component: TestcomponentinteractionComponent;
  let fixture: ComponentFixture<TestcomponentinteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcomponentinteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcomponentinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
