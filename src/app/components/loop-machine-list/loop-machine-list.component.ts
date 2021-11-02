import { Component, Input, OnInit } from '@angular/core';
import { sound } from 'src/app/sound';

@Component({
  selector: 'app-loop-machine-list',
  templateUrl: './loop-machine-list.component.html',
  styleUrls: ['./loop-machine-list.component.scss']
})
export class LoopMachineListComponent implements OnInit {

 @Input() sounds:sound[]

  constructor() { }

  ngOnInit(): void {
  }

}
