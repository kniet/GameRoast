import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {InputFormComponent} from './components/input-form/input-form.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {GameCardComponent} from './components/game-card/game-card.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ScoreSquareComponent } from './components/score-square/score-square.component';
import { CommentComponent } from './components/comment/comment.component';
import { ScoreSquareCommentComponent } from './components/score-square-comment/score-square-comment.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'game', component: GamePageComponent },
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
    FooterComponent,
    GameCardComponent,
    GamePageComponent,
    ScoreSquareComponent,
    CommentComponent,
    ScoreSquareCommentComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
