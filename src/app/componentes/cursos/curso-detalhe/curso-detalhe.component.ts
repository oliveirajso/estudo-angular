import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  cursos: string[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
    this.cursoService.emitirCursoCriado.subscribe((curso) =>
      console.log(curso)
    );
  }
}
