import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [CommonModule, CriarCursoModule],
  declarations: [CursoDetalheComponent],
  exports: [CursoDetalheComponent, CriarCursoModule],
})
export class CursosModule {}
