import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appFlipcard]',
})
export class FlipcardDirective implements OnInit {
  @HostBinding('style.backgroundColor') corDeFundo: string | undefined;

  constructor() {}
  ngOnInit(): void {
    this.corDeFundo = 'red';
  }
  @HostListener('mouseover') aoPassorMouse() {
    this.corDeFundo = 'gray';
  }
  @HostListener('mouseout') aoSairMouse() {
    this.corDeFundo = 'yellow';
  }
}
