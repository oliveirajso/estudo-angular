import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoService } from './componentes/cursos/cursos.service';
import { SharedComponentsModule } from './componentes/shared-components.module';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedComponentsModule],
  exports: [FundoAmareloDirective],
  providers: [CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
