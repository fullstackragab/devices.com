import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../models/device';
import { Resources } from '../Resources';

@Component({
  selector: 'app-device-list-item',
  templateUrl: './device-list-item.component.html',
  styleUrls: ['./device-list-item.component.scss']
})
export class DeviceListItemComponent implements OnInit {
  @Input() device!: Device;
  constructor() { }

  ngOnInit(): void {
  }

  getIcon() {
    return Resources.getDeviceIcon(this.device.type)
  }

  getStatus() {
    return Resources.getDeviceStatus(this.device.status)
  }
}
