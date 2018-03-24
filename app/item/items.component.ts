import { Component, OnInit , Inject , ViewChild, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import { isAndroid } from "platform";


import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['items.component.css']
})
export class ItemsComponent implements AfterViewInit , OnInit {

    private _mainContentText: string;
    
    
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor( @Inject('platform') public platform ,  private _changeDetectionRef: ChangeDetectorRef  ) { 
        
     }

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