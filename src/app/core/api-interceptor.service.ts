import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqCopy = this.rewriteUrl(req);
    return next.handle(reqCopy).pipe(map(evt => this.mapBody(evt, body => body[1])));
  }

  private rewriteUrl(req) {
    return req.clone({ url: req.url + 'asdfas?per_page=1000&format=json' });
  }

  private mapBody(evt, transform) {
    if (evt instanceof HttpResponse) {
      return evt.clone({ body: transform(evt.body) });
    } else {
      return evt;
    }
  }

  private changeHeader(req) {
    return req.clone({ setHeaders: { Authorization: 'Wolverine' } });
  }
  constructor() {}
}
