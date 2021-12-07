import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DeviceListItemComponent } from '../device-list-item/device-list-item.component';
import { DeviceService } from '../services/device.service';
import { SearchService } from '../services/search.service';

import { DeviceListComponent } from './device-list.component';

describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;
  let searchService: SearchService;
  let deviceService: DeviceService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DeviceListComponent, DeviceListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchService);
    deviceService = TestBed.inject(DeviceService)
    httpMock = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render devices list', async () => {
    const devicesMock = [{
      "id": "DVC-00004",
      "name": "Device 4",
      "type": "laptop",
      "temperature": 12,
      "status": "available"
    },
    {
      "id": "DVC-00005",
      "name": "Device 5",
      "type": "tv",
      "temperature": 9,
      "status": "available"
    },
    {
      "id": "DVC-00006",
      "name": "Device 6",
      "type": "mobile",
      "temperature": 16,
      "status": "offline"
    }]
    const req = httpMock.expectOne('/assets/data/devices.json');
    expect(req.request.method).toBe("GET");
    req.flush(devicesMock)
    const devices = await searchService.searchUpdate.getValue()
    httpMock.verify()

    fixture.detectChanges()
    const items = fixture.debugElement.queryAll(By.directive(DeviceListItemComponent))
    expect(items.length).toEqual(devices.length)
    const itemName1 = items[0].query(By.css('.name'))
    const itemName2 = items[1].query(By.css('.name'))
    const itemName3 = items[2].query(By.css('.name'))
    expect(itemName1.nativeElement.innerText).toEqual(devices[0].name)
    expect(itemName2.nativeElement.innerText).toEqual(devices[1].name)
    expect(itemName3.nativeElement.innerText).toEqual(devices[2].name)
  })
});
