import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce-time-operator',
  templateUrl: './debounce-time-operator.component.html',
  styleUrls: ['./debounce-time-operator.component.scss'],
})
export class DebounceTimeOperatorComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  subscribe = new Subscription();
  keyup$ = new Observable();

  ngAfterViewInit() {
    this.keyup$ = fromEvent(this.searchInput.nativeElement, 'keyup');
    this.subscribe = this.keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe(console.log);
  }

  constructor() {}

  ngOnInit(): void {}
}
