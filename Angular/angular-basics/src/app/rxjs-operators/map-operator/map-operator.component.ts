import { Component, OnInit } from '@angular/core';
import { from, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss'],
})
export class MapOperatorComponent implements OnInit {
  source = from([1, 2, 3, 4, 5]);
  mapExample$ = this.source.pipe(map((val) => val + 10));
  subscribe = new Subscription();
  constructor() {}

  ngOnInit(): void {
    this.subscribe = this.mapExample$.subscribe((val) => console.log(val));
  }
}
