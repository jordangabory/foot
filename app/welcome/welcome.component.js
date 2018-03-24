"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var WelcomeComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function WelcomeComponent(page) {
        page.actionBarHidden = true;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: "welcome",
            moduleId: module.id,
            templateUrl: "./welcome.component.html",
            styleUrls: ['welcome.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBOEI7QUFVOUI7SUFFSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILDBCQUFhLElBQVU7UUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBRTtJQUFBLENBQUM7SUFFM0QsbUNBQVEsR0FBUjtJQUVBLENBQUM7SUFSUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBS3FCLFdBQUk7T0FKZCxnQkFBZ0IsQ0FXNUI7SUFBRCx1QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ3ZWxjb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi93ZWxjb21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnd2VsY29tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3RvciggcGFnZTogUGFnZSApIHsgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZSA7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19