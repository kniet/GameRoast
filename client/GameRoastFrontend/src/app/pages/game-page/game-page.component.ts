import {Component, OnInit} from '@angular/core';
import {AppConstants} from "../../app-constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  protected readonly AppConstants = AppConstants;
  gameId: number;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>
      this.gameId = params['gameId']
    )

    console.log(this.gameId)
  }
}
