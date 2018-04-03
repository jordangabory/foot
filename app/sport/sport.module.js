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
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var SportModule = /** @class */ (function () {
    function SportModule() {
    }
    SportModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                sport_routing_module_1.SportRoutingModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                sport_component_1.SportComponent,
                basket_component_1.BasketComponent,
                volleyball_component_1.VolleyballComponent,
                football_component_1.FootballComponent,
                tennis_component_1.TennisComponent,
                welcomesport_component_1.WelcomeSportComponent,
                actionitem_component_1.ActionItemComponent,
                tabitem_component_1.TabItemComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ],
        })
    ], SportModule);
    return SportModule;
}());
exports.SportModule = SportModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFHOUUsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsMEVBQXdFO0FBQ3hFLG9FQUFrRTtBQUNsRSw4REFBNEQ7QUFDNUQsZ0ZBQStFO0FBQy9FLDBFQUF3RTtBQUN4RSxpRUFBZ0U7QUFFaEUsOERBQW9GO0FBc0JwRjtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBckJ2QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHlDQUFrQjtnQkFDbEIsd0NBQThCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2dCQUNkLGtDQUFlO2dCQUNmLDBDQUFtQjtnQkFDbkIsc0NBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZiw4Q0FBcUI7Z0JBQ3JCLDBDQUFtQjtnQkFDbkIsb0NBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgU3BvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zcG9ydC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9zcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYXNrZXRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVm9sbGV5YmFsbENvbXBvbmVudCB9IGZyb20gJy4vdm9sbGV5YmFsbC92b2xsZXliYWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvb3RiYWxsQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC9mb290YmFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW5uaXNDb21wb25lbnQgfSBmcm9tICcuL3Rlbm5pcy90ZW5uaXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2VsY29tZVNwb3J0Q29tcG9uZW50IH0gIGZyb20gJy4vd2VsY29tZXNwb3J0L3dlbGNvbWVzcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb25pdGVtL2FjdGlvbml0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiSXRlbUNvbXBvbmVudCB9ICBmcm9tICcuL3RhYml0ZW0vdGFiaXRlbS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIFNwb3J0Um91dGluZ01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTcG9ydENvbXBvbmVudCxcclxuICAgIEJhc2tldENvbXBvbmVudCxcclxuICAgIFZvbGxleWJhbGxDb21wb25lbnQsXHJcbiAgICBGb290YmFsbENvbXBvbmVudCxcclxuICAgIFRlbm5pc0NvbXBvbmVudCxcclxuICAgIFdlbGNvbWVTcG9ydENvbXBvbmVudCxcclxuICAgIEFjdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBUYWJJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcG9ydE1vZHVsZSB7IH0iXX0=