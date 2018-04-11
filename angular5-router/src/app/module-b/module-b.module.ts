import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ],
  declarations: [BComponent]
})
export class ModuleBModule { }
