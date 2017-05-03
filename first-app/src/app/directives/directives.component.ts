import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  private showText: boolean = true;
  private items: Array<string> = ["Apples", "Bananas", "Cherries"];
  private switchValue: number = 2;

  constructor() { }

  ngOnInit() {
  }

  onToggleText() {
    this.showText = !this.showText;
  }
}
