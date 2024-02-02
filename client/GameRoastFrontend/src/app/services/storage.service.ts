import {Injectable} from '@angular/core';

export const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  getToken(): any {
    try {
      const a = sessionStorage.getItem(USER_KEY) ?? "";
      return JSON.parse(a)['accessToken'] ?? null;
    } catch (err) {
      return null;
    }
  }
}


// UWU Dominik 🚀
