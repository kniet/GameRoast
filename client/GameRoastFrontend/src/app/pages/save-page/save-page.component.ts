import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Game} from "../../models/game";
import {Platform} from "../../models/platform";
import {Comment} from "../../models/comment";
import {GameService} from "../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.css']
})
export class SavePageComponent implements OnInit {
  title: string;
  description: string;
  date: Date;
  fileName: string;
  developer: string;
  genre: string;
  platforms: Platform[] = [
    {id: 1, name: 'PC', checked: false},
    {id: 2, name: 'XSX', checked: false},
    {id: 3, name: 'PS5', checked: false},
  ];
  comments: Comment[];

  game: Game;
  gameId: number;

  constructor(private _location: Location, private gameService: GameService,
              private router: Router, private _route: ActivatedRoute) {
    this.game = {} as Game;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>
      this.gameId = params['gameId']
    );
    if (this.gameId != undefined) {
      this.gameService.getGameById(this.gameId)
        .subscribe({
          next: (data: Game) => {
            this.game = data;
            this.mapGameFieldsToInput();
          },
          error: (e) => {
            console.log(e)
          }
        });
    }
  }

  mapGameFieldsToInput() {
    this.title = this.game.title;
    this.description = this.game.details;
    this.date = this.game.releaseDate;
    this.fileName = this.game.fileName;
    this.developer = this.game.developer;
    this.genre = this.game.genre;
    this.comments = this.game.comments;
    this.platforms = this.platforms.map(platform =>
      this.game.platforms.some(input => input.id === platform.id && input.name === platform.name)
        ? {...platform, checked: true}
        : platform
    );
  }

  submitClicked() {
    this.game.title = this.title;
    this.game.details = this.description;
    this.game.releaseDate = this.date;
    this.game.fileName = this.fileName;
    this.game.developer = this.developer;
    this.game.genre = this.genre;
    this.game.comments = this.comments
    this.game.platforms = this.platforms.filter(platform => platform.checked);
    const router = this.router;

    if (this.gameId == undefined) {
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
    } else {
      this.gameService.updateGame(this.gameId, this.game)
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

