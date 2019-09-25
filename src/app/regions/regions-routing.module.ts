import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsComponent } from './regions.component';

const routes: Routes = [{ path: '', component: RegionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
