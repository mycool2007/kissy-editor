KISSY.add("editor",function(c,l){function g(d,n){var h=this;if(!(h instanceof g))return new g(d,n);if(c.isString(d))d=c.one(d);d[0]||(d=new Node(d));h.cfg=n||{pluginConfig:{}};c.app(h,c.EventTarget);h.use=function(s){c.use.call(h,s,function(){h.on("dataReady",function(){h.setData(d.val())})},{order:true,global:g})};h.init(d);return l}function k(d){if(!o)return"build/"+d.replace(/\.(js|css)/i,"-min.$1");if(o==="dev")return d;return"build/"+d}c.app(g,c.EventTarget);g.Config.base=c.Config.base+"editor/";
var o=c.Config.debug,j={htmlparser:{attach:false,path:k("plugins/htmldataprocessor/htmlparser/htmlparser.js")}},m=["utils","focusmanager","definition","dtd","dom","elementpath","walker","range","domiterator","selection","styles"],p=["clipboard",{name:"color"},{name:"elementpaths"},"enterkey","fakeobjects",{name:"flash",requires:["contextmenu","fakeobjects","overlay"]},{name:"font",requires:["select"]},"format",{name:"htmldataprocessor",requires:["htmlparser-text"]},{name:"image",requires:["overlay"]},
"indent","justify",{name:"link",requires:["bubbleview"]},"list","maximize","music","preview","removeformat",{name:"smiley"},"sourcearea",{name:"table",requires:["overlay","contextmenu"]},{name:"templates",requires:["overlay"]},"undo"],q=[{name:"htmlparser-basicwriter",requires:["htmlparser"]},{name:"htmlparser-element",requires:["htmlparser-fragment"]},{name:"htmlparser-filter",requires:["htmlparser-element"]},{name:"htmlparser-fragment",requires:["htmlparser-htmlwriter"]},{name:"htmlparser-htmlwriter",
requires:["htmlparser-basicwriter"]},{name:"htmlparser-text",requires:["htmlparser-comment"]},{name:"htmlparser-comment",requires:["htmlparser-filter"]}],r=[{name:"button"},{name:"overlay"},{name:"contextmenu",requires:["overlay"]},{name:"bubbleview",requires:["overlay"]},{name:"select",requires:["overlay"]}],b,i,a,e,f;b=0;for(i=r.length;b<i;b++){e=a=r[b];f=l;if(!c.isString(a)){f=a.requires;e=a.name}j[e]={attach:false,requires:f,path:k("ui/"+e+".js"),csspath:a.useCss?k("ui/"+e+".css"):""}}b=0;for(i=
p.length;b<i;b++){e=a=p[b];f=["button"];if(!c.isString(a)){a.requires&&(f=f.concat(a.requires));e=a.name}j[e]={attach:false,requires:f,csspath:a.useCss?k("plugins/"+e+"/plugin.css"):l,path:k("plugins/"+e+"/plugin.js")}}b=0;for(i=q.length;b<i;b++){a=q[b];f=l;if(!c.isString(a)){f=a.requires;a=a.name}j[a]={attach:false,requires:f,path:k("plugins/htmldataprocessor/htmlparser/"+a.substring(11)+".js")}}g.add(j);j={};b=0;for(i=m.length;b<i;b++){a=m[b];j[a]={host:"editor",requires:b>0?m[b-1]:[]}}g.add(j);
c.Editor=g});
