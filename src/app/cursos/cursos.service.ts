import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  emitirCursoCriado = new EventEmitter<string>();
  private cursos: string[] = ['Angular', 'Node', 'Java'];
  constructor() {
    console.log('iniciou');
  }
  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
