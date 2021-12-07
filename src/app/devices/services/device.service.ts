import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private devices: Device[] = [];
  constructor(private http: HttpClient) {}
  getDeviceList(): Observable<Device[]> {
    if (this.devices && this.devices.length > 0) return of(this.devices);
    return this.http.get<Device[]>('/assets/data/devices.json').pipe(
      map((devices: any) => {
        return devices.map((device: any) => this.mapDevice(device));
      }),
      tap((devices) => (this.devices = devices))
    );
  }

  getDevice(id: string) {
    return this.getDeviceList().pipe(
      map((devices) => devices.find((device) => device.id === id))
    );
  }

  getRelatedDevices(id: string): Observable<Device[]> {
    const related_devices: Device[] = [];
    return this.http.get('/assets/data/related-devices.json').pipe(
      map((data: any) => {
        const item = data.find((item: any) => item.device_id === id);
        if (item && this.devices && this.devices.length > 0) {
          this.devices
            .filter((device) => item.related_devices.includes(device.id))
            .forEach((device) => related_devices.push(device));
        }
        return related_devices;
      })
    );
  }

  mapDevice(device: any): Device {
    return {
      id: device.id,
      name: device.name,
      type: device.type,
      temperature: device.temperature,
      status: device.status,
    };
  }
}
