import { Component, OnInit } from '@angular/core';
import { interval, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time-operator',
  templateUrl: './throttle-time-operator.component.html',
  styleUrls: ['./throttle-time-operator.component.scss'],
})
export class ThrottleTimeOperatorComponent implements OnInit {
  source$ = interval(1000);

  constructor() {}

  ngOnInit(): void {
    this.source$.pipe(throttleTime(5000)).subscribe(console.log);
  }
}
