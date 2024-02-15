import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from '../../app-constants';
import {Comment} from "../../models/comment";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;
  date: string | null;

  constructor(private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.date = this.datepipe.transform(this.comment.opinionDate, 'dd MMMM yyyy');
  }

  protected readonly AppConstants = AppConstants;
}
