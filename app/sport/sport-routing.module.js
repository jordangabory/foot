"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var sport_component_1 = require("./sport.component");
var welcomesport_component_1 = require("./welcomesport/welcomesport.component");
var football_component_1 = require("./football/football.component");
var volleyball_component_1 = require("./volleyball/volleyball.component");
var basket_component_1 = require("./basket/basket.component");
var tennis_component_1 = require("./tennis/tennis.component");
var routes = [
    { path: "", component: sport_component_1.SportComponent,
        children: [
            { path: "", component: welcomesport_component_1.WelcomeSportComponent },
            { path: "football", component: football_component_1.FootballComponent },
            { path: "basket", component: basket_component_1.BasketComponent },
            { path: "tennis", component: tennis_component_1.TennisComponent },
            { path: "volleyball", component: volleyball_component_1.VolleyballComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvcnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcG9ydC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELGdGQUErRTtBQUMvRSxvRUFBa0U7QUFDbEUsMEVBQXdFO0FBQ3hFLDhEQUE0RDtBQUM1RCw4REFBNkQ7QUFFN0QsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYztRQUNuQyxRQUFRLEVBQUM7WUFDTCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFHO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUc7WUFDbkQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFHO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRztZQUMvQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFHO1NBQzFEO0tBQ0Y7Q0FDRixDQUFDO0FBTUY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQUo5QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU3BvcnRDb21wb25lbnQgfSBmcm9tICcuL3Nwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdlbGNvbWVTcG9ydENvbXBvbmVudCB9ICBmcm9tICcuL3dlbGNvbWVzcG9ydC93ZWxjb21lc3BvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGJhbGxDb21wb25lbnQgfSBmcm9tICcuL2Zvb3RiYWxsL2Zvb3RiYWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZvbGxleWJhbGxDb21wb25lbnQgfSBmcm9tICcuL3ZvbGxleWJhbGwvdm9sbGV5YmFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYXNrZXRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVubmlzQ29tcG9uZW50IH0gIGZyb20gJy4vdGVubmlzL3Rlbm5pcy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNwb3J0Q29tcG9uZW50ICAsIFxyXG4gICAgY2hpbGRyZW46W1xyXG4gICAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBXZWxjb21lU3BvcnRDb21wb25lbnQgIH0sXHJcbiAgICAgICAgeyBwYXRoOiBcImZvb3RiYWxsXCIsIGNvbXBvbmVudDogRm9vdGJhbGxDb21wb25lbnQgIH0sXHJcbiAgICAgICAgeyBwYXRoOiBcImJhc2tldFwiLCBjb21wb25lbnQ6IEJhc2tldENvbXBvbmVudCAgfSxcclxuICAgICAgICB7IHBhdGg6IFwidGVubmlzXCIsIGNvbXBvbmVudDogVGVubmlzQ29tcG9uZW50ICB9LFxyXG4gICAgICAgIHsgcGF0aDogXCJ2b2xsZXliYWxsXCIsIGNvbXBvbmVudDogVm9sbGV5YmFsbENvbXBvbmVudCAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwb3J0Um91dGluZ01vZHVsZSB7IH0iXX0=