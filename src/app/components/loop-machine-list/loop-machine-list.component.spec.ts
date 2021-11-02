import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopMachineListComponent } from './loop-machine-list.component';

describe('LoopMachineListComponent', () => {
  let component: LoopMachineListComponent;
  let fixture: ComponentFixture<LoopMachineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopMachineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopMachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
