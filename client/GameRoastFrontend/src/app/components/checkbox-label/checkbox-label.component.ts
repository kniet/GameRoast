import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-checkbox-label',
  templateUrl: './checkbox-label.component.html',
  styleUrls: ['./checkbox-label.component.css']
})
export class CheckboxLabelComponent {
  @Input()
  description: string;
  @Input()
  id: string;
}
