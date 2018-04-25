"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePageView = /** @class */ (function () {
    function HomePageView(model) {
        this.model = model;
    }
    HomePageView.prototype.onNavigatingTo = function (args) {
        var page = args.object;
        page.bindingContext = this.model;
    };
    return HomePageView;
}());
exports.HomePageView = HomePageView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLnZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLXBhZ2Uudmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUUsc0JBQXFCLEtBQUs7UUFBTCxVQUFLLEdBQUwsS0FBSyxDQUFBO0lBQUcsQ0FBQztJQUV2QixxQ0FBYyxHQUFyQixVQUF1QixJQUFlO1FBQ3BDLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFjLENBQUE7UUFFdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ2xDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZVZpZXcge1xyXG5cclxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBtb2RlbCkge31cclxuXHJcbiAgcHVibGljIG9uTmF2aWdhdGluZ1RvIChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlXHJcblxyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHRoaXMubW9kZWxcclxuICB9XHJcbn1cclxuIl19