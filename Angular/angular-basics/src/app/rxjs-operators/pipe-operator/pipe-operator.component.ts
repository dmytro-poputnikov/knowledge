import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.scss'],
})
export class PipeOperatorComponent implements OnInit {
  source$ = of(1, 2, 3);

  constructor() {}

  ngOnInit(): void {
    this.source$.pipe(map((x) => x + '!')).subscribe(console.log);
  }
}
