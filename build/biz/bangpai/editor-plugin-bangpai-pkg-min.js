KISSY.Editor.add("bangpai-music",function(t){function q(d){return/xiami\.com/i.test(d)}var n=KISSY,k=n.Editor,r=n.DOM,y=n.Node,u=k.Config.base+"assets/loading.gif",m=k.Flash,o="ke_xiami",s=t.htmlDataProcessor,e=s&&s.dataFilter;e&&e.addRules({elements:{object:function(d){var g=d.attributes,v=d.attributes.title,c;if(!(g.classid&&String(g.classid).toLowerCase())){for(g=0;g<d.children.length;g++){c=d.children[g];if(c.name=="embed"){if(!m.isFlashEmbed(c))return null;if(q(c.attributes.src))return s.createFakeParserElement(d,
o,"bangpai-music",true,{title:v})}}return null}for(g=0;g<d.children.length;g++){c=d.children[g];if(c.name=="param"&&c.attributes.name=="movie")if(q(c.attributes.value))return s.createFakeParserElement(d,o,"bangpai-music",true,{title:v})}},embed:function(d){if(!m.isFlashEmbed(d))return null;if(q(d.attributes.src))return s.createFakeParserElement(d,o,"bangpai-music",true,{title:d.attributes.title})}}},4);k.BangPaiMusic||function(){function d(b,a){if(b.length>a)b=b.substring(0,a)+"...";return b}function g(){g.superclass.constructor.apply(this,
arguments)}function v(b){return z.replace(/\${([^}]+)}/g,function(a,h){return b[h]})}function c(b,a,h){return"<a class='ke-xiami-page-item"+(b==a?" ke-xiami-curpage":"")+"' data-value='"+a+"' href='#'>"+(h||a)+"</a>"}function f(b){return decodeURIComponent(b.song_name)+" - "+decodeURIComponent(b.artist_name)}function x(b){return b._4e_ascendant(function(a){return a._4e_name()==="img"&&!!a.hasClass(o)},true)}r.addStyleSheet(".ke-xiami-list {margin-top:10px;}.ke-xiami-list li{border:1px dotted gray;border-width:0 0 1px 0;overflow:hidden;zoom:1;padding:2px;}\n.ke-xiami-list .ke-xiami-add {float:right;}\n.ke-xiami-list .ke-xiami-song {float:left;}\n.ke-xiami-paging a{display: inline-block; zoom: 1;  *display: inline; border:1px solid gray;padding:0 5px;margin:0 2px;}\n.ke-xiami-paging a:hover,.ke-xiami-paging a.ke-xiami-curpage {background-color:orange;}\n.ke-xiami-paging {text-align:center;margin-top:10px;}\n",
"BangPaiMusic");window.bangpai_xiami=function(b){var a=bangpai_xiami.instance;b.page=bangpai_xiami.page;a._listSearch(b)};var z="http://www.xiami.com/app/nineteen/search/key/${key}/page/${page}?random=${random}&callback=bangpai_xiami";n.extend(g,m,{_config:function(){this._cls=o;this._type="bangpai-music";this._title="\u641c\u7d22\u97f3\u4e50";this._bodyHtml="<form action='#' class='ke-xiami-form'><p><input class='ke-xiami-url' style='width:300px' value='\u8f93\u5165\u60f3\u8981\u6dfb\u52a0\u7684\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d'/> &nbsp;  <input type='submit' style='vertical-align:middle;' value='\u641c \u7d22 ' /></p><p style='margin:5px 0'><label>\u5bf9 \u9f50\uff1a <select class='ke-xiami-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></p></form><div class='ke-xiami-list'></div>";
this._footHtml="";this._contentCls="ke-toolbar-music";this._tip="\u63d2\u5165\u867e\u7c73\u97f3\u4e50";this._contextMenu=A;this._flashRules=["img."+o];this._config_dwidth="400px"},_updateTip:function(b,a){var h=this.editor.restoreRealElement(a);b.html(a.attr("title"));b.attr("href",this._getFlashUrl(h))},_initD:function(){function b(j){var p={key:encodeURIComponent(i.val()),page:j,random:(new Date).valueOf()};p=v(p);bangpai_xiami.instance=a;bangpai_xiami.page=j;a._xiamia_list.html("<img style='display:block;width:108px;margin:5px auto 0 auto;'src='"+
u+"'/>");n.getScript(p)}var a=this,h=a.d,l=h.el.one(".ke-xiami-form"),i=h.el.one(".ke-xiami-url");a.dAlign=h.el.one(".ke-xiami-align");a._xiami_input=i;a._xiamia_list=h.el.one(".ke-xiami-list");l.on("submit",function(j){b(1);j.halt()},a);a._xiamia_list.on("click",function(j){j.preventDefault();var p=new y(j.target);j=p._4e_ascendant(function(w){return a._xiamia_list._4e_contains(w)&&w.hasClass("ke-xiami-add")},true);p=p._4e_ascendant(function(w){return a._xiamia_list._4e_contains(w)&&w.hasClass("ke-xiami-page-item")},
true);if(j){a._dinfo={url:"http://www.xiami.com/widget/"+j.attr("data-value")+"/singlePlayer.swf",attrs:{title:j.attr("title"),align:a.dAlign.val()}};a._gen()}else p&&b(parseInt(p.attr("data-value")))})},_listSearch:function(b){var a,h=b.results,l;if(b.key==this._xiami_input.val()){if(h&&h.length){l="<ul>";for(a=0;a<h.length;a++){var i=h[a],j=f(i);l+="<li title='"+j+"'><span class='ke-xiami-song'>"+d(j,35)+"</span><a href='#' title='"+j+"' class='ke-xiami-add' data-value='"+(i.album_id+"_"+i.song_id)+
"'>\u9009\u62e9</a></li>"}l+="</ul>";h=b.page;b=Math.floor(b.total/8);a=h-3;i=h+3;if(b>1){if(a<=2){i=Math.min(2-a+i,b-1);a=2}i=Math.min(i,b-1);if(i==b-1)a=Math.max(2,i-6);l+="<p class='ke-xiami-paging'>"+c(h,1,"1"+(a!=2?"...":""));for(a=a;a<=i;a++)l+=c(h,a);if(i!=b)l+=c(h,b,(i!=b-1?"...":"")+b);l+="</p>"}}else l="<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u6ca1\u6709\u627e\u5230\u7ed3\u679c\uff01</p>";this._xiamia_list.html(l)}},_updateD:function(){var b=this.selectedFlash;
if(b){this._xiami_input.val(b.attr("title"));this.dAlign.val(b.attr("align"))}else{this._xiami_input.val("\u8f93\u5165\u60f3\u8981\u6dfb\u52a0\u7684\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d");this.dAlign.val("")}this._xiamia_list.html("")},_getDInfo:function(){n.mix(this._dinfo.attrs,{width:165,height:37});return this._dinfo}});var A={"\u867e\u7c73\u5c5e\u6027":function(b){var a=b.getSelection();a=a&&a.getStartElement();a=x(a);b=b._toolbars["bangpai-music"];a&&b.show(null,
a)}};m.registerBubble("bangpai-music","\u867e\u7c73\u97f3\u4e50\uff1a ",x);k.BangPaiMusic=g}();t.addPlugin(function(){new k.BangPaiMusic(t)})},{attach:false,requires:["flashsupport"]});
KISSY.Editor.add("bangpai-music",function(t){function q(d){return/xiami\.com/i.test(d)}var n=KISSY,k=n.Editor,r=n.DOM,y=n.Node,u=k.Config.base+"assets/loading.gif",m=k.Flash,o="ke_xiami",s=t.htmlDataProcessor,e=s&&s.dataFilter;e&&e.addRules({elements:{object:function(d){var g=d.attributes,v=d.attributes.title,c;if(!(g.classid&&String(g.classid).toLowerCase())){for(g=0;g<d.children.length;g++){c=d.children[g];if(c.name=="embed"){if(!m.isFlashEmbed(c))return null;if(q(c.attributes.src))return s.createFakeParserElement(d,
o,"bangpai-music",true,{title:v})}}return null}for(g=0;g<d.children.length;g++){c=d.children[g];if(c.name=="param"&&c.attributes.name=="movie")if(q(c.attributes.value))return s.createFakeParserElement(d,o,"bangpai-music",true,{title:v})}},embed:function(d){if(!m.isFlashEmbed(d))return null;if(q(d.attributes.src))return s.createFakeParserElement(d,o,"bangpai-music",true,{title:d.attributes.title})}}},4);k.BangPaiMusic||function(){function d(b,a){if(b.length>a)b=b.substring(0,a)+"...";return b}function g(){g.superclass.constructor.apply(this,
arguments)}function v(b){return z.replace(/\${([^}]+)}/g,function(a,h){return b[h]})}function c(b,a,h){return"<a class='ke-xiami-page-item"+(b==a?" ke-xiami-curpage":"")+"' data-value='"+a+"' href='#'>"+(h||a)+"</a>"}function f(b){return decodeURIComponent(b.song_name)+" - "+decodeURIComponent(b.artist_name)}function x(b){return b._4e_ascendant(function(a){return a._4e_name()==="img"&&!!a.hasClass(o)},true)}r.addStyleSheet(".ke-xiami-list {margin-top:10px;}.ke-xiami-list li{border:1px dotted gray;border-width:0 0 1px 0;overflow:hidden;zoom:1;padding:2px;}\n.ke-xiami-list .ke-xiami-add {float:right;}\n.ke-xiami-list .ke-xiami-song {float:left;}\n.ke-xiami-paging a{display: inline-block; zoom: 1;  *display: inline; border:1px solid gray;padding:0 5px;margin:0 2px;}\n.ke-xiami-paging a:hover,.ke-xiami-paging a.ke-xiami-curpage {background-color:orange;}\n.ke-xiami-paging {text-align:center;margin-top:10px;}\n",
"BangPaiMusic");window.bangpai_xiami=function(b){var a=bangpai_xiami.instance;b.page=bangpai_xiami.page;a._listSearch(b)};var z="http://www.xiami.com/app/nineteen/search/key/${key}/page/${page}?random=${random}&callback=bangpai_xiami";n.extend(g,m,{_config:function(){this._cls=o;this._type="bangpai-music";this._title="\u641c\u7d22\u97f3\u4e50";this._bodyHtml="<form action='#' class='ke-xiami-form'><p><input class='ke-xiami-url' style='width:300px' value='\u8f93\u5165\u60f3\u8981\u6dfb\u52a0\u7684\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d'/> &nbsp;  <input class='ke-xiami-submit' type='submit' style='vertical-align:middle;' value='\u641c \u7d22 ' /></p><p style='margin:5px 0'><label>\u5bf9 \u9f50\uff1a <select class='ke-xiami-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></p></form><div class='ke-xiami-list'></div>";
this._footHtml="";this._contentCls="ke-toolbar-music";this._tip="\u63d2\u5165\u867e\u7c73\u97f3\u4e50";this._contextMenu=A;this._flashRules=["img."+o];this._config_dwidth="400px"},_updateTip:function(b,a){var h=this.editor.restoreRealElement(a);b.html(a.attr("title"));b.attr("href",this._getFlashUrl(h))},_initD:function(){function b(j){a._xiami_submit[0].disabled=true;var p={key:encodeURIComponent(i.val()),page:j,random:(new Date).valueOf()};p=v(p);bangpai_xiami.instance=a;bangpai_xiami.page=j;a._xiamia_list.html("<img style='display:block;width:108px;margin:5px auto 0 auto;'src='"+
u+"'/>");n.getScript(p)}var a=this,h=a.d,l=h.el.one(".ke-xiami-form"),i=h.el.one(".ke-xiami-url");a.dAlign=h.el.one(".ke-xiami-align");a._xiami_input=i;a._xiamia_list=h.el.one(".ke-xiami-list");a._xiami_submit=h.el.one(".ke-xiami-submit");l.on("submit",function(j){b(1);j.halt()},a);a._xiamia_list.on("click",function(j){j.preventDefault();var p=new y(j.target);j=p._4e_ascendant(function(w){return a._xiamia_list._4e_contains(w)&&w.hasClass("ke-xiami-add")},true);p=p._4e_ascendant(function(w){return a._xiamia_list._4e_contains(w)&&
w.hasClass("ke-xiami-page-item")},true);if(j){a._dinfo={url:"http://www.xiami.com/widget/"+j.attr("data-value")+"/singlePlayer.swf",attrs:{title:j.attr("title"),align:a.dAlign.val()}};a._gen()}else p&&b(parseInt(p.attr("data-value")))})},_listSearch:function(b){var a,h=b.results,l;if(b.key==this._xiami_input.val()){this._xiami_submit[0].disabled=false;if(h&&h.length){l="<ul>";for(a=0;a<h.length;a++){var i=h[a],j=f(i);l+="<li title='"+j+"'><span class='ke-xiami-song'>"+d(j,35)+"</span><a href='#' title='"+
j+"' class='ke-xiami-add' data-value='"+(i.album_id+"_"+i.song_id)+"'>\u9009\u62e9</a></li>"}l+="</ul>";h=b.page;b=Math.floor(b.total/8);a=h-3;i=h+3;if(b>1){if(a<=2){i=Math.min(2-a+i,b-1);a=2}i=Math.min(i,b-1);if(i==b-1)a=Math.max(2,i-6);l+="<p class='ke-xiami-paging'>"+c(h,1,"1"+(a!=2?"...":""));for(a=a;a<=i;a++)l+=c(h,a);if(i!=b)l+=c(h,b,(i!=b-1?"...":"")+b);l+="</p>"}}else l="<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u6ca1\u6709\u627e\u5230\u7ed3\u679c\uff01</p>";
this._xiamia_list.html(l)}},_updateD:function(){var b=this.selectedFlash;if(b){this._xiami_input.val(b.attr("title"));this.dAlign.val(b.attr("align"))}else{this._xiami_input.val("\u8f93\u5165\u60f3\u8981\u6dfb\u52a0\u7684\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d");this.dAlign.val("")}this._xiami_submit[0].disabled=false;this._xiamia_list.html("")},_getDInfo:function(){n.mix(this._dinfo.attrs,{width:257,height:33});return this._dinfo}});var A={"\u867e\u7c73\u5c5e\u6027":function(b){var a=
b.getSelection();a=a&&a.getStartElement();a=x(a);b=b._toolbars["bangpai-music"];a&&b.show(null,a)}};m.registerBubble("bangpai-music","\u867e\u7c73\u97f3\u4e50\uff1a ",x);k.BangPaiMusic=g}();t.addPlugin(function(){new k.BangPaiMusic(t)})},{attach:false,requires:["flashsupport"]});
KISSY.Editor.add("bangpai-video",function(t){function q(e){for(var d=0;d<s.length;d++){var g=s[d];if(g.reg.test(e))return g}}var n=KISSY,k=n.Editor,r="ke_video",y=k.Utils.getFlashUrl,u=k.Flash,m=t.htmlDataProcessor,o=m&&m.dataFilter;o&&o.addRules({elements:{object:function(e){var d=e.attributes;if(!(d.classid&&String(d.classid).toLowerCase())){for(d=0;d<e.children.length;d++)if(e.children[d].name=="embed"){if(!u.isFlashEmbed(e.children[d]))return null;if(q(e.children[d].attributes.src))return m.createFakeParserElement(e,
r,"bangpai-video",true)}return null}for(d=0;d<e.children.length;d++){var g=e.children[d];if(g.name=="param"&&g.attributes.name=="movie")if(q(g.attributes.value))return m.createFakeParserElement(e,r,"bangpai-video",true)}},embed:function(e){if(!u.isFlashEmbed(e))return null;if(q(e.attributes.src))return m.createFakeParserElement(e,r,"bangpai-video",true)}}},4);var s=[{reg:/youku\.com/i,width:480,height:400,detect:function(e){if(/\.swf$/.test(e))return e}},{reg:/tudou\.com/i,width:480,height:400,detect:function(e){if(/\.swf$/.test(e))return e}},
{reg:/ku6\.com/i,width:480,height:400,detect:function(e){if(/\.swf$/.test(e))return e}}];k.BangPaiVideo||function(){function e(){e.superclass.constructor.apply(this,arguments)}function d(c){return c._4e_ascendant(function(f){return f._4e_name()==="img"&&!!f.hasClass(r)},true)}var g=["img."+r];n.extend(e,u,{_config:function(){this._cls=r;this._type="bangpai-video";this._title="\u89c6\u9891\u5c5e\u6027";this._bodyHtml="<p style='margin-bottom:5px'>\u9700\u8981\u5206\u4eab\u7684\u89c6\u9891\u94fe\u63a5\uff1a\u652f\u6301 \u571f\u8c46\uff0c\u4f18\u9177\uff0cku6 \u89c6\u9891\u5206\u4eab</p><p><label><span style='color:#0066CC;font-weight:bold;'>\u89c6\u9891\u94fe\u63a5\uff1a </span><input class='ke-video-url' style='width:230px' value='\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf'/></label></p><p style='margin:5px 0'><label>\u5bf9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u9f50\uff1a <select class='ke-video-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select><p>";
this._footHtml="<button class='ke-video-ok'>\u786e\u5b9a</button> <button class='ke-video-cancel'>\u53d6\u6d88</button>";this._contentCls="ke-toolbar-flash";this._tip="\u63d2\u5165\u89c6\u9891";this._contextMenu=v;this._flashRules=g},_initD:function(){var c=this,f=c.d;c.dUrl=f.el.one(".ke-video-url");c.dAlign=f.el.one(".ke-video-align");var x=f.el.one(".ke-video-ok");f=f.el.one(".ke-video-cancel");x.on("click",c._gen,c);f.on("click",function(){c.d.hide()})},_getDInfo:function(){var c=this.dUrl.val(),
f=q(c);if(f){(c=f.detect(c))||alert("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");return{url:c,attrs:{height:f.height,width:f.width,align:this.dAlign.val()}}}else alert("\u4e0d\u652f\u6301\u8be5\u94fe\u63a5\u6765\u6e90!")},_getFlashUrl:function(c){return y(c)},_updateD:function(){var c=this.editor,f=this.selectedFlash;if(f){c=c.restoreRealElement(f);this.dUrl.val(this._getFlashUrl(c));this.dAlign.val(c.attr("align"))}else{this.dUrl.val("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");
this.dAlign.val("")}}});u.registerBubble("bangpai-video","\u89c6\u9891\u94fe\u63a5\uff1a ",d);k.BangPaiVideo=e;var v={"\u89c6\u9891\u5c5e\u6027":function(c){var f=c.getSelection();f=(f=f&&f.getStartElement())&&d(f);c=c._toolbars["bangpai-video"];f&&c.show(null,f)}}}();t.addPlugin(function(){new k.BangPaiVideo(t)})},{attach:false,requires:["flashsupport"]});
KISSY.Editor.add("bangpai-video",function(t){function q(e){for(var d=0;d<s.length;d++){var g=s[d];if(g.reg.test(e))return g}}var n=KISSY,k=n.Editor,r="ke_video",y=k.Utils.getFlashUrl,u=k.Flash,m=t.htmlDataProcessor,o=m&&m.dataFilter;o&&o.addRules({elements:{object:function(e){var d=e.attributes;if(!(d.classid&&String(d.classid).toLowerCase())){for(d=0;d<e.children.length;d++)if(e.children[d].name=="embed"){if(!u.isFlashEmbed(e.children[d]))return null;if(q(e.children[d].attributes.src))return m.createFakeParserElement(e,
r,"bangpai-video",true)}return null}for(d=0;d<e.children.length;d++){var g=e.children[d];if(g.name=="param"&&g.attributes.name=="movie")if(q(g.attributes.value))return m.createFakeParserElement(e,r,"bangpai-video",true)}},embed:function(e){if(!u.isFlashEmbed(e))return null;if(q(e.attributes.src))return m.createFakeParserElement(e,r,"bangpai-video",true)}}},4);var s=[{reg:/youku\.com/i,width:480,height:400,detect:function(e){if(/\.swf$/.test(e))return e}},{reg:/tudou\.com/i,width:480,height:400,detect:function(e){if(/\.swf$/.test(e))return e}},
{reg:/ku6\.com/i,width:480,height:400,detect:function(e){if(/\.swf$/.test(e))return e}}];k.BangPaiVideo||function(){function e(){e.superclass.constructor.apply(this,arguments)}function d(c){return c._4e_ascendant(function(f){return f._4e_name()==="img"&&!!f.hasClass(r)},true)}var g=["img."+r];n.extend(e,u,{_config:function(){this._cls=r;this._type="bangpai-video";this._title="\u89c6\u9891\u5c5e\u6027";this._bodyHtml="<p style='margin-bottom:5px'>\u9700\u8981\u5206\u4eab\u7684\u89c6\u9891\u94fe\u63a5\uff1a\u652f\u6301 \u571f\u8c46\uff0c\u4f18\u9177\uff0cku6 \u89c6\u9891\u5206\u4eab</p><p><label><span style='color:#0066CC;font-weight:bold;'>\u89c6\u9891\u94fe\u63a5\uff1a </span><input class='ke-video-url' style='width:230px' value='\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf'/></label></p><p style='margin:5px 0'><label>\u5bf9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u9f50\uff1a <select class='ke-video-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select><p>";
this._footHtml="<button class='ke-video-ok'>\u786e\u5b9a</button> <button class='ke-video-cancel'>\u53d6\u6d88</button>";this._contentCls="ke-toolbar-flash";this._tip="\u63d2\u5165\u89c6\u9891";this._contextMenu=v;this._flashRules=g},_initD:function(){var c=this,f=c.d;c.dUrl=f.el.one(".ke-video-url");c.dAlign=f.el.one(".ke-video-align");var x=f.el.one(".ke-video-ok");f=f.el.one(".ke-video-cancel");x.on("click",c._gen,c);f.on("click",function(){c.d.hide()})},_getDInfo:function(){var c=this.dUrl.val(),
f=q(c);if(f){(c=f.detect(c))||alert("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");return{url:c,attrs:{height:f.height,width:f.width,align:this.dAlign.val()}}}else alert("\u4e0d\u652f\u6301\u8be5\u94fe\u63a5\u6765\u6e90!")},_getFlashUrl:function(c){return y(c)},_updateD:function(){var c=this.editor,f=this.selectedFlash;if(f){c=c.restoreRealElement(f);this.dUrl.val(this._getFlashUrl(c));this.dAlign.val(c.attr("align"))}else{this.dUrl.val("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");
this.dAlign.val("")}}});u.registerBubble("bangpai-video","\u89c6\u9891\u94fe\u63a5\uff1a ",d);k.BangPaiVideo=e;var v={"\u89c6\u9891\u5c5e\u6027":function(c){var f=c.getSelection();f=(f=f&&f.getStartElement())&&d(f);c=c._toolbars["bangpai-video"];f&&c.show(null,f)}}}();t.addPlugin(function(){new k.BangPaiVideo(t)})},{attach:false,requires:["flashsupport"]});
