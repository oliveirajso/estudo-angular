import { SlideComponent } from './slide/slide.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarregarMaisModule } from './carregar-mais/carregar-mais.module';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { SlideModule } from './slide/slide.module';
import { FlipCardModule } from './flip-card/flip-card.module';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { DiretivaNgElseComponent } from './diretiva-ng-else/diretiva-ng-else.component';
import { NgElseDirective } from '../shared/ng-else.directive';

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
  ],
})
export class SharedComponentsModule {}
