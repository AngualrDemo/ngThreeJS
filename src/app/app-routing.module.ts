import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'webgl-home',
    loadChildren: ()=>import('./webgl/webgl.module').then((mod)=>mod.WebglModule)
  },
  {
    path: '**',
    redirectTo: 'webgl-home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
