import {Component, Input} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";

@Component({
  selector: 'app-score-square',
  templateUrl: './score-square.component.html',
  styleUrls: ['./score-square.component.css']
})
export class ScoreSquareComponent {
  @Input()
  score: number;

  constructor(private scoreColor: ScoreColorService) {
  }

  getScoreColor(): string {
    return this.scoreColor.interpolateColor(this.score);
  }
}

