import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PixaAppComponent } from './comps/pixaApp/pixa-app.component';
import { SignlePageComponent } from './comps/signle-page/signle-page.component';

const routes: Routes = [
  {path:"",component:PixaAppComponent},
  {path:"single/:id",component:SignlePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
