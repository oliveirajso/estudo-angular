import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

@NgModule({
  declarations: [ExemplosPipesComponent],
  imports: [CommonModule],
  exports: [ExemplosPipesComponent],
})
export class PipesModule {}
