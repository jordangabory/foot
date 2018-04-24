"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BasketComponent = /** @class */ (function () {
    function BasketComponent(platform, route, router) {
        this.platform = platform;
        this.route = route;
        this.router = router;
    }
    BasketComponent.prototype.ngOnInit = function () {
        var ido = this.route.snapshot.params["name"];
        this.results = this.route.params.subscribe(function (params) { return console.log('jptgjephgieo' + params["name"]); });
        ;
    };
    BasketComponent.prototype.ngOnDestroy = function () {
        this.results.unsubscribe();
    };
    BasketComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-basket',
            templateUrl: './basket.component.html',
            styleUrls: ['./basket.component.css'],
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, router_1.ActivatedRoute, router_1.Router])
    ], BasketComponent);
    return BasketComponent;
}());
exports.BasketComponent = BasketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFza2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsMENBQWtFO0FBU2xFO0lBSUUseUJBQzZCLFFBQVEsRUFBWSxLQUFxQixFQUFXLE1BQWM7UUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUFZLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUM1RixDQUFDO0lBRUosa0NBQVEsR0FBUjtRQUdFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxHQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUE1QyxDQUE0QyxDQUFHLENBQUM7UUFFckcsQ0FBQztJQUVILENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBckJVLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBRXhDLENBQUM7UUFNRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtpREFBbUMsdUJBQWMsRUFBbUIsZUFBTTtPQUxwRixlQUFlLENBc0IzQjtJQUFELHNCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ICBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLWJhc2tldCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFza2V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Jhc2tldC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2tldENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSByZXN1bHRzIDogYW55O1xyXG4gIHByaXZhdGUgdWx0cyA6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSAsICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaWRvID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJuYW1lXCJdO1xyXG5cclxuICAgIHRoaXMucmVzdWx0cyA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gY29uc29sZS5sb2coICdqcHRnamVwaGdpZW8nICtwYXJhbXNbXCJuYW1lXCJdKSAgKTtcclxuICAgIFxyXG4gICAgO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVzdWx0cy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufSJdfQ==