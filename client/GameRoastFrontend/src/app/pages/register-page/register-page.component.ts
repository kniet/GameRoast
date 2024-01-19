import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  username:string;
  password:string;
  repeatPassword:string
  hide = true;
  hideRepeat = true;

}
