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
import {GamePageComponent} from './pages/game-page/game-page.component';
import {ScoreSquareComponent} from './components/score-square/score-square.component';
import {CommentComponent} from './components/comment/comment.component';
import {ScoreSquareCommentComponent} from './components/score-square-comment/score-square-comment.component';
import {ScoreGamePageComponent} from './pages/score-game-page/score-game-page.component';
import {ControlButtonsComponent} from './components/control-buttons/control-buttons.component';
import {ScoreSquareInputRangeComponent} from './components/score-square-input-range/score-square-input-range.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SavePageComponent} from './pages/save-page/save-page.component';
import {LabelInputComponent} from './components/label-input/label-input.component';
import {RadioItemComponent} from './components/radio-item/radio-item.component';
import {CheckboxLabelComponent} from './components/checkbox-label/checkbox-label.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'game', component: GamePageComponent},
  {path: 'score_the_game', component: ScoreGamePageComponent},
  {path: 'save_the_game', component: SavePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
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
    ScoreGamePageComponent,
    ControlButtonsComponent,
    ScoreSquareInputRangeComponent,
    SavePageComponent,
    LabelInputComponent,
    RadioItemComponent,
    CheckboxLabelComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
