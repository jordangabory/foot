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
        this.apikey = "f9ea396d830c27593fd6612b6b4ed2db";
        this.apimovie = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
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
    ImageService.prototype.getCategorie = function () {
        return this.http.get(this.apimovie + this.apikey + "&language=en-US").map(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQTZFO0FBQzdFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFJOUI7SUFNSSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUw1QixjQUFTLEdBQUcsNENBQTRDLENBQUM7UUFFekQsV0FBTSxHQUFZLGtDQUFrQyxDQUFDO1FBQ3JELGFBQVEsR0FBWSx3REFBd0QsQ0FBQztJQUU3QyxDQUFDO0lBRW5DLDhCQUFPLEdBQWQ7UUFDSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFLLEdBQVosVUFBYSxFQUFFO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDN0UsTUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDMUUsTUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBT2lCLGlCQUFVO09BTjNCLFlBQVksQ0EyQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiO1xyXG4gICAgcHJpdmF0ZSAgbG9tIDogYW55IDtcclxuICAgIHByaXZhdGUgYXBpa2V5IDogc3RyaW5nID0gXCJmOWVhMzk2ZDgzMGMyNzU5M2ZkNjYxMmI2YjRlZDJkYlwiO1xyXG4gICAgcHJpdmF0ZSBhcGltb3ZpZSA6IHN0cmluZyA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9nZW5yZS9tb3ZpZS9saXN0P2FwaV9rZXk9XCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgIHB1YmxpYyBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsKS5tYXAoKHJlcyk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRvcChpZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCIgKyBpZCkubWFwKChyZXMpPT57XHJcbiAgICAgICAgICAgIHJldHVybiByZXMgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhdGVnb3JpZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpbW92aWUgKyB0aGlzLmFwaWtleSArIFwiJmxhbmd1YWdlPWVuLVVTXCIpLm1hcCgocmVzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=