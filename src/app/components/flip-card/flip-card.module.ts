import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlipcardDirective } from 'src/app/components/flip-card/flipcard.directive';

import { FlipCardComponent } from './flip-card.component';

@NgModule({
  declarations: [FlipCardComponent, FlipcardDirective],
  imports: [CommonModule],
  exports: [FlipCardComponent],
})
export class FlipCardModule {}
