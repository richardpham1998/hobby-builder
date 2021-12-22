(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./auth_config.json":
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/*! exports provided: domain, clientId, audience, serverUrl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"domain\":\"dev-5pgt2zze.us.auth0.com\",\"clientId\":\"n2BxOkMvjfVR2gl4AdVn9IBZKG9MT9Mn\",\"audience\":\"https://express.sample\",\"serverUrl\":\"http://localhost:6060\"}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-comment/add-comment.component */ "./src/app/components/add-comment/add-comment.component.ts");
/* harmony import */ var _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-comment/edit-comment.component */ "./src/app/components/edit-comment/edit-comment.component.ts");
/* harmony import */ var _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-post/edit-post.component */ "./src/app/components/edit-post/edit-post.component.ts");
/* harmony import */ var _components_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-event/add-event.component */ "./src/app/components/add-event/add-event.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tag/tag.component */ "./src/app/components/tag/tag.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _components_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-event/edit-event.component */ "./src/app/components/edit-event/edit-event.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");





















const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'profile/:id',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'edit-profile/:id',
        component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'post/:id',
        component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'posts',
        component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'add-post',
        component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_7__["AddPostComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'edit-post/:id',
        component: _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_5__["EditPostComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'tag',
        component: _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__["TagComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'add-event',
        component: _components_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_6__["AddEventComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'events',
        component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_15__["EventsComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'event/:id',
        component: _components_event_event_component__WEBPACK_IMPORTED_MODULE_14__["EventComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'edit-event/:id',
        component: _components_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_16__["EditEventComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'add-comment/:num/:id',
        component: _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'edit-comment/:num/:id/:commentId',
        component: _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_4__["EditCommentComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'report/:num/:id/:commentId',
        component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_18__["ReportComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'notifications',
        component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsComponent"],
        canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return { "height": "100%", "background-color": "#C8DFFF", "overflow": "auto" }; };
const _c1 = function () { return { "margin-top": "-10em" }; };
const _c2 = function () { return { "margin-bottom": "-10em" }; };
class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'hobby-builder';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 6, consts: [[3, "ngStyle"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-button/login-button.component */ "./src/app/components/login-button/login-button.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/components/logout-button/logout-button.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-comment/add-comment.component */ "./src/app/components/add-comment/add-comment.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tag/tag.component */ "./src/app/components/tag/tag.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-event/add-event.component */ "./src/app/components/add-event/add-event.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-comment/edit-comment.component */ "./src/app/components/edit-comment/edit-comment.component.ts");
/* harmony import */ var _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-post/edit-post.component */ "./src/app/components/edit-post/edit-post.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/edit-event/edit-event.component */ "./src/app/components/edit-event/edit-event.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _components_tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");
/* harmony import */ var _components_tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/tags-list/tags-list.component */ "./src/app/components/tags-list/tags-list.component.ts");
/* harmony import */ var _components_post_display_post_display_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/post-display/post-display.component */ "./src/app/components/post-display/post-display.component.ts");
/* harmony import */ var _components_event_display_event_display_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/event-display/event-display.component */ "./src/app/components/event-display/event-display.component.ts");
/* harmony import */ var _components_comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/comment-display/comment-display.component */ "./src/app/components/comment-display/comment-display.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");





































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthModule"].forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].auth)),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_6__["LoginButtonComponent"],
        _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_7__["LogoutButtonComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"],
        _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_14__["AddPostComponent"],
        _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_15__["AddCommentComponent"],
        _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_16__["CommentComponent"],
        _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_17__["TagComponent"],
        _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_18__["PostsComponent"],
        _components_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_20__["AddEventComponent"],
        _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_22__["EditCommentComponent"],
        _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_23__["EditPostComponent"],
        _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__["EditProfileComponent"],
        _components_events_events_component__WEBPACK_IMPORTED_MODULE_25__["EventsComponent"],
        _components_event_event_component__WEBPACK_IMPORTED_MODULE_26__["EventComponent"],
        _components_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_27__["EditEventComponent"],
        _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__["NotificationsComponent"],
        _components_tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_29__["TagOptionsComponent"],
        _components_tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_30__["TagsListComponent"],
        _components_post_display_post_display_component__WEBPACK_IMPORTED_MODULE_31__["PostDisplayComponent"],
        _components_event_display_event_display_component__WEBPACK_IMPORTED_MODULE_32__["EventDisplayComponent"],
        _components_comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_33__["CommentDisplayComponent"],
        _components_report_report_component__WEBPACK_IMPORTED_MODULE_34__["ReportComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_6__["LoginButtonComponent"],
                    _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_7__["LogoutButtonComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"],
                    _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_14__["AddPostComponent"],
                    _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_15__["AddCommentComponent"],
                    _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_16__["CommentComponent"],
                    _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_17__["TagComponent"],
                    _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_18__["PostsComponent"],
                    _components_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_20__["AddEventComponent"],
                    _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_22__["EditCommentComponent"],
                    _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_23__["EditPostComponent"],
                    _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__["EditProfileComponent"],
                    _components_events_events_component__WEBPACK_IMPORTED_MODULE_25__["EventsComponent"],
                    _components_event_event_component__WEBPACK_IMPORTED_MODULE_26__["EventComponent"],
                    _components_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_27__["EditEventComponent"],
                    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__["NotificationsComponent"],
                    _components_tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_29__["TagOptionsComponent"],
                    _components_tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_30__["TagsListComponent"],
                    _components_post_display_post_display_component__WEBPACK_IMPORTED_MODULE_31__["PostDisplayComponent"],
                    _components_event_display_event_display_component__WEBPACK_IMPORTED_MODULE_32__["EventDisplayComponent"],
                    _components_comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_33__["CommentDisplayComponent"],
                    _components_report_report_component__WEBPACK_IMPORTED_MODULE_34__["ReportComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthModule"].forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].auth)),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-comment/add-comment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-comment/add-comment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function AddCommentComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCommentComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCommentComponent_div_0_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx_r4.idToCommentOn, "");
} }
function AddCommentComponent_div_0_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx_r5.idToCommentOn, "");
} }
function AddCommentComponent_div_0_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r6.idToCommentOn, "");
} }
function AddCommentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddCommentComponent_div_0_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddCommentComponent_div_0_div_10_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddCommentComponent_div_0_div_11_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddCommentComponent_div_0_a_12_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddCommentComponent_div_0_a_13_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddCommentComponent_div_0_a_14_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.commentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankContent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.added == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventOrPost == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventOrPost == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventOrPost == 2);
} }
class AddCommentComponent {
    constructor(commentService, auth, userService, route, postService, eventService, notificationService, fb) {
        this.commentService = commentService;
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.postService = postService;
        this.eventService = eventService;
        this.notificationService = notificationService;
        this.fb = fb;
        this.content = '';
        this.userId = null;
        this.email = null;
        this.event = null;
        this.post = null;
        this.profile = null;
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.added = false;
        this.blankContent = false;
    }
    ngOnInit() {
        this.eventOrPost = Number(this.route.snapshot.paramMap.get('num'));
        this.idToCommentOn = this.route.snapshot.paramMap.get('id');
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.commentForm = this.fb.group({
                content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                userId: this.userId,
            });
            this.userService.getUser(this.userId).subscribe((user) => {
                this.user = user;
            });
        });
    }
    onSubmit() {
        if (!this.commentForm.valid) {
            this.added = false;
            this.blankContent = true;
        }
        else {
            //indicator to link to comment
            var postId = null;
            var eventId = null;
            var profileId = null;
            //records details to store in notifications
            var link = null;
            var userToNotify = null;
            //0
            if (this.eventOrPost == 0) {
                postId = this.idToCommentOn;
                link = 'post';
                this.postService.getPost(this.idToCommentOn).subscribe((post) => {
                    userToNotify = post.user;
                    this.completeComment(link, userToNotify, profileId, postId, eventId);
                });
            }
            //1
            else if (this.eventOrPost == 1) {
                eventId = this.idToCommentOn;
                link = 'event';
                this.eventService.getEvent(this.idToCommentOn).subscribe((event) => {
                    userToNotify = event.user;
                    this.completeComment(link, userToNotify, profileId, postId, eventId);
                });
            }
            //2
            else if (this.eventOrPost == 2) {
                profileId = this.idToCommentOn;
                link = 'profile';
                this.userService.getUser(this.idToCommentOn).subscribe((user) => {
                    userToNotify = user._id;
                    this.completeComment(link, userToNotify, profileId, postId, eventId);
                });
            }
        }
    }
    //completes the process of adding comment
    completeComment(link, userToNotify, profileId, postId, eventId) {
        if (this.commentForm.value.content != null) {
            this.commentForm.value.content.trim;
        }
        var newNotification;
        if (this.user._id != userToNotify) {
            newNotification = {
                text: this.user.username + ' commented on your ' + link + '.',
                linkType: link,
                user: userToNotify,
                idToLink: this.idToCommentOn,
                date_created: new Date(),
                date_modified: null,
                newNotif: true,
            };
        }
        const newComment = {
            content: this.commentForm.value.content,
            user: this.commentForm.value.userId,
            author: this.user.username,
            likes: this.likes,
            email: this.profileObject.name,
            profile: profileId,
            post: postId,
            event: eventId,
            date_created: new Date(),
            date_modified: null,
        };
        this.commentService.addComment(newComment).subscribe((comment) => {
            //create notification
            if (this.user._id != userToNotify) {
                this.notificationService.addNotification(newNotification).subscribe();
            }
            ;
        });
        this.blankContent = false;
        this.added = true;
    }
}
AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) { return new (t || AddCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommentComponent, selectors: [["app-add-comment"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "card"], [1, "card-body"], [3, "formGroup", "submit"], [2, "color", "red"], ["type", "text", "formControlName", "content", "name", "content", "placeholder", "Add Comment here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["type", "submit", "value", "Add", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function AddCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddCommentComponent_div_0_Template, 16, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-comment',
                templateUrl: './add-comment.component.html',
                styleUrls: ['./add-comment.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] }, { type: _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/add-event/add-event.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-event/add-event.component.ts ***!
  \*************************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");










function AddEventComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEventComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEventComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEventComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEventComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddEventComponent_div_0_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddEventComponent_div_0_div_12_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddEventComponent_div_0_div_19_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddEventComponent_div_0_div_26_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Event Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddEventComponent_div_0_div_33_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-tag-options", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddEventComponent_div_0_div_36_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.eventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankTitle == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankDescription == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankLocation == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankDate == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r0.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.added == true);
} }
class AddEventComponent {
    constructor(eventService, auth, modalService, userService, fb) {
        this.eventService = eventService;
        this.auth = auth;
        this.modalService = modalService;
        this.userService = userService;
        this.fb = fb;
        this.events = [];
        this.tags = [];
        this.profileObject = null;
        this.added = false;
        this.blankTitle = false;
        this.blankDescription = false;
        this.blankLocation = false;
        this.blankDate = false;
    }
    ngOnInit() {
        this.eventService.getEvents().subscribe((events) => (this.events = events));
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userService
                .getUser(this.profileObject.sub.substring(6, this.profileObject.sub.length))
                .subscribe((profile) => {
                this.userName = profile.username;
            });
        });
        this.eventForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_event: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onSubmit() {
        if (!this.eventForm.valid) {
            if (this.eventForm.value.title === '') {
                this.blankTitle = true;
            }
            else {
                this.blankTitle = false;
            }
            if (this.eventForm.value.description === '') {
                this.blankDescription = true;
            }
            else {
                this.blankDescription = false;
            }
            if (this.eventForm.value.location === '') {
                this.blankLocation = true;
            }
            else {
                this.blankLocation = false;
            }
            if (this.eventForm.value.date_event === '') {
                this.blankDate = true;
            }
            else {
                this.blankDate = false;
            }
        }
        else {
            this.blankTitle = false;
            this.blankDescription = false;
            this.blankLocation = false;
            this.blankDate = false;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            const newEvent = {
                title: this.eventForm.value.title,
                likes: { '-1': [], '0': [], '1': [] },
                user: this.userId,
                tags: this.tags,
                author: this.userName,
                description: this.eventForm.value.description,
                location: this.eventForm.value.location,
                comments: [],
                attendees: { '-1': [], '0': [], '1': [] },
                hosts: [],
                date_event: this.eventForm.value.date_event,
                date_created: new Date(),
                date_modified: null,
                image: this.image,
            };
            this.eventService.addEvent(newEvent).subscribe((event) => {
                this.added = true;
            });
        }
    }
}
AddEventComponent.ɵfac = function AddEventComponent_Factory(t) { return new (t || AddEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEventComponent, selectors: [["app-add-event"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "card"], [1, "card-body", 3, "formGroup", "ngSubmit"], [1, "card-title"], [2, "color", "red"], ["type", "text", "formControlName", "title", "name", "title", "placeholder", "Add Title here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["type", "text", "formControlName", "description", "name", "description", "placeholder", "Add Description here", 1, "card-text", 2, "width", "100%"], ["type", "text", "formControlName", "location", "name", "location", "placeholder", "Add Location here", 1, "card-text", 2, "width", "100%"], ["type", "datetime-local", "formControlName", "date_event", "name", "date_event"], [3, "tags"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["type", "submit", "value", "Add", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"]], template: function AddEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddEventComponent_div_0_Template, 38, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__["TagOptionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-event',
                templateUrl: './add-event.component.html',
                styleUrls: ['./add-event.component.css'],
            }]
    }], function () { return [{ type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");










function AddPostComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPostComponent_div_0_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddPostComponent_div_0_div_12_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddPostComponent_div_0_div_19_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-tag-options", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddPostComponent_div_0_div_22_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.postForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankTitle == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankDescription == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r0.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.added == true);
} }
class AddPostComponent {
    constructor(postService, auth, modalService, userService, fb) {
        this.postService = postService;
        this.auth = auth;
        this.modalService = modalService;
        this.userService = userService;
        this.fb = fb;
        this.posts = [];
        this.title = null;
        this.userId = null;
        this.author = null;
        this.tags = [];
        this.description = '';
        this.post_comments = [];
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.added = false;
        this.blankTitle = false;
        this.blankDescription = false;
    }
    ngOnInit() {
        this.postService.getPosts().subscribe((posts) => (this.posts = posts));
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userService
                .getUser(this.profileObject.sub.substring(6, this.profileObject.sub.length))
                .subscribe((profile) => {
                this.userName = profile.username;
            });
        });
        this.postForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onSubmit() {
        if (!this.postForm.valid) {
            this.added = false;
            if (this.postForm.value.title === '') {
                this.blankTitle = true;
            }
            else {
                this.blankTitle = false;
            }
            if (this.postForm.value.description === '') {
                this.blankDescription = true;
            }
            else {
                this.blankDescription = false;
            }
        }
        else {
            this.blankTitle = false;
            this.blankDescription = false;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            const newPost = {
                title: this.postForm.value.title,
                likes: { '-1': [], '0': [], '1': [] },
                description: this.postForm.value.description,
                user: this.userId,
                author: this.userName,
                post_comments: [],
                tags: this.tags,
                date_created: new Date(),
                date_modified: null,
            };
            this.postService.addPost(newPost).subscribe((post) => {
                this.posts.push(post);
                this.added = true;
            });
            this.postService.getPosts().subscribe((posts) => (this.posts = posts));
        }
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "card"], [1, "card-body", 3, "formGroup", "ngSubmit"], [1, "card-title"], [2, "color", "red"], ["type", "text", "formControlName", "title", "name", "title", "placeholder", "Add Title here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["type", "text", "formControlName", "description", "name", "description", "placeholder", "Add Description here", 1, "card-text", 2, "width", "100%"], [3, "tags"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["type", "submit", "value", "Add", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddPostComponent_div_0_Template, 24, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__["TagOptionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-post',
                templateUrl: './add-post.component.html',
                styleUrls: ['./add-post.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/comment-display/comment-display.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/comment-display/comment-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommentDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDisplayComponent", function() { return CommentDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a1) { return ["/post", a1]; };
function CommentDisplayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.comment.post));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.comment.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx_r0.comment.date_created, "MM/dd/yyyy 'at' h:mma"), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r0.comment.user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.comment.author);
} }
const _c1 = function (a1) { return ["/event", a1]; };
function CommentDisplayComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r1.comment.event));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.comment.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx_r1.comment.date_created, "MM/dd/yyyy 'at' h:mma"), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r1.comment.user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.comment.author);
} }
const _c2 = function (a1) { return ["/profile", a1]; };
function CommentDisplayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PROFILE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r2.comment.profile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.comment.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r2.comment.date_created, "MM/dd/yyyy 'at' h:mma"), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r2.comment.user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.comment.author);
} }
class CommentDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommentDisplayComponent.ɵfac = function CommentDisplayComponent_Factory(t) { return new (t || CommentDisplayComponent)(); };
CommentDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentDisplayComponent, selectors: [["app-comment-display"]], inputs: { comment: "comment" }, decls: 5, vars: 3, consts: [[1, "card"], [1, "btn"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "card-body"]], template: function CommentDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentDisplayComponent_div_2_Template, 10, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentDisplayComponent_div_3_Template, 10, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentDisplayComponent_div_4_Template, 11, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment.post != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment.event != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment.profile != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC1kaXNwbGF5L2NvbW1lbnQtZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment-display',
                templateUrl: './comment-display.component.html',
                styleUrls: ['./comment-display.component.css']
            }]
    }], function () { return []; }, { comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










function CommentComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_ng_template_1_Template_button_click_3_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to delete this comment?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_ng_template_1_Template_button_click_10_listener() { const modal_r9 = ctx.$implicit; return modal_r9.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_ng_template_1_Template_button_click_12_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_0_a_5_a_3_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_a_5_a_3_a_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.openComment(_r2, ctx_r16.comment._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_0_a_5_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_div_0_a_5_a_3_a_1_Template, 3, 0, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.sub.substring(6, user_r1.sub.length) === ctx_r13.comment.user || ctx_r13.visitor.isAdmin == true);
} }
function CommentComponent_div_0_a_5_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "/edit-comment/", ctx_r14.type, "/", ctx_r14.typeId, "/", ctx_r14.comment._id, "");
} }
function CommentComponent_div_0_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentComponent_div_0_a_5_a_3_Template, 2, 1, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentComponent_div_0_a_5_a_4_Template, 3, 3, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "/report/", ctx_r4.type, "/", ctx_r4.typeId, "/", ctx_r4.comment._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.visitor != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.sub.substring(6, user_r1.sub.length) === ctx_r4.comment.user);
} }
function CommentComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.likeComment(ctx_r20.comment._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.likeComment(ctx_r22.comment._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.dislikeComment(ctx_r24.comment._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.dislikeComment(ctx_r26.comment._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_div_0_ng_template_1_Template, 14, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommentComponent_div_0_a_5_Template, 5, 5, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CommentComponent_div_0_button_7_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommentComponent_div_0_button_8_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentComponent_div_0_button_12_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CommentComponent_div_0_button_13_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profileObject != null && ctx_r0.userId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.comment.likes["1"].includes(ctx_r0.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comment.likes["1"].includes(ctx_r0.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.comment.likes["1"].length - ctx_r0.comment.likes["-1"].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.comment.likes["-1"].includes(ctx_r0.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comment.likes["-1"].includes(ctx_r0.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.comment.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 10, ctx_r0.comment.date_created, "MM/dd/yyyy 'at' h:mma"), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r0.comment.user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.comment.author);
} }
class CommentComponent {
    constructor(commentService, modalService, notificationService, auth, userService) {
        this.commentService = commentService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        this.auth = auth;
        this.userService = userService;
        //refresh screen if comment is modified in any way
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //profile / user components
        this.profileObject = null;
        this.userId = null;
        this.userName = null;
        //modal components
        this.closeResult = '';
        this.postToDelete = null;
        this.commentToDelete = null;
    }
    ngOnInit() {
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.profileObject.sub.substring(6, this.profileObject.sub.length))
                .subscribe((profile) => {
                this.userName = profile.username;
                this.visitor = profile;
            });
        });
    }
    //Comment functionalities
    //refresh comment
    refreshComments() {
        this.refresh.emit(this.commentList);
    }
    //removes comment
    deleteComment(id) {
        this.commentService.getComment(id).subscribe(commentToRemove => {
            this.commentService.deleteComment(id).subscribe((data) => {
                for (var i = 0; i < this.commentList.length; i++) {
                    if (this.commentList[i]._id == id) {
                        this.commentList.splice(i, 1);
                    }
                }
                this.refreshComments();
                var userToNotify = this.owner; //id of owner of post, event or profile
                var idToCommentOn = this.typeId; //id of post, event, or profile
                if (this.visitor.isAdmin &&
                    this.visitor._id != commentToRemove.user) {
                    // post, event, or profile
                    var link;
                    if (this.type === '0') {
                        link = 'post';
                    }
                    else if (this.type === '1') {
                        link = 'event';
                    }
                    else if (this.type === '2') {
                        link = 'profile';
                    }
                    const newNotification = {
                        text: 'Admin ' +
                            this.visitor.username +
                            ' deleted your comment: '
                            + "'" + commentToRemove.content + "'",
                        linkType: link,
                        user: commentToRemove.user,
                        idToLink: idToCommentOn,
                        date_created: new Date(),
                        date_modified: null,
                        newNotif: true,
                    };
                    this.notificationService.addNotification(newNotification).subscribe();
                }
            });
        });
    }
    //comment likes code
    likeComment(id) {
        this.commentService.getComment(id).subscribe((comment) => {
            this.commentToLike = comment;
            this.commentMap = this.commentToLike.likes;
            //like comment
            if (!this.commentMap['1'].includes(this.userId)) {
                this.commentMap['1'].push(this.userId);
                if (this.commentToLike.user !== this.visitor._id) {
                    // post, event, or profile
                    var link;
                    if (this.type === '0') {
                        link = 'post';
                    }
                    else if (this.type === '1') {
                        link = 'event';
                    }
                    else if (this.type === '2') {
                        link = 'profile';
                    }
                    var userToNotify = this.owner; //id of owner of post, event or profile
                    var idToCommentOn = this.typeId; //id of post, event, or profile
                    const newNotification = {
                        text: this.visitor.username +
                            ' liked your comment: ' +
                            this.commentToLike.content,
                        linkType: link,
                        user: this.commentToLike.user,
                        idToLink: idToCommentOn,
                        date_created: new Date(),
                        date_modified: null,
                        newNotif: true,
                    };
                    this.notificationService.addNotification(newNotification).subscribe();
                }
            }
            //unlike comment
            else {
                for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
                    if (this.commentMap['1'][i] === this.userId) {
                        this.commentMap['1'].splice(i, 1);
                    }
                }
            }
            //remove user from dislike section if user had disliked it
            for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
                if (this.commentMap['-1'][i] === this.userId) {
                    this.commentMap['-1'].splice(i, 1);
                }
            }
            this.commentToLike.likes = this.commentMap;
            this.commentService
                .patchComment(id, this.commentToLike)
                .subscribe((comment) => {
                this.commentToLike = null;
                this.commentService.getComments().subscribe((comments) => {
                    this.comments = comments;
                    this.commentList = [];
                    for (let i = comments.length - 1; i >= 0; i--) {
                        if (this.type === '0') {
                            if (comments[i].post === this.typeId) {
                                this.commentList.push(comments[i]);
                            }
                        }
                        if (this.type === '1') {
                            if (comments[i].event === this.typeId) {
                                this.commentList.push(comments[i]);
                            }
                        }
                        if (this.type === '2') {
                            if (comments[i].profile === this.typeId) {
                                this.commentList.push(comments[i]);
                            }
                        }
                    }
                });
            });
            this.refreshComments();
        });
    }
    dislikeComment(id) {
        this.commentService.getComment(id).subscribe((comment) => {
            this.commentToLike = comment;
            this.commentMap = this.commentToLike.likes;
            //dislike comment
            if (!this.commentMap['-1'].includes(this.userId)) {
                this.commentMap['-1'].push(this.userId);
            }
            //un-dislike comment
            else {
                for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
                    if (this.commentMap['-1'][i] === this.userId) {
                        this.commentMap['-1'].splice(i, 1);
                    }
                }
            }
            //remove user from like section if user had liked it
            for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
                if (this.commentMap['1'][i] === this.userId) {
                    this.commentMap['1'].splice(i, 1);
                }
            }
            this.commentToLike.likes = this.commentMap;
            this.commentService
                .patchComment(id, this.commentToLike)
                .subscribe((comment) => {
                this.commentToLike = null;
                this.commentToLike = null;
                this.commentService.getComments().subscribe((comments) => {
                    this.comments = comments;
                    this.commentList = [];
                    for (let i = comments.length - 1; i >= 0; i--) {
                        if (this.type === '0') {
                            if (comments[i].post === this.typeId) {
                                this.commentList.push(comments[i]);
                            }
                        }
                        if (this.type === '1') {
                            if (comments[i].event === this.typeId) {
                                this.commentList.push(comments[i]);
                            }
                        }
                        if (this.type === '2') {
                            if (comments[i].profile === this.typeId) {
                                this.commentList.push(comments[i]);
                            }
                        }
                    }
                });
            });
            this.refreshComments();
        });
    }
    //modal code
    openComment(content, id) {
        this.commentToDelete = id;
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-comment' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            if (this.commentToDelete != null) {
                this.deleteComment(this.commentToDelete);
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        this.postToDelete = null;
        this.commentToDelete = null;
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { commentList: "commentList", comments: "comments", comment: "comment", owner: "owner", type: "type", typeId: "typeId" }, outputs: { refresh: "refresh" }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["commentContent", ""], ["type", "button", "class", "btn btn-link btn-sm float-left", 3, "click", 4, "ngIf"], [1, "float-left", 2, "color", "black"], [3, "routerLink"], [1, "modal-header"], ["id", "modal-comment", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", "value", "Report", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/flag.svg", "alt", "Report", "width", "100%", "height", "100%"], ["type", "button", "value", "Delete", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "click"], ["src", "/assets/img/trash.svg", "alt", "Delete", "width", "100%", "height", "100%"], ["type", "button", "value", "Edit", 1, "btn", "btn-primary", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/pencil-square.svg", "alt", "Edit", "width", "100%", "height", "100%"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "float-left", 3, "click"], ["src", "/assets/img/thumbs_up.svg", "alt", "Like", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_up_fill.svg", "alt", "Like", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_down.svg", "alt", "Dislike", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_down_fill.svg", "alt", "Dislike", "width", "100%", "height", "100%"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentComponent_div_0_Template, 22, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, { commentList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], owner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], typeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['refresh']
        }] }); })();


