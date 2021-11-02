import { Component, Inject, OnInit } from '@angular/core';
import { SOUNDS } from 'src/app/mock-sounds';
import { sound } from 'src/app/sound';
import { LoopMachineService } from '../../services/loop-machine.service'


@Component({
  selector: 'app-loop-machine',
  templateUrl: './loop-machine.component.html',
  styleUrls: ['./loop-machine.component.scss']
})
export class LoopMachineComponent implements OnInit {

  sounds: sound[] = SOUNDS
  intervalId: any = null
  timeoutId: any = []
  isRecord: boolean = false
  storageRecord:any =this.loopMachinService.loadFromStorage("AUDIORECORD")||null
  recordedAudio: any = []
  counter: number = 0
  isRecordPlay: boolean = false

  constructor(private loopMachinService: LoopMachineService) { }

  ngOnInit(): void {
  }


  playAudio() {
    if (this.intervalId != null) return
    let nothingToPlay = this.sounds.every((sound) => !sound.isPlay);
    if (nothingToPlay) return;
    this.stopAudio()
    this.loopMachinService.playSounds(this.sounds)
    this.intervalId = setInterval(() => {
      let nothingToPlay = this.sounds.every((sound) => !sound.isPlay);
      if (nothingToPlay) clearInterval(this.intervalId);
      if (this.isRecord) {
        this.recordedAudio.push(this.sounds);
      }
      this.loopMachinService.playSounds(this.sounds)
    }, 8000);
  }

  stopAudio() {
    // if (this.intervalId === null && this.isRecordPlay) return
    if (!this.isRecordPlay) {
      clearInterval(this.intervalId);
      this.isRecord = false
      this.intervalId = null
      this.loopMachinService.stopAudio(this.sounds)
      return
    } else {
      this.timeoutId.forEach(timeout => {
        clearTimeout(timeout)
      })
      this.loopMachinService.stopAudio(this.recordedAudio[this.counter - 1])
      this.isRecordPlay = false
      this.counter = 0
    }
  }


  recordAudio() {
    this.isRecord = !this.isRecord;
  }

  stopRecordAudio() {
    this.isRecord = !this.isRecord;
    this.recordedAudio.push(this.sounds);
    this.loopMachinService.saveToStorage("AUDIORECORD", this.recordedAudio);
    this.storageRecord=this.recordedAudio
    this.stopAudio();
    this.recordedAudio =[]
  }

  playRecord() {
    if (this.isRecordPlay) return
    this.stopAudio()
    this.isRecordPlay = true
    this.recordedAudio = this.loopMachinService.loadFromStorage("AUDIORECORD");
    this.recordedAudio.forEach((sounds, idx) => {
      let currId = setTimeout(() => {
        this.loopMachinService.playSounds(sounds);
        this.counter++
      }, idx * 8000);
      this.timeoutId.push(currId)
    });
  }

}
