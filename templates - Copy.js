! function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("about.html", '<ion-view view-title="About"><ion-content class="padding"><p>About</p></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("chat.html", '<ion-view id="userMessagesView" view-title="{{::matchProfile.name}}"><ion-nav-buttons side="right"><i class="button button-icon icon ion-person" ui-sref="^.match-profile({profileId : matchProfile.id})"></i> <i class="button button-icon icon ion-android-more-vertical" ng-click="chatOptions()"></i></ion-nav-buttons><ion-content has-bouncing="true" class="has-header has-footer" delegate-handle="userMessageScroll"><div ng-show="doneLoading == true" ng-repeat="message in messages track by message.id" class="message-wrapper" on-hold="onMessageHold($event, $index, message)"><div ng-if="::message.sender != profile.uid"><img ng-click="viewProfile(message)" class="profile-pic left" ng-src="{{::matchProfile.photoUrl}}" onerror="onProfilePicError(this)"><div class="chat-bubble left"><div class="message" ng-bind-html="::message.text | escapeHTML" autolinker=""></div><div class="message-detail"><span am-time-ago="message.createdAt"></span></div></div></div><div ng-if="::message.sender == profile.uid"><div class="chat-bubble right"><div class="message" ng-bind-html="::message.text | escapeHTML" autolinker=""></div><div class="message-detail"><span am-time-ago="message.createdAt"></span></div></div></div><div class="cf"></div></div></ion-content><form name="sendMessageForm" ng-submit="sendMessage(sendMessageForm)" novalidate=""><ion-footer-bar class="bar-stable item-input-inset message-footer" keyboard-attach=""><label class="item-input-wrapper"><textarea ng-model="input.message" value="" style="width: 100%" placeholder="Write a message..." required="" minlength="1" maxlength="1500" msd-elastic=""></textarea></label><div class="footer-btn-wrap"><button class="button button-icon icon ion-android-send footer-btn" type="submit" ng-disabled="!input.message || input.message === \'\'"></button></div></ion-footer-bar></form></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("chats.html", '<style>\n    .unread {\n        font-weight: bold;\n    }\n</style><ion-view view-title="Chat"><ion-content><div ng-show="!matches.length" style="text-align: center;font-family:\'Avenir Next LT Pro Regular\';font-size:18px"><br>{{\'NO_MATCHES\' | translate}}<br><br>{{\'START_SWIPING\' | translate}}!</div><div class="list"><a class="item item-avatar" ng-repeat="match in matches track by match.id" ui-sref="^.chat({matchId : match.id})"><img ng-src="{{::match.profile.photoUrl}}" img-cache=""><h2>{{::match.profile.name}}</h2><p ng-class="match.read ? \'\' : \'unread\'" ng-bind-html="match.lastMessage | escapeHTML | emoji"></p></a></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("contact.html", '<ion-view view-title="Contact" cache-view="false"><ion-content padding="true"><div style="text-align: center"><h1>Cloneder</h1><br><b>A clone of Tinder built with Ionic and Parse.<br>Available for Android and iOS.<br><br>Source code licences available at:<br><a target="_system" href="http://engineerstoolbox.com/tinder-clone-source-code">http://engineerstoolbox.com</a></b></div><br><br><b>Contact Us</b> <textarea ng-model="contact.message" rows="6" style="width:100%;background: #EEEEEE"></textarea> <button class="button button-block button-positive" ng-click="sendMessage()">Send</button></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("crop.html", '<ion-view view-title="{{\'CROP_YOUR_PHOTO\' | translate}}" cache-view="false"><ion-content has-header="true" padding="true" scroll="false"><div class="cropArea"><img-crop image="myImage" result-image="croppedImage.data" area-type="square" result-image-size="300"></img-crop></div><section layout="horizontal" layout-sm="horizontal" layout-align="center center"><button class="button button-positive" ng-click="crop()">{{\'SAVE\' | translate}}</button> <button class="button button-light" ng-click="cancel()">{{\'CANCEL\' | translate}}</button></section></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("discovery.html", '<ion-view view-title="{{\'DISCOVERY_TITLE\' | translate}}" cache-view="false"><ion-content><ul class="list"><li class="item item-toggle">{{\'DISCOVERABLE\' | translate}} <label class="toggle"><input type="checkbox" ng-model="profile.enabled"><div class="track"><div class="handle"></div></div></label></li></ul><div class="item item-divider">{{\'SHOW_ME\' | translate}}:</div><ul class="list"><li class="item item-toggle">{{\'GUYS\' | translate}} <label class="toggle"><input type="checkbox" ng-model="profile.guys"><div class="track"><div class="handle"></div></div></label></li><li class="item item-toggle">{{\'GIRLS\' | translate}} <label class="toggle"><input type="checkbox" ng-model="profile.girls"><div class="track"><div class="handle"></div></div></label></li><li class="item item-divider">{{\'SEARCH_DISTANCE\' | translate}}: {{profile.distance}}{{profile.distanceType}}</li><li class="item" style="height: 60px"><slider floor="1" ceiling="200" ng-model-low="profile.distance" ng-model-high="profile.distance"></slider></li><li class="item item-divider">{{\'AGED_BETWEEN\' | translate}}: {{profile.ageFrom}} to {{profile.ageTo}}</li><li class="item" style="height: 60px"><slider floor="18" ceiling="55" ng-model-low="profile.ageFrom" ng-model-high="profile.ageTo"></slider></li></ul><div style="width:100%;padding-left: 10px;padding-right: 10px;"><button class="button button-block button-positive" ng-click="save()">{{\'SAVE\' | translate}}</button> <button class="button button-block button-light" ng-click="cancel()">{{\'CANCEL\' | translate}}</button></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("emailVerification.html", '<ion-view cache-view="false"><ion-content class="flex-center"><div class="row center"><div class="col">{{\'VERIFY_EMAIL_MESSAGE\' | translate}}</div></div><div class="row center"><div class="col"><i class="icon ion-ios-email-outline" style="font-size: 90px"></i></div></div><section layout="horizontal" layout-sm="horizontal" layout-align="center center"><button class="button button-positive" ng-click="isEmailVerified()">{{\'CHECK_EMAIL_VERIFICATION\' | translate}}</button></section><div class="row center"><div class="col"><a ng-click="cancel()">Cancel</a></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("fbAlbum.html", '<ion-view view-title="{{\'ADD_A_PHOTO\' | translate}}" cache-view="false"><ion-nav-bar class="bar-positive"><ion-nav-back-button></ion-nav-back-button></ion-nav-bar><ion-content has-header="true" padding="true"><section id="fbphotos"><a ng-click="selectPhoto(photo)" ng-repeat="photo in photos"><img crossorigin="anonymous" ng-src="{{photo.picture}}"></a></section></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("fbAlbums.html", '<ion-view view-title="{{\'ALBUMS\' | translate}}" cache-view="false"><ion-content has-header="true" padding="true"><div ng-show="albums == null">{{\'LOADING\' | translate}}...</div><div ng-show="albums.length == 0">{{\'NO_FB_ALBUMS\' | translate}}</div><div class="list"><a class="item item-avatar" ng-repeat="album in albums" ui-sref="^.fb-album({albumId : album.id})"><img ng-src="https://graph.facebook.com/{{album.id}}/picture?type=album&access_token={{fbAccessToken}}"><h2>{{album.name}}</h2><p>{{album.count}} photos</p></a></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("loading.html", "<ion-spinner></ion-spinner>")
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("locationMap.html", '<ion-view view-title="{{\'SET_LOCATION\' | translate}}" cache-view="false"><ion-content><div class="main_bg"><div class="row"><div class="col"><label class="item item-input"><input type="text" ng-model="user.desc" placeholder="Description"></label></div><div class="row pad"><div class="col pad"><div class="profile_bg"><div class="wt_txt">What is the Activity ?</div></div><div class="row gre_bg"><div class="col"> <div class="img_btn4"><div class="cam_img" ><a href="#"><img src="./img/camera_img.png"  alt=""/></a><p>RetakePhoto</p></div><div class="cam_img"><a href="#"><img src="./img/img_icon.png" alt=""/></a><p> Select Different Photo </p></div><div class="cam_img" ><a href="#/menu/createActivitynext" ><img src="../img/next.png" ng-click="nextActivity()" alt="" /></a><p> Next </p></div></div></div></div></div></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("locationSetup.html", '<ion-view view-title="{{\'CREATE_ACTIVITY\' | translate}}" cache-view="false"><ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true"><div class="main_bg"><div class="row pad"><div class="col pad"><div class="profile_bg"><div class="wt_txt">What is the Activity ?</div></div><div class="row gre_bg"><div class="col"> <div class="img_btn4"><div class="cam_img" ><a href="#"> <img src="../img/camera_img.png" alt=""/> </a><p>Retake	Photo </p></div><div class="cam_img"><a href="#"> <img src="../img/img_icon.png" alt=""/> </a><p> Select Different Photo </p></div></div></div></div></div></div></div></div></ion-content><ion-footer-bar><button class="button button-block button-positive" style="margin:0px" ng-click="setLocation()">{{\'SAVE\' | translate}}</button></ion-footer-bar></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("matchProfile.html", '<ion-view view-title="{{matchProfile.name}}"><ion-nav-buttons side="right"></ion-nav-buttons><ion-content><ion-slide-box show-pager="true" does-continue="true"><ion-slide ng-repeat="photo in matchProfile.photos track by $index"><img ng-src="{{photo.url()}}" style="width:100%"></ion-slide><ion-slide ng-if="!matchProfile.photos.length"><img src="img/generic_avatar.jpg" style="width:100%"></ion-slide></ion-slide-box><div style="padding: 10px;"><b>{{matchProfile.name}}</b>, {{matchProfile.age}}<br><span style="color:gray">{{distance}}{{profile.distanceType == \'km\' ? \'km\' : \'mi\'}} {{\'AWAY\' | translate}}</span><br><div ng-show="matchProfile.about">{{profile.about}}</div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("menu.html", '<ion-side-menus enable-menu-with-back-views="false"><ion-side-menu-content><ion-nav-bar class="bar-positive"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side="left"><button class="button button-icon button-clear ion-navicon" menu-toggle="left"></button></ion-nav-buttons></ion-nav-bar><ion-nav-view name="menuContent"><div class="bar bar-header bar-light app-name"><h1 class="title head_content"></h1></div></ion-nav-view></ion-side-menu-content><ion-side-menu side="left" id="menu-left"><ion-header-bar class="bar-positive"><h1 class="title">title</h1></ion-header-bar><ion-content><ul class="list"><a ui-sref="menu.profile" class="item" menu-close=""><img src="./img/user_icon.png"/>  {{\'ME_AND_MY_ACTIVITIES\' | translate}}</a> <a href="#/menu/discovery" class="item" menu-close=""><img src="./img/run_people.png"/>  {{\'DISCOVER_ACTIVITIES\' | translate}}</a> <a href="#/menu/chats" class="item" menu-close=""><img src="./img/chat_icon.png"/> {{\'MENU_CHAT\' | translate}}</a> <a href="#/menu/home" class="item" menu-close=""><img src="./img/search_icon.png"/> {{\'FIND_ACTIVITIES\' | translate}}</a> <a href="#/menu/createActivity" class="item" menu-close=""><img src="./img/plus_icon.png"/>{{\'CREATE_ACTIVITY\' | translate}}</a> <a href="#/menu/people" class="item" menu-close=""><img src="./img/select_people_icon.png"/> {{\'SELECT_PEOPLE\' | translate}}</a> <a href="#/menu/settings" class="item" menu-close=""><img src="./img/setting_icon.png"/> {{\'MY_PREFERENCES\' | translate}}</a> <a href="#/menu/contact" ng-controller="ShareController as shareCtrl" ng-click="shareCtrl.share()" class="item" menu-close=""><img src="./img/contact_icon.png"/>  {{\'CONTACT_US\' | translate}}</a></ul></ion-content></ion-side-menu></ion-side-menus>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("newMatch.html", '<ion-modal-view><ion-header-bar><h1 class="title">{{\'ITS_A_MATCH\' | translate}}!</h1></ion-header-bar><ion-content><div class="row"><div class="col center"><p translate="LIKED_EACH_OTHER" translate-values="{name: matchProfile.name}"></p></div></div><div class="row"><div class="col center" style="min-height: 100px;"><img class="circle" ng-src="{{profile.photoUrl}}"> <span style="width:30px"></span><img class="circle" ng-src="{{matchProfile.photoUrl}}"></div></div><div class="row"><div class="col col-50 col-offset-25 center"><a class="button" style="width:100%;" ng-click="messageNewMatch()">{{\'SEND_MESSAGE\' | translate}}</a><br><br><a class="button" style="width:100%;" ng-click="closeNewMatch()">{{\'KEEP_PLAYING\' | translate}}</a></div></div></ion-content></ion-modal-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profile.html", '<ion-view hide-nav-bar="true" cache-view="false"><ion-content has-header="false" scroll="true"><div class="main_bg_1"><div class="row"><div class="col"><div class="bar bar-header bar-light app-name"><div class="icon-left title3 ion-navicon-round sandwich_icon "> </div><h1 class="title head_content"> Me & My Activity </h1><div class="icon-right title4 ion-edit edit_icon"></a> </div></div></div></div><div class="row pad"><div class="col pad"><div class="profile_bg_1"> </div> </div></div><div class="row danile_content_width"><div class="col"><h4> Daniel, 35	</h4><p> About Daniel </p><p> I love developing highlyscaleable Software</p>	</div></div><div class="row danile_content_width"><div class="col"><h5> My Friend’s Using JOIN</h5><ul><li><img src="../img/img_thumbnail_slider.png" alt=""/></li><li><img src="../img/img_thumbnail_slider.png" alt=""/></li><li><img src="../img/img_thumbnail_slider.png" alt=""/></li><li></li>	</ul></div></div><div class="row danile_content_width"><div class="col"><h5> Joined activities (25+)</h5><ul><li><img src="../img/join_activity_1.png" alt=""/></li><li><img src="../img/join_activity_2.png" alt=""/></li><li><img src="../img/join_activity_3.png" alt=""/></li><li><img src="../img/join_activity_4.png" alt=""/></li>	<li><img src="../img/join_activity_5.png" alt=""/></li>	</ul></div></div><div class="row danile_content_width"><div class="col"><h5> My Activities (20+)</h5><ul><li><img src="../img/join_activity_1.png" alt=""/></li><li><img src="../img/join_activity_2.png" alt=""/></li><li><img src="../img/join_activity_3.png" alt=""/></li><li><img src="../img/join_activity_4.png" alt=""/></li>	<li><img src="../img/join_activity_5.png" alt=""/></li>	</ul></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profileEdit.html", '<ion-view view-title="{{\'EDIT_PROFILE_TITLE\' | translate}}" cache-view="false" ng-controller="ProfileEdit as vm"><ion-nav-buttons side="primary"><i class="button button-icon icon ion-ios-loop-strong" ng-click="vm.swapPhotos()" ng-if="vm.selectedCount() == 2" ng-cloak=""></i> <i class="button button-icon icon ion-ios-trash" ng-click="vm.deletePhotos()" ng-if="vm.selectedCount() > 0" ng-cloak=""></i></ion-nav-buttons><ion-content padding="true"><div class="row"><div class="col col-33" ng-repeat="photo in vm.photos track by $index"><img ng-class="photo.selected ? \'profileImageSelected\' : \'profileImage\'" ng-click="vm.toggleSelected(photo)" ng-src="{{photo.file.url()}}" class="profileImg"></div><div class="col col-33" id="addPhoto" ng-if="vm.photos.length < vm.MAX_PHOTOS"><img ng-src="{{vm.NO_IMAGE}}" ng-click="vm.addPhoto()" class="profileImg"></div></div><br><div><h2>{{\'ABOUT_YOU\' | translate}}</h2><textarea class="profileAboutTextarea" placeholder="{{\'ABOUT_YOU\' | translate}}" id="aboutYou" ng-model="vm.about" ng-keyup="vm.expandText()" ng-keydown="vm.expandText()"></textarea><br><div style="text-align:center"><button class="button button-positive" ng-click="vm.saveProfile()" ng-hide="vm.profile.about == vm.about">&nbsp;{{\'SAVE\' | translate}}&nbsp;</button></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profileSetup.html", '<ion-view view-title="{{\'PROFILE_SETUP\' | translate}}" cache-view="false"><ion-header-bar class="bar-positive"><h1 class="title">{{\'PROFILE_SETUP_MSG\' | translate}}</h1></ion-header-bar><ion-content padding="true"><div class="list"><label class="item item-input"><span class="input-label">{{\'FIRST_NAME\' | translate}}</span> <input type="text" ng-model="user.name"></label> <label class="item item-input item-select"><div class="input-label">{{\'BIRTH_MONTH\' | translate}}</div><select ng-model="user.birthMonth"><option ng-repeat="month in months" value="{{$index}}">{{month}}</option></select></label> <label class="item item-input item-select"><div class="input-label">{{\'BIRTH_YEAR\' | translate}}</div><input type="number" min="{{yearFrom}}" max="{{yearTo}}" step="1" value="1980" ng-model="user.birthYear"></label><div class="item item-divider">{{\'GENDER\' | translate}}:</div><label class="item item-radio"><input type="radio" name="gender" value="M" ng-model="user.gender"><div class="item-content">{{\'MALE\' | translate}}</div><i class="radio-icon ion-checkmark"></i></label> <label class="item item-radio"><input type="radio" name="gender" value="F" ng-model="user.gender"><div class="item-content">{{\'FEMALE\' | translate}}</div><i class="radio-icon ion-checkmark"></i></label></div><button class="button button-block button-positive" ng-click="saveProfile()">{{\'SAVE\' | translate}}</button><br><button class="button button-block" ng-click="logout()">{{\'LOGOUT\' | translate}}</button></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profileView.html", '<ion-view view-title="{{selectedCard.name}}"><ion-nav-buttons side="right"><i class="button button-icon icon ion-android-close" ng-click="reject()"></i> <i class="button button-icon icon ion-ios-heart-outline" ng-click="like()"></i> <i class="button button-icon icon ion-android-more-vertical" ng-click="profileOptions()"></i></ion-nav-buttons><ion-content><ion-slide-box show-pager="true" does-continue="true"><ion-slide ng-repeat="photo in selectedCard.photos track by $index"><img ng-src="{{photo.url()}}" style="width:100%"></ion-slide><ion-slide ng-if="!selectedCard.photos.length"><img src="img/generic_avatar.jpg" style="width:100%"></ion-slide></ion-slide-box><div style="padding: 10px;"><b>{{selectedCard.name}}</b>, {{selectedCard.age}}<br><span style="color:gray">{{distance}}{{profile.distanceType == \'km\' ? \'km\' : \'mi\'}} {{\'AWAY\' | translate}}</span><br><div ng-show="selectedCard.about">{{selectedCard.about}}</div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("people.html", '<ion-view hide-nav-bar="false" cache-view="false"><ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true"><div class="main_bg"><div class="row"><div class="col"><div class="bar bar-subheader sub_head"><h2 class="title2">Select People</h2></div></div></div><div class="row pad"><div class="col pad"><div class="profile_bg"><div class="wt_txt">Want to JOIN :<br/>Lake. Fun.</div></div><div class="row pad bg"><div class="col pad"><div class="button-bar prf_btn"><a class="icon-left ion-person-stalker org_btn">8</a><a class="icon-left ion-ios-book-outline  org_btn">22</a></div></div></div><div class="row sky_bg"><div class="col"><div class="img_btn"><a href="#"><img src="../img/cros_img_icon.png" alt=""/></a><a href="#" class="img_btn_2"><img src="../img/i_img_icon.png" alt=""/></a><a href="#"><img src="../img/pus_img_icon.png" alt=""/></a></div><p class="sky_p">Swipe to see Activities<br/>Sorted by Distance</p></div></div></div></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("settings.html", '<ion-view view-title="{{\'DISCOVERY_TITLE\' | translate}}" cache-view="false"><ion-content><ul class="list"><li class="item item-toggle">{{\'DISCOVERABLE\' | translate}} <label class="toggle"><input type="checkbox" ng-model="profile.enabled"><div class="track"><div class="handle"></div></div></label></li></ul><div class="item item-divider">{{\'SHOW_ME\' | translate}}:</div><ul class="list"><li class="item item-toggle">{{\'GUYS\' | translate}} <label class="toggle"><input type="checkbox" ng-model="profile.guys"><div class="track"><div class="handle"></div></div></label></li><li class="item item-toggle">{{\'GIRLS\' | translate}} <label class="toggle"><input type="checkbox" ng-model="profile.girls"><div class="track"><div class="handle"></div></div></label></li><li class="item item-divider">{{\'SEARCH_DISTANCE\' | translate}}: {{profile.distance}}{{profile.distanceType}}</li><li class="item" style="height: 60px"><slider floor="1" ceiling="200" ng-model-low="profile.distance" ng-model-high="profile.distance"></slider></li><li class="item item-divider">{{\'AGED_BETWEEN\' | translate}}: {{profile.ageFrom}} to {{profile.ageTo}}</li><li class="item" style="height: 60px"><slider floor="18" ceiling="55" ng-model-low="profile.ageFrom" ng-model-high="profile.ageTo"></slider></li></ul><div style="width:100%;padding-left: 10px;padding-right: 10px;"><button class="button button-block button-positive" ng-click="save()">{{\'SAVE\' | translate}}</button> <button class="button button-block button-light" ng-click="cancel()">{{\'CANCEL\' | translate}}</button></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("sign-in.html", '<ion-view hide-nav-bar="true" cache-view="false"><ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true"><div class="main_bg"><div class="row"><div class="col"><div class="app-name"> <img src="./img/header_app_icon.png"  alt=""></div></div></div><div class="row center"><div class="col"><div class="button-bar"><a><i class="icon ion-social-facebook"></i></a> <a class="login_f" ng-show="showForm == true" ng-class="login.class" ng-click="facebookLogin()">Login With Facebook</a></div><div class="or">Or</div><div class="list list_1" ng-show="showForm == true"><div class="first_name">Username/Email</div><label class="item item-input custom_input"><input type="text" placeholder="First Name" ng-model="credentials.email"></label><div class="first_name">Password</div><label class="item item-input custom_input"><input type="text" placeholder="Password" ng-model="credentials.password"></label><div class="button-bar button-bar1"><a id="login" class="button login_btn" ng-click="redirect()">Login</a> <a class="button regis_btn" id="register" ng-click="emailRegister()">Register</a></div></div></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("swipe.html", '<ion-view hide-nav-bar="false" cache-view="false"><ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true"><style>\n' +
            '\n' +
            '      @-webkit-keyframes fade_out_animation {\n' +
            '        0% { -webkit-transform: scale(1); }\n' +
            '        100% { -webkit-transform: scale(2);  opacity: 0;  }\n' +
            '      }\n' +
            '\n' +
            '      .imgOverlay{\n' +
            '        position: absolute;\n' +
            '        margin-left: auto;\n' +
            '        margin-right: auto;\n' +
            '        left: 0;\n' +
            '        right: 0;\n' +
            '      }\n' +
            '\n' +
            '      .imgCircle{\n' +
            '        width: 150px;\n' +
            '        height: 150px;\n' +
            '        border-radius: 150px;\n' +
            '        -webkit-border-radius: 150px;\n' +
            '        -moz-border-radius: 150px;\n' +
            '      }\n' +
            '\n' +
            '      .verticalAlign{\n' +
            '        position: relative;\n' +
            '        top: 50%;\n' +
            '        transform: translateY(-50%);\n' +
            '        width:100%;\n' +
            '        margin:0 auto;\n' +
            '      }\n' +
            '\n' +
            '      \n' +
            '\n' +
            '      .fade-out {\n' +
            '        animation-name: \'fade_out_animation\';\n' +
            '        animation-duration: 2000ms;\n' +
            '        animation-iteration-count: infinite;\n' +
            '        animation-timing-function: linear;\n' +
            '        -webkit-animation-name: \'fade_out_animation\';\n' +
            '        -webkit-animation-duration: 2000ms;\n' +
            '        -webkit-animation-iteration-count: infinite;\n' +
            '        -webkit-animation-timing-function: linear;\n' +
            '        -moz-animation-name: \'fade_out_animation\';\n' +
            '        -moz-animation-duration: 2000ms;\n' +
            '        -moz-animation-iteration-count: infinite;\n' +
            '        -moz-animation-timing-function: linear;\n' +
            '        transition: opacity 2s\n' +
            '      }\n' +
            '    </style><div class="main_bg"><div class="row"><div class="col"><div class="bar bar-subheader sub_head"><div class="button-bar prf_btn2"> <div class="icon-left title3 ion-arrow-right-a "> 7Km </div> <div class="icon-right title4">Tomorrow</a> </div></div></div></div><div class="row pad"><div class="col pad"><div class="profile_bg"><div class="wt_txt">Lake. Fun.</div></div><div class="row pad bg"><div class="col pad"><div class="button-bar prf_btn_2"> <a class="icon-left ion-android-share-alt org_btn">share</a></div></div></div><div class="row sky_bg"><div class="col"><div class="img_btn"><a href="#"><img src="./img/cros_img_icon.png" alt=""/></a><a href="#" class="img_btn_2"><img src="./img/i_img_icon.png" alt=""/></a><a href="#"><img src="./img/pus_img_icon.png" alt=""/></a></div><p class="sky_p">Swipe to see Activities <br />Sorted by Distance</p></div></div></div></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("termsOfUse.html", '<ion-view cache-view="false"><ion-header-bar class="bar-positive"><h1 class="title">{{\'TERMS_OF_USE\' | translate}}</h1></ion-header-bar><ion-content padding="true"><div style="text-align: center"><p>In using the App, you agree to conduct yourself in a civil and respectful manner. You are responsible for all content and materials that you post.</p><p>You agree not to upload or post any content or material that is unlawful, harassing, abusive, threatening, vulgar, racist, obscene, sexually explicit, promotes bigotry, hatred or harm to any group or individual, or otherwise objectionable.</p><p>Violation of these terms may result in account suspension or cancellation</p></div><button class="button button-block button-positive" ng-click="agree()">{{\'AGREE\' | translate}}</button><br><button class="button button-block" ng-click="logout()">{{\'LOGOUT\' | translate}}</button></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("createActivitynext.html", '<ion-view hide-nav-bar="true" cache-view="false"><ion-content has-header="false" scroll="true"><div class="main_bg"><div class="row"><div class="col"><div class="barbar-headerbar-lightapp-name"><h1 class="titlehead_content"><img class="title-image" src="../img/header_app_icon.png" alt=""/>CreateActivity</h1></div><div class="barbar-subheadersub_head"><h2 class="title2">LocationFound</h2></div><label class="itemitem-input"><input type="text" ng-model="user.desc" placeholder="Description"></label></div></div><div class="rowpad"><div class="colpad"><div class="profile_bg"><div class="wt_txt"><div class="pub_text"><i class="iconion-edit"></i><p>---------------------<p><i class="iconion-calendar"></i><p>SetDateandTime<p><i class="iconion-information"></i><p>AddInformation<p><i class="iconion-location"></i><p>SetLocationonMap<p><i class="iconion-gear-b"></i><p>Settings<p></div></div></div><div class="rowgreen_bg"><div class="col"><div class="img_btn7"><a href="#"><img src="../img/vid_play_icon.png" alt=""/></a><p>ClickHeretoPublish</p></div></div></div></div></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("createActivity.html", '<ion-view hide-nav-bar="true" cache-view="false"><ion-content has-header="false" scroll="false"><div class="main_bg"><div class="row"><div class="col"><div class="bar bar-header bar-light app-name"><h1 class="title head_content"><img class="title-image"src="../img/header_app_icon.png" alt=""/> Create Activity</h1></div></div></div><div class="row center"><div class="col"><div class="content has-header padding"><h2 class="color_cont mg_top">No JOIN activities </br>in your area?</h2></div><div ng-click ="createActivityLocation()" class="button-bar button-bar1"><a href="#/menu/location" class="button b_first">Be the first: Create an activity</a></div></div></div></div></ion-content></ion-view>')
    }])
}();
// Compressed using http://javascript-minifier.com/ 
// DeCompressed using http://jsbeautifier.org/