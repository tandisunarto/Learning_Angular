import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mousehighlight]'
})
export class MousehighlightDirective {
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';
  private backgroundColor: string;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
