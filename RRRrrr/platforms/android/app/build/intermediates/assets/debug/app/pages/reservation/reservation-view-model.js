"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var reservation_service_1 = require("~/services/reservation-service");
var ReservationViewModel = /** @class */ (function (_super) {
    __extends(ReservationViewModel, _super);
    function ReservationViewModel(context) {
        var _this = _super.call(this) || this;
        _this._reservation = [];
        _this.service = new reservation_service_1.ReservationService();
        _this._room = context;
        _this.init();
        return _this;
    }
    ReservationViewModel.prototype.init = function () {
        var _this = this;
        this.service.fetchReservation()
            .then(function (reservations) { return _this.addReservations(reservations); });
    };
    ReservationViewModel.prototype.addReservations = function (reservations, clear) {
        var _this = this;
        if (clear === void 0) { clear = true; }
        if (clear) {
            this.clear();
        }
        reservations.forEach(function (reservation) {
            if (reservation.roomId === _this._room.id) {
                _this.addReservation(reservation);
            }
        });
    };
    ReservationViewModel.prototype.addReservation = function (reservation) {
        this._reservation = this._reservation.concat([
            reservation
        ]);
        this.notifyPropertyChange('reservations', this._reservation);
    };
    ReservationViewModel.prototype.clear = function () {
        this._reservation.length = 0;
        this.notifyPropertyChange('reservations', this._reservation);
    };
    ReservationViewModel.prototype.saveReservation = function (reservation) {
        return this.service.saveReservation(reservation);
    };
    Object.defineProperty(ReservationViewModel.prototype, "roomId", {
        get: function () {
            return this._room.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReservationViewModel.prototype, "roomName", {
        get: function () {
            return this._room.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReservationViewModel.prototype, "roomPlaces", {
        get: function () {
            return this._room.places;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReservationViewModel.prototype, "reservations", {
        get: function () {
            return this._reservation;
        },
        enumerable: true,
        configurable: true
    });
    return ReservationViewModel;
}(observable_1.Observable));
exports.ReservationViewModel = ReservationViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNEM7QUFDNUMsc0VBQW1FO0FBR25FO0lBQTBDLHdDQUFVO0lBT2xELDhCQUFhLE9BQU87UUFBcEIsWUFDRSxpQkFBTyxTQUtSO1FBWE8sa0JBQVksR0FBbUIsRUFBRSxDQUFBO1FBR2pDLGFBQU8sR0FBRyxJQUFJLHdDQUFrQixFQUFFLENBQUE7UUFLeEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7UUFFcEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFBOztJQUNiLENBQUM7SUFFTSxtQ0FBSSxHQUFYO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFO2FBQzVCLElBQUksQ0FBQyxVQUFDLFlBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRU0sOENBQWUsR0FBdEIsVUFBd0IsWUFBNEIsRUFBRSxLQUFZO1FBQWxFLGlCQVdDO1FBWHFELHNCQUFBLEVBQUEsWUFBWTtRQUVoRSxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNiO1FBRUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQXlCO1lBQzdDLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLDZDQUFjLEdBQXJCLFVBQXVCLFdBQXlCO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQ1osSUFBSSxDQUFDLFlBQVk7WUFDcEIsV0FBVztVQUNaLENBQUE7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRU0sb0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUU1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRU0sOENBQWUsR0FBdEIsVUFBd0IsV0FBeUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsc0JBQUksd0NBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7SUFDSCwyQkFBQztBQUFELENBQUMsQUFuRUQsQ0FBMEMsdUJBQVUsR0FtRW5EO0FBbkVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnXG5pbXBvcnQgeyBSZXNlcnZhdGlvblNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2VzL3Jlc2VydmF0aW9uLXNlcnZpY2UnXG5pbXBvcnQgeyBJUmVzZXJ2YXRpb24sIElSb29tSW5mbyB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZSdcblxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgcHJpdmF0ZSBfcmVzZXJ2YXRpb246IElSZXNlcnZhdGlvbltdID0gW11cbiAgcHJpdmF0ZSBfcm9vbTogSVJvb21JbmZvXG5cbiAgcHJpdmF0ZSBzZXJ2aWNlID0gbmV3IFJlc2VydmF0aW9uU2VydmljZSgpXG5cbiAgY29uc3RydWN0b3IgKGNvbnRleHQpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl9yb29tID0gY29udGV4dFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHB1YmxpYyBpbml0ICgpIHtcbiAgICB0aGlzLnNlcnZpY2UuZmV0Y2hSZXNlcnZhdGlvbigpXG4gICAgICAudGhlbigocmVzZXJ2YXRpb25zKSA9PiB0aGlzLmFkZFJlc2VydmF0aW9ucyhyZXNlcnZhdGlvbnMpKVxuICB9XG5cbiAgcHVibGljIGFkZFJlc2VydmF0aW9ucyAocmVzZXJ2YXRpb25zOiBJUmVzZXJ2YXRpb25bXSwgY2xlYXIgPSB0cnVlKSB7XG5cbiAgICBpZiAoY2xlYXIpIHtcbiAgICAgIHRoaXMuY2xlYXIoKVxuICAgIH1cblxuICAgIHJlc2VydmF0aW9ucy5mb3JFYWNoKChyZXNlcnZhdGlvbjogSVJlc2VydmF0aW9uKSA9PiB7XG4gICAgICBpZiAocmVzZXJ2YXRpb24ucm9vbUlkID09PSB0aGlzLl9yb29tLmlkKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRSZXNlcnZhdGlvbiAocmVzZXJ2YXRpb246IElSZXNlcnZhdGlvbikge1xuICAgIHRoaXMuX3Jlc2VydmF0aW9uID0gW1xuICAgICAgLi4udGhpcy5fcmVzZXJ2YXRpb24sXG4gICAgICByZXNlcnZhdGlvblxuICAgIF1cblxuICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3Jlc2VydmF0aW9ucycsIHRoaXMuX3Jlc2VydmF0aW9uKVxuICB9XG5cbiAgcHVibGljIGNsZWFyICgpIHtcbiAgICB0aGlzLl9yZXNlcnZhdGlvbi5sZW5ndGggPSAwXG5cbiAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyZXNlcnZhdGlvbnMnLCB0aGlzLl9yZXNlcnZhdGlvbilcbiAgfVxuXG4gIHB1YmxpYyBzYXZlUmVzZXJ2YXRpb24gKHJlc2VydmF0aW9uOiBJUmVzZXJ2YXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnNhdmVSZXNlcnZhdGlvbihyZXNlcnZhdGlvbilcbiAgfVxuXG4gIGdldCByb29tSWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9yb29tLmlkXG4gIH1cblxuICBnZXQgcm9vbU5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLl9yb29tLmxhYmVsXG4gIH1cblxuICBnZXQgcm9vbVBsYWNlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb20ucGxhY2VzXG4gIH1cblxuICBnZXQgcmVzZXJ2YXRpb25zICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXJ2YXRpb25cbiAgfVxufVxuIl19