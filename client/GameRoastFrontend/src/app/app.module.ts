import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputFormComponent,
    RegisterPageComponent,
    HomePageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
