import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursoService],
})
export class CriarCursoComponent implements OnInit {
  onAddCurso(curso: string) {
    this.cursosService.addCursos(curso);
  }
  cursos: string[] = [];
  constructor(private cursosService: CursoService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
