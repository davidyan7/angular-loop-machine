import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoopMachineService {

  constructor() { }


  
public  playSounds(sounds,playFrom) {
  sounds.forEach((sound) => {
    sound.audio = new Audio(sound.url);
    if (sound.isPlay ) {
      console.log("LoopMachineService ~ sound.audio", sound.audio)
      sound.audio.pause();
      sound.audio.currentTime = 0;
      sound.audio.play();
      console.log('play ',playFrom);
      
    }
  });
}

stopAudio(sounds) {
  // this.isRecordPlay = false;
  sounds.forEach((sound) => {
    if (sound.isPlay ) {
      if(sound.audio=={}) return
      console.log("LoopMachineService ~ sound.audio", sound.audio)
      sound.isPlay = false;
      sound.audio.pause();
      sound.audio.currentTime = 0;
    }
  })
}

stopRecordAudio(sounds) {
  // this.isRecordPlay = false;
  let recordAudio = this.loadFromStorage("AUDIORECORD");
  this.saveToStorage("AUDIORECORD",[])
  sounds.forEach((sound) => {
    if (sound.isPlay) {
      sound.isPlay = false;
      sound.audio.pause();
      sound.audio.currentTime = 0;
    }
  })
  this.saveToStorage("AUDIORECORD",recordAudio)
}

public saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

public loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return (data) ? JSON.parse(data) : undefined;
}
}
