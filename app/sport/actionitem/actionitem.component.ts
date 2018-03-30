import { Component, OnInit , Inject } from "@angular/core";
import { isAndroid } from "platform";

import { ActionItem } from "ui/action-bar";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: 'ns-actionitem',
    templateUrl: './actionitem.component.html'
})
export class ActionItemComponent {
  
  private _mainContentText: string;

  constructor(
    @Inject('platform') public platform , private routerExtensions: RouterExtensions
  ) {}

  public goBackPage() {
    this.routerExtensions.backToPreviousPage();
  }
}