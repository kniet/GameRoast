import {CanActivateFn, Router} from '@angular/router';
import {USER_KEY} from "../services/storage.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!!window.sessionStorage.getItem(USER_KEY)) {
    return true;
  } else {
    void router.navigate(['/home'])
    return false;
  }
};
