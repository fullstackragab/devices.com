import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Device } from '../models/device';
import { DeviceService } from '../services/device.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices$!: Observable<Device[]>

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.devices$ = this.searchService.searchUpdate
  }

}
