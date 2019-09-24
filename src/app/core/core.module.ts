import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shell/header/header.component';
import { ShellComponent } from './shell/shell.component';
import { CountryCounterComponent } from './shell/header/country-counter/country-counter.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, CountryCounterComponent],
  imports: [CommonModule, RouterModule],
  exports: [ShellComponent]
})
export class CoreModule {}
