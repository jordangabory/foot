import { Component ,  Inject } from "@angular/core";
import { isAndroid } from "platform";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { ActionItem } from "ui/action-bar";

@Component({
    moduleId: module.id,
    selector: 'ns-tabitem',
    templateUrl: './tabitem.component.html'
})
export class TabItemComponent {
  
  

  constructor(
    @Inject('platform') public platform 
  ) {}

  
}