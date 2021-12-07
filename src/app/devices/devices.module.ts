import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceListItemComponent } from './device-list-item/device-list-item.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceResolver } from './services/device.resolver';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    DeviceListComponent,
    DeviceListItemComponent,
    DeviceDetailsComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
