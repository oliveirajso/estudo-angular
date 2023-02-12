import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  constructor(/*private _elementRef: ElementRef, private _renderer: Renderer2*/) {}

  //@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  private backgroundColor: string | undefined;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = 'gray';
    console.log('oi');
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'gray'
    // );
  }

  @HostListener('mouseout')
  onMouseOut() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }
}
