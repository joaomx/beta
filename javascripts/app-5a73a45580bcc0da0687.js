!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var a={};return t.m=e,t.c=a,t.p="javascripts/",t(0)}([function(e,t,a){e.exports=a(1)},function(e,t,a){"use strict";a(2),console.log("app.js has loaded!")},function(e,t,a){"use strict";for(var n=document.querySelectorAll("[data-module]"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-module"),s=a(3)("./"+r)["default"];new s(i)}},function(e,t,a){function n(e){return a(o(e))}function o(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./contactForm":4,"./contactForm.js":4,"./cubeportfolio":6,"./cubeportfolio.js":6,"./example":7,"./example.js":7,"./index":2,"./index.js":2,"./newsletterForm":8,"./newsletterForm.js":8,"./parallaxBg":9,"./parallaxBg.js":9,"./portfolioScroll":10,"./portfolioScroll.js":10,"./scrollable":11,"./scrollable.js":11};n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id=3},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),a(5);var o=function i(e){n(this,i),$(document).ready(function(){$("#mce-MMERGE3").keydown(function(e){var t=$("#mce-MMERGE3"),a=$("#contactFormMsg-error");e.target.textLength+1>=249?(t.toggleClass("error-state"),a.removeClass("hidden")):(t.removeClass("error-state"),a.addClass("hidden"))}),$("#mc-embedded-contact-form").submit(function(e){e.preventDefault();var t=$("#contact-err"),a=$("#contact-loading"),n=$("#contact-success"),o=$("#mc-embedded-contact-form");return a.toggleClass("fa-circle-o-notch fa-spin fa-fw"),$.ajax({type:o.attr("method"),url:o.attr("action").replace("/post?","/post-json?").concat("&c=?"),data:o.serialize(),timeout:5e3,cache:!1,dataType:"jsonp",contentType:"application/json; charset=utf-8",error:function(e){console.log("err: ",e),a.toggleClass("fa-circle-o-notch fa-spin fa-fw"),t.html("\n\t\t\t\t\t\t\tErro ao comunicar com o servidor <br/>\n\t\t\t\t\t\t\tVerifique a sua ligação"),t.show()},success:function(e){"success"!=e.result?(console.log("err: ",e),a.toggleClass("fa-circle-o-notch fa-spin fa-fw"),t.text("\n\t\t\t\t\t\t\t\tErro num dos campos\n\t\t\t\t\t\t\t\t"),setTimeout(function(){t.hide()},5e3),t.show()):(a.toggleClass("fa-circle-o-notch fa-spin fa-fw"),o[0].reset(),o.fadeOut(200,function(){n.fadeIn(250,"linear")}))}}),!1})})};t["default"]=o},function(e,t){/*!
	Mailchimp Ajax Submit
	jQuery Plugin
	Author: Siddharth Doshi
	
	Use:
	===
	$('#form_id').ajaxchimp(options);
	
	- Form should have one <input> element with attribute 'type=email'
	- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
	- All options are optional.
	
	Options:
	=======
	options = {
	    language: 'en',
	    callback: callbackFunction,
	    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
	}
	
	Notes:
	=====
	To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
	For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
	*/
!function(e){"use strict";e.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(t,a){e(t).ajaxChimp(a)}},e.fn.ajaxChimp=function(t){return e(this).each(function(a,n){var o=e(n),i=o.find("input[type=email]"),r=o.find("label[for="+i.attr("id")+"]"),s=e.extend({url:o.attr("action"),language:"en"},t),l=s.url.replace("/post?","/post-json?").concat("&c=?");o.attr("novalidate","true"),i.attr("name","EMAIL"),o.submit(function(){function t(t){if("success"===t.result)a="We have sent you a confirmation email",r.removeClass("error").addClass("valid"),i.removeClass("error").addClass("valid");else{i.removeClass("valid").addClass("error"),r.removeClass("valid").addClass("error");var n=-1;try{var o=t.msg.split(" - ",2);if(void 0===o[1])a=t.msg;else{var l=parseInt(o[0],10);l.toString()===o[0]?(n=o[0],a=o[1]):(n=-1,a=t.msg)}}catch(c){n=-1,a=t.msg}}"en"!==s.language&&void 0!==e.ajaxChimp.responses[a]&&e.ajaxChimp.translations&&e.ajaxChimp.translations[s.language]&&e.ajaxChimp.translations[s.language][e.ajaxChimp.responses[a]]&&(a=e.ajaxChimp.translations[s.language][e.ajaxChimp.responses[a]]),r.html(a),r.show(2e3),s.callback&&s.callback(t)}var a,n={},c=o.serializeArray();e.each(c,function(e,t){n[t.name]=t.value}),e.ajax({url:l,data:n,success:t,dataType:"jsonp",error:function(e,t){console.log("mailchimp ajax submit error: "+t)}});var u="Submitting...";return"en"!==s.language&&e.ajaxChimp.translations&&e.ajaxChimp.translations[s.language]&&e.ajaxChimp.translations[s.language].submit&&(u=e.ajaxChimp.translations[s.language].submit),r.html(u).show(2e3),!1})}),this}}(jQuery)},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e){a(this,o);var t,n,i=$("#grid-container"),r=$("#filters-container");i.cubeportfolio({layoutMode:"grid",rewindNav:!0,scrollByPage:!1,mediaQueries:[{width:1100,cols:3},{width:800,cols:3},{width:500,cols:2},{width:320,cols:1}],defaultFilter:"*",animationType:"rotateSides",gapHorizontal:10,gapVertical:10,gridAdjustment:"responsive",caption:"",displayType:"sequentially",displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCallback:function(e,t){},singlePageInlineDelegate:".cbp-singlePageInline",singlePageInlinePosition:"below",singlePageInlineInFocus:!0,singlePageInlineCallback:function(e,t){var a=this;$.ajax({url:e,type:"GET",dataType:"html",timeout:5e3}).done(function(e){a.updateSinglePageInline(e)}).fail(function(){a.updateSinglePageInline("Error! Please refresh the page!")})}}),r.hasClass("cbp-l-filters-dropdown")?(t=r.find(".cbp-l-filters-dropdownWrap"),t.on({"mouseover.cbp":function(){t.addClass("cbp-l-filters-dropdownWrap-open")},"mouseleave.cbp":function(){t.removeClass("cbp-l-filters-dropdownWrap-open")}}),n=function(e){t.find(".cbp-filter-item").removeClass("cbp-filter-item-active"),t.find(".cbp-l-filters-dropdownHeader").text(e.text()),e.addClass("cbp-filter-item-active"),t.trigger("mouseleave.cbp")}):n=function(e){e.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active")},r.on("click.cbp",".cbp-filter-item",function(){var e=$(this);e.hasClass("cbp-filter-item-active")||($.data(i[0],"cubeportfolio").isAnimating||n.call(null,e),i.cubeportfolio("filter",e.data("filter"),function(){}))}),i.cubeportfolio("showCounter",r.find(".cbp-filter-item"),function(){var e,t=/#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href);null!==t&&(e=r.find(".cbp-filter-item").filter('[data-filter="'+t[1]+'"]'),e.length&&n.call(null,e))})};t["default"]=n},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e){a(this,o),this.el=e,console.log(e.textContent,"- From the example module")};t["default"]=n},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),a(5);var o=function i(e){n(this,i),$(document).ready(function(){$("#mc-embedded-subscribe-form").submit(function(e){e.preventDefault();var t=$("#newsletter-err"),a=$("#mce-EMAIL"),n=$("#newsletter-loading"),o=$("#newsletter-success"),i=$("#mc-embedded-subscribe-form");return n.toggleClass("fa-circle-o-notch fa-spin fa-fw"),$.ajax({type:i.attr("method"),url:i.attr("action").replace("/post?","/post-json?").concat("&c=?"),data:i.serialize(),timeout:5e3,cache:!1,dataType:"jsonp",contentType:"application/json; charset=utf-8",error:function(e){console.log("err: ",e),n.toggleClass("fa-circle-o-notch fa-spin fa-fw"),t.html("\n\t\t\t\t\t\t\tErro ao comunicar com o servidor <br/>\n\t\t\t\t\t\t\tVerifique a sua ligação"),t.show()},success:function(e){if("success"!=e.result){n.toggleClass("fa-circle-o-notch fa-spin fa-fw"),a.addClass("NewsletterForm-input--error"),t.text("\n\t\t\t\t\t\t\t\tErro no e-mail introduzido\n\t\t\t\t\t\t\t\t");var r=setTimeout(function(){a.removeClass("NewsletterForm-input--error"),t.hide()},5e3);a.one("input",function(){window.clearTimeout(r),a.removeClass("NewsletterForm-input--error"),t.hide()}),t.show()}else n.toggleClass("fa-circle-o-notch fa-spin fa-fw"),i[0].reset(),i.fadeOut(200,function(){o.fadeIn(250,"linear")})}}),!1})})};t["default"]=o},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function o(){a(this,o),$(".parallaxBg").parallax("0%",.7)};t["default"]=n},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e){var t=this;a(this,o),this.el=e,$(document).ready(function(){$(t.el).on("click",function(e){e.stopPropagation();var a=$(t.el),n=a.data("item"),o={};o.scrollTarget=$("#accao"),o.preventDefault=!0,o.afterScroll=function(){console.log("item: ",$(n)),$(n).click()},$.smoothScroll(o)})})};t["default"]=n},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e){var t=this;a(this,o),this.el=e,$(document).ready(function(){$(t.el).on("click",function(e){var a=$(t.el),n=a.data("href"),o=a.data("offset"),i={};i.scrollTarget=$(n),i.preventDefault=!0,i.offset=o,$.smoothScroll(i)})})};t["default"]=n}]);