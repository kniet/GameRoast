import {Component, ElementRef, ViewChild} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";
import {AppConstants} from "../../app-constants";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  boxShadow:string;
  constructor(private scoreColor: ScoreColorService) {}

  ngAfterViewInit(): void {
    this.boxShadow = "5px 5px 0px 0px " + this.getScoreColor();
  }
  getScoreColor(): string {
    return this.scoreColor.interpolateColor(AppConstants.gameScore);
  }

  protected readonly AppConstants = AppConstants;
}
