import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { SharedModule } from './shared/shared.module';
import {Router, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';


const router: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleAModule,
    ModuleBModule,
    SharedModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
