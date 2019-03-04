import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdepedencyinjectiondetailsComponent } from './testdepedencyinjectiondetails.component';

describe('TestdepedencyinjectiondetailsComponent', () => {
  let component: TestdepedencyinjectiondetailsComponent;
  let fixture: ComponentFixture<TestdepedencyinjectiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdepedencyinjectiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdepedencyinjectiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
