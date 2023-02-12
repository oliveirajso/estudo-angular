import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]',
})
export class FundoAmareloDirective implements OnInit {
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    )
    {}

  ngOnInit(): void {
    console.log("🚀 - ", this._elementRef)
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'blue'
    )


  }
}
