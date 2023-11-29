import { Component } from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";
import {AppConstants} from "../../app-constants";

@Component({
  selector: 'app-score-square-comment',
  templateUrl: './score-square-comment.component.html',
  styleUrls: ['./score-square-comment.component.css']
})
export class ScoreSquareCommentComponent {
  constructor(private scoreColor: ScoreColorService) {}

  getScoreColor(): string {
    return this.scoreColor.interpolateColor(AppConstants.gameScore);
  }

  protected readonly AppConstants = AppConstants;
}
