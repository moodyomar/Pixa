import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixaAppComponent } from './comps/pixaApp/pixa-app.component';
import { HttpClientModule } from '@angular/common/http'
import { SortComponent } from './comps/sort/sort.component';
import { ListComponent } from './comps/list/list.component';
import { HeaderHeroComponent } from './comps/header-hero/header-hero.component';
import { SignlePageComponent } from './comps/signle-page/signle-page.component';
import { HeaderComponent } from './comps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PixaAppComponent,
    SortComponent,
    ListComponent,
    HeaderHeroComponent,
    SignlePageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }