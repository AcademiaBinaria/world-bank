import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryCounterComponent } from './shell/header/country-counter/country-counter.component';
import { HeaderComponent } from './shell/header/header.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, CountryCounterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [ShellComponent]
})
export class CoreModule {}
