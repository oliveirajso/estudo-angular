import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CursoDetalheComponent, CriarCursoComponent],
  exports: [CursoDetalheComponent, CriarCursoComponent],
})
export class CursosModule {}
