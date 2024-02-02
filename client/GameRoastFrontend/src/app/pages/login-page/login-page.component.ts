import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  errorMessage = '';
  roles: string[] = [];

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.storageService.getToken() != null) {
      this.roles = this.storageService.getUser().roles;
      this.router.navigate(["/home"]);
    }
  }

  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.roles = this.storageService.getUser().roles;
        this.router.navigate(["/home"]);
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
      }
    });
  }
}
