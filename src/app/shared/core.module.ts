import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRoutes } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
  ]
})
export class AdminModule { }
