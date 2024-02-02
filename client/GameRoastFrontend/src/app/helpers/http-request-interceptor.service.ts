import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../services/storage.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.getToken();

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }
}
