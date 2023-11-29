import {Component, Input} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";

@Component({
  selector: 'app-score-square-input-range',
  templateUrl: './score-square-input-range.component.html',
  styleUrls: ['./score-square-input-range.component.css']
})
export class ScoreSquareInputRangeComponent {
  @Input()
  inputRangeValue: string;

  constructor(private scoreColor: ScoreColorService) {
  }

  getScoreColor(): string {
    return this.scoreColor.interpolateColor(Number(this.inputRangeValue));
  }
}
