import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() searchInput : EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  inputSearch = ''
  onInputChange(event:Event)
  {
    const target = event.target as HTMLInputElement
    this.searchInput.emit(target.value)
  }
}
