import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoopMachineComponent } from './pages/loop-machine/loop-machine.component';

const routes: Routes = [
  {path: '', component: HomePageComponent }, 
  {path: 'loop-machine', component: LoopMachineComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
