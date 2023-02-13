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
import { ExemploPipesModule } from './../pipes/exemplos-pipes/exemplos-pipes.module';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { HighlightDirective } from './diretivas/highlight.directive';
import { NgElseDirective } from './diretivas/ng-else.directive';
import { PipesModule } from './pipes/pipes.module';
import { LogService } from './services/log.service';

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
    PipesModule,
    ExemploPipesModule,
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
    PipesModule,
    ExemploPipesModule,
  ],
  providers: [CursoService, LogService],
})
export class SharedModule {}
