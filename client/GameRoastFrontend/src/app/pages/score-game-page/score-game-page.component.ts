import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../services/game.service";
import {Comment} from "../../models/comment";
import {DatePipe, Location} from "@angular/common";
import {CommentService} from "../../services/comment.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-score-game-page',
  templateUrl: './score-game-page.component.html',
  styleUrls: ['./score-game-page.component.css']
})
export class ScoreGamePageComponent implements OnInit {
  score: string
  opinion: string
  game: Game;
  gameId: number;
  comment: Comment;

  constructor(private _route: ActivatedRoute, private gameService: GameService,
              private router: Router, private _location: Location,
              private commentService: CommentService, private storageService: StorageService,
              private datepipe: DatePipe, private changeDetectorRef: ChangeDetectorRef) {
    this.game = {} as Game;
    this.comment = new Comment();
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this._route.params.subscribe(params =>
      this.gameId = params['gameId']
    );

    this.gameService.getGameById(this.gameId)
      .subscribe({
        next: (data: Game) => {
          this.game = data;
          this.game.overallScore = Number(this.game.overallScore.toFixed(1));
        },
        error: () => {
          void this.router.navigate(['/home'])
        }
      });
    this.score = "5";
  }

  valueChanged(e: string) {
    this.score = e;
  }

  backClicked() {
    this._location.back();
  }

  submitClicked() {
    let date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.comment.opinionDate = new Date(date as any);
    this.comment.score = Number(this.score);
    this.comment.opinion = this.opinion;
    this.comment.user = this.storageService.getUser();
    this.comment.game = this.game;

    console.log(this.comment)

    this.commentService.createComment(this.comment).subscribe({
      next: (data: Comment) => {
        console.log(data)
        this.backClicked();
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
}
