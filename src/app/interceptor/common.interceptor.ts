import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { get } from 'lodash';
import { AuthenService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { STATUS_CODE } from '../interfaces/httResponse';
@Injectable(
  {
    providedIn: 'root',
  },
)
export class CommonHttpInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthenService,
    private toastService: ToastService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authorizationToken = req.headers.get('Authorization');
    if (!authorizationToken) {
      const idToken = this.authService.getToken();
      if (idToken) {
        authorizationToken = 'Bearer ' + idToken;
      }
    }
    if (authorizationToken) {
      const authReq = req.clone({
        setHeaders: { Authorization: authorizationToken },
      });
      req = authReq;
    }
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }
    return next.handle(req).pipe(
      tap((response: any) => {
        if (response.body) {
          if (response.body.status === STATUS_CODE.SUCCESS) {
            if (response.body.message) {
              this.toastService.showSuccessMessage(response.body.message);
            }
          }

          if (response.body.status === STATUS_CODE.ERROR) {
            if (response.body.message) {
              this.toastService.showErrorMessage(response.body.message);
            }
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // 401 handled in auth.interceptor
          this.authService.logOut();
        } else {
        }
        return throwError(error);
      }),
    );
  }
}
