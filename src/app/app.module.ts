import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { routing } from './app.routes';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
  BrowserModule,
  RouterModule,
  routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
