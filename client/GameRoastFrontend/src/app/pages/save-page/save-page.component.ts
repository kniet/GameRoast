import {Component} from '@angular/core';
import {DatePipe, Location} from "@angular/common";
import {Game} from "../../models/game";
import {Platform} from "../../models/platform";
import {Comment} from "../../models/comment";
import {GameService} from "../../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.css']
})
export class SavePageComponent {
  title: string;
  description: string;
  date: Date;
  fileName: string;
  developer: string;
  genre: string;
  platforms: Platform[] = [
    {id: 1, name: 'PC', checked: false },
    {id: 2, name: 'PS5', checked: false },
    {id: 3, name: 'XSX', checked: false },
  ];
  comments: Comment[];
  game: Game;

  constructor(private _location: Location, private gameService: GameService,
              private router: Router) {
    this.game = {} as Game;
  }

  submitClicked() {
    this.game.title = this.title;
    this.game.details = this.description;
    this.game.releaseDate = this.date;
    this.game.overallScore = 0;
    this.game.fileName = this.fileName;
    this.game.developer = this.developer;
    this.game.genre = this.genre;
    this.game.comments = this.comments
    this.game.platforms = this.platforms.filter(platform => platform.checked);
    const router = this.router;

    this.gameService.createGame(this.game)
      .subscribe({
        next(data: Game) {
          console.log(data);
          void router.navigate(['/home'])
        },
        error(err) {
          console.log(err)
        }
      })
  }

  backClicked() {
    this._location.back();
  }

  onFileSelected(event: any) {
    this.fileName = event.target.files[0].name;
  }

  checkIfAllChecksChecked() {
    return !this.platforms.some(checkbox => checkbox.checked);
  }
}

