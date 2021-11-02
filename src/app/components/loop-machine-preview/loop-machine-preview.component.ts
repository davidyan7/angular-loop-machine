import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sound } from 'src/app/sound';

@Component({
  selector: 'app-loop-machine-preview',
  templateUrl: './loop-machine-preview.component.html',
  styleUrls: ['./loop-machine-preview.component.scss']
})
export class LoopMachinePreviewComponent implements OnInit {
  @Input() sound:sound
  @Output() soundIsPlay = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  switchPlayType(sound){
    sound.isPlay = !sound.isPlay
    if (!sound.isPlay) {
    this.soundIsPlay.emit(sound)
    }
  }

}
