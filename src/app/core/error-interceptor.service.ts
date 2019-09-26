import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorService {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(err) {
    const unauthorizedCode = 401;
    let userMessage = 'Fatal error';
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorizedCode) {
        userMessage = 'Authorization needed';
      } else {
        userMessage = 'ERROR::: Comunications error';
      }
    }
    console.log(userMessage);
    return throwError(err);
  }

  constructor() {}
}
