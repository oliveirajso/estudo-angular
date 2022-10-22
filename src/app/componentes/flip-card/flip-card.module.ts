import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipcardDirective } from 'src/app/componentes/flip-card/flipcard.directive';

@NgModule({
  declarations: [FlipCardComponent, FlipcardDirective],
  imports: [CommonModule],
  exports: [FlipCardComponent],
})
export class FlipCardModule {}
