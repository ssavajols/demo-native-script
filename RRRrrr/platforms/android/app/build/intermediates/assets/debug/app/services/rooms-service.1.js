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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMtc2VydmljZS4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMtc2VydmljZS4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBQTtRQUVTLGdCQUFXLEdBQUcsSUFBSSxDQUFBO0lBa0IzQixDQUFDO0lBaEJRLGdDQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDL0UsQ0FBQztJQUVPLHVDQUFpQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLHVDQUFpQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb29tSW5mbyB9IGZyb20gJy4vLi4vc2hhcmVkL2ludGVyZmFjZSdcblxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlIHtcblxuICBwdWJsaWMgdXNlTW9ja0RhdGEgPSB0cnVlXG5cbiAgcHVibGljIGZldGNoUm9vbXMgKCk6IFByb21pc2U8SVJvb21JbmZvW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VNb2NrRGF0YSA/IHRoaXMuZmV0Y2hSb29tc1ZpYUpTT04oKSA6IHRoaXMuZmV0Y2hSb29tc1ZpYUhUVFAoKVxuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaFJvb21zVmlhSlNPTiAoKTogUHJvbWlzZTxJUm9vbUluZm9bXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXF1aXJlKCd+L21vY2tzL3Jvb21zLmpzb24nKSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaFJvb21zVmlhSFRUUCAoKTogUHJvbWlzZTxJUm9vbUluZm9bXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZShbXSlcbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==