"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var WelcomeSportComponent = /** @class */ (function () {
    function WelcomeSportComponent(platform, _changeDetectionRef) {
        this.platform = platform;
        this._changeDetectionRef = _changeDetectionRef;
    }
    WelcomeSportComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    WelcomeSportComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(WelcomeSportComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    WelcomeSportComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    WelcomeSportComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], WelcomeSportComponent.prototype, "drawerComponent", void 0);
    WelcomeSportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-welcomesport',
            templateUrl: './welcomesport.component.html',
            styleUrls: ['./welcomesport.component.css']
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, core_1.ChangeDetectorRef])
    ], WelcomeSportComponent);
    return WelcomeSportComponent;
}());
exports.WelcomeSportComponent = WelcomeSportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZXNwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlbGNvbWVzcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0c7QUFPeEcsOERBQTRGO0FBUzVGO0lBSUUsK0JBQzZCLFFBQVEsRUFBVyxtQkFBc0M7UUFBekQsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUFXLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7SUFDbkYsQ0FBQztJQUtGLCtDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxzQkFBSSxrREFBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FKQTtJQU1NLDBDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0RBQWdCLEdBQXZCO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBMUJnQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7a0VBQUM7SUFSdkUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7UUFNRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtpREFBZ0Qsd0JBQWlCO09BTDNFLHFCQUFxQixDQW1DakM7SUFBRCw0QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgSW5qZWN0ICwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLXdlbGNvbWVzcG9ydCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vd2VsY29tZXNwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dlbGNvbWVzcG9ydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlbGNvbWVTcG9ydENvbXBvbmVudCAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICwgT25Jbml0IHtcclxuICBcclxuICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSwgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1haW5Db250ZW50VGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==