import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { BasicHighlightDirective } from './assignment4/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './assignment4/better-highlight/better-highlighht.directive';
import { UnlessDirective } from './unless.directive';
import { AssigmentFormsComponent } from './assigment-forms/assigment-forms.component';
import { AssignmentReactiveFormsComponent } from './assignment-reactive-forms/assignment-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SecondChildComponent,
    AssignmentsComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AssigmentFormsComponent,
    AssignmentReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
