import { TestBed } from '@angular/core/testing';

import { AccordionNavtecnicosService } from './accordion-navtecnicos.service';

describe('AccordionNavtecnicosService', () => {
  let service: AccordionNavtecnicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccordionNavtecnicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
