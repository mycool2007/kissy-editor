KISSY.Editor.add("flash",function(k){var e=KISSY.Editor,j=KISSY,h=j.DOM,q=j.Event,r=e.ContextMenu,m=j.Node,s=e.NODE,t=e.TripleButton,u=e.SimpleOverlay,v=/\.swf(?:$|\?)/i,i=e.HtmlDataProcessor,w="niftyplayer.swf",n=i&&i.dataFilter,x=["img.ke_flash"];e.Flash||function(){function f(a){a=a.attributes;return a.type=="application/x-shockwave-flash"||v.test(a.src||"")}function d(a){return a.indexOf(w)!=-1}function o(a){this.editor=a;a._toolbars=a._toolbars||{};a._toolbars.flash=this;this._init()}n&&n.addRules({elements:{object:function(a){var b=
a.attributes,c="ke_flash",g="flash";if(!(b.classid&&String(b.classid).toLowerCase())){for(b=0;b<a.children.length;b++)if(a.children[b].name=="embed"){if(!f(a.children[b]))return null;if(d(a.children[b].attributes.src)){c="ke_music";g="music"}return i.createFakeParserElement(a,c,g,true)}return null}for(b=0;b<a.children.length;b++){var l=a.children[b];if(l.name=="param"&&l.attributes.name=="movie")if(d(l.attributes.value)){c="ke_music";g="music";break}}return i.createFakeParserElement(a,c,g,true)},
embed:function(a){if(!f(a))return null;var b="ke_flash",c="flash";if(d(a.attributes.src)){b="ke_music";c="music"}return i.createFakeParserElement(a,b,c,true)}}},5);j.augment(o,{_init:function(){var a=this.editor,b={};this.el=new t({container:a.toolBarDiv,contentCls:"ke-toolbar-flash",title:"Flash"});this.el.on("click",this._showConfig,this);q.on(a.document,"dblclick",this._dbclick,this);for(var c in p)(function(g){b[g]=function(){a.fire("save");a.focus();p[g](a);a.fire("save")}})(c);r.register(a.document,
{rules:x,width:"120px",funcs:b});e.Utils.lazyRun(this,"_prepareShow","_realShow")},_dbclick:function(a){var b=new m(a.target);if(b._4e_name()==="img"&&b.hasClass("ke_flash")){this.selectedFlash=b;this._showConfig();a.halt()}},_prepareShow:function(){var a=this;a.d=new u({title:"\u7f16\u8f91flash",width:"350px",mask:true});a.d.on("hide",function(){a.selectedFlash=null;k.focus()});a.d.body.html("<div><p><label>\u5730\u5740\uff1a<input class='ke-flash-url' style='width:280px' /></label></p><p style='margin:5px 0'><label>\u5bbd\u5ea6\uff1a<input class='ke-flash-width' style='width:110px' /></label>&nbsp;&nbsp;<label>\u9ad8\u5ea6\uff1a<input class='ke-flash-height' style='width:110px' /></label></p>");
a.d.foot.html("<button class='ke-flash-ok'>\u786e\u5b9a</button> <button class='ke-flash-cancel'>\u53d6\u6d88</button></div>");a._initD()},_realShow:function(){this.d.show()},_showConfig:function(){var a=this.editor,b=this.selectedFlash;this._prepareShow();if(b){a=a.restoreRealElement(b);a.attr("width")&&this.dWidth.val(parseInt(a.attr("width")));a.attr("height")&&this.dHeight.val(parseInt(a.attr("height")));if(a._4e_name()=="object"){a=a[0].childNodes;for(b=0;b<a.length;b++)if(a[b].nodeType==s.NODE_ELEMENT)if((h.attr(a[b],
"name")||"").toLowerCase()=="movie")this.dUrl.val(h.attr(a[b],"value"));else if(h._4e_name(a[b])=="embed")this.dUrl.val(h.attr(a[b],"src"));else h._4e_name(a[b])=="object"&&this.dUrl.val(h.attr(a[b],"data"))}else a._4e_name()=="embed"&&this.dUrl.val(a.attr("src"))}},_initD:function(){var a=this,b=a.d;a.dHeight=b.el.one(".ke-flash-height");a.dWidth=b.el.one(".ke-flash-width");a.dUrl=b.el.one(".ke-flash-url");var c=b.el.one(".ke-flash-ok");b=b.el.one(".ke-flash-cancel");c.on("click",a._gen,a);b.on("click",
function(){a.d.hide()})},_gen:function(){var a=this.editor,b=this.dUrl.val();if(b){b="<object "+(parseInt(this.dWidth.val())?" width='"+parseInt(this.dWidth.val())+"' ":" ")+(parseInt(this.dHeight.val())?" height='"+parseInt(this.dHeight.val())+"' ":" ")+' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="quality" value="high" /><param name="movie" value="'+b+'" /><embed '+(parseInt(this.dWidth.val())?
" width='"+parseInt(this.dWidth.val())+"' ":" ")+(parseInt(this.dHeight.val())?" height='"+parseInt(this.dHeight.val())+"' ":" ")+'pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high"  src="'+b+'"  type="application/x-shockwave-flash"/></object>';var c=new m(b,null,a.document);b=a.createFakeElement?a.createFakeElement(c,"ke_flash","flash",true,b):c;a.insertElement(b);this.d.hide()}}});e.Flash=o}();var p={"\u7f16\u8f91Flash":function(f){var d=f.getSelection();if(d=(d=d&&d.getStartElement())&&
d._4e_ascendant("img",true))if(d.hasClass("ke_flash")){f=f._toolbars.flash;f.selectedFlash=d;f._showConfig()}}};k.addPlugin(function(){new e.Flash(k)})});