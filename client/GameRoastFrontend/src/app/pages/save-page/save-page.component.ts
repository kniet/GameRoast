import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.css']
})
export class SavePageComponent {
  selectedGenre = "";
  pcChecked = false;
  ps5Checked = false;
  xsxChecked = false;

  constructor(private _location: Location) {
  }

  backClicked() {
    this._location.back();
  }

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
