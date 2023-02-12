import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [CommonModule, CriarCursoModule],
  declarations: [CursoDetalheComponent, CursosComponent],
  exports: [CursosComponent, CursoDetalheComponent, CriarCursoModule],
})
export class CursosModule {}
