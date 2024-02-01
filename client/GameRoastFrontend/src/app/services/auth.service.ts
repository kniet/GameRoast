import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {USER_KEY} from "./storage.service";

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string | null | undefined, password: string | null | undefined): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      }
    );
  }

  register(username: string | null | undefined, password: string | null | undefined): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        password,
      });
  }

  logout(): void {
    sessionStorage.removeItem(USER_KEY)
  }
}
