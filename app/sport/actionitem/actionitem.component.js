"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ActionItemComponent = /** @class */ (function () {
    function ActionItemComponent(platform, routerExtensions) {
        this.platform = platform;
        this.routerExtensions = routerExtensions;
    }
    ActionItemComponent.prototype.goBackPage = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ActionItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-actionitem',
            templateUrl: './actionitem.component.html'
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, router_1.RouterExtensions])
    ], ActionItemComponent);
    return ActionItemComponent;
}());
exports.ActionItemComponent = ActionItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb25pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUkzRCxzREFBK0Q7QUFPL0Q7SUFJRSw2QkFDNkIsUUFBUSxFQUFXLGdCQUFrQztRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQVcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMvRSxDQUFDO0lBRUcsd0NBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBVlUsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO1FBTUcsV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7aURBQTZDLHlCQUFnQjtPQUx2RSxtQkFBbUIsQ0FXL0I7SUFBRCwwQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbnMtYWN0aW9uaXRlbScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uaXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbkl0ZW1Db21wb25lbnQge1xyXG4gIFxyXG4gIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtICwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgZ29CYWNrUGFnZSgpIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICB9XHJcbn0iXX0=