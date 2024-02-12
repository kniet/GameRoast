import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScoreColorService} from "../../services/score-color.service";
import {AppConstants} from "../../app-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  boxShadow:string;
  constructor(private scoreColor: ScoreColorService, private router:Router) {}

  ngOnInit(): any {
    this.boxShadow = "5px 5px 0px 0px " + this.getScoreColor();
  }
  getScoreColor(): string {
    return this.scoreColor.interpolateColor(AppConstants.gameScore);
  }

  redirect() {
    this.router.navigate(['game/',1])
  }

  protected readonly AppConstants = AppConstants;
}
