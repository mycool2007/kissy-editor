KISSY.Editor.add("music",function(k){var h=KISSY.Editor,i=KISSY,m=i.DOM,n=i.UA,o=i.Event,j=h.Flash,e="ke_music",f=k.htmlDataProcessor,l=f&&f.dataFilter;l&&l.addRules({elements:{object:function(a){var b=a.attributes;if(!(b.classid&&String(b.classid).toLowerCase())){for(b=0;b<a.children.length;b++)if(a.children[b].name=="embed"){if(!j.isFlashEmbed(a.children[b]))break;if(a.children[b].attributes.src.indexOf("niftyplayer.swf")!=-1)return f.createFakeParserElement(a,e,"music",true)}return null}for(b=
0;b<a.children.length;b++){var g=a.children[b];if(g.name=="param"&&g.attributes.name=="movie")if(g.attributes.value.indexOf("niftyplayer.swf")!=-1)return f.createFakeParserElement(a,e,"music",true)}},embed:function(a){if(!j.isFlashEmbed(a))return null;if(a.attributes.src.indexOf("niftyplayer.swf")!=-1)return f.createFakeParserElement(a,e,"music",true)}}},4);h.MusicInserter||function(){function a(c){a.superclass.constructor.apply(this,arguments);c.cfg.disableObjectResizing||o.on(c.document.body,n.ie?
"resizestart":"resize",function(d){m.hasClass(d.target,e)&&d.preventDefault()})}function b(c){return c._4e_name()==="img"&&!!c.hasClass(e)&&c}var g=["img."+e];i.extend(a,j,{_config:function(){this._cls=e;this._type="music";this._contentCls="ke-toolbar-music";this._tip="\u63d2\u5165\u97f3\u4e50";this._contextMenu=p;this._flashRules=g}});j.registerBubble("music","\u97f3\u4e50\u7f51\u5740\uff1a ",b);h.MusicInserter=a;var p={"\u97f3\u4e50\u5c5e\u6027":function(c){var d=c.getSelection();d=(d=d&&d.getStartElement())&&b(d);c=c._toolbars.music;d&&c.show(null,d)}}}();k.addPlugin(function(){new h.MusicInserter(k)})});
