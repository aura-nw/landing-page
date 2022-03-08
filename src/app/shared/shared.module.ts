import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffCardComponent } from './cards/staff-card/staff-card.component';



@NgModule({
  declarations: [
    StaffCardComponent
  ],
  exports: [
    StaffCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
