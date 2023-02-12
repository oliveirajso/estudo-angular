import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarregarMaisComponent } from '../componentes/carregar-mais/carregar-mais.component';
import { CarregarMaisModule } from '../componentes/carregar-mais/carregar-mais.module';
import { CursosModule } from '../componentes/cursos/cursos.module';
import { CursoService } from '../componentes/cursos/cursos.service';
import { DiretivaNgElseComponent } from '../componentes/diretiva-ng-else/diretiva-ng-else.component';
import { DiretivasCustomizadasComponent } from '../componentes/diretivas-customizadas/diretivas-customizadas.component';
import { FlipCardComponent } from '../componentes/flip-card/flip-card.component';
import { FlipCardModule } from '../componentes/flip-card/flip-card.module';
import { SlideComponent } from '../componentes/slide/slide.component';
import { SlideModule } from '../componentes/slide/slide.module';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { NgElseDirective } from '../shared/ng-else.directive';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    DiretivasCustomizadasComponent,
    DiretivaNgElseComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
  ],
  imports: [
    CommonModule,
    SlideModule,
    CarregarMaisModule,
    FlipCardModule,
    CursosModule,
  ],
  exports: [
    SlideComponent,
    FlipCardComponent,
    DiretivasCustomizadasComponent,
    DiretivaNgElseComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CarregarMaisComponent,
    CursosModule,
  ],
  providers: [CursoService,LogService],
})
export class SharedComponentsModule {}
