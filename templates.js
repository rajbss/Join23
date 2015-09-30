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
        t.put("chat.html", 
        	'<ion-view id="userMessagesView" view-title="{{::matchProfile.name}}">'+
   
			   '<ion-nav-buttons side="right">'+
					'<i class="button button-icon icon ion-person" ui-sref="^.match-profile({profileId : matchProfile.id})"></i>'+
					'<i class="button button-icon icon ion-android-more-vertical" ng-click="chatOptions()"></i>'+
				'</ion-nav-buttons>'+
   
			   '<ion-content has-bouncing="true" class="has-header has-footer" delegate-handle="userMessageScroll">'+
				  '<div ng-show="doneLoading == true" ng-repeat="message in messages track by message.id" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">'+
					 '<div ng-if="::message.sender != profile.uid">'+
						'<img ng-click="viewProfile(message)" class="profile-pic left" ng-src="{{::matchProfile.photoUrl}}" onerror="onProfilePicError(this)">'+
						'<div class="chat-bubble left">'+
						   '<div class="message" ng-bind-html="::message.text | escapeHTML" autolinker=""></div>'+
						   '<div class="message-detail">'+
								'<span am-time-ago="message.createdAt"></span>'+
						   '</div>'+
						'</div>'+
					 '</div>'+
					 '<div ng-if="::message.sender == profile.uid">'+
						'<div class="chat-bubble right">'+
						   '<div class="message" ng-bind-html="::message.text | escapeHTML" autolinker=""></div>'+
						   '<div class="message-detail">'+
								'<span am-time-ago="message.createdAt"></span>'+
						   '</div>'+
						'</div>'+
					 '</div>'+
					 '<div class="cf"></div>'+
				  '</div>'+
			   '</ion-content>'+
			   '<form name="sendMessageForm" ng-submit="sendMessage(sendMessageForm)" novalidate="">'+
				  '<ion-footer-bar class="bar-stable item-input-inset message-footer" keyboard-attach="">'+
					'<label class="item-input-wrapper">'+
						'<textarea ng-model="input.message" value="" style="width: 100%" placeholder="Write a message..." required="" minlength="1" maxlength="1500" msd-elastic=""></textarea>'+
					'</label>'+
					'<div class="footer-btn-wrap">'+
						'<button class="button button-icon icon ion-android-send footer-btn" type="submit" ng-disabled="!input.message || input.message === \'\'"></button>'+
					'</div>'+
				  '</ion-footer-bar>'+
			   '</form>'+
			'</ion-view>'
        )
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("chats.html", 
			'<style>\n    .unread {\n        font-weight: bold;\n    }\n</style>'+
			'<ion-view hide-nav-bar="false" cache-view="false" view-title="Chat" ng-init="showChatterInfo=true">'+
			   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span></ion-nav-title>'+
			   
			   '<ion-nav-buttons side="right">'+
   					'<div style="font-size: 15px;font-weight: 500;    margin-top: -2px;">'+
   						'<span>{{user.myDate | date:"EEEE"}}</span>'+//
   						'<span>{{user.myDate | date:"h:mm a"}}</span>'+
   					'</div>'+
   				'</ion-nav-buttons>'+
   					
			   '<ion-content has-header="false" scroll="false">'+
				 
				
				 
				 '<section  class="responsive_con_class">'+
		
					// header activity name 
				 '<div style="background-color:#000;padding:10px;" class="row">'+
		
					'<div class="col col-45 icon-left chatActivity_name">Name Of the Activity</div>'+							
					'<div class="col col-20 icon-center ion-android-share-alt chatActivity_Img_cls"></div>'+
	
					'<div class="col col-35 icon-right chatActivity_name_time">ALEX : 12:45</div>'+
				'</div>'+
				 // header activity name
				 
				 // activty desk
	 	
					 '<div style="margin: 0px;background-color: #687983;"class="row">'+
							 '<div>'+
								'<table width="100%">'+
									'<tr>'+
										'<td style="width: 100px;height: 100px;"><img src="../img/chat_1.png" style="width: 70px;height: 70px;margin: 5px 15px;border-radius: 100%;"/></td>'+
							
										'<td style="width: 100%;vertical-align: top;">'+
											'<div style="font-size: 17px;color: #fff;margin: 5px 0px;">'+
												'<div><span>Location : </span><span> Frankfurt</span></div>'+
											'<div><span>Information : </span><span> We meet in front of the Forest.</span></div>'+
											'<div ng-hide="showChatterInfo"><span>Members : </span><span>#Klettern #wasgehtab #mrnobody #Alexmuckibude</span></div>'+
											'</div>'+
								
								
								
										'</td>'+
							
										'<td style="width: 30px;vertical-align: middle;"><div ng-click="showChaterInfo()" class="ion-chevron-right right_arrow_chat"></div></td>'+
									'</tr>'+
								'</table>'+
					
							 '</div>'+
			 
					  '</div>'+
	 
				 // activty desk
				 
				 
				 
				 //content
				 '<div style="margin: 5px 0px;" class = "row header responsive_con_rowCls"> '+
												
						'<ion-scroll  class="col scroll-col" delegate-handle="userMessageScroll">'+
							'<div class="list">'+
								'<div class="row unlimited-items"> '+
									'<div class="col" >'+
										
										'<div ng-repeat="message in messages" class="message-wrapper" >'+
      
											  '<div ng-if="user.id != message.userId">'+
					  
												'<img  class="profile-pic left" ng-src="{{message.img_url}}" />'+
	  
												  '<div class="chat-bubble left">'+
	  
													  '<div class="message" ng-bind-html="message.message | nl2br" autolinker></div>'+
	  
													  '<div class="message-detail">'+
														  '<span class="bold">{{message.username}}</span>'+
														  '<span ></span>'+
													  '</div>'+
	  
												  '</div>'+
											  '</div>'+
	  
											  '<div ng-if="user.id === message.userId">'+
					
												   '<img class="profile-pic right" ng-src="{{message.img_url}}" />'+
					
												  '<div class="chat-bubble right">'+
	  
													  '<div class="message" ng-bind-html="message.message | nl2br" autolinker>'+
													  '</div>'+
	  
													  '<div class="message-detail">'+
														  '<span class="bold">{{message.username}}</span>'+
														  '<span ></span>'+
													  '</div>'+
	  
												  '</div>'+
					
											  '</div>'+
	  
											  '<div class="cf"></div>'+
	  
										  '</div>'+
										
														
									'</div>'+
								'</div>'+
							'</div>'+
						'</ion-scroll> '+	

						
						
						
						
						
						
			
				'</div>'+
				//content	
					
					
					 //footer
					 					 
						 '<div class="row footer_bg" >'+
							'<div class="item item-input-inset">'+
								'<div><img class="upload_chat_photoCls" src="../img/upload_img.png" alt=" "/></div>'+
								
								
								'<label class="item-input-wrapper">'+
								  '<textarea  style="width:100%" ng-model="inputText.message" placeholder="Send a message..."></textarea>'+
								  '<a class="icon ion-camera placeholder-icon camera_img" href="#"></a>'+
								'</label>'+
								'<button ng-click="onSendMessage()" class="button button-small ion-paper-airplane send_fotter_icon"></button>'+
							'</div>'+
						 '</div>'+
						 
						 
					
 
					 //footer
					
			
				'</section>'+ 
				
				
					 
					 
					 
			   '</ion-content>'+
			'</ion-view>'
			
			
        )
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
        t.put("discovery.html", 
        
        	'<ion-view ng-init="profile={ageFrom:18,ageTo:30,enabled:true,guys:true,girls:true,autoJoin:true}" view-title="{{\'ACTIVITY_SETTINGS_TITLE\' | translate}}" cache-view="false">'+
			   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>{{\'ACTIVITY_SETTINGS_TITLE\' | translate}}</span></ion-nav-title>'+
			   '<ion-content>'+
	  
				  '<ul class="list">'+
					 '<li class="item item-toggle">'+
						'Online ({{\'DISCOVERABLE\' | translate}})'+
						'<label class="toggle">'+
						   '<input type="checkbox" ng-model="profile.enabled">'+
						   '<div class="track">'+
							  '<div class="handle"></div>'+
						   '</div>'+
						'</label>'+
					 '</li>'+
		 
					 '<li class="item item-toggle">'+
						'{{\'AUTOMATIC_JOIN\' | translate}}<button class="help_indicator"></button>'+
						'<label class="toggle">'+
						   '<input type="checkbox" ng-model="profile.autoJoin">'+
						   '<div class="track">'+
							  '<div class="handle"></div>'+
						   '</div>'+
						'</label>'+
					 '</li>'+
				  '</ul>'+
	  
				  '<div class="item item-divider">{{\'SHOW_ME\' | translate}}:</div>'+
	  
				  '<ul class="list">'+
		 
					 '<li class="item item-toggle">'+
						'{{\'GUYS\' | translate}} '+
						'<label class="toggle">'+
						   '<input type="checkbox" ng-model="profile.guys">'+
						   '<div class="track">'+
							  '<div class="handle"></div>'+
						   '</div>'+
						'</label>'+
					 '</li>'+
		
					 '<li class="item item-toggle">'+
						'{{\'GIRLS\' | translate}} '+
						'<label class="toggle">'+
						   '<input type="checkbox" ng-model="profile.girls">'+
						   '<div class="track">'+
							  '<div class="handle"></div>'+
						   '</div>'+
						'</label>'+
					 '</li>'+
		 
					 '<li class="item item-divider">{{\'AGED_BETWEEN\' | translate}}: {{profile.ageFrom}} to {{profile.ageTo}}</li>'+
					 '<li class="item" style="height: 60px">'+
						'<slider floor="18" ceiling="55" ng-model-low="profile.ageFrom" ng-model-high="profile.ageTo"></slider>'+
					 '</li>'+
				  '</ul>'+
	  
				  '<div align="center" style="width:100%;padding-left: 10px;padding-right: 10px;">'+
					'<button class="button save_setting" ng-click="save()">{{\'SAVE\' | translate}}</button>'+
					'<button class="button button-light" ng-click="cancel()">{{\'CANCEL\' | translate}}</button>'+
				  '</div>'+
	  
			   '</ion-content>'+
			'</ion-view>'
        
        )
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
        t.put("locationMap.html", '<ion-view view-title="{{\'SET_LOCATION\' | translate}}" cache-view="false"><ion-content><div class="main_bg"><div class="row"><div class="col"><label class="item item-input"><input type="text" ng-model="user.desc" placeholder="Description"></label></div><div class="row pad"><div class="col pad"><div class="profile_bg"><div class="wt_txt">What is the Activity ?</div></div><div class="row gre_bg"><div class="col"> <div class="img_btn4"><div class="cam_img" ><a href="#"><img src="./img/camera_img.png"  alt=""/></a><p>RetakePhoto</p></div><div class="cam_img"><a href="#"><img src="./img/img_icon.png" alt=""/></a><p> Select Different Photo </p></div><div class="cam_img" ><a href="#/menu/createActivitynext" ><img src="./img/next.png" ng-click="nextActivity()" alt="" /></a><p> Next </p></div></div></div></div></div></div></div></div></ion-content></ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("locationSetup.html", '<ion-view view-title="{{\'CREATE_ACTIVITY\' | translate}}" cache-view="false"><ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true"><div class="main_bg"><div class="row pad"><div class="col pad"><div class="profile_bg"><div class="wt_txt">What is the Activity ?</div></div><div class="row gre_bg"><div class="col"> <div class="img_btn4"><div class="cam_img" ><a href="#"> <img src="./img/camera_img.png" alt=""/> </a><p>Retake	Photo </p></div><div class="cam_img"><a href="#"> <img src="./img/img_icon.png" alt=""/> </a><p> Select Different Photo </p></div></div></div></div></div></div></div></div></ion-content><ion-footer-bar><button class="button button-block button-positive" style="margin:0px" ng-click="setLocation()">{{\'SAVE\' | translate}}</button></ion-footer-bar></ion-view>')
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
        t.put("menu.html", '<ion-side-menus enable-menu-with-back-views="false">'+
        '<ion-side-menu-content><ion-nav-bar class="bar-positive"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side="left"><button class="button button-icon button-clear ion-navicon" menu-toggle="left"></button></ion-nav-buttons>'+
        '</ion-nav-bar><ion-nav-view name="menuContent"><div class="bar bar-header bar-light app-name"><h1 class="title head_content"></h1></div></ion-nav-view></ion-side-menu-content>'+
        
        '<ion-side-menu side="left" id="menu-left"><ion-header-bar class="bar-positive"><h1 class="title">title</h1></ion-header-bar><ion-content><ul class="list"><a ui-sref="menu.profile" class="item" menu-close=""><img src="./img/user_icon.png" class="menuicon"/>  {{\'ME_AND_MY_ACTIVITIES\' | translate}}</a> <a href="#/menu/discovery" class="item" menu-close=""><img src="./img/run_people.png" class="menuicon"/>  {{\'DISCOVER_ACTIVITIES\' | translate}}</a> <a href="#/menu/chats" class="item" menu-close=""><img width="30" src="./img/chat_icon.jpeg" class="menuicon"/> {{\'MENU_CHAT\' | translate}}</a> <a href="#/menu/home" class="item" menu-close=""><img src="./img/search_icon.png" class="menuicon"/> {{\'FIND_ACTIVITIES\' | translate}}</a> <a href="#/menu/createActivitySelect" class="item" menu-close=""><img src="./img/plus_icon.png" class="menuicon"/>{{\'CREATE_ACTIVITY\' | translate}}</a> <a href="#/menu/people" class="item" menu-close=""><img src="./img/select_people_icon.png" class="menuicon"/> {{\'SELECT_PEOPLE\' | translate}}</a> <a href="#/menu/settings" class="item" menu-close=""><img src="./img/setting_icon.png" class="menuicon"/> {{\'MY_PREFERENCES\' | translate}}</a> <a href="#/menu/contact" ng-controller="ShareController as shareCtrl" ng-click="shareCtrl.share()" class="item" menu-close=""><img src="./img/contact_icon.png" class="menuicon"/>  {{\'CONTACT_US\' | translate}}</a></ul></ion-content></ion-side-menu></ion-side-menus>')
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
        t.put("profile.html",
        		'<ion-view view-title="Me & My Activity" hide-nav-bar="false" cache-view="false">'+
			   		'<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Me & My Activity</span></ion-nav-title>'+
			   
			   		'<ion-nav-buttons side="right">'+
   						'<button class="button button-clear ion-edit" ></button>' +
   					'</ion-nav-buttons>'+
   					
   					'<ion-content has-header="false" scroll="true">'+
						'<div class="main_bg_1">'+
		
							'<div class="row pad">'+
								'<div class="col pad">'+
									'<div class="profile_bg_1"> </div>'+
								'</div>'+
							'</div>'+


							'<div class="row danile_content_width">'+
								'<div class="col">'+
									'<h4> Daniel, 35	</h4>'+
									'<p> About Daniel </p>'+
									'<p> I love developing highlyscaleable Software</p>'+
								'</div>'+
							'</div>'+


							 '<div class="row danile_content_width">'+
								'<div class="col">'+
								   '<h5> My Friend’s Using JOIN</h5>'+
								   '<ul>'+
									  '<li><img src="./img/img_thumbnail_slider.png" alt=""/></li>'+
									  '<li><img src="./img/img_thumbnail_slider.png" alt=""/></li>'+
									  '<li><img src="./img/img_thumbnail_slider.png" alt=""/></li>'+
									 ' <li></li>'+
								   '</ul>'+
								'</div>'+
							 '</div>'+

							 '<div class="row danile_content_width">'+
								'<div class="col">'+
								   '<h5> Joined activities (25+)</h5>'+
								   '<ul>'+
									  '<li><img src="./img/join_activity_1.png" alt=""/></li>'+
									 ' <li><img src="./img/join_activity_2.png" alt=""/></li>'+
									  '<li><img src="./img/join_activity_3.png" alt=""/></li>'+
									  '<li><img src="./img/join_activity_4.png" alt=""/></li>'+
									 ' <li><img src="./img/join_activity_5.png" alt=""/></li>'+
								   '</ul>'+
								'</div>'+
							 '</div>'+

							 '<div class="row danile_content_width">'+
								'<div class="col">'+
								   '<h5> My Activities (20+)</h5>'+
								   '<ul>'+
									  '<li><img src="./img/join_activity_1.png" alt=""/></li>'+
									  '<li><img src="./img/join_activity_2.png" alt=""/></li>'+
									  '<li><img src="./img/join_activity_3.png" alt=""/></li>'+
									  '<li><img src="./img/join_activity_4.png" alt=""/></li>'+
									  '<li><img src="./img/join_activity_5.png" alt=""/></li>'+
								   '</ul>'+
								'</div>'+
							 '</div>'+

						'</div>'+
					'</ion-content>'+			   		
				'</ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profileEdit.html",
				'<ion-view view-title="{{\'EDIT_PROFILE_TITLE\' | translate}}" cache-view="false" ng-controller="ProfileEdit as vm">'+
				   '<ion-nav-buttons side="primary">'+
						'<i class="button button-icon icon ion-ios-loop-strong" ng-click="vm.swapPhotos()" ng-if="vm.selectedCount() == 2" ng-cloak=""></i> '+
						'<i class="button button-icon icon ion-ios-trash" ng-click="vm.deletePhotos()" ng-if="vm.selectedCount() > 0" ng-cloak=""></i>'+
				   '	</ion-nav-buttons>'+
				   '<ion-content padding="true">'+
					  '<div class="row">'+
						 '<div class="col col-33" ng-repeat="photo in vm.photos track by $index"><img ng-class="photo.selected ? \'profileImageSelected\' : \'profileImage\'" ng-click="vm.toggleSelected(photo)" ng-src="{{photo.file.url()}}" class="profileImg"></div>'+
						 '<div class="col col-33" id="addPhoto" ng-if="vm.photos.length < vm.MAX_PHOTOS"><img ng-src="{{vm.NO_IMAGE}}" ng-click="vm.addPhoto()" class="profileImg"></div>'+
					  '</div>'+
					  '<br>'+
					  '<div>'+
						 '<h2>{{\'ABOUT_YOU\' | translate}}</h2>'+
						 '<textarea class="profileAboutTextarea" placeholder="{{\'ABOUT_YOU\' | translate}}" id="aboutYou" ng-model="vm.about" ng-keyup="vm.expandText()" ng-keydown="vm.expandText()"></textarea>'+
						 '<br>'+
						 '<div style="text-align:center"><button class="button button-positive" ng-click="vm.saveProfile()" ng-hide="vm.profile.about == vm.about">&nbsp;{{\'SAVE\' | translate}}&nbsp;</button></div>'+
					  '</div>'+
				   '</ion-content>'+
				'</ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profileSetup.html", 
        	'<ion-view view-title="{{\'PROFILE_SETUP\' | translate}}" cache-view="false">'+
			   '<ion-header-bar class="bar-positive">'+
				  '<h1 class="title">{{\'PROFILE_SETUP_MSG\' | translate}}</h1>'+
			   '</ion-header-bar>'+
			   '<ion-content padding="true">'+
				  '<div class="list">'+
					 '<label class="item item-input"><span class="input-label">{{\'FIRST_NAME\' | translate}}</span> <input type="text" ng-model="user.name"></label> '+
					 '<label class="item item-input item-select">'+
						'<div class="input-label">{{\'BIRTH_MONTH\' | translate}}</div>'+
						'<select ng-model="user.birthMonth">'+
						   '<option ng-repeat="month in months" value="{{$index}}">{{month}}</option>'+
						'</select>'+
					 '</label>'+
					 '<label class="item item-input item-select">'+
						'<div class="input-label">{{\'BIRTH_YEAR\' | translate}}</div>'+
						'<input type="number" min="{{yearFrom}}" max="{{yearTo}}" step="1" value="1980" ng-model="user.birthYear">'+
					 '</label>'+
					 '<div class="item item-divider">{{\'GENDER\' | translate}}:</div>'+
					 '<label class="item item-radio">'+
						'<input type="radio" name="gender" value="M" ng-model="user.gender">'+
						'<div class="item-content">{{\'MALE\' | translate}}</div>'+
						'<i class="radio-icon ion-checkmark"></i>'+
					 '</label>'+
					 '<label class="item item-radio">'+
						'<input type="radio" name="gender" value="F" ng-model="user.gender">'+
						'<div class="item-content">{{\'FEMALE\' | translate}}</div>'+
						'<i class="radio-icon ion-checkmark"></i>'+
					 '</label>'+
				  '</div>'+
				  '<button class="button button-block button-positive" ng-click="saveProfile()">{{\'SAVE\' | translate}}</button>'+
				  '<br>'+
				  '<button class="button button-block" ng-click="logout()">{{\'LOGOUT\' | translate}}</button>'+
			   '</ion-content>'+
			'</ion-view>'
        )
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("profileView.html", 
        
        	'<ion-view view-title="{{selectedCard.name}}">'+
			
			'<ion-nav-buttons side="right">'+
				'<i class="button button-icon icon ion-android-close" ng-click="reject()"></i> '+
				'<i class="button button-icon icon ion-ios-heart-outline" ng-click="like()"></i> '+
				'<i class="button button-icon icon ion-android-more-vertical" ng-click="profileOptions()"></i>'+
			'</ion-nav-buttons>'+
			
		   '<ion-content>'+
			  '<ion-slide-box show-pager="true" does-continue="true">'+
				 '<ion-slide ng-repeat="photo in selectedCard.photos track by $index"><img ng-src="{{photo.url()}}" style="width:100%"></ion-slide>'+
				 '<ion-slide ng-if="!selectedCard.photos.length"><img src="img/generic_avatar.jpg" style="width:100%"></ion-slide>'+
			  '</ion-slide-box>'+
			  '<div style="padding: 10px;">'+
				 '<b>{{selectedCard.name}}</b>, {{selectedCard.age}}<br><span style="color:gray">{{distance}}{{profile.distanceType == \'km\' ? \'km\' : \'mi\'}} {{\'AWAY\' | translate}}</span><br>'+
				 '<div ng-show="selectedCard.about">{{selectedCard.about}}</div>'+
			  '</div>'+
		   '</ion-content>'+
		'</ion-view>'
        )
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("people.html", 
        	
        	'<ion-view view-title="Create Activity" hide-nav-bar="false" cache-view="false">'+
   
		   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Create Activity</span></ion-nav-title>'+
   
		   '<ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true">'+
			  '<div class="main_bg">'+
				 '<div class="row">'+
					'<div class="col">'+
					   '<div class="bar bar-subheader sub_head">'+
						  '<h2 class="title2">Select People</h2>'+
					   '</div>'+
					'</div>'+
				 '</div>'+
				 
				 
				 '<div class="row pad">'+
					'<div class="col pad">'+
					   
					   
					   '<img class="activity_profile_image" src="./img/cr_invite_img.jpg">'+
						  	'<div style="position: absolute;" class="wt_txt">Want to JOIN :<br/>Lake. Fun.</div>'+
					   '<div class="row pad bg">'+
						  '<div class="col pad">'+
							 '<div class="button-bar prf_btn">'+
								'<a class="icon-left ion-person-stalker org_btn">8</a>'+
								'<a class="icon-left ion-ios-book-outline  org_btn">22</a>'+
								'</div>'+
						  '</div>'+
					   '</div>'+
					   
					   
					   
					   '<div class="row sky_bg">'+
						  '<div class="col">'+
								
								
								'<div style="width:80%;margin:0 auto;text-align: center;padding-top: 10px;">'+
						   
							 '<a href="#" style="margin: 7px -4px -4px;"><img src="./img/cros_img_icon.png" alt="Dislike" class="likeDislikeBtn"/></a>'+
								'<a href="#"><img src="./img/i_img_icon.png" alt="Information" class="informationBtn"/></a>'+
								'<a href="#" style="margin: 7px -4px -4px;"><img src="./img/pus_img_icon.png" alt="Like" class="likeDislikeBtn"/></a>'+
						  
   					  	'</div>'+
								
							 '<p class="sky_p">Swipe to see Activities<br/>Sorted by Distance</p>'+
						  '</div>'+
					   '</div>'+
					   
					  	
					  	
   					  
   					  
					   
					'</div>'+
				 '</div>'+
			  '</div>'+
			  '</div>'+
		   '</ion-content>'+
		'</ion-view>'
        )
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("settings.html", 
        	'<ion-view ng-init="profile={distance:50,ageFrom:18,ageTo:30,autoJoin:true}" view-title="{{\'MY_PREFERENCES_TITLE\' | translate}}" cache-view="false">'+

			   '<ion-nav-title class="titletopStyle"><span><img style="width: 23px;"src="./img/setting_icon.png" class="headertoolbarimage"></span><span>{{\'MY_PREFERENCES_TITLE\' | translate}}</span></ion-nav-title>'+
   
			   '<ion-content scroll="true">'+
			   
				  '<ul class="list">'+
				  	
					 '<li style="pointer-events: visible;" class="item item-toggle">'+
						'Show me:<br>Only activities with auto-join'+
						'<button class="help_indicator"  ng-click="onHelp_indicator_btntap($event)"/></button>'+
						'<label style="margin-top: 5px;" class="toggle">'+
						   '<input type="checkbox" ng-model="profile.autoJoin">'+
						   '<div class="track">'+
							  '<div class="handle"></div>'+
						   '</div>'+
						'</label>'+
					 '</li>'+
		 
					 '<li class="item item-divider">{{\'SEARCH_DISTANCE\' | translate}}: {{profile.distance}}{{profile.distanceType}} km</li>'+
		 
					 '<li class="item" style="height: 60px">'+
						'<slider floor="1" ceiling="200" ng-model-low="profile.distance" ng-model-high="profile.distance"></slider>'+
					 '</li>'+
		 
					 '<li class="item item-divider">Activity creator age: {{profile.ageFrom}} to {{profile.ageTo}}</li>'+
		 
					 '<li class="item" style="height: 60px">'+
						'<slider floor="18" ceiling="55" ng-model-low="profile.ageFrom" ng-model-high="profile.ageTo"></slider>'+
					 '</li>'+
		 
				  '</ul>'+
				  '<div align="center" style="width:100%;padding-left: 10px;padding-right: 10px;">'+
					'<button class="button save_setting" ng-click="save()">{{\'SAVE\' | translate}}</button> '+
					'<button class="button button-light" ng-click="cancel()">{{\'CANCEL\' | translate}}</button>'+
				  '</div>'+
			   '</ion-content>'+
			'</ion-view>'
        
        )
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("sign-in.html", '<ion-view hide-nav-bar="true" cache-view="false">'+
   '<ion-content has-header="false" scroll="true" overflow-scroll="true" scrollbar-x="true" scrollbar-y="true">'+
      '<div class="main_bg">'+
         '<div class="row">'+
           ' <div class="col">'+
              ' <div align="center" class="app-name"> <img class="headertoolbarimage" src="./img/header_app_icon.png"  alt=""><span>Sign-In</span></div>'+
           ' </div>'+
        ' </div>'+
        ' <div class="row center">'+
            '<div class="col">'+
              ' <div style="margin: 0 auto;border: 3px solid #95E8D6;width: 80%;margin-top: 10%;" class="button-bar"><a><i class="icon ion-social-facebook"></i></a> <a class="login_f" ng-show="showForm == true" ng-class="login.class" ng-click="facebookLogin()">Login With Facebook</a></div>'+
              ' <div class="or">Or</div>'+



               '<div class="list list_1" ng-show="showForm == true">'+
                 ' <div class="first_name">Username/Email</div>'+
                 ' <label class="item item-input custom_input"><input type="text" placeholder="First Name" ng-model="credentials.email"></label>'+
                 ' <div class="first_name">Password</div>'+
                 ' <label class="item item-input custom_input"><input type="text" placeholder="Password" ng-model="credentials.password"></label>'+
                  '<div class="button-bar button-bar1"><a id="login" class="button login_btn" ng-click="emailLogin()">Login</a> <a class="button regis_btn" id="register" ng-click="emailRegister()">Register</a></div>'+
             '  </div>'+
            '</div>'+
        ' </div>'+
      '</div>'+
   '</ion-content>'+
'</ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }
    t.run(["$templateCache", function(t) {
        t.put("swipe.html", '<ion-view hide-nav-bar="false" cache-view="false"><ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" style="width: 50px;vertical-align: text-bottom;"></span><span>Create Activity</span></ion-nav-title><ion-content has-header="false" scroll="false"><style>\n' +
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
            '</style>'+

/*'<div class="main_bg">'+
	 
	 
	 '<section  class="responsive_con_class">'+
		
		
		'<div style="margin-top:50px;" class="row">'+
			'<div class="col">'+
					'<div class="bar bar-subheader sub_head">'+
						'<div class="button-bar prf_btn2">'+
							'<div class="icon-left title3 ion-arrow-right-a ">7Km </div>'+
							'<div class="icon-right title4">Tomorrow</div>'+
						'</div>'+
					 '</div>'+
				'</div>'+
		'</div>'+
	
	
	
		'<div class = "row header responsive_con_rowCls"> '+
			'<div style="background:url(./img/cr_invite_img.jpg)" class="profile_bg_image">'+
			  '<div class="overTxt_msg_profilepic">Lake. Fun.</div>'+
		   '</div>'+
			
		'</div>'+


		
		'<div style="height:185px" class="row sky_bg">'+
			'<div class="col sky_bg">'+
				 '<div style="width:80%;margin:0 auto;text-align: center;padding-top: 10px;">'+
						   
						 '<a href="#" style="margin: 7px -4px -4px;"><img src="./img/cros_img_icon.png" alt="Dislike" class="likeDislikeBtn"/></a>'+
							'<a href="#"><img src="./img/i_img_icon.png" alt="Information" class="informationBtn"/></a>'+
							'<a href="#" style="margin: 7px -4px -4px;"><img src="./img/pus_img_icon.png" alt="Like" class="likeDislikeBtn"/></a>'+
				  
					'</div>'+
					'<p class="sky_p">Swipe to see Activities <br />Sorted by Distance</p>'+
			  '</div>'+
			
		'</div>'+
		
		

	'</section>'+
	
'</div>'+*/

'<div class="main_bg">'+
	'<section  class="responsive_con_class">'+
		'<ion-slide-box  class="responsive_con_class" show-pager=false>'+
  			'<ion-slide class="responsive_con_class" ng-repeat="datas in homeCarouselData.data">'+
		
				'<div style="margin-top:50px;" class="row">'+
					'<div class="col">'+
							'<div class="bar bar-subheader sub_head">'+
								'<div class="button-bar prf_btn2">'+
									'<div class="icon-left title3 ion-arrow-right-a ">{{datas.activityDistance}} Km </div>'+
									'<div class="icon-right title4">{{datas.activityDateTime}}</div>'+
								'</div>'+
							 '</div>'+
						'</div>'+
				'</div>'+
	
	
	
				'<div class = "row header responsive_con_rowCls"> '+
					'<div style="background:url({{datas.image}})" class="profile_bg_image">'+
					  '<div class="overTxt_msg_profilepic">{{datas.activityName}}</div>'+
				   '</div>'+
			
				'</div>'+


		
				'<div style="height:185px" class="row sky_bg">'+
					'<div class="col sky_bg">'+
						 '<div style="width:80%;margin:0 auto;text-align: center;padding-top: 10px;">'+
						   
								 '<a ng-click="onDislikentnTap(datas)" style="margin: 7px -4px -4px;"><img src="./img/cros_img_icon.png" alt="Dislike" class="likeDislikeBtn"/></a>'+
									'<a href="#"><img src="./img/i_img_icon.png" alt="Information" class="informationBtn"/></a>'+
									'<a ng-click="onAddlikentnTap(datas)" style="margin: 7px -4px -4px;"><img src="./img/pus_img_icon.png" alt="Like" class="likeDislikeBtn"/></a>'+
				  
							'</div>'+
							'<p class="sky_p">Swipe to see Activities <br />Sorted by Distance</p>'+
					  '</div>'+
			
				'</div>'+
    
		  '</ion-slide>'+
  
		'</ion-slide-box>'+
	'</section>'+
'</div>'+





'</ion-content></ion-view>'

)
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
        t.put("createActivitynext.html", 
			
			'<ion-view view-title="Create Activity" hide-nav-bar="false" cache-view="false">'+
				   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Create Activity</span></ion-nav-title>'+
				   '<ion-content has-header="false" scroll="false">'+
					  '<div class="main_bg">'+
						 
						 '<div class="row">'+
							'<div class="col">'+
							   '<div class="bar bar-subheader sub_head">'+
								  '<h2 class="title2">Location Found</h2>'+
							   '</div>'+
							'</div>'+
						 '</div>'+
						 
						 
						 '<section style="margin-top:50px;" class="responsive_con_class">'+
		
							
							'<div class = "row header responsive_con_rowCls"> '+
								'<div style="background:url({{selectPhotoData.img_url}})" class="profile_bg_image">'+
								  
								  // menu start
								  '<div class="overTxt_msg_profilepic">'+
								  
									  '<ion-list >'+
								'<ion-item style="background-color: transparent;border: none;padding: 0px;">'+								
								
									'<div class="row">'+
										'<div class="ca_menuList">'+
											'<span style="margin-right: 15px;"><i class="icon icon-left ion-edit"></i></span>'+										
											'<input type="text" ng-model="newActivityDataObj.activityName" class="activitynameCls" placeholder="---------------------------" >'+
										'</div>'+
									'</div>'+
								
								
								
									/*'<div class="row">'+
										'<div class="ca_menuList">'+
											'<span style="margin-right: 15px;"><i class="icon icon-left ion-android-calendar"></i></span>'+
											'<span style="font-weight: bold;">Set Date and Time</span>'+
										'</div>'+
									'</div>'+*/
								
								
								
									// date time start 
									'<div class="row">'+
										'<div class="ca_menuList">'+
											'<span style="margin-right: 15px;"><i class="icon icon-left ion-android-calendar"></i></span>'+
										
											'<span>'+
										
											'<ionic-datepicker input-obj="datepickerObject">'+
											 '<span><strong> {{datepickerObject.inputDate | date:"dd-MM-yyyy"}} </strong></span>'+
											'</ionic-datepicker>'+
										
										
											'<ionic-timepicker input-obj="timePickerObject">'+
											
													'<standard-time-meridian etime="timePickerObject.inputEpochTime"></standard-time-meridian>'+
												'</span>'+
											'</ionic-timepicker>'+
										'</div>'+
									'</div>'+
									// date time End 
								
								
								
									'<div class="row">'+
										'<div class="ca_menuList" ng-click="onCreateActivityAddInfo()">'+
											'<span style="margin-right: 15px;"><i class="icon icon-left ion-information"></i></span>'+
											'<span style="font-weight: bold;">Add Information</span>'+
										'</div>'+
									'</div>'+
								
									'<div class="row">'+
										'<div class="ca_menuList" ng-click="onSetLocationonMap()">'+
											'<span style="margin-right: 15px;"><i class="icon icon-left ion-location"></i></span>'+
											'<span style="font-weight: bold;">Set Location Map</span>'+
										'</div>'+
									'</div>'+
								
									'<div class="row">'+
										'<div class="ca_menuList" ng-click="onCreateActivitySettings()">'+
											'<span style="margin-right: 15px;"><i class="icon icon-left ion-android-settings"></i></span>'+
											'<span style="font-weight: bold;">Settings</span>'+
										'</div>'+
									'</div>'+
							
							'</ion-item>'+

						'</ion-list>'+
								  
								  '</div>'+
							   //menu end
							   
							   '</div>'+
								
							'</div>'+
			
			
							'<div style="height:165px" class="row publish_activity_bg">'+
								'<div class="col">'+
								' <div align="center" style="margin-bottom: 10px;">'+
								   ' <table>'+
									   '<tr>'+
										 ' <td class="makephotocls"><button class="vid_play_icon_photo" ng-click ="publish_activity()"></button></td>'+
									  ' </tr>'+
									  ' <tr>'+
										 ' <td style="color: #FFF;" class="retakeimage_lbl_cls">Click here to publish</td>'+
									  ' </tr>'+
								   ' </table>'+
								' </div>'+
							 ' </div>'+
								
							'</div>'+
							
			
						'</section>'+
		
					  '</div>'+
				   '</ion-content>'+
				'</ion-view>'
			
			)
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }    
    t.run(["$templateCache", function(t) {
        t.put("createActivity.html", 
        
        '<ion-view view-title="Create Activity" hide-nav-bar="false" cache-view="false">'+
			   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Create Activity</span></ion-nav-title>'+
			   '<ion-content has-header="false" scroll="false">'+
				  '<div class="main_bg">'+
					 '<div class="row">'+
						'<div class="col"></div>'+
					 '</div>'+
					 '<div class="row center">'+
						'<div class="col">'+
						   '<div class="content has-header padding">'+
							  '<h2 class="color_cont mg_top">No JOIN activities </br>in your area?</h2>'+
						   '</div>'+
						   '<div ng-click ="createActivityLocation()" class="button-bar button-bar1">'+
								'<a href="#/menu/createActivitySelect" class="button b_first">Be the first: Create an activity</a>'+
							'</div>'+


						'</div>'+
					 '</div>'+
				  '</div>'+
			   '</ion-content>'+
			'</ion-view>'
			
		)
    }])
}(),
//create new views
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }    
    t.run(["$templateCache", function(t) {
        t.put("createActivitySelect.html", '<ion-view view-title="Create Activity" hide-nav-bar="false" cache-view="false">'+
	'<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Create Activity</span></ion-nav-title>'+
		'<ion-content has-header="false" scroll="false">'+
      		'<div class="row">'+
      '<div class="col">'+
         '<div align="center" style="padding: 20px;font-size: 18px;color: #018E75;">Searching Location...</div>'+
         '<div align="center">'+
            '<table>'+
              ' <tr>'+
                  '<td class="makephotocls"><button class="make_photo_icon" ng-click="makephoto_createActivity()"></button></td>'+
                  '<td class="makephotocls"><button class="select_photo_icon" ng-click="selectphoto_createActivity()" ></button></td>'+
               '</tr>'+
               '<tr>'+
                  '<td class="makephotocls">Make Photo</td>'+
                 ' <td class="makephotocls">Select Photo</td>'+
              ' </tr>'+
            '</table>'+
        ' </div>'+
        ' <div align="center" style="padding: 40px;font-size: 18px;color: #018E75;">Copy one of your Activities</div>'+
         '<ion-list >'+
			'<ion-item >'+
				'<ion-scroll direction="x">'+
					'<div style="display: -webkit-box;" class="row">'+
						'<div ng-repeat="activity_Data in ActivityData" ng-click="onItemtapActivityData(activity_Data)"  style="margin-right: 10px;"><img src="{{activity_Data.img_url}}"  width="100" height="100" /></div>'+
					'</div>'+
				'</ion-scroll>'+
			'</ion-item>'+

		'</ion-list>'+


      '</div>'+
  ' </ion-content>'+
'</ion-view>')
    }])
}(),
function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }    
    t.run(["$templateCache", function(t) {
        t.put("selectPhoto.html", 
				'<ion-view view-title="Create Activity" hide-nav-bar="false" cache-view="false">'+
				   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Create Activity</span></ion-nav-title>'+
				   '<ion-content has-header="false" scroll="false">'+
					  '<div class="main_bg" on-swipe-left="onSwipeLeft_createActivity()">'+
						 
						 '<div class="row">'+
							'<div class="col">'+
							   '<div class="bar bar-subheader sub_head">'+
								  '<h2 class="title2">Location Found</h2>'+
							   '</div>'+
							'</div>'+
						 '</div>'+
						 
						 
						 '<section style="margin-top:50px;" class="responsive_con_class">'+
		
							
							'<div class = "row header responsive_con_rowCls"> '+
								'<div style="background:url({{selectPhotoData.img_url}})" class="profile_bg_image">'+
								  '<div class="overTxt_msg_profilepic">Want to JOIN :<br/>Lake. Fun.</div>'+
							   '</div>'+
								
							'</div>'+
			
			
							/*'<div style="height:165px" class="row grey_bg">'+
								'<div class="col grey_bg">'+
									 '<div align="center" style="margin-bottom: 10px;">'+
										'<table>'+
										   '<tr>'+
											  '<td class="makephotocls"><button class="retake_Photo" ng-click="onRetake_Photo_createActivity()"></button></td>'+
											  '<td class="makephotocls"><button class="Reselect_Photo " ng-click="onReselect_Photo_createActivity()"></button></td>'+
										   '</tr>'+
										   '<tr>'+
											  '<td class="retakeimage_lbl_cls">Retake Photo</td>'+
											  '<td class="retakeimage_lbl_cls">Reselect Photo</td>'+
										   '</tr>'+
										'</table>'+
									 '</div>'+
								  '</div>'+
								
							'</div>'+*/
							
							'<div style="height:170px" class="row grey_bg">'+
								
								'<div class="col grey_bg">'+
									 '<div class="makephotocls"><button class="retake_Photo" ng-click="onRetake_Photo_createActivity()"></button></div>'+
									 '<div class="retakeimage_lbl_cls">Retake Photo</div>'+
								'</div>'+
								
								'<div class="col grey_bg">'+
									 '<div class="makephotocls"><button class="Reselect_Photo " ng-click="onReselect_Photo_createActivity()"></button></div>'+
									 '<div class="retakeimage_lbl_cls">Reselect Photo</div>'+
								'</div>'+
																
							'</div>'+
							
							
			
						'</section>'+
		
					  '</div>'+
				   '</ion-content>'+
				'</ion-view>'
				
			)
    }])
}(),

function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }    
    t.run(["$templateCache", function(t) {
        t.put("mapLocation.html", '<ion-view view-title="Create Activity" hide-nav-bar="false" cache-view="false">'+
				   '<ion-nav-title class="titletopStyle"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Create Activity</span></ion-nav-title>'+
				   '<ion-content has-header="false" scroll="false">'+
						'<div style="height:85%" id="locationMap" data-tap-disabled="true"></div>'+
						
						'<div class="row row-bottom" style="margin-top: 7px;">'+
								'<button class="saveLocationBtnCls" ng-click="setLocation()">Save</button>'+
					  	'</div>'+
				   '</ion-content>'+
				'</ion-view>')
    }])
}()

