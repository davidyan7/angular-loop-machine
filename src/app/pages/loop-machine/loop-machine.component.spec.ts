import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopMachineComponent } from './loop-machine.component';

describe('LoopMachineComponent', () => {
  let component: LoopMachineComponent;
  let fixture: ComponentFixture<LoopMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
