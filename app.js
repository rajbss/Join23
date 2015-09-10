"use strict";

// From https://github.com/driftyco/ng-cordova/blob/master/src/plugins/socialSharing.js

// install   :      cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
// link      :      https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin

// NOTE: shareViaEmail -> if user cancels sharing email, success is still called
// TODO: add support for iPad

angular.module("ngCordova.plugins.socialSharing", []).factory("$cordovaSocialSharing", ["$q", "$window", function ($q, $window) {

	return {
		share: function share(message, subject, file, link) {
			if (!$window.plugins || !$window.plugins.socialsharing) {
				return $q.reject("socialsharing plugin not found");
			}var q = $q.defer();
			subject = subject || null;
			file = file || null;
			link = link || null;
			$window.plugins.socialsharing.share(message, subject, file, link, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareViaTwitter: function shareViaTwitter(message, file, link) {
			var q = $q.defer();
			file = file || null;
			link = link || null;
			$window.plugins.socialsharing.shareViaTwitter(message, file, link, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareViaWhatsApp: function shareViaWhatsApp(message, file, link) {
			var q = $q.defer();
			file = file || null;
			link = link || null;
			$window.plugins.socialsharing.shareViaWhatsApp(message, file, link, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareViaFacebook: function shareViaFacebook(message, file, link) {
			var q = $q.defer();
			message = message || null;
			file = file || null;
			link = link || null;
			$window.plugins.socialsharing.shareViaFacebook(message, file, link, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareViaFacebookWithPasteMessageHint: function shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint) {
			var q = $q.defer();
			file = file || null;
			link = link || null;
			$window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareViaSMS: function shareViaSMS(message, commaSeparatedPhoneNumbers) {
			var q = $q.defer();
			$window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareViaEmail: function shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr) {
			var q = $q.defer();
			toArr = toArr || null;
			ccArr = ccArr || null;
			bccArr = bccArr || null;
			fileArr = fileArr || null;
			$window.plugins.socialsharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		shareVia: function shareVia(via, message, subject, file, link) {
			var q = $q.defer();
			message = message || null;
			subject = subject || null;
			file = file || null;
			link = link || null;
			$window.plugins.socialsharing.shareVia(via, message, subject, file, link, function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		canShareViaEmail: function canShareViaEmail() {
			var q = $q.defer();
			$window.plugins.socialsharing.canShareViaEmail(function () {
				q.resolve(true);
			}, function () {
				q.reject(false);
			});
			return q.promise;
		},

		canShareVia: function canShareVia(via, message, subject, file, link) {
			var q = $q.defer();
			$window.plugins.socialsharing.canShareVia(via, message, subject, file, link, function (success) {
				q.resolve(success);
			}, function (error) {
				q.reject(error);
			});
			return q.promise;
		},

		available: function available() {
			var q = $q.defer();
			window.plugins.socialsharing.available(function (isAvailable) {
				if (isAvailable) {
					q.resolve();
				} else {
					q.reject();
				}
			});
		}
	};
}]);
"use strict";

var TRANSLATION_EN = {

    OK: "Ok",
    SAVE: "Save",
    SEND: "Send",
    CANCEL: "Cancel",
    LOADING: "Loading",
    REMOVE: "Remove",
    REPORT: "Report",
    LOGOUT: "Logout",

    PASSWORD_RESET_SENT: "Password reset link emailed",
    PASSWORD_LENGTH: "Password must be at least 6 characters",
    INVALID_EMAIL: "Enter a valid email",
    LOGGING_IN_TO_FB: "Logging into Facebook",
    LOGGING_IN_TO_LINKEDIN: "Logging into LinkedIn",
    LOADING_PROFILE: "Loading profile",
    LOADING_FB_PROFILE: "Loading Facebook profile",
    CREATING_ACCOUNT: "Creating account",
    WAITING_FOR_GPS: "Waiting for GPS location",
    LOGIN_ERROR: "Error logging in. Try again later",
    VERIFY_EMAIL_MESSAGE: "Check your inbox for an email to verify your address, then come back and click the button below",
    CHECK_EMAIL_VERIFICATION: "Check Email Verification",
    EMAIL_NOT_VERIFIED: "Email is not verified",
    FIRST_NAME_REQUIRED: "First name is required",
    SURNAME_REQUIRED: "Surname is required",
    BIRTH_DAY_REQUIRED: "Birth day is required",
    BIRTH_MONTH_REQUIRED: "Birth month is required",
    BIRTH_YEAR_REQUIRED: "Birth year is required",
    GENDER_REQUIRED: "Gender is required",
    TERMS_OF_USE: "Terms of Use",
    ME_AND_MY_ACTIVITIES:"Me and My Activities",
    DISCOVER_ACTIVITIES:"Discover Activities",
    
    CREATE_ACTIVITY:"Create Activity",
    FIND_ACTIVITIES:"Find Activities",
    SELECT_PEOPLE:"Select People",
    MY_PREFERENCES:"My Preferences",
    CONTACT_US:"Contact Us",
    
    MENU_PROFILE: "Profile",
    MENU_MATCHES: "Find Matches",
    MENU_CHAT: "Chat",
    MENU_DISCOVERY: "Discovery Preferences",
    MENU_SETTINGS: "App Settings",
    MENU_CONTACT: "Contact Us",
    MENU_SHARE: "Share",

    PROFILE_SETUP_MSG: "We need a couple more details",
    BIRTH_DAY: "Birth day",
    BIRTH_MONTH: "Birth month",
    BIRTH_YEAR: "Birth year",
    FIRST_NAME: "First name",
    GENDER: "Gender",
    MALE: "Male",
    FEMALE: "Female",

    PROFILE_TITLE: "My Profile",
    ABOUT: "About",
    FRIENDS_USING: "My Friends",
    MY_INTERESTS: "My Interests",

    EDIT_PROFILE_TITLE: "Edit Profile",
    ABOUT_YOU: "About You",

    AWAY: "away", // for "5km away"

    ALBUMS: "Albums",
    NO_FB_ALBUMS: "You don't have any Facebook albums",
    ADD_A_PHOTO: "Add a photo",
    CROP_YOUR_PHOTO: "Crop your photo",

    DISCOVERY_TITLE: "Discovery Preferences",
    DISCOVERABLE: "Discoverable",
    SHOW_ME: "Show me",
    GUYS: "Guys",
    GIRLS: "Girls",
    SEARCH_DISTANCE: "Search distance",
    AGED_BETWEEN: "Aged between",

    SETTINGS_TITLE: "App Settings",
    NOTIFICATION_SOUND: "Notification Sound",
    NEW_MATCH: "New match",
    NEW_MESSAGE: "New message",
    SHOW_DISTANCES_IN: "Show distances in",

    NOT_DISCOVERABLE: "You're not discoverable",
    ENABLE_DISCOVERY_TO_MEET: "Enable discovery to meet new people nearby",
    ENABLE_DISCOVERY: "Enable Discovery",
    FINDING_PEOPLE: "Finding people near you",
    NO_ONE_NEW: "There's no one new around you",
    SEARCH_AGAIN: "Search Again",
    LIKE: "Like",
    NOT_LIKE: "Nope",

    LOCATION: "Location",
    SET_LOCATION: "Set Location",
	
    USE_GPS_LOCATION: "Use GPS location",
    GPS_ERROR: "Unable to get GPS location",
    SET_MAP_LOCATION: "Please set your location on the map and press save",

    NO_MATCHES: "You don't have any matches yet.",
    START_SWIPING: "Start swiping",
    MATCHES_LOAD_ERROR: "Unable to load matches",

    ITS_A_MATCH: "It's A Match",
    LIKED_EACH_OTHER: "You and {{name}} have liked each other",
    SEND_MESSAGE: "Send Message",
    KEEP_PLAYING: "Keep Playing",

    REMOVE_MATCH: "Remove match",
    MATCH_OPTIONS: "Match options",
    REMOVE_MATCH_ERROR: "Error removing match. Try again later",
    UNMATCHED: "You were unmatched",
    MATCH_REPORTED: "Match reported",
    WANT_TO_REMOVE_MATCH: "Do you want to remove this match?",

    TYPE_YOUR_MESSAGE: "Type your message",
    MESSAGE_NOT_SENT: "Message not sent. Try again",

    SETTINGS_SAVE_ERROR: "Error saving settings. Try again later",
    REQUEST_FAILED: "Request failed",

    DELETE: "Delete",
    DELETE_ACCOUNT: "Delete your account",

    "": ""
};
"use strict";

var TRANSLATION_DE = {
    LOGGING_IN_TO_FB: "Anmelden bei Facebook",
    LOADING_PROFILE: "Laden profil" };
"use strict";

// Callback for push notifications, which passes it into the Angular code
function onNotification(pnObj) {
	console.log("Received push notification: " + JSON.stringify(pnObj));
	var appService = angular.element(document.body).injector().get("AppService");

	appService.pushNotificationReceived();

	if (pnObj.type == "message") appService.newMessageNotification(pnObj.message);else if (pnObj.type == "match") appService.newMatchNotification(pnObj.matchId);else if (pnObj.type == "removeMatch") appService.removeMatchNotification(pnObj.matchId);
}

function onNotificationOpen(pnObj) {
	console.log("Opened push notification: " + JSON.stringify(pnObj));
	var appService = angular.element(document.body).injector().get("AppService");
	var state = angular.element(document.body).injector().get("$state");

	if (pnObj.type == "message") {
		console.log("going to menu.chat " + pnObj.message.match.id);
		state.go("menu.chat", { matchId: pnObj.message.match.id });
	} else if (pnObj.type == "match") {
		console.log("going to menu.match-profile " + pnObj.matchId);
		state.go("menu.match-profile", { matchId: pnObj.matchId });
	}
}

(function () {

	angular.module("service.app", ["ngCordova", "service.parse", "service.localdb"]).factory("AppService", ["$rootScope", "$timeout", "$http", "$cordovaFacebook", "$cordovaGeolocation", "$cordovaMedia", "$log", "$state", "$q", "$ionicHistory", "ParseService", "LocalDB", "$localStorage", "$interval", "$analytics", function ($rootScope, $timeout, $http, $cordovaFacebook, $cordovaGeolocation, $cordovaMedia, $log, $state, $q, $ionicHistory, ParseService, LocalDB, $localStorage, $interval, $analytics) {

		var server = ParseService;

		// keep a reference to the mutual matches so we can update when a push notification arrives for a new match
		var matches = [];

		// Contains the match/chat ids which have unread chat messages as properties
		var unreadChats = {};
		// The total number of matches/chats that have unread messages. This must be updated when unreadChats is updated
		var unreadChatsCount = 0;

		var profileCache = [];

		// keep a reference to the current chat messages so we can update when a push notification arrives
		var activeChatMatchId = null;
		var activeChatMessages = null;

		// Variables for the polling when push notifications haven't been detected
		var CHAT_SYNC_INTERVAL = 60000;
		var MATCH_SYNC_RATIO = 10; // After how many chat syncs we should also sync the matches
		var syncCount = 0;
		var synchronizeInterval = null;

		var service = {
			// fields
			isLoggedIn: false,
			userId: "",
			fbId: "",
			profile: null,
			potentialMatches: null,
			// methods
			init: init,
			facebookLogin: facebookLogin,
			linkedInLogin: linkedInLogin,
			signUp: signUp,
			logIn: logIn,
			autoLogin: autoLogin,
			reloadUser: reloadUser,
			isEmailVerified: isEmailVerified,
			termsOfUseAgreed: termsOfUseAgreed,
			requestPasswordReset: requestPasswordReset,
			goToNextLoginState: goToNextLoginState,
			loadProfile: loadProfile,
			getProfile: getProfile,
			getProfileById: getProfileById,
			getProfileByMatchId: getProfileByMatchId,
			saveBirthdate: saveBirthdate,
			saveProfile: saveProfile,
			saveSettings: saveSettings,
			enableDiscovery: enableDiscovery,
			getCurrentPosition: getCurrentPosition,
			copyFacebookProfile: copyFacebookProfile,
			setPhoto: setPhoto,
			getPotentialMatches: getPotentialMatches,
			updatePotentialMatches: updatePotentialMatches,
			clearPotentialMatches: clearPotentialMatches,
			newMatchNotification: newMatchNotification,
			removeMatchNotification: removeMatchNotification,
			deleteUnmatched: deleteUnmatched,
			processMatch: processMatch,
			getMutualMatches: getMutualMatches,
			getMatch: getMatch,
			getActiveChat: getActiveChat,
			setChatRead: setChatRead,
			getUnreadChatsCount: getUnreadChatsCount,
			sendChatMessage: sendChatMessage,
			removeMatch: removeMatch,
			reportProfile: reportProfile,
			newMessageNotification: newMessageNotification,
			pushNotificationReceived: pushNotificationReceived,
			resetBadge: resetBadge,
			sendContactMessage: sendContactMessage,
			logout: logout,
			deleteAccount: deleteAccount
		};

		return service;

		function init() {
			LocalDB.init().then(function () {
				return LocalDB.getMatches();
			}).then(function (dbMatches) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = dbMatches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var match = _step.value;

						matches.push(match);
						profileCache[match.profile.id] = match.profile;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}, function (error) {
				return $log.error("Error loading db matches " + JSON.stringify(error));
			});

			server.init();
		}

		function facebookLogin(facebookResponse) {
			$analytics.eventTrack("facebookLogin");
			return server.facebookLogin(facebookResponse).then(function (result) {
				service.userId = server.getUserId();
				return result;
			});
		}

		function linkedInLogin(authData) {
			$analytics.eventTrack("linkedInLogin");
			return server.linkedInLogin(authData).then(function (user) {
				service.userId = user.id;
				return $q.when(user);
			});
		}

		function signUp(email, password) {
			$analytics.eventTrack("signupEmail");
			return server.signUp(email, password).then(function (result) {
				service.userId = server.getUserId();
				return result;
			});
		}

		function logIn(email, password) {
			$analytics.eventTrack("loginEmail");
			return server.logIn(email, password).then(function (result) {
				service.userId = server.getUserId();
				return result;
			});
		}

		function autoLogin() {
			server.autoLogin();
		}

		function reloadUser() {
			return server.reloadUser();
		}

		function isEmailVerified() {
			return server.reloadUser().then(function (user) {
				return user.emailVerified === true;
			});
		}

		/**
   * Set that the user has agreed to the terms of use
   * @returns {IPromise<void>}
   */
		function termsOfUseAgreed() {
			$localStorage.termsOfUseAgreed = true;
			return $q.when();
		}

		function requestPasswordReset(email) {
			$analytics.eventTrack("passwordReset");
			return server.requestPasswordReset(email);
		}

		/**
   * Loads the profile for the current user. Returns a promise as it will need call the serve the first time.
   * @returns {Promise<IProfile>}
   */
		function loadProfile() {
			if (service.profile) {
				return $q.when(service.profile);
			}return server.getProfile().then(function (result) {
				if (!result) return null;

				if (_.isUndefined(result.gps)) result.gps = true; // migration for the new field. Can be deleted sometime
				$log.log("AppService server.getProfile returned " + result);
				service.profile = result;
				return service.profile;
			});
		}

		/**
   * Get the profile for the current user. loadProfile() must be called before this is called.
   * @returns {IProfile}
   */
		function getProfile() {
			return service.profile;
		}

		/**
   * Get the profile for a mutual match
   * @param matchId the mutual match id
   * @returns {Promise<IProfile>}
   */
		function getProfileByMatchId(matchId) {
			$log.debug("getProfileByMatchId " + matchId);

			var match = matches[matchId];
			if (match) {
				var profile = profileCache[match.profileId];
				if (profile) {
					return $q.when(profile);
				}
			}

			return server.getProfileForMatch(matchId).then(function (profile) {
				profileCache[profile.id] = profile;
				return profile;
			});
		}

		function getProfileById(profileId) {
			return profileCache[profileId];
		}

		function goToNextLoginState() {

			var user = Parse.User.current();
			// If users have authenticated with Facebook then don't require email verification
			// Note: there are three states to emailVerified in Parse. undefined means it is not required, eg user signed up before email verification was enabled
			if (!$rootScope.facebookConnected && user.emailVerified === false) {
				go("emailVerification");
				return;
			}

		/*	if (!isProfileValid()) {
			//	go("profileSetup");
			go("menu.home");
				return;
			}
/*
			if (!getProfile().location) {
				go("locationSetup");
				return;
			}

			if (!$localStorage.termsOfUseAgreed) {
				go("termsOfUse");
				return;
			}*/

			// TODO welcome/intro slides

			startSynchronisation();

			go("menu.home");
		}

		function go(state) {
			$ionicHistory.nextViewOptions({
				historyRoot: true,
				disableBack: true
			});
			$state.go(state);
		}

		/**
   * Syncs to the server and starts the polling synchronization if required
   */
		function startSynchronisation() {

			var syncFunction = function () {
				if (++syncCount === MATCH_SYNC_RATIO) {
					syncCount = 0;
					synchronizeMutualMatches().always(synchronizeChatMessages);
				} else {
					synchronizeChatMessages();
				}
			};

			// Sync on startup
			synchronizeMutualMatches().always(synchronizeChatMessages);

			// Check if we need to start polling for updates
			// If we have received a push notification, then we'll rely on them to
			// update while the app is running
			if (!synchronizeInterval && !$localStorage.pushNotificationReceived) {
				$log.log("Starting polling synchronization");
				// Start an interval timer to sync periodically
				synchronizeInterval = $interval(syncFunction, CHAT_SYNC_INTERVAL);
			}
		}

		/**
   * @returns {boolean} if the profile contains the all minimum data required to use the main application
   */
		function isProfileValid() {
			return service.profile.birthdate && service.profile.name && service.profile.gender;
		}

		function getCurrentPosition() {
			// see http://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt
			$log.log("getCurrentPosition()");

			var timeout = 10000;
			var q = $q.defer();

			var geolocFail = function geolocFail() {
				$log.log("$cordovaGeolocation.getCurrentPosition did not return within the timeout");
				q.reject("GEO_ERROR");
			};
			var timer = $timeout(geolocFail, timeout + 1000); // wait an extra second longer than the expected geo timeout

			$cordovaGeolocation.getCurrentPosition().then(function (location) {
				$timeout.cancel(timer);
				$log.log("location " + JSON.stringify(location));
				var geoPoint = server.convertLocation(location.coords.latitude, location.coords.longitude);
				q.resolve(geoPoint);
			}, function (error) {
				$timeout.cancel(timer);
				$log.log("getCurrentPosition error: " + JSON.stringify(error));

				//if(error.code == 1){
				//	alert('You have denied app access to location');
				//} else {
				//	alert('code: '    + error.code    + '\n' +
				//	'message: ' + error.message + '\n');
				//}

				q.reject("GEO_ERROR");
			}, { maximumAge: 3600000, timeout: timeout, enableHighAccuracy: true });

			return q.promise

			// simple way without wrapping in a timer
			//return $cordovaGeolocation.getCurrentPosition().then(function(location){
			//	$log.log(JSON.stringify(location))
			//	return server.convertLocation(location.coords.latitude, location.coords.longitude)
			//}, function(error){
			//	$log.log('position error: ' + JSON.stringify(error))
			//	return $q.reject(error)
			//}, { maximumAge: 1000000, timeout: 2000, enableHighAccuracy: true })
			;
		}

		function saveSettings(profile) {
			var mods = { notifyMatch: profile.notifyMatch, notifyMessage: profile.notifyMessage, distanceType: profile.distanceType };
			return server.saveSettings(service.profile, mods).then(function (result) {
				$log.log("saveSettings result:" + JSON.stringify(result));
				return service.profile;
			});
		}

		/**
   * Update the user profile with their Facebook profile data
   * @returns {ng.IPromise<IProfile>} the user profile
   */
		function copyFacebookProfile() {
			return server.copyFacebookProfile().then(function (profile) {
				service.profile = profile;
				return service.profile;
			});
		}

		function enableDiscovery() {
			return saveProfile({ enabled: true });
		}

		/**
   *
   * @param profileChanges the changes to save, or null if a new profile
   * @returns {IPromise<TResult>}
   */
		function saveProfile(profileChanges) {
			$log.log("saving profile");

			return server.saveProfile(service.profile, profileChanges).then(function (result) {
				return service.profile;
			});
		}

		function logout() {
			$analytics.eventTrack("logout");
			service.userId = null;
			service.fbId = null;
			service.profile = null;
			matches = [];
			profileCache = [];
			activeChatMatchId = null;
			activeChatMessages = null;
			unreadChats = {};
			unreadChatsCount = 0;
			if (synchronizeInterval) {
				$interval.cancel(synchronizeInterval);
				synchronizeInterval = null;
			}
			// TODO wait for all the server/fb logout calls to complete before going to sign-in
			server.logout();
			localStorage.clear();
			$localStorage.$reset();
			LocalDB.deleteDb();
			// TODO do we need to clear the image cache?
			if ($rootScope.facebookConnected) {
				$log.log("logging out of Facebook");
				$cordovaFacebook.logout().then(function (result) {
					$log.log("logged out of facebook");
					delete $rootScope.facebookConnected;
					delete $rootScope.fbAccessToken;
				}, function (error) {
					// possible message from FB JS: FB.logout() called without an access token.
					$log.log("error logging out of Facebook " + JSON.stringify(error));
				});
			}

			$ionicHistory.clearCache();
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go("signin");
		}

		function deleteAccount() {
			$analytics.eventTrack("deleteAccount");
			return server.deleteAccount();
		}

		function deleteUnmatched() {
			return server.deleteUnmatched();
		}

		/**
   * Process a like/pass on a profile
   * @param profile
   * @param {boolean} liked
   * @returns {Promise.<T>}
   */
		function processMatch(profile, liked) {
			$analytics.eventTrack("swipe", { liked: liked ? "true" : "false" });
			return server.processProfile(profile, liked).then(function (match) {
				$log.log("processed match action");
				// If it's a mutual match then store the match with the profile
				if (match != null && match.state == "M") {
					getProfileByMatchId(match.id).then(function (profile) {
						match.profile = profile;
						//	profileCache[profile.id] = profile
						matches.push(match);
						LocalDB.saveMatch(match, profile);
						$rootScope.$broadcast("newMatch", match);
					});
				}
			}, function (error) {
				$log.error("error processing match " + JSON.stringify(error));
			});
		}

		/**
   * Push notification handler for a new mutual match
   * @param matchId
   */
		function newMatchNotification(matchId) {
			// We could have a Parse API call or two less by loading the match directly, but this ensure we're up to date
			// in case a push notification was dropped or not received.
			synchronizeMutualMatches().then(function (newMatches) {
				if (newMatches.length && service.profile.notifyMatch) {
					var media = new Media(filePath("audio/match-notification.mp3"), null, null, null);
					$cordovaMedia.play(media);
				}
			});
		}

		/**
   * Call when the this user removes a matched user
   * @param matchId
   */
		function removeMatch(matchId) {
			$analytics.eventTrack("removeMatch");
			$log.log("removeMatch " + matchId);
			return server.removeMatch(matchId).then(function (result) {
				// remove the match from our local db and memory copy
				LocalDB.deleteMatch(matchId);
				_.remove(matches, { id: matchId });
			});
		}

		/**
   * Called when the other user removes this user (either via push notification or server sync)
   * @param matchId
   */
		function removeMatchNotification(matchId) {
			$log.log("removeMatchNotification " + matchId);
			if (matches) _.remove(matches, { id: matchId });
			if (activeChatMatchId == matchId) {
				activeChatMatchId = null;
				activeChatMessages = null;
				$log.log("cleared active chat from remove notification");
			}
			LocalDB.deleteMatch(matchId);
			$rootScope.$broadcast("matchRemoved", matchId);
		}

		function getPotentialMatches() {
			return service.potentialMatches;
		}

		function updatePotentialMatches() {
			$analytics.eventTrack("searchProfiles");
			return server.searchProfiles(service.profile).then(function (profiles) {
				service.potentialMatches = profiles;
				$rootScope.$broadcast("newPotentialMatches");
				return service.potentialMatches;
			});
		}

		/**
   * Clear the existing search results, e.g. when changing the search settings
   */
		function clearPotentialMatches() {
			service.potentialMatches = null;
		}

		function getMutualMatches() {
			$log.log("getMutualMatches()");
			if (matches != null) {
				return matches;
			}

			matches = [];

			return LocalDB.getMatches().then(function (dbMatches) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = dbMatches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var match = _step.value;

						matches.push(match);
						profileCache[match.profile.id] = match.profile;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				// load any new matches from the server asynchronously
				synchronizeMutualMatches();
				return matches;
			});
		}

		/**
   * Load the mutual matches from the server and update our local copy
   * @returns {Promise<IMatch[]> any new mutual matches
   */
		function synchronizeMutualMatches() {
			$log.debug("synchronizeMutualMatches()");
			return server.reloadUser().then(function (user) {

				var localMatchIds = _.pluck(matches, "id");
				var serverMatchIds = user.matches;
				var toRemove = _.difference(localMatchIds, serverMatchIds);
				var toAdd = _.difference(serverMatchIds, localMatchIds);
				$log.debug("Found " + toRemove.length + " mutual matches to remove");
				$log.debug("Found " + toAdd.length + " mutual matches to add");

				// Ok to remove these async in the background. It should complete by the following server call anyway.
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = toRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var removeId = _step.value;

						removeMatchNotification(removeId);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return server.getMatches(toAdd);
			}).then(function (newMatches) {
				$log.debug("loaded " + newMatches.length + " matches to sync");
				var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = newMatches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var match = _step.value;

						$log.debug("syncing new match " + match.id);
						// TODO extract into some nice Date util methods
						var createdAt = new Date(match.createdAt);
						var formattedDate = createdAt.getDate() + " " + months[createdAt.getMonth()];
						match.lastMessage = "Matched on " + formattedDate;
						matches.unshift(match);
						var profile = match.profile;
						LocalDB.saveMatch(match, profile);
						profileCache[profile.id] = profile;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				if (newMatches.length) {}

				return newMatches;
			})
			// log any errors an rethrow?
			;
		}

		/**
   * Loads the chat messages from the server since the date stored in $localStorage.lastChatSync, or from the
   * beginning if there is no local storage value yet
   * @returns {Promise.<ChatMessage[]>}
   */
		function synchronizeChatMessages() {

			if (matches.length === 0) {
				return $q.when([]);
			}var matchesById = _.indexBy(matches, "id");
			var lastChatSync = $localStorage.lastChatSync;
			$log.info("synchronizing chat messages" + (lastChatSync ? " from " + lastChatSync : ""));

			return server.loadChatMessages(lastChatSync).then(function (messages) {
				$log.info("Found " + messages.length + " chat messages to synchronize");
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						(function () {
							var message = _step.value;

							var match = matchesById[message.match.id];
							// Note: match may be null if its been removed by either user, or if it is a chat message
							// from a new match which we haven't synced yet.
							LocalDB.saveChatMessage(message).then(function (isNew) {
								if (isNew && match) {
									match.read = false;
									match.lastMessage = message.text;
									updateUnreadChatsCount(match.id, false);
								}
							});
						})();
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				// Store where we have synced up to (i.e. the maximum createdAt in the messages array)
				if (messages.length) $localStorage.lastChatSync = _.max(_.pluck(messages, "createdAt"));

				// TODO need to sort by match last updated

				if (activeChatMatchId) {
					var activeMsgsById = _.indexBy(activeChatMessages, "id");

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = messages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var msg = _step2.value;

							// if the msg belong to the active match and not in the active msg array, then add it
							if (msg.match.id == activeChatMatchId && !activeMsgsById[msg.id]) {
								var sortedInsertPosition = _.sortedIndex(activeChatMessages, msg.createdAt, "createdAt");
								activeChatMessages.splice(sortedInsertPosition, 0, msg);
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
								_iterator2["return"]();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
				return messages;
			});
		}

		/**
   * Get a mutual match
   * @param matchId
   * @returns {IMatch}
   */
		function getMatch(matchId) {
			return _.find(matches, "id", matchId);
		}

		/**
   * Sets and return the active chat. New messages will be added to the array returned
   * @param matchId
   * @returns {IPromise<IChatMessage[]>}
   */
		function getActiveChat(matchId) {
			$log.log("getActiveChat " + matchId);

			if (matchId === activeChatMatchId) {
				return $q.when(activeChatMessages);
			}return LocalDB.getChatMessages(matchId).then(function (messages) {
				activeChatMatchId = matchId;
				activeChatMessages = messages;
				return activeChatMessages;
			});
		}

		/**
   * Update the read flag on a chat
   * @param matchId the match/chat id
   * @param read {boolean} the new read value
   */
		function setChatRead(matchId, read) {
			if (!_.isBoolean(read)) throw "read must be a boolean";

			var match = _.find(matches, { id: matchId });
			if (match != null && match.read != read) {
				match.read = read;
				LocalDB.setChatRead(matchId, read);

				updateUnreadChatsCount(matchId, read);
			}
		}

		/**
   * Update the cached state of which chats are (un)read so the unread chats count can easily be determined
   * @param matchId the match/chat id
   * @param {number|boolean} read if the chat is read/unread. A number or boolean is valid. 0 == false, 1 == true.
   */
		function updateUnreadChatsCount(matchId, read) {
			if (read === true || read === 1) delete unreadChats[matchId];else if (read === false || read === 0) unreadChats[matchId] = true;else $log.error("Invalid read argument to updateUnreadChatsCount()");

			unreadChatsCount = _.keys(unreadChats).length;
			$log.log("unread chats: " + unreadChatsCount);
			$rootScope.$broadcast("unreadChatsCountUpdated");
		}

		/**
   * Gets the number of chats that have unread messages. Can be used to check if there are any unread chats
   * (for example to change or decorate a chat icon)
   * @returns {number}
   */
		function getUnreadChatsCount() {
			return unreadChatsCount;
		}

		/**
   * Reset the notification badge number (for iOS)
   * See http://blog.parse.com/announcements/badge-management-for-ios/
   * @returns
   */
		function resetBadge() {
			return server.resetBadge();
		}

		function sendChatMessage(matchId, text) {
			$analytics.eventTrack("chatMessage");
			var match = new Match();
			match.id = matchId;
			var message = new ChatMessage();
			message.match = match;
			message.text = text;
			message.senderName = service.profile.name;

			return server.sendChatMessage(message, _.find(matches, { id: matchId })).then(function (savedMessage) {
				$log.log("sent chat message for match " + matchId);
				if (activeChatMatchId == matchId) {
					$log.log("adding to active chat messages");
					activeChatMessages.push(savedMessage);
				}
				saveNewMessage(matchId, savedMessage);

				return savedMessage;
			});
		}

		function reportProfile(profile, match) {
			$analytics.eventTrack("reportProfile");
			return server.reportProfile(profile, match);
		}

		/**
   * Saves a new chat message locally, and updates the lastMessage on the Match object, and re-sorts the matches
   * @param matchId
   * @param message
   */
		function saveNewMessage(matchId, message) {
			// update the last message text on the match object.
			var match = _.find(matches, { id: matchId });
			if (match) {
				match.lastMessage = message.text;
				match.updatedAt = message.createdAt;
				// sort so matches with the newest messages are at the top
				matches.sort(function (a, b) {
					if (a.updatedAt.getTime() == b.updatedAt.getTime()) return 0;
					return a.updatedAt.getTime() > b.updatedAt.getTime() ? -1 : 1;
				});
			}

			LocalDB.saveChatMessage(message);
			if (message.sender != server.getUserId()) {
				setChatRead(matchId, false);
			}
		}

		/**
   * Call when a push notification has been received so the polling for updates can be cancelled
   */
		function pushNotificationReceived() {
			if (synchronizeInterval) {
				$log.log("Cancelling chat synchronization interval");
				$interval.cancel(synchronizeInterval);
				synchronizeInterval = null;
				$localStorage.pushNotificationReceived = true;
			}
		}

		function newMessageNotification(message) {
			$log.log("newMessageNotification " + JSON.stringify(message));
			message.createdAt = new Date(message.createdAt);

			if (activeChatMatchId == message.match.id) activeChatMessages.push(message);

			saveNewMessage(message.match.id, message);
			updateUnreadChatsCount(matchId, false);

			$rootScope.$broadcast("newMessage", message);
			$rootScope.$apply(); // apply scope where newMessage event is received?

			if (service.profile.notifyMessage) {
				var media = new Media(filePath("audio/chat-notification.mp3"), null, null, null);
				$cordovaMedia.play(media);
			}
		}

		function sendContactMessage(message) {
			$analytics.eventTrack("contactMessage");
			return server.sendContactMessage(message);
		}

		function filePath(file) {
			if (ionic.Platform.isIOS()) {
				return file;
			} else if (ionic.Platform.isAndroid()) {
				return "/android_asset/www/" + file;
			} else {
				return file;
			}
		}

		function setPhoto(base64data) {

			return server.saveFile("photo.png", base64data).then(function (file) {
				$log.log("photo saved. saving profile...");
				var profileUpdate = {};
				profileUpdate.photos = service.profile.photos;
				if (!profileUpdate.photos) {
					profileUpdate.photos = [];
				}

				profileUpdate.photos.push(file);

				return server.saveProfile(service.profile, profileUpdate);
			}).then(function (result) {
				$log.log("saved profile with photo");
				return result;
			}, function (error) {
				$log.log("error saving photo file to profile " + JSON.stringify(error));
				return $q.reject(error);
			});
		}

		function saveBirthdate(birthdate) {
			service.profile.birthdate = birthdate;
			service.profile.ageFrom = service.profile.age - 5;
			if (service.profile.ageFrom < 18) service.profile.ageFrom = 18;
			service.profile.ageTo = service.profile.age + 5;
			return server.saveProfile(service.profile, service.profile);
		}

		function convertImgToBase64(url, outputFormat) {
			var q = $q.defer();
			var canvas = document.createElement("CANVAS"),
			    ctx = canvas.getContext("2d"),
			    img = new Image();
			img.crossOrigin = "Anonymous";
			img.onload = function () {
				var dataURL;
				canvas.height = img.height;
				canvas.width = img.width;
				ctx.drawImage(img, 0, 0);
				dataURL = canvas.toDataURL(outputFormat);
				canvas = null;
				q.resolve(dataURL);
			};
			img.onerror = function () {
				q.reject("Failed to load image " + url);
			};
			img.src = url;
			return q.promise;
		}
	}]);
})(); // end IIFE

// TODO unread
"use strict";

/**
 * @typedef {Object} User
 * @property {boolean} emailVerified - the match object
 * @property {string[]} matches - an array of the ids of the Match objects that are a mutual match
 */
var userFields = ["emailVerified", "matches", "profile"];

// See IProfile in data-model.ts
var profileFields = ["uid", "name", "birthdate", "age", "about", "photos", "notifyMatch", "notifyMessage", "distance", "distanceType", "location", "gps", "enabled", "gender", "guys", "girls", "ageFrom", "ageTo"];

var Profile = Parse.Object.extend({
    className: "Profile",
    attrs: profileFields
});

/**
 * @typedef {Object} Match
 * @property {string} uid1 - the id of the user 1 in the match (being the lowest ordered id of the two)
 * @property {string} uid2 - the id of the user 2 in the match (being the highest ordered id of the two)
 * @property {string} uid1action - the action the user with uid1 took. L for like, R for reject, or O if the other user rejected first
 * @property {string} uid2action - the action the user with uid2 took. L for like, R for reject, or O if the other user rejected first
 * @property {string} state - the state of the match. P if one user has liked. R if one user has rejected. M if a mutual match. D if one user has deleted what was previously a mutual match
 * @property {Profile} profile1 - if a mutual match then the profile of user with uid1
 * @property {Profile} profile2 - if a mutual match then the profile of user with uid2
 */
var matchFields = ["uid1", "uid2", "uid1action", "uid2action", "state", "profile1", "profile2"];
var Match = Parse.Object.extend({
    className: "Match",
    attrs: matchFields
});
// Match also has the fields lastMessage and read in the local copy

/**
 * @typedef {Object} ChatMessage
 * @property {Object} match - the match object
 * @property {string[]} userIds - an array of the user ids who are in this chat. This allows indexing all chats by user for efficient loading of the latest messages for a user
 * @property {string} text - the message text
 * @property {string} sender - the user id of the sender
 * @property {Date} createdAt - the date this message was created
 */
// senderName is de-normalised here to avoid an API call in the ChatMessage.afterSave hook
var chatMessageFields = ["match", "userIds", "text", "sender", "senderName"];
var ChatMessage = Parse.Object.extend({
    className: "ChatMessage",
    attrs: chatMessageFields
});

/**
 * @typedef {Object} Report
 * @property {Object} match - (optional) the Match being reported about
 * @property {string} reportedBy - the id of the user who submitted the report
 * @property {string} reported - the id of the user who was reported
 * @property {Date} updatedAt - the date this report was last updated
 * @property {Date} createdAt - the date this report was created
 */
var reportFields = ["matchId", "reportedBy", "reported"];
var Report = Parse.Object.extend({
    className: "Report",
    attrs: reportFields
});

/**
 * @typedef {Object} ContactMessage
 * @property {Object} user - the user who sent the message
 * @property {string} message - the message
 * @property {Date} updatedAt - the date this message was last updated
 * @property {Date} createdAt - the date this message was created
 */
var contactMessageFields = ["user", "message"];
var ContactMessage = Parse.Object.extend({
    className: "ContactMessage",
    attrs: contactMessageFields
});

enhance(Parse.User.prototype, userFields);
enhance(Profile.prototype, profileFields);
enhance(Match.prototype, matchFields);
enhance(ChatMessage.prototype, chatMessageFields);
enhance(Report.prototype, reportFields);
enhance(ContactMessage.prototype, contactMessageFields);

function enhance(prototype, fields) {
    for (var i = 0; i < fields.length; i++) {
        (function () {
            var propName = fields[i];
            var proto = prototype;
            Object.defineProperty(proto, propName, {
                get: function get() {
                    return this.get(propName);
                },
                set: function set(value) {
                    this.set(propName, value);
                }
            });
        })();
    }
}

Object.defineProperty(Profile.prototype, "photoUrl", {
    get: function get() {
        if (this.photos && this.photos.length) {
            return this.photos[0].url();
        }return "img/generic_avatar.jpg";
    }
});

Object.defineProperty(Match.prototype, "profileId", {
    get: function get() {
        if (this.otherProfileId != null) {
            return this.otherProfileId;
        }if (this.uid1 == Parse.User.current().id) {
            return this.profile2.id;
        }if (this.uid2 == Parse.User.current().id) {
            return this.profile1.id;
        }return null;
    }
});

Object.defineProperty(Match.prototype, "profile", {
    get: function get() {
        if (this.otherProfile) {
            return this.otherProfile;
        }if (this.otherProfileId) {
            return this.otherProfileId == this.profile1.id ? this.profile1 : this.profile2;
        }if (this.uid1 == Parse.User.current().id) {
            return this.profile2;
        }if (this.uid2 == Parse.User.current().id) {
            return this.profile1;
        }return null;
    },
    set: function set(obj) {
        this.otherProfile = obj;
    }
});

angular.module("service.parse", ["constants"]).factory("ParseService", ["$q", "$log", "parseAppId", "parseJavascriptKey", "parseClientKey", function ($q, $log, parseAppId, parseJavascriptKey, parseClientKey) {

    Parse.initialize(parseAppId, parseJavascriptKey);

    var service = {
        // methods
        init: init,
        facebookLogin: facebookLogin,
        linkedInLogin: linkedInLogin,
        signUp: signUp,
        logIn: logIn,
        autoLogin: autoLogin,
        registerPush: registerPush,
        reloadUser: reloadUser,
        requestPasswordReset: requestPasswordReset,
        copyFacebookProfile: copyFacebookProfile,
        getUserId: getUserId,
        getProfile: getProfile,
        getProfileForMatch: getProfileForMatch,
        convertLocation: convertLocation,
        saveSettings: saveSettings,
        saveProfile: saveProfile,
        saveFile: saveFile,
        searchProfiles: searchProfiles,
        processProfile: processProfile,
        deleteUnmatched: deleteUnmatched,
        getMatches: getMatches,
        getChatMessages: getChatMessages,
        loadChatMessages: loadChatMessages,
        sendChatMessage: sendChatMessage,
        removeMatch: removeMatch,
        reportProfile: reportProfile,
        sendContactMessage: sendContactMessage,
        resetBadge: resetBadge,
        logout: logout,
        deleteAccount: deleteAccount
    };

    return service;

    // Constructs the argument for the Parse login from the Facebook response
    function parseFbAuth(fbResponse) {
        var parseFbAuth = {};
        parseFbAuth.id = fbResponse.authResponse.userID;
        parseFbAuth.access_token = fbResponse.authResponse.accessToken;
        var expiryDate = new Date();
        expiryDate.setSeconds(expiryDate.getSeconds() + fbResponse.authResponse.expiresIn);
        parseFbAuth.expiration_date = expiryDate.toISOString();
        return parseFbAuth;
    }

    function init() {}

    /**
     * Registers a new user with their email and password
     * @param {string} email
     * @param {string} password
     * @returns {Promise} a promise which resolves if the signup is a success
     */
    function signUp(email, password) {
        // we are using email as the username
        // Parse actually has a separate email field, but you can use an email as the username

        var username = email;

        return Parse.User.signUp(username, password, { email: email }).then(function (result) {
            registerPush();
            return result;
        }, function (error) {
            $log.log("signUp error: " + JSON.stringify(error));
            // {"code":202,"message":"username campers@gmail.com already taken"}
            // TODO transform to our own app error
            return error;
        });
    }

    /**
     * Logs in a user with their email and password
     * @param {string} email
     * @param {string} password
     * @returns {Promise} a promise which resolves if the login is a success
     */
    function logIn(email, password) {
        return Parse.User.logIn(email, password).then(function (result) {
            registerPush();
            return result;
        }, function (error) {
            // {"code":101,"message":"invalid login parameters"}
            // TODO transform to our own app error
            return error;
        });
    }

    /**
     *
     * @param facebookResponse the JSON returned from a Facebook call to getLoginStatus() or login()
     * that has a status of 'connected'
     * @returns {Promise} a promise which will resolve if the user is successfully authenticated
     */
    function facebookLogin(facebookResponse) {
        return Parse.FacebookUtils.logIn(parseFbAuth(facebookResponse)).then(function (result) {
            registerPush();
            return result;
        });
    }

    function linkedInLogin(authData) {
        return Parse.Cloud.run("LoadLinkedInMember", { authData: authData }).then(function (sessionToken) {
            return Parse.User.become(sessionToken);
        }).fail(_unwrapError);
    }

    /**
     * Copies the users Facebook profile data to their Profile object
     * @returns {Promise<IProfile>} A promise resolving to the updates to users profile (to update the cached profile without another server call)
     */
    function copyFacebookProfile() {
        return Parse.Cloud.run("CopyFacebookProfile").fail(_unwrapError);
    }

    function autoLogin() {
        registerPush();
    }

    /**
     * Registers for the Parse Push notifications by subscribing to a channel named user_<user_id>
     */
    function registerPush() {
        // On a successful authentication register the push notifications
        if (typeof ParsePushPlugin === "undefined") {
            // ignore when developing in the browser
            return;
        }ParsePushPlugin.registerDevice({ appId: parseAppId, clientKey: parseClientKey, ecb: "onNotification", onOpen: "onNotificationOpen" }, function () {
            $log.log("successfully registered device for Parse Push");
            ParsePushPlugin.getInstallationId(function (id) {
                $log.log("Parse Push InstallationId " + id);
            }, function (e) {
                $log.log("getInstallationId error");
            });
            ParsePushPlugin.subscribe("user_" + Parse.User.current().id, function () {
                $log.log("Subscribed to parse push channel " + "user_" + Parse.User.current().id);
            }, function (e) {
                $log.log("Parse Push subscribe error " + e);
            });
        }, function (e) {
            $log.log("ParsePushPlugin error registering device: " + e);
        });

        ParsePushPlugin.on("receivePN", function (pn) {
            onNotification(pn);
        });
        ParsePushPlugin.on("openPN", function (pn) {
            onNotificationOpen(pn);
        });
    }

    /**
     * Reload the user from the server
     * @returns {Promise<User>} A promise which resolves to the current user
     */
    function reloadUser() {
        return Parse.User.current().fetch();
    }

    /**
     * @param email the email address for the user to lookup to reset, or if null the current users email
     * @returns {Promise} A promise which resolves if the request to the server completed
     */
    function requestPasswordReset(email) {
        if (!email && Parse.User.current() != null) email = Parse.User.current().getEmail();
        return Parse.User.requestPasswordReset(email);
    }

    /**
     * @returns {string} the id of the current user
     */
    function getUserId() {
        return Parse.User.current().id;
    }

    /**
     * Loads the profile for the current user, and creates one if it doesn't exist
     * @returns {IPromise<Profile>} A promise which resolves to the profile of the current user, or null if unavailable
     */
    function getProfile() {
        var user = Parse.User.current();
        var profile = user.profile;
        if (profile) {
            return profile.fetch();
        } // reload from the server (TODO or cache in localStorage for faster login?)

        $log.debug("getProfile() fetching user");
        // If we've just created the user then the Profile won't be on the local User object yet, so reload it
        return user.fetch().then(function () {
            // Just in case the Profile.afterSave hook hasn't saved the reference back to the User object yet
            // then reload the user again (Should really allow up to 3 seconds in case the server is being slow)
            if (user.profile) return $q.when();else {
                $log.debug("getProfile() fetching user again");
                return user.fetch();
            }
        }).then(function () {
            return user.profile;
        }) // user.profile could be null if the save of the Profile on the server failed
        ;
    }

    /**
     * Loads a profile for a mutual match
     * @param id the mutual match id
     * @returns {Promise<IProfile>} a promise which resolves to the profile
     */
    function getProfileForMatch(matchId) {
        return Parse.Cloud.run("GetProfileForMatch", { matchId: matchId });
    }

    /**
     * Converts a latitude and longitude into a Geo object used by the backend, and reducing accuracy for privacy
     * @see http://ngcordova.com/docs/plugins/geolocation/
     * @param location
     * @returns {Parse.GeoPoint}
     */
    function convertLocation(latitude, longitude) {
        // Rounds the locations from the GPS service to 2 decimal places (~1km) for privacy
        // http://stackoverflow.com/questions/7167604/how-accurately-should-i-store-latitude-and-longitude
        // http://blog.includesecurity.com/2014/02/how-i-was-able-to-track-location-of-any.html
        return new Parse.GeoPoint({ latitude: Math.round(latitude * 100) / 100, longitude: Math.round(longitude * 100) / 100 });
    }

    function saveSettings(profile, profileChanges) {
        var mods = { notifyMatch: profileChanges.notifyMatch, notifyMessage: profileChanges.notifyMessage, distanceType: profileChanges.distanceType };
        return profile.save(mods);
    }

    function saveProfile(profile, profileChanges) {

        if (profileChanges && profileChanges.location) {
            // Convert to the Parse GeoPoint type
            profileChanges.location = convertLocation(profileChanges.location.latitude, profileChanges.location.longitude);
        }

        // Workaround for re-saving file objects
        // See http://stackoverflow.com/questions/25297590/saving-javascript-object-that-has-an-array-of-parse-files-causes-converting-cir
        if (profileChanges && profileChanges.photos) {
            profileChanges.photos = _.map(profileChanges.photos, function (file) {
                return { name: file.name, url: file.url(), __type: "File" };
            });
        }

        return profile.save(profileChanges);
    }

    /**
     * Saves a file
     * @param filename the name of the file
     * @param base64 the file data encoded with base64
     * @returns {Promise} a promise which resolves to the file object
     */
    function saveFile(filename, base64) {
        var imgFile = new Parse.File(filename, {
            base64: base64
        });
        $log.log("saving file " + filename);
        return imgFile.save();
    }

    /**
     * Processes a like/pass of a profile. If its a mutual match, then the Match object will be returned
     * @param {Profile} profile
     * @param {boolean} liked true if the user liked the profile, false if the user passed/rejected
     * @returns {Promise<Match>} a promise resolving to a Match if it was a mutual match, else null
     */
    function processProfile(profile, liked) {
        // TODO rename cloud function to ProcessProfile
        return Parse.Cloud.run("ProcessMatch", { otherUserId: profile.uid, liked: liked });
    }

    /**
     * Queries for profiles which:
     * 1. Match the search criteria from the current users profile
     * 2. Haven't been liked/passed by the current user
     * 3. Haven't been passed by the other user
     * @param {IProfile} searchParameters the search criteria
     * @returns {Promise<Profile[]>} a promise resolving to an array of profiles
     */
    function searchProfiles(searchParameters) {
        if (!searchParameters) $log.error("search parameters were not provided");
        // Can't use a Parse object as a param, so copy the fields. Could copy only the required search fields.
        var searchParams = {};
        for (var i = 0; i < profileFields.length; i++) searchParams[profileFields[i]] = searchParameters[profileFields[i]];
        return Parse.Cloud.run("GetMatches", searchParams);
    }

    /**
     * Loads the mutual matches for the given ids
     * @param {string[]} matchIds An array of the match ids
     * @returns {Promise<IMatch[]>} an array of the mutual matches
     */
    function getMatches(matchIds) {
        if (matchIds.length === 0) {
            return $q.when([]);
        }return Parse.Cloud.run("GetMutualMatches", { matchIds: matchIds });
    }

    ///**
    // * Loads a mutual match with the matched profile
    // * @param id the match id
    // * @returns {Promise<IMatch>} a promise which resolves to the match
    // */
    //function getMutualMatch(matchId) {
    //    return Parse.Cloud.run('GetMutualMatch', { matchId: matchId })
    //}

    /**
     * Loads the chat message for a mutual match
     * @param {Match} match
     * @returns {Promise<ChatMessage[]>} a promise resolving to an array of the ChatMessage's
     */
    function getChatMessages(matchId) {
        var messagesQuery = new Parse.Query("ChatMessage");
        var match = new Match();
        match.id = matchId;
        messagesQuery.equalTo("match", match);
        messagesQuery.ascending("createdAt");
        messagesQuery.limit(1000); // TODO handle more than 1000
        return messagesQuery.find();
    }

    /**
     * Loads all the chat messages for the match/chats the user is a member of.
     * A date can be provided to load the most recent messages
     * @param {Date} from the date to load the latest messages from, or null to load all
     * @returns {Promise<ChatMessage[]>} a promise resolving to an array of the ChatMessage's
     */
    function loadChatMessages(fromDate) {
        var messagesQuery = new Parse.Query("ChatMessage");
        messagesQuery.equalTo("userIds", getUserId()); // Find where the userIds array contains user.id
        if (fromDate) messagesQuery.greaterThan("createdAt", fromDate);
        messagesQuery.ascending("createdAt");
        messagesQuery.limit(1000);
        // TODO handle if more than 1000? If a user logs into an existing account then just loading most recent 1000 could be enough
        return messagesQuery.find();
    }

    /**
     * Send a chat message. This sends a push notification to the recipient.
     * @param {ChatMessage} message
     * @returns {Promise<ChatMessage>} a promise which resolves to the saved/sent message
     */
    function sendChatMessage(message, match) {
        var acl = new Parse.ACL();
        acl.setReadAccess(match.uid1, true);
        acl.setReadAccess(match.uid2, true);
        if (getUserId() === match.uid1) acl.setWriteAccess(match.uid1, true);else acl.setWriteAccess(match.uid2, true);
        message.setACL(acl);
        return message.save();
    }

    /**
     * Unmatches an existing mutual match.  Sends a push notification to other user so this match can be removed from their matches too
     * @param {string} matchId the id of the match to remove
     * @returns {Promise} a promise which resolves when the remove is complete
     */
    function removeMatch(matchId) {
        return Parse.Cloud.run("RemoveMatch", { matchId: matchId });
    }

    /**
     * Reports a match for spam or inappropriate images/chat
     * @param {Object} profile the profile of the user to report
     * @param {Object} match (optional) the related Match to report about
     * @returns {Promise} a promise which resolves when the match has been reported
     */
    function reportProfile(profile, match) {
        // TODO ACL in cloud code
        var report = new Report();
        report.reported = profile.uid;
        report.reportedBy = getUserId();
        report.match = match;
        return report.save();
    }

    /**
     * This is only for test purposes.
     * Delete all the Match objects where only one person has liked or either have rejected
     * @returns {Promise} a promise which resolves when the matches have been deleted
     */
    function deleteUnmatched() {

        var matches1Query = new Parse.Query("Match");
        matches1Query.equalTo("uid1", Parse.User.current().id);
        matches1Query.containedIn("state", ["P", "R"]);

        var matches2Query = new Parse.Query("Match");
        matches2Query.equalTo("uid2", Parse.User.current().id);
        matches1Query.containedIn("state", ["P", "R"]);

        return Parse.Query.or(matches1Query, matches2Query).find().then(function (matches) {
            $log.log("found " + matches.length + " rejected matches to delete");
            return Parse.Object.destroyAll(matches);
        });
    }

    /**
     * Sends a message to the admin/staff
     * @param {string} message - the message from the user
     * @returns {Promise} a promise which resolves when the message has been sent
     */
    function sendContactMessage(message) {
        var contactMessage = new ContactMessage();
        contactMessage.message = message;
        return contactMessage.save();
    }

    /**
     * Reset the notification badge number (for iOS)
     * See http://blog.parse.com/announcements/badge-management-for-ios/
     * @returns
     */
    function resetBadge() {
        if (typeof ParsePushPlugin !== "undefined" && ionic.Platform.isIOS()) ParsePushPlugin.resetBadge(function () {
            return $log.info("notification badge reset");
        }, function (error) {
            return $log.error("error resetting badge " + JSON.stringify(error));
        });
    }

    /**
     * Deletes all the matches, messages and profile data for this users account
     * @returns {Promise} a promise which resolves when all the data has been deleted
     */
    function deleteAccount() {
        return Parse.Cloud.run("DeleteAccount");
    }

    /**
     * Logs the user out and un-subscribes from Push notifications
     */
    function logout() {
        if (typeof ParsePushPlugin != "undefined" && Parse.User.current()) {
            ParsePushPlugin.unsubscribe("user_" + Parse.User.current().id, function (msg) {
                $log.log("ParsePush unsubscribed");
            }, function (e) {
                $log.log("ParsePush unsubscribe error " + e);
            });
        }
        return Parse.User.logOut();
    }

    /**
     * Parse cloud functions only return a string as an error.  If we have returned a JSON string from response.error()
     * then try to return the parsed object
     * @param error an error from a cloud function
     * @returns {*}
     */
    function _unwrapError(error) {
        $log.debug("unwrapping " + JSON.stringify(error));

        // 141 is SCRIPT_ERROR, including when response.error() was called
        if (error.code === 141) {
            if (error.message && error.message.startsWith("{")) {
                try {
                    error = JSON.parse(error.message);
                    return error;
                } catch (e) {}
            }
            if (error.message == "function not found") $log.error("Have you deployed the latest Cloud Code?");
        }
        return error;
    }

    // This isn't used any more, but could be a handy bit of code
    ///**
    // * Load the all the mutual matches with the other users profile set on the Match object
    // * @returns {Promise<Match[]>} a promise resolving to an array of matches
    // */
    //function getMutualMatches() {
    //    var matches1Query = new Parse.Query('Match')
    //    matches1Query.equalTo('uid1', Parse.User.current().id)
    //    matches1Query.equalTo('state', 'M')
    //
    //    var matches2Query = new Parse.Query('Match')
    //    matches2Query.equalTo('uid2', Parse.User.current().id)
    //    matches2Query.equalTo('state', 'M')
    //
    //    // It would be nice to include the profile objects, but parse doesn't support include() in the subqueries of a compound query.
    //    var matchesQuery = Parse.Query.or(matches1Query, matches2Query);
    //
    //    var matches
    //    return matchesQuery.find().then(function(result) {
    //        matches = result
    //        var profileIds = []
    //        for(var i=0; i<matches.length;i++) {
    //            profileIds.push(matches.profileId)
    //        }
    //        var profileQuery = new Parse.Query(Profile)
    //        profileQuery.containedIn('id', profileIds)
    //        return profileQuery.find()
    //    }).then(function(profiles) {
    //        for(var i=0; i<profiles.length;i++) {
    //            var profile = profiles[i]
    //            profileCache[profile.id] = profile
    //        }
    //        for(var i=0; i<matches.length;i++) {
    //            var match = matches[i]
    //            match.profile = profileCache[match.profileId]
    //        }
    //        return matches
    //    })
    //}
}]);

// $log.info('ParseService.init')
"use strict";

(function () {

	// SQL to model mapping
	// match
	// 		id (Match.id)
	//		last_update (ChatMessage[last].createdAt)
	//		last_message (ChatMessage[last].text
	//		name (Profile.name)
	//		profile_id (Profile.id)
	//		photo (Profile.photo1.url)
	//		read (managed locally)
	//
	// chat_message
	//		id (ChatMessage.id)
	//		chat_id (Match.id)
	//		date (ChatMessage.createdAt)
	//		sender (ChatMessage.sender)
	//		message (ChatMessage.text)

	// See http://www.w3.org/TR/webdatabase/ for the database API
	// And https://github.com/litehelpers/Cordova-sqlite-storage for implementation notes

	angular.module("service.localdb", []).factory("LocalDB", ["$q", "$log", function ($q, $log) {

		var db;

		var service = {
			// fields
			userId: "",
			// methods
			init: init,
			getMatches: getMatches,
			saveMatch: saveMatch,
			deleteMatch: deleteMatch,
			getChatMessages: getChatMessages,
			saveChatMessage: saveChatMessage,
			setChatRead: setChatRead,
			deleteDb: deleteDb
		};

		return service;

		function FileUrl(fileUrl) {
			this.url = function () {
				return fileUrl;
			};
		}

		function _mapMatchResultSet(sqlResultSet) {
			var len = sqlResultSet.rows.length;
			var result = [];

			for (var i = 0; i < len; i++) {
				var row = sqlResultSet.rows.item(i);
				var obj = new Match();
				obj.id = row.id;
				obj.uid1 = row.uid1;
				obj.uid2 = row.uid2;
				var profile = new Profile();
				profile.id = row.profile_id;
				profile.name = row.name;
				profile.about = row.about;
				profile.location = { latitude: row.latitude, longitude: row.longitude };

				var photos = [];
				profile.photos = photos;
				if (row.photo1) photos.push(new FileUrl(row.photo1));
				if (row.photo2) photos.push(new FileUrl(row.photo2));
				if (row.photo3) photos.push(new FileUrl(row.photo3));
				if (row.photo4) photos.push(new FileUrl(row.photo4));
				if (row.photo5) photos.push(new FileUrl(row.photo5));

				profile.age = row.age;
				obj.profile = profile;
				obj.otherProfileId = profile.id; // for the Match prototype property profileId
				obj.lastMessage = row.last_message;
				obj.updatedAt = new Date(row.updated_at);
				obj.read = row.read === 1;
				result.push(obj);
			}
			return result;
		}

		function _mapChatMessageResultSet(sqlResultSet) {
			var len = sqlResultSet.rows.length;
			var result = [];
			for (var i = 0; i < len; i++) {
				var row = sqlResultSet.rows.item(i);
				var obj = {};
				obj.id = row.id;
				obj.match = { id: row.chat_id };
				obj.sender = row.sender;
				obj.text = row.message;
				obj.createdAt = new Date(row.created_at);
				result.push(obj);
			}
			return result;
		}

		// Service functions ----------------------

		function init() {
			// Use the native sqlite plugin if it exists
			db = window.sqlitePlugin ? window.sqlitePlugin.openDatabase({ name: "my.db", location: 2 }) : window.openDatabase("mydb", "", "LocalDB", 2 * 1024 * 1024);

			var M = new Migrator(db);

			// Set your migrations in the order that they need to occur
			M.migration(1, function (tx) {
				tx.executeSql("CREATE TABLE match (id varchar primary key, uid1 varchar, uid2 varchar, profile_id varchar, latitude real, longitude real, name varchar, photo1 varchar, photo2 varchar, photo3 varchar, birthdate date, last_message varchar, updated_at integer, read integer)");
				tx.executeSql("CREATE TABLE chat_message (id varchar primary key, chat_id varchar, created_at integer, sender varchar, message text)");
			});
			M.migration(2, function (tx) {
				tx.executeSql("ALTER TABLE match ADD COLUMN age integer");
				// migrate birthdate to age http://www.sqlite.org/lang_datefunc.html
				// tx.executeSql('UPDATE match SET age = ')
				// Increase the default maximum number of profile photos to 5
				tx.executeSql("ALTER TABLE match ADD COLUMN photo4 varchar");
				tx.executeSql("ALTER TABLE match ADD COLUMN photo5 varchar");
			});
			M.migration(3, function (tx) {
				tx.executeSql("ALTER TABLE match ADD COLUMN about varchar");
			});

			// Execute will do all the migrations required for the particular user (e.g., if they're at v1 take them to v2 and then v3)
			return M.execute().then(function () {
				//now go about executing your SQL or whatever to load the page or site
				return $q.when();
			});
		}

		/**
   * Deletes data from the database tables
   * @returns {Promise} when the tables have been truncated
   */
		function deleteDb() {
			$log.log("Deleting database data");
			var deferred = $q.defer();
			db.transaction(function (tx) {
				tx.executeSql("DELETE FROM match");
				tx.executeSql("DELETE FROM chat_message");
			}, function (e) {
				$log.error("Error delete database data: " + e.message);
				deferred.reject(e);
			}, function () {
				$log.log("Database data deleted");
				deferred.resolve();
			});
			return deferred.promise;
		}

		function getMatches() {
			var deferred = $q.defer();
			db.readTransaction(function (tx) {
				tx.executeSql("SELECT * FROM match ORDER BY updated_at DESC", [], function (tx, sqlResultSet) {
					deferred.resolve(_mapMatchResultSet(sqlResultSet));
				});
			}, function (e) {
				deferred.reject(e);
			});
			return deferred.promise;
		}

		function saveMatch(match, profile) {
			var deferred = $q.defer();

			db.transaction(function (tx) {
				var photos = profile.photos;
				var latitude, longitude;
				var location = profile.location;
				if (location) {
					latitude = location.latitude;
					longitude = location.longitude;
				}
				tx.executeSql("INSERT INTO match (id, uid1, uid2, profile_id, name, about, photo1, photo2, photo3, photo4, photo5, " + "latitude, longitude, age, last_message, updated_at, read) " + "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [match.id, match.uid1, match.uid2, profile.id, profile.name, profile.about, _photo(photos, 1), _photo(photos, 2), _photo(photos, 3), _photo(photos, 4), _photo(photos, 5), latitude, longitude, profile.age, match.lastMessage, match.updatedAt.getTime(), 0]);
			}, function (e) {
				deferred.reject(e);
				$log.error("Error saving match: " + JSON.stringify(e));
			}, function () {
				deferred.resolve();
			});
			return deferred.promise;
		}

		function _photo(photos, i) {
			return i <= photos.length ? photos[i - 1].url() : null;
		}

		function deleteMatch(matchId) {
			var deferred = $q.defer();
			db.transaction(function (tx) {
				tx.executeSql("DELETE FROM match WHERE id=?", [matchId]);
				tx.executeSql("DELETE FROM chat_message WHERE chat_id=?", [matchId]);
			}, function (e) {
				deferred.reject(e);
				$log.error("LocalDB Error deleting match: " + JSON.stringify(e));
			}, function () {
				deferred.resolve();
			});
			return deferred.promise;
		}

		function getChatMessages(chatId) {
			var deferred = $q.defer();
			db.readTransaction(function (tx) {
				tx.executeSql("SELECT * FROM chat_message WHERE chat_id = ? ORDER BY created_at ASC", [chatId], function (tx, sqlResultSet) {
					deferred.resolve(_mapChatMessageResultSet(sqlResultSet));
				});
			}, function (e) {
				deferred.reject(e);
			});
			return deferred.promise;
		}

		/**
   * Save a chat message (if it doesn't already exist)
   * @param msg the chat message
   * @returns {Promise<boolean>} A promise which resolves to if this was inserted or false if already in the database
   */
		function saveChatMessage(msg) {
			var deferred = $q.defer();
			var isNew = false;

			db.transaction(function (tx) {
				// update the read flag to unread if the message doesn't exist in the local db
				tx.executeSql("UPDATE match SET read = 0 WHERE NOT EXISTS (SELECT 1 FROM chat_message WHERE id = ?)", [msg.id], function (tx, sqlResultSet) {
					isNew = sqlResultSet.rowsAffected > 0;
				});

				tx.executeSql("INSERT OR IGNORE INTO chat_message (id, chat_id, created_at, sender, message) VALUES (?,?,?,?,?)", [msg.id, msg.match.id, msg.createdAt.getTime(), msg.sender, msg.text]);

				// If the message is newer then update the match updated_at
				tx.executeSql("UPDATE match SET updated_at = ?, last_message = ? WHERE id = ? and ? > updated_at", [msg.createdAt.getTime(), msg.text, msg.match.id, msg.createdAt.getTime()]);
			}, function (e) {
				deferred.reject(e);
				$log.error("Error saving chat message: " + JSON.stringify(e));
			}, function () {
				$log.debug("saved chat message new:" + isNew);
				deferred.resolve(isNew);
			});
			return deferred.promise;
		}

		/**
   * Marks a match/chat as read
   * @param chatId
   * @param {boolean} read the read flag
   * @returns {Promise} A promise which resolves when the database transaction has completed
   */
		function setChatRead(chatId, read) {
			if (!_.isBoolean(read)) {
				throw "read must be a boolean. Was " + read;
			}

			// sqlite does not have a boolean value, use 0/1
			var readValue = read ? 1 : 0;

			var deferred = $q.defer();
			db.transaction(function (tx) {
				tx.executeSql("UPDATE match SET read = ? WHERE id = ?", [readValue, chatId]);
			}, function (e) {
				deferred.reject(e);
				$log.error("Error updating read flag: " + JSON.stringify(e));
			}, function () {
				deferred.resolve();
			});
			return deferred.promise;
		}

		// Modified from https://github.com/llamaluvr/JS-Migrator_Promise
		function Migrator(db) {
			// Pending migrations to run
			var migrations = [];

			var state = 0;

			var MIGRATOR_TABLE = "version";

			// Use this method to actually add a migration.
			// You'll probably want to start with 1 for the migration number.
			this.migration = function (number, func) {
				migrations[number] = func;
			};

			// Execute a given migration by index
			function doMigration(number) {
				var deferred = $q.defer();
				if (migrations[number]) {
					db.transaction(function (t) {
						t.executeSql("update " + MIGRATOR_TABLE + " set version = ?", [number], function (t) {
							$log.info("Beginning migration " + number);
							migrations[number](t);
							$log.info("Completed migration " + number);
							doMigration(number + 1).then(function () {
								return deferred.resolve();
							});
						}, function (t, err) {
							$log.error("Error!: %o (while upgrading to %s from %s)", err, number);
							deferred.reject(err);
						});
					});
				} else {
					$log.debug("Migrations complete.");
					state = 2;
					deferred.resolve();
				}

				return deferred.promise;
			}

			// helper that actually calls doMigration from doIt.
			function migrateStartingWith(ver) {
				state = 1;
				$log.debug("Main Migrator starting");
				//return doMigration(ver + 1)
				var deferred = $q.defer();

				try {
					return doMigration(ver + 1).then(function () {
						return deferred.resolve();
					});
				} catch (e) {
					deferred.reject(e);
				}

				return deferred.promise;
			}

			this.execute = function () {
				var deferred = $q.defer();
				if (state > 0) {
					throw "Migrator is only valid once -- create a new one if you want to do another migration.";
				}
				db.transaction(function (t) {
					t.executeSql("select version from " + MIGRATOR_TABLE, [], function (t, res) {
						var rows = res.rows;
						var version = rows.item(0).version;
						$log.info("Existing database present, migrating from " + version);
						migrateStartingWith(version).then(function () {
							return deferred.resolve();
						});
					}, function (t, err) {
						if (err.message.match(/no such table/i)) {
							t.executeSql("create table " + MIGRATOR_TABLE + "(version integer)", [], function () {
								t.executeSql("insert into " + MIGRATOR_TABLE + " values(0)", [], function () {
									$log.info("New migration database created...");
									migrateStartingWith(0).then(function () {
										return deferred.resolve();
									});
								}, function (t, err) {
									$log.error("Unrecoverable error inserting initial version into db: %o", err);
									deferred.reject(err);
								});
							}, function (t, err) {
								$log.error("Unrecoverable error creating version table: %o", err);
								deferred.reject(err);
							});
						} else {
							$log.error("Unrecoverable error resolving schema version: %o", err);
							deferred.reject(err);
						}
					});
				});

				return deferred.promise;
			};
		}
	}]);
})(); // end IIFE
"use strict";

var platformReady, fbLoaded;

var app = angular.module("ionicApp", ["constants", "ionic", "AppUtil", "templates", "controllers", "controllers.share", "service.app", "ui.slider", "ngImgCrop", "ngAnimate", "pascalprecht.translate", "emoji", "ImgCache", "monospaced.elastic", "ngStorage", "angulartics.parse", "SocialAuth"]).run(["$ionicPlatform", "AppService", "ImgCache", "$rootScope", "$log", "appName", function ($ionicPlatform, AppService, ImgCache, $rootScope, $log, appName) {
    $rootScope.appName = appName;

    $ionicPlatform.ready(function () {
        $log.log("ionicPlatform.ready");
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        ImgCache.init(function () {
            $log.log("ImgCache init: success!");
        }, function () {
            $log.warn("ImgCache init: error! Check the log for errors");
        });

        AppService.init();
        platformReady = "true";
    });
}]).config(["$translateProvider", function ($translateProvider) {
    $translateProvider.translations("en", TRANSLATION_EN);
    $translateProvider.translations("de", TRANSLATION_DE);
    $translateProvider.preferredLanguage("en");
}]).config(["$compileProvider", "buildEnv", function ($compileProvider, buildEnv) {
    // See https://docs.angularjs.org/guide/production
    if (buildEnv === "prod") {
        console.log("Disabling $compileProvider debug info");
        $compileProvider.debugInfoEnabled(false);
    }
}]).config(["$cordovaFacebookProvider", "facebookAppId", function ($cordovaFacebookProvider, facebookAppId) {
    // This is only required for the JavaScript API
    $cordovaFacebookProvider.setAppID(facebookAppId, "v2.0");
}]).config(["$ionicConfigProvider", function ($ionicConfigProvider) {
    $ionicConfigProvider.backButton.text("").previousTitleText(false);

    if (!ionic.Platform.isWebView() || ionic.Platform.isIOS()) {
        // we are using iconicons 2.0 which doesn't include the iOS back button icon used by Ionic beta-14
        $ionicConfigProvider.backButton.text("").icon("ion-ios-arrow-back");
    }
}]).config(["ImgCacheProvider", function (ImgCacheProvider) {
    ImgCacheProvider.setOptions({
        //debug: true,
        usePersistentCache: true
    });
    // Set this option to init imgcache.js manually after device is ready
    ImgCacheProvider.manualInit = true;
}]).filter("escapeHTML", function () {
    return function (text) {
        if (text) {
            return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        }
        return "";
    };
})

// This allow a chat message to be sent when you tap return
// TODO maybe apply more specific, make it a class attribute
.directive("input", ["$timeout", function ($timeout) {
    return {
        restrict: "E",
        scope: {
            returnClose: "=",
            onReturn: "&",
            onFocus: "&",
            onBlur: "&"
        },
        link: function link(scope, element, attr) {
            element.bind("focus", function (e) {
                if (scope.onFocus) {
                    $timeout(function () {
                        scope.onFocus();
                    });
                }
            });
            element.bind("blur", function (e) {
                if (scope.onBlur) {
                    $timeout(function () {
                        scope.onBlur();
                    });
                }
            });
            element.bind("keydown", function (e) {
                if (e.which == 13) {
                    if (scope.returnClose) element[0].blur();
                    if (scope.onReturn) {
                        $timeout(function () {
                            scope.onReturn();
                        });
                    }
                }
            });
        }
    };
}]);
"use strict";

angular.module("ionicApp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state("signin", {
        url: "/sign-in",
        templateUrl: "sign-in.html",
        controller: "SignInCtrl"
    }).state("emailVerification", {
        url: "/emailVerification",
        templateUrl: "emailVerification.html",
        controller: "EmailVerificationCtrl"
    }).state("profileSetup", {
        url: "/profileSetup",
        templateUrl: "profileSetup.html",
        controller: "ProfileSetupCtrl"
    }).state("locationSetup", {
        url: "/locationSetup",
        templateUrl: "locationSetup.html",
        controller: "LocationSetupCtrl"
    }).state("termsOfUse", {
        url: "/termsOfUse",
        templateUrl: "termsOfUse.html",
        controller: "TermsOfUseCtrl"
    }).state("menu", {
        url: "/menu",
        abstract: true,
        templateUrl: "menu.html"
    }).state("menu.home", {
        url: "/home",
        views: {
            menuContent: {
                templateUrl: "swipe.html",
                controller: "CardsCtrl"
            }
        }
    })
	
	
	.state("menu.people", {
        url: "/people",
        views: {
            menuContent: {
                templateUrl: "people.html",
                controller: "CardsCtrl"
            }
        }
    })
	.state("menu.card-info", {
        url: "/card-info",
        views: {
            menuContent: {
                templateUrl: "profileView.html",
                controller: "CardInfoCtrl"
            }
        }
    }).state("menu.match-profile", {
        url: "/match-profile/:matchId/:profileId",
        views: {
            menuContent: {
                templateUrl: "matchProfile.html",
                controller: "MatchProfileCtrl"
            }
        },
        resolve: {
            matchProfile: ["AppService", "$stateParams", function matchProfile(AppService, $stateParams) {
                if ($stateParams.matchId) {
                    return AppService.getProfileByMatchId($stateParams.matchId);
                } else if ($stateParams.profileId) {
                    return AppService.getProfileById($stateParams.profileId);
                }
            }]
        }
    }).state("menu.chats", {
        url: "/chats",
        views: {
            menuContent: {
                templateUrl: "chats.html",
                controller: "ChatsCtrl"
            }
        }
    }).state("menu.chat", {
        url: "/chat/:matchId",
        views: {
            menuContent: {
                templateUrl: "chat.html",
                controller: "ChatCtrl"
            }
        }
    }).state("menu.profile", {
        url: "/profile",
        views: {
            menuContent: {
                templateUrl: "profile.html",
                controller: "ProfileCtrl"
            }
        }
    }).state("menu.profile-edit", {
        url: "/profile-edit",
        views: {
            menuContent: {
                templateUrl: "profileEdit.html"
            }
        }
    }).state("menu.fb-albums", {
        url: "/fb-albums",
        views: {
            menuContent: {
                templateUrl: "fbAlbums.html",
                controller: "FbAlbumsCtrl"
            }
        }
    }).state("menu.fb-album", {
        url: "/fb-album/:albumId",
        views: {
            menuContent: {
                templateUrl: "fbAlbum.html",
                controller: "FbAlbumCtrl"
            }
        }
    }).state("menu.crop", {
        url: "/crop",
        views: {
            menuContent: {
                templateUrl: "crop.html",
                controller: "PhotoCropCtrl"
            }
        }
    }).state("menu.discovery", {
        url: "/discovery",
        views: {
            menuContent: {
                templateUrl: "discovery.html",
                controller: "DiscoveryCtrl"
            }
        }
	}).state("menu.location", {
        url: "/location",
        views: {
            menuContent: {
                templateUrl: "locationMap.html",
                controller: "LocationCtrl"
            }
        }
    }).state("menu.createActivity", {
        url: "/createActivity",
        views: {
            menuContent: {
                templateUrl: "createActivity.html",
                controller: "SettingsCtrl"
            }
        }
    }).state("menu.settings", {
        url: "/settings",
        views: {
            menuContent: {
                templateUrl: "settings.html",
                controller: "SettingsCtrl"
            }
        }
    }).state("menu.contactq", {
        url: "/contact",
        views: {
            menuContent: {
                templateUrl: "contact.html",
                controller: "ContactCtrl"
            }
        }
	}).state("menu.createActivitynext", {
        url: "/createActivitynext",
        views: {
            menuContent: {
                templateUrl: "createActivitynext.html",
                controller: "ContactCtrl"
            }
		}
		});
		
    $urlRouterProvider.otherwise("/sign-in");
}]);
"use strict";

// monkey patch an IOS8 problem
// https://github.com/angular/angular.js/issues/9128
// This patch is for Angular v1.3.13 (which must be the version used by Ionic)
app.config(["$provide", function ($provide) {

	// Minification-safe hack.
	var $$ChildScope = "$$ChildScope",
	    $$watchers = "$$watchers",
	    $$nextSibling = "$$nextSibling",
	    $$childHead = "$$childHead",
	    $$childTail = "$$childTail",
	    $$listeners = "$$listeners",
	    $$listenerCount = "$$listenerCount",
	    $id = "$id",
	    $$childScopeClass = "$$childScopeClass",
	    $parent = "$parent",
	    $$prevSibling = "$$prevSibling",
	    $$destroyed = "$$destroyed";

	$provide.decorator("$rootScope", ["$delegate", function ($rootScope) {
		var proto = Object.getPrototypeOf($rootScope);

		function nextUid() {
			return ++$rootScope[$id];
		}

		// copied from function Scope() {}
		function initScope(scope) {
			scope.$id = nextUid();
			scope.$$phase = scope.$parent = scope.$$watchers = scope.$$nextSibling = scope.$$prevSibling = scope.$$childHead = scope.$$childTail = null;
			scope.$root = this;
			scope.$$destroyed = false;
			scope.$$listeners = {};
			scope.$$listenerCount = {};
			scope.$$isolateBindings = null;
		}

		proto.$new = function (isolate, parent) {
			var child;

			parent = parent || this;

			if (isolate) {
				child = Object.create(Object.getPrototypeOf($rootScope)); // equivalent to new $rootScope.Scope()
				initScope(child);
				child.$root = this.$root;
			} else {
				// Only create a child scope class if somebody asks for one,
				// but cache it to allow the VM to optimize lookups.
				if (!this[$$ChildScope]) {
					this[$$ChildScope] = function ChildScope() {
						this[$$watchers] = this[$$nextSibling] = this[$$childHead] = this[$$childTail] = null;
						this[$$listeners] = {};
						this[$$listenerCount] = {};
						this[$id] = nextUid();
						this[$$ChildScope] = null;
					};
					this[$$ChildScope].prototype = this;
				}
				child = new this[$$ChildScope]();
			}
			child[$parent] = parent;
			child[$$prevSibling] = parent[$$childTail];
			if (parent[$$childHead]) {
				parent[$$childTail][$$nextSibling] = child;
				parent[$$childTail] = child;
			} else {
				parent[$$childHead] = parent[$$childTail] = child;
			}

			// When the new scope is not isolated or we inherit from `this`, and
			// the parent scope is destroyed, the property `$$destroyed` is inherited
			// prototypically. In all other cases, this property needs to be set
			// when the parent scope is destroyed.
			// The listener needs to be added after the parent is set
			if (isolate || parent != this) child.$on("$destroy", destroyChild);

			return child;

			function destroyChild() {
				child[$$destroyed] = true;
			}
		};

		$rootScope.$new = proto.$new;
		return $rootScope;
	}]);
}]);
"use strict";

angular.module("controllers", ["service.app", "ngMaterial", "ngAnimate", "ngCordova", "ionic.contrib.ui.tinderCards"]).controller("SignInCtrl", ["$scope", "$log", "$rootScope", "$state", "$http", "$timeout", "$cordovaFacebook", "$q", "$ionicPopup", "$ionicModal", "$ionicLoading", "$ionicHistory", "AppService", "AppUtil", "SocialAuth", "linkedInId", "linkedInSecret", function ($scope, $log, $rootScope, $state, $http, $timeout, $cordovaFacebook, $q, $ionicPopup, $ionicModal, $ionicLoading, $ionicHistory, AppService, AppUtil, SocialAuth, linkedInId, linkedInSecret) {

    /**
     * The SignInCtrl handle the flow for registering and authenticating a user. There are currently three entry points:
     * 1. emailRegister() - registers a new user and logs them in
     * 2. emailLogin() - logs in a previously registered user
     * 3. facebookLogin() - logs in with facebook and creates a user if they didn't already exist
     *
     * All three call checkProfile() which starts the post-authentication login sequence that is mediated by
     * AppService.goToNextLoginState()
     */

    // Data for the username/password form
    $scope.credentials = { email: "", password: "" };

    // These two properties are for dynamically updating the CSS classes on the logo and login form/button
    $scope.logo = { "class": "" };
    $scope.showForm = false;
    $scope.showLogo = false;
    $scope.showResetPassword = false;

    // After an error resets the CSS styles so the login form/button displays
    function resetStyles() {
        $scope.showForm = true;
        $scope.showLogo = false;
        $scope.logo["class"] = "";
        $scope.status = "";
    }
    // Hides the login form/buttons and displays the animated logo
    function setLoggingInStyles() {
        $scope.showForm = false;
        $scope.showLogo = true;
        $scope.logo["class"] = "pulse";
        $scope.status = "" // the translation key to display on the login screen
        ;
    }

    $scope.showResetPasswordForm = function () {
        $scope.showForm = false;
        $scope.showResetPassword = true;
    };
    $scope.hideResetPasswordForm = function () {
        $scope.showForm = true;
        $scope.showResetPassword = false;
    };
    $scope.resetPassword = function () {
        if (validateEmail()) return;

        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.requestPasswordReset($scope.credentials.email).then(function () {
            $scope.hideResetPasswordForm();
            AppUtil.toastSimpleTranslate("PASSWORD_RESET_SENT");
        }, function (error) {
            AppUtil.toastSimpleTranslate("REQUEST_FAILED");
        }).always(function () {
            $ionicLoading.hide();
        });
    };

    $scope.emailRegister = function () {
        if (validateEmailPassword()) return;
        setLoggingInStyles();
        AppService.signUp($scope.credentials.email, $scope.credentials.password).then(function (result) {
            $log.log("user signed up success");
            checkProfile();
        }, function (error) {
            resetStyles();
            $log.error("user signed up error " + JSON.stringify(error));
            AppUtil.toastSimple(error.message);
        });
    };

    $scope.emailLogin = function () {
        if (validateEmailPassword()) return;
        setLoggingInStyles();
        AppService.logIn($scope.credentials.email, $scope.credentials.password).then(function (result) {
            $log.log("user login success");
            checkProfile();
        }, function (error) {
            resetStyles();
            $log.error("user login error " + JSON.stringify(error));
            AppUtil.toastSimple("Login error");
        });
    };
	$scope.nextActivity = function () {
		
          $state.go("menu.createActivitynext");
        
    };
	
	$scope.createActivity = function () {
		
          $state.go("createActivity");
        
    };
	$scope.createActivityLocation = function () {
		
          $state.go("locationMap");
        
    };

    function validateEmailPassword() {
        return validateEmail() || validatePassword();
    }

    function validatePassword() {
        if ($scope.credentials.password.length < 6) {
            AppUtil.toastSimpleTranslate("PASSWORD_LENGTH");
            return true;
        }
        return false;
    }

    function validateEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test($scope.credentials.email)) {
            AppUtil.toastSimpleTranslate("INVALID_EMAIL");
            return true;
        }
        return false;
    }

    $scope.linkedInLogin = function () {
        setLoggingInStyles();
        $scope.status = "LOGGING_IN_TO_LINKEDIN";
        SocialAuth.linkedIn(linkedInId, linkedInSecret, ["r_basicprofile", "r_emailaddress"], "rtbwrtusgfxytr").then(function (httpResponse) {
            return AppService.linkedInLogin(httpResponse);
        }).then(function () {
            return checkProfile(null);
        }, function (error) {
            resetStyles();
            $log.error(error);
            AppService.logout();
            AppUtil.toastSimple("LinkedIn login failed");
        });
    };

    $scope.facebookLogin = function () {
        setLoggingInStyles();
        $scope.status = "LOGGING_IN_TO_FB";

        connectToFacebook().then(function (result) {
            return AppService.facebookLogin(result);
        }).then(function (result) {
            // Load the user profile
            $scope.status = "LOADING_PROFILE";
            return AppService.loadProfile();
        }).then(function (profile) {
            // If we've logged in for the first time (i.e. profile.name isn't set) then copy the facebook profile
            if (!profile.name) {
                $log.log("Initialising profile with facebook profile");
                $scope.status = "LOADING_FB_PROFILE";
                return AppService.copyFacebookProfile();
            } else {
                return profile // already logged in with FB
                ;
            }
        }).then(function () {
            return checkProfile();
        }, $scope._handleFacebookLoginError);
    };

    $scope._handleFacebookLoginError = function (error) {
        resetStyles();

        if (error.code && error.code === "MINIMUM_AGE_ERROR") {
            $ionicPopup.alert({
                title: "Error",
                template: "You do not meet the age requirements for this app."
            }).then(function () {
                return AppService.logout();
            });
            //.then(() => ionic.Platform.exitApp())
            return;
        }

        // {"code":251,"message":"The supplied Facebook session token is expired or invalid."}
        $log.error("Facebook login error: " + JSON.stringify(error));
        AppService.logout();
        AppUtil.toastSimpleTranslate("LOGIN_ERROR");
    };

    /**
     * @param profile {IProfile} The user profile if it has already been loaded, else null
     */
    function checkProfile(profile) {
        // start this now as it has a 10s timeout
        var locationPromise = AppService.getCurrentPosition();

        var profilePromise = profile ? $q.when(profile) : AppService.loadProfile();

        profilePromise.then(function (profile) {
            if (!profile) return $q.reject("Unable to load Profile");

            if (!profile.gps) return null;

            $scope.status = "WAITING_FOR_GPS";
            return locationPromise.then(function (result) {
                return result;
            }, function (error) {
                // if profile.location != null then could have a toast warning that we were unable to update the location
                return null;
            });
        }).then(function (location) {
            var profile = AppService.getProfile();

            // if the user is using a location from the map, or couldn't get the GPS location then skip trying to save the location
            if (profile.gps === false || location === null) {
                proceed(profile);
                return;
            }

            $log.log("updating location to " + JSON.stringify(location));
            AppService.saveProfile({ location: location }).always(function () {
                return proceed(profile);
            });
        }, function (error) {
            resetStyles();
            AppService.logout();
            $log.error("Error loging in: " + JSON.stringify(error));
            if (error.code === 209) {
                // Invalid session token
                AppUtil.toastSimple("Invalid session. Try again");
                return;
            }
            AppUtil.toastSimpleTranslate("LOGIN_ERROR");
        });
    }

    /**
     * After a successful login proceed to the next screen
     * @param profile
     */
    function proceed() {
        $scope.status = "";
        $scope.logo["class"] = "drop";
        AppService.getMutualMatches(); // load in the background
        // disable the back button
        $ionicHistory.nextViewOptions({
            historyRoot: true,
            disableBack: true
        });

        // the timeout is to give the drop CSS animation time
        $timeout(function () {
            return AppService.goToNextLoginState();
        }, 500);
    }

    var connectToFacebook = function connectToFacebook() {
        var deferred = $q.defer();
        $scope.status = "LOGGING_IN_TO_FB";
        $cordovaFacebook.getLoginStatus().then(function (statusResult) {
            if (statusResult.status === "connected") {
                $log.log("setting $rootScope.facebookConnected");
                $rootScope.facebookConnected = true;
                $rootScope.fbAccessToken = statusResult.authResponse.accessToken;
                deferred.resolve(statusResult);
            } else {
                // If the user isn't connected then login
                $log.log("$cordovaFacebook.login");
                $cordovaFacebook.login(["public_profile", "email", "user_birthday", "user_photos", "user_friends", "user_likes"]).then(function (loginResult) {
                    if (loginResult.status === "connected") {
                        $log.log("setting $rootScope.facebookConnected");
                        $rootScope.facebookConnected = true;
                        $rootScope.fbAccessToken = loginResult.authResponse.accessToken;
                        deferred.resolve(loginResult);
                    } else {
                        deferred.reject(loginResult);
                    }
                }, function (error) {
                    return deferred.reject(error);
                });
            }
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };

    // Waits for the facebook plugin to be ready
    function ensureFb(callback) {
        if ((window.cordova || fbLoaded) && platformReady) {
            if (callback) {
                $timeout(callback, 50);
            }
        } else {
            $timeout(function () {
                ensureFb(callback);
            }, 50);
        }
    }

    var autoLogin = function autoLogin() {
        // TODO change the Parse.User.current() check to an AppService call
        if (Parse.User.current() != null) {
            $log.log("auto login");
            setLoggingInStyles();
            AppService.autoLogin();
            if (Parse.FacebookUtils.isLinked(Parse.User.current())) {
                $log.log("Checking facebook user");
                connectToFacebook().then(function (result) {
                    // TODO check the facebook id matches the cached Parse user, else force logout
                    checkProfile();
                }, function (error) {
                    resetStyles();
                    AppUtil.toastSimple("Facebook login error");
                    $log.error("Facebook login error " + JSON.stringify(error));
                });
            } else {
                checkProfile();
            }
        } else {
            resetStyles();
        }
    };

    // wait for the facebook plugin to initialise and then check for doing an auto-login
    ensureFb(autoLogin);
}]);
"use strict";

angular.module("controllers").controller("CardsCtrl", ["$log", "$scope", "$state", "$timeout", "$translate", "$mdToast", "$ionicSideMenuDelegate", "TDCardDelegate", "AppService", "$ionicModal", "$ionicLoading", function ($log, $scope, $state, $timeout, $translate, $mdToast, $ionicSideMenuDelegate, TDCardDelegate, AppService, $ionicModal, $ionicLoading) {

    var translations;
    $translate(["MATCHES_LOAD_ERROR"]).then(function (translationsResult) {
        translations = translationsResult;
    });

    // when $scope.matches is null then we haven't done a search
    // when $scope.matches is an empty array then there are no new matches
    // TODO rename this to profiles as its IProfile and not IMatch objects
    $scope.matches = null;

    var profile = $scope.profile = AppService.getProfile();
    $scope.profilePhoto = profile.photoUrl;

    $scope.$on("$ionicView.beforeEnter", function () {
        $scope.unreadChats = AppService.getUnreadChatsCount() > 0;
    });

    $scope.$on("$ionicView.enter", function () {
        if (profile.enabled) {
            // Check for any previously loaded matches
            $scope.matches = AppService.getPotentialMatches();
            // If we haven't searched then search for more
            if ($scope.matches == null) updatePotentialMatches();
        }
    });

    $scope.$on("newPotentialMatches", function () {
        $log.log("newPotentialMatches");
        $scope.$apply(function () {
            $scope.matches = AppService.getPotentialMatches();
        });
    });

    $scope.$on("unreadChatsCountUpdated", function () {
        $scope.unreadChats = AppService.getUnreadChatsCount() > 0;
    });

    $scope.searchAgain = function () {
        $scope.matches = null;
        updatePotentialMatches();
    };

    var MIN_SEARCH_TIME = 2000;
    function updatePotentialMatches() {

        var startTime = Date.now();
        AppService.updatePotentialMatches().then(function (result) {
            $log.log("CardsCtrl: found " + result.length + " potential matches");
            result.map(function (profile) {
                profile.image = profile.photoUrl;
            });
            // Make the search screen show for at least a certain time so it doesn't flash quickly
            var elapsed = Date.now() - startTime;
            if (elapsed < MIN_SEARCH_TIME) $timeout(function () {
                $scope.matches = result;
            }, MIN_SEARCH_TIME - elapsed);else $scope.$apply(function () {
                $scope.matches = result;
            });
        }, function (error) {
            $log.log("updatePotentialMatches error " + JSON.stringify(error));
            $scope.$apply(function () {
                $scope.matches = [];
            });
            $mdToast.show($mdToast.simple().content(translations.MATCHES_LOAD_ERROR).hideDelay(2000));
        });
    }

    // Initialise the new match modal
    $ionicModal.fromTemplateUrl("newMatch.html", {
        scope: $scope,
        animation: "slide-in-up"
    }).then(function (modal) {
        $scope.modal = modal;
    });
    // Cleanup the modal when we're done with it!
    $scope.$on("$destroy", function () {
        $scope.modal.remove();
    });

    $scope.$on("newMatch", function (event, match) {
        $log.log("CardsCtrl.newMatch " + match.id);
        $scope.newMatch = match;
        $scope.matchProfile = AppService.getProfileById(match.profileId);
        $scope.modal.show();
    });
    $scope.closeNewMatch = function () {
        $scope.modal.hide();
    };
    $scope.messageNewMatch = function () {
        $scope.modal.hide();
        $state.go("^.chat", { matchId: $scope.newMatch.id });
    };
    // a test function for viewing the new match modal screen
    $scope.openNewMatch = function () {
        $scope.newMatch = AppService.getMutualMatches()[0];
        $scope.modal.show();
    };

    $scope.enableDiscovery = function () {
        $ionicLoading.show({ templateUrl: "loading.html" });
        $scope.matches = null;
        AppService.enableDiscovery().then(function (result) {
            $ionicLoading.hide();
            $log.log("discovery enabled. updatin matches...");
            updatePotentialMatches();
        }, function (error) {
            $mdToast.show($mdToast.simple().content("Error setting discovery").hideDelay(2000));
            $ionicLoading.hide();
        });
    };

    $scope.viewDetails = function (card) {
        $log.log("view details " + JSON.stringify(card));
        $scope.$parent.selectedCard = card;
        $state.go("^.card-info");
    };

    $scope.accept = function (idx) {
        $log.log("accept button");
        TDCardDelegate.popCard($scope, true);
    };
    $scope.reject = function (idx) {
        $log.log("reject button");
        TDCardDelegate.popCard($scope, true);
    };

    // matches are swiped off from the end of the $scope.matches array (i.e. popped)

    $scope.cardDestroyed = function (index) {
        $scope.matches.splice(index, 1);
    };

    $scope.cardTransitionLeft = function (match) {
        AppService.processMatch(match, false);
        if ($scope.matches.length == 0) {}
    };
    $scope.cardTransitionRight = function (match) {
        AppService.processMatch(match, true);
        if ($scope.matches.length == 0) {}
    };
}]).controller("CardInfoCtrl", ["$log", "$scope", "$cordovaFacebook", "$ionicHistory", "$ionicActionSheet", "$ionicLoading", "$mdToast", "$translate", "AppService", function ($log, $scope, $cordovaFacebook, $ionicHistory, $ionicActionSheet, $ionicLoading, $mdToast, $translate, AppService) {

    //$cordovaFacebook.api()
    //{user-id}?fields=context.fields%28mutual_friends%29
    var translations;
    $translate(["REQUEST_FAILED", "REPORT", "MATCH_OPTIONS", "CANCEL"]).then(function (translationsResult) {
        translations = translationsResult;
    });

    $scope.profile = AppService.getProfile();
    var from = $scope.profile.location;
    var to = $scope.selectedCard.location;

    var distance = getDistanceFromLatLonInKm(from.latitude, from.longitude, to.latitude, to.longitude);

    if ($scope.profile.distanceType == "mi") distance *= 1.609344;

    distance = distance.toFixed(0);

    $scope.distance = distance == 0 ? 1 : distance;

    $scope.like = function () {
        var match = AppService.getPotentialMatches().pop();
        AppService.processMatch(match, true);
        $ionicHistory.goBack();
    };

    $scope.reject = function () {
        var match = AppService.getPotentialMatches().pop();
        AppService.processMatch(match, false);
        $ionicHistory.goBack();
    };

    $scope.profileOptions = function () {
        $ionicActionSheet.show({
            destructiveText: translations.REPORT,
            titleText: translations.MATCH_OPTIONS,
            cancelText: translations.CANCEL,
            cancel: function cancel() {},
            destructiveButtonClicked: function destructiveButtonClicked(index) {
                report();
                return true;
            }
        });
    };

    function report() {
        var profile = AppService.getPotentialMatches().pop();

        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.reportProfile(profile).then(function (result) {
            $log.log("reported profile");
            $ionicLoading.hide();

            AppService.processMatch(profile, false);
            $ionicHistory.goBack();
        }, function (error) {
            $ionicLoading.hide();
            $mdToast.show($mdToast.simple().content(translations.REQUEST_FAILED).hideDelay(2000));
            $log.log("error reporting profile " + JSON.stringify(error));
        });
    }
}]).controller("MatchProfileCtrl", ["$scope", "$cordovaFacebook", "$ionicHistory", "AppService", "matchProfile", function ($scope, $cordovaFacebook, $ionicHistory, AppService, matchProfile) {
    //$cordovaFacebook.api()
    //{user-id}?fields=context.fields%28mutual_friends%29

    $scope.profile = AppService.getProfile();
    $scope.matchProfile = matchProfile;

    var from = $scope.profile.location;
    var to = matchProfile.location;

    var distance = getDistanceFromLatLonInKm(from.latitude, from.longitude, to.latitude, to.longitude);

    if ($scope.profile.distanceType == "mi") distance *= 1.609344;

    distance = distance.toFixed(0);
    $scope.distance = distance == 0 ? 1 : distance;
}]);

// from http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// TODO auto-load more?

// TODO auto-load more?
"use strict";

angular.module("controllers").controller("EmailVerificationCtrl", ["$scope", "AppService", "AppUtil", function ($scope, AppService, AppUtil) {

    // see https://parse.com/docs/js_guide#users-emailverification
    // http://blog.parse.com/2012/04/03/introducing-app-email-settings/

    $scope.isEmailVerified = function () {
        return AppUtil.blockingCall(AppService.isEmailVerified(), function (verified) {
            return verified ? AppService.goToNextLoginState() : AppUtil.toastSimpleTranslate("EMAIL_NOT_VERIFIED");
        });
    };

    $scope.cancel = function () {
        return AppService.logout();
    };
}]).controller("ProfileSetupCtrl", ["$scope", "$state", "$mdToast", "AppService", "AppUtil", function ($scope, $state, $mdToast, AppService, AppUtil) {
    // The user will be sent here from AppService.goToNextLoginState() if AppService.isProfileValid() returns false
    $scope.$on("$ionicView.beforeEnter", function (event) {
        var profile = AppService.getProfile();

        var birthYear = null,
            birthMonth = null,
            birthDay = null;
        if (profile.birthdate) {
            birthYear = profile.birthdate.getFullYear();
            birthMonth = profile.birthdate.getMonth();
            birthDay = profile.birthdate.getDay();
        }

        // pre-populate the values we already have on the profile
        $scope.user = { name: profile.name, birthYear: birthYear, birthMonth: birthMonth, birthDay: birthDay, gender: profile.gender };
    });

    // Static data
    $scope.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $scope.years = [];
    // provide the years for people aged 13 to 100
    var yearsFrom = new Date().getFullYear() - 100;
    var yearsTo = new Date().getFullYear() - 13;
    for (var i = yearsFrom; i <= yearsTo; i++) {
        $scope.years.push(i);
    }
    $scope.yearFrom = yearsFrom;
    $scope.yearTo = yearsTo;

    $scope.saveProfile = function () {

        if (!$scope.user.name || $scope.user.name.trim().length < 1) {
            AppUtil.toastSimpleTranslate("FIRST_NAME_REQUIRED");
            return;
        }
        if (!$scope.user.birthDay) {
            AppUtil.toastSimpleTranslate("BIRTH_DAY_REQUIRED");
            return;
        }
        if (!$scope.user.birthMonth) {
            AppUtil.toastSimpleTranslate("BIRTH_MONTH_REQUIRED");
            return;
        }
        if (!$scope.user.birthYear) {
            AppUtil.toastSimpleTranslate("BIRTH_YEAR_REQUIRED");
            return;
        }
        if (!$scope.user.gender) {
            AppUtil.toastSimpleTranslate("GENDER_REQUIRED");
            return;
        }

        var birthdate = new Date(Date.UTC($scope.user.birthYear, $scope.user.birthMonth, $scope.user.birthDay));
        var changes = { name: $scope.user.name, birthdate: birthdate, gender: $scope.user.gender };

        AppUtil.blockingCall(AppService.saveProfile(changes), function () {
            return AppService.goToNextLoginState();
        }, "SETTINGS_SAVE_ERROR");
    };

    $scope.logout = function () {
        return AppService.logout();
    };
}]).controller("LocationSetupCtrl", ["$scope", "$translate", "AppService", "AppUtil", "$ionicPopup", function ($scope, $translate, AppService, AppUtil, $ionicPopup) {

    var translations;
    $translate(["SETTINGS_SAVE_ERROR", "GPS_ERROR", "SET_MAP_LOCATION"]).then(function (translationsResult) {
        translations = translationsResult;
    });

    // New York
    var latLng = new google.maps.LatLng(40.73, -73.99);

    var mapOptions = {
        center: latLng,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        disableDoubleClickZoom: true
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    $scope.map = map;
    map.setCenter(latLng);

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "My Location",
        draggable: true
    });

    google.maps.event.addListener(map, "click", function (event) {
        marker.setPosition(event.latLng);
    });

    $scope.setLocation = function () {
        var pos = marker.getPosition();

        AppUtil.blockingCall(AppService.saveProfile({ gps: false, location: { latitude: pos.lat(), longitude: pos.lng() } }), function () {
            return AppService.goToNextLoginState();
        }, "SETTINGS_SAVE_ERROR");
    };

    $scope.cancel = function () {
        return AppService.logout();
    };

    $scope.$on("$ionicView.afterEnter", function (event) {
        $ionicPopup.alert({
            title: translations.GPS_ERROR,
            template: translations.SET_MAP_LOCATION
        });
    });
}]).controller("TermsOfUseCtrl", ["$scope", "AppService", "AppUtil", function ($scope, AppService, AppUtil) {

    // Required for Apple store submission when there is user generated content.
    // See the Next Steps in the question at http://www.quora.com/Apple-App-Store-rejection-category-14-3-help-needed

    $scope.agree = function () {
        return AppUtil.blockingCall(AppService.termsOfUseAgreed(), function () {
            return AppService.goToNextLoginState();
        });
    };

    $scope.logout = function () {
        return AppService.logout();
    };
}]).controller("ProfileCtrl", ["$scope", "$log", "$rootScope", "$state", "$cordovaFacebook", "$mdToast", "AppService", function ($scope, $log, $rootScope, $state, $cordovaFacebook, $mdToast, AppService) {

    $scope.$on("$ionicView.beforeEnter", function (event) {

        $scope.profile = AppService.getProfile();
        $scope.photos = $scope.profile.photos;
        $scope.age = new Date(new Date() - new Date($scope.profile.birthdate)).getFullYear() - 1970;

        if ($rootScope.facebookConnected) {
            // load the cached values first for quick update on the UI
            var likes = localStorage.getItem("facebookLikes");
            if (likes) {
                $scope.likes = JSON.parse(likes);
            }
            var friends = localStorage.getItem("facebookFriends");
            if (friends) {
                $scope.friends = JSON.parse(friends);
            }

            // update asynchronously
            // Only friends registered with your app will be returned
            // See http://stackoverflow.com/questions/23417356/facebook-graph-api-v2-0-me-friends-returns-empty-or-only-friends-who-also-u
            $cordovaFacebook.api("/me/friends").then(function (result) {
                $scope.friends = result.data;
                localStorage.setItem("facebookFriends", JSON.stringify(result.data));

                $cordovaFacebook.api("/me/likes").then(function (result) {
                    $scope.likes = result.data;
                    localStorage.setItem("facebookLikes", JSON.stringify(result.data));
                });
            });
        }
    });

    $scope.edit = function () {
        $state.go("menu.profile-edit");
    };
}]).controller("FbAlbumsCtrl", ["$scope", "$log", "$cordovaFacebook", function ($scope, $log, $cordovaFacebook) {
    $scope.albums = null;

    // TODO use $iconicLoading instead of the text status
    $cordovaFacebook.api("/me/albums").then(function (result) {
        $scope.albums = result.data;
    }, function (error) {
        $log.log("FbAlbumsController error " + JSON.stringify(error));
    });
}]).controller("FbAlbumCtrl", ["$log", "$rootScope", "$state", "$scope", "$stateParams", "$ionicLoading", "$cordovaFacebook", function ($log, $rootScope, $state, $scope, $stateParams, $ionicLoading, $cordovaFacebook) {

    $cordovaFacebook.api("/" + $stateParams.albumId + "/photos?fields=id,picture,source,height,width,images&limit=500").then(function (result) {
        $scope.photos = result.data
        // TODO handle if there are no photos
        ;
    }, function (error) {
        $log.log("FbAlbumController - error getting album photos " + JSON.stringify(error));
    });

    $scope.selectPhoto = function (photo) {
        $ionicLoading.show({ templateUrl: "loading.html" });
        getBase64FromImageUrl(photo.source);
    };

    function getBase64FromImageUrl(URL) {
        var img = new Image();
        img.crossOrigin = "anonymous";
        img.src = URL;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            var dataURL = canvas.toDataURL("image/png");

            $rootScope.cropPhoto = dataURL;
            $ionicLoading.hide();
            $state.go("^.crop");
        };
    }
}]).controller("PhotoCropCtrl", ["$log", "$scope", "$rootScope", "$ionicLoading", "$state", "$stateParams", "$ionicHistory", "AppService", function ($log, $scope, $rootScope, $ionicLoading, $state, $stateParams, $ionicHistory, AppService) {
    $scope.myImage = $rootScope.cropPhoto;
    // $scope.myImage = $stateParams.imageData TODO try and use a state param instead of rootScoe

    $scope.croppedImage = { data: "" };

    $scope.$on("$ionicView.afterLeave", function (event) {
        $rootScope.cropPhoto = null;
    });

    $scope.cancel = function () {
        $ionicHistory.goBack();
    };

    $scope.crop = function () {

        $ionicLoading.show({ templateUrl: "loading.html" });
        try {
            var dataURI = $scope.croppedImage.data;
            var base64;
            if (dataURI.split(",")[0].indexOf("base64") >= 0) base64 = dataURI.split(",")[1];else base64 = unescape(dataURI.split(",")[1]);

            AppService.setPhoto(base64).then(function (result) {
                $ionicLoading.hide();

                var viewHistory = $ionicHistory.viewHistory();

                if (viewHistory.backView.stateName == "menu.fb-album") {
                    // pop off the facebook album history items and set the back view to the profile edit page
                    var history = viewHistory.histories[viewHistory.currentView.historyId];
                    history.stack.splice(2, 3);
                    history.cursor = 1;
                    viewHistory.backView = history.stack[1];
                    $ionicHistory.goBack();
                } else {
                    // if we came from a camers/gallery photo selection then can just go back
                    $ionicHistory.goBack();
                }
            }, function (error) {
                $ionicLoading.hide();
                $log.log("error saving cropped image " + JSON.error(error));
            });
        } catch (e) {
            // TODO show error
            $ionicLoading.hide();
        }
    };
}]).controller("DiscoveryCtrl", ["$scope", "$state", "$mdToast", "$ionicLoading", "$ionicHistory", "AppService", "AppUtil", function ($scope, $state, $mdToast, $ionicLoading, $ionicHistory, AppService, AppUtil) {

    $scope.$on("$ionicView.enter", function () {
        $scope.profile = AppService.getProfile().clone();
    });

    $scope.save = function () {
        return AppUtil.blockingCall(AppService.saveProfile($scope.profile), function () {
            AppService.clearPotentialMatches();
            $state.go("menu.home");
        }, "SETTINGS_SAVE_ERROR");
    };

    $scope.cancel = function () {
        $scope.profile = AppService.getProfile($scope).clone();
    };
}]).controller("SettingsCtrl", ["$log", "$scope", "$rootScope", "$state", "$translate", "$mdToast", "AppService", "$ionicLoading", "$ionicActionSheet", "$cordovaFacebook", function ($log, $scope, $rootScope, $state, $translate, $mdToast, AppService, $ionicLoading, $ionicActionSheet, $cordovaFacebook) {

    var translations;
    $translate(["SETTINGS_SAVE_ERROR", "DELETE", "DELETE_ACCOUNT", "CANCEL"]).then(function (translationsResult) {
        translations = translationsResult;
    });

    $scope.profile = AppService.getProfile().clone();

    $scope.save = function () {
        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.saveSettings($scope.profile).then(function (result) {
            $scope.profile = AppService.getProfile().clone();
        }, function (error) {
            $log.log("save settings error " + JSON.stringify(error));
            $mdToast.show($mdToast.simple().content(translations.SETTINGS_SAVE_ERROR).hideDelay(2000));
        }).always(function () {
            $ionicLoading.hide();
        });
    };

    $scope.cancel = function () {
        $scope.profile = AppService.getProfile($scope).clone();
    };

    $scope.logout = function () {
        AppService.logout();
    };

    $scope.deleteUnmatchedSwipes = function () {
        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.deleteUnmatched().then(function (result) {
            $ionicLoading.hide();
        }, function (error) {
            $ionicLoading.hide();
            $log.log("error deleting unmatched swipes " + JSON.stringify(error));
            $mdToast.show($mdToast.simple().content("An error occured " + JSON.stringify(error)).hideDelay(3000));
        });
    };

    $scope.deleteAccount = function () {
        $ionicActionSheet.show({
            destructiveText: translations.DELETE,
            titleText: translations.DELETE_ACCOUNT,
            cancelText: translations.CANCEL,
            cancel: function cancel() {},
            destructiveButtonClicked: function destructiveButtonClicked(index) {
                doDelete();
                return true;
            }
        });
    };

    function doDelete() {
        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.deleteAccount().then(function (result) {
            $ionicLoading.hide();
            $scope.logout();
        }, function (error) {
            $ionicLoading.hide();
            $log.log("error deleting account " + JSON.stringify(error));
        });
    }
}]).controller("ContactCtrl", ["$scope", "AppService", "$ionicLoading", "$mdToast", function ($scope, AppService, $ionicLoading, $mdToast) {

    $scope.contact = { message: "" };

    $scope.sendMessage = function () {
        if ($scope.contact.message.length < 10) {
            $mdToast.show($mdToast.simple().content("Write at least a few words!").hideDelay(2000));
            return;
        }

        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.sendContactMessage($scope.contact.message).then(function (success) {
            $scope.contact.message = "";
            $mdToast.show($mdToast.simple().content("Message sent").hideDelay(3000));
        }, function (error) {
            $mdToast.show($mdToast.simple().content("An error occurred").hideDelay(3000));
        }).always(function () {
            $ionicLoading.hide();
        });
    };
}]).controller("LocationCtrl", ["$scope", "$translate", "AppService", "$ionicLoading", "AppUtil", function ($scope, $translate, AppService, $ionicLoading, AppUtil) {

    // TODO load the google map script async here when required instead of index.html
 /*  var translations;
    $translate(["SETTINGS_SAVE_ERROR", "GPS_ERROR"]).then(function (translationsResult) {
        translations = translationsResult;
    });

    var profile = AppService.getProfile();
    var location = profile.location;

    $scope.location = { useGPS: profile.gps };

    var myLatlng = new google.maps.LatLng(location.latitude, location.longitude);

    var mapOptions = {
        center: myLatlng,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        disableDoubleClickZoom: true
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    $scope.map = map;
    map.setCenter(myLatlng);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "My Location",
        draggable: !profile.gps
    });

    google.maps.event.addListener(map, "click", function (event) {
        if (!$scope.location.useGPS) marker.setPosition(event.latLng);
    });

    $scope.useGPSchanged = function () {
        marker.setDraggable(!$scope.location.useGPS);

        if ($scope.location.useGPS) {
            $ionicLoading.show({ templateUrl: "loading.html" });
            AppService.getCurrentPosition().then(function (gpsLocation) {
                return AppService.saveProfile({ gps: true, location: gpsLocation });
            }).then(function (profile) {
                marker.setPosition(new google.maps.LatLng(profile.location.latitude, profile.location.longitude));
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                if (error === "GPS_ERROR") AppUtil.toastSimple(translations.GPS_ERROR);else AppUtil.toastSimple(translations.SETTINGS_SAVE_ERROR);
                $scope.location.useGPS = false;
                marker.setDraggable(true);
            });
        }
        // else the user needs to click the save button
    };

    $scope.setLocation = function () {
        var pos = marker.getPosition();
        $ionicLoading.show({ templateUrl: "loading.html" });
        AppService.saveProfile({ gps: false, location: { latitude: pos.lat(), longitude: pos.lng() } }).then(function () {}, function (error) {
            return AppUtil.toastSimple(translations.SETTINGS_SAVE_ERROR);
        }).always(function () {
            $ionicLoading.hide();
        });
    };
*/
}]);
// TODO handle if there are no albums
// TODO alert user
// send back to main page?
"use strict";

angular.module("controllers").controller("ChatsCtrl", ["$scope", "$log", "AppService", function ($scope, $log, AppService) {

	$scope.$on("$ionicView.beforeEnter", function () {
		$scope.matches = AppService.getMutualMatches();
		AppService.resetBadge();
	});

	$scope.$on("matchRemoved", function (event, matchId) {
		$log.log("on ChatsCtrl removeMatch");
		$scope.$apply();
	});
}]).controller("ChatCtrl", ["$scope", "$log", "$timeout", "$interval", "$translate", "$ionicScrollDelegate", "$state", "$stateParams", "$ionicHistory", "$ionicNavBarDelegate", "$ionicActionSheet", "$ionicPopup", "$ionicLoading", "$mdToast", "AppService", "AppUtil", function ($scope, $log, $timeout, $interval, $translate, $ionicScrollDelegate, $state, $stateParams, $ionicHistory, $ionicNavBarDelegate, $ionicActionSheet, $ionicPopup, $ionicLoading, $mdToast, AppService, AppUtil) {

	// Modified from http://forum.ionicframework.com/t/ionic-elastichat-chat-demo-w-auto-resizing-textarea/13562

	var translations;
	$translate(["UNMATCHED", "REMOVE_MATCH", "REPORT", "MATCH_OPTIONS", "CANCEL", "REMOVE_MATCH_ERROR", "MATCH_REPORTED", "WANT_TO_REMOVE_MATCH", "REMOVE", "MESSAGE_NOT_SENT", "REQUEST_FAILED"]).then(function (translationsResult) {
		translations = translationsResult;
	});

	$scope.sending = false;
	$scope.profile = AppService.getProfile();

	var messageCheckTimer;

	var viewScroll = $ionicScrollDelegate.$getByHandle("userMessageScroll");
	var footerBar; // gets set in $ionicView.enter
	var scroller;
	var txtInput; // ^^^

	// A chat could have a number of messages while could take sometime to load from the database and create the DOM.
	// Instead of resolving in the router we will do the main work here so the initial UI tap is responsive and
	// display the messages when its all ready
	$scope.$on("$ionicView.enter", function () {
		if (window.cordova) {
			cordova.plugins.Keyboard.disableScroll(true);
			window.addEventListener("native.keyboardshow", keyboardShowHandler);
			window.addEventListener("native.keyboardhide", keyboardHideHandler);
		}

		//$log.log('UserMessages $ionicView.enter')
		$ionicLoading.show({ templateUrl: "loading.html", noBackdrop: true });
		AppService.getActiveChat($stateParams.matchId).then(function (result) {
			$scope.messages = result;
			return AppService.getProfileByMatchId($stateParams.matchId);
		}).then(function (result) {
			return $scope.matchProfile = result;
		}).then(function () {
			$scope.doneLoading = true;
			$scope.input = {
				// load what the user has previously typed, if anything
				message: localStorage["userMessage-" + $scope.matchProfile.id] || ""
			};
			viewScroll.scrollBottom();
			$ionicLoading.hide();

			$timeout(function () {
				footerBar = document.body.querySelector("#userMessagesView .bar-footer");
				scroller = document.body.querySelector("#userMessagesView .scroll-content");
				txtInput = angular.element(footerBar.querySelector("textarea"));
			}, 0);

			messageCheckTimer = $interval(function () {}, 20000);
		}, function (error) {
			$scope.messages = [];
			$ionicLoading.hide();
			$log.log("error loading chat " + JSON.stringify(error));
			AppUtil.toastSimpleTranslate("REQUEST_FAILED");
		});
	});

	$scope.$on("$ionicView.afterEnter", function () {
		AppService.setChatRead($stateParams.matchId, true);

		// this is just used by the report() function at the moment
		$scope.match = AppService.getMatch($stateParams.matchId);
	});

	// Save what the user has typed when they leave the view
	$scope.$on("$ionicView.beforeLeave", function () {
		if (!$scope.input.message || $scope.input.message.trim().length == 0) localStorage.removeItem("userMessage-" + $scope.matchProfile.id);else localStorage["userMessage-" + $scope.matchProfile.id] = $scope.input.message;
	});

	$scope.$on("$ionicView.leave", function () {
		if (window.cordova) {
			window.removeEventListener("native.keyboardshow", keyboardShowHandler);
			window.removeEventListener("native.keyboardhide", keyboardHideHandler);
			cordova.plugins.Keyboard.disableScroll(false);
		}

		//$log.log('leaving UserMessages view, destroying interval')
		// Make sure that the interval is destroyed
		if (angular.isDefined(messageCheckTimer)) {
			$interval.cancel(messageCheckTimer);
			messageCheckTimer = undefined;
		}
	});

	$scope.$on("newMessage", function (event, message) {
		if (message.match.id == $stateParams.matchId) {
			$ionicScrollDelegate.scrollBottom(true);
			// re-set the read flag if we are viewing this chat
			AppService.setChatRead(message.match.id, true);
		}
	});

	$scope.$on("matchRemoved", function (event, matchId) {
		$log.log("on ChatCtrl matchRemoved");
		if (matchId == $stateParams.matchId) {
			$mdToast.show($mdToast.simple().content(translations.UNMATCHED).hideDelay(2000));
			$ionicHistory.goBack();
		}
	});

	$scope.chatOptions = function () {
		$ionicActionSheet.show({
			buttons: [{ text: translations.REPORT }],
			destructiveText: translations.REMOVE_MATCH,
			titleText: translations.MATCH_OPTIONS,
			cancelText: translations.CANCEL,
			cancel: function cancel() {},
			destructiveButtonClicked: function destructiveButtonClicked(index) {
				unmatch();
				return true;
			},
			buttonClicked: function buttonClicked(index) {
				report();
				return true;
			}
		});
	};

	function report() {
		$ionicLoading.show({ templateUrl: "loading.html" });
		AppService.reportProfile($scope.matchProfile, $scope.match).then(function (result) {
			$log.log("reported match");
			$ionicLoading.hide();

			var confirmPopup = $ionicPopup.confirm({
				title: translations.MATCH_REPORTED,
				template: translations.WANT_TO_REMOVE_MATCH,
				okText: translations.REMOVE,
				cancelText: translations.CANCEL
			});
			confirmPopup.then(function (res) {
				if (res) unmatch();
			});
		}, function (error) {
			$ionicLoading.hide();
			$mdToast.show($mdToast.simple().content(translations.REQUEST_FAILED).hideDelay(2000));
			$log.log("error reporting match " + JSON.stringify(error));
		});
	}

	function unmatch() {
		$ionicLoading.show({ templateUrl: "loading.html" });
		AppService.removeMatch($stateParams.matchId).then(function (result) {
			$log.log("removed match ok");
			$ionicLoading.hide();
			$ionicHistory.goBack();
		}, function (error) {
			$ionicLoading.hide();
			$mdToast.show($mdToast.simple().content(translations.REMOVE_MATCH_ERROR).hideDelay(2000));
			$log.log("error removing match " + JSON.stringify(error));
		});
	}

	$scope.sendMessage = function (sendMessageForm) {
		if (!$scope.input.message.trim().length) return;
		// If you do a web service call this will be needed as well as before the viewScroll calls
		// you can't see the effect of this in the browser it needs to be used on a real device
		// for some reason the one time blur event is not firing in the browser but does on devices
		keepKeyboardOpen();

		var msg = $scope.input.message;
		$scope.input.message = "";

		// TODO have a collection of sending messages, then if a send fails the user can hold the message to resend
		// For now clear the message text to avoid sending duplicate message when send is clicked again
		AppService.sendChatMessage($stateParams.matchId, msg).then(function (sentMessage) {
			$timeout(function () {
				keepKeyboardOpen();
				viewScroll.scrollBottom(true);
			}, 0);
		}, function (error) {
			$log.error("error sending message " + JSON.stringify(error));
			// If the user hasn't type anything and the message failed, then restore the message
			if (!$scope.input.message) $scope.input.message = msg;
			AppUtil.toastSimple(translations.MESSAGE_NOT_SENT);
		});
	};

	// this keeps the keyboard open on a device only after sending a message, it is non obtrusive
	function keepKeyboardOpen() {
		//$log.log('keepKeyboardOpen')
		txtInput.one("blur", function () {
			//$log.log('textarea blur, focus back on it')
			txtInput[0].focus();
		});
	}

	$scope.onMessageHold = function (e, itemIndex, message) {
		return; // disable for now
		$log.log("onMessageHold");
		$log.log("message: " + JSON.stringify(message, null, 2));
		$ionicActionSheet.show({
			buttons: [{
				text: "Copy Text"
			}, {
				text: "Delete Message"
			}],
			buttonClicked: function buttonClicked(index) {
				switch (index) {
					case 0:
						// Copy Text
						//cordova.plugins.clipboard.copy(message.text)

						break;
					case 1:
						// Delete
						// no server side secrets here :~)
						$scope.messages.splice(itemIndex, 1);
						$timeout(function () {
							viewScroll.resize();
						}, 0);

						break;
				}

				return true;
			}
		});
	};

	// keyboardHeight and the handlers are required to set the right height on iOS
	var keyboardHeight = 0;

	function keyboardShowHandler(e) {
		keyboardHeight = e.keyboardHeight;
	}

	function keyboardHideHandler(e) {
		keyboardHeight = 0;
		$timeout(function () {
			scroller.style.bottom = footerBar.clientHeight + "px";
		}, 0);
	}

	// Need to resize on entering the view
	$scope.$on("elastic:resize", function (e, ta) {
		if (!ta) return;

		var taHeight = ta[0].offsetHeight;

		if (!footerBar) return;

		var newFooterHeight = taHeight + 10;
		newFooterHeight = newFooterHeight > 44 ? newFooterHeight : 44;

		footerBar.style.height = newFooterHeight + "px";

		if (device.platform.toLowerCase() === "ios") {
			scroller.style.bottom = newFooterHeight + keyboardHeight + "px";
		} else {
			scroller.style.bottom = newFooterHeight + "px";
		}
	});

	function onProfilePicError(ele) {
		this.ele.src = "" // set a fallback
		;
	}
}]);

// here you could check for new messages if your app doesn't use push notifications or user disabled them
// TODO remove this chat, or everything, from the history
"use strict";

angular.module("constants", []).constant("appName", "Join").constant("playStoreUrl", "").constant("itunesUrl", "").constant("socialShareMessage", "").constant("buildEnv", "prod").constant("facebookAppId", "340785822781848").constant("facebookAppName", "Cloneder").constant("parseAppId", "Babyp1lRHGq1zovIdbZfLHqeNjJBoIgsuOBQjbii").constant("parseJavascriptKey", "w8o2wLjk5IqmDNKl4GWyKchmXTvRZmhy8JGvMY6q").constant("parseSubDomain", "cloneder").constant("parseClientKey", "WXrSgMfilSytvgk5gu4m6c8pbGgL5BsUDwlPblGo").constant("linkedInId", "75zt0sfhmxae7g").constant("linkedInSecret", "pA1hcchX4XgIvMBV");
var FACEBOOK_APP_ID = "340785822781848";
//# sourceMappingURL=/maps/app.js.map