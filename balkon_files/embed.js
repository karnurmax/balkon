(function(g){var window=this;var g4=function(a,b){g.hf(a.o,8*b+2);var c=a.o.end();a.A.push(c);a.u+=c.length;c.push(a.u);return c},h4=function(a,b){var c=b.pop();
for(c=a.u+a.o.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.u++;b.push(c);a.u++},QDa=function(a,b,c){null!=c&&(g.hf(a.o,8*b+1),a=a.o,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.tf=b,g.uf=c,g.jf(a,g.tf),g.jf(a,g.uf))},i4=function(a,b,c){null!=c&&(g.hf(a.o,8*b),a.o.o.push(c?1:0))},j4=function(a,b,c){if(null!=c){b=g4(a,b);
for(var d=a.o,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.o.push(f);else if(2048>f)d.o.push(f>>6|192),d.o.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.o.push(f>>18|240),d.o.push(f>>12&63|128),d.o.push(f>>6&63|128),d.o.push(f&63|128),e++)}else d.o.push(f>>12|224),d.o.push(f>>6&63|128),d.o.push(f&63|128)}h4(a,b)}},k4=function(a,b,c,d){null!=c&&(b=g4(a,b),d(c,a),h4(a,b))},l4=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=g4(a,b);
d(c[e],a);h4(a,f)}},RDa=function(a,b){var c=(b-a.o)/(a.u-a.o);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.In(a,c);var l=(g.In(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.In(a,c);return c},m4=function(a,b,c){a.o||(a.o={});
if(!a.o[c]){var d=g.Df(a,c);d&&(a.o[c]=new b(d))}return a.o[c]},n4=function(a,b,c){g.Hf(a,b,c);
b=a.o[c];b==g.zf&&(b=a.o[c]=[]);return b},SDa=function(a,b,c){a.o||(a.o={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].Ne;a.o[b]=c;g.Ff(a,b,d)},o4=function(a,b,c,d){(c=g.Bf(a,c))&&c!==b&&void 0!==d&&(a.o&&c in a.o&&(a.o[c]=void 0),g.Ff(a,c,void 0));
g.Ff(a,b,d)},TDa=function(){return{D:"svg",
O:{height:"100%",viewBox:"0 0 16 16",width:"100%"},L:[{D:"path",O:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}},p4=function(){return{D:"svg",
O:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},L:[{D:"path",ab:!0,I:"ytp-svg-fill",O:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
UDa=function(a){this.Iz=a},q4=function(a,b,c){this.B=a;
this.u=b;this.o=c||[];this.Ql=new Map},r4=function(a,b){q4.call(this,a,3,b)},s4=function(){this.P=new VDa;
this.u=new Map;this.H=new Set;this.A=0;this.B=100;this.flushInterval=3E4;this.o=new g.Qm(this.flushInterval);this.o.ia("tick",this.C,!1,this)},WDa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},XDa=function(){if(!t4){t4=new s4;
var a=g.so("client_streamz_web_flush_count",-1);-1!==a&&(t4.B=a)}this.o=t4;this.o.F("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe")},ZDa=function(a){g.Cf(this,a,YDa,null)},$Da=function(a){g.Cf(this,a,null,null)},bEa=function(a,b){var c=n4(a,$Da,1);
0<c.length&&l4(b,1,c,aEa)},aEa=function(a,b){var c=g.Df(a,1);
null!=c&&g.wf(b,1,c);c=g.Df(a,2);null!=c&&g.vf(b,2,c)},dEa=function(a){g.Cf(this,a,cEa,null)},fEa=function(a){g.Cf(this,a,null,eEa)},gEa=function(a){g.Cf(this,a,null,null)},hEa=function(a){g.Cf(this,a,null,null)},u4=function(a){g.Cf(this,a,iEa,null)},w4=function(a){g.Cf(this,a,null,v4)},y4=function(a){g.Cf(this,a,null,x4)},lEa=function(a,b){var c=m4(a,gEa,1);
null!=c&&k4(b,1,c,jEa);c=m4(a,hEa,2);null!=c&&k4(b,2,c,kEa)},jEa=function(a,b){var c=g.Df(a,1);
null!=c&&j4(b,1,c);c=g.Df(a,2);null!=c&&j4(b,2,c);c=g.Df(a,3);null!=c&&i4(b,3,c)},kEa=function(a,b){var c=g.Df(a,1);
null!=c&&j4(b,1,c);c=g.Df(a,2);null!=c&&j4(b,2,c);c=g.Df(a,3);null!=c&&g.sf(b,3,c);c=g.Df(a,4);null!=c&&i4(b,4,c)},oEa=function(a,b){var c=n4(a,w4,1);
0<c.length&&l4(b,1,c,mEa);c=m4(a,y4,2);null!=c&&k4(b,2,c,nEa)},mEa=function(a,b){var c=g.Df(a,1);
null!=c&&j4(b,1,c);c=g.Df(a,2);null!=c&&g.sf(b,2,c);c=g.Df(a,3);null!=c&&i4(b,3,c)},nEa=function(a,b){var c=g.Df(a,1);
null!=c&&g.vf(b,1,c);c=g.Df(a,2);null!=c&&g.wf(b,2,c);c=m4(a,ZDa,3);null!=c&&k4(b,3,c,bEa)},VDa=function(){},z4=function(a){g.B.call(this);
this.callback=a;this.u=new g.Hn(0,0,.4,0,.2,1,1,1);this.delay=new g.nn(this.next,window,this);this.startTime=this.duration=this.o=this.from=NaN;g.C(this,this.delay)},A4=function(a){g.V.call(this,{D:"div",
I:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.F=this.u=0;this.animationDelay=1E3;this.M=new g.ms(this);this.B=[];this.o=[];this.C=0;this.title=new g.V({D:"h2",I:"ytp-related-title",U:"{{title}}"});this.previous=new g.V({D:"button",da:["ytp-button","ytp-previous"],O:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},L:[g.aN()]});this.S=
new z4(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.A=0;this.H=!0;this.next=new g.V({D:"button",da:["ytp-button","ytp-next"],O:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},L:[g.bN()]});g.C(this,this.M);a=a.N();this.P=a.u;g.C(this,this.title);this.title.Y(this.element);this.suggestions=new g.V({D:"div",I:"ytp-suggestions"});g.C(this,this.suggestions);this.suggestions.Y(this.element);
g.C(this,this.previous);this.previous.Y(this.element);this.previous.ia("click",this.sJ,this);g.C(this,this.S);for(var c=0;16>c;c++){var d=new g.V({D:"a",I:"ytp-suggestion-link",O:{href:"{{link}}",target:a.C,"aria-label":"{{aria_label}}"},L:[{D:"div",I:"ytp-suggestion-image",L:[{D:"div",O:{"data-is-live":"{{is_live}}"},I:"ytp-suggestion-duration",U:"{{duration}}"}]},{D:"div",I:"ytp-suggestion-title",O:{title:"{{hover_title}}"},U:"{{title}}"},{D:"div",I:"ytp-suggestion-author",U:"{{views_or_author}}"}]});
g.C(this,d);d.Y(this.suggestions.element);var e=d.ba("ytp-suggestion-link");g.F(e,"transitionDelay",c/20+"s");this.M.K(e,"click",g.Ua(this.tJ,c));this.B.push(d)}g.C(this,this.next);this.next.Y(this.element);this.next.ia("click",this.rJ,this);this.M.K(this.api,"videodatachange",this.Ia);this.resize(g.LG(this.api).getPlayerSize());this.Ia();this.show()},B4=function(a){a.next.element.style.bottom=a.F+"px";
a.previous.element.style.bottom=a.F+"px";var b=a.A,c=a.C-a.o.length*(a.tileWidth+a.u);g.J(a.element,"ytp-scroll-min",0<=b);g.J(a.element,"ytp-scroll-max",b<=c)},pEa=function(a){for(var b=0;b<a.o.length;b++){var c=b,d=a.o[b].Ba();
c=a.B[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.ij();g.WB(a.api.N())&&(f=g.Jd(f,g.PT({},"emb_rel_err")));c.element.style.display="";var h=c.ba("ytp-suggestion-title");g.Fn.test(d.title)?h.dir="rtl":g.Pza.test(d.title)&&(h.dir="ltr");h=c.ba("ytp-suggestion-author");g.Fn.test(e)?h.dir="rtl":g.Pza.test(e)&&(h.dir="ltr");h=void 0;d.isLivePlayback?h="\u0412 \u044d\u0444\u0438\u0440\u0435":h=d.lengthSeconds?g.FO(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,
title:d.title,aria_label:d.vn||null,is_live:d.isLivePlayback});c=c.ba("ytp-suggestion-image");d=d.od();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";B4(a)},C4=function(a){g.FX.call(this,a);
var b=this,c=a.N();c=new g.V({D:"a",I:"ytp-small-redirect",O:{href:g.GC(c),target:c.C,"aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 YouTube \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0438\u0434\u0435\u043e"},L:[{D:"svg",O:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},L:[{D:"path",O:{d:"M0 0h24v24H0V0z",fill:"none"}},{D:"path",O:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.Y(this.element);g.C(this,c);this.o=new A4(a);this.o.Y(this.element);g.C(this,this.o);this.K(a,"videodatachange",function(){b.show()});
this.resize(g.LG(this.api).getPlayerSize())},qEa=function(a,b){a.ba("ytp-error-content").style.paddingTop="0px";
var c=a.ba("ytp-error-content"),d=c.clientHeight;a.o.resize(b,b.height-d);c.style.paddingTop=(b.height-a.o.element.clientHeight)/2-d/2+"px"},rEa=function(a,b){var c=a.api.N(),d;
b.reason&&(D4(b.reason)?d=g.tE(b.reason):d=g.GX(g.U(b.reason)),a.Xb(d,"content"));var e;b.subreason&&(D4(b.subreason)?e=g.tE(b.subreason):e=g.GX(g.U(b.subreason)),a.Xb(e,"subreason"));if(g.R(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ba("ytp-error-content-wrap-subreason"),d=g.De("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},D4=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},E4=function(a,b){g.V.call(this,{D:"button",
da:["ytp-impression-link","ytp-button"]});this.api=a;this.A=b;this.u=!1;this.o=null;var c=this.api.N();this.hide();g.fX(this.api,this.element,this,96714);var d=this.api.N(),e=this.api.getVideoData().Dc,f=d.Qa,h=d.sf;d=!d.bb;var l=this.A.Cf();f||h||l||e||d||(g.R(c.experiments,"embeds_impression_link_call_to_action")&&(g.I(this.element,"show-cta-button"),(new g.V({D:"div",I:"ytp-impression-link-content",L:[{D:"div",I:"ytp-impression-link-text",U:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430"},
{D:"div",I:"ytp-impression-link-logo",L:[p4()]}]})).Y(this.element),this.show()),g.R(c.experiments,"embeds_impression_link_video_thumbnail")&&sEa(this),g.R(c.experiments,"embeds_impression_link_channel_thumbnail")&&tEa(this),g.R(c.experiments,"embeds_impression_link_occlusion")&&uEa(this),g.R(c.experiments,"embeds_impression_link_hover")&&vEa(this),this.K(this.api,"presentingplayerstatechange",this.af),this.K(this.api,"videoplayerreset",this.B),this.K(this.element,"click",this.onClick))},sEa=function(a){g.Re(a,
function c(){var d=this,e,f,h,l,m;
return g.za(c,function(n){if(1==n.o)return e=d.api.getVideoData(),g.ra(n,F4(d,e),2);f=n.u;if(!f)return n["return"]();h=f[0];d.o=h;g.I(d.element,"show-video-thumbnail-button");l=new g.V({D:"div",I:"ytp-impression-link-header",U:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"});l.Y(d.element);m=new g.V({D:"div",I:"ytp-impression-link-content",L:[{D:"div",I:"ytp-impression-link-metadata",L:[{D:"div",I:"ytp-impression-link-title",U:h.title},{D:"div",I:"ytp-impression-link-views-and-duration",
U:"{{views_and_duration}}"}]},{D:"div",I:"ytp-impression-link-thumbnail"}]});m.Y(d.element);G4(d,m,h);H4(d,m,h);d.show();n.o=0})})},tEa=function(a){g.Re(a,function c(){var d=this,e,f,h;
return g.za(c,function(l){if(1==l.o)return g.ra(l,wEa(d),2);e=l.u;if(!e)return l["return"]();d.o=e;g.I(d.element,"show-channel-thumbnail-button");f=new g.V({D:"div",I:"ytp-impression-link-header",U:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"});f.Y(d.element);h=new g.V({D:"div",I:"ytp-impression-link-content",L:[{D:"div",I:"ytp-impression-link-metadata",L:[{D:"div",I:"ytp-impression-link-title",U:e.Pn},{D:"div",I:"ytp-impression-link-subscribers",U:e.expandedSubtitle}]},
{D:"div",I:"ytp-impression-link-thumbnail"}]});h.Y(d.element);G4(d,h,e);d.show();l.o=0})})},uEa=function(a){g.Re(a,function c(){var d=this,e,f,h,l,m,n,q,r,t,w,x;
return g.za(c,function(z){if(1==z.o)return e=d,f=d.api.getVideoData(),g.ra(z,F4(d,f),2);h=z.u;if(!h)return z["return"]();l=h[0];d.o=l;g.I(d.element,"show-occlusion-video-thumbnail-button");m=new g.V({D:"div",I:"ytp-impression-link-header",U:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"});m.Y(d.element);n=new g.V({D:"div",I:"ytp-impression-link-content",L:[{D:"div",I:"ytp-impression-link-metadata",L:[{D:"div",I:"ytp-impression-link-title",U:l.title},{D:"div",
I:"ytp-impression-link-author",U:l.author},{D:"div",I:"ytp-impression-link-views",U:"{{views}}"}]},{D:"div",I:"ytp-impression-link-thumbnail-and-duration",L:[{D:"div",I:"ytp-impression-link-thumbnail"},{D:"div",I:"ytp-impression-link-duration",U:"{{duration}}"}]}]});n.Y(d.element);G4(d,n,l);H4(d,n,l);q=new g.V({D:"button",da:["ytp-button","ytp-impression-link-close"],L:[{D:"div",da:["ytp-impression-link-close-icon"],L:[TDa()]}]});q.Y(d.element);q.ia("click",function(D){e.hide();g.UM(e.api,e.element,
!1);D.stopPropagation()},d);
r=function(D){!g.p(D).next().value.isIntersecting&&e.element&&e.show()};
try{t={threshold:.8},w=new IntersectionObserver(r,t),x=document.querySelector("body"),w.observe(x)}catch(D){g.L(D)}z.o=0})})},vEa=function(a){g.Re(a,function c(){var d=this,e,f,h,l,m,n;
return g.za(c,function(q){if(1==q.o)return e=d,f=d.api.getVideoData(),g.ra(q,F4(d,f),2);h=q.u;if(!h)return q["return"]();l=h[0];d.o=l;g.I(d.element,"show-video-thumbnail-expanding-button");d.K(d.element,"mouseenter",function(){g.I(e.element,"show-expanded-metadata");g.yn(e.element,"show-collapsed-metadata")});
d.K(d.element,"mouseleave",function(){g.yn(e.element,"show-expanded-metadata");g.I(e.element,"show-collapsed-metadata")});
m=new g.V({D:"div",I:"ytp-impression-link-header",U:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"});m.Y(d.element);n=new g.V({D:"div",I:"ytp-impression-link-content",L:[{D:"div",I:"ytp-impression-link-metadata",L:[{D:"div",I:"ytp-impression-link-title",U:l.title},{D:"div",I:"ytp-impression-link-views-and-duration",U:"{{views_and_duration}}"}]},{D:"div",I:"ytp-impression-link-thumbnail"}]});n.Y(d.element);G4(d,n,l);H4(d,n,l);
d.show();q.o=0})})},G4=function(a,b,c){a=g.R(a.api.N().experiments,"embeds_impression_link_channel_thumbnail")?c.te:c.od();
b.ba("ytp-impression-link-thumbnail").style.backgroundImage=a?"url("+a+")":""},H4=function(a,b,c){a=a.api.N();
var d="";c.isLivePlayback?d="\u0412 \u044d\u0444\u0438\u0440\u0435":c.lengthSeconds&&(d=g.FO(c.lengthSeconds));c=c.shortViewCount?c.shortViewCount:"";var e="";c&&d?e=c+" \u2022 "+d:c?e=c:d&&(e=d);g.R(a.experiments,"embeds_impression_link_occlusion")?b.update({views:c,duration:d}):b.update({views_and_duration:e})},xEa=function(a,b){return g.Re(a,function d(){var e,f,h,l;
return g.za(d,function(m){if(1==m.o)return e=g.vV(),f={isEmbedPreview:!0,videoId:b.videoId},h=g.mV(g.Rua),g.ra(m,g.OG(e,f,h),2);l=m.u;return m["return"](l)})})},F4=function(a,b){return g.Re(a,function d(){var e=this,f,h,l,m,n,q;
return g.za(d,function(r){if(1==r.o)return f=e,g.ra(r,xEa(e,b),2);h=r.u;if(!h)return r["return"](null);l=e.api.N();m=new g.bF(l,{raw_watch_next_response:h});n=g.Ie(m.suggestions,function(t){return t&&!t.list});
return(q=g.Oc(n,function(t){t=g.oZ(l,t);g.C(f,t);return t}))&&0!==q.length?r["return"](q):r["return"](null)})})},wEa=function(a){return g.Re(a,function c(){var d=this,e,f,h,l,m,n,q;
return g.za(c,function(r){if(1==r.o)return e=d.api.getVideoData(),g.ra(r,F4(d,e),2);if(3!=r.o){f=r.u;if(!f)return r["return"](null);h=e.Pn;l=f.filter(function(t){return null!==t&&t.author!==h});
return(m=l[0])?g.ra(r,xEa(d,m),3):r["return"](null)}n=r.u;if(!n)return r["return"](null);q=new g.bF(d.api.N(),{raw_watch_next_response:n});return r["return"](q)})})},I4=function(a){g.V.call(this,{D:"div",
I:"ytp-muted-autoplay-endscreen-overlay",L:[{D:"div",I:"ytp-muted-autoplay-end-panel",L:[{D:"div",I:"ytp-muted-autoplay-end-text",U:"{{text}}"}]}]});this.api=a;this.u=this.ba("ytp-muted-autoplay-end-panel");this.o=new g.yX(this.api);g.C(this,this.o);this.o.Y(this.u,0);g.fX(this.api,this.element,this,52428);this.K(this.api,"presentingplayerstatechange",this.A);this.ia("click",this.onClick);this.hide()},J4=function(a){g.V.call(this,{D:"div",
I:"ytp-muted-autoplay-overlay",L:[{D:"div",I:"ytp-muted-autoplay-bottom-buttons",L:[{D:"button",da:["ytp-muted-autoplay-equalizer","ytp-button"],L:[{D:"div",da:["ytp-muted-autoplay-equalizer-icon"],L:[{D:"svg",O:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},L:[{D:"g",O:{fill:"#fff"},L:[{D:"rect",I:"ytp-equalizer-bar-left",O:{height:"9",width:"4",x:"1",y:"7"}},{D:"rect",I:"ytp-equalizer-bar-middle",O:{height:"14",width:"4",x:"6",y:"2"}},{D:"rect",I:"ytp-equalizer-bar-right",O:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ba("ytp-muted-autoplay-bottom-buttons");this.ba("ytp-muted-autoplay-equalizer");this.A=new g.G(this.u,4E3,this);g.fX(a,this.element,this,39306);this.K(a,"presentingplayerstatechange",this.o);this.K(a,"onMutedAutoplayStarts",this.o);this.ia("click",this.onClick);this.hide()},K4=function(a,b){g.V.call(this,{D:"div",
I:"ytp-pause-overlay"});var c=this;this.api=a;this.M=b;this.animationDelay=1E3;this.u=new g.ms(this);this.F=new g.FN(this,1E3,!1,100);this.B=[];this.o=[];this.C=0;this.H=!1;this.W=0;this.title=new g.V({D:"h2",I:"ytp-related-title",U:"{{title}}"});this.previous=new g.V({D:"button",da:["ytp-button","ytp-previous"],O:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},
L:[g.aN()]});this.S=new z4(function(m){c.suggestions.element.scrollLeft=-m});
this.T=this.tileWidth=this.A=0;this.next=new g.V({D:"button",da:["ytp-button","ytp-next"],O:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},L:[g.bN()]});this.expandButton=new g.V({D:"button",da:["ytp-button","ytp-expand"],U:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"});g.C(this,this.u);
g.C(this,this.F);var d=a.N();"0"===d.controlsType&&g.I(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.P=d.u;g.C(this,this.title);this.title.Y(this.element);this.suggestions=new g.V({D:"div",I:"ytp-suggestions"});g.C(this,this.suggestions);this.suggestions.Y(this.element);g.C(this,this.previous);this.previous.Y(this.element);this.previous.ia("click",this.pJ,this);var e=g.nB||g.ng?{style:"will-change: opacity"}:void 0;g.C(this,this.S);for(var f=0;16>f;f++){var h=new g.V({D:"a",I:"ytp-suggestion-link",
O:{href:"{{link}}",target:d.C,"aria-label":"{{aria_label}}"},L:[{D:"div",I:"ytp-suggestion-image"},{D:"div",I:"ytp-suggestion-overlay",O:e,L:[{D:"div",I:"ytp-suggestion-title",U:"{{title}}"},{D:"div",I:"ytp-suggestion-author",U:"{{author_and_views}}"},{D:"div",O:{"data-is-live":"{{is_live}}"},I:"ytp-suggestion-duration",U:"{{duration}}"}]}]});g.C(this,h);h.Y(this.suggestions.element);var l=h.ba("ytp-suggestion-link");g.F(l,"transitionDelay",f/20+"s");this.u.K(l,"click",g.Ua(this.qJ,f));this.B.push(h)}g.C(this,
this.next);this.next.Y(this.element);this.next.ia("click",this.oJ,this);d=new g.V({D:"button",da:["ytp-button","ytp-collapse"],O:{"aria-label":"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},L:[TDa()]});g.C(this,d);d.Y(this.element);d.ia("click",this.ZL,this);g.C(this,this.expandButton);this.expandButton.Y(this.element);this.expandButton.ia("click",this.aM,this);this.u.K(this.api,"appresize",this.La);this.u.K(this.api,"fullscreentoggled",
this.Gi);this.u.K(this.api,"presentingplayerstatechange",this.Kb);this.u.K(this.api,"videodatachange",this.Ia);this.La(g.LG(this.api).getPlayerSize());this.Ia()},L4=function(a){var b=a.M.pd()?32:16;
b=a.T/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.A;var c=a.C-a.o.length*(a.tileWidth+8);g.J(a.element,"ytp-scroll-min",0<=b);g.J(a.element,"ytp-scroll-max",b<=c)},yEa=function(a){for(var b=0;b<a.o.length;b++){var c=a.o[b].Ba(),d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.Oza.test(c.title)&&(d.ba("ytp-suggestion-title").dir="rtl");g.Oza.test(e)&&(d.ba("ytp-suggestion-author").dir="rtl");var f=void 0;c.isLivePlayback?f="\u0412 \u044d\u0444\u0438\u0440\u0435":f=c.lengthSeconds?g.FO(c.lengthSeconds):"";var h=c.ij();g.WB(a.api.N())&&(h=g.Jd(h,g.PT({},"emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.vn||null,is_live:c.isLivePlayback});d=d.ba("ytp-suggestion-image");c=c.od();d.style.backgroundImage=
c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";L4(a)},M4=function(a){var b=a.N();
g.V.call(this,{D:"a",da:["ytp-watermark","yt-uix-sessionlink"],O:{target:b.C,href:"{{url}}","aria-label":g.jJ("\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0430\u00a0$WEBSITE",{WEBSITE:g.qC(b)}),"data-sessionlink":"feature=player-watermark"},L:[p4()]});this.api=a;this.o=null;this.u=!1;this.state=g.sI(a);g.fX(a,this.element,this,76758);this.K(a,"videodatachange",this.qy);this.K(a,"videodatachange",this.Ia);this.K(a,"presentingplayerstatechange",
this.uJ);this.K(a,"appresize",this.La);b=this.state;this.state!==b&&(this.state=b);this.qy();this.Ia();this.La(g.LG(a).getPlayerSize())},N4=function(a){g.AS.call(this,a);
this.G=a;this.u=new g.ms(this);g.C(this,this.u);this.load()};g.k=q4.prototype;g.k.zP=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Ql.set(this.LA(c),[new UDa(a)])};
g.k.DA=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.LA(b);return this.Ql.has(b)?this.Ql.get(b):void 0};
g.k.CH=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.DA(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.Ql.clear()};
g.k.LA=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(r4,q4);r4.prototype.A=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.CH(c);e&&(d=e.Iz);this.zP(d+a,c)};s4.prototype.C=function(){var a=this.u.values();a=[].concat(g.la(a)).filter(function(b){return b.Ql.size});
a.length&&this.P.flush(a);WDa(a);this.A=0;this.o.enabled&&this.o.stop()};
s4.prototype.F=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.u.has(a)||this.u.set(a,new r4(a,c))};
s4.prototype.J=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.M.apply(this,[a,1].concat(g.la(c)))};
s4.prototype.M=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.H.has(a)?void 0:this.u.get(a))&&e instanceof r4&&(e.A(b,d),this.o.enabled||this.o.start(),this.A++,this.A>=this.B&&this.C())};g.Xa(ZDa,g.xf);g.Xa($Da,g.xf);var YDa=[1];g.Xa(dEa,g.xf);g.Xa(fEa,g.xf);g.Xa(gEa,g.xf);g.Xa(hEa,g.xf);g.Xa(u4,g.xf);g.Xa(w4,g.xf);g.Xa(y4,g.xf);var cEa=[3,6,4],eEa=[[1,2]],iEa=[1],v4=[[1,2,3]],x4=[[1,2,3]];VDa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.ro("enable_client_streamz_web")){a=g.p(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new dEa;c=g.Ff(c,1,b.B);for(var d=b,e=[],f=0;f<d.o.length;f++)e.push(d.o[f].IU);c=g.Ff(c,3,e||[]);d=[];e=[];f=g.p(b.Ql.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.u;for(var m=b.DA(h)||[],n=[],q=0;q<m.length;q++){var r=m[q];r=r&&r.Iz;var t=new y4;switch(l){case 3:o4(t,1,x4[0],Number(r));
break;case 2:o4(t,2,x4[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){q=l[m];n=new u4;n.o||(n.o={});r=q?q.Ne:q;n.o[2]=q;n=g.Ff(n,2,r);q=h;r=[];t=b;for(var w=[],x=0;x<t.o.length;x++)w.push(t.o[x].JU);t=w;for(w=0;w<t.length;w++){x=t[w];var z=q[w],D=new w4;switch(x){case 3:o4(D,1,v4[0],String(z));break;case 2:o4(D,2,v4[0],Number(z));break;case 1:o4(D,3,v4[0],"true"==z)}r.push(D)}SDa(n,1,r);d.push(n)}}SDa(c,4,d);d=b=new g.qf;e=g.Df(c,1);null!=e&&j4(d,1,e);e=g.Df(c,5);null!=e&&QDa(d,5,e);e=m4(c,fEa,
2);null!=e&&k4(d,2,e,lEa);e=g.Df(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)j4(d,3,e[f]);e=g.Df(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)QDa(d,6,e[f]);e=n4(c,u4,4);0<e.length&&l4(d,4,e,oEa);b=g.rf(b);b={serializedIncrementBatch:g.mf(b)};g.Ar("streamzIncremented",b)}}};var t4;g.u(z4,g.B);z4.prototype.start=function(a,b,c){this.from=a;this.o=b;this.duration=c;this.startTime=(0,g.N)();this.next()};
z4.prototype.next=function(){var a=(0,g.N)()-this.startTime;var b=this.u;a=RDa(b,a/this.duration);if(0==a)b=b.C;else if(1==a)b=b.J;else{var c=g.ae(b.C,b.F,a),d=g.ae(b.F,b.H,a);b=g.ae(b.H,b.J,a);c=g.ae(c,d,a);d=g.ae(d,b,a);b=g.ae(c,d,a)}b=g.Zd(b,0,1);this.callback((this.o-this.from)*b+this.from);1>b&&this.delay.start()};g.u(A4,g.V);g.k=A4.prototype;g.k.hide=function(){this.H=!0;g.V.prototype.hide.call(this)};
g.k.show=function(){this.H=!1;g.V.prototype.show.call(this)};
g.k.isHidden=function(){return this.H};
g.k.rJ=function(){this.scrollTo(this.A-this.C)};
g.k.sJ=function(){this.scrollTo(this.A+this.C)};
g.k.tJ=function(a,b){var c=this.o[a],d=c.bd;if(g.AX(b,this.api,this.P,d||void 0)){var e=c.Ba().videoId;c=c.getPlaylistId();g.M0(this.api.app,e,d,c,void 0,void 0)}};
g.k.resize=function(a,b){var c=this.api.N(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.o.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.bb)this.hide();else{var l;if(e){var m=l=28;this.u=16}else this.u=m=l=8;if(f){var n=6;e=14;var q=12;f=24;c=12}else n=8,e=18,q=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.u;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.u)),m=l/m-this.u,r=Math.floor(m/
d));50>m||g.SW(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.B[d],w=t.ba("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ba("ytp-suggestion-title").style.width=m+"px";t.ba("ytp-suggestion-author").style.width=m+"px";t=t.ba("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+q+4;this.F=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.C=l;this.A=0;this.suggestions.element.scrollLeft=-0;B4(this)}};
g.k.Ia=function(){var a=this,b=this.api.getVideoData(),c=this.api.N();this.P=b.Dc?!1:c.u;if(b.suggestions){var d=g.Ie(b.suggestions,function(e){return e&&!e.list});
this.o=g.Oc(d,function(e){e=g.oZ(c,e);g.C(a,e);return e})}else this.o.length=0;
pEa(this);b.Dc?this.title.update({title:g.jJ('\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 "$DNI_RELATED_CHANNEL"',{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u044d\u0442\u0438 \u0440\u043e\u043b\u0438\u043a\u0438"})};
g.k.scrollTo=function(a){a=g.Zd(a,this.C-this.o.length*(this.tileWidth+this.u),0);this.S.start(this.A,a,this.animationDelay);this.A=a;B4(this)};g.u(C4,g.FX);C4.prototype.show=function(){g.FX.prototype.show.call(this);qEa(this,g.LG(this.api).getPlayerSize())};
C4.prototype.resize=function(a){g.FX.prototype.resize.call(this,a);qEa(this,a);g.J(this.element,"related-on-error-overlay-visible",!this.o.isHidden())};
C4.prototype.u=function(a){g.FX.prototype.u.call(this,a);var b=this.api.getVideoData();if(g.R(this.api.N().experiments,"embed_parse_error_renderer_killswitch")||!b.iA&&!b.playerErrorMessageRenderer){var c;a.hi&&(b.Pq?D4(b.Pq)?c=g.tE(b.Pq):c=g.GX(g.U(b.Pq)):c=g.GX(a.hi),this.Xb(c,"subreason"))}else(a=b.iA)?rEa(this,a):b.playerErrorMessageRenderer&&rEa(this,b.playerErrorMessageRenderer)};g.u(E4,g.V);E4.prototype.af=function(){g.sI(this.api).isCued()||(this.hide(),g.UM(this.api,this.element,!1))};
E4.prototype.B=function(){this.u=!0;this.hide();g.UM(this.api,this.element,!1)};
E4.prototype.onClick=function(a){var b=this.api.N(),c;g.R(b.experiments,"embeds_impression_link_channel_thumbnail")?c=g.GC(b)+this.o.Zh:g.R(b.experiments,"embeds_impression_link_call_to_action")?c=this.api.getVideoUrl():c=this.o.ij();b=this.api.N();b=g.R(b.experiments,"embeds_impression_link_call_to_action")?"emb_imp_woyt":g.R(b.experiments,"embeds_impression_link_video_thumbnail")?"emb_imp_rv":g.R(b.experiments,"embeds_impression_link_channel_thumbnail")?"emb_imp_rc":g.R(b.experiments,"embeds_impression_link_occlusion")?
"emb_imp_rv_oc":"emb_imp_rv_ex";c=g.Jd(c,g.PT({},b));g.BX(c,this.api,a);g.gX(this.api,this.element)};
E4.prototype.show=function(){g.sI(this.api).isCued()&&!this.u&&(g.V.prototype.show.call(this),g.TM(this.api,this.element)&&g.UM(this.api,this.element,!0))};g.u(I4,g.V);I4.prototype.A=function(){var a=g.sI(this.api),b=this.api.getVideoData();g.R(this.api.N().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.T(a,2)&&!this.Pa?(this.show(),this.o.show(),a=this.api.getVideoData(),this.ka("text",a.SC),g.J(this.element,"ytp-muted-autoplay-show-end-panel",!0),g.UM(this.api,this.element,this.Pa),this.api.la("onMutedAutoplayEnds")):this.hide())};
I4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.ke();this.api.loadVideoById(a.videoId,b);g.gX(this.api,this.element);this.hide()};g.u(J4,g.V);J4.prototype.o=function(){var a=g.sI(this.api),b=this.api.getVideoData();g.R(this.api.N().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.T(a,2)?this.Pa||(g.V.prototype.show.call(this),this.A.start(),g.UM(this.api,this.element,this.Pa)):this.hide()};
J4.prototype.u=function(){g.J(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
J4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.ke();this.api.loadVideoById(a.videoId,b);g.gX(this.api,this.element)};g.u(K4,g.V);g.k=K4.prototype;g.k.hide=function(){g.yn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.V.prototype.hide.call(this)};
g.k.ZL=function(){this.H=!0;g.yn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.aM=function(){this.H=!1;g.I(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.oJ=function(){this.scrollTo(this.A-this.C)};
g.k.pJ=function(){this.scrollTo(this.A+this.C)};
g.k.qJ=function(a,b){if(1E3>(0,g.N)()-this.W)g.gp(b),document.activeElement.blur();else{var c=this.o[a],d=c.bd;if(g.AX(b,this.api,this.P,d||void 0)){var e=c.Ba().videoId;c=c.getPlaylistId();g.M0(this.api.app,e,d,c,void 0,void 0)}}};
g.k.Gi=function(){this.La(g.LG(this.api).getPlayerSize())};
g.k.Kb=function(a){if(!(g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32))){var b=!g.R(this.api.N().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.T(a.state,2048);!g.T(a.state,4)||g.T(a.state,2)||b?this.F.hide():this.o.length&&(this.H||(g.I(this.api.getRootNode(),"ytp-expand-pause-overlay"),L4(this)),this.F.show(),this.W=(0,g.N)())}};
g.k.La=function(a){var b=16/9,c=this.M.pd();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].ba("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.T=b;this.C=a;this.A=0;this.suggestions.element.scrollLeft=-0;L4(this)};
g.k.Ia=function(){var a=this,b=this.api.N(),c=this.api.getVideoData();this.P=c.Dc?!1:b.u;if(c.suggestions){var d=g.Ie(c.suggestions,function(e){return e&&!e.list});
this.o=g.Oc(d,function(e){e=g.oZ(b,e);g.C(a,e);return e})}else this.o.length=0;
yEa(this);c.Dc?this.title.update({title:g.jJ('\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 "$DNI_RELATED_CHANNEL"',{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"})};
g.k.scrollTo=function(a){a=g.Zd(a,this.C-this.o.length*(this.tileWidth+8),0);this.S.start(this.A,a,this.animationDelay);this.A=a;L4(this)};g.u(M4,g.V);g.k=M4.prototype;g.k.qy=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).Dc,c=this.api.N();a=(a.mutedAutoplay||c.Qa&&!g.T(this.state,2))&&!(b&&c.pfpChazalUi);g.MM(this,a);g.UM(this.api,this.element,a)};
g.k.uJ=function(a){a=a.state;this.state!==a&&(this.state=a);this.qy()};
g.k.Ia=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.ka("url",a);this.o||(this.o=this.ia("click",this.onClick))}else this.o&&(this.ka("url",null),this.sb(this.o),this.o=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.GO(a),!1,!0,!0);g.BX(b,this.api,a);g.gX(this.api,this.element)};
g.k.La=function(a){if((a=480>a.width)&&!this.u||!a&&this.u){var b=new g.V(p4()),c=this.ba("ytp-watermark");g.J(c,"ytp-watermark-small",a);g.Fe(c);b.Y(c);this.u=a}};g.u(N4,g.AS);g.k=N4.prototype;g.k.Sg=function(){return!1};
g.k.create=function(){var a=this.G.N(),b=g.JW(this.G);a.bb&&(this.C=new K4(this.G,b),g.C(this,this.C),g.jP(this.G,this.C.element,4));g.R(a.experiments,"embeds_enable_muted_autoplay")&&(this.o=new J4(this.G),g.C(this,this.o),g.jP(this.G,this.o.element,4),this.B=new I4(this.G),g.C(this,this.B),g.jP(this.G,this.B.element,4));if(a.Qa||this.o)this.watermark=new M4(this.G),g.C(this,this.watermark),g.jP(this.G,this.watermark.element,7);g.R(a.experiments,"embeds_impression_link")&&(this.A=new E4(this.G,b),
g.C(this,this.A),g.jP(this.G,this.A.element,7));this.u.K(this.G,"appresize",this.La);this.u.K(this.G,"presentingplayerstatechange",this.af);this.u.K(this.G,"videodatachange",this.hQ);this.u.K(this.G,"onMutedAutoplayStarts",this.cN);this.rd(g.sI(this.G));g.dX(this.player,"embed");g.R(a.experiments,"enable_cookie_reissue_iframe")&&a.Qc&&!g.vq("__Secure-3PAPISID")&&((new XDa).o.J("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe"),a=g.De("IFRAME"),a.src="/signin?go=true",a.style.display=
"none",document.body.appendChild(a))};
g.k.La=function(){var a=g.LG(this.G).getPlayerSize();this.Tc&&this.Tc.resize(a)};
g.k.af=function(a){this.rd(a.state)};
g.k.rd=function(a){g.T(a,128)?(this.Tc||(this.Tc=new C4(this.G),g.C(this,this.Tc),g.jP(this.G,this.Tc.element,4)),this.Tc.u(a.stateData),this.Tc.show(),g.I(this.G.getRootNode(),"ytp-embed-error")):this.Tc&&(this.Tc.dispose(),this.Tc=null,g.yn(this.G.getRootNode(),"ytp-embed-error"))};
g.k.cN=function(){this.G.getVideoData().mutedAutoplay&&this.o&&this.watermark&&this.watermark.Y(this.o.bottomButtons,0)};
g.k.hQ=function(){var a=this.G.getVideoData();this.watermark&&this.o&&!a.mutedAutoplay&&g.Ke(this.o.element,this.watermark.element)&&g.jP(this.G,this.watermark.element,7)};g.qX.embed=N4;})(_yt_player);
