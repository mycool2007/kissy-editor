KISSY.add("editor",function(c,t){function j(e,m){function y(f){for(var n=j.Env.mods,h=0;h<f.length;h++){for(var g=f[h],k=false,o=0;o<h;o++)if(g==f[o]){k=true;break}o=n[g];if(k&&o){k=c.clone(o);g=g+"_"+h;k.name=g;f[h]=g;n[g]||(n[g]=k)}}}var d=this;if(!(d instanceof j))return new j(e,m);if(c.isString(e))e=c.one(e);e=z._4e_wrap(e);m=m||{};m.pluginConfig=m.pluginConfig||{};d.cfg=m;c.app(d,c.EventTarget);var u=["htmldataprocessor","enterkey","clipboard"],v=false;d.use=function(f,n){f=f.split(",");y(f);
for(var h=0;h<u.length;h++){var g=u[h];c.inArray(g,f)||f.unshift(g)}c.use.call(d,f.join(","),function(){d.ready(function(){n&&n.call(d);if(!v){d.setData(e.val());if(m.focus)d.focus();else{var k=d.getSelection();k&&k.removeAllRanges()}d.fire("save");v=true}})},{order:true,global:j});return d};d.init(e)}function p(e){if(!w)return e.replace(/\.(js|css)/i,"-min.$1");if(w==="dev")return"../src/"+e;return e}var z=c.DOM;c.app(j,c.EventTarget);j.Config.base=c.Config.base+"editor/";var w=c.Config.debug,q=
{htmlparser:{attach:false,path:p("plugins/htmldataprocessor/htmlparser/htmlparser.js?t=2010-10-25 21:09:11")}},s=["utils","focusmanager","definition","dtd","dom","elementpath","walker","range","domiterator","selection","styles"],i=["separator","sourcearea/support","tabs","flashbridge","flashutils","clipboard",{name:"colorsupport",requires:["overlay"]},{name:"forecolor",requires:["colorsupport"]},{name:"bgcolor",requires:["colorsupport"]},{name:"elementpaths"},"enterkey",{name:"pagebreak",requires:["fakeobjects"]},
{name:"fakeobjects",requires:["htmldataprocessor"]},{name:"draft",requires:["localStorage"]},{name:"flash",requires:["flash/support"]},{name:"flash/dialog",requires:["flash"]},{name:"flash/support",requires:["flashutils","contextmenu","fakeobjects","overlay","bubbleview"]},{name:"font",requires:["select"]},"format",{name:"htmldataprocessor",requires:["htmlparser-text"]},{name:"image",requires:["contextmenu","bubbleview"]},{name:"image/dialog",requires:["overlay","tabs"]},"indent","justify",{name:"link",
requires:["bubbleview"]},"list","maximize",{name:"music",requires:["flash/support"]},{name:"music/dialog",requires:["flash/dialog"]},"preview","removeformat",{name:"smiley"},{name:"sourcearea",requires:["sourcearea/support"]},{name:"table",requires:["overlay","contextmenu"]},{name:"templates",requires:["overlay"]},"undo",{name:"resize",requires:["dd"]}],x=[{name:"htmlparser-basicwriter",requires:["htmlparser"]},{name:"htmlparser-element",requires:["htmlparser-fragment"]},{name:"htmlparser-filter",
requires:["htmlparser-element"]},{name:"htmlparser-fragment",requires:["htmlparser-htmlwriter"]},{name:"htmlparser-htmlwriter",requires:["htmlparser-basicwriter"]},{name:"htmlparser-text",requires:["htmlparser-comment"]},{name:"htmlparser-comment",requires:["htmlparser-filter"]}],b,l,a,r;b=0;for(l=i.length;b<l;b++){a=i[b];if(c.isString(a))a=i[b]={name:a};a.requires=a.requires||[];a.requires=a.requires.concat(["button"])}i=[{name:"localStorage",requires:["flashutils","flashbridge"]},{name:"button"},
{name:"dd"},{name:"progressbar"},{name:"overlay",requires:["dd"]},{name:"contextmenu",requires:["overlay"]},{name:"bubbleview",requires:["overlay"]},{name:"select",requires:["overlay"]}].concat(i);b=0;for(l=i.length;b<l;b++){a=i[b];r=a.name;q[r]={attach:false,charset:"utf-8",requires:a.requires,csspath:a.useCss?p("plugins/"+r+"/plugin.css?t=2010-10-25 21:09:11"):t,path:p("plugins/"+r+"/plugin.js?t=2010-10-25 21:09:11")}}b=0;for(l=x.length;b<l;b++){a=x[b];i=t;if(!c.isString(a)){i=a.requires;a=a.name}q[a]={attach:false,
charset:"utf-8",requires:i,path:p("plugins/htmldataprocessor/htmlparser/"+a.substring(11)+".js?t=2010-10-25 21:09:11")}}b=0;for(l=s.length;b<l;b++){a=s[b];q[a]={host:"editor",requires:b>0?s[b-1]:[]}}j.add(q);c.Editor=j});
