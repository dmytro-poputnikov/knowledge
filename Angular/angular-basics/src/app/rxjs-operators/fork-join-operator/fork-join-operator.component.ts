import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.scss'],
})
export class ForkJoinOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users'),
      }
    )
      // { google: object, microsoft: object, users: array }
      .subscribe(console.log);
  }
}
