import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from './../../shared/pipes/pipes.module';
import { ExemplosPipesComponent } from './exemplos-pipes.component';

@NgModule({
  declarations: [ExemplosPipesComponent],
  imports: [CommonModule, PipesModule],
  exports: [ExemplosPipesComponent],
})
export class ExemploPipesModule {}
