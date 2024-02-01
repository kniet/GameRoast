import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup, ValidationErrors, ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  hide = true;
  hideRepeat = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('')},
    {
      validators:matchPassword
    });

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;

    this.authService.register(username, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

export const matchPassword: ValidatorFn = (control: AbstractControl):ValidationErrors|null => {
  let password = control.get('password');
  let confirmPassword = control.get('confirmPassword')
  if (password && confirmPassword && password?.value != confirmPassword?.value) {
    return {
      passwordmatchererror : true
    }
  }

  return null;
}

