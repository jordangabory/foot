import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-volley',
    templateUrl: './volleyball.component.html',
    styleUrls: ['./volleyball.component.css']
})
export class VolleyballComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}