import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DownloadscreenComponent } from './downloadscreen/downloadscreen.component';

import { DownloadserviceService } from './downloadservice.service'

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DownloadscreenComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	HttpModule
  ],
  providers: [DownloadserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
