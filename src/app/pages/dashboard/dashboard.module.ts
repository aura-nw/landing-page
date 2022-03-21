import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SharedModule} from '../../shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {TeamService} from '../../../core/teamService.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTooltipModule,
    SharedModule,
    SlickCarouselModule
  ],
  providers: [TeamService]
})
export class DashboardModule { }