/*,function(t) {
    try {
        t = angular.module("templates")
    } catch (e) {
        t = angular.module("templates", [])
    }    
    t.run(["$templateCache", function(t) {
        t.put("addCreateActivityInfo.html", 
        	'<ion-modal-view  ng-init="aboutCA=1">'+
				  '<ion-header-bar class="bar-positive bar bar-header disable-user-behavior">'+
						'<h1 class="title"><span><img src="./img/header_app_icon.png" class="headertoolbarimage"></span><span>Add Information</span></h1>'+
				  '</ion-header-bar>'+
				  
				  '<ion-content  scroll="false">'+
				   		
				   		'<div class="main_bg">'+
							
							'<div class="row">'+					 	 
					   			'<textarea ng-model="aboutCA" name="aboutCA" rows="10" placeholder="Add Information about create Activity" style="width:100%;"></textarea>'+
							'</div>'+
					  		
					  		'<div class="row">'+
							  '<div class="col"><button class="button button-block saveInfoBtn_cls" ng-click="getInfoAboutCA()">Save</button></div>'+
							  '<div class="col"><button class="button button-block cancelInfoBtn_cls" ng-click="hideAddInfoPopOver()">Cancel</button></div>'+
							'</div>'+
					  	'</div>'+
					  						
				 ' </ion-content>'+
				'</ion-modal-view>'
        )
    }])
}()*/

;
// Compressed using http://javascript-minifier.com/ 
// DeCompressed using http://jsbeautifier.org/



