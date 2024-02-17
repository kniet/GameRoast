import {Component, Input, OnInit} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";
import {Router} from "@angular/router";
import {Game} from "../../models/game";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input()
  game: Game;
  date: string | null;
  boxShadow: string;

  constructor(private scoreColor: ScoreColorService, private router: Router,
              public datepipe: DatePipe) {
  }

  ngOnInit(): any {
    this.boxShadow = "5px 5px 0px 0px " + this.getScoreColor();
    this.date = this.datepipe.transform(this.game.releaseDate, 'dd MMMM yyyy');
    this.game.overallScore = Number(this.game.overallScore.toFixed(1));
  }

  getScoreColor(): string {
    return this.scoreColor.interpolateColor(this.game.overallScore);
  }

  redirect() {
    void this.router.navigate(['game/', this.game.id])
  }
}
