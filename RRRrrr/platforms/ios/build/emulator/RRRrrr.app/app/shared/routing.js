"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frameModule = require("ui/frame");
function startingPage() {
    return 'pages/home/home-page';
}
exports.startingPage = startingPage;
function goToReservationPage(context) {
    frameModule.topmost().navigate({
        context: context,
        moduleName: 'pages/reservation/reservation-page',
        transition: {
            name: 'slide'
        }
    });
}
exports.goToReservationPage = goToReservationPage;
function goToAddReservationPage(context) {
    frameModule.topmost().navigate({
        context: context,
        moduleName: 'pages/reservation/add-reservation-page',
        transition: {
            name: 'slideTop'
        }
    });
}
exports.goToAddReservationPage = goToAddReservationPage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUM7QUFFdkM7SUFDRSxPQUFPLHNCQUFzQixDQUFBO0FBQy9CLENBQUM7QUFGRCxvQ0FFQztBQUVELDZCQUFxQyxPQUFPO0lBQzFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDN0IsT0FBTyxTQUFBO1FBQ1AsVUFBVSxFQUFFLG9DQUFvQztRQUNoRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsT0FBTztTQUNkO0tBQUUsQ0FBQyxDQUFBO0FBQ1IsQ0FBQztBQVBELGtEQU9DO0FBRUQsZ0NBQXdDLE9BQU87SUFDN0MsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUM3QixPQUFPLFNBQUE7UUFDUCxVQUFVLEVBQUUsd0NBQXdDO1FBQ3BELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxVQUFVO1NBQ2pCO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVJELHdEQVFDO0FBRUQ7SUFDRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDaEMsQ0FBQztBQUZELHdCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSAndWkvZnJhbWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydGluZ1BhZ2UgKCkge1xuICByZXR1cm4gJ3BhZ2VzL2hvbWUvaG9tZS1wYWdlJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29Ub1Jlc2VydmF0aW9uUGFnZSAoY29udGV4dCkge1xuICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgIGNvbnRleHQsXG4gICAgbW9kdWxlTmFtZTogJ3BhZ2VzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLXBhZ2UnLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG5hbWU6ICdzbGlkZSdcbiAgICB9IH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb1RvQWRkUmVzZXJ2YXRpb25QYWdlIChjb250ZXh0KSB7XG4gIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgY29udGV4dCxcbiAgICBtb2R1bGVOYW1lOiAncGFnZXMvcmVzZXJ2YXRpb24vYWRkLXJlc2VydmF0aW9uLXBhZ2UnLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG5hbWU6ICdzbGlkZVRvcCdcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb0JhY2sgKCkge1xuICBmcmFtZU1vZHVsZS50b3Btb3N0KCkuZ29CYWNrKClcbn1cbiJdfQ==