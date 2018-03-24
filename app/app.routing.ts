import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";

import { WelcomeComponent }  from "./welcome/welcome.component";

const routes: Routes = [
    { path: "" , component: WelcomeComponent},
    { path: "items", component: ItemsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }