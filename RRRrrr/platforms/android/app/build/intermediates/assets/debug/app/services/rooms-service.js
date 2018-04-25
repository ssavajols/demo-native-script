"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomService = /** @class */ (function () {
    function RoomService() {
        this.useMockData = true;
    }
    RoomService.prototype.fetchRooms = function () {
        return this.useMockData ? this.fetchRoomsViaJSON() : this.fetchRoomsViaHTTP();
    };
    RoomService.prototype.fetchRoomsViaJSON = function () {
        return new Promise(function (resolve) {
            resolve(require('~/mocks/rooms.json'));
        });
    };
    RoomService.prototype.fetchRoomsViaHTTP = function () {
        return new Promise(function (resolve) {
            resolve([]);
        });
    };
    return RoomService;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb21zLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO1FBRVMsZ0JBQVcsR0FBRyxJQUFJLENBQUE7SUFrQjNCLENBQUM7SUFoQlEsZ0NBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUMvRSxDQUFDO0lBRU8sdUNBQWlCLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU8sdUNBQWlCLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvb21JbmZvIH0gZnJvbSAnLi8uLi9zaGFyZWQvaW50ZXJmYWNlJ1xuXG5leHBvcnQgY2xhc3MgUm9vbVNlcnZpY2Uge1xuXG4gIHB1YmxpYyB1c2VNb2NrRGF0YSA9IHRydWVcblxuICBwdWJsaWMgZmV0Y2hSb29tcyAoKTogUHJvbWlzZTxJUm9vbUluZm9bXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZU1vY2tEYXRhID8gdGhpcy5mZXRjaFJvb21zVmlhSlNPTigpIDogdGhpcy5mZXRjaFJvb21zVmlhSFRUUCgpXG4gIH1cblxuICBwcml2YXRlIGZldGNoUm9vbXNWaWFKU09OICgpOiBQcm9taXNlPElSb29tSW5mb1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcXVpcmUoJ34vbW9ja3Mvcm9vbXMuanNvbicpKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGZldGNoUm9vbXNWaWFIVFRQICgpOiBQcm9taXNlPElSb29tSW5mb1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKFtdKVxuICAgIH0pXG4gIH1cblxufVxuIl19