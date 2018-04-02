"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var routes = [
    { path: "", component: welcome_component_1.WelcomeComponent },
    { path: "sport", loadChildren: "./sport/sport.module#SportModule" },
    { path: "users", loadChildren: "./users/users.module#UsersModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFJdkUsaUVBQWdFO0FBRWhFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRyxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7SUFDekMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRSxrQ0FBa0MsRUFBQztJQUNuRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFLGtDQUFrQyxFQUFDO0NBQ3RFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9ICBmcm9tIFwiLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiAsIGNvbXBvbmVudDogV2VsY29tZUNvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwic3BvcnRcIiAsIGxvYWRDaGlsZHJlbjogXCIuL3Nwb3J0L3Nwb3J0Lm1vZHVsZSNTcG9ydE1vZHVsZVwifSxcclxuICAgIHsgcGF0aDogXCJ1c2Vyc1wiICwgbG9hZENoaWxkcmVuOiBcIi4vdXNlcnMvdXNlcnMubW9kdWxlI1VzZXJzTW9kdWxlXCJ9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19