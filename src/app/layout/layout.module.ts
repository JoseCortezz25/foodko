import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoprincipalComponent } from './components/infoprincipal/infoprincipal.component';
import { SharedModule } from './../shared/shared.module';
import { PopularfoodsComponent } from './components/popularfoods/popularfoods.component';
import { CoversecundarioComponent } from './components/coversecundario/coversecundario.component';
import { OtrosproductosComponent } from './components/otrosproductos/otrosproductos.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, InfoprincipalComponent, PopularfoodsComponent, CoversecundarioComponent, OtrosproductosComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
