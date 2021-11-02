import { TestBed } from '@angular/core/testing';

import { LoopMachineService } from './loop-machine.service';

describe('LoopMachineService', () => {
  let service: LoopMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoopMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
