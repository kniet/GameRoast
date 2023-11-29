import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.css']
})
export class RadioItemComponent {
  @Input()
  description: string;
  @Input()
  option: string;
}
