import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [CamelCasePipe],
  imports: [CommonModule],
  exports: [CamelCasePipe],
})
export class PipesModule {}
