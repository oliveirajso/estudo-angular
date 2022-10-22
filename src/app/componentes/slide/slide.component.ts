import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Slid } from 'src/app/type/slidType';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  constructor() {}
  slides: Slid[] = [];
  checked: boolean = false;

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.slides.push({
        value: i,
        imgSrc: `https://picsum.photos/400/400?random=${i}`,
        alt: '',
        checked: false,
      });
    }
  }
  onChange(e: any) {
    console.log(e);
  }
}
