"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var sport_routing_module_1 = require("./sport-routing.module");
var sport_component_1 = require("./sport.component");
var basket_component_1 = require("./basket/basket.component");
var volleyball_component_1 = require("./volleyball/volleyball.component");
var football_component_1 = require("./football/football.component");
var tennis_component_1 = require("./tennis/tennis.component");
var welcomesport_component_1 = require("./welcomesport/welcomesport.component");
var actionitem_component_1 = require("./actionitem/actionitem.component");
var tabitem_component_1 = require("./tabitem/tabitem.component");
var sportdetail_component_1 = require("./sportdetail/sportdetail.component");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var http_client_1 = require("nativescript-angular/http-client");
var SportModule = /** @class */ (function () {
    function SportModule() {
    }
    SportModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                sport_routing_module_1.SportRoutingModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_client_1.NativeScriptHttpClientModule
            ],
            declarations: [
                sport_component_1.SportComponent,
                basket_component_1.BasketComponent,
                volleyball_component_1.VolleyballComponent,
                football_component_1.FootballComponent,
                tennis_component_1.TennisComponent,
                welcomesport_component_1.WelcomeSportComponent,
                actionitem_component_1.ActionItemComponent,
                tabitem_component_1.TabItemComponent,
                sportdetail_component_1.SportDetailComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ],
        })
    ], SportModule);
    return SportModule;
}());
exports.SportModule = SportModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFHOUUsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsMEVBQXdFO0FBQ3hFLG9FQUFrRTtBQUNsRSw4REFBNEQ7QUFDNUQsZ0ZBQStFO0FBQy9FLDBFQUF3RTtBQUN4RSxpRUFBZ0U7QUFDaEUsNkVBQTJFO0FBRTNFLDhEQUFvRjtBQUNwRixnRUFBZ0Y7QUF3QmhGO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUF2QnZCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIseUNBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLDBDQUE0QjthQUM3QjtZQUNELFlBQVksRUFBRTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZiwwQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2YsOENBQXFCO2dCQUNyQiwwQ0FBbUI7Z0JBQ25CLG9DQUFnQjtnQkFDaEIsNENBQW9CO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgU3BvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zcG9ydC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9zcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYXNrZXRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVm9sbGV5YmFsbENvbXBvbmVudCB9IGZyb20gJy4vdm9sbGV5YmFsbC92b2xsZXliYWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvb3RiYWxsQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC9mb290YmFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW5uaXNDb21wb25lbnQgfSBmcm9tICcuL3Rlbm5pcy90ZW5uaXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2VsY29tZVNwb3J0Q29tcG9uZW50IH0gIGZyb20gJy4vd2VsY29tZXNwb3J0L3dlbGNvbWVzcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb25pdGVtL2FjdGlvbml0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiSXRlbUNvbXBvbmVudCB9ICBmcm9tICcuL3RhYml0ZW0vdGFiaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcG9ydERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vc3BvcnRkZXRhaWwvc3BvcnRkZXRhaWwuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIFNwb3J0Um91dGluZ01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3BvcnRDb21wb25lbnQsXHJcbiAgICBCYXNrZXRDb21wb25lbnQsXHJcbiAgICBWb2xsZXliYWxsQ29tcG9uZW50LFxyXG4gICAgRm9vdGJhbGxDb21wb25lbnQsXHJcbiAgICBUZW5uaXNDb21wb25lbnQsXHJcbiAgICBXZWxjb21lU3BvcnRDb21wb25lbnQsXHJcbiAgICBBY3Rpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgVGFiSXRlbUNvbXBvbmVudCwgXHJcbiAgICBTcG9ydERldGFpbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BvcnRNb2R1bGUgeyB9Il19