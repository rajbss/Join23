"use strict";

var app;
(function (app) {
    var ProfilePhoto = (function () {
        function ProfilePhoto(file) {
            this.file = file;
            this.selected = false;
        }
        return ProfilePhoto;
    })();
    /**
     * Controller for editing the users profile
     */
    var ProfileEdit = (function () {
        function ProfileEdit($log, $rootScope, $scope, $q, $state, $ionicActionSheet, $cordovaCamera, AppService, AppUtil) {
            var _this = this;
            // If you increase MAX_PHOTOS you will need to update LocalDB to have more profileN columns in the local SQL db
            this.MAX_PHOTOS = 3;
            this.NO_IMAGE = "img/add.png";
            this.photos = [];
            this.$log = $log;
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.$q = $q;
            this.$state = $state;
            this.$ionicActionSheet = $ionicActionSheet;
            this.$cordovaCamera = $cordovaCamera;
            this.AppService = AppService;
            this.AppUtil = AppUtil;
            // this.$translate = $translate
            this.$scope.$on("$ionicView.beforeEnter", function () {
                return _this.refresh();
            });
            this.$scope.$on("$ionicView.enter", function () {
                return _this.expandText();
            });
        }
        ProfileEdit.prototype.refresh = function () {
            this.profile = this.AppService.getProfile();
            this.about = this.profile.about;
            this.photos = _.map(this.profile.photos, function (photo) {
                return new ProfilePhoto(photo);
            });
        };
        ProfileEdit.prototype.saveProfile = function () {
            var _this = this;
            var profileUpdate = {};
            profileUpdate.about = this.about;
            this.AppUtil.blockingCall(this.AppService.saveProfile(profileUpdate), function () {
                return _this.refresh();
            });
        };
        ProfileEdit.prototype.selectedCount = function () {
            return _.filter(this.photos, function (photo) {
                return photo.selected;
            }).length;
        };
        /**
         * Deletes the selected photos from the profile
         */
        ProfileEdit.prototype.deletePhotos = function () {
            var _this = this;
            // Extract the unselected photos and update the profile with those
            var remainingPhotos = _.filter(this.photos, function (photo) {
                return !photo.selected;
            });
            var profileUpdate = {};
            profileUpdate.photos = _.map(remainingPhotos, function (photo) {
                return photo.file;
            });
            this.AppUtil.blockingCall(this.AppService.saveProfile(profileUpdate), function () {
                return _this.refresh();
            });
        };
        /**
         * Swaps the position of the selected photos. This should only be called when there is two selected.
         */
        ProfileEdit.prototype.swapPhotos = function () {
            var _this = this;
            // Find the indexes of the two selected photos
            var first = _.findIndex(this.photos, function (photo) {
                return photo.selected;
            });
            var last = _.findLastIndex(this.photos, function (photo) {
                return photo.selected;
            });
            var profileUpdate = {};
            this.swapArrayElements(this.photos, first, last);
            profileUpdate.photos = _.map(this.photos, function (photo) {
                return photo.file;
            });
            this.AppUtil.blockingCall(this.AppService.saveProfile(profileUpdate), function () {
                return _this.refresh();
            });
        };
        /**
         * Toggle the selected state of a photo
         * @param index the photos array index
         */
        ProfileEdit.prototype.toggleSelected = function (photo) {
            photo.selected = !photo.selected;
        };
        /**
         * Add a profile photo
         */
        ProfileEdit.prototype.addPhoto = function () {
            var _this = this;
            var buttons = [{ text: "Take Photo" }, { text: "Gallery" }];
            if (this.$rootScope.facebookConnected) buttons.push({ text: "Facebook" });
            this.$ionicActionSheet.show({
                buttons: buttons,
                titleText: "Select photo source",
                cancelText: "Cancel",
                buttonClicked: function buttonClicked(index) {
                    if (index === 2) {
                        _this.$state.go("^.fb-albums");
                    } else {
                        if (!ionic.Platform.isWebView()) {
                            // this.$ionicPopup.alert({ title: 'Only works on a real phone!' }) // .then(function(){})
                            return true;
                        }
                        var sourceType = index === 0 ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY;
                        var options = {
                            quality: 70,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: sourceType,
                            allowEdit: false,
                            encodingType: Camera.EncodingType.PNG,
                            targetWidth: 800,
                            targetHeight: 800,
                            popoverOptions: CameraPopoverOptions,
                            saveToPhotoAlbum: false
                        };
                        _this.$cordovaCamera.getPicture(options).then(function (imageData) {
                            // TODO don't use root scope - pass as param
                            var dataUrl = "data:image/jpeg;base64," + imageData;
                            _this.$rootScope.cropPhoto = dataUrl;
                            _this.$state.go("^.crop"); // , {imageData: 'data:image/jpeg;base64,' + imageData}
                        }, function (error) {
                            this.AppUtil.toastSimple("Error getting photo");
                            this.$log.error("$cordovaCamera.getPicture error " + JSON.stringify(error));
                        });
                    }
                    return true;
                }
            });
        };
        ProfileEdit.prototype.expandText = function () {
            // var element = document.getElementById('aboutYou')
            var element = document.querySelector("#aboutYou");
            element.style.height = element.scrollHeight + "px";
        };
        /**
         * Swap the elements in an array at indexes x and y.
         *
         * @param (array) The array.
         * @param (a) The index of the first element to swap.
         * @param (b) The index of the second element to swap.
         */
        ProfileEdit.prototype.swapArrayElements = function (array, a, b) {
            var temp = array[a];
            array[a] = array[b];
            array[b] = temp;
        };
        return ProfileEdit;
    })();
    app.ProfileEdit = ProfileEdit;
    ProfileEdit.$inject = ["$log", "$rootScope", "$scope", "$q", "$state", "$ionicActionSheet", "$cordovaCamera", "AppService", "AppUtil"];
    angular.module("controllers").controller("ProfileEdit", ProfileEdit);
})(app || (app = {}));
"use strict";

