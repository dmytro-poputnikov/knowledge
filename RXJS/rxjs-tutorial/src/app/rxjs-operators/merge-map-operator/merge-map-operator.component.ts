import { Component, OnInit } from '@angular/core';
import { interval, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.scss'],
})
export class MergeMapOperatorComponent implements OnInit {
  letters$ = of('a', 'b', 'c');
  result$ = this.letters$.pipe(
    mergeMap((x: any) => interval(1000).pipe(map((i) => x + i)))
  );

  constructor() {}

  ngOnInit(): void {
    this.result$.subscribe(console.log);
  }
}
