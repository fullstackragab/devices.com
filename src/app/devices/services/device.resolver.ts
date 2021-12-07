import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Device } from '../models/device';
import { DeviceService } from './device.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceResolver implements Resolve<{ device: Device | undefined, related_devices: Device[] }> {
  constructor(private deviceService: DeviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ device: Device | undefined, related_devices: Device[] }> {
    let device: Device | undefined = undefined
    return this.deviceService.getDevice(route.params["id"]).pipe(switchMap((dvc: Device | undefined) => {
      device = dvc
      return this.deviceService.getRelatedDevices(route.params["id"])
    }), map((devices: Device[]) => {
      const related_devices: Device[] = []
      devices.forEach(device => related_devices.push(device))
      return { device, related_devices }
    }))
  }
}
