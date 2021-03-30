import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinesComponent } from './lines/lines.component';


const routes: Routes = [
  {
    path: 'lines',
   component: LinesComponent
  },
  {
    path: '**',
    redirectTo: 'lines'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class WebglModule { }
