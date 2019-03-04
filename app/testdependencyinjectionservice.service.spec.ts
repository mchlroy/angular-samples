import { TestBed, inject } from '@angular/core/testing';

import { TestdependencyinjectionserviceService } from './testdependencyinjectionservice.service';

describe('TestdependencyinjectionserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestdependencyinjectionserviceService]
    });
  });

  it('should be created', inject([TestdependencyinjectionserviceService], (service: TestdependencyinjectionserviceService) => {
    expect(service).toBeTruthy();
  }));
});
