import { Component, Inject, OnInit } from '@angular/core';
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";

@Component({
    moduleId: module.id,
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}