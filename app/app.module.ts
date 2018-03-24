import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemsComponent } from "./item/items.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import * as platform from 'platform' ;
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUICalendarModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        WelcomeComponent
    ],
    providers: [
        { provide : 'platform', useValue: platform}
    ], 
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
