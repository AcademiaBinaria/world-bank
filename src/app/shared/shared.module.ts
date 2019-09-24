import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryListItemComponent } from './country-list/country-list-item/country-list-item.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  declarations: [CountryListComponent, CountryListItemComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CountryListComponent, ReactiveFormsModule]
})
export class SharedModule {}
