import { Component, OnInit } from "@angular/core";
import { Page} from "ui/page";



@Component({
    selector: "welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html",
})
export class WelcomeComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor( page: Page ) {  page.actionBarHidden = true ;}

    ngOnInit(): void {
        
    }

    
}