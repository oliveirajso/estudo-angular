import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from './componentes/shared-components.module';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [AppComponent, NgElseDirective, ],
  imports: [BrowserModule, SharedComponentsModule],
  exports: [FundoAmareloDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
