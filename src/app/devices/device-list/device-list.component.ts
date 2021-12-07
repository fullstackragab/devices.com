import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices$!: Observable<Device[]>

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.devices$ = this.deviceService.getDeviceList()
  }

}
