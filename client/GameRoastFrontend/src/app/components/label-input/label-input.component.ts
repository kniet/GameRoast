import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent {
  @Input()
  description: string;
  @Input()
  id: string;
  @Input()
  type: string;
}
