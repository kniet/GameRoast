import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppConstants} from "../../app-constants";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  AfterViewInit {
  protected readonly AppConstants = AppConstants;
  private scrollTop: number;
  private scrollLeft: number;
  @ViewChild("search") search!: ElementRef;
  @ViewChild("hamburger") hamburger!: ElementRef;
  @ViewChild("cancel") cancel!: ElementRef;
  @ViewChild("items") items!: ElementRef;
  @ViewChild("form") form!: ElementRef;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngAfterViewInit(): void {
    this.hamburger.nativeElement.addEventListener('click', () => {
      this.items.nativeElement.classList.add("active");
      this.hamburger.nativeElement.classList.add("hide");
      this.search.nativeElement.classList.add("hide");
      this.cancel.nativeElement.classList.add("show");
      this.form.nativeElement.classList.remove("active");
      this.disableScroll();
    });

    this.cancel.nativeElement.addEventListener('click', () => {
      this.items.nativeElement.classList.remove("active");
      this.hamburger.nativeElement.classList.remove("hide");
      this.search.nativeElement.classList.remove("hide");
      this.cancel.nativeElement.classList.remove("show");
      this.form.nativeElement.classList.remove("active");
      this.cancel.nativeElement.style.color = "#ff3d00";
      this.enableScroll();
    });

    this.search.nativeElement.addEventListener('click', () => {
      this.form.nativeElement.classList.add("active");
      this.search.nativeElement.classList.add("hide");
      this.cancel.nativeElement.classList.add("show");
    });
  }

  private disableScroll(): void {
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(this.scrollLeft, this.scrollTop);
    };
  }

  private enableScroll(): void {
    window.onscroll = () => {
    };
  }

  protected readonly AuthService = AuthService;
}
