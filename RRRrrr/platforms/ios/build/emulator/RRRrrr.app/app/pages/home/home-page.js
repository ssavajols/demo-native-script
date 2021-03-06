"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_1 = require("~/shared/routing");
var home_view_model_1 = require("./home-view-model");
function onNavigatingTo(args) {
    var page = args.object;
    var model = new home_view_model_1.HomeViewModel();
    page.bindingContext = model;
}
exports.onNavigatingTo = onNavigatingTo;
function onTap(args) {
    routing_1.goToReservationPage(args.view.bindingContext);
}
exports.onTap = onTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNENBQXNEO0FBQ3RELHFEQUFpRDtBQUVqRCx3QkFBZ0MsSUFBZTtJQUM3QyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBYyxDQUFBO0lBQ3RDLElBQU0sS0FBSyxHQUFHLElBQUksK0JBQWEsRUFBRSxDQUFBO0lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFBO0FBQzdCLENBQUM7QUFKRCx3Q0FJQztBQUVELGVBQXVCLElBQXNCO0lBQzNDLDZCQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDL0MsQ0FBQztBQUZELHNCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXMnXHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJ1xyXG5pbXBvcnQgeyBnb1RvUmVzZXJ2YXRpb25QYWdlIH0gZnJvbSAnfi9zaGFyZWQvcm91dGluZydcclxuaW1wb3J0IHsgSG9tZVZpZXdNb2RlbCB9IGZyb20gJy4vaG9tZS12aWV3LW1vZGVsJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvIChhcmdzOiBFdmVudERhdGEpIHtcclxuICBjb25zdCBwYWdlOiBQYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZVxyXG4gIGNvbnN0IG1vZGVsID0gbmV3IEhvbWVWaWV3TW9kZWwoKVxyXG4gIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBtb2RlbFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25UYXAgKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcclxuICBnb1RvUmVzZXJ2YXRpb25QYWdlKGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dClcclxufVxyXG4iXX0=