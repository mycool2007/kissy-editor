KISSY.Editor.add("bangpai-music",function(r){function s(d){return/xiami\.com/i.test(d)}var k=KISSY,l=k.Editor,v=k.DOM,w=k.Node,x=l.Config.base+"theme/loading.gif",p=l.Flash,m="ke_xiami",n=r.htmlDataProcessor,t=n&&n.dataFilter;t&&t.addRules({elements:{object:function(d){var g=d.attributes,q=d.attributes.title,h;if(!(g.classid&&String(g.classid).toLowerCase())){for(g=0;g<d.children.length;g++){h=d.children[g];if(h.name=="embed"){if(!p.isFlashEmbed(h))return null;if(s(h.attributes.src))return n.createFakeParserElement(d,
m,"bangpai-music",true,{title:q})}}return null}for(g=0;g<d.children.length;g++){h=d.children[g];if(h.name=="param"&&h.attributes.name=="movie")if(s(h.attributes.value))return n.createFakeParserElement(d,m,"bangpai-music",true,{title:q})}},embed:function(d){if(!p.isFlashEmbed(d))return null;if(s(d.attributes.src))return n.createFakeParserElement(d,m,"bangpai-music",true,{title:d.attributes.title})}}},4);l.BangPaiMusic||function(){function d(b,a){if(b.length>a)b=b.substring(0,a)+"...";return b}function g(){g.superclass.constructor.apply(this,
arguments)}function q(b){return y.replace(/\${([^}]+)}/g,function(a,c){return b[c]})}function h(b,a,c){return"<a class='ke-xiami-page-item"+(b==a?" ke-xiami-curpage":"")+"' data-value='"+a+"' href='#'>"+(c||a)+"</a>"}function z(b){return decodeURIComponent(b.song_name)+" - "+decodeURIComponent(b.artist_name)}function u(b){return b._4e_name()==="img"&&!!b.hasClass(m)&&b}v.addStyleSheet(".ke-xiami-list {margin-top:10px;}.ke-xiami-list li{border:1px dotted gray;border-width:0 0 1px 0;overflow:hidden;zoom:1;padding:2px;}\n.ke-xiami-list .ke-xiami-add {float:right;}\n.ke-xiami-list .ke-xiami-song {float:left;}\n.ke-xiami-paging a{display: inline-block; zoom: 1;  *display: inline; border:1px solid gray;padding:0 5px;margin:0 2px;}\n.ke-xiami-paging a:hover,.ke-xiami-paging a.ke-xiami-curpage {background-color:orange;}\n.ke-xiami-paging {text-align:center;margin-top:10px;}\n",
"BangPaiMusic");window.bangpai_xiami=function(b){var a=bangpai_xiami.instance;b.page=bangpai_xiami.page;a._listSearch(b)};var A="<form action='#' class='ke-xiami-form'><p><input class='ke-xiami-url' style='width:300px' value='\u8f93\u5165\u60f3\u8981\u6dfb\u52a0\u7684\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d'/> &nbsp;  <input class='ke-xiami-submit' type='submit' style='vertical-align:middle;' value='\u641c \u7d22 ' /></p><p style='margin:5px 0'><label>\u5bf9 \u9f50\uff1a <select class='ke-xiami-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select>"+
l.Utils.duplicateStr("&nbsp;",1)+"<label>\u95f4\u8ddd\uff1a </span> <input class='ke-xiami-margin' style='width:90px' value='5'/> px</label></p></form><div class='ke-xiami-list'></div>",y="http://www.xiami.com/app/nineteen/search/key/${key}/page/${page}?random=${random}&callback=bangpai_xiami";k.extend(g,p,{_config:function(){this._cls=m;this._type="bangpai-music";this._title="\u641c\u7d22\u97f3\u4e50";this._bodyHtml=A;this._footHtml="";this._contentCls="ke-toolbar-music";this._tip="\u63d2\u5165\u867e\u7c73\u97f3\u4e50";
this._contextMenu=B;this._flashRules=["img."+m];this._config_dwidth="400px"},_updateTip:function(b,a){var c=this.editor.restoreRealElement(a);b.html(a.attr("title"));b.attr("href",this._getFlashUrl(c))},_initD:function(){function b(f){a._xiami_submit[0].disabled=true;var j={key:encodeURIComponent(e.val()),page:f,random:(new Date).valueOf()};j=q(j);bangpai_xiami.instance=a;bangpai_xiami.page=f;a._xiamia_list.html("<img style='display:block;width:108px;margin:5px auto 0 auto;'src='"+x+"'/>");k.getScript(j)}
var a=this,c=a.d,i=c.el.one(".ke-xiami-form"),e=c.el.one(".ke-xiami-url");a.dAlign=c.el.one(".ke-xiami-align");a._xiami_input=e;a._xiamia_list=c.el.one(".ke-xiami-list");a._xiami_submit=c.el.one(".ke-xiami-submit");a.dMargin=c.el.one(".ke-xiami-margin");i.on("submit",function(f){b(1);f.halt()},a);a._xiamia_list.on("click",function(f){f.preventDefault();var j=new w(f.target);f=j._4e_ascendant(function(o){return a._xiamia_list._4e_contains(o)&&o.hasClass("ke-xiami-add")},true);j=j._4e_ascendant(function(o){return a._xiamia_list._4e_contains(o)&&
o.hasClass("ke-xiami-page-item")},true);if(f){a._dinfo={url:"http://www.xiami.com/widget/"+f.attr("data-value")+"/singlePlayer.swf",attrs:{title:f.attr("title"),align:a.dAlign.val(),style:"margin:"+(parseInt(a.dMargin.val())||0)+"px;"}};a._gen()}else j&&b(parseInt(j.attr("data-value")))})},_listSearch:function(b){var a,c=b.results,i;if(b.key==this._xiami_input.val()){this._xiami_submit[0].disabled=false;if(c&&c.length){i="<ul>";for(a=0;a<c.length;a++){var e=c[a],f=z(e);i+="<li title='"+f+"'><span class='ke-xiami-song'>"+
d(f,35)+"</span><a href='#' title='"+f+"' class='ke-xiami-add' data-value='"+(e.album_id+"_"+e.song_id)+"'>\u9009\u62e9</a></li>"}i+="</ul>";c=b.page;b=Math.floor(b.total/8);a=c-3;e=c+3;if(b>1){if(a<=2){e=Math.min(2-a+e,b-1);a=2}e=Math.min(e,b-1);if(e==b-1)a=Math.max(2,e-6);i+="<p class='ke-xiami-paging'>"+h(c,1,"1"+(a!=2?"...":""));for(a=a;a<=e;a++)i+=h(c,a);if(e!=b)i+=h(c,b,(e!=b-1?"...":"")+b);i+="</p>"}}else i="<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u6ca1\u6709\u627e\u5230\u7ed3\u679c\uff01</p>";
this._xiamia_list.html(i)}},_updateD:function(){var b=this.selectedFlash;if(b){this._xiami_input.val(b.attr("title"));this.dAlign.val(b.attr("align"));this.dMargin.val(parseInt(b._4e_style("margin"))||0)}else{this._xiami_input.val("\u8f93\u5165\u60f3\u8981\u6dfb\u52a0\u7684\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d");this.dAlign.val("");this.dMargin.val("5")}this._xiami_submit[0].disabled=false;this._xiamia_list.html("")},_getDInfo:function(){k.mix(this._dinfo.attrs,{width:257,
height:33});return this._dinfo}});var B={"\u867e\u7c73\u5c5e\u6027":function(b){var a=b.getSelection();a=a&&a.getStartElement();a=u(a);b=b._toolbars["bangpai-music"];a&&b.show(null,a)}};p.registerBubble("bangpai-music","\u867e\u7c73\u97f3\u4e50\uff1a ",u);l.BangPaiMusic=g}();r.addPlugin(function(){new l.BangPaiMusic(r)})},{attach:false,requires:["flashsupport"]});