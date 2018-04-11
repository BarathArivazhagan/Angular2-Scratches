import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';

const routes: Routes = [{

  path : 'a', component : AComponent

}, {   path : 'c', component : AComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
