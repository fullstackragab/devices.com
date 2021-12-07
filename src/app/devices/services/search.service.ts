import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../models/device';
import { DeviceService } from './device.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private devices: Device[] = []
  searchUpdate = new BehaviorSubject<Device[]>([]);

  constructor(private deviceService: DeviceService) {
    this.deviceService.getDeviceList().subscribe(result => {
      this.devices = result
      this.searchUpdate.next(result)
    })
  }

  search(value: string) {
    if (value) {
      this.searchUpdate.next(this.devices.filter((device) => device.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
    } else {
      this.searchUpdate.next(this.devices);
    }
  }
}
