import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styles: []
})
export class AnswerComponent implements OnInit {

  @Input() selectedNumbers: number[] = [];
  constructor() {
   }

  ngOnInit() {
  }

}
