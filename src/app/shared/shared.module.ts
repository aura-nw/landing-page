import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffCardComponent } from './cards/staff-card/staff-card.component';
import { AuraCardComponent } from './cards/aura-card/aura-card.component';



@NgModule({
  declarations: [
    StaffCardComponent,
    AuraCardComponent
  ],
    exports: [
        StaffCardComponent,
        AuraCardComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
