import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) {
  }

  searchByPlatform(platform: string) {

    void this.router.navigate(['/home_platform', platform])
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
