import {Component} from '@angular/core';
import {AppConstants} from '../../app-constants';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  protected readonly AppConstants = AppConstants;
}
