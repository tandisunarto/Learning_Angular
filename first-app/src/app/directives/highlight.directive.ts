import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'purple';
    // this.elementRef.nativeElement.style.color = 'yellow';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'purple');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', 'yellow');
  }

}
