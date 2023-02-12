import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../../shared/services/log.service';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Node', 'Java'];
  constructor(private logService: LogService) {
    logService.consoleLog('Curso Service');
  }
  getCursos() {
    this.logService.consoleLog(`Obtendo lista de cursos`);
    return this.cursos;
  }

  addCursos(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoService.criouNovoCurso.emit(curso);
  }
}
