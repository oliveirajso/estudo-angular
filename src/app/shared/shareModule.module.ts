import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CarregarMaisComponent } from '../components/carregar-mais/carregar-mais.component';
import { CarregarMaisModule } from '../components/carregar-mais/carregar-mais.module';
import { CursosModule } from '../components/cursos/cursos.module';
import { CursoService } from '../components/cursos/cursos.service';
import { DiretivaNgElseComponent } from '../components/diretiva-ng-else/diretiva-ng-else.component';
import { DiretivasCustomizadasComponent } from '../components/diretivas-customizadas/diretivas-customizadas.component';
import { FlipCardComponent } from '../components/flip-card/flip-card.component';
import { FlipCardModule } from '../components/flip-card/flip-card.module';
import { ObservableModule } from '../components/observable/observable.module';
import { SlideComponent } from '../components/slide/slide.component';
import { SlideModule } from '../components/slide/slide.module';

import { ExemploPipesModule } from './../pipes/exemplos-pipes/exemplos-pipes.module';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { HighlightDirective } from './diretivas/highlight.directive';
import { NgElseDirective } from './diretivas/ng-else.directive';
import { PipesModule } from './pipes/pipes.module';
import { LogService } from './services/log.service';
import { PersonService } from './services/person.service';

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
    FlexLayoutModule,
    ObservableModule,
    HttpClientModule,
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
    ObservableModule,
  ],
  providers: [CursoService, LogService, PersonService],
})
export class SharedModule {}
