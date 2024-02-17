import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "../services/storage.service";

export const authAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);
  const currentUser = storageService.getUser();

  if (currentUser.roles == "ROLE_ADMIN") {
    return true;
  } else {
    void router.navigate(['/home'])
    return false;
  }
};
