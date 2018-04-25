"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReservationService = /** @class */ (function () {
    function ReservationService() {
        this.useMockData = true;
    }
    ReservationService.prototype.fetchReservation = function () {
        return this.useMockData ? this.fetchReservationViaJSON() : this.fetchReservationViaHTTP();
    };
    ReservationService.prototype.saveReservation = function (reservation) {
        return this.useMockData ? this.saveReservationViaJSON(reservation) : this.saveReservationViaHTTP(reservation);
    };
    ReservationService.prototype.saveReservationViaJSON = function (reservation) {
        return new Promise(function (resolve, reject) {
            var mockedReservations = require('~/mocks/reservation.json');
            mockedReservations.push(reservation);
            resolve(reservation);
        });
    };
    ReservationService.prototype.saveReservationViaHTTP = function (reservation) {
        return new Promise(function (resolve) {
            resolve(null);
        });
    };
    ReservationService.prototype.fetchReservationViaJSON = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.processReservations(require('~/mocks/reservation.json')));
        });
    };
    ReservationService.prototype.fetchReservationViaHTTP = function () {
        return new Promise(function (resolve) {
            resolve([]);
        });
    };
    ReservationService.prototype.processReservations = function (reservations) {
        return reservations.map(function (reservation) {
            reservation.dateStart = new Date(reservation.dateStart);
            reservation.dateEnd = new Date(reservation.dateEnd);
            return reservation;
        });
    };
    return ReservationService;
}());
exports.ReservationService = ReservationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO1FBRVMsZ0JBQVcsR0FBRyxJQUFJLENBQUE7SUE0QzNCLENBQUM7SUExQ1EsNkNBQWdCLEdBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUE7SUFDM0YsQ0FBQztJQUVNLDRDQUFlLEdBQXRCLFVBQXdCLFdBQXlCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0csQ0FBQztJQUVPLG1EQUFzQixHQUE5QixVQUFnQyxXQUF5QjtRQUN2RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtZQUM5RCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLG1EQUFzQixHQUE5QixVQUFnQyxXQUF5QjtRQUN2RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyxvREFBdUIsR0FBL0I7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLE9BQU8sQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLG9EQUF1QixHQUEvQjtRQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLGdEQUFtQixHQUEzQixVQUE2QixZQUE0QjtRQUN2RCxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxXQUF5QjtZQUNoRCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN2RCxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNuRCxPQUFPLFdBQVcsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFSCx5QkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc2VydmF0aW9uIH0gZnJvbSAnLi8uLi9zaGFyZWQvaW50ZXJmYWNlJ1xuXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25TZXJ2aWNlIHtcblxuICBwdWJsaWMgdXNlTW9ja0RhdGEgPSB0cnVlXG5cbiAgcHVibGljIGZldGNoUmVzZXJ2YXRpb24gKCk6IFByb21pc2U8SVJlc2VydmF0aW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VNb2NrRGF0YSA/IHRoaXMuZmV0Y2hSZXNlcnZhdGlvblZpYUpTT04oKSA6IHRoaXMuZmV0Y2hSZXNlcnZhdGlvblZpYUhUVFAoKVxuICB9XG5cbiAgcHVibGljIHNhdmVSZXNlcnZhdGlvbiAocmVzZXJ2YXRpb246IElSZXNlcnZhdGlvbik6IFByb21pc2U8SVJlc2VydmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlTW9ja0RhdGEgPyB0aGlzLnNhdmVSZXNlcnZhdGlvblZpYUpTT04ocmVzZXJ2YXRpb24pIDogdGhpcy5zYXZlUmVzZXJ2YXRpb25WaWFIVFRQKHJlc2VydmF0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlUmVzZXJ2YXRpb25WaWFKU09OIChyZXNlcnZhdGlvbjogSVJlc2VydmF0aW9uKTogUHJvbWlzZTxJUmVzZXJ2YXRpb24+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgbW9ja2VkUmVzZXJ2YXRpb25zID0gcmVxdWlyZSgnfi9tb2Nrcy9yZXNlcnZhdGlvbi5qc29uJylcbiAgICAgIG1vY2tlZFJlc2VydmF0aW9ucy5wdXNoKHJlc2VydmF0aW9uKVxuICAgICAgcmVzb2x2ZShyZXNlcnZhdGlvbilcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlUmVzZXJ2YXRpb25WaWFIVFRQIChyZXNlcnZhdGlvbjogSVJlc2VydmF0aW9uKTogUHJvbWlzZTxJUmVzZXJ2YXRpb24+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUobnVsbClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaFJlc2VydmF0aW9uVmlhSlNPTiAoKTogUHJvbWlzZTxJUmVzZXJ2YXRpb25bXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh0aGlzLnByb2Nlc3NSZXNlcnZhdGlvbnMocmVxdWlyZSgnfi9tb2Nrcy9yZXNlcnZhdGlvbi5qc29uJykpKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGZldGNoUmVzZXJ2YXRpb25WaWFIVFRQICgpOiBQcm9taXNlPElSZXNlcnZhdGlvbltdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKFtdKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NSZXNlcnZhdGlvbnMgKHJlc2VydmF0aW9uczogSVJlc2VydmF0aW9uW10pIHtcbiAgICByZXR1cm4gcmVzZXJ2YXRpb25zLm1hcCgocmVzZXJ2YXRpb246IElSZXNlcnZhdGlvbikgPT4ge1xuICAgICAgcmVzZXJ2YXRpb24uZGF0ZVN0YXJ0ID0gbmV3IERhdGUocmVzZXJ2YXRpb24uZGF0ZVN0YXJ0KVxuICAgICAgcmVzZXJ2YXRpb24uZGF0ZUVuZCA9IG5ldyBEYXRlKHJlc2VydmF0aW9uLmRhdGVFbmQpXG4gICAgICByZXR1cm4gcmVzZXJ2YXRpb25cbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==