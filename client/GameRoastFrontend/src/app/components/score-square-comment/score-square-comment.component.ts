import {Component, Input} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";

@Component({
  selector: 'app-score-square-comment',
  templateUrl: './score-square-comment.component.html',
  styleUrls: ['./score-square-comment.component.css']
})
export class ScoreSquareCommentComponent {
  @Input()
  gameScore: number;

  constructor(private scoreColor: ScoreColorService) {
  }

  getScoreColor(): string {
    return this.scoreColor.interpolateColor(this.gameScore);
  }
}
