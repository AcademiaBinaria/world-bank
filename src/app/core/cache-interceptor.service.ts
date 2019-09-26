import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptorService {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cacheGet(request.url);
    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse }));
    } else {
      return next.handle(request).pipe(tap(event => this.cacheSet(request.url, event)));
    }
  }
  cacheSet(url: string, event: HttpEvent<any>) {
    if (event instanceof HttpResponse) {
      localStorage.setItem(url, JSON.stringify(event.body));
    }
  }
  cacheGet(url: string) {
    return JSON.parse(localStorage.getItem(url));
  }

  constructor() {}
}
