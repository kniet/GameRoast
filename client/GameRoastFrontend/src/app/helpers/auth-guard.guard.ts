import {CanActivateFn, Router, RouterModule} from '@angular/router';
import {USER_KEY} from "../services/storage.service";
import {inject, Inject} from "@angular/core";

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!!window.sessionStorage.getItem(USER_KEY)) {
    return true;
  } else {
    void router.navigate(['/home'])
    return false;
  }
};
