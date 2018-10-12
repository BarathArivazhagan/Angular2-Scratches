import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DynamicBuilderComponent } from './dynamic-builder/dynamic-builder.component';
import { DynamicService } from './dynamic.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DynamicBuilderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  entryComponents: [ InputComponent ],
  providers: [ DynamicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
