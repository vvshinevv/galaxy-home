import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-galaxy-careers",
  templateUrl: "./galaxy-careers.component.html",
  styleUrls: ["./galaxy-careers.component.css"],
})
export class GalaxyCareersComponent implements OnInit, AfterViewChecked {
  @ViewChild("contactForm") contactFormElement: ElementRef;
  constructor() {}


  ngOnInit() {
    
  }

  ngAfterViewChecked(): void {
  }
}
