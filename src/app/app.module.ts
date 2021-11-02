import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopMachineListComponent } from './components/loop-machine-list/loop-machine-list.component';
import { LoopMachinePreviewComponent } from './components/loop-machine-preview/loop-machine-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoopMachineComponent } from './pages/loop-machine/loop-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopMachineListComponent,
    LoopMachinePreviewComponent,
    HomePageComponent,
    LoopMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
