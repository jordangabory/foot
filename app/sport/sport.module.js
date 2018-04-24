"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var sport_routing_module_1 = require("./sport-routing.module");
var sport_component_1 = require("./sport.component");
var basket_component_1 = require("./basket/basket.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFHOUUsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsZ0ZBQStFO0FBQy9FLDBFQUF3RTtBQUN4RSxpRUFBZ0U7QUFDaEUsNkVBQTJFO0FBRTNFLDhEQUFvRjtBQUNwRixnRUFBZ0Y7QUFxQmhGO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFwQnZCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIseUNBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLDBDQUE0QjthQUM3QjtZQUNELFlBQVksRUFBRTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZiw4Q0FBcUI7Z0JBQ3JCLDBDQUFtQjtnQkFDbkIsb0NBQWdCO2dCQUNoQiw0Q0FBb0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuXHJcblxyXG5pbXBvcnQgeyBTcG9ydFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3Nwb3J0LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgU3BvcnRDb21wb25lbnQgfSBmcm9tICcuL3Nwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhc2tldENvbXBvbmVudCB9IGZyb20gJy4vYmFza2V0L2Jhc2tldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXZWxjb21lU3BvcnRDb21wb25lbnQgfSAgZnJvbSAnLi93ZWxjb21lc3BvcnQvd2VsY29tZXNwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbml0ZW0vYWN0aW9uaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJJdGVtQ29tcG9uZW50IH0gIGZyb20gJy4vdGFiaXRlbS90YWJpdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwb3J0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9zcG9ydGRldGFpbC9zcG9ydGRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgU3BvcnRSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTcG9ydENvbXBvbmVudCxcclxuICAgIEJhc2tldENvbXBvbmVudCxcclxuICAgIFdlbGNvbWVTcG9ydENvbXBvbmVudCxcclxuICAgIEFjdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBUYWJJdGVtQ29tcG9uZW50LCBcclxuICAgIFNwb3J0RGV0YWlsQ29tcG9uZW50XHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcG9ydE1vZHVsZSB7IH0iXX0=