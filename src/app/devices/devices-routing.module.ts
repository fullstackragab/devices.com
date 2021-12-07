import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { HomeComponent } from './home/home.component';
import { DeviceResolver } from './services/device.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DeviceListComponent },
      {
        path: ':id',
        component: DeviceDetailsComponent,
        resolve: {
          device: DeviceResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesRoutingModule {}
