import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoopMachineService {

  constructor() { }


  
public  playSounds(sounds) {
  sounds.forEach((sound) => {
    sound.audio = new Audio(sound.url);
    if (sound.isPlay ) {
      sound.audio.pause();
      sound.audio.currentTime = 0;
      sound.audio.play();
    }
  });
}

stopAudio(sounds) {
  sounds.forEach((sound) => {
    if (sound.isPlay ) {
      if(sound.audio=={}) return
      sound.isPlay = false;
      sound.audio.pause();
      sound.audio.currentTime = 0;
    }
  })
}

stopRecordAudio(sounds) {
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
