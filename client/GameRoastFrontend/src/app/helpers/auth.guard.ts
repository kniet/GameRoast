import {CanActivateFn, Router} from '@angular/router';
import {StorageService} from "../services/storage.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);
  const currentUser = storageService.getUser();

  if (currentUser != null) {
    return true;
  } else {
    void router.navigate(['/home'])
    return false;
  }
};
