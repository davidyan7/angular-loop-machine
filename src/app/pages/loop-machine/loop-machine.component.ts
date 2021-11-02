import { Component, Inject, OnInit } from '@angular/core';
import { SOUNDS } from 'src/app/mock-sounds';
import { sound } from 'src/app/sound';
import {LoopMachineService} from '../../services/loop-machine.service'


@Component({
  selector: 'app-loop-machine',
  templateUrl: './loop-machine.component.html',
  styleUrls: ['./loop-machine.component.scss']
})
export class LoopMachineComponent implements OnInit {

  sounds:sound[] = SOUNDS
  intervalId:any = null
  timeoutId:any=[]
  isRecord:boolean =false
  recordedAudio:any=[]
  counter:number = 0
  isRecordPlay:boolean=false 
  
  constructor( private loopMachinService:LoopMachineService) { }

  ngOnInit(): void {
  }


  playAudio(){
    if (this.intervalId !=null) return
    let nothingToPlay = this.sounds.every((sound) => !sound.isPlay);
    if (nothingToPlay) return;
    this.loopMachinService.playSounds(this.sounds,'normal1')
    this.intervalId = setInterval(() => {
      let nothingToPlay = this.sounds.every((sound) => !sound.isPlay);
      if (nothingToPlay) clearInterval(this.intervalId);
      if (this.isRecord) {
        this.recordedAudio.push(this.sounds);
      }
      this.loopMachinService.playSounds(this.sounds,'normal2')
      console.log(this.recordedAudio);
      
    }, 8000);
  }

  stopAudio(){
    if (!this.isRecordPlay){
      clearInterval(this.intervalId);
      this.isRecord = false
      this.intervalId=null
      this.loopMachinService.stopAudio(this.sounds)
      return
    } else{
      this.timeoutId.forEach(timeout => {
        clearTimeout(timeout)
      })
      for(let i =0;i<this.counter ;i++){
        this.loopMachinService.stopAudio(this.recordedAudio[i])
      }
      this.isRecordPlay =false
      this.counter=0
    }
  }


  recordAudio() {
    this.isRecord = !this.isRecord;
  }

  stopRecordAudio() {
    this.isRecord = !this.isRecord;
    this.recordedAudio.push(this.sounds);
    this.loopMachinService.saveToStorage("AUDIORECORD", this.recordedAudio);
    this.stopAudio();
  }

  playRecord() {
    if(this.isRecordPlay) return
    this.stopAudio()
    this.isRecordPlay =true
    this.recordedAudio = this.loopMachinService.loadFromStorage("AUDIORECORD");
    this.recordedAudio.forEach((sounds, idx) => {
      let currId = setTimeout(() => {
        this.loopMachinService.playSounds(sounds,'record');
        this.counter++
      }, idx * 8000);
      this.timeoutId.push(currId)
    });
    
  }

}
