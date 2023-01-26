import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollPanelModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
