import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopMachinePreviewComponent } from './loop-machine-preview.component';

describe('LoopMachinePreviewComponent', () => {
  let component: LoopMachinePreviewComponent;
  let fixture: ComponentFixture<LoopMachinePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopMachinePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopMachinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