var app;
(function (app) {
    /**
     * Controller for the social sharing action
     */
    var ShareController = (function () {
        function ShareController($log, $cordovaSocialSharing, socialShareMessage) {
            this.$log = $log;
            this.$cordovaSocialSharing = $cordovaSocialSharing;
            this.socialShareMessage = socialShareMessage;
        }
        ShareController.prototype.share = function () {
            var _this = this;
            this.$cordovaSocialSharing.share(this.socialShareMessage).then(function () {
                _this.$log.debug("Social share action complete");
            }, function (error) {
                _this.$log.error("Social share action error " + JSON.stringify(error));
            });
        };
        return ShareController;
    })();
    app.ShareController = ShareController;
    ShareController.$inject = ["$log", "$cordovaSocialSharing", "socialShareMessage"];
    angular.module("controllers.share", ["constants", "ngCordova.plugins.socialSharing"]).controller("ShareController", ShareController);
})(app || (app = {}));
"use strict";
"use strict";
"use strict";

angular.module("ionicApp").config(["$provide", "parseSubDomain", function ($provide, parseSubDomain) {
    if (!parseSubDomain) {
        console.log("parseSubDomain config value not configured for logging");
        return;
    }
    $provide.decorator("$log", ["$delegate", function ($delegate) {
        var debugFn = $delegate.debug;
        var infoFn = $delegate.info;
        var logFn = $delegate.log;
        var warnFn = $delegate.warn;
        var errorFn = $delegate.error;
        var MAX_RECENT = 10;
        var MIN_TIME_DELAY = 10 * 1000;
        var recent = [];
        var lastError = "";
        var lastSubmitTime = 0;
        // Update the list of recent $log messages
        function updateRecent(args) {
            try {
                if (args[0]) {
                    recent.unshift(args[0]);
                    if (recent.length > MAX_RECENT) recent.pop();
                }
            } catch (e) {}
        }
        $delegate.debug = function () {
            var args = [].slice.call(arguments);
            debugFn.apply(null, args);
            updateRecent(args);
        };
        $delegate.info = function () {
            var args = [].slice.call(arguments);
            infoFn.apply(null, args);
            updateRecent(args);
        };
        $delegate.log = function () {
            var args = [].slice.call(arguments);
            logFn.apply(null, args);
            updateRecent(args);
        };
        $delegate.warn = function () {
            var args = [].slice.call(arguments);
            warnFn.apply(null, args);
            updateRecent(args);
        };
        $delegate.error = function () {
            var args = [].slice.call(arguments);
            errorFn.apply(null, args);
            try {
                var user = Parse.User.current();
                var userId = user ? user.id : "";
                var errorMessage = args[0] || "";
                if (errorMessage !== lastError && Date.now() > lastSubmitTime + MIN_TIME_DELAY) {
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open("POST", "http://" + parseSubDomain + ".parseapp.com/client-log", true);
                    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    var data = "userId=" + encodeURIComponent(userId) + "&message=" + encodeURIComponent(errorMessage) + "&recent=" + encodeURIComponent(JSON.stringify(recent));
                    lastError = errorMessage;
                    lastSubmitTime = Date.now();
                    xmlHttp.send(data);
                }
            } catch (e) {
                console.log("Error submitting error log to server:" + e);
            }
            updateRecent(args);
        };
        return $delegate;
    }]);
}]);
"use strict";