/***/ }),

/***/ "./src/app/components/edit-comment/edit-comment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-comment/edit-comment.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentComponent", function() { return EditCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function EditCommentComponent_div_0_div_1_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCommentComponent_div_0_div_1_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Changed successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCommentComponent_div_0_div_1_div_1_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx_r7.idToCommentOn, "");
} }
function EditCommentComponent_div_0_div_1_div_1_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx_r8.idToCommentOn, "");
} }
function EditCommentComponent_div_0_div_1_div_1_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r9.idToCommentOn, "");
} }
function EditCommentComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditCommentComponent_div_0_div_1_div_1_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditCommentComponent_div_0_div_1_div_1_div_10_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditCommentComponent_div_0_div_1_div_1_div_11_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditCommentComponent_div_0_div_1_div_1_a_12_Template, 2, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditCommentComponent_div_0_div_1_div_1_a_13_Template, 2, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditCommentComponent_div_0_div_1_div_1_a_14_Template, 2, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.commentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blankContent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.edited == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eventOrPost == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eventOrPost == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eventOrPost == 2);
} }
function EditCommentComponent_div_0_div_1_div_2_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx_r12.idToCommentOn, "");
} }
function EditCommentComponent_div_0_div_1_div_2_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx_r13.idToCommentOn, "");
} }
function EditCommentComponent_div_0_div_1_div_2_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r14.idToCommentOn, "");
} }
function EditCommentComponent_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User is not authorized to modify this comment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditCommentComponent_div_0_div_1_div_2_a_4_Template, 2, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditCommentComponent_div_0_div_1_div_2_a_5_Template, 2, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditCommentComponent_div_0_div_1_div_2_a_6_Template, 2, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eventOrPost == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eventOrPost == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eventOrPost == 2);
} }
function EditCommentComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCommentComponent_div_0_div_1_div_1_Template, 16, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditCommentComponent_div_0_div_1_div_2_Template, 7, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userObject._id === ctx_r2.comment.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userObject._id !== ctx_r2.comment.user);
} }
function EditCommentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCommentComponent_div_0_div_1_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && ctx_r0.comment != null);
} }
class EditCommentComponent {
    constructor(commentService, auth, userService, route, fb) {
        this.commentService = commentService;
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.content = '';
        this.userId = null;
        this.email = null;
        this.event = null;
        this.post = null;
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.edited = false;
        this.blankContent = false;
    }
    ngOnInit() {
        this.eventOrPost = Number(this.route.snapshot.paramMap.get('num'));
        //id of post/event to comment on
        this.idToCommentOn = this.route.snapshot.paramMap.get('id');
        //actual comment id
        this.commentId = this.route.snapshot.paramMap.get('commentId');
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.userId)
                .subscribe((user) => (this.userObject = user));
        });
        this.commentService.getComment(this.commentId).subscribe((comment) => {
            this.commentForm = this.fb.group({
                content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
            this.comment = comment;
            this.commentForm.setValue({ content: comment.content });
        });
    }
    onSubmit() {
        if (!this.commentForm.valid) {
            if (this.commentForm.value.content === '') {
                this.blankContent = true;
            }
            else {
                this.blankContent = false;
            }
        }
        else {
            this.blankContent = false;
            this.comment.content = this.commentForm.value.content;
            this.commentService
                .patchComment(this.commentId, this.comment)
                .subscribe();
            this.edited = true;
        }
    }
}
EditCommentComponent.ɵfac = function EditCommentComponent_Factory(t) { return new (t || EditCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCommentComponent, selectors: [["app-edit-comment"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "card"], [1, "card-body"], [3, "formGroup", "submit"], [2, "color", "red"], ["type", "text", "formControlName", "content", "name", "content", "placeholder", "Edit Comment here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["type", "submit", "value", "Update", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function EditCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditCommentComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jb21tZW50L2VkaXQtY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-comment',
                templateUrl: './edit-comment.component.html',
                styleUrls: ['./edit-comment.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-event/edit-event.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-event/edit-event.component.ts ***!
  \***************************************************************/
/*! exports provided: EditEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventComponent", function() { return EditEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");










function EditEventComponent_div_0_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEventComponent_div_0_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEventComponent_div_0_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEventComponent_div_0_div_2_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEventComponent_div_0_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tag-options", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r9.tags);
} }
function EditEventComponent_div_0_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Changed successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEventComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditEventComponent_div_0_div_2_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditEventComponent_div_0_div_2_div_11_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditEventComponent_div_0_div_2_div_18_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditEventComponent_div_0_div_2_div_25_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Event Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditEventComponent_div_0_div_2_div_32_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditEventComponent_div_0_div_2_div_33_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EditEventComponent_div_0_div_2_div_34_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.eventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blankTitle == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blankDescription == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blankLocation == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blankDate == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.event != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edited == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx_r2.event._id, "");
} }
function EditEventComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User is not authorized to modify this event.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx_r3.event._id, "");
} }
function EditEventComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event does not exist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditEventComponent_div_0_div_2_Template, 38, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditEventComponent_div_0_div_3_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditEventComponent_div_0_div_4_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && ctx_r0.event != null && ctx_r0.userObject._id === ctx_r0.event.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && ctx_r0.event != null && ctx_r0.userObject._id !== ctx_r0.event.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject == null || ctx_r0.event == null);
} }
class EditEventComponent {
    constructor(eventService, auth, userService, route, fb) {
        this.eventService = eventService;
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.title = null;
        this.userId = null;
        this.author = null;
        this.description = '';
        this.location = '';
        this.date_event = null;
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.edited = false;
        this.blankTitle = false;
        this.blankDescription = false;
        this.blankLocation = false;
        this.blankDate = false;
        //input array
        this.tags = [];
    }
    ngOnInit() {
        //actual event id
        this.id = this.route.snapshot.paramMap.get('id');
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.userId)
                .subscribe((user) => (this.userObject = user));
            this.eventService.getEvent(this.id).subscribe((event) => {
                if (event != null) {
                    this.event = event;
                    this.eventForm = this.fb.group({
                        title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        date_event: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    });
                    var tempDate = new Date(event.date_event);
                    tempDate.setTime(tempDate.getTime() + -60000 * tempDate.getTimezoneOffset());
                    this.eventForm.setValue({ title: event.title, description: event.description, location: event.location, date_event: tempDate.toISOString().slice(0, 16) });
                    this.tags = this.event.tags;
                }
            });
        });
    }
    onSubmit() {
        if (!this.eventForm.valid) {
            if (this.eventForm.value.title === '') {
                this.blankTitle = true;
            }
            else {
                this.blankTitle = false;
            }
            if (this.eventForm.value.description === '') {
                this.blankDescription = true;
            }
            else {
                this.blankDescription = false;
            }
            if (this.eventForm.value.location === '') {
                this.blankLocation = true;
            }
            else {
                this.blankLocation = false;
            }
            if (this.eventForm.value.date_event === '') {
                this.blankDate = true;
            }
            else {
                this.blankDate = false;
            }
        }
        else {
            this.blankTitle = false;
            this.blankDescription = false;
            this.blankLocation = false;
            this.blankDate = false;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.event.title = this.eventForm.value.title;
            this.event.description = this.eventForm.value.description;
            this.event.location = this.eventForm.value.location;
            this.event.date_event = this.eventForm.value.date_event;
            this.eventService.patchEvent(this.id, this.event).subscribe((event) => {
                this.edited = true;
            });
        }
    }
}
EditEventComponent.ɵfac = function EditEventComponent_Factory(t) { return new (t || EditEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditEventComponent, selectors: [["app-edit-event"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "card"], [1, "card-body", 3, "formGroup", "submit"], [1, "card-title"], [2, "color", "red"], ["type", "text", "formControlName", "title", "name", "title", "placeholder", "Add Title here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["type", "text", "formControlName", "description", "name", "description", "placeholder", "Add Description here", 1, "card-text", 2, "width", "100%"], ["type", "text", "formControlName", "location", "name", "location", "placeholder", "Add Location here", 1, "card-text", 2, "width", "100%"], ["type", "datetime-local", "formControlName", "date_event", "name", "date_event"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["type", "submit", "value", "Update", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], [3, "tags"], ["role", "alert", 1, "alert", "alert-success"], [1, "card-body"]], template: function EditEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditEventComponent_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__["TagOptionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1ldmVudC9lZGl0LWV2ZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-event',
                templateUrl: './edit-event.component.html',
                styleUrls: ['./edit-event.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-post/edit-post.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-post/edit-post.component.ts ***!
  \*************************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");










function EditPostComponent_div_0_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_0_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_0_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tag-options", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r7.tags);
} }
function EditPostComponent_div_0_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Changed successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPostComponent_div_0_div_2_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditPostComponent_div_0_div_2_div_11_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditPostComponent_div_0_div_2_div_18_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditPostComponent_div_0_div_2_div_19_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditPostComponent_div_0_div_2_div_20_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.postForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blankTitle == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blankDescription == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.post != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edited == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx_r2.post._id, "");
} }
function EditPostComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User is not authorized to modify this post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx_r3.post._id, "");
} }
function EditPostComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Post does not exist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPostComponent_div_0_div_2_Template, 24, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditPostComponent_div_0_div_3_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditPostComponent_div_0_div_4_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && ctx_r0.post != null && ctx_r0.userObject._id === ctx_r0.post.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && ctx_r0.post != null && ctx_r0.userObject._id !== ctx_r0.post.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject == null || ctx_r0.post == null);
} }
class EditPostComponent {
    constructor(postService, auth, userService, route, fb) {
        this.postService = postService;
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.title = null;
        this.userId = null;
        this.author = null;
        this.description = '';
        this.post_comments = [];
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.edited = false;
        //input array
        this.tags = [];
        this.blankTitle = false;
        this.blankDescription = false;
    }
    ngOnInit() {
        //actual post id
        this.id = this.route.snapshot.paramMap.get('id');
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.userId)
                .subscribe((user) => (this.userObject = user));
            this.postService.getPost(this.id).subscribe((post) => {
                if (post != null) {
                    this.post = post;
                    this.postForm = this.fb.group({
                        title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    });
                    this.postForm.setValue({
                        title: post.title,
                        description: post.description,
                    });
                    this.tags = post.tags;
                }
            });
        });
    }
    onSubmit() {
        if (!this.postForm.valid) {
            if (this.postForm.value.title === '') {
                this.blankTitle = true;
            }
            else {
                this.blankTitle = false;
            }
            if (this.postForm.value.description === '') {
                this.blankDescription = true;
            }
            else {
                this.blankDescription = false;
            }
        }
        else {
            this.blankTitle = false;
            this.blankDescription = false;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.post.title = this.postForm.value.title;
            this.post.description = this.postForm.value.description;
            this.postService.patchPost(this.id, this.post).subscribe((post) => {
                this.edited = true;
            });
        }
    }
}
EditPostComponent.ɵfac = function EditPostComponent_Factory(t) { return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPostComponent, selectors: [["app-edit-post"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "card"], [1, "card-body", 3, "formGroup", "ngSubmit"], [1, "card-title"], [2, "color", "red"], ["type", "text", "formControlName", "title", "name", "title", "placeholder", "Add Title here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["type", "text", "formControlName", "description", "name", "description", "placeholder", "Add Description here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["type", "submit", "value", "Update", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], [3, "tags"], ["role", "alert", 1, "alert", "alert-success"], [1, "card-body"]], template: function EditPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPostComponent_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_7__["TagOptionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wb3N0L2VkaXQtcG9zdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-post',
                templateUrl: './edit-post.component.html',
                styleUrls: ['./edit-post.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");








function EditProfileComponent_div_0_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tag-options", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r5.tags);
} }
function EditProfileComponent_div_0_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Changed successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditProfileComponent_div_0_div_2_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Province/State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditProfileComponent_div_0_div_2_div_21_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditProfileComponent_div_0_div_2_div_22_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userObject != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edited == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r2.id, "");
} }
function EditProfileComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User is not authorized to modify this profile.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r3.id, "");
} }
function EditProfileComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile does not exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditProfileComponent_div_0_div_2_Template, 26, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditProfileComponent_div_0_div_3_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditProfileComponent_div_0_div_4_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visitorObject != null && ctx_r0.userObject != null && ctx_r0.visitorObject._id === ctx_r0.userObject._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visitorObject != null && ctx_r0.userObject != null && ctx_r0.visitorObject._id !== ctx_r0.userObject._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visitorObject == null || ctx_r0.userObject == null);
} }
class EditProfileComponent {
    constructor(auth, userService, route, fb) {
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.visitorObject = null;
        this.userObject = null;
        this.userId = null;
        this.biography = null;
        this.city = null;
        this.province = null;
        this.country = '';
        this.profileObject = null;
        this.edited = false;
        //input array
        this.tags = [];
    }
    ngOnInit() {
        //actual post id
        this.id = this.route.snapshot.paramMap.get('id');
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.userId)
                .subscribe((user) => (this.visitorObject = user));
            this.userService.getUser(this.id).subscribe((user) => {
                if (user != null && user['name'] !== "CastError") {
                    this.profileForm = this.fb.group({
                        biography: [''],
                        city: [''],
                        province: [''],
                        country: [''],
                    });
                    this.userObject = user;
                    this.profileForm.setValue({ biography: user.biography, city: user.city, province: user.province, country: user.country });
                    this.tags = user.hobbies;
                }
            });
        });
    }
    onSubmit() {
        this.userObject.biography = this.profileForm.value.biography;
        this.userObject.city = this.profileForm.value.city;
        this.userObject.province = this.profileForm.value.province;
        this.userObject.country = this.profileForm.value.country;
        this.userObject.hobbies = this.tags;
        this.userService.patchUser(this.id, this.userObject).subscribe((user) => {
            this.edited = true;
        });
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "card"], [1, "card-body", 3, "formGroup", "submit"], [1, "card-title"], ["type", "text", "formControlName", "biography", "name", "biography", "placeholder", "Add Biography here", 1, "card-text", 2, "width", "100%"], ["type", "text", "formControlName", "city", "name", "city", "placeholder", "Add City here", 1, "card-text", 2, "width", "100%"], ["type", "text", "formControlName", "province", "name", "province", "placeholder", "Add Province here", 1, "card-text", 2, "width", "100%"], ["type", "text", "formControlName", "country", "name", "country", "placeholder", "Add Country here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["type", "submit", "value", "Update", 1, "btn", "btn-primary", "btn-sm"], [3, "tags"], ["role", "alert", 1, "alert", "alert-success"], [1, "card-body"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditProfileComponent_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_6__["TagOptionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-profile',
                templateUrl: './edit-profile.component.html',
                styleUrls: ['./edit-profile.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/event-display/event-display.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/event-display/event-display.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDisplayComponent", function() { return EventDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function EventDisplayComponent_div_9_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r1.numDays / 86400000).toFixed(0), " days left");
} }
function EventDisplayComponent_div_9_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event has occurred");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventDisplayComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventDisplayComponent_div_9_a_1_Template, 3, 1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventDisplayComponent_div_9_a_2_Template, 3, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numDays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numDays <= 0);
} }
class EventDisplayComponent {
    constructor() {
        this.numDays = 0;
    }
    ngOnInit() {
        if (this.trackDays == true) {
            this.calculateDaysLeft();
        }
    }
    calculateDaysLeft() {
        var tempDate = new Date(this.event.date_event);
        tempDate.setTime(tempDate.getTime() + -60000 * tempDate.getTimezoneOffset());
        var aTime = tempDate.getTime();
        this.numDays = aTime - (new Date()).getTime();
    }
}
EventDisplayComponent.ɵfac = function EventDisplayComponent_Factory(t) { return new (t || EventDisplayComponent)(); };
EventDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDisplayComponent, selectors: [["app-event-display"]], inputs: { event: "event", trackDays: "trackDays" }, decls: 10, vars: 8, consts: [[1, "card"], [1, "btn", 3, "routerLink"], [1, "card-body"], [4, "ngIf"], ["style", "color: green", 4, "ngIf"], ["style", "color: orange", 4, "ngIf"], [2, "color", "green"], [2, "color", "orange"]], template: function EventDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventDisplayComponent_div_9_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx.event._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" by ", ctx.event.author, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.event.date_created, "MM/dd/yyyy 'at' h:mma"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trackDays == true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtZGlzcGxheS9ldmVudC1kaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-display',
                templateUrl: './event-display.component.html',
                styleUrls: ['./event-display.component.css']
            }]
    }], function () { return []; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tags-list/tags-list.component */ "./src/app/components/tags-list/tags-list.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/components/comment/comment.component.ts");













function EventComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Event does not exist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_ng_template_1_Template_button_click_3_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to delete this event?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_ng_template_1_Template_button_click_10_listener() { const modal_r9 = ctx.$implicit; return modal_r9.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_ng_template_1_Template_button_click_12_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_ng_template_3_Template_button_click_3_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to delete this comment?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_ng_template_3_Template_button_click_10_listener() { const modal_r13 = ctx.$implicit; return modal_r13.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_ng_template_3_Template_button_click_12_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r38.likeEvent(ctx_r38.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r40.likeEvent(ctx_r40.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r42.dislikeEvent(ctx_r42.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r44.dislikeEvent(ctx_r44.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_a_14_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_a_14_a_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.openEvent(_r4, ctx_r47.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_div_7_a_14_a_1_Template, 3, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.sub.substring(6, user_r1.sub.length) === ctx_r21.event.user || ctx_r21.visitorObject.isAdmin == true);
} }
function EventComponent_div_0_div_3_div_7_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-event/", ctx_r22.event._id, "");
} }
function EventComponent_div_0_div_3_div_7_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r50.goingEvent(ctx_r50.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Going ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r52.goingEvent(ctx_r52.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Going ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r54.maybeEvent(ctx_r54.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maybe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r56.maybeEvent(ctx_r56.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maybe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r58.notGoingEvent(ctx_r58.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Going ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r60.notGoingEvent(ctx_r60.event._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Going ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_li_47_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_li_47_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r62.setOption(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users Attending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_li_49_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_li_49_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r64.setOption(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users Attending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_li_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users That Might Attend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_li_51_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_div_0_div_3_div_7_li_51_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r66.setOption(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users That Might Attend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_div_53_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attendee_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", attendee_r71._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attendee_r71.username);
} }
function EventComponent_div_0_div_3_div_7_div_53_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_div_7_div_53_div_2_div_1_Template, 4, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r69.usersMayAttend);
} }
function EventComponent_div_0_div_3_div_7_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_div_7_div_53_div_1_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_div_0_div_3_div_7_div_53_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.usersMayAttend.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.usersMayAttend.length != 0);
} }
function EventComponent_div_0_div_3_div_7_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_div_54_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attendee_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", attendee_r75._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attendee_r75.username);
} }
function EventComponent_div_0_div_3_div_7_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_div_7_div_54_div_2_div_1_Template, 4, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r73.usersAttending);
} }
function EventComponent_div_0_div_3_div_7_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_div_7_div_54_div_1_Template, 4, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_div_0_div_3_div_7_div_54_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.usersAttending.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.usersAttending.length != 0);
} }
function EventComponent_div_0_div_3_div_7_div_55_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/add-comment/1/", ctx_r76.event._id, "");
} }
function EventComponent_div_0_div_3_div_7_div_55_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No comments to show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventComponent_div_0_div_3_div_7_div_55_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-comment", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentListChange", function EventComponent_div_0_div_3_div_7_div_55_div_5_div_1_Template_app_comment_commentListChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r82.commentList = $event; })("refresh", function EventComponent_div_0_div_3_div_7_div_55_div_5_div_1_Template_app_comment_refresh_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r84.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r80 = ctx.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r80)("comments", ctx_r79.comments)("commentList", ctx_r79.commentList)("typeId", ctx_r79.event._id)("owner", ctx_r79.event.user);
} }
function EventComponent_div_0_div_3_div_7_div_55_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_div_7_div_55_div_5_div_1_Template, 3, 5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r78.commentList);
} }
function EventComponent_div_0_div_3_div_7_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventComponent_div_0_div_3_div_7_div_55_input_3_Template, 1, 1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventComponent_div_0_div_3_div_7_div_55_div_4_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventComponent_div_0_div_3_div_7_div_55_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r37.addCommentOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.commentList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.commentList.length > 0);
} }
function EventComponent_div_0_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_div_0_div_3_div_7_button_2_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventComponent_div_0_div_3_div_7_button_3_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventComponent_div_0_div_3_div_7_button_7_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventComponent_div_0_div_3_div_7_button_8_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EventComponent_div_0_div_3_div_7_a_14_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventComponent_div_0_div_3_div_7_a_15_Template, 3, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EventComponent_div_0_div_3_div_7_button_36_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EventComponent_div_0_div_3_div_7_button_37_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EventComponent_div_0_div_3_div_7_button_38_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EventComponent_div_0_div_3_div_7_button_39_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EventComponent_div_0_div_3_div_7_button_40_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EventComponent_div_0_div_3_div_7_button_41_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-tags-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EventComponent_div_0_div_3_div_7_li_46_Template, 3, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EventComponent_div_0_div_3_div_7_li_47_Template, 3, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EventComponent_div_0_div_3_div_7_li_48_Template, 3, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, EventComponent_div_0_div_3_div_7_li_49_Template, 3, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EventComponent_div_0_div_3_div_7_li_50_Template, 3, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EventComponent_div_0_div_3_div_7_li_51_Template, 3, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EventComponent_div_0_div_3_div_7_div_53_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EventComponent_div_0_div_3_div_7_div_54_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EventComponent_div_0_div_3_div_7_div_55_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.event.likes["1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.event.likes["1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.event.likes["1"].length - ctx_r8.event.likes["-1"].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.event.likes["-1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.event.likes["-1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.event.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/report/1/", ctx_r8.id, "/.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.visitorObject != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.sub.substring(6, user_r1.sub.length) === ctx_r8.event.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 31, ctx_r8.event.date_created, "MM/dd/yyyy 'at' h:mma"), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r8.event.user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.event.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.event.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Event Location: ", ctx_r8.event.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Event date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 34, ctx_r8.event.date_event, "MM/dd/yyyy 'at' h:mma"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.event.attendees["1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.event.attendees["1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.event.attendees["0"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.event.attendees["0"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.event.attendees["-1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.event.attendees["-1"].includes(ctx_r8.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r8.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.option == 1);
} }
function EventComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_0_div_3_ng_template_1_Template, 14, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventComponent_div_0_div_3_ng_template_3_Template, 14, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventComponent_div_0_div_3_div_7_Template, 56, 37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.editEvent);
} }
function EventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_div_0_div_2_Template, 6, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventComponent_div_0_div_3_Template, 8, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event != null);
} }
class EventComponent {
    constructor(eventService, auth, commentService, route, modalService, userService, notificationService) {
        this.eventService = eventService;
        this.auth = auth;
        this.commentService = commentService;
        this.route = route;
        this.modalService = modalService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.event = null;
        this.id = null;
        //event components
        this.events = [];
        this.comments = [];
        this.title = null;
        this.userId = null;
        this.author = null;
        this.description = '';
        this.event_comments = [];
        this.tags = [];
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.blankTitle = false;
        this.blankDescription = false;
        this.editEvent = false;
        this.hobbyExists = false;
        //comment components
        this.commentList = [];
        //modal components
        this.closeResult = '';
        this.eventToDelete = null;
        this.commentToDelete = null;
        //view options
        this.option = 1;
        //user attendees;
        this.usersAttending = [];
        this.usersMayAttend = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadEvent();
        this.eventService.getEvents().subscribe((events) => {
            this.events = events;
            this.loadUserArrays();
        });
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.profileObject.sub.substring(6, this.profileObject.sub.length))
                .subscribe((profile) => {
                this.userName = profile.username;
                this.visitorObject = profile;
            });
        });
    }
    //refresh from Comment component
    refresh(list) {
        this.commentList = list;
        this.loadEvent();
    }
    loadEvent() {
        this.eventService.getEvent(this.id).subscribe((event) => {
            this.event = event;
            if (this.event != null) {
                this.attendees = this.event.attendees;
                this.likes = this.event.likes;
                if (this.event['name'] == 'CastError') {
                    this.event = null;
                }
                else {
                    this.tags = this.event.tags;
                    this.commentService.getComments().subscribe((comments) => {
                        this.comments = comments;
                        this.commentList = [];
                        for (let i = comments.length - 1; i >= 0; i--) {
                            if (comments[i].event === this.event._id) {
                                this.commentList.push(comments[i]);
                            }
                        }
                    });
                }
            }
        });
    }
    //delete event
    deleteEvent(id) {
        var events = this.events;
        this.eventService.deleteEvent(id).subscribe((data) => {
            for (var i = 0; i < events.length; i++) {
                if (events[i]._id == id) {
                    events.splice(i, 1);
                }
            }
            if (this.visitorObject._id !== this.event.user &&
                this.visitorObject.isAdmin) {
                var link = 'event'; // post, event, or profile
                var userToNotify = this.event.user; //id of owner of post, event or profile
                const newNotification = {
                    text: 'Admin ' +
                        this.userName +
                        ' deleted your ' +
                        link +
                        ': ' +
                        this.event.title,
                    linkType: link,
                    user: userToNotify,
                    idToLink: this.event._id,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                    isClosed: false,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
            for (var i = this.comments.length - 1; i >= 0; i--) {
                if (this.comments[i].event == id) {
                    this.commentService.deleteComment(this.comments[i]._id).subscribe();
                    this.comments.splice(i, 1);
                }
            }
            this.eventService.getEvent(this.id).subscribe((event) => {
                this.event = event;
                if (this.event != null) {
                    if (this.event['name'] == 'CastError') {
                        this.event = null;
                    }
                }
            });
        });
    }
    //event join methods
    goingEvent(id) {
        //add user to correct event attendee category
        if (!this.attendees['1'].includes(this.userId)) {
            this.event.attendees['1'].push(this.userId);
            var link = 'event'; // post, event, or profile
            var userToNotify = this.event.user; //id of owner of post, event or profile
            var idToCommentOn = this.id; //id of post, event, or profile
            if (this.userId != userToNotify) {
                const newNotification = {
                    text: this.userName +
                        ' is going to your ' +
                        link +
                        ': ' +
                        this.event.title,
                    linkType: link,
                    user: userToNotify,
                    idToLink: idToCommentOn,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                    isClosed: false,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
        }
        //remove user from category
        else {
            for (let i = this.event.attendees['1'].length - 1; i >= 0; i--) {
                if (this.event.attendees['1'][i] === this.userId) {
                    this.event.attendees['1'].splice(i, 1);
                }
            }
        }
        //remove user from other event attendee category
        for (let i = this.event.attendees['-1'].length - 1; i >= 0; i--) {
            if (this.event.attendees['-1'][i] === this.userId) {
                this.event.attendees['-1'].splice(i, 1);
            }
        }
        for (let i = this.event.attendees['0'].length - 1; i >= 0; i--) {
            if (this.event.attendees['0'][i] === this.userId) {
                this.event.attendees['0'].splice(i, 1);
            }
        }
        this.event.attendees = this.attendees;
        this.eventService.patchEvent(id, this.event).subscribe();
        this.loadUserArrays();
    }
    maybeEvent(id) {
        //add user to correct event attendee category
        if (!this.attendees['0'].includes(this.userId)) {
            this.event.attendees['0'].push(this.userId);
            var link = 'event'; // post, event, or profile
            var userToNotify = this.event.user; //id of owner of post, event or profile
            var idToCommentOn = this.id; //id of post, event, or profile
            if (this.userId != userToNotify) {
                const newNotification = {
                    text: this.userName + ' might go to your ' + link + ': ' + this.event.title,
                    linkType: link,
                    user: userToNotify,
                    idToLink: idToCommentOn,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
        }
        //remove user from category
        else {
            for (let i = this.event.attendees['0'].length - 1; i >= 0; i--) {
                if (this.event.attendees['0'][i] === this.userId) {
                    this.event.attendees['0'].splice(i, 1);
                }
            }
        }
        //remove user from other event attendee category
        for (let i = this.event.attendees['-1'].length - 1; i >= 0; i--) {
            if (this.event.attendees['-1'][i] === this.userId) {
                this.event.attendees['-1'].splice(i, 1);
            }
        }
        for (let i = this.event.attendees['1'].length - 1; i >= 0; i--) {
            if (this.event.attendees['1'][i] === this.userId) {
                this.event.attendees['1'].splice(i, 1);
            }
        }
        this.event.attendees = this.attendees;
        this.eventService.patchEvent(id, this.event).subscribe();
        this.loadUserArrays();
    }
    notGoingEvent(id) {
        //add user to correct event attendee category
        if (!this.attendees['-1'].includes(this.userId)) {
            this.event.attendees['-1'].push(this.userId);
        }
        //remove user from category
        else {
            for (let i = this.event.attendees['-1'].length - 1; i >= 0; i--) {
                if (this.event.attendees['-1'][i] === this.userId) {
                    this.event.attendees['-1'].splice(i, 1);
                }
            }
        }
        //remove user from other event attendee category
        for (let i = this.event.attendees['1'].length - 1; i >= 0; i--) {
            if (this.event.attendees['1'][i] === this.userId) {
                this.event.attendees['1'].splice(i, 1);
            }
        }
        for (let i = this.event.attendees['0'].length - 1; i >= 0; i--) {
            if (this.event.attendees['0'][i] === this.userId) {
                this.event.attendees['0'].splice(i, 1);
            }
        }
        this.event.attendees = this.attendees;
        this.eventService.patchEvent(id, this.event).subscribe();
        this.loadUserArrays();
    }
    //event like methods
    likeEvent(id) {
        this.likes = this.event.likes;
        //like comment
        if (!this.likes['1'].includes(this.userId)) {
            this.likes['1'].push(this.userId);
            var link = 'event'; // post, event, or profile
            var userToNotify = this.event.user; //id of owner of post, event or profile
            var idToCommentOn = this.id; //id of post, event, or profile
            if (this.userId != userToNotify) {
                const newNotification = {
                    text: this.userName + ' liked your ' + link + '.',
                    linkType: link,
                    user: userToNotify,
                    idToLink: idToCommentOn,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                    isClosed: false,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
        }
        //unlike comment
        else {
            for (let i = this.likes['1'].length - 1; i >= 0; i--) {
                if (this.likes['1'][i] === this.userId) {
                    this.likes['1'].splice(i, 1);
                }
            }
        }
        //remove user from dislike section if user had disliked it
        for (let i = this.likes['-1'].length - 1; i >= 0; i--) {
            if (this.likes['-1'][i] === this.userId) {
                this.likes['-1'].splice(i, 1);
            }
        }
        this.event.likes = this.likes;
        this.eventService.patchEvent(id, this.event).subscribe();
    }
    dislikeEvent(id) {
        this.likes = this.event.likes;
        this.eventService.getEvent(id).subscribe((event) => {
            this.event = event;
            this.likes = this.event.likes;
            //dislike event
            if (!this.likes['-1'].includes(this.userId)) {
                this.likes['-1'].push(this.userId);
            }
            //un-dislike event
            else {
                for (let i = this.likes['-1'].length - 1; i >= 0; i--) {
                    if (this.likes['-1'][i] === this.userId) {
                        this.likes['-1'].splice(i, 1);
                    }
                }
            }
            //remove user from like section if user had disliked it
            for (let i = this.likes['1'].length - 1; i >= 0; i--) {
                if (this.likes['1'][i] === this.userId) {
                    this.likes['1'].splice(i, 1);
                }
            }
            this.event.likes = this.likes;
            this.eventService.patchEvent(id, this.event).subscribe();
        });
    }
    //Comment functionalities
    //removes comment
    deleteComment(id) {
        var comments = this.comments;
        this.commentService.deleteComment(id).subscribe((data) => {
            for (var i = 0; i < comments.length; i++) {
                if (comments[i]._id == id) {
                    comments.splice(i, 1);
                }
            }
            for (var i = 0; i < this.commentList.length; i++) {
                if (this.commentList[i]._id == id) {
                    this.commentList.splice(i, 1);
                }
            }
            this.commentService
                .getComments()
                .subscribe((comments) => (this.comments = comments));
        });
    }
    //comment likes code
    likeComment(id) {
        this.commentService.getComment(id).subscribe((comment) => {
            this.commentToLike = comment;
            this.commentMap = this.commentToLike.likes;
            //like comment
            if (!this.commentMap['1'].includes(this.userId)) {
                this.commentMap['1'].push(this.userId);
                var link = 'event'; // post, event, or profile
                var userToNotify = this.event.user; //id of owner of post, event or profile
                var idToCommentOn = this.id; //id of post, event, or profile
                if (this.userId != userToNotify) {
                    const newNotification = {
                        text: this.userName + ' liked your ' + link + '.',
                        linkType: link,
                        user: userToNotify,
                        idToLink: idToCommentOn,
                        date_created: new Date(),
                        date_modified: null,
                        newNotif: true,
                        isClosed: false,
                    };
                    this.notificationService.addNotification(newNotification).subscribe();
                }
            }
            //unlike comment
            else {
                for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
                    if (this.commentMap['1'][i] === this.userId) {
                        this.commentMap['1'].splice(i, 1);
                    }
                }
            }
            //remove user from dislike section if user had disliked it
            for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
                if (this.commentMap['-1'][i] === this.userId) {
                    this.commentMap['-1'].splice(i, 1);
                }
            }
            this.commentToLike.likes = this.commentMap;
            this.commentService
                .patchComment(id, this.commentToLike)
                .subscribe((comment) => {
                this.commentToLike = null;
                this.commentService.getComments().subscribe((comments) => {
                    this.comments = comments;
                    this.commentList = [];
                    for (let i = comments.length - 1; i >= 0; i--) {
                        if (comments[i].event === this.event._id) {
                            this.commentList.push(comments[i]);
                        }
                    }
                });
            });
        });
    }
    dislikeComment(id) {
        this.commentService.getComment(id).subscribe((comment) => {
            this.commentToLike = comment;
            this.commentMap = this.commentToLike.likes;
            //dislike comment
            if (!this.commentMap['-1'].includes(this.userId)) {
                this.commentMap['-1'].push(this.userId);
            }
            //un-dislike comment
            else {
                for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
                    if (this.commentMap['-1'][i] === this.userId) {
                        this.commentMap['-1'].splice(i, 1);
                    }
                }
            }
            //remove user from like section if user had liked it
            for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
                if (this.commentMap['1'][i] === this.userId) {
                    this.commentMap['1'].splice(i, 1);
                }
            }
            this.commentToLike.likes = this.commentMap;
            this.commentService
                .patchComment(id, this.commentToLike)
                .subscribe((comment) => {
                this.commentToLike = null;
                this.commentService.getComments().subscribe((comments) => {
                    this.comments = comments;
                    this.commentList = [];
                    for (let i = comments.length - 1; i >= 0; i--) {
                        if (comments[i].event === this.event._id) {
                            this.commentList.push(comments[i]);
                        }
                    }
                });
            });
        });
    }
    //modal code
    openEvent(content, id) {
        this.eventToDelete = id;
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-event' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            if (this.eventToDelete != null) {
                this.deleteEvent(this.eventToDelete);
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openComment(content, id) {
        this.commentToDelete = id;
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-comment' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            if (this.commentToDelete != null) {
                this.deleteComment(this.commentToDelete);
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        this.eventToDelete = null;
        this.commentToDelete = null;
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    setOption(val) {
        this.option = val;
    }
    //gets list of attendees
    loadUserArrays() {
        this.usersAttending = [];
        this.usersMayAttend = [];
        this.userService.getUsers().subscribe((users) => {
            if (this.event != null) {
                for (let i = 0; i < users.length; i++) {
                    if (this.event.attendees['1'].includes(users[i]._id)) {
                        this.usersAttending.push(users[i]);
                    }
                    else if (this.event.attendees['0'].includes(users[i]._id)) {
                        this.usersMayAttend.push(users[i]);
                    }
                }
            }
        });
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "card", 4, "ngIf"], [4, "ngIf"], [1, "card"], [1, "card-body"], ["type", "button", "routerLink", "/events", "value", "Back", 1, "btn", "btn-primary", "btn-sm"], ["eventContent", ""], ["commentContent", ""], [1, "modal-header"], ["id", "modal-event", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["id", "modal-comment", 1, "modal-title"], ["type", "button", "class", "btn btn-link btn-sm float-left", 3, "click", 4, "ngIf"], [1, "float-left", 2, "color", "black"], ["type", "button", "value", "Report", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/flag.svg", "alt", "Report", "width", "100%", "height", "100%"], [3, "routerLink"], ["type", "button", "class", "btn btn-primary btn-sm float-left", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm active float-left", 3, "click", 4, "ngIf"], [3, "tags"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "float-left", 3, "click"], ["src", "/assets/img/thumbs_up.svg", "alt", "Like", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_up_fill.svg", "alt", "Like", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_down.svg", "alt", "Dislike", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_down_fill.svg", "alt", "Dislike", "width", "100%", "height", "100%"], ["type", "button", "value", "Delete", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "click"], ["src", "/assets/img/trash.svg", "alt", "Delete", "width", "100%", "height", "100%"], ["type", "button", "value", "Edit", 1, "btn", "btn-primary", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/pencil-square.svg", "alt", "Edit", "width", "100%", "height", "100%"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "float-left", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "active", "float-left", 3, "click"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "active"], [1, "nav-link", 3, "click"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card-body", 3, "routerLink"], ["type", "button", "value", "Add Comment", "class", "btn btn-primary btn-sm", 3, "routerLink", 4, "ngIf"], ["type", "button", "value", "Add Comment", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [4, "ngFor", "ngForOf"], ["type", "1", 3, "comment", "comments", "commentList", "typeId", "owner", "commentListChange", "refresh"]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_9__["TagsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.css'],
            }]
    }], function () { return [{ type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");
/* harmony import */ var _event_display_event_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-display/event-display.component */ "./src/app/components/event-display/event-display.component.ts");








function EventsComponent_div_0_div_19_app_event_display_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r4.eventsCopy[ctx_r4.ind]);
} }
function EventsComponent_div_0_div_19_app_event_display_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r5.eventsCopy[ctx_r5.ind + 1]);
} }
function EventsComponent_div_0_div_19_app_event_display_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r6.eventsCopy[ctx_r6.ind + 2]);
} }
function EventsComponent_div_0_div_19_app_event_display_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r7.eventsCopy[ctx_r7.ind + 3]);
} }
function EventsComponent_div_0_div_19_app_event_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r8.eventsCopy[ctx_r8.ind + 4]);
} }
function EventsComponent_div_0_div_19_app_event_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r9.eventsCopy[ctx_r9.ind + 5]);
} }
function EventsComponent_div_0_div_19_app_event_display_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r10.eventsCopy[ctx_r10.ind + 6]);
} }
function EventsComponent_div_0_div_19_app_event_display_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r11.eventsCopy[ctx_r11.ind + 7]);
} }
function EventsComponent_div_0_div_19_app_event_display_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r12.eventsCopy[ctx_r12.ind + 8]);
} }
function EventsComponent_div_0_div_19_app_event_display_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-display", 12);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r13.eventsCopy[ctx_r13.ind + 9]);
} }
function EventsComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventsComponent_div_0_div_19_app_event_display_2_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventsComponent_div_0_div_19_app_event_display_4_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventsComponent_div_0_div_19_app_event_display_6_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventsComponent_div_0_div_19_app_event_display_8_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EventsComponent_div_0_div_19_app_event_display_10_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EventsComponent_div_0_div_19_app_event_display_12_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EventsComponent_div_0_div_19_app_event_display_14_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EventsComponent_div_0_div_19_app_event_display_16_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EventsComponent_div_0_div_19_app_event_display_18_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EventsComponent_div_0_div_19_app_event_display_20_Template, 1, 1, "app-event-display", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_div_0_div_19_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_div_0_div_19_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventsCopy.length > ctx_r2.ind + 9);
} }
function EventsComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No events found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EventsComponent_div_0_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventsComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventsComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-tag-options", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EventsComponent_div_0_div_19_Template, 25, 10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EventsComponent_div_0_div_20_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r0.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventsCopy.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventsCopy.length == 0);
} }
class EventsComponent {
    constructor(eventService, auth) {
        this.eventService = eventService;
        this.auth = auth;
        //event components
        this.events = [];
        this.eventsCopy = [];
        this.profileObject = null;
        this.title = null;
        this.author = null;
        this.mostRecent = null;
        this.tags = [];
        this.ind = 0;
    }
    ngOnInit() {
        this.eventService.getEvents().subscribe((events) => {
            this.events = events;
            //get most recent events
            for (let i = 0; i < this.events.length; i++) {
                this.eventsCopy[i] = this.events[this.events.length - 1 - i];
            }
        });
        this.auth.user$.subscribe((profile) => (this.profileObject = profile));
    }
    search() {
        //filter based on title
        if (this.title == null || this.title.trim() == '') {
            //get most recent events
            for (let i = 0; i < this.events.length; i++) {
                this.eventsCopy[i] = this.events[this.events.length - 1 - i];
            }
        }
        else {
            this.eventsCopy = [];
            for (let i = 0; i < this.events.length; i++) {
                if (this.events[i].title.toLowerCase().includes(this.title.toLowerCase())) {
                    this.eventsCopy.push(this.events[i]);
                }
            }
        }
        //filter based on author
        if (!(this.author == null || this.author.trim() == '')) {
            for (let i = this.eventsCopy.length - 1; i >= 0; i--) {
                if (!this.eventsCopy[i].author
                    .toLowerCase()
                    .includes(this.author.toLowerCase())) {
                    this.eventsCopy.splice(i, 1);
                }
            }
        }
        //filter based on tags
        this.checkTags();
    }
    //check if search contains all the tags
    checkTags() {
        for (let i = this.eventsCopy.length - 1; i >= 0; i--) {
            var remove = 0;
            for (let j = 0; j < this.tags.length; j++) {
                if (!this.eventsCopy[i].tags.includes(this.tags[j])) {
                    remove = 1;
                }
            }
            if (remove == 1) {
                this.eventsCopy.splice(i, 1);
            }
        }
    }
    prev() {
        if (this.ind > 0) {
            this.ind = this.ind - 10;
        }
    }
    next() {
        if (this.ind + 10 < this.eventsCopy.length) {
            this.ind = this.ind + 10;
        }
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-events"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "card"], [1, "card-body", 3, "submit"], [1, "card-title"], ["type", "text", "name", "title", "placeholder", "Search", 1, "card-text", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "author", "placeholder", "Author", 1, "card-text", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "tags"], ["type", "submit", "value", "Search", 1, "btn", "btn-primary", "btn-sm"], [4, "ngIf"], [3, "event", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [3, "event"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventsComponent_div_0_Template, 21, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_5__["TagOptionsComponent"], _event_display_event_display_component__WEBPACK_IMPORTED_MODULE_6__["EventDisplayComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events',
                templateUrl: './events.component.html',
                styleUrls: ['./events.component.css']
            }]
    }], function () { return [{ type: _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-display/post-display.component */ "./src/app/components/post-display/post-display.component.ts");
/* harmony import */ var _event_display_event_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-display/event-display.component */ "./src/app/components/event-display/event-display.component.ts");
/* harmony import */ var _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login-button/login-button.component */ "./src/app/components/login-button/login-button.component.ts");










function HomeComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_5_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-display", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r14);
} }
function HomeComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_5_div_6_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.mostRecentPosts);
} }
function HomeComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_5_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-display", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r16);
} }
function HomeComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_5_div_12_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.mostRecentEvents);
} }
function HomeComponent_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_5_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-display", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r18);
} }
function HomeComponent_div_5_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_5_div_18_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.recommendedPosts);
} }
function HomeComponent_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_5_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-display", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r20);
} }
function HomeComponent_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_5_div_24_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.recommendedEvents);
} }
function HomeComponent_div_5_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_5_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-display", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r22);
} }
function HomeComponent_div_5_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_5_div_30_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.yourEvents);
} }
function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Most Recent Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_div_5_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_5_div_6_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Most Recent Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_5_div_11_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_5_div_12_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Recommended Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_5_div_17_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_5_div_18_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Recommended Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_5_div_23_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_5_div_24_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Your Tracked Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_5_div_29_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_div_5_div_30_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mostRecentPosts.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mostRecentPosts.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mostRecentEvents.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mostRecentEvents.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.recommendedPosts.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.recommendedPosts.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.recommendedEvents.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.recommendedEvents.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.yourEvents.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.yourEvents.length != 0);
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To get the full experience, please sign up or log in.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-login-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(auth, postService, eventService, userService) {
        this.auth = auth;
        this.postService = postService;
        this.eventService = eventService;
        this.userService = userService;
        this.posts = [];
        this.events = [];
        this.mostRecentPosts = [];
        this.mostRecentEvents = [];
        this.recommendedPosts = [];
        this.recommendedEvents = [];
        this.yourPosts = [];
        this.yourEvents = [];
        this.eventsHosting = [];
        this.eventsAttending = [];
    }
    ngOnInit() {
        //load most recent posts no matter whether user is logged in or not
        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
            for (let i = 0; i < this.posts.length; i++) {
                this.mostRecentPosts.push(this.posts[i]);
            }
            //sorts most recent posts by date
            this.mostRecentPosts.sort((a, b) => this.sortPost(a, b));
            //gets maximum of 5 posts
            if (this.mostRecentPosts.length > 5) {
                this.mostRecentPosts = this.mostRecentPosts.slice(0, 5);
            }
        });
        //load most recent events no matter whether user is logged in or not
        this.eventService.getEvents().subscribe(events => {
            this.events = events;
            for (let i = 0; i < this.events.length; i++) {
                this.mostRecentEvents.push(this.events[i]);
            }
            //sorts most recent events by date
            this.mostRecentEvents.sort((a, b) => this.sortEvent(a, b));
            //gets maximum of 5 posts
            if (this.mostRecentEvents.length > 5) {
                this.mostRecentEvents = this.mostRecentEvents.slice(0, 5);
            }
        });
        //checks if user is logged in and then shows relevant posts and events
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            if (this.profileObject != null) {
                this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            }
            else {
                this.userId = null;
            }
            this.userService.getUser(this.userId).subscribe(user => {
                this.userObject = user;
                for (let i = 0; i < this.posts.length; i++) {
                    //compare tags of post and tags of user
                    if (this.compareTags(this.posts[i].tags, this.userObject.hobbies)) {
                        this.recommendedPosts.push(this.posts[i]);
                    }
                    //check user that created post
                    if (this.userId === this.posts[i].user) {
                        this.yourPosts.push(this.posts[i]);
                    }
                }
                //gets maximum of 5 posts
                if (this.recommendedPosts.length > 5) {
                    this.recommendedPosts = this.recommendedPosts.slice(0, 5);
                }
                if (this.yourPosts.length > 5) {
                    this.yourPosts = this.yourPosts.slice(0, 5);
                }
                for (let i = 0; i < this.events.length; i++) {
                    //compare tags of event and tags of user
                    if (this.compareTags(this.events[i].tags, this.userObject.hobbies)) {
                        this.recommendedEvents.push(this.events[i]);
                    }
                    //check if user is going/maybe to events
                    if (this.events[i].attendees["1"].includes(this.userId) || this.events[i].attendees["0"].includes(this.userId)) {
                        this.yourEvents.push(this.events[i]);
                    }
                }
                //gets maximum of 5 posts
                if (this.recommendedEvents.length > 5) {
                    this.recommendedEvents = this.recommendedEvents.slice(0, 5);
                }
                if (this.yourEvents.length > 5) {
                    this.yourEvents = this.yourEvents.slice(0, 5);
                }
            });
        });
    }
    sortPost(a, b) {
        if (a.date_created < b.date_created) {
            return 1;
        }
        else if (a.date_created > b.date_created) {
            return -1;
        }
        else {
            return 0;
        }
    }
    sortEvent(a, b) {
        if (a.date_created < b.date_created) {
            return 1;
        }
        else if (a.date_created > b.date_created) {
            return -1;
        }
        else {
            return 0;
        }
    }
    compareTags(arr1, arr2) {
        var tagMatch = false;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    tagMatch = true;
                    break;
                }
            }
        }
        return tagMatch;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 6, consts: [[1, "container"], [1, "card"], [1, "card-body"], [4, "ngIf"], [1, "card-title"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "post"], [3, "event"], [1, "btn-group", "bg-primary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to HobbyBuilder!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 31, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.auth.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_6__["PostDisplayComponent"], _event_display_event_display_component__WEBPACK_IMPORTED_MODULE_7__["EventDisplayComponent"], _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_8__["LoginButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login-button/login-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-button/login-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginButtonComponent", function() { return LoginButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");



class LoginButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        console.log(this.auth);
    }
    loginWithRedirect() {
        this.auth.loginWithRedirect();
    }
}
LoginButtonComponent.ɵfac = function LoginButtonComponent_Factory(t) { return new (t || LoginButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginButtonComponent, selectors: [["app-login-button"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-outline-light", 3, "click"]], template: function LoginButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginButtonComponent_Template_button_click_0_listener() { return ctx.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nLog In\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-button',
                templateUrl: './login-button.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/logout-button/logout-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/logout-button/logout-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





class LogoutButtonComponent {
    constructor(auth, doc) {
        this.auth = auth;
        this.doc = doc;
    }
    ngOnInit() {
        console.log(this.auth);
    }
    logout() {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
LogoutButtonComponent.ɵfac = function LogoutButtonComponent_Factory(t) { return new (t || LogoutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
LogoutButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutButtonComponent, selectors: [["app-logout-button"]], decls: 2, vars: 0, consts: [["ngbDropdownItem", "", 1, "btn", "btn-outline-light", 3, "click"]], template: function LogoutButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogoutButtonComponent_Template_button_click_0_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogoutButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-logout-button',
                templateUrl: './logout-button.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logout-button/logout-button.component */ "./src/app/components/logout-button/logout-button.component.ts");










function NavBarComponent_div_6_b_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_6_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_6_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Modify Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavBarComponent_div_6_b_16_Template, 2, 0, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavBarComponent_div_6_button_18_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 2, ctx_r0.auth.isAuthenticated$) && ctx_r0.userObject != null && ctx_r0.userObject.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 4, ctx_r0.auth.isAuthenticated$) && ctx_r0.userObject != null && ctx_r0.userObject.isAdmin);
} }
function NavBarComponent_div_8_app_logout_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logout-button");
} }
function NavBarComponent_div_8_div_12_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_8_div_12_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_8_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No notifications.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_8_div_12_div_5_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_8_div_12_div_5_div_3_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const notification_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r21.deleteNotification(notification_r18._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_8_div_12_div_5_div_3_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const notification_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r24.turnOld(notification_r18._id, notification_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", notification_r18.linkType, "/", notification_r18.idToLink, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r18.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, notification_r18.date_created, "MM/dd/yyyy 'at' h:mma"), " ");
} }
function NavBarComponent_div_8_div_12_div_5_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_8_div_12_div_5_div_3_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const notification_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r27.deleteNotification(notification_r18._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", notification_r18.linkType, "/", notification_r18.idToLink, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r18.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, notification_r18.date_created, "MM/dd/yyyy 'at' h:mma"), " ");
} }
function NavBarComponent_div_8_div_12_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_8_div_12_div_5_div_3_div_1_Template, 11, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_div_8_div_12_div_5_div_3_div_2_Template, 11, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r18.newNotif == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r18.newNotif == false);
} }
function NavBarComponent_div_8_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_8_div_12_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.clearAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarComponent_div_8_div_12_div_5_div_3_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.notifications);
} }
function NavBarComponent_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_8_div_12_button_1_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_div_8_div_12_button_2_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavBarComponent_div_8_div_12_div_4_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavBarComponent_div_8_div_12_div_5_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.newNotifications == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.newNotifications != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 0 >= ctx_r12.notifications.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.notifications.length > 0);
} }
function NavBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.updateNotif(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavBarComponent_div_8_app_logout_button_10_Template, 1, 0, "app-logout-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavBarComponent_div_8_div_12_Template, 6, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userObject.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-profile/", ctx_r1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx_r1.auth.isAuthenticated$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r1.auth.isAuthenticated$) && ctx_r1.userObject != null && ctx_r1.userObject.username != null);
} }
class NavBarComponent {
    constructor(auth, userService, notificationService, doc) {
        this.auth = auth;
        this.userService = userService;
        this.notificationService = notificationService;
        this.doc = doc;
        //notification components
        this.notifications = [];
        this.newNotifications = false;
    }
    ngOnInit() {
        this.updateNotif();
    }
    updateNotif() {
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            if (this.profileObject != null) {
                this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            }
            else {
                this.userId = null;
            }
            if (this.userId != null) {
                this.userService.getUser(this.userId).subscribe(user => {
                    this.userObject = user;
                    if (this.userObject == undefined) {
                        alert("Your account has been deleted.");
                        this.auth.logout({ returnTo: this.doc.location.origin });
                    }
                    this.getNotifications();
                });
            }
        });
    }
    getNotifications() {
        this.notifications = [];
        this.newNotifications = false;
        this.notificationService.getNotifications().subscribe(notifications => {
            for (let i = 0; i < notifications.length; i++) {
                if (notifications[i].user === this.userId) {
                    this.notifications.push(notifications[i]);
                }
                if (notifications[i].user === this.userId && notifications[i].newNotif == true) {
                    this.newNotifications = true;
                }
            }
        });
    }
    deleteNotification(notifId) {
        this.notificationService.deleteNotification(notifId).subscribe(notif => {
            for (let i = this.notifications.length - 1; i >= 0; i--) {
                if (this.notifications[i]._id === notifId) {
                    this.notifications.splice(i, 1);
                }
            }
        });
    }
    clearAll() {
        for (let i = this.notifications.length - 1; i >= 0; i--) {
            this.notificationService.deleteNotification(this.notifications[i]._id).subscribe();
        }
        this.notifications = [];
    }
    turnOld(notifId) {
        this.notificationService.getNotification(notifId).subscribe(notif => {
            notif.newNotif = false;
            this.notificationService.patchNotification(notifId, notif).subscribe();
        });
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 10, vars: 6, consts: [["height", "200vh", 1, "bg-primary"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], [1, "btn-group"], ["type", "button", "routerLink", "/", 1, "btn", "btn-outline-light", 3, "click"], [1, "font-weight-bold"], ["class", "btn-group", "ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 4, "ngIf"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-light"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["routerLink", "/add-post", "ngbDropdownItem", "", 3, "click"], ["routerLink", "/posts", "ngbDropdownItem", "", 3, "click"], ["routerLink", "/add-event", "ngbDropdownItem", "", 3, "click"], ["routerLink", "/events", "ngbDropdownItem", "", 3, "click"], [4, "ngIf"], ["routerLink", "/tag", "ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["routerLink", "/tag", "ngbDropdownItem", "", 3, "click"], ["ngbDropdownItem", "", 3, "routerLink", "click"], ["class", "btn btn-outline-light btn-danger", "ngbDropdownToggle", "", 4, "ngIf"], ["class", "btn btn-outline-light", "ngbDropdownToggle", "", 4, "ngIf"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-light", "btn-danger"], ["src", "/assets/img/bell-fill.svg", "alt", "Notifications"], ["src", "/assets/img/bell.svg", "alt", "Notifications"], ["ngbDropdownItem", "", "disabled", ""], ["ngbDropdownItem", "", 1, "btn", "btn-danger", 3, "click"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "btn", 2, "background-color", "#e7e7e7"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "card-body", 3, "routerLink", "click"], ["ngbDropdownItem", "", 1, "btn", 3, "routerLink"], [1, "card-body"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.updateNotif(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HobbyBuilder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavBarComponent_div_6_Template, 20, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_div_8_Template, 14, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.auth.isAuthenticated$) && ctx.userObject != null && ctx.userObject.username != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.auth.isAuthenticated$) && ctx.userObject != null && ctx.userObject.username != null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownItem"], _logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_7__["LogoutButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function NotificationsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You currently have no notifications. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotificationsComponent_div_0_div_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_0_div_3_div_6_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.deleteNotification(notification_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_0_div_3_div_6_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.turnOld(notification_r5._id, notification_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", notification_r5.linkType, "/", notification_r5.idToLink, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r5.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, notification_r5.date_created, "MM/dd/yyyy 'at' h:mma"), " ");
} }
function NotificationsComponent_div_0_div_3_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_0_div_3_div_6_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.deleteNotification(notification_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", notification_r5.linkType, "/", notification_r5.idToLink, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r5.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, notification_r5.date_created, "MM/dd/yyyy 'at' h:mma"), " ");
} }
function NotificationsComponent_div_0_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsComponent_div_0_div_3_div_6_div_1_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationsComponent_div_0_div_3_div_6_div_2_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r5.newNotif == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r5.newNotif == false);
} }
function NotificationsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_0_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.clearAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clear All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationsComponent_div_0_div_3_div_6_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.notifications);
} }
function NotificationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationsComponent_div_0_div_2_Template, 6, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationsComponent_div_0_div_3_Template, 7, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.notifications == null || ctx_r0.notifications.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.notifications != null && ctx_r0.notifications.length > 0);
} }
class NotificationsComponent {
    constructor(notificationService, auth, route, userService) {
        this.notificationService = notificationService;
        this.auth = auth;
        this.route = route;
        this.userService = userService;
        //notification components
        this.notifications = [];
        this.userId = null;
        this.profileObject = null;
    }
    ngOnInit() {
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.profileObject.sub.substring(6, this.profileObject.sub.length))
                .subscribe((profile) => {
                this.userName = profile.username;
            });
        });
        this.notificationService.getNotifications().subscribe(notifications => {
            for (let i = notifications.length - 1; i >= 0; i--) {
                if (notifications[i].user === this.userId) {
                    this.notifications.push(notifications[i]);
                }
            }
        });
    }
    deleteNotification(notifId) {
        this.notificationService.deleteNotification(notifId).subscribe(notif => {
            for (let i = this.notifications.length - 1; i >= 0; i--) {
                if (this.notifications[i]._id === notifId) {
                    this.notifications.splice(i, 1);
                }
            }
        });
    }
    clearAll() {
        for (let i = this.notifications.length - 1; i >= 0; i--) {
            this.notificationService.deleteNotification(this.notifications[i]._id).subscribe();
        }
        this.notifications = [];
    }
    turnOld(notifId) {
        this.notificationService.getNotification(notifId).subscribe(notif => {
            notif.newNotif = false;
            this.notificationService.patchNotification(notifId, notif).subscribe();
        });
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", 2, "background-color", "#e7e7e7"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "card-body", 3, "routerLink", "click"], [1, "btn", 3, "routerLink"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationsComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications',
                templateUrl: './notifications.component.html',
                styleUrls: ['./notifications.component.css']
            }]
    }], function () { return [{ type: _services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post-display/post-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-display/post-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDisplayComponent", function() { return PostDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class PostDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostDisplayComponent.ɵfac = function PostDisplayComponent_Factory(t) { return new (t || PostDisplayComponent)(); };
PostDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDisplayComponent, selectors: [["app-post-display"]], inputs: { post: "post" }, decls: 9, vars: 7, consts: [[1, "card"], ["width", "100%", 1, "btn", 3, "routerLink"], ["width", "100%", 1, "card-body", 2, "text-align", "center"]], template: function PostDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx.post._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" by ", ctx.post.author, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx.post.date_created, "MM/dd/yyyy 'at' h:mma"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kaXNwbGF5L3Bvc3QtZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-display',
                templateUrl: './post-display.component.html',
                styleUrls: ['./post-display.component.css']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tags-list/tags-list.component */ "./src/app/components/tags-list/tags-list.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/components/comment/comment.component.ts");














function PostComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Post does not exist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_ng_template_1_Template_button_click_3_listener() { const modal_r7 = ctx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to delete this post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_ng_template_1_Template_button_click_10_listener() { const modal_r7 = ctx.$implicit; return modal_r7.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_ng_template_1_Template_button_click_12_listener() { const modal_r7 = ctx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r20.likePost(ctx_r20.post._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_div_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r22.likePost(ctx_r22.post._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_div_5_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r24.dislikePost(ctx_r24.post._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_div_5_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.dislikePost(ctx_r26.post._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_a_14_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_0_div_3_div_5_a_14_a_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.openPost(_r4, ctx_r29.post._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_0_div_3_div_5_a_14_a_1_Template, 3, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.sub.substring(6, user_r1.sub.length) === ctx_r15.post.user || ctx_r15.visitorObject.isAdmin == true);
} }
function PostComponent_div_0_div_3_div_5_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-post/", ctx_r16.post._id, "");
} }
function PostComponent_div_0_div_3_div_5_input_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 33);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/add-comment/0/", ctx_r17.post._id, "");
} }
function PostComponent_div_0_div_3_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No comments to show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_0_div_3_div_5_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-comment", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentListChange", function PostComponent_div_0_div_3_div_5_div_33_div_1_Template_app_comment_commentListChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r35.commentList = $event; })("refresh", function PostComponent_div_0_div_3_div_5_div_33_div_1_Template_app_comment_refresh_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r37.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r33)("comments", ctx_r32.comments)("commentList", ctx_r32.commentList)("typeId", ctx_r32.post._id)("owner", ctx_r32.post.user);
} }
function PostComponent_div_0_div_3_div_5_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_0_div_3_div_5_div_33_div_1_Template, 3, 5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.commentList);
} }
function PostComponent_div_0_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_0_div_3_div_5_button_2_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_div_0_div_3_div_5_button_3_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostComponent_div_0_div_3_div_5_button_7_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_div_0_div_3_div_5_button_8_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostComponent_div_0_div_3_div_5_a_14_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostComponent_div_0_div_3_div_5_a_15_Template, 3, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-tags-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PostComponent_div_0_div_3_div_5_input_31_Template, 1, 1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PostComponent_div_0_div_3_div_5_div_32_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PostComponent_div_0_div_3_div_5_div_33_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.post.likes["1"].includes(ctx_r6.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.post.likes["1"].includes(ctx_r6.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.post.likes["1"].length - ctx_r6.post.likes["-1"].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.post.likes["-1"].includes(ctx_r6.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.post.likes["-1"].includes(ctx_r6.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.post.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/report/0/", ctx_r6.id, "/.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.visitorObject != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.sub.substring(6, user_r1.sub.length) === ctx_r6.post.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 17, ctx_r6.post.date_created, "MM/dd/yyyy 'at' h:mma"), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r6.post.user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.post.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.post.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r6.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.addCommentOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.commentList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.commentList.length > 0);
} }
function PostComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_0_div_3_ng_template_1_Template, 14, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_div_0_div_3_div_5_Template, 34, 20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.editPost);
} }
function PostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_0_div_2_Template, 6, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_div_0_div_3_Template, 6, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post != null);
} }
class PostComponent {
    constructor(postService, auth, commentService, route, modalService, userService, notificationService) {
        this.postService = postService;
        this.auth = auth;
        this.commentService = commentService;
        this.route = route;
        this.modalService = modalService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.post = null;
        this.id = null;
        //post components
        this.posts = [];
        this.comments = [];
        this.title = null;
        this.userId = null;
        this.author = null;
        this.description = '';
        this.post_comments = [];
        this.tags = [];
        this.date_created = null;
        this.date_modified = null;
        this.profileObject = null;
        this.blankTitle = false;
        this.blankDescription = false;
        this.editPost = false;
        this.hobbyExists = false;
        //comment components
        this.commentList = [];
        //modal components
        this.closeResult = '';
        this.postToDelete = null;
        this.commentToDelete = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadPost();
        this.postService.getPosts().subscribe((posts) => (this.posts = posts));
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.profileObject.sub.substring(6, this.profileObject.sub.length))
                .subscribe((profile) => {
                this.userName = profile.username;
                this.visitorObject = profile;
            });
        });
    }
    //refresh from Comment component
    refresh(list) {
        this.commentList = list;
        this.loadPost();
    }
    loadPost() {
        this.postService.getPost(this.id).subscribe((post) => {
            this.post = post;
            if (this.post != null) {
                this.likes = this.post.likes;
                if (this.post['name'] == 'CastError') {
                    this.post = null;
                }
                else {
                    this.tags = this.post.tags;
                    this.loadComments();
                }
            }
        });
    }
    loadComments() {
        this.commentService.getComments().subscribe((comments) => {
            this.comments = comments;
            this.commentList = [];
            for (let i = comments.length - 1; i >= 0; i--) {
                if (comments[i].post === this.post._id) {
                    this.commentList.push(comments[i]);
                }
            }
        });
    }
    //delete post
    deletePost(id) {
        var posts = this.posts;
        this.postService.deletePost(id).subscribe((data) => {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i]._id == id) {
                    posts.splice(i, 1);
                }
            }
            if (this.visitorObject._id !== this.post.user &&
                this.visitorObject.isAdmin) {
                var link = 'post'; // post, event, or profile
                var userToNotify = this.post.user; //id of owner of post, event or profile
                const newNotification = {
                    text: 'Admin ' +
                        this.userName +
                        ' deleted your ' +
                        link +
                        ': ' +
                        this.post.title,
                    linkType: link,
                    user: userToNotify,
                    idToLink: this.post._id,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                    isClosed: false,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
            for (var i = this.comments.length - 1; i >= 0; i--) {
                if (this.comments[i].post == id) {
                    this.commentService.deleteComment(this.comments[i]._id).subscribe();
                    this.comments.splice(i, 1);
                }
            }
            this.postService.getPost(this.id).subscribe((post) => {
                this.post = post;
                if (this.post != null) {
                    if (this.post['name'] == 'CastError') {
                        this.post = null;
                    }
                }
            });
        });
    }
    //post like methods
    likePost(id) {
        //like comment
        if (!this.likes['1'].includes(this.userId)) {
            this.likes['1'].push(this.userId);
            var link = 'post'; // post, event, or profile
            var userToNotify = this.post.user; //id of owner of post, event or profile
            var idToCommentOn = this.id; //id of post, event, or profile
            if (this.userId != userToNotify) {
                const newNotification = {
                    text: this.userName + ' liked your ' + link + '.',
                    linkType: link,
                    user: userToNotify,
                    idToLink: idToCommentOn,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
        }
        //unlike comment
        else {
            for (let i = this.likes['1'].length - 1; i >= 0; i--) {
                if (this.likes['1'][i] === this.userId) {
                    this.likes['1'].splice(i, 1);
                }
            }
        }
        //remove user from dislike section if user had disliked it
        for (let i = this.likes['-1'].length - 1; i >= 0; i--) {
            if (this.likes['-1'][i] === this.userId) {
                this.likes['-1'].splice(i, 1);
            }
        }
        this.post.likes = this.likes;
        this.postService.patchPost(id, this.post).subscribe();
    }
    dislikePost(id) {
        this.postService.getPost(id).subscribe((post) => {
            this.post = post;
            this.likes = this.post.likes;
            //dislike post
            if (!this.likes['-1'].includes(this.userId)) {
                this.likes['-1'].push(this.userId);
            }
            //un-dislike post
            else {
                for (let i = this.likes['-1'].length - 1; i >= 0; i--) {
                    if (this.likes['-1'][i] === this.userId) {
                        this.likes['-1'].splice(i, 1);
                    }
                }
            }
            //remove user from like section if user had disliked it
            for (let i = this.likes['1'].length - 1; i >= 0; i--) {
                if (this.likes['1'][i] === this.userId) {
                    this.likes['1'].splice(i, 1);
                }
            }
            this.post.likes = this.likes;
            this.postService.patchPost(id, this.post).subscribe();
        });
    }
    //modal code
    openPost(content, id) {
        this.postToDelete = id;
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-post' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            if (this.postToDelete != null) {
                this.deletePost(this.postToDelete);
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        this.postToDelete = null;
        this.commentToDelete = null;
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "card", 4, "ngIf"], [4, "ngIf"], [1, "card"], [1, "card-body"], ["type", "button", "routerLink", "/posts", "value", "Back", 1, "btn", "btn-primary", "btn-sm"], ["postContent", ""], [1, "modal-header"], ["id", "modal-post", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", "class", "btn btn-link btn-sm float-left", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-link float-left", 3, "click", 4, "ngIf"], [1, "float-left", 2, "color", "black"], ["type", "button", "value", "Report", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/flag.svg", "alt", "Report", "width", "100%", "height", "100%"], [3, "routerLink"], [3, "tags"], ["type", "button", "value", "Add Comment", "class", "btn btn-primary btn-sm", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "float-left", 3, "click"], ["src", "/assets/img/thumbs_up.svg", "alt", "Like", "width", "100%", "height", "100%"], ["type", "button", 1, "btn", "btn-link", "float-left", 3, "click"], ["src", "/assets/img/thumbs_up_fill.svg", "alt", "Like", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_down.svg", "alt", "Dislike", "width", "100%", "height", "100%"], ["src", "/assets/img/thumbs_down_fill.svg", "alt", "Dislike", "width", "100%", "height", "100%"], ["type", "button", "value", "Delete", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "click"], ["src", "/assets/img/trash.svg", "alt", "Delete", "width", "100%", "height", "100%"], ["type", "button", "value", "Edit", 1, "btn", "btn-primary", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/pencil-square.svg", "alt", "Edit", "width", "100%", "height", "100%"], ["type", "button", "value", "Add Comment", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [4, "ngFor", "ngForOf"], ["type", "0", 3, "comment", "comments", "commentList", "typeId", "owner", "commentListChange", "refresh"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_9__["TagsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css'],
                providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]],
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag-options/tag-options.component */ "./src/app/components/tag-options/tag-options.component.ts");
/* harmony import */ var _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-display/post-display.component */ "./src/app/components/post-display/post-display.component.ts");








function PostsComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hobby already exists in your post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsComponent_div_0_a_20_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hbby_r6, " ");
} }
function PostsComponent_div_0_a_20_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid tag. Please remove this tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsComponent_div_0_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_0_a_20_a_2_Template, 2, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostsComponent_div_0_a_20_a_3_Template, 2, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_0_a_20_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r7 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deleteHobby(ctx_r11.tags[i_r7]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hbby_r6 != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hbby_r6 == null);
} }
function PostsComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No posts to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsComponent_div_0_div_24_app_post_display_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r13.postsCopy[ctx_r13.ind]);
} }
function PostsComponent_div_0_div_24_app_post_display_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r14.postsCopy[ctx_r14.ind + 1]);
} }
function PostsComponent_div_0_div_24_app_post_display_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r15.postsCopy[ctx_r15.ind + 2]);
} }
function PostsComponent_div_0_div_24_app_post_display_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r16.postsCopy[ctx_r16.ind + 3]);
} }
function PostsComponent_div_0_div_24_app_post_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r17.postsCopy[ctx_r17.ind + 4]);
} }
function PostsComponent_div_0_div_24_app_post_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r18.postsCopy[ctx_r18.ind + 5]);
} }
function PostsComponent_div_0_div_24_app_post_display_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r19.postsCopy[ctx_r19.ind + 6]);
} }
function PostsComponent_div_0_div_24_app_post_display_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r20.postsCopy[ctx_r20.ind + 7]);
} }
function PostsComponent_div_0_div_24_app_post_display_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r21.postsCopy[ctx_r21.ind + 8]);
} }
function PostsComponent_div_0_div_24_app_post_display_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-display", 19);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r22.postsCopy[ctx_r22.ind + 9]);
} }
function PostsComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_0_div_24_app_post_display_2_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostsComponent_div_0_div_24_app_post_display_4_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostsComponent_div_0_div_24_app_post_display_6_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostsComponent_div_0_div_24_app_post_display_8_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostsComponent_div_0_div_24_app_post_display_10_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostsComponent_div_0_div_24_app_post_display_12_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostsComponent_div_0_div_24_app_post_display_14_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PostsComponent_div_0_div_24_app_post_display_16_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PostsComponent_div_0_div_24_app_post_display_18_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostsComponent_div_0_div_24_app_post_display_20_Template, 1, 1, "app-post-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_0_div_24_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_0_div_24_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postsCopy.length > ctx_r5.ind + 9);
} }
function PostsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PostsComponent_div_0_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostsComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-tag-options", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostsComponent_div_0_div_19_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostsComponent_div_0_a_20_Template, 6, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostsComponent_div_0_div_23_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PostsComponent_div_0_div_24_Template, 25, 10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r0.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hobbyExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hobbyNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.postsCopy.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.postsCopy.length > 0);
} }
class PostsComponent {
    constructor(postService, auth) {
        this.postService = postService;
        this.auth = auth;
        //post components
        this.posts = [];
        this.postsCopy = [];
        this.profileObject = null;
        this.title = null;
        this.author = null;
        this.mostRecent = null;
        this.tags = [];
        this.ind = 0;
    }
    ngOnInit() {
        this.postService.getPosts().subscribe((posts) => {
            this.posts = posts;
            //get most recent posts
            for (let i = 0; i < this.posts.length; i++) {
                this.postsCopy[i] = this.posts[this.posts.length - 1 - i];
            }
        });
        this.auth.user$.subscribe((profile) => (this.profileObject = profile));
    }
    search() {
        //filter based on title
        if (this.title == null || this.title.trim() == '') {
            //get most recent posts
            for (let i = 0; i < this.posts.length; i++) {
                this.postsCopy[i] = this.posts[this.posts.length - 1 - i];
            }
        }
        else {
            this.postsCopy = [];
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].title.toLowerCase().includes(this.title.toLowerCase())) {
                    this.postsCopy.push(this.posts[i]);
                }
            }
        }
        //filter based on author
        if (!(this.author == null || this.author.trim() == '')) {
            for (let i = this.postsCopy.length - 1; i >= 0; i--) {
                if (!this.postsCopy[i].author
                    .toLowerCase()
                    .includes(this.author.toLowerCase())) {
                    this.postsCopy.splice(i, 1);
                }
            }
        }
        //filter based on tags
        this.checkTags();
    }
    //check if search contains all the tags
    checkTags() {
        for (let i = this.postsCopy.length - 1; i >= 0; i--) {
            var remove = 0;
            for (let j = 0; j < this.tags.length; j++) {
                if (!this.postsCopy[i].tags.includes(this.tags[j])) {
                    remove = 1;
                }
            }
            if (remove == 1) {
                this.postsCopy.splice(i, 1);
            }
        }
    }
    prev() {
        if (this.ind > 0) {
            this.ind = this.ind - 10;
        }
    }
    next() {
        if (this.ind + 10 < this.postsCopy.length) {
            this.ind = this.ind + 10;
        }
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "card"], [1, "card-body", 3, "submit"], [1, "card-title"], ["type", "text", "name", "title", "placeholder", "Search", 1, "card-text", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "author", "placeholder", "Author", 1, "card-text", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "tags"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "submit", "value", "Search", 1, "btn", "btn-primary", "btn-sm"], ["class", "card", 4, "ngIf"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning"], [1, "badge", "badge-secondary"], [1, "badge", "badge-secondary", 3, "click"], [1, "class-body"], [3, "post", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [3, "post"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostsComponent_div_0_Template, 25, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _tag_options_tag_options_component__WEBPACK_IMPORTED_MODULE_5__["TagOptionsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_6__["PostDisplayComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _event_display_event_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../event-display/event-display.component */ "./src/app/components/event-display/event-display.component.ts");
/* harmony import */ var _comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comment-display/comment-display.component */ "./src/app/components/comment-display/comment-display.component.ts");
/* harmony import */ var _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../post-display/post-display.component */ "./src/app/components/post-display/post-display.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/components/comment/comment.component.ts");


















function ProfileComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Profile does not exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_ng_template_1_Template_button_click_3_listener() { const modal_r34 = ctx.$implicit; return modal_r34.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to delete this account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_ng_template_1_Template_button_click_10_listener() { const modal_r34 = ctx.$implicit; return modal_r34.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_ng_template_1_Template_button_click_12_listener() { const modal_r34 = ctx.$implicit; return modal_r34.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_ng_template_3_Template_button_click_3_listener() { const modal_r38 = ctx.$implicit; return modal_r38.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to delete this comment?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_ng_template_3_Template_button_click_10_listener() { const modal_r38 = ctx.$implicit; return modal_r38.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_ng_template_3_Template_button_click_12_listener() { const modal_r38 = ctx.$implicit; return modal_r38.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_a_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.deleteUserOption(_r4, ctx_r42.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-profile/", ctx_r9.id, "");
} }
function ProfileComponent_div_0_div_2_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Welcome, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_17_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_a_17_a_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r48.addFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_17_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_a_17_a_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r50.cancelFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Friend Request Pending. Click to Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_17_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_a_17_a_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r52.acceptFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Accept Friend Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_a_17_a_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r54.cancelFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reject Friend Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_17_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_a_17_a_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r55.cancelFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Friends. Click to Remove Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_a_17_a_1_Template, 3, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_a_17_a_2_Template, 3, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_0_div_2_a_17_a_3_Template, 5, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_a_17_a_4_Template, 3, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.visitorObject.friends["1"].includes(ctx_r12.profile._id) && !ctx_r12.visitorObject.friends["2"].includes(ctx_r12.profile._id) && !ctx_r12.visitorObject.friends["3"].includes(ctx_r12.profile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.visitorObject.friends["1"].includes(ctx_r12.profile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.visitorObject.friends["2"].includes(ctx_r12.profile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.visitorObject.friends["3"].includes(ctx_r12.profile._id));
} }
function ProfileComponent_div_0_div_2_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r57.setOption(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r59.setOption(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r61.setOption(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r63.setOption(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r65.setOption(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tracked Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_30_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r67.setOption(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tracked Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_li_32_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_li_32_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r69.setOption(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No friends found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r73.friendsOfUser[ctx_r73.ind5]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r73.friendsOfUser[ctx_r73.ind5].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r74.friendsOfUser[ctx_r74.ind5 + 1]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r74.friendsOfUser[ctx_r74.ind5 + 1].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r75.friendsOfUser[ctx_r75.ind5 + 2]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r75.friendsOfUser[ctx_r75.ind5 + 2].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r76.friendsOfUser[ctx_r76.ind5 + 3]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r76.friendsOfUser[ctx_r76.ind5 + 3].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r77.friendsOfUser[ctx_r77.ind5 + 4]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r77.friendsOfUser[ctx_r77.ind5 + 4].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r78.friendsOfUser[ctx_r78.ind5 + 5]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r78.friendsOfUser[ctx_r78.ind5 + 5].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r79.friendsOfUser[ctx_r79.ind5 + 6]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r79.friendsOfUser[ctx_r79.ind5 + 6].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r80.friendsOfUser[ctx_r80.ind5 + 7]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r80.friendsOfUser[ctx_r80.ind5 + 7].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r81.friendsOfUser[ctx_r81.ind5 + 8]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r81.friendsOfUser[ctx_r81.ind5 + 8].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r82.friendsOfUser[ctx_r82.ind5 + 9]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r82.friendsOfUser[ctx_r82.ind5 + 9].username, " ");
} }
function ProfileComponent_div_0_div_2_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_33_div_2_div_1_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_33_div_2_div_2_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_0_div_2_div_33_div_2_div_3_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_div_33_div_2_div_4_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_0_div_2_div_33_div_2_div_5_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_0_div_2_div_33_div_2_div_6_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_div_0_div_2_div_33_div_2_div_7_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_div_0_div_2_div_33_div_2_div_8_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProfileComponent_div_0_div_2_div_33_div_2_div_9_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_0_div_2_div_33_div_2_div_10_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_33_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r83.prev5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_33_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r85.next5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.friendsOfUser.length > ctx_r72.ind5 + 9);
} }
function ProfileComponent_div_0_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_33_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_33_div_2_Template, 15, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.friendsOfUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.friendsOfUser.length > 0);
} }
function ProfileComponent_div_0_div_2_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No events found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r88.eventsUserTracked[ctx_r88.ind4]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r89.eventsUserTracked[ctx_r89.ind4 + 1]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r90.eventsUserTracked[ctx_r90.ind4 + 2]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r91.eventsUserTracked[ctx_r91.ind4 + 3]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r92.eventsUserTracked[ctx_r92.ind4 + 4]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r93.eventsUserTracked[ctx_r93.ind4 + 5]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r94.eventsUserTracked[ctx_r94.ind4 + 6]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r95.eventsUserTracked[ctx_r95.ind4 + 7]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r96.eventsUserTracked[ctx_r96.ind4 + 8]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 35);
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trackDays", true)("event", ctx_r97.eventsUserTracked[ctx_r97.ind4 + 9]);
} }
function ProfileComponent_div_0_div_2_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_2_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_4_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_6_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_8_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_10_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_12_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_14_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_16_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_18_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_div_0_div_2_div_34_div_2_app_event_display_20_Template, 1, 2, "app-event-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_34_div_2_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r98.prev4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_34_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r100.next4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.eventsUserTracked.length > ctx_r87.ind4 + 9);
} }
function ProfileComponent_div_0_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_34_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_34_div_2_Template, 25, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.eventsUserTracked.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.eventsUserTracked.length > 0);
} }
function ProfileComponent_div_0_div_2_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No comments found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r103.commentsFromUser[ctx_r103.ind3]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r104.commentsFromUser[ctx_r104.ind3 + 1]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r105.commentsFromUser[ctx_r105.ind3 + 2]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r106.commentsFromUser[ctx_r106.ind3 + 3]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r107.commentsFromUser[ctx_r107.ind3 + 4]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r108.commentsFromUser[ctx_r108.ind3 + 5]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r109.commentsFromUser[ctx_r109.ind3 + 6]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r110.commentsFromUser[ctx_r110.ind3 + 7]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r111.commentsFromUser[ctx_r111.ind3 + 8]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-display", 37);
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", ctx_r112.commentsFromUser[ctx_r112.ind3 + 9]);
} }
function ProfileComponent_div_0_div_2_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_2_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_4_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_6_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_8_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_10_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_12_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_14_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_16_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_18_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_div_0_div_2_div_35_div_2_app_comment_display_20_Template, 1, 1, "app-comment-display", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_35_div_2_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r113.prev3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_35_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r115.next3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.commentsFromUser.length > ctx_r102.ind3 + 9);
} }
function ProfileComponent_div_0_div_2_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_35_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_35_div_2_Template, 25, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.commentsFromUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.commentsFromUser.length > 0);
} }
function ProfileComponent_div_0_div_2_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No events found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r118.eventsFromUser[ctx_r118.ind2]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r119.eventsFromUser[ctx_r119.ind2 + 1]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r120.eventsFromUser[ctx_r120.ind2 + 2]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r121.eventsFromUser[ctx_r121.ind2 + 3]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r122.eventsFromUser[ctx_r122.ind2 + 4]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r123.eventsFromUser[ctx_r123.ind2 + 5]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r124.eventsFromUser[ctx_r124.ind2 + 6]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r125.eventsFromUser[ctx_r125.ind2 + 7]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r126.eventsFromUser[ctx_r126.ind2 + 8]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-display", 39);
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", ctx_r127.eventsFromUser[ctx_r127.ind2 + 9]);
} }
function ProfileComponent_div_0_div_2_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_2_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_4_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_6_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_8_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_10_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_12_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_14_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_16_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_18_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_div_0_div_2_div_36_div_2_app_event_display_20_Template, 1, 1, "app-event-display", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_36_div_2_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r128.prev2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_36_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r130.next2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.eventsFromUser.length > ctx_r117.ind2 + 9);
} }
function ProfileComponent_div_0_div_2_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_36_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_36_div_2_Template, 25, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.eventsFromUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.eventsFromUser.length > 0);
} }
function ProfileComponent_div_0_div_2_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No posts found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r133.postsFromUser[ctx_r133.ind1]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r134.postsFromUser[ctx_r134.ind1 + 1]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r135.postsFromUser[ctx_r135.ind1 + 2]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r136.postsFromUser[ctx_r136.ind1 + 3]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r137.postsFromUser[ctx_r137.ind1 + 4]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r138.postsFromUser[ctx_r138.ind1 + 5]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r139.postsFromUser[ctx_r139.ind1 + 6]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r140.postsFromUser[ctx_r140.ind1 + 7]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r141.postsFromUser[ctx_r141.ind1 + 8]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-display", 41);
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", ctx_r142.postsFromUser[ctx_r142.ind1 + 9]);
} }
function ProfileComponent_div_0_div_2_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_2_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_4_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_6_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_8_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_10_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_12_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_14_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_16_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_18_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_div_0_div_2_div_37_div_2_app_post_display_20_Template, 1, 1, "app-post-display", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_37_div_2_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r143.prev1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_2_div_37_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r145.next1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.postsFromUser.length > ctx_r132.ind1 + 9);
} }
function ProfileComponent_div_0_div_2_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_37_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_37_div_2_Template, 25, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.postsFromUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.postsFromUser.length > 0);
} }
function ProfileComponent_div_0_div_2_div_38_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This user has");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_38_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You have");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_38_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hobby already exists in your profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_38_div_36_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hbby_r150, " ");
} }
function ProfileComponent_div_0_div_2_div_38_div_36_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid tag. Please remove this tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_38_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_div_38_div_36_a_2_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_0_div_2_div_38_div_36_a_3_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r150 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hbby_r150 != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hbby_r150 == null);
} }
function ProfileComponent_div_0_div_2_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Biography:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Province/State:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProfileComponent_div_0_div_2_div_38_a_32_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileComponent_div_0_div_2_div_38_a_33_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProfileComponent_div_0_div_2_div_38_div_35_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProfileComponent_div_0_div_2_div_38_div_36_Template, 4, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.profile.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.profile.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.profile.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.profile.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.userId !== ctx_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.userId === ctx_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r32.hobbies.length, " hobbies listed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.hobbyExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.hobbyNames);
} }
function ProfileComponent_div_0_div_2_div_39_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 48);
} if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/add-comment/2/", ctx_r154.id, "");
} }
function ProfileComponent_div_0_div_2_div_39_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No comments to show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_2_div_39_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-comment", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("commentListChange", function ProfileComponent_div_0_div_2_div_39_div_5_div_1_Template_app_comment_commentListChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r161); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r160.commentList = $event; })("refresh", function ProfileComponent_div_0_div_2_div_39_div_5_div_1_Template_app_comment_refresh_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r161); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r162.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r158 = ctx.$implicit;
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", comment_r158)("comments", ctx_r157.comments)("commentList", ctx_r157.commentList)("typeId", ctx_r157.id)("owner", ctx_r157.id);
} }
function ProfileComponent_div_0_div_2_div_39_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_div_39_div_5_div_1_Template, 3, 5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r156.commentList);
} }
function ProfileComponent_div_0_div_2_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_0_div_2_div_39_input_3_Template, 1, 1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_0_div_2_div_39_div_4_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_0_div_2_div_39_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r33.addCommentOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.commentList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.commentList.length > 0);
} }
function ProfileComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_2_ng_template_1_Template, 14, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_0_div_2_ng_template_3_Template, 14, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfileComponent_div_0_div_2_a_11_Template, 3, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_0_div_2_a_12_Template, 3, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_0_div_2_a_14_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_0_div_2_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProfileComponent_div_0_div_2_a_17_Template, 5, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_div_0_div_2_li_19_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_div_0_div_2_li_20_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProfileComponent_div_0_div_2_li_21_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProfileComponent_div_0_div_2_li_22_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProfileComponent_div_0_div_2_li_23_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ProfileComponent_div_0_div_2_li_24_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProfileComponent_div_0_div_2_li_25_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProfileComponent_div_0_div_2_li_26_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProfileComponent_div_0_div_2_li_27_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProfileComponent_div_0_div_2_li_28_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProfileComponent_div_0_div_2_li_29_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProfileComponent_div_0_div_2_li_30_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProfileComponent_div_0_div_2_li_31_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProfileComponent_div_0_div_2_li_32_Template, 3, 0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileComponent_div_0_div_2_div_33_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProfileComponent_div_0_div_2_div_34_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProfileComponent_div_0_div_2_div_35_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProfileComponent_div_0_div_2_div_36_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ProfileComponent_div_0_div_2_div_37_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProfileComponent_div_0_div_2_div_38_Template, 37, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProfileComponent_div_0_div_2_div_39_Template, 6, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/report/2/", ctx_r3.id, "/.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.visitorObject != null && (ctx_r3.userId === ctx_r3.id || ctx_r3.visitorObject.isAdmin == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.userId === ctx_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.userId === ctx_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.profile.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.profile.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.visitorObject != null && ctx_r3.profile != null && ctx_r3.visitorObject._id !== ctx_r3.profile._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option != 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.option == 1);
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_0_div_1_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_0_div_2_Template, 41, 28, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.profile == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.profile != null);
} }
class ProfileComponent {
    constructor(auth, route, userService, tagService, modalService, commentService, postService, eventService, notificationService, router, doc) {
        this.auth = auth;
        this.route = route;
        this.userService = userService;
        this.tagService = tagService;
        this.modalService = modalService;
        this.commentService = commentService;
        this.postService = postService;
        this.eventService = eventService;
        this.notificationService = notificationService;
        this.router = router;
        this.doc = doc;
        this.profileJson = null;
        //from UserService
        this.profile = null;
        this.email = null;
        this.hobbies = [];
        this.hobbyNames = [];
        this.userComments = [];
        this.hobby = null;
        //option to see user info or comments
        this.option = 1;
        //Auth0
        this.profileObject = null;
        this.tags = [];
        this.tagId = null;
        this.hobbyExists = false;
        //comment components
        this.comments = [];
        this.commentList = [];
        //modal components
        this.closeResult = '';
        this.commentToDelete = null;
        //arrays to display
        this.postsFromUser = [];
        this.eventsFromUser = [];
        this.commentsFromUser = [];
        this.eventsUserTracked = [];
        this.friendsOfUser = [];
        //for prev and next functionality
        this.ind1 = 0;
        this.ind2 = 0;
        this.ind3 = 0;
        this.ind4 = 0;
        this.ind5 = 0;
    }
    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.tagService.getTags().subscribe((tags) => {
            this.tags = tags;
            this.tags.sort((a, b) => this.sortTags(a, b));
            //object for user you are visiting
            this.loadUser();
        }, (err) => {
            alert(err);
        });
    }
    //refresh from Comment component
    refresh(list) {
        this.commentList = list;
        this.loadUser();
    }
    loadUser() {
        this.userService.getUser(this.id).subscribe((user) => {
            this.profile = user;
            if (this.profile['name'] == 'CastError') {
                this.profile = null;
            }
            else {
                this.loadComments();
                this.hobbies = this.profile.hobbies;
                this.auth.user$.subscribe((profile) => {
                    this.profileObject = profile;
                    this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
                    //object for the visitor
                    this.userService.getUser(this.userId).subscribe((user) => {
                        this.visitorObject = user;
                    });
                    this.loadHobbyNames();
                    //load user posts, events, comments
                    this.loadArrays();
                });
            }
        });
    }
    loadComments() {
        this.commentService.getComments().subscribe((comments) => {
            this.comments = comments;
            this.comments = comments;
            this.commentList = [];
            for (let i = comments.length - 1; i >= 0; i--) {
                if (comments[i].profile === this.id) {
                    this.commentList.push(comments[i]);
                }
            }
        });
    }
    //loads user posts, events, comments
    loadArrays() {
        this.postsFromUser = [];
        this.eventsFromUser = [];
        this.eventsUserTracked = [];
        this.commentsFromUser = [];
        this.friendsOfUser = [];
        this.postService.getPosts().subscribe((posts) => {
            for (let i = posts.length - 1; i >= 0; i--) {
                if (posts[i].user === this.profile._id) {
                    this.postsFromUser.push(posts[i]);
                }
            }
        });
        this.eventService.getEvents().subscribe((events) => {
            for (let i = events.length - 1; i >= 0; i--) {
                if (events[i].user === this.profile._id) {
                    this.eventsFromUser.push(events[i]);
                }
                if (events[i].attendees[1].includes(this.profile._id) ||
                    events[i].attendees[0].includes(this.profile._id)) {
                    this.eventsUserTracked.push(events[i]);
                }
            }
            this.eventsUserTracked.sort((a, b) => this.sortTrackedEvents(a, b));
        });
        this.commentService.getComments().subscribe((comments) => {
            for (let i = comments.length - 1; i >= 0; i--) {
                if (comments[i].user === this.profile._id) {
                    this.commentsFromUser.push(comments[i]);
                }
            }
        });
        this.userService.getUsers().subscribe((users) => {
            for (let i = users.length - 1; i >= 0; i--) {
                if (this.profile.friends['3'].includes(users[i]._id)) {
                    this.friendsOfUser.push(users[i]);
                }
            }
        });
    }
    loadHobbyNames() {
        for (let i = 0; i < this.hobbies.length; i++) {
            this.tagService.getTag(this.hobbies[i]).subscribe((hobby) => {
                this.hobbyObject = hobby;
                if (this.hobbyObject == null) {
                    this.hobbyNames[i] = null;
                }
                else {
                    this.hobbyNames[i] = this.hobbyObject.name;
                }
            });
        }
        this.hobbyObject = null;
    }
    //delete user
    deleteUser(id) {
        for (var i = this.commentsFromUser.length - 1; i >= 0; i--) {
            if (this.commentsFromUser[i].user == id) {
                this.commentService.deleteComment(this.commentsFromUser[i]._id).subscribe();
                this.commentsFromUser.splice(i, 1);
            }
        }
        for (var i = this.postsFromUser.length - 1; i >= 0; i--) {
            if (this.postsFromUser[i].user == id) {
                this.postService.deletePost(this.postsFromUser[i]._id).subscribe();
                this.postsFromUser.splice(i, 1);
            }
        }
        for (var i = this.eventsFromUser.length - 1; i >= 0; i--) {
            if (this.eventsFromUser[i].user == id) {
                this.eventService.deleteEvent(this.eventsFromUser[i]._id).subscribe();
                this.eventsFromUser.splice(i, 1);
            }
        }
        this.userService.deleteUser(id).subscribe();
    }
    //Comment functionalities
    //removes comment
    deleteComment(id) {
        var comments = this.comments;
        this.commentService.deleteComment(id).subscribe((data) => {
            for (var i = 0; i < comments.length; i++) {
                if (comments[i]._id == id) {
                    comments.splice(i, 1);
                }
            }
            for (var i = 0; i < this.commentList.length; i++) {
                if (this.commentList[i]._id == id) {
                    this.commentList.splice(i, 1);
                }
            }
            this.commentService
                .getComments()
                .subscribe((comments) => (this.comments = comments));
        });
    }
    //tag methods
    sortTags(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    }
    //sort tracked events by number of days left
    sortTrackedEvents(a, b) {
        var tempDate = new Date(a.date_event);
        tempDate.setTime(tempDate.getTime() + -60000 * tempDate.getTimezoneOffset());
        var aTime = tempDate.getTime();
        tempDate = new Date(b.date_event);
        tempDate.setTime(tempDate.getTime() + -60000 * tempDate.getTimezoneOffset());
        var bTime = tempDate.getTime();
        var aTrack = aTime - (new Date()).getTime();
        var bTrack = bTime - (new Date()).getTime();
        if (aTrack > 0 && bTrack < 0) {
            return -1;
        }
        else if (bTrack > 0 && aTrack < 0) {
            return 1;
        }
        if (aTrack > 0 && bTrack > 0) {
            if (aTrack < bTrack) {
                return -1;
            }
            else if (aTrack > bTrack) {
                return 1;
            }
        }
        if (aTrack <= 0 && bTrack <= 0) {
            if (aTrack < bTrack) {
                return 1;
            }
            else if (aTrack > bTrack) {
                return -1;
            }
        }
        else {
            return 0;
        }
    }
    //comment likes code
    likeComment(id) {
        this.commentService.getComment(id).subscribe((comment) => {
            this.commentToLike = comment;
            this.commentMap = this.commentToLike.likes;
            //like comment
            if (!this.commentMap['1'].includes(this.userId)) {
                this.commentMap['1'].push(this.userId);
                var link = 'profile'; // post, event, or profile
                var userToNotify = this.profile._id; //id of owner of post, event or profile
                var idToCommentOn = this.id; //id of post, event, or profile
                const newNotification = {
                    text: this.visitorObject.username + ' liked your comment. ',
                    linkType: link,
                    user: userToNotify,
                    idToLink: idToCommentOn,
                    date_created: new Date(),
                    date_modified: null,
                    newNotif: true,
                };
                this.notificationService.addNotification(newNotification).subscribe();
            }
            //unlike comment
            else {
                for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
                    if (this.commentMap['1'][i] === this.userId) {
                        this.commentMap['1'].splice(i, 1);
                    }
                }
            }
            //remove user from dislike section if user had disliked it
            for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
                if (this.commentMap['-1'][i] === this.userId) {
                    this.commentMap['-1'].splice(i, 1);
                }
            }
            this.commentToLike.likes = this.commentMap;
            this.commentService
                .patchComment(id, this.commentToLike)
                .subscribe((comment) => {
                this.commentToLike = null;
                this.commentService.getComments().subscribe((comments) => {
                    this.comments = comments;
                    this.commentList = [];
                    for (let i = comments.length - 1; i >= 0; i--) {
                        if (comments[i].profile === this.id) {
                            this.commentList.push(comments[i]);
                        }
                    }
                });
            });
        });
    }
    dislikeComment(id) {
        this.commentService.getComment(id).subscribe((comment) => {
            this.commentToLike = comment;
            this.commentMap = this.commentToLike.likes;
            //dislike comment
            if (!this.commentMap['-1'].includes(this.userId)) {
                this.commentMap['-1'].push(this.userId);
            }
            //un-dislike comment
            else {
                for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
                    if (this.commentMap['-1'][i] === this.userId) {
                        this.commentMap['-1'].splice(i, 1);
                    }
                }
            }
            //remove user from like section if user had liked it
            for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
                if (this.commentMap['1'][i] === this.userId) {
                    this.commentMap['1'].splice(i, 1);
                }
            }
            this.commentToLike.likes = this.commentMap;
            this.commentService
                .patchComment(id, this.commentToLike)
                .subscribe((comment) => {
                this.commentToLike = null;
                this.commentService.getComments().subscribe((comments) => {
                    this.comments = comments;
                    this.commentList = [];
                    for (let i = comments.length - 1; i >= 0; i--) {
                        if (comments[i].profile === this.id) {
                            this.commentList.push(comments[i]);
                        }
                    }
                });
            });
        });
    }
    //modal code
    deleteUserOption(content, id) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-post' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this.deleteUser(id);
            if (this.visitorObject._id == id) {
                this.auth.logout({ returnTo: this.doc.location.origin });
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openComment(content, id) {
        this.commentToDelete = id;
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-comment' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            if (this.commentToDelete != null) {
                this.deleteComment(this.commentToDelete);
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    setOption(number) {
        this.option = number;
    }
    //friend request options
    addFriend() {
        this.visitorObject.friends['1'].push(this.profile._id);
        for (let i = this.visitorObject.friends['2'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['2'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['2'].splice(i, 1);
            }
        }
        for (let i = this.visitorObject.friends['3'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['3'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['3'].splice(i, 1);
            }
        }
        this.userService
            .patchUser(this.visitorObject._id, this.visitorObject)
            .subscribe();
        this.profile.friends['2'].push(this.visitorObject._id);
        for (let i = this.profile.friends['1'].length - 1; i >= 0; i--) {
            if (this.profile.friends['1'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['1'].splice(i, 1);
            }
        }
        for (let i = this.profile.friends['3'].length - 1; i >= 0; i--) {
            if (this.profile.friends['3'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['3'].splice(i, 1);
            }
        }
        this.userService.patchUser(this.profile._id, this.profile).subscribe();
        var link = 'profile'; // post, event, or profile
        var userToNotify = this.profile._id; //id of owner of post, event or profile
        const newNotification = {
            text: this.visitorObject.username + ' sent you a friend request',
            linkType: link,
            user: userToNotify,
            idToLink: this.visitorObject._id,
            date_created: new Date(),
            date_modified: null,
            newNotif: true,
            isClosed: false,
        };
        this.notificationService.addNotification(newNotification).subscribe();
        this.loadArrays();
    }
    cancelFriend() {
        for (let i = this.visitorObject.friends['1'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['1'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['1'].splice(i, 1);
            }
        }
        for (let i = this.visitorObject.friends['2'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['2'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['2'].splice(i, 1);
            }
        }
        for (let i = this.visitorObject.friends['3'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['3'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['3'].splice(i, 1);
            }
        }
        this.userService
            .patchUser(this.visitorObject._id, this.visitorObject)
            .subscribe();
        for (let i = this.profile.friends['1'].length - 1; i >= 0; i--) {
            if (this.profile.friends['1'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['1'].splice(i, 1);
            }
        }
        for (let i = this.profile.friends['2'].length - 1; i >= 0; i--) {
            if (this.profile.friends['2'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['2'].splice(i, 1);
            }
        }
        for (let i = this.profile.friends['3'].length - 1; i >= 0; i--) {
            if (this.profile.friends['3'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['3'].splice(i, 1);
            }
        }
        this.userService.patchUser(this.profile._id, this.profile).subscribe();
        this.loadArrays();
    }
    acceptFriend() {
        this.visitorObject.friends['3'].push(this.profile._id);
        for (let i = this.visitorObject.friends['2'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['2'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['2'].splice(i, 1);
            }
        }
        for (let i = this.visitorObject.friends['1'].length - 1; i >= 0; i--) {
            if (this.visitorObject.friends['1'][i].includes('' + this.profile._id)) {
                this.visitorObject.friends['1'].splice(i, 1);
            }
        }
        this.userService
            .patchUser(this.visitorObject._id, this.visitorObject)
            .subscribe();
        this.profile.friends['3'].push(this.visitorObject._id);
        for (let i = this.profile.friends['1'].length - 1; i >= 0; i--) {
            if (this.profile.friends['1'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['1'].splice(i, 1);
            }
        }
        for (let i = this.profile.friends['2'].length - 1; i >= 0; i--) {
            if (this.profile.friends['2'][i].includes('' + this.visitorObject._id)) {
                this.profile.friends['2'].splice(i, 1);
            }
        }
        this.userService.patchUser(this.profile._id, this.profile).subscribe();
        var link = 'profile'; // post, event, or profile
        var userToNotify = this.profile._id; //id of owner of post, event or profile
        const newNotification = {
            text: this.visitorObject.username + ' accepted your friend request',
            linkType: link,
            user: userToNotify,
            idToLink: this.visitorObject._id,
            date_created: new Date(),
            date_modified: null,
            newNotif: true,
            isClosed: false,
        };
        this.notificationService.addNotification(newNotification).subscribe();
        this.loadArrays();
    }
    prev1() {
        if (this.ind1 > 0) {
            this.ind1 = this.ind1 - 10;
        }
    }
    next1() {
        if (this.ind1 + 10 < this.postsFromUser.length) {
            this.ind1 = this.ind1 + 10;
        }
    }
    prev2() {
        if (this.ind2 > 0) {
            this.ind2 = this.ind2 - 10;
        }
    }
    next2() {
        if (this.ind2 + 10 < this.eventsFromUser.length) {
            this.ind2 = this.ind2 + 10;
        }
    }
    prev3() {
        if (this.ind3 > 0) {
            this.ind3 = this.ind3 - 10;
        }
    }
    next3() {
        if (this.ind3 + 10 < this.commentsFromUser.length) {
            this.ind3 = this.ind3 + 10;
        }
    }
    prev4() {
        if (this.ind4 > 0) {
            this.ind4 = this.ind4 - 10;
        }
    }
    next4() {
        if (this.ind4 + 10 < this.eventsUserTracked.length) {
            this.ind4 = this.ind4 + 10;
        }
    }
    prev5() {
        if (this.ind5 > 0) {
            this.ind5 = this.ind5 - 10;
        }
    }
    next5() {
        if (this.ind5 + 10 < this.friendsOfUser.length) {
            this.ind5 = this.ind5 + 10;
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "card", 4, "ngIf"], [4, "ngIf"], [1, "card"], [1, "card-body"], ["userContent", ""], ["commentContent", ""], ["type", "button", "value", "Report", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/flag.svg", "alt", "Report", "width", "100%", "height", "100%"], [1, "card-title"], ["style", "color: white", "class", "badge bg-success", 4, "ngIf"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngIf"], [1, "modal-header"], ["id", "modal-account", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "routerLink", "/", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["id", "modal-comment", 1, "modal-title"], ["type", "button", "value", "Delete", 1, "btn", "btn-danger", "btn-sm", "float-right", 3, "click"], ["src", "/assets/img/trash.svg", "alt", "Delete", "width", "100%", "height", "100%"], ["type", "button", "value", "Edit", 1, "btn", "btn-primary", "btn-sm", "float-right", 3, "routerLink"], ["src", "/assets/img/pencil-square.svg", "alt", "Edit", "width", "100%", "height", "100%"], [1, "badge", "bg-success", 2, "color", "white"], [1, "btn", "btn-primary", 3, "click"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "active"], [1, "nav-link", 3, "click"], ["class", "card-body", 3, "routerLink", 4, "ngIf"], [1, "card-body", 3, "routerLink"], [3, "trackDays", "event", 4, "ngIf"], [3, "trackDays", "event"], [3, "comment", 4, "ngIf"], [3, "comment"], [3, "event", 4, "ngIf"], [3, "event"], [3, "post", 4, "ngIf"], [3, "post"], ["type", "text", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-warning"], [1, "badge", "badge-secondary"], ["type", "button", "value", "Add Comment", "class", "btn btn-primary btn-sm", 3, "routerLink", 4, "ngIf"], ["type", "button", "value", "Add Comment", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["type", "2", 3, "comment", "comments", "commentList", "typeId", "owner", "commentListChange", "refresh"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _event_display_event_display_component__WEBPACK_IMPORTED_MODULE_11__["EventDisplayComponent"], _comment_display_comment_display_component__WEBPACK_IMPORTED_MODULE_12__["CommentDisplayComponent"], _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_13__["PostDisplayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_14__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"] }, { type: _frontend_src_app_services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"] }, { type: _frontend_src_app_services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function ReportComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reason is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report sent to admin team.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_div_0_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/post/", ctx_r4.idOfContent, "");
} }
function ReportComponent_div_0_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/event/", ctx_r5.idOfContent, "");
} }
function ReportComponent_div_0_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r6.idOfContent, "");
} }
function ReportComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ReportComponent_div_0_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Report Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReportComponent_div_0_div_12_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportComponent_div_0_div_13_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReportComponent_div_0_a_14_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReportComponent_div_0_a_15_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReportComponent_div_0_a_16_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.reportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.blankContent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.edited == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventOrPost == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventOrPost == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventOrPost == 2);
} }
class ReportComponent {
    constructor(commentService, auth, userService, route, notificationService, fb) {
        this.commentService = commentService;
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.notificationService = notificationService;
        this.fb = fb;
        this.content = '';
        this.userId = null;
        this.profileObject = null;
        this.edited = false;
        this.blankContent = false;
    }
    ngOnInit() {
        this.eventOrPost = Number(this.route.snapshot.paramMap.get('num'));
        //id of post/event/profile
        this.idOfContent = this.route.snapshot.paramMap.get('id');
        //actual comment id
        this.commentId = this.route.snapshot.paramMap.get('commentId');
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.userId)
                .subscribe((user) => (this.userObject = user));
        });
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        });
        this.reportForm = this.fb.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onSubmit() {
        if (!this.reportForm.valid) {
            this.edited = false;
            this.blankContent = true;
        }
        else {
            this.blankContent = false;
            this.edited = true;
            var link = ""; // post, event, or profile
            if (this.eventOrPost == 0) {
                link = 'post';
            }
            else if (this.eventOrPost == 1) {
                link = 'event';
            }
            else if (this.eventOrPost == 2) {
                link = 'profile';
            }
            //if comment id exists
            if (this.commentId != '.') {
                this.commentService.getComment(this.commentId).subscribe((comment) => {
                    for (let i = 0; i < this.users.length; i++) {
                        if (this.users[i].isAdmin) {
                            var newNotification = {
                                text: this.userObject.username +
                                    ' reported ' +
                                    comment.author +
                                    "'s comment, '" + comment.content + "' in a " +
                                    link + ' with the following reason: ' + this.reportForm.value.content,
                                linkType: link,
                                user: this.users[i]._id,
                                idToLink: this.idOfContent,
                                date_created: new Date(),
                                date_modified: null,
                                newNotif: true,
                                isClosed: false,
                            };
                            this.notificationService.addNotification(newNotification).subscribe();
                        }
                    }
                });
            }
            //comment does not exist
            else {
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].isAdmin) {
                        var newNotification = {
                            text: this.userObject.username + ' reported the following ' + link + ' with the following reason: ' + this.reportForm.value.content,
                            linkType: link,
                            user: this.users[i]._id,
                            idToLink: this.idOfContent,
                            date_created: new Date(),
                            date_modified: null,
                            newNotif: true,
                            isClosed: false,
                        };
                        this.notificationService.addNotification(newNotification).subscribe();
                    }
                }
            }
        }
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "card"], [1, "card-body"], [3, "formGroup", "submit"], [2, "color", "red"], ["type", "text", "formControlName", "content", "name", "content", "placeholder", "Add Reason here", 1, "card-text", 2, "width", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["type", "submit", "value", "Add", 1, "btn", "btn-primary", "btn-sm"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReportComponent_div_0_Template, 18, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.css'],
            }]
    }], function () { return [{ type: _frontend_src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _frontend_src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tag-options/tag-options.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tag-options/tag-options.component.ts ***!
  \*****************************************************************/
/*! exports provided: TagOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagOptionsComponent", function() { return TagOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function TagOptionsComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", tag_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r3.name);
} }
function TagOptionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hobby already exists in your post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagOptionsComponent_a_10_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hbby_r4, " ");
} }
function TagOptionsComponent_a_10_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid tag. Please remove this tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagOptionsComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TagOptionsComponent_a_10_a_2_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagOptionsComponent_a_10_a_3_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagOptionsComponent_a_10_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r5 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteHobby(ctx_r9.tags[i_r5]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hbby_r4 != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hbby_r4 == null);
} }
class TagOptionsComponent {
    constructor(auth, userService, route, tagService) {
        this.auth = auth;
        this.userService = userService;
        this.route = route;
        this.tagService = tagService;
        //tag components
        this.tagOptions = [];
        this.tagId = null;
        this.hobbyNames = [];
        this.hobbyExists = false;
    }
    ngOnInit() {
        this.tagService.getTags().subscribe(tags => {
            this.tagOptions = tags;
            this.tagOptions.sort((a, b) => this.sortTags(a, b));
            this.loadHobbyNames();
        });
    }
    //tag methods
    sortTags(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    }
    loadHobbyNames() {
        for (let i = 0; i < this.tags.length; i++) {
            this.tagService.getTag(this.tags[i]).subscribe(hobby => {
                this.hobbyObject = hobby;
                if (this.hobbyObject == null) {
                    this.hobbyNames[i] = null;
                }
                else {
                    this.hobbyNames[i] = this.hobbyObject.name;
                }
            });
        }
        this.hobbyObject = null;
    }
    addHobby() {
        if (this.tagId == null) {
            this.hobbyExists = false;
        }
        else if (this.tags.includes(this.tagId)) {
            this.hobbyExists = true;
        }
        else {
            this.hobbyExists = false;
            this.tags.push(this.tagId);
            this.tagId = null;
        }
        this.loadHobbyNames();
    }
    deleteHobby(hobby) {
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i] == hobby) {
                this.tags.splice(i, 1);
                this.hobbyNames.splice(i, 1);
            }
        }
        this.loadHobbyNames();
    }
}
TagOptionsComponent.ɵfac = function TagOptionsComponent_Factory(t) { return new (t || TagOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"])); };
TagOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagOptionsComponent, selectors: [["app-tag-options"]], inputs: { tags: "tags" }, decls: 11, vars: 4, consts: [[1, "card-title"], ["name", "tags", "id", "tags", "name", "tagId", 3, "ngModel", "ngModelChange"], ["selected", "true", "value", "", "disabled", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "value", "Add", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["src", "/assets/img/plus-circle.svg", "alt", "Add", "width", "100%", "height", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value"], ["role", "alert", 1, "alert", "alert-warning"], [1, "badge", "badge-secondary"], [4, "ngIf"], [1, "badge", "badge-secondary", 3, "click"]], template: function TagOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TagOptionsComponent_Template_select_ngModelChange_3_listener($event) { return ctx.tagId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select Hobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TagOptionsComponent_option_6_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagOptionsComponent_Template_button_click_7_listener() { return ctx.addHobby(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TagOptionsComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TagOptionsComponent_a_10_Template, 6, 2, "a", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tagId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hobbyExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hobbyNames);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnLW9wdGlvbnMvdGFnLW9wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag-options',
                templateUrl: './tag-options.component.html',
                styleUrls: ['./tag-options.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"] }]; }, { tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/tag/tag.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tag/tag.component.ts ***!
  \*************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function TagComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " The Tags page is only available to Admins of this website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagComponent_div_0_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tag name is blank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagComponent_div_0_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tag added successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagComponent_div_0_div_2_div_13_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r7.name, " ");
} }
function TagComponent_div_0_div_2_div_13_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid tag. Please remove this tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagComponent_div_0_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TagComponent_div_0_div_2_div_13_a_2_Template, 2, 1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagComponent_div_0_div_2_div_13_a_3_Template, 2, 0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_div_0_div_2_div_13_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const tag_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.deleteTag(tag_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r7 != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r7 == null);
} }
function TagComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TagComponent_div_0_div_2_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TagComponent_div_0_div_2_div_11_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TagComponent_div_0_div_2_div_12_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TagComponent_div_0_div_2_div_13_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.tagForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blankName == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.added == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tags);
} }
function TagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagComponent_div_0_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TagComponent_div_0_div_2_Template, 14, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && !ctx_r0.userObject.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userObject != null && ctx_r0.userObject.isAdmin);
} }
class TagComponent {
    constructor(tagService, http, userService, auth, fb) {
        this.tagService = tagService;
        this.userService = userService;
        this.auth = auth;
        this.fb = fb;
        this.tags = [];
        this.tag = null;
        this.name = null;
        this.blankName = false;
        this.added = false;
        this.userId = null;
        this.userObject = null;
        this.profileObject = null;
    }
    ngOnInit() {
        this.auth.user$.subscribe((profile) => {
            this.profileObject = profile;
            this.userId = this.profileObject.sub.substring(6, this.profileObject.sub.length);
            this.userService
                .getUser(this.userId)
                .subscribe((user) => (this.userObject = user));
        });
        this.tagForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.tagService.getTags().subscribe((tags) => {
            this.tags = tags;
            this.tags.sort((a, b) => this.sortTags(a, b));
        });
    }
    sortTags(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    }
    onSubmit() {
        if (!this.tagForm.valid) {
            this.blankName = true;
            this.added = false;
        }
        else {
            this.blankName = false;
            this.added = true;
            const newTag = {
                name: this.tagForm.value.name,
            };
            this.tagService.addTag(newTag).subscribe((tag) => {
                this.tags.push(tag);
                this.tagService.getTags().subscribe((tags) => {
                    this.tags = tags;
                    this.tags.sort((a, b) => this.sortTags(a, b));
                });
            });
        }
    }
    deleteTag(id) {
        var tags = this.tags;
        this.tagService.deleteTag(id).subscribe((data) => {
            for (var i = 0; i < tags.length; i++) {
                if (tags[i]._id == id) {
                    tags.splice(i, 1);
                }
            }
            this.tagService.getTags().subscribe((tags) => {
                this.tags = tags;
                this.tags.sort((a, b) => this.sortTags(a, b));
            });
        });
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["app-tag"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "card-title"], [2, "color", "red"], ["type", "text", "formControlName", "name", "name", "name", "placeholder", "Add Tag here", 1, "card-text", 2, "width", "100%"], ["type", "submit", "value", "Add", 1, "btn", "btn-primary", "btn-sm"], ["src", "/assets/img/plus-circle.svg", "alt", "Add", "width", "100%", "height", "100%"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"], [1, "badge", "badge-secondary"], [4, "ngIf"], [1, "badge", "badge-secondary", 3, "click"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TagComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag',
                templateUrl: './tag.component.html',
                styleUrls: ['./tag.component.css'],
            }]
    }], function () { return [{ type: _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"] }, { type: _frontend_src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tags-list/tags-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tags-list/tags-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TagsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListComponent", function() { return TagsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../frontend/src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TagsListComponent_a_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hbby_r1, " ");
} }
function TagsListComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TagsListComponent_a_3_a_2_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hbby_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hbby_r1 != null);
} }
class TagsListComponent {
    constructor(tagService) {
        this.tagService = tagService;
        //tag components
        this.tagOptions = [];
        this.tagId = null;
        this.hobbyNames = [];
    }
    ngOnInit() {
        this.tagService.getTags().subscribe((tags) => {
            this.tagOptions = tags;
            this.tagOptions.sort((a, b) => this.sortTags(a, b));
            this.loadHobbyNames();
        });
    }
    //tag methods
    sortTags(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    }
    loadHobbyNames() {
        for (let i = 0; i < this.tags.length; i++) {
            this.tagService.getTag(this.tags[i]).subscribe((hobby) => {
                this.hobbyObject = hobby;
                if (this.hobbyObject == null) {
                    this.hobbyNames[i] = null;
                }
                else {
                    this.hobbyNames[i] = this.hobbyObject.name;
                }
            });
        }
        this.hobbyObject = null;
    }
}
TagsListComponent.ɵfac = function TagsListComponent_Factory(t) { return new (t || TagsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_1__["TagService"])); };
TagsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsListComponent, selectors: [["app-tags-list"]], inputs: { tags: "tags" }, decls: 4, vars: 1, consts: [[1, "card-title"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-secondary"], [4, "ngIf"]], template: function TagsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagsListComponent_a_3_Template, 3, 1, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hobbyNames);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFncy1saXN0L3RhZ3MtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags-list',
                templateUrl: './tags-list.component.html',
                styleUrls: ['./tags-list.component.css']
            }]
    }], function () { return [{ type: _frontend_src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_1__["TagService"] }]; }, { tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CommentService {
    constructor(http) {
        this.http = http;
    }
    getComments() {
        return this.http.get('http://localhost:3000/api/comments');
        //return this.http.get<Comment[]>('api/comments');
    }
    getComment(id) {
        return this.http.get('http://localhost:3000/api/comment/' + id);
        //return this.http.get<Comment>('api/comment/'+id);
    }
    addComment(newComment) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post('http://localhost:3000/api/comment', newComment, { headers: headers });
        //return this.http.post<Comment>('api/comment',newComment, {headers:headers});
    }
    deleteComment(id) {
        return this.http.delete('http://localhost:3000/api/comment/' + id);
        //return this.http.delete<Comment>('api/comment/'+id);
    }
    patchComment(id, newComment) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.patch('http://localhost:3000/api/comment/' + id, newComment, { headers: headers });
        //return this.http.patch<Comment>('api/comment/'+id,newComment, {headers:headers});
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class EventService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get('http://localhost:3000/api/events');
        //return this.http.get<Event[]>('api/events');
    }
    getEvent(id) {
        return this.http.get('http://localhost:3000/api/event/' + id);
        //return this.http.get<Event>('api/event/'+id);
    }
    addEvent(newEvent) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        return this.http.post('http://localhost:3000/api/event', newEvent, { headers: headers });
        //return this.http.post<Event>('api/event',newEvent, {headers:headers});
    }
    deleteEvent(id) {
        return this.http.delete('http://localhost:3000/api/event/' + id);
        //return this.http.delete<Event>('api/event/'+id);
    }
    patchEvent(id, newEvent) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        return this.http.patch('http://localhost:3000/api/event/' + id, newEvent, { headers: headers });
        //return this.http.patch<Event>('api/event/'+id,newEvent, {headers:headers});
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class NotificationService {
    constructor(http) {
        this.http = http;
    }
    getNotifications() {
        return this.http.get('http://localhost:3000/api/notifications');
        //return this.http.get<Notification[]>('api/notifications');
    }
    getNotification(id) {
        return this.http.get('http://localhost:3000/api/notification/' + id);
        //return this.http.get<Notification>('api/notification/'+id);
    }
    addNotification(newNotification) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post('http://localhost:3000/api/notification', newNotification, { headers: headers });
        //return this.http.post<Notification>('api/notification',newNotification, {headers:headers});
    }
    deleteNotification(id) {
        return this.http.delete('http://localhost:3000/api/notification/' + id);
        //return this.http.delete<Notification>('api/notification/'+id);
    }
    patchNotification(id, newNotification) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.patch('http://localhost:3000/api/notification/' + id, newNotification, { headers: headers });
        //return this.http.patch<Notification>('api/notification/'+id,newNotification, {headers:headers});
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PostService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http.get('http://localhost:3000/api/posts');
        //return this.http.get<Post[]>('api/posts');
    }
    getPost(id) {
        return this.http.get('http://localhost:3000/api/post/' + id);
        //return this.http.get<Post>('api/post/'+id);
    }
    addPost(newPost) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post('http://localhost:3000/api/post', newPost, { headers: headers });
        //return this.http.post<Post>('api/post',newPost, {headers:headers});
    }
    deletePost(id) {
        return this.http.delete('http://localhost:3000/api/post/' + id);
        //return this.http.delete<Post>('api/post/'+id);
    }
    patchPost(id, newPost) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.patch('http://localhost:3000/api/post/' + id, newPost, { headers: headers });
        //return this.http.patch<Post>('api/post/'+id,newPost, {headers:headers});
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tag.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TagService {
    constructor(http) {
        this.http = http;
    }
    getTags() {
        return this.http.get('http://localhost:3000/api/tags');
        //return this.http.get<Tag[]>('api/tags');
    }
    getTag(id) {
        return this.http.get('http://localhost:3000/api/tag/' + id);
        //return this.http.get<Tag>('api/tag/'+id);
    }
    addTag(newTag) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post('http://localhost:3000/api/tag', newTag, { headers: headers });
        //return this.http.post<Tag>('api/tag',newTag, {headers:headers});
    }
    deleteTag(id) {
        return this.http.delete('http://localhost:3000/api/tag/' + id);
        //return this.http.delete<Tag>('api/tag/'+id);
    }
    patchTag(id, newTag) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.patch('http://localhost:3000/api/tag/' + id, newTag, { headers: headers });
        //return this.http.patch<Tag>('api/tag/'+id,newTag, {headers:headers});
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('http://localhost:3000/api/users');
        //return this.http.get<User[]>('api/users');
    }
    getUser(id) {
        return this.http.get('http://localhost:3000/api/user/' + id);
        //return this.http.get<User>('api/user/'+id);
    }
    addUser(newPost) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        return this.http.post('http://localhost:3000/api/user', newPost, { headers: headers });
        //return this.http.post<User>('api/user',newPost, {headers:headers});
    }
    deleteUser(id) {
        return this.http.delete('http://localhost:3000/api/user/' + id);
        //return this.http.delete<User>('api/user/'+id);
    }
    patchUser(id, newUser) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        return this.http.patch('http://localhost:3000/api/user/' + id, newUser, { headers: headers });
        //return this.http.patch<User>('api/user/'+id,newUser, {headers:headers});
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ "./auth_config.json");
var _auth_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../auth_config.json */ "./auth_config.json", 1);

const environment = {
    production: false,
    auth: {
        domain: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["domain"],
        clientId: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["clientId"],
        redirectUri: window.location.origin,
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rick\Documents\GitHub\hobby-builder\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map