import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpipesComponent } from './testpipes.component';

describe('TestpipesComponent', () => {
  let component: TestpipesComponent;
  let fixture: ComponentFixture<TestpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
