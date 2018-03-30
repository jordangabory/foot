import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-sport',
    templateUrl: './sport.component.html',
    styleUrls: ['./sport.component.css']
})
export class SportComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}