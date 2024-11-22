import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    HomePageComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
