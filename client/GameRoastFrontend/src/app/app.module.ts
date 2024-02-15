import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {GameCardComponent} from './components/game-card/game-card.component';
import {GamePageComponent} from './pages/game-page/game-page.component';
import {ScoreSquareComponent} from './components/score-square/score-square.component';
import {CommentComponent} from './components/comment/comment.component';
import {ScoreSquareCommentComponent} from './components/score-square-comment/score-square-comment.component';
import {ScoreGamePageComponent} from './pages/score-game-page/score-game-page.component';
import {ScoreSquareInputRangeComponent} from './components/score-square-input-range/score-square-input-range.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SavePageComponent} from './pages/save-page/save-page.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpRequestInterceptor} from "./helpers/http-request-interceptor.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {authGuard} from "./helpers/auth.guard";
import {authAdminGuard} from "./helpers/auth-admin.guard";
import {DatePipe} from "@angular/common";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent,},
  {path: 'register', component: RegisterPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home_title/:title', component: HomePageComponent},
  {path: 'home_platform/:platform', component: HomePageComponent},
  {path: 'game/:gameId', component: GamePageComponent},
  {path: 'score_the_game/:gameId', component: ScoreGamePageComponent, canActivate: [authGuard]},
  {path: 'save_the_game', component: SavePageComponent, canActivate: [authAdminGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    GameCardComponent,
    GamePageComponent,
    ScoreSquareComponent,
    CommentComponent,
    ScoreSquareCommentComponent,
    ScoreGamePageComponent,
    ScoreSquareInputRangeComponent,
    SavePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
    DatePipe
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
