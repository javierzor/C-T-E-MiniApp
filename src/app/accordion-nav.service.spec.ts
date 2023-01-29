import { TestBed } from '@angular/core/testing';

import { AccordionNavService } from './accordion-nav.service';

describe('AccordionNavService', () => {
  let service: AccordionNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccordionNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
