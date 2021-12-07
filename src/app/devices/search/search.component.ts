import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit(): void {}

  onInput(value: string) {
    this.search.emit(value);
  }

  onCancel() {
    this.input.nativeElement.value = '';
    this.onInput('');
  }
}
