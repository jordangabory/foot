"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var image_service_1 = require("../service/image.service");
var SportDetailComponent = /** @class */ (function () {
    function SportDetailComponent(platform, Image, route, router) {
        this.platform = platform;
        this.Image = Image;
        this.route = route;
        this.router = router;
    }
    SportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results = this.route.params.subscribe(function (params) { console.log(params['id']); });
        var ido = +this.route.snapshot.params["id"];
        console.log(ido + 'pa male pale moun ');
        this.Image.getop(ido).subscribe(function (resu) { return _this.results = resu; });
    };
    SportDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-sportdetail',
            templateUrl: './sportdetail.component.html',
            providers: [image_service_1.ImageService]
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, image_service_1.ImageService, router_1.ActivatedRoute, router_1.Router])
    ], SportDetailComponent);
    return SportDetailComponent;
}());
exports.SportDetailComponent = SportDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvcnRkZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BvcnRkZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELDBDQUFrRTtBQUNsRSwwREFBd0Q7QUFReEQ7SUFNRSw4QkFDNkIsUUFBUSxFQUFVLEtBQW9CLEVBQVksS0FBcUIsRUFBVyxNQUFjO1FBQWhHLGFBQVEsR0FBUixRQUFRLENBQUE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQzFILENBQUM7SUFJSix1Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFFckYsSUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxJQUFJLElBQUcsT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFFLElBQUksRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFwQlUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7U0FDOUIsQ0FBQztRQVFHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lEQUFrQyw0QkFBWSxFQUFtQix1QkFBYyxFQUFtQixlQUFNO09BUGxILG9CQUFvQixDQTJCaEM7SUFBRCwyQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgIFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvaW1hZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy1zcG9ydGRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3BvcnRkZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbIEltYWdlU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcG9ydERldGFpbENvbXBvbmVudCB7XHJcbiAgaWQ6IGFueTtcclxuICBwYXJhbXNTdWI6IGFueTtcclxuICBwcml2YXRlIHJlc3VsdHMgOiBhbnk7XHJcblxyXG4gIG9wOiBhbnlcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtLCBwcml2YXRlIEltYWdlIDogSW1hZ2VTZXJ2aWNlICwgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlICwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXN1bHRzID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PnsgY29uc29sZS5sb2cocGFyYW1zWydpZCddKTsgfSApO1xyXG5cclxuICAgIGNvbnN0IGlkbyA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlkbyArJ3BhIG1hbGUgcGFsZSBtb3VuICcpO1xyXG4gICAgXHJcbiAgICB0aGlzLkltYWdlLmdldG9wKGlkbykuc3Vic2NyaWJlKCByZXN1PT4gdGhpcy5yZXN1bHRzID1yZXN1KTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcbiBcclxufSJdfQ==