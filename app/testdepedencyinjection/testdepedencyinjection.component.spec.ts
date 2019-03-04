import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdepedencyinjectionComponent } from './testdepedencyinjection.component';

describe('TestdepedencyinjectionComponent', () => {
  let component: TestdepedencyinjectionComponent;
  let fixture: ComponentFixture<TestdepedencyinjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdepedencyinjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdepedencyinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
