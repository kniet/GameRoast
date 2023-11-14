import { Component } from '@angular/core';
import {AppConstants} from "../../app-constants";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {
  protected readonly AppConstants = AppConstants;
}
