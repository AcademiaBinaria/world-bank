import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiInterceptorService } from './api-interceptor.service';
import { CountryCounterComponent } from './shell/header/country-counter/country-counter.component';
import { HeaderComponent } from './shell/header/header.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, CountryCounterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true }],
  exports: [ShellComponent]
})
export class CoreModule {}
