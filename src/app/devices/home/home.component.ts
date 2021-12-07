import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../models/device';
import { DeviceService } from '../services/device.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {

  }

  onSearch(value: string) {
    if(this.router.url === '/devices')
      this.searchService.search(value)
  }
}
