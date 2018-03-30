import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-football',
    templateUrl: './football.component.html',
    styleUrls: ['./football.component.css'],
})
export class FootballComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}