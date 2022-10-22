import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightcolor;
  }
  @HostListener('mouseout') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightcolor: string = 'yellow';

  constructor() {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
