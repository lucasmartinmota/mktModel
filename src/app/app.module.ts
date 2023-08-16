import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web'
import { HeaderComponent } from './page/header/header.component';
import { GlobalModule } from './global.module';
import { BgAllComponent } from './page/bg-all/bg-all.component';
import { ContainerOneComponent } from './page/container-one/container-one.component';
import { ContainerTwoComponent } from './page/container-two/container-two.component';
import { ContainerThreeComponent } from './page/container-three/container-three.component';
import { ContainerFourComponent } from './page/container-four/container-four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export function playerFactory(){
  return player
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BgAllComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    ContainerThreeComponent,
    ContainerFourComponent
  ],
  imports: [
    LottieModule.forRoot({player: playerFactory}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