var app;
(function (app) {
    /**
     * Methods for authentication with social sites
     */
    var SocialAuth = (function () {
        function SocialAuth($q, $log, $http, $translate) {
            this.$q = $q;
            this.$log = $log;
            this.$http = $http;
            this.$translate = $translate;
            // $translate(['REQUEST_FAILED']).then(translationsResult => this.translations = translationsResult)
        }
        /*
         * Modified from https://github.com/driftyco/ng-cordova/blob/master/src/plugins/oauth.js
         *
         * Sign into the LinkedIn service
         * https://developer.linkedin.com/docs/oauth2
         *
         * @param    string clientId
         * @param    string clientSecret
         * @param    array appScope - the permission scope to authorise. For example r_basicprofile, r_emailaddress
         * @param    string state - A random string to test again CSRS attacks
         * @return   promise - Resolves to the authentication data
         */
        SocialAuth.prototype.linkedIn = function (clientId, clientSecret, appScope, state) {
            var _this = this;
            var deferred = this.$q.defer();
            if (window.cordova) {
                var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                if (cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                    var browserRef = window.open("https://www.linkedin.com/uas/oauth2/authorization?client_id=" + clientId + "&redirect_uri=http://localhost/callback&scope=" + appScope.join(" ") + "&response_type=code&state=" + state, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                    browserRef.addEventListener("loadstart", function (event) {
                        if (event.url.indexOf("http://localhost/callback") === 0) {
                            var requestToken = event.url.split("code=")[1];
                            _this.$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                            _this.$http({ method: "post", url: "https://www.linkedin.com/uas/oauth2/accessToken", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken }).success(function (data) {
                                deferred.resolve(data);
                            }).error(function (data, status) {
                                deferred.reject("Problem authenticating");
                            })["finally"](function () {
                                setTimeout(function () {
                                    browserRef.close();
                                }, 10);
                            });
                        }
                    });
                    browserRef.addEventListener("exit", function (event) {
                        deferred.reject("The sign in flow was canceled");
                    });
                } else {
                    deferred.reject("Could not find InAppBrowser plugin");
                }
            } else {
                deferred.reject("Cannot authenticate via a web browser");
            }
            return deferred.promise;
        };
        SocialAuth.socialAuthFactory = function ($q, $log, $http, $tanslate) {
            return new SocialAuth($q, $log, $http, $tanslate);
        };
        return SocialAuth;
    })();
    app.SocialAuth = SocialAuth;
    SocialAuth.socialAuthFactory.$inject = ["$q", "$log", "$http", "$translate"];
    angular.module("SocialAuth", ["pascalprecht.translate"]).factory("SocialAuth", SocialAuth.socialAuthFactory);
})(app || (app = {}));
"use strict";

var app;
(function (app) {
    /**
     * Utilities which simplify common actions and abstracts the implementation so it easier to make application wide
     * changes to blocking calls, toasts etc
     */
    var AppUtil = (function () {
        function AppUtil($q, $ionicLoading, $mdToast, $translate, $log) {
            var _this = this;
            this.$q = $q;
            this.$ionicLoading = $ionicLoading;
            this.$mdToast = $mdToast;
            this.$log = $log;
            this.$translate = $translate;
            $translate(["REQUEST_FAILED"]).then(function (translationsResult) {
                return _this.translations = translationsResult;
            });
        }
        /**
         * Shows a toast message
         * @param message
         */
        AppUtil.prototype.toastSimple = function (message) {
            this.$mdToast.show(this.$mdToast.simple().content(message).hideDelay(2000));
        };
        /**
         * Shows a toast message
         * @param translateKey the key used to lookup the translated message
         */
        AppUtil.prototype.toastSimpleTranslate = function (translateKey) {
            var _this = this;
            this.$translate([translateKey]).then(function (result) {
                var translation = result[translateKey];
                if (translation === translateKey) _this.$log.warn("Invalid translation key " + translateKey);
                _this.toastSimple(translation);
            }, function (error) {
                return _this.$log.warn("toast translation error " + JSON.stringify(error));
            });
        };
        /**
         * A utility to simplify the common case of making a server call which blocks the user interface, and provides
         * translation of errors.
         *
         * This is an example of how you might use it:
         * function setLocation = () => AppUtil.blockingCall(
         *        AppService.saveLocation(newLocation),
         *        (result) => {marker.setLocation(result); AppUtil.toastSimple('LOCATION_UPDATED')}
         *        )
         *
         * @param promise the promise to resolve
         * @param successFunction the function to call on resolution of the promise
         * @param errorTranslateKey the translation key to display an error message for on error
         * @param errorMessage if no translation key is provided, then displays this error message on an error
         * @returns {ng.IPromise<any>} the promise passed in as the first argument
         */
        AppUtil.prototype.blockingCall = function (promise, successFunction, errorTranslateKey, errorMessage) {
            var _this = this;
            var ionicLoading = this.$ionicLoading;
            ionicLoading.show({ templateUrl: "loading.html" });
            promise.then(function (result) {
                ionicLoading.hide();
                successFunction(result);
            }, function (error) {
                ionicLoading.hide();
                var customError = _this.resolveErrorMessage(error);
                if (customError) {
                    _this.toastSimple(customError);
                } else if (errorTranslateKey) {
                    _this.toastSimpleTranslate(errorMessage);
                } else if (errorMessage) {
                    _this.toastSimple(errorMessage);
                } else {
                    _this.toastSimple(_this.translations.REQUEST_FAILED);
                }
            });
            return promise;
        };
        /**
         * Converts an error into a human friendly message for particular error messages
         * @param error
         * @returns {string} if there is a custom error message, else null
         */
        AppUtil.prototype.resolveErrorMessage = function (error) {
            this.$log.error(JSON.stringify(error));
            if (error.code) {
                switch (error.code) {
                    case 100 /* CONNECTION_FAILED */:
                        return "Request failed, try again";
                    case 155 /* REQUEST_LIMIT_EXCEEDED */:
                        return "Server busy, try again later";
                    case 209 /* INVALID_SESSION_TOKEN */:
                        // TODO force logout/login
                        return "Invalid session. Log in again";
                    default:
                        return null;
                }
            }
            return null;
        };
        AppUtil.appUtilFactory = function ($q, $ionicLoading, $mdToast, $translate, $log) {
            return new AppUtil($q, $ionicLoading, $mdToast, $translate, $log);
        };
        return AppUtil;
    })();
    app.AppUtil = AppUtil;
    AppUtil.appUtilFactory.$inject = ["$q", "$ionicLoading", "$mdToast", "$translate", "$log"];
    angular.module("AppUtil", ["ionic", "pascalprecht.translate", "ngMaterial"]).factory("AppUtil", AppUtil.appUtilFactory);
})(app || (app = {}));
//# sourceMappingURL=/maps/app.ts.js.map