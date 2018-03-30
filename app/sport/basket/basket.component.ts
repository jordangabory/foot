import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}