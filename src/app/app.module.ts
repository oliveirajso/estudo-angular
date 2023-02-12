import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoService } from './componentes/cursos/cursos.service';
import { PipesModule } from './pipes/pipes.module';
import { FundoAmareloDirective } from './shared/diretivas/fundo-amarelo.directive';
import { SharedComponentsModule } from './shared/shared-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedComponentsModule, PipesModule],
  exports: [FundoAmareloDirective],
  providers: [CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
