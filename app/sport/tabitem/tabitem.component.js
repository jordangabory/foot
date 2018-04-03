"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_service_1 = require("../service/image.service");
var TabItemComponent = /** @class */ (function () {
    function TabItemComponent(platform, Image) {
        this.platform = platform;
        this.Image = Image;
    }
    TabItemComponent.prototype.ImageS = function () {
        var _this = this;
        this.Image.getData().
            subscribe(function (resu) { return _this.results = resu; });
    };
    TabItemComponent.prototype.getID = function (x) {
        alert(x);
    };
    TabItemComponent.prototype.ngOnInit = function () {
        this.ImageS();
    };
    TabItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-tabitem',
            templateUrl: './tabitem.component.html',
            styleUrls: ['./tabitem.component.css'],
            providers: [image_service_1.ImageService]
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, image_service_1.ImageService])
    ], TabItemComponent);
    return TabItemComponent;
}());
exports.TabItemComponent = TabItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUs3RCwwREFBd0Q7QUFTeEQ7SUFJRSwwQkFDNkIsUUFBUSxFQUFXLEtBQW1CO1FBQXRDLGFBQVEsR0FBUixRQUFRLENBQUE7UUFBVyxVQUFLLEdBQUwsS0FBSyxDQUFjO0lBQ2hFLENBQUM7SUFFSCxpQ0FBTSxHQUFOO1FBQUEsaUJBS0U7UUFKRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNsQixTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBbkIsQ0FBbUIsQ0FDNUIsQ0FBQTtJQUNILENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU8sQ0FBQztRQUNOLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFyQlUsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUcsQ0FBQyw0QkFBWSxDQUFDO1NBQzdCLENBQUM7UUFNRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtpREFBa0MsNEJBQVk7T0FMeEQsZ0JBQWdCLENBc0I1QjtJQUFELHVCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgIEluamVjdCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ltYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy10YWJpdGVtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJpdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYml0ZW0uY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzIDogW0ltYWdlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICBwcml2YXRlIHJlc3VsdHM6YW55ICA7XHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0gLCBwcml2YXRlIEltYWdlOiBJbWFnZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gICBJbWFnZVMgKCkge1xyXG4gICAgdGhpcy5JbWFnZS5nZXREYXRhKCkuXHJcbiAgICAgIHN1YnNjcmliZShcclxuICAgICAgICByZXN1ID0+IHRoaXMucmVzdWx0cyA9IHJlc3VcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGdldElEICh4KSB7XHJcbiAgICAgIGFsZXJ0KHgpXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuSW1hZ2VTKCk7XHJcbiAgfVxyXG59Il19