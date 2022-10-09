import { Component, OnInit } from '@angular/core';
import { timer, combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.scss'],
})
export class CombineLatestOperatorComponent implements OnInit {
  // timerOne emits first value at 1s, then once every 4s
  timerOne$ = timer(1000, 4000);
  // timerTwo emits first value at 2s, then once every 4s
  timerTwo$ = timer(2000, 4000);
  // timerThree emits first value at 3s, then once every 4s
  timerThree$ = timer(8000, 4000);

  constructor() {}

  ngOnInit(): void {
    this.timerOne$
      .pipe(combineLatestWith(this.timerTwo$, this.timerThree$))
      .subscribe(console.log);
  }
}
