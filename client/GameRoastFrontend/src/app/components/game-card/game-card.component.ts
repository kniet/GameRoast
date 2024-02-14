import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";
import {AppConstants} from "../../app-constants";
import {Router} from "@angular/router";
import {Game} from "../../models/game";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input()
  game: Game;
  date: string | null;

  boxShadow:string;
  constructor(private scoreColor: ScoreColorService, private router:Router, public datepipe: DatePipe) {
  }

  ngOnInit(): any {
    this.boxShadow = "5px 5px 0px 0px " + this.getScoreColor();
    this.date = this.datepipe.transform(this.game.releaseDate, 'dd MMMM yyyy');
  }
  getScoreColor(): string {
    return this.scoreColor.interpolateColor(this.game.overallScore);
  }

  redirect() {
    void this.router.navigate(['game/', this.game.id])
  }

  protected readonly AppConstants = AppConstants;
}
