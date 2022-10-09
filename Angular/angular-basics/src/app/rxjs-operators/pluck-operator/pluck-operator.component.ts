import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.scss'],
})
export class PluckOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = from([
      {
        name: 'Joe',
        age: 30,
        job: { title: 'Developer', language: 'JavaScript' },
      },
      //will return undefined when no job is found
      { name: 'Sarah', age: 35 },
    ]);
    //grab title property under job
    //const example = source.pipe(pluck('job', 'title')); @deprecated
    const example = source.pipe(map((val) => val?.job?.title));
    //output: "Developer" , undefined
    const subscribe = example.subscribe((val) => console.log(val));
  }
}
