import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CursoService } from './componentes/cursos/cursos.service';
import { SettingsService } from './settings.service';
import { FundoAmareloDirective } from './shared/diretivas/fundo-amarelo.directive';
import { SharedModule } from './shared/shareModule.module';

registerLocaleData(ptBr);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, BrowserAnimationsModule],
  exports: [FundoAmareloDirective],
  providers: [
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) =>
        settingsService.getLocale(),
    },
    CursoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
