import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttwowaybindingComponent } from './testtwowaybinding.component';

describe('TesttwowaybindingComponent', () => {
  let component: TesttwowaybindingComponent;
  let fixture: ComponentFixture<TesttwowaybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttwowaybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
