import { Component, Inject, OnInit } from '@angular/core';
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { ActionItem } from "ui/action-bar";


@Component({
    moduleId: module.id,
    selector: 'ns-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(
    @Inject('platform') public platform
  ) {}

  
}