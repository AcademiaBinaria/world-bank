import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'regions', loadChildren: () => import('./regions/regions.module').then(m => m.RegionsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
