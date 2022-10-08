import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapOperatorComponent } from './rxjs-operators/map-operator/map-operator.component';
import { DebounceTimeOperatorComponent } from './rxjs-operators/debounce-time-operator/debounce-time-operator.component';
import { DistinctUntilChangedOperatorComponent } from './rxjs-operators/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { ThrottleTimeOperatorComponent } from './rxjs-operators/throttle-time-operator/throttle-time-operator.component';
import { ForkJoinOperatorComponent } from './rxjs-operators/fork-join-operator/fork-join-operator.component';
import { PluckOperatorComponent } from './rxjs-operators/pluck-operator/pluck-operator.component';
import { PipeOperatorComponent } from './rxjs-operators/pipe-operator/pipe-operator.component';
import { MergeMapOperatorComponent } from './rxjs-operators/merge-map-operator/merge-map-operator.component';
import { CombineLatestOperatorComponent } from './rxjs-operators/combine-latest-operator/combine-latest-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    MapOperatorComponent,
    DebounceTimeOperatorComponent,
    DistinctUntilChangedOperatorComponent,
    ThrottleTimeOperatorComponent,
    ForkJoinOperatorComponent,
    PluckOperatorComponent,
    PipeOperatorComponent,
    MergeMapOperatorComponent,
    CombineLatestOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
