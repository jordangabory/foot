"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_service_1 = require("./service/image.service");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(platform, Image) {
        this.platform = platform;
        this.Image = Image;
    }
    UsersComponent.prototype.ImageS = function () {
        var _this = this;
        this.Image.getData().
            subscribe(function (resu) { return _this.results = resu; });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.ImageS();
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.ImageS();
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css'],
            providers: [image_service_1.ImageService]
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, image_service_1.ImageService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBSzFELHlEQUF3RDtBQVN4RDtJQUlFLHdCQUM2QixRQUFRLEVBQVcsS0FBbUI7UUFBdEMsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUFXLFVBQUssR0FBTCxLQUFLLENBQWM7SUFDaEUsQ0FBQztJQUVILCtCQUFNLEdBQU47UUFBQSxpQkFLRTtRQUpELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2xCLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFuQixDQUFtQixDQUM1QixDQUFBO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQXJCUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7UUFNRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtpREFBa0MsNEJBQVk7T0FMeEQsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSAgZnJvbSBcIi4vc2VydmljZS9pbWFnZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLXVzZXJzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2Vycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi91c2Vycy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtJbWFnZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSByZXN1bHRzOmFueSAgO1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtICwgcHJpdmF0ZSBJbWFnZTogSW1hZ2VTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICAgSW1hZ2VTICgpIHtcclxuICAgIHRoaXMuSW1hZ2UuZ2V0RGF0YSgpLlxyXG4gICAgICBzdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzdSA9PiB0aGlzLnJlc3VsdHMgPSByZXN1XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5JbWFnZVMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIDogdm9pZCB7XHJcbiAgICAgIHRoaXMuSW1hZ2VTKCk7XHJcbiAgICB9XHJcbn0iXX0=