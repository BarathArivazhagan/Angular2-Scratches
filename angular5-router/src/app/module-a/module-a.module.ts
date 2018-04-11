import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleARoutingModule
  ],
  declarations: [AComponent]
})
export class ModuleAModule { }
