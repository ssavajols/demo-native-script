"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var rooms_service_1 = require("./../../services/rooms-service");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.service = new rooms_service_1.RoomService();
        _this.init();
        return _this;
    }
    HomeViewModel.prototype.init = function () {
        var _this = this;
        this.service.fetchRooms()
            .then(function (rooms) { return _this.addRooms(rooms); });
    };
    HomeViewModel.prototype.addRooms = function (rooms, clear) {
        var _this = this;
        if (clear === void 0) { clear = true; }
        if (clear) {
            this.clear();
        }
        rooms.forEach(function (room) { return _this.addRoom(room); });
    };
    HomeViewModel.prototype.addRoom = function (room) {
        HomeViewModel._rooms = HomeViewModel._rooms.concat([
            room
        ]);
        this.notify({
            eventName: observable_1.Observable.propertyChangeEvent,
            object: this,
            propertyName: 'rooms',
            value: HomeViewModel._rooms
        });
    };
    HomeViewModel.prototype.clear = function () {
        HomeViewModel._rooms.length = 0;
    };
    Object.defineProperty(HomeViewModel.prototype, "rooms", {
        get: function () {
            return HomeViewModel._rooms;
        },
        enumerable: true,
        configurable: true
    });
    HomeViewModel._rooms = [];
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTRDO0FBQzVDLGdFQUE0RDtBQUc1RDtJQUFtQyxpQ0FBVTtJQU0zQztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQU5NLGFBQU8sR0FBRyxJQUFJLDJCQUFXLEVBQUUsQ0FBQTtRQUtoQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7O0lBQ2IsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFpQixLQUFrQixFQUFFLEtBQVk7UUFBakQsaUJBTUM7UUFOb0Msc0JBQUEsRUFBQSxZQUFZO1FBQy9DLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWdCLElBQWU7UUFFN0IsYUFBYSxDQUFDLE1BQU0sR0FDZixhQUFhLENBQUMsTUFBTTtZQUN2QixJQUFJO1VBQ0wsQ0FBQTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUM7WUFDVixTQUFTLEVBQUUsdUJBQVUsQ0FBQyxtQkFBbUI7WUFDekMsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsT0FBTztZQUNyQixLQUFLLEVBQUUsYUFBYSxDQUFDLE1BQU07U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDRSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELHNCQUFJLGdDQUFLO2FBQVQ7WUFDRSxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUE7UUFDN0IsQ0FBQzs7O09BQUE7SUE1Q2Msb0JBQU0sR0FBZ0IsRUFBRSxDQUFBO0lBOEN6QyxvQkFBQztDQUFBLEFBaERELENBQW1DLHVCQUFVLEdBZ0Q1QztBQWhEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnXHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9yb29tcy1zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBJUm9vbUluZm8gfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfcm9vbXM6IElSb29tSW5mb1tdID0gW11cclxuXHJcbiAgcHVibGljIHNlcnZpY2UgPSBuZXcgUm9vbVNlcnZpY2UoKVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgdGhpcy5pbml0KClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0ICgpIHtcclxuICAgIHRoaXMuc2VydmljZS5mZXRjaFJvb21zKClcclxuICAgICAgLnRoZW4oKHJvb21zKSA9PiB0aGlzLmFkZFJvb21zKHJvb21zKSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRSb29tcyAocm9vbXM6IElSb29tSW5mb1tdLCBjbGVhciA9IHRydWUpIHtcclxuICAgIGlmIChjbGVhcikge1xyXG4gICAgICB0aGlzLmNsZWFyKClcclxuICAgIH1cclxuXHJcbiAgICByb29tcy5mb3JFYWNoKChyb29tKSA9PiB0aGlzLmFkZFJvb20ocm9vbSkpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUm9vbSAocm9vbTogSVJvb21JbmZvKSB7XHJcblxyXG4gICAgSG9tZVZpZXdNb2RlbC5fcm9vbXMgPSBbXHJcbiAgICAgIC4uLkhvbWVWaWV3TW9kZWwuX3Jvb21zLFxyXG4gICAgICByb29tXHJcbiAgICBdXHJcblxyXG4gICAgdGhpcy5ub3RpZnkoe1xyXG4gICAgICBldmVudE5hbWU6IE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCxcclxuICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICBwcm9wZXJ0eU5hbWU6ICdyb29tcycsXHJcbiAgICAgIHZhbHVlOiBIb21lVmlld01vZGVsLl9yb29tc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhciAoKSB7XHJcbiAgICBIb21lVmlld01vZGVsLl9yb29tcy5sZW5ndGggPSAwXHJcbiAgfVxyXG5cclxuICBnZXQgcm9vbXMgKCkge1xyXG4gICAgcmV0dXJuIEhvbWVWaWV3TW9kZWwuX3Jvb21zXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=