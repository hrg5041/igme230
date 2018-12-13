StackExchange.postValidation=function(){function e(e,t,n,a){var i=e.find('input[type="submit"]:visible, button[type="submit"]:visible'),d=i.length&&i.is(":enabled");d&&i.attr("disabled",!0),o(e,a),r(e,t,n,a),c(e),l(e),u(e);var p=function(){1!=t||e.find(C).length?(s(e,a),d&&i.attr("disabled",!1)):setTimeout(p,250)};p()}function t(t,o,r,s,c){e(t,o,s,r);var l,u=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],a=e.redirectTo.split("#")[0];0==a.indexOf("/")&&(a=window.location.protocol+"//"+window.location.hostname+a),l=!0,window.location=e.redirectTo,n.toLowerCase()==a.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?StackExchange.nocaptcha.init(e.captchaHtml,u):e.errors?(t.find("input[name=priorAttemptCount]").val(function(e,t){return(+t+1||0).toString()}),h(e.errors,t,o,r,e.warnings)):t.find('input[type="submit"]:visible, button[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){var e=t.find('input[type="submit"]:visible, button[type="submit"]:visible');if(t.find("#answer-from-ask").is(":checked"))return!0;var o=t.find(j);if("[Edit removed during grace period]"==$.trim(o.val()))return m(o,["Comment reserved for system use. Please use an appropriate comment."],d()),!1;if(i(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),e.parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var s=t.find(C).parent().find("input#tagnames"),c=s.prop("defaultValue");if(s.val()!==c)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":s.val()},"success":function(e){if(e.showWarning){var i={"closeOthers":!0,"shown":function(){$(".js-confirm-tag-creation").on("click",function(e){return StackExchange.helpers.closePopups(),a(t,r,l,u),e.preventDefault(),!1})},"dismissing":function(){n(t,l)},"returnElements":$("#tagnames").parent().find("input:visible")};StackExchange.helpers.showModal($(e.html).elementNodesOnly(),i),StackExchange.helpers.bindMovablePopups()}else a(t,r,l,u)}}),!1}return setTimeout(function(){a(t,r,l,u)},0),!1})}function n(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function a(e,t,a,i){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":i,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible, button[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){n(e,a)}})}function i(){for(var e=0;e<O.length;e++)clearTimeout(O[e]);O=[]}function o(e,t){var n=e.find(x);n.length&&n.blur(function(){O.push(setTimeout(function(){var a=n.val(),i=$.trim(a);if(f(n),0==i.length)return b(e,n),void 0;var o=n.data("min-length");if(o&&i.length<o)return m(n,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":o})],d()),void 0;var r=n.data("max-length");return r&&i.length>r?(m(n,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":r})],d()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":a},"success":function(a){a.success?b(e,n):m(n,a.errors.Title,d()),"edit"!=t&&g(e,n,a.warnings.Title)},"error":function(){b(e,n)}}),void 0)},P))})}function r(e,t,n,a){var i=e.find(S);i.length&&i.blur(function(){O.push(setTimeout(function(){var o=i.val(),r=$.trim(o);if(f(i),0==r.length)return b(e,i),void 0;if(5==t){var s=i.data("min-length");return s&&r.length<s?m(i,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":r.length})],d()):b(e,i),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":o,"oldBody":i.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n},"success":function(t){t.success?b(e,i):m(i,t.errors.Body,d()),"edit"!=a&&g(e,i,t.warnings.Body)},"error":function(){b(e,i)}})},P))})}function s(e,t){var n=e.find(C);if(n.length){var a=n.parent().find("input#tagnames");a.blur(function(){O.push(setTimeout(function(){var i=a.val(),o=$.trim(i);return 0==o.length?(b(e,n),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":i,"oldTags":a.prop("defaultValue")},"success":function(a){if(a.success?b(e,n):m(n,a.errors.Tags,d()),"edit"!=t&&(g(e,n,a.warnings.Tags),a.source&&a.source.Tags&&a.source.Tags.length)){var i=$("#post-form input[name='warntags']");i&&StackExchange.using("gps",function(){var e=i.val()||"";$.each(a.source.Tags,function(t,n){n&&!i.data("tag-"+n)&&(i.data("tag-"+n,n),e=e.length?e+" "+n:n,StackExchange.gps.track("tag_warning.show",{"tag":n},!0))}),i.val(e),StackExchange.gps.sendPending()})}},"error":function(){b(e,n)}}),void 0)},P))})}}function c(e){var t=e.find(j);t.length&&t.blur(function(){O.push(setTimeout(function(){var n=t.val(),a=$.trim(n);if(0==a.length)return b(e,t),void 0;var i=t.data("min-length");if(i&&a.length<i)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":i})],d()),void 0;var o=t.data("max-length");return o&&a.length>o?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":o})],d()),void 0):(b(e,t),void 0)},P))})}function l(e){var t=e.find(T);t.length&&t.blur(function(){O.push(setTimeout(function(){var n=t.val(),a=$.trim(n);if(0==a.length)return b(e,t),void 0;var i=t.data("min-length");if(i&&a.length<i)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":i,"actual":a.length})],d()),void 0;var o=t.data("max-length");return o&&a.length>o?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":o,"actual":a.length})],d()),void 0):(b(e,t),void 0)},P))})}function u(e){var t=e.find(I);t.length&&t.blur(function(){O.push(setTimeout(function(){var n=t.val(),a=$.trim(n);return 0==a.length?(b(e,t),void 0):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(a)?(b(e,t),void 0):(m(t,["This email does not appear to be valid."],p()),void 0)},P))})}function d(){var e=$("#sidebar, .sidebar").first().width()||270,t="lg"===StackExchange.responsive.currentRange();return{"position":{"my":t?"left top":"top center","at":t?"right center":"bottom center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function p(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function f(){Array.prototype.forEach.call(arguments,function(e){var t=StackExchange.stacksValidation.handlerFor(e);t&&t.clear()})}function h(e,t,n,a,i){if(e){var o=function(){var n=0,o=t.find(C),r=t.find(x),s=t.find(S),c=t.find(E);f(r,s,o,c),m(r,e.Title,d())?n++:b(t,r),i&&g(t,r,i.Title),m(s,e.Body,d())?n++:b(t,s),i&&g(t,s,i.Body),m(o,e.Tags,d())?n++:b(t,o),m(c,e.Mentions,d())?n++:b(t,c),i&&g(t,o,i.Tags),m(t.find(j),e.EditComment,d())?n++:b(t,t.find(j)),m(t.find(T),e.Excerpt,d())?n++:b(t,t.find(T)),m(t.find(I),e.Email,p())?n++:b(t,t.find(I)),m(t.find(_),e.Confirmation,d())?n++:b(t,t.find(_));var l=t.find(".general-error"),u=e.General&&e.General.length>0;if(u||n>0){if(!l.length){var h=t.find('input[type="submit"]:visible, button[type="submit"]:visible');h.parent().after('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),l=t.find(".general-error")}if(u)m(l,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{b(t,l);var v;switch(a){case"question":v=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":v=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":v=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":v=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:v=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}l.text(v)}}else t.find(".general-error-container").remove();var k;y()&&($("#sidebar").animate({"opacity":.4},500),k=setInterval(function(){y()||($("#sidebar").animate({"opacity":1},500),clearInterval(k))},500));var w;t.find(".validation-error").each(function(){var e=$(this).offset().top;(!w||w>e)&&(w=e)});var O=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(w){var P=$(".review-bar").length;w=Math.max(0,w-(P?125:30)),$("html, body").animate({"scrollTop":w},O)}else O()},r=function(){1!=n||t.find(C).length?o():setTimeout(r,250)};r()}}function g(e,t,n){var a=d();if(a.type="warning",!n||0==n.length)return k(e,t),!1;var i=t.data("error-popup"),o=0;return i&&(o=i.height()+5),v(t,n,a,o)}function m(e,t,n){return n.type="error",v(e,t,n)}function v(e,t,n,a){var o,r=n.type,s=StackExchange.stacksValidation.handlerFor(e);if(s)return s.clear(r),(t||[]).forEach(function(e){s.add(r,e)}),!0;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(o=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",o&&o.length>0){var c=e.data(r+"-popup");if(c&&c.is(":visible")){var l=e.data(r+"-message");if(l==o)return c.animateOffsetTop&&c.animateOffsetTop(a||0),!0;c.fadeOutAndRemove()}a>0&&(n.position.offsetTop=a);var u=StackExchange.helpers.showMessage(e,o,n);return u.find("a").attr("target","_blank"),u.click(i),e.addClass("validation-"+r).data(r+"-popup",u).data(r+"-message",o),!0}return!1}function k(e,t){w("warning",e,t)}function b(e,t){w("error",e,t)}function w(e,t,n){if(!n||0==n.length)return!1;var a=StackExchange.stacksValidation.handlerFor(n);a&&a.clear(e);var i=n.data(e+"-popup");return i&&i.is(":visible")&&i.fadeOutAndRemove(),n.removeClass("validation-"+e),n.removeData(e+"-popup"),n.removeData(e+"-message"),t.find(".validation-"+e).length||t.find(".general-"+e+"-container").remove(),!0}function y(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var x="input#title",S="textarea.wmd-input:first",C=".tag-editor:not(.mention-editor)",E=".mention-editor",j="input[id^=edit-comment]",T="textarea#excerpt",I="input#m-address",_="label.ask-confirmation",O=[],P=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":h,"getSidebarPopupOptions":d}}();