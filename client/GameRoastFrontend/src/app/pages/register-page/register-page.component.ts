import {Component} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup, ValidationErrors, ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  hide = true;
  hideRepeat = true;

  registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl('')
    },
    {
      validators: matchPassword
    });

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(): void {
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;

    this.authService.register(username, password).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(["/login"]);
      },
      error: err => {
        console.log(err)
      }
    });
  }
}

export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let password = control.get('password');
  let confirmPassword = control.get('confirmPassword')
  if (password && confirmPassword && password?.value != confirmPassword?.value) {
    return {
      passwordmatchererror: true
    }
  }

  return null;
}

