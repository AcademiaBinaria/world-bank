import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryListItemComponent } from './country-list/country-list-item/country-list-item.component';



@NgModule({
  declarations: [CountryListComponent, CountryListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CountryListComponent]
})
export class SharedModule { }
