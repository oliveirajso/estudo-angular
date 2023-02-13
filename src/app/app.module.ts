import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoService } from './componentes/cursos/cursos.service';
import { FundoAmareloDirective } from './shared/diretivas/fundo-amarelo.directive';
import { SharedModule } from './shared/shareModule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, BrowserAnimationsModule],
  exports: [FundoAmareloDirective],
  providers: [CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
