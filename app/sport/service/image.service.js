"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.serverUrl = "https://picsum.photos/list";
    }
    ImageService.prototype.getData = function () {
        return this.http.get(this.serverUrl).map(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQTZFO0FBQzdFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFJOUI7SUFHSSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcsNEJBQTRCLENBQUM7SUFFVCxDQUFDO0lBRW5DLDhCQUFPLEdBQWQ7UUFDSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVRRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FJaUIsaUJBQVU7T0FIM0IsWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3BpY3N1bS5waG90b3MvbGlzdFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICBwdWJsaWMgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCkubWFwKChyZXMpPT57XHJcbiAgICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==