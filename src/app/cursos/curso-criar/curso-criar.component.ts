import { Component, OnInit } from '@angular/core';
import { CursoService } from '../cursos.service';

@Component({
  selector: 'app-curso-criar',
  templateUrl: './curso-criar.component.html',
  styleUrls: ['./curso-criar.component.css'],
})
export class CursoCriarComponent implements OnInit {
  onAddCurso(curso: string) {
    this.cursosService.addCursos(curso);
  }
  cursos: string[] = [];
  constructor(private cursosService: CursoService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
