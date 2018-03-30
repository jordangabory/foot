import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-tennis',
    templateUrl: './tennis.component.html',
    styleUrls: ['./tennis.component.css'],
})
export class TennisComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}