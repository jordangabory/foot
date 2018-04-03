import { Component ,  Inject , OnInit } from "@angular/core";
import { isAndroid } from "platform";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { ActionItem } from "ui/action-bar";
import { ImageService } from '../service/image.service';

@Component({
    moduleId: module.id,
    selector: 'ns-tabitem',
    templateUrl: './tabitem.component.html',
    styleUrls: ['./tabitem.component.css'],
    providers : [ImageService]
})
export class TabItemComponent implements OnInit {
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

    getID (x) {
      alert(x)
    }

    ngOnInit(): void {
      this.ImageS();
  }
}