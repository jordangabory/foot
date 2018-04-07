"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.serverUrl = "https://jsonplaceholder.typicode.com/users";
    }
    ImageService.prototype.getData = function () {
        return this.http.get(this.serverUrl).map(function (res) {
            return res;
        });
    };
    ImageService.prototype.getop = function (id) {
        return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id).map(function (res) {
            return res;
        });
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQTZFO0FBQzdFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFJOUI7SUFHSSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcsNENBQTRDLENBQUM7SUFFekIsQ0FBQztJQUVuQyw4QkFBTyxHQUFkO1FBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsRUFBRTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQzdFLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFmUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLFlBQVksQ0FnQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICBwdWJsaWMgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCkubWFwKChyZXMpPT57XHJcbiAgICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0b3AoaWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL1wiICsgaWQpLm1hcCgocmVzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19