import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { NgElseDirective } from '../shared/ng-else.directive';
import { CursosModule } from './../cursos/cursos.module';
import { CarregarMaisComponent } from './carregar-mais/carregar-mais.component';
import { CarregarMaisModule } from './carregar-mais/carregar-mais.module';
import { DiretivaNgElseComponent } from './diretiva-ng-else/diretiva-ng-else.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { SlideComponent } from './slide/slide.component';
import { SlideModule } from './slide/slide.module';

@NgModule({
  declarations: [
    DiretivasCustomizadasComponent,
    DiretivaNgElseComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
  ],
  imports: [CommonModule, SlideModule, CarregarMaisModule, FlipCardModule],
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
})
export class SharedComponentsModule {}
