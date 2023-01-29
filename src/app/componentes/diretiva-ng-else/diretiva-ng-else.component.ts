import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-else',
  templateUrl: './diretiva-ng-else.component.html',
  styleUrls: ['./diretiva-ng-else.component.css'],
})
export class DiretivaNgElseComponent implements OnInit {
  mostraCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos(): void {
    this.mostraCursos = !this.mostraCursos;
  }
}
