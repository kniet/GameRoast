import { Component } from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";
import {AppConstants} from "../../app-constants";
@Component({
  selector: 'app-score-square',
  templateUrl: './score-square.component.html',
  styleUrls: ['./score-square.component.css']
})
export class ScoreSquareComponent {
  constructor(private scoreColor: ScoreColorService) {}

  getScoreColor(): string {
    return this.scoreColor.interpolateColor(AppConstants.gameScore);
  }
}

