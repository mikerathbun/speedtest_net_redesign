//WW
function __ZDConsent(a){function G(){if(!(a.MSInputMethodContext&&document.documentMode||a.frames.__cmpLocator))if(document.body){var b=document.body,c=document.createElement("iframe");c.style.display="none";c.name="__cmpLocator";b.appendChild(c)}else setTimeout(G,15)}var f=a.zdconsent?a.zdconsent.gdprApplies:!1,z=a._ZDAKGEO&&a._ZDAKGEO.cc?a._ZDAKGEO.cc:null;a.zdconsent&&a.zdconsent.geoCC&&(z=a.zdconsent.geoCC);var l=a.zdconsent&&"undefined"!==typeof a.zdconsent.consentGiven?a.zdconsent.consentGiven:
!1,g=l||!f?!0:!1,k={comscore:g?1:0,ga:g,googleads:g},q=a&&a.zdconsent&&a.zdconsent.cmd?a.zdconsent.cmd:[],A=0,H=0,I=0,S=a.location.search&&-1!=a.location.search.indexOf("debug")?!0:!1,r=a.frameElement||a.parent!=a?!0:!1,B=null,h=function(b,a){if(S)try{console.log("[ZDConsent] "+b),a&&console.log(a)}catch(d){console.log(d)}},J=function(b){b+="=";for(var c=a.document.cookie||"",d=c.split(";"),e=0;e<d.length;e++){for(c=d[e];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(b))return c.substring(b.length,
c.length)}return null},t=function(){var b=J("euconsent");return b?b:g?"BObzkKNObzkt0ASABAENCF-AAAAkF7_______9______9uz_Ov_v_f__33e8__9v_l_7_-___u_-33d4-_1vf99yfm1-7ftr3tp_87ues2_Xur__59__3z3_tphLgA":"BObzkKNObzleUASABAENCFAAAAAkGAAA"},K=function(){return{consentData:t(),gdprApplies:f,hasGlobalConsent:null}},L=function(b,c,d){if("consentGiven"!=b&&"consentClosed"!=b&&"consentDeclined"!=b&&"newVendorCallback"!=b)try{if("getConsentString"==b)d(t(),!0);else if("getConsentData"==b)d(K(),!0);else if("ping"==
b)d({gdprAppliesGlobally:!1,cmpLoaded:!0},!0);else if("getVendorConsents"==b){b={1:!0,2:!0,3:!0,4:!0,5:!1,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0,14:!0,15:!0,16:!0,17:!0,18:!0,19:!0,20:!0,21:!0,22:!0,23:!0,24:!0,25:!0,26:!0,27:!0,28:!0,29:!0,30:!0,31:!0,32:!0,33:!0,34:!0,35:!0,36:!0,37:!0,38:!0,39:!0,40:!0,41:!0,42:!0,43:!0,44:!0,45:!0,46:!0,47:!0,48:!0,49:!0,50:!0,51:!0,52:!0,53:!0,54:!1,55:!0,56:!0,57:!0,58:!0,59:!0,60:!0,61:!0,62:!0,63:!0,64:!0,65:!0,66:!0,67:!0,68:!0,69:!0,70:!0,71:!0,72:!0,
73:!0,74:!0,75:!0,76:!0,77:!0,78:!0,79:!0,80:!0,81:!0,82:!0,83:!0,84:!0,85:!0,86:!0,87:!0,88:!0,89:!0,90:!0,91:!0,92:!0,93:!0,94:!0,95:!0,96:!1,97:!0,98:!0,99:!1,100:!0,101:!0,102:!0,103:!1,104:!0,105:!0,106:!1,107:!1,108:!0,109:!0,110:!0,111:!0,112:!0,113:!0,114:!0,115:!0,116:!1,117:!1,118:!0,119:!0,120:!0,121:!1,122:!0,123:!1,124:!0,125:!0,126:!0,127:!0,128:!0,129:!0,130:!0,131:!0,132:!0,133:!0,134:!0,135:!1,136:!0,137:!0,138:!0,139:!0,140:!0,141:!0,142:!0,143:!0,144:!0,145:!0,146:!1,147:!0,148:!0,
149:!0,150:!0,151:!0,152:!0,153:!0,154:!0,155:!0,156:!0,157:!0,158:!0,159:!0,160:!0,161:!0,162:!0,163:!0,164:!0,165:!0,166:!1,167:!0,168:!0,169:!0,170:!0,171:!0,172:!1,173:!0,174:!0,175:!0,176:!1,177:!0,178:!0,179:!0,180:!0,181:!1,182:!0,183:!0,184:!0,185:!0,186:!1,187:!1,188:!0,189:!0,190:!0,191:!0,192:!0,193:!0,194:!0,195:!0,196:!0,197:!0,198:!0,199:!0,200:!0,201:!0,202:!0,203:!0,204:!1,205:!0,206:!0,207:!1,208:!0,209:!0,210:!0,211:!0,212:!0,213:!0,214:!0,215:!0,216:!0,217:!0,218:!0,219:!1,220:!1,
221:!0,222:!1,223:!0,224:!0,225:!0,226:!0,227:!0,228:!0,229:!0,230:!0,231:!0,232:!0,233:!1,234:!0,235:!0,236:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,243:!0,244:!0,245:!0,246:!0,247:!1,248:!0,249:!0,250:!0,251:!0,252:!0,253:!0,254:!0,255:!0,256:!0,257:!0,258:!0,259:!0,260:!0,261:!0,262:!0,263:!0,264:!0,265:!0,266:!0,267:!1,268:!0,269:!0,270:!0,271:!1,272:!0,273:!0,274:!0,275:!0,276:!0,277:!0,278:!0,279:!0,280:!0,281:!0,282:!0,283:!1,284:!0,285:!0,286:!1,287:!0,288:!0,289:!0,290:!0,291:!0,292:!1,
293:!0,294:!0,295:!0,296:!1,297:!0,298:!0,299:!0,300:!1,301:!0,302:!0,303:!0,304:!0,305:!1,306:!1,307:!1,308:!0,309:!0,310:!0,311:!0,312:!0,313:!1,314:!0,315:!0,316:!0,317:!0,318:!0,319:!0,320:!0,321:!0,322:!1,323:!0,324:!1,325:!0,326:!0,327:!1,328:!0,329:!0,330:!0,331:!0,332:!1,333:!0,334:!0,335:!0,336:!0,337:!0,338:!0,339:!0,340:!0,341:!0,342:!1,343:!0,344:!0,345:!0,346:!0,347:!0,348:!1,349:!0,350:!0,351:!0,352:!1,353:!1,354:!0,355:!1,356:!1,357:!0,358:!0,359:!0,360:!0,361:!0,362:!0,363:!1,364:!1,
365:!0,366:!0,367:!1,368:!0,369:!0,370:!1,371:!0,372:!1,373:!0,374:!0,375:!0,376:!0,377:!0,378:!0,379:!1,380:!0,381:!0,382:!0,383:!1,384:!0,385:!0,386:!1,387:!0,388:!0,389:!0,390:!0,391:!0,392:!0,393:!1,394:!0,395:!0,396:!1,397:!0,398:!0,399:!1,400:!0,401:!1,402:!0,403:!0,404:!0,405:!0,406:!1,407:!0,408:!0,409:!0,410:!0,411:!1,412:!0,413:!0,414:!1,415:!0,416:!0,417:!1,418:!0,419:!1,420:!1,421:!0,422:!0,423:!0,424:!0,425:!0,426:!0,427:!0,428:!0,429:!0,430:!0,431:!0,432:!1,433:!1,434:!0,435:!0,436:!0,
437:!1,438:!0,439:!0,440:!0,441:!1,442:!0,443:!0,444:!0,445:!1,446:!1,447:!0,448:!0,449:!0,450:!0,451:!1,452:!0,453:!1,454:!0,455:!0,456:!1,457:!1,458:!0,459:!0,460:!1,461:!0,462:!0,463:!1,464:!0,465:!0,466:!0,467:!0,468:!0,469:!0,470:!1,471:!0,472:!1,473:!0,474:!0,475:!0,476:!0,477:!1,478:!0,479:!0,480:!0,481:!1,482:!0,483:!1,484:!0,485:!1,486:!0,487:!0,488:!0,489:!0,490:!0,491:!0,492:!0,493:!0,494:!0,495:!0,496:!0,497:!0,498:!0,499:!0,500:!0,501:!0,502:!0,503:!1,504:!1,505:!0,506:!0,507:!0,508:!0,
509:!0,510:!1,511:!0,512:!0,513:!0,514:!0,515:!0,516:!0,517:!0,518:!0,519:!0,520:!0,521:!0,522:!0,523:!0,524:!0,525:!0,526:!1,527:!0,528:!0,529:!0,530:!0,531:!0,532:!1,533:!1,534:!0,535:!0,536:!0,537:!0,538:!1,539:!0,540:!0,541:!0,542:!0,543:!0,544:!0,545:!0,546:!0,547:!0,548:!0,549:!1,550:!0,551:!0,552:!1,553:!0,554:!0,555:!1,556:!0,557:!1,558:!1,559:!0,560:!0,561:!1,562:!1,563:!1,564:!1,565:!0,566:!1,567:!1,568:!0,569:!1,570:!0,571:!0,572:!0};c={};for(var e=1;5>=e;e++)c[e+""]=g?!0:!1;for(e=6;24>=
e;e++)c[e+""]=!1;if(!g)for(var h in b)b[h]=!1;var k=(new Date).toISOString();d({metadata:"BObzkKNObzkt0ASABAAACFAAAAAAAA",gdprApplies:f,hasGlobalScope:!1,cookieVersion:1,created:k,lastUpdated:k,cmpId:18,cmpVersion:1,consentScreen:1,consentLanguage:"EN",vendorListVersion:133,maxVendorId:577,purposeConsents:c,vendorConsents:b},!0)}else a.evidon&&a.evidon.cmp?a.evidon.cmp(b,c,d):d&&d(null,!1)}catch(T){console.log(T)}},M=function(b){var c="string"===typeof b.data,d=b.data;if(c)try{d=JSON.parse(b.data)}catch(C){return}if(d&&
d.__cmpCall){var e=d.__cmpCall;a.__cmp(e.command,e.parameter,function(a,d){a={__cmpReturn:{returnValue:a,success:d,callId:e.callId}};b.source.postMessage(c?JSON.stringify(a):a,"*")})}},u=function(){h("Setting up ZDConsent CMP");if(a.__cmp&&a.__cmp.a&&a.__cmp.a.length)for(var b=0;b<a.__cmp.a.length;b++){var c=a.__cmp.a.length[b];L(c[0],c[1],c[2])}a.__cmp=L;G();a.addEventListener?a.addEventListener("message",M,!1):a.attachEvent("onmessage",M)},N=function(){var b=a.zdconsent?a.zdconsent.cmd:q;if(!b.processed){a.zdconsent&&
a.zdconsent.inited||(a.zdconsent=B);if("undefined"!==typeof b.length&&"undefined"===typeof b.processed){h("Processing ZDConsent queue: "+b.length);for(var c=0;c<b.length;c++){var d=b[c];if(!d||"boolean"===typeof d)return;try{"[object Function]"==={}.toString.call(d)?d(a):m(d)}catch(e){h(" queue error: "+e,d)}}}q={processed:!0,push:function(b){if(b&&"boolean"!==typeof b)try{"[object Function]"==={}.toString.call(b)?b(a):m(b)}catch(C){h("queue error: "+C,b)}}};a.zdconsent.cmd=q;return a.zdconsent.cmd}},
m=function(b,c,d,e,h){e||(e=a);e=e.document;var f=e.getElementsByTagName("head")[0]||e.documentElement,k=!1,g=e.createElement("script");g.async=h?!1:!0;c&&(g.id=c);if(d){var l=function(){g.onload=g.onreadystatechange=null;try{d&&d()}catch(U){}};g.onreadystatechange=function(){k||"loaded"!=this.readyState&&"complete"!=this.readyState||(k=!0,l())};g.onload=l}if("string"===typeof b)g.src=b;else for(var m in b)g.setAttribute(m,b[m]);f.insertBefore(g,f.firstChild)},O=function(){l=!0;a.zdconsent.consentGiven=
!0;for(var b in k)k[b]=!0,"comscore"==b&&(k[b]="1");a.zdconsent.optins=k;g=!0;v();w();return!0},D=function(){v();w();f||N()},w=function(){a.googletag=a.googletag||{};a.googletag.cmd=a.googletag.cmd||[];a.pbjs=a.pbjs||{};a.pbjs.que=a.pbjs.que||[];"undefined"===typeof a.__cmp&&u();f?(a.pbjs.que.push(function(){pbjs.setConfig&&pbjs.getConfig?pbjs.getConfig("consentManagement")||(h("Configuring PBJS Consent Module"),pbjs.setConfig({consentManagement:{cmpApi:"iab",timeout:1E3,allowAuctionWithoutConsent:!0}})):
h("Unsupported Prebid version - please upgrade to version 1.12+")}),k.googleads?(a.googletag.cmd.push(function(){a.googletag.pubads().setRequestNonPersonalizedAds(0);a.googletag.pubads().setTargeting("gdpr","1");h("Configuring GPT: personalized ads")}),(adsbygoogle=a.adsbygoogle||[]).requestNonPersonalizedAds=0):(a.googletag.cmd.push(function(){a.googletag.pubads().setRequestNonPersonalizedAds(1);a.googletag.pubads().setTargeting("gdpr","0");h("Configuring GPT: non-personalized ads")}),(adsbygoogle=
a.adsbygoogle||[]).requestNonPersonalizedAds=1),H+=1):H&&(a.googletag.cmd.push(function(){a.googletag.pubads().setRequestNonPersonalizedAds(0);a.googletag.pubads().clearTargeting("gdpr");h("Configuring GPT: non-personalized ads")}),(adsbygoogle=a.adsbygoogle||[]).requestNonPersonalizedAds=0);a.apstag&&"undefined"===typeof a.__cmp&&u()},v=function(){f&&!k.ga?(a.ga&&(a.ga("set","anonymizeIp",!0),a.ga("set","displayFeaturesTask",null)),I+=1):I&&a.ga&&(a.ga("set","anonymizeIp",!1),a.ga("require","displayfeatures"))},
x=function(b){h("Opt Out All received",b);b=a.location.hostname.split(".").reverse();b=2<=b.length&&/com|co|web/gi.test(b[1])?b.splice(0,3).reverse():b.splice(0,2).reverse();b=b.join(".");document.cookie="opt_out=zdc; path=/; max-age=3888000; domain=."+b+";";document.cookie="euconsent=BObzkKNObzleUASABAENCFAAAAAkGAAA; path=/; max-age=3888000; domain=."+b+";";document.cookie="_evidon_suppress_notification_cookie="+JSON.stringify({date:new Date})+"; path=/; max-age=3888000; domain=."+b+";";document.cookie=
"_evidon_consent_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=."+b+";";document.cookie="_evidon_consent_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";l=!1;a.zdconsent.consentGiven=!1;for(var c in k)k[c]=!1,"comscore"==c&&(k[c]="0");a.zdconsent.optins=k;g=!1;v();w()},E=function(b,c){h("Opt In All received",b);b=a.location.hostname.split(".").reverse().splice(0,2).reverse().join(".");document.cookie="zdconsent=optin; path=/; max-age=33955200; domain=."+b+";";document.cookie=
"euconsent=BObzkKNObzkt0ASABAENCF-AAAAkF7_______9______9uz_Ov_v_f__33e8__9v_l_7_-___u_-33d4-_1vf99yfm1-7ftr3tp_87ues2_Xur__59__3z3_tphLgA; path=/; max-age=33955200; domain=."+b+";";document.cookie="opt_out=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=."+b+";";document.cookie="opt_out=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";-1==document.cookie.indexOf("_evidon_consent_cookie={")&&(b=a.location.hostname.split(".").reverse().splice(0,2).reverse().join("."),document.cookie="_evidon_consent_cookie="+
JSON.stringify({consent_date:new Date})+"; path=/; max-age=33955200; domain=."+b+";");O()},P=function(b){b&&b.preventDefault&&b.preventDefault();b&&b.stopPropagation&&b.stopPropagation();b&&(b.cancelBubble=!0);return a.document.getElementById("_evidon-consent-frame")?!1:a.evidon.notice.showConsentTool()},Q=function(b){b&&b.preventDefault&&b.preventDefault();b&&b.stopPropagation&&b.stopPropagation();b&&(b.cancelBubble=!0);a.evidon.banner&&a.evidon.banner.destroyNotice();a.evidon.barrier&&a.evidon.barrier.destroyNotice();
if(b=document.getElementById("_evidon-barrier-wrapper"))b.style.display="none",b.parentElement.removeChild(b);P();return!1},R=function(){if(f){if(!A){var b=a.document.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText="#_evidon-banner-acceptbutton:hover { background-color: #555; border-color: #333; }":b.appendChild(document.createTextNode("#_evidon-banner-acceptbutton:hover { background-color: #555; border-color: #333; }"));a.document.getElementsByTagName("head")[0].appendChild(b)}if(b=
document.getElementById("_evidon-banner-cookiebutton")){b.onclick=Q;if(b=document.getElementById("_evidon-banner-cookiebuttontext"))b.onclick=Q;(b=document.getElementById("_evidon-banner-acceptbutton"))&&b.addEventListener("click",E)}else A+=1,15<A||setTimeout(R,100)}},n=function(){var b=a.evidon.notice?a.evidon.notice.country.code:a.evidon.location.code;z=b;a.zdconsent&&(a.zdconsent.geoCC=b);"undefined"===typeof a.__cmp&&u();/be|bg|cz|dk|de|ee|ie|el|es|fr|hr|it|cy|lv|lt|lu|hu|mt|nl|at|pl|pt|ro|si|sk|fi|se|gb|uk/i.test(b)?
f||(f=!0,a.zdconsent&&(a.zdconsent.gdprApplies=!0),D()):f&&(f=!1,a.zdconsent&&(a.zdconsent.gdprApplies=!1),D());return!0};B={inited:!0,loadJS:m,loadCSS:function(b,c,d){function e(){f.onload=f.onreadystatechange=null;c&&c()}d=d?d.document:a.document;var g=d.getElementsByTagName("head")[0]||d.documentElement,h=!1,f=d.createElement("link");f.rel="stylesheet";f.type="text/css";f.onreadystatechange=function(){h||"loaded"!=this.readyState&&"complete"!=this.readyState||(h=!0,e())};f.onload=e;f.href=b;g.appendChild(f)},
gdprApplies:f,consentGiven:l,geoCC:z,cmd:q,showConsentTool:P,optins:k,getConsentString:t,getConsentData:K,getApsConsent:function(){return{enabled:f,consent:t()}},setupCMP:u,log:h};(function(){var b=document.cookie||"";l=-1==b.indexOf('_evidon_consent_cookie={"vendors":')&&-1==b.indexOf('_evidon_consent_cookie={"consent_date":')?!1:!0;-1!=b.indexOf("opt_out=")&&(l=!1);b=J("euconsent")||"";-1!=b.indexOf("BObzkKNObzkt0ASABAENCF-AAAAkF7_______9______9uz_Ov_v_f__33e8__9v_l_7_-___u_-33d4-_1vf99yfm1-7ftr3tp_87ues2_Xur__59__3z3_tphLgA")||
-1!=b.indexOf("___")?l=!0:-1!=b.indexOf("BObzkKNObzleUASABAENCFAAAAAkGAAA")&&(l=!1);g=l||!f?!0:!1;k={comscore:g?1:0,ga:g,googleads:g};return l})();D();"undefined"==typeof a.evidon&&(a.evidon={});a.evidon.id=660;"undefined"===typeof a.evidon.priorConsentCallback&&(a.evidon.priorConsentCallback=function(b,c,d){h("Evidon priorConsentCallback fired");O();try{a.zd&&a.zd.core&&a.zd.core.signals.GDPRoptin(a.zdcore_local_uid||"")}catch(e){h("Core error",e)}N();v();w()});var y="",F="";try{y=a.location.hostname,
F=a.location.pathname}catch(b){}var p=function(){var b=a.location.hostname.split(".");return 1>=b.length?"":b[b.length-2]}();p&&"localhost"!=p||(p="pcmag");try{-1!=a.location.search.indexOf("zdconsent")&&(p="zdconsent",a.evidon.domain="zdconsent.com")}catch(b){}try{-1!=a.location.hostname.indexOf("downdetector.")&&(p="downdetector",a.evidon.domain="downdetector.com")}catch(b){}r=r||"s.ign.com"==y||"widgets.ign.com"==y?!1:!0;-1==y.indexOf("ign.com")||"/v/"!=F&&-1==F.indexOf("/video/embed")||(r=!1);
r&&(m("https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js","evidon-notice"),m("https://c.evidon.com/geo/country.js","evidon-location",n),m("https://c.evidon.com/sitenotice/"+a.evidon.id+"/snthemes.js","evidon-themes"),m("https://c.evidon.com/sitenotice/evidon-access.js","evidon-access"),m("https://c.evidon.com/sitenotice/"+a.evidon.id+"/"+p+"/settings.js","evidon-settings",R));a.dataLayer=a.dataLayer||[];a.dataLayer.push({event:"zdconsentLoaded"});n=null;"function"===typeof Event?n=new Event("zdconsentloaded"):
document.createEvent&&(n=document.createEvent("Event"),n.initEvent("zdconsentloaded",!0,!0));n&&a.dispatchEvent(n);a.addEventListener&&a.addEventListener("message",function(b){var a=b.data;if(a){try{"string"===typeof a&&(a=JSON.parse(a))}catch(C){return}if(a.sender&&"zdconsent"==a.sender){b=a.action;if("optoutall"==b||"optout"==b&&"all"==a.optout)return x();if("optin"==b)a:{b=a.optedin;var d=a.optedout;h("Opt-in some",a);if(b&&b.length)if(d&&d.length){a=["Ad Network","Ad Exchange"];for(var e=0;e<
a.length;e++)if(-1!=d.indexOf(a[e])){x();break a}!f||-1!=b.indexOf(a[0])&&-1!=b.indexOf(a[1])?E():x()}else E();else x()}}}},!1);return B}window.zdconsent&&window.zdconsent.inited||(window.zdconsent=__ZDConsent(window));
