import { FlipCardModule } from './components/flip-card/flip-card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarregarMaisModule } from './components/carregar-mais/carregar-mais.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlipCardModule, CarregarMaisModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
