import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  devices: Device[] = []
  constructor(private deviceSerice: DeviceService) { }

  ngOnInit(): void {
    this.deviceSerice.getDeviceList().subscribe(devices => this.devices = devices)
  }

}
