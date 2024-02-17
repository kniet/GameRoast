import {Component, OnInit} from '@angular/core';
import {AppConstants} from "../../app-constants";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  protected readonly AppConstants = AppConstants;
  gameId: number;
  game: Game;
  date: string | null;

  constructor(private _route: ActivatedRoute, private gameService: GameService,
              private datepipe: DatePipe, private router: Router) {
    this.game = {} as Game;
  }

  ngOnInit(): any {
    this._route.params.subscribe(params =>
      this.gameId = params['gameId']
    )

    this.gameService.getGameById(this.gameId)
      .subscribe({
        next: (data: Game) => {
          this.game = data;
          this.date = this.datepipe.transform(data.releaseDate, 'dd MMMM yyyy');
          this.game.overallScore = Number(this.game.overallScore.toFixed(1));
        },
        error: () => {
          void this.router.navigate(['/home'])
        }
      });
  }

  deleteClicked() {
    this.gameService.deleteGame(this.gameId)
      .subscribe({
        next: () => {
          void this.router.navigate(['/home'])
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

  getPlatformNames(): string {
    return this.game.platforms?.map(platform => platform.name).join(", ");
  }
}
