import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CamelCasePipe, FiltroArrayPipe],
  exports: [CamelCasePipe, FiltroArrayPipe],
})
export class PipesModule {}
