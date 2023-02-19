import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carregar-mais',
  templateUrl: './carregar-mais.component.html',
  styleUrls: ['./carregar-mais.component.css'],
})
export class CarregarMaisComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  private data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  displayData = [1, 2, 3];

  showMore() {
    let newLength = this.displayData.length + 3;
    if (newLength > this.data.length) {
      newLength = this.data.length;
    }
    this.displayData = this.data.slice(0, newLength);
  }
}
