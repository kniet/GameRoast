import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";
import {AppConstants} from "../../app-constants";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentUser: any;

  constructor(private storageService: StorageService) {
  }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    if (this.currentUser == null) {
      AppConstants.isAdmin = null;
    }
    if (this.currentUser.roles == "ROLE_ADMIN") {
      AppConstants.isAdmin = true;
    }
    if (this.currentUser.roles == "ROLE_USER") {
      AppConstants.isAdmin = false;
    }
  }

}
