import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.css']
})
export class SavePageComponent implements OnInit {
  selectedGenre = "";
  pcChecked= false;
  ps5Checked= false;
  xsxChecked= false;

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
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
