import { Component, OnInit , Inject , ViewChild, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import { isAndroid } from "platform";


import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    moduleId: module.id,
    selector: 'ns-welcomesport',
    templateUrl: './welcomesport.component.html',
    styleUrls: ['./welcomesport.component.css']
})
export class WelcomeSportComponent  implements AfterViewInit , OnInit {
  
  private _mainContentText: string;

  constructor(
    @Inject('platform') public platform,  private _changeDetectionRef: ChangeDetectorRef
  ) {}

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit(): void {
        
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }
}