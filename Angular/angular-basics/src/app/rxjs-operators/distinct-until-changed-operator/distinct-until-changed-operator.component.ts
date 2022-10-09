import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrls: ['./distinct-until-changed-operator.component.scss'],
})
export class DistinctUntilChangedOperatorComponent implements OnInit {
  source$ = from([1, 1, 2, 2, 3, 3]);

  constructor() {}

  ngOnInit(): void {
    this.source$.pipe(distinctUntilChanged()).subscribe(console.log);
  }
}
