import {Component} from '@angular/core';

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.css']
})
export class SavePageComponent {
  selectedGenre = "";
  pcChecked= false;
  ps5Checked= false;
  xsxChecked= false;
  onCarSelectionChange(event: any) {
    console.log(this.selectedGenre)
  }

  onPcSelectionChange() {
    console.log("Pc selected " + this.pcChecked)
  }

  onPS5SelectionChange() {

  }

  onXSXSelectionChange() {

  }
}
