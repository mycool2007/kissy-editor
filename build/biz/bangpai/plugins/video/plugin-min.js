KISSY.Editor.add("bangpai-video",function(k){function i(b){for(var d=0;d<l.length;d++){var e=l[d];if(e.reg.test(b))return e}}var m=KISSY,f=m.Editor,g="ke_video",o=f.Utils.getFlashUrl,j=f.Flash,h=k.htmlDataProcessor,n=h&&h.dataFilter;n&&n.addRules({elements:{object:function(b){var d=b.attributes;if(!(d.classid&&String(d.classid).toLowerCase())){for(d=0;d<b.children.length;d++)if(b.children[d].name=="embed"){if(!j.isFlashEmbed(b.children[d]))return null;if(i(b.children[d].attributes.src))return h.createFakeParserElement(b,
g,"bangpai-video",true)}return null}for(d=0;d<b.children.length;d++){var e=b.children[d];if(e.name=="param"&&e.attributes.name=="movie")if(i(e.attributes.value))return h.createFakeParserElement(b,g,"bangpai-video",true)}},embed:function(b){if(!j.isFlashEmbed(b))return null;if(i(b.attributes.src))return h.createFakeParserElement(b,g,"bangpai-video",true)}}},4);var l=[{reg:/youku\.com/i,width:480,height:400,detect:function(b){if(/\.swf$/.test(b))return b}},{reg:/tudou\.com/i,width:480,height:400,detect:function(b){if(/\.swf$/.test(b))return b}},
{reg:/ku6\.com/i,width:480,height:400,detect:function(b){if(/\.swf$/.test(b))return b}}];f.BangPaiVideo||function(){function b(){b.superclass.constructor.apply(this,arguments)}function d(a){return a._4e_name()==="img"&&!!a.hasClass(g)&&a}var e="<p style='margin-bottom:5px'>\u9700\u8981\u5206\u4eab\u7684\u89c6\u9891\u94fe\u63a5\uff1a\u652f\u6301 \u571f\u8c46\uff0c\u4f18\u9177\uff0cku6 \u89c6\u9891\u5206\u4eab</p><p><label><span style='color:#0066CC;font-weight:bold;'>\u89c6\u9891\u94fe\u63a5\uff1a </span><input class='ke-video-url' style='width:230px' value='\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf'/></label></p><p style='margin:5px 0'><label>\u5bf9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u9f50\uff1a <select class='ke-video-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select>"+
f.Utils.duplicateStr("&nbsp;",1)+"<label>\u95f4\u8ddd\uff1a </span> <input class='ke-video-margin' style='width:90px' value='5'/> px</label><p>",p=["img."+g];m.extend(b,j,{_config:function(){this._cls=g;this._type="bangpai-video";this._title="\u89c6\u9891\u5c5e\u6027";this._bodyHtml=e;this._footHtml="<button class='ke-video-ok'>\u786e\u5b9a</button> <button class='ke-video-cancel'>\u53d6\u6d88</button>";this._contentCls="ke-toolbar-flash";this._tip="\u63d2\u5165\u89c6\u9891";this._contextMenu=q;this._flashRules=
p},_initD:function(){var a=this,c=a.d;a.dUrl=c.el.one(".ke-video-url");a.dAlign=c.el.one(".ke-video-align");a.dMargin=c.el.one(".ke-video-margin");var r=c.el.one(".ke-video-ok");c=c.el.one(".ke-video-cancel");r.on("click",a._gen,a);c.on("click",function(){a.d.hide()})},_getDInfo:function(){var a=this.dUrl.val(),c=i(a);if(c){(a=c.detect(a))||alert("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");return{url:a,attrs:{height:c.height,width:c.width,align:this.dAlign.val(),style:"margin:"+(parseInt(this.dMargin.val())||
0)+"px;"}}}else alert("\u4e0d\u652f\u6301\u8be5\u94fe\u63a5\u6765\u6e90!")},_getFlashUrl:function(a){return o(a)},_updateD:function(){var a=this.editor,c=this.selectedFlash;if(c){a=a.restoreRealElement(c);this.dUrl.val(this._getFlashUrl(a));this.dAlign.val(a.attr("align"));this.dMargin.val(parseInt(a._4e_style("margin"))||0)}else{this.dUrl.val("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");this.dAlign.val("");this.dMargin.val("5")}}});j.registerBubble("bangpai-video","\u89c6\u9891\u94fe\u63a5\uff1a ",
d);f.BangPaiVideo=b;var q={"\u89c6\u9891\u5c5e\u6027":function(a){var c=a.getSelection();c=(c=c&&c.getStartElement())&&d(c);a=a._toolbars["bangpai-video"];c&&a.show(null,c)}}}();k.addPlugin(function(){new f.BangPaiVideo(k)})},{attach:false,requires:["flashsupport"]});