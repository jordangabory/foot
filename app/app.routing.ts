import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


import { WelcomeComponent }  from "./welcome/welcome.component";

const routes: Routes = [
    { path: "" , component: WelcomeComponent},
    { path: "sport" , loadChildren: "./sport/sport.module#SportModule"},
    { path: "users" , loadChildren: "./users/users.module#UsersModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }