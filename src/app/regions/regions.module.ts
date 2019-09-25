import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionsService } from './regions.service';

@NgModule({
  declarations: [RegionsComponent],
  imports: [CommonModule, RegionsRoutingModule],
  providers: [
    {
      provide: RegionsService,
      useClass: RegionsService
    }
  ]
})
export class RegionsModule {}
