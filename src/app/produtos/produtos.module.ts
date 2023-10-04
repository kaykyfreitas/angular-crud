import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { VitrineComponent } from './vitrine/vitrine.component';


@NgModule({
  declarations: [
    VitrineComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule
  ]
})
export class ProdutosModule { }
