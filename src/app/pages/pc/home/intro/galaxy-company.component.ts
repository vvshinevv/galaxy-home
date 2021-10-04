import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "app-galaxy-company",
  templateUrl: "./galaxy-company.component.html",
  styleUrls: ["./galaxy-company.component.css"],
})
export class GalaxyCompanyComponent implements OnInit {
  @ViewChild("motion1") motion1Element: ElementRef;
  @ViewChild("motion2") motion2Element: ElementRef;
  @ViewChild("motion3") motion3Element: ElementRef;
  @ViewChild("motion4") motion4Element: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngOnInit() {}
}
