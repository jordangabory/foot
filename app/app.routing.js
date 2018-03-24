"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var welcome_component_1 = require("./welcome/welcome.component");
var routes = [
    { path: "", component: welcome_component_1.WelcomeComponent },
    { path: "items", component: items_component_1.ItemsComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBRXhELGlFQUFnRTtBQUVoRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUcsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQ3pDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtDQUMvQyxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9ICBmcm9tIFwiLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiAsIGNvbXBvbmVudDogV2VsY29tZUNvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19