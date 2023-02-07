import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursoCriarComponent } from './curso-criar/curso-criar.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CursoCriarComponent, CursoDetalheComponent, CursosComponent],
  exports: [CursoCriarComponent, CursosComponent, CursoDetalheComponent],
})
export class CursosModule {}
