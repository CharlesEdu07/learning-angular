import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColoredField]'
})
export class ColoredFieldDirective {

  @Input()
  color = 'gray'

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  // }

  @HostListener('focus')
  onFocus() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');

    this.backgroundColor = this.color;
  }

  @HostListener('blur')
  onBlur() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

    this.backgroundColor = 'transparent';
  }
}
