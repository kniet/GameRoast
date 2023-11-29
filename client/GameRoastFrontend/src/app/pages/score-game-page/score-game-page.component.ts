import {Component} from '@angular/core';

@Component({
  selector: 'app-score-game-page',
  templateUrl: './score-game-page.component.html',
  styleUrls: ['./score-game-page.component.css']
})
export class ScoreGamePageComponent {
  inputRangeValue: string

  ngOnInit() {
    this.inputRangeValue = "5";
  }

  valueChanged(e: string) {
    this.inputRangeValue = e;
  }
}
