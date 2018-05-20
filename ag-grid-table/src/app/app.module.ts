import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ag-grid
import {AgGridModule} from 'ag-grid-angular';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
