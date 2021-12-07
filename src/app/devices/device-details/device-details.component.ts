import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../models/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  device!: Device
  related_devices: Device[] = []
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.device = data["device"].device
      this.related_devices = data["device"].related_devices
    })
  }

  ngOnInit(): void {
  }
}
