"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.serverUrl = "https://jsonplaceholder.typicode.com/posts";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQTZFO0FBQzdFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFJOUI7SUFJSSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUg1QixjQUFTLEdBQUcsNENBQTRDLENBQUM7SUFHekIsQ0FBQztJQUVuQyw4QkFBTyxHQUFkO1FBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsRUFBRTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQzdFLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoQlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUtpQixpQkFBVTtPQUozQixZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIjtcclxuICAgIHByaXZhdGUgIGxvbSA6IGFueSA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgIHB1YmxpYyBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsKS5tYXAoKHJlcyk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRvcChpZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCIgKyBpZCkubWFwKChyZXMpPT57XHJcbiAgICAgICAgICAgIHJldHVybiByZXMgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0=