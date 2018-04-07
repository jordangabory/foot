import { Component, Inject, OnInit } from '@angular/core';
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { ActionItem } from "ui/action-bar";
import { ImageService }  from "./service/image.service";

@Component({
    moduleId: module.id,
    selector: 'ns-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [ImageService]
})
export class UsersComponent implements OnInit {
  private results:any  ;
  

  constructor(
    @Inject('platform') public platform , private Image: ImageService
  ) {}

   ImageS () {
    this.Image.getData().
      subscribe(
        resu => this.results = resu
      )
    }

    ngOnInit(): void {
      this.ImageS();
    }

    ngOnDestroy() : void {
      this.ImageS();
    }
}