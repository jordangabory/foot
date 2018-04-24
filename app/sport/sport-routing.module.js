"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var sport_component_1 = require("./sport.component");
var welcomesport_component_1 = require("./welcomesport/welcomesport.component");
var basket_component_1 = require("./basket/basket.component");
var sportdetail_component_1 = require("./sportdetail/sportdetail.component");
var routes = [
    { path: "", component: sport_component_1.SportComponent,
        children: [
            { path: "", component: welcomesport_component_1.WelcomeSportComponent },
            { path: "detail/:id", component: sportdetail_component_1.SportDetailComponent },
            { path: "categorie/:name", component: basket_component_1.BasketComponent }
        ]
    }
];
var SportRoutingModule = /** @class */ (function () {
    function SportRoutingModule() {
    }
    SportRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], SportRoutingModule);
    return SportRoutingModule;
}());
exports.SportRoutingModule = SportRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvcnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcG9ydC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELGdGQUErRTtBQUMvRSw4REFBNEQ7QUFDNUQsNkVBQTJFO0FBRTNFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWM7UUFDbkMsUUFBUSxFQUFDO1lBQ0wsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBRztZQUMvQyxFQUFFLElBQUksRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFDO1lBQ3JELEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFHO1NBQzNEO0tBQ0Y7Q0FDRixDQUFDO0FBTUY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQUo5QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU3BvcnRDb21wb25lbnQgfSBmcm9tICcuL3Nwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdlbGNvbWVTcG9ydENvbXBvbmVudCB9ICBmcm9tICcuL3dlbGNvbWVzcG9ydC93ZWxjb21lc3BvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmFza2V0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNrZXQvYmFza2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwb3J0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9zcG9ydGRldGFpbC9zcG9ydGRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNwb3J0Q29tcG9uZW50ICAsIFxyXG4gICAgY2hpbGRyZW46W1xyXG4gICAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBXZWxjb21lU3BvcnRDb21wb25lbnQgIH0sXHJcbiAgICAgICAgeyBwYXRoOlwiZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IFNwb3J0RGV0YWlsQ29tcG9uZW50fSxcclxuICAgICAgICB7IHBhdGg6IFwiY2F0ZWdvcmllLzpuYW1lXCIsIGNvbXBvbmVudDogQmFza2V0Q29tcG9uZW50ICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BvcnRSb3V0aW5nTW9kdWxlIHsgfSJdfQ==