import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      if (params['title']) {
        this.searchByTitle(params['title']);
      } else if (params['platform']) {
        this.searchByPlatform(params['platform']);
      } else {
        this.getGames()
      }
    });
  }

  getGames() {
    this.gameService.getAllGames().subscribe(
      (data: Game[]) => {
        this.games = data;
      })
  }

  searchByTitle(title: string) {
    this.gameService.getAllGamesByTitle(title).subscribe(
      (data: Game[]) => {
        this.games = data;
      })
  }

  searchByPlatform(platform: string) {
    this.gameService.getAllGamesByPlatforms(platform).subscribe(
      (data: Game[]) => {
        this.games = data;
      })
  }
}
