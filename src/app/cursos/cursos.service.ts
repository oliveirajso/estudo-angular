import { Injectable } from '@angular/core';
import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: string[] = ['Angular', 'Node', 'Java'];
  constructor() {
    console.log('iniciou');
  }
  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    return this.cursos.push(curso);
  }
}
