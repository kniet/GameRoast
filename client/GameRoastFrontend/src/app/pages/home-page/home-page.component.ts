import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  games: Game[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getAllGames('').subscribe(
      (data: Game[]) => {
        this.games = data;
      })
  }
}
