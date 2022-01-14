import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class InputClearable implements OnInit {
  value: any;

  ngOnInit() {
    this.search.valueChanges.subscribe((value) =>
      this.searchEmitter.emit(value)
    );
  }

  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<string>();
}
