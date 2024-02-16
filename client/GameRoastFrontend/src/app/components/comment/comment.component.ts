import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from '../../app-constants';
import {Comment} from "../../models/comment";
import {DatePipe} from "@angular/common";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;
  date: string | null;

  constructor(private datepipe: DatePipe, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.date = this.datepipe.transform(this.comment.opinionDate, 'dd MMMM yyyy');
  }

  deleteButtonClicked() {
    this.commentService.deleteComment(this.comment.id)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  protected readonly AppConstants = AppConstants;
}
