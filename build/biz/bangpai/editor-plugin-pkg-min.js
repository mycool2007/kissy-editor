KISSY.Editor.add("bangpai-music",function(x){var j=KISSY,o=j.UA,v=j.Event,m=j.Editor,w=j.DOM,q=j.Node,y=m.Config.base+"theme/loading.gif",z=m.Flash,g="ke_xiami",i=x.htmlDataProcessor,a=i&&i.dataFilter,e="\u8f93\u5165\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d";a&&a.addRules({elements:{object:function(b){var c=b.attributes,h=b.attributes.title,l;if(!(c.classid&&String(c.classid).toLowerCase())){for(c=0;c<b.children.length;c++){l=b.children[c];if(l.name=="embed"){if(!z.isFlashEmbed(l))break;if(/xiami\.com/i.test(l.attributes.src))return i.createFakeParserElement(b,
g,"bangpai-music",true,{title:h})}}return null}for(c=0;c<b.children.length;c++){l=b.children[c];if(l.name=="param"&&l.attributes.name=="movie")if(/xiami\.com/i.test(l.attributes.value))return i.createFakeParserElement(b,g,"bangpai-music",true,{title:h})}},embed:function(b){if(!z.isFlashEmbed(b))return null;if(/xiami\.com/i.test(b.attributes.src))return i.createFakeParserElement(b,g,"bangpai-music",true,{title:b.attributes.title})}}},4);m.BangPaiMusic||function(){function b(f){b.superclass.constructor.apply(this,
arguments);f.cfg.disableObjectResizing||v.on(f.document.body,o.ie?"resizestart":"resize",function(d){w.hasClass(d.target,g)&&d.preventDefault()})}function c(f){return A.replace(/\${([^}]+)}/g,function(d,n){return f[n]})}function h(f,d,n){return"<a class='ke-xiami-page-item ke-button"+(f==d?" ke-xiami-curpage":"")+"' data-value='"+d+"' href='#'>"+(n||d)+"</a>"}function l(f){return f._4e_name()==="img"&&!!f.hasClass(g)&&f}w.addStyleSheet(".ke-xiami-list {margin:10px 0 10px 0;padding:10px 20px 0 20px;border-top:1px solid #CED5E0;display:none;}.ke-xiami-list li{border:1px solid #CED5E0;border-width:0 0 1px 0;overflow:hidden;zoom:1;color:#646464;height:24px;line-height:24px;padding:0 20px 0 10px;}.ke-xiami-list .ke-xiami-add {float:right;}.ke-xiami-list .ke-xiami-song {float:left;width:300px;white-space:nowrap;overflow:hidden;}.ke-xiami-paging a{display: inline-block; zoom: 1;  *display: inline; padding:1px 7px;margin:0 3px;}.ke-xiami-paging a:hover,.ke-xiami-paging a.ke-xiami-curpage {color:red;text-decoration:none;}.ke-xiami-paging {text-align:center;margin:20px -10px 0 -10px;}.ke-xiami-page-more {padding:0 10px;}",
"BangPaiMusic");window.bangpai_xiami=function(f){var d=bangpai_xiami.instance;f.page=bangpai_xiami.page;d._listSearch(f)};var A="http://www.xiami.com/app/nineteen/search/key/${key}/page/${page}?random=${random}&callback=bangpai_xiami";j.extend(b,z,{_config:function(){this._cls=g;this._type="bangpai-music";this._title="\u867e\u7c73\u5c5e\u6027";this._bodyHtml="<div style='padding:20px 0;'><form action='#' class='ke-xiami-form' style='margin:0 20px;'><p class='ke-xiami-title'></p><p class='ke-xiami-url-wrap'><input class='ke-xiami-url ke-input' style='width:374px;vertical-align:middle;'/> &nbsp;  <button class='ke-xiami-submit'>\u641c \u7d22</button></p><p style='margin:10px 0'><label>\u5bf9 \u9f50\uff1a <select class='ke-xiami-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></label><label style='margin-left:70px;'>\u95f4\u8ddd\uff1a  <input  data-verify='^\\d+$'  data-warning='\u95f4\u8ddd\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' class='ke-xiami-margin ke-input' style='width:60px;vertical-align:middle;' value='5'/> \u50cf\u7d20</label></p></form><div class='ke-xiami-list'></div></div>";
this._footHtml="<a class='ke-xiami-ok ke-button' style='margin-right:20px;'>\u786e&nbsp;\u5b9a</a><a class='ke-xiami-cancel ke-button'>\u53d6&nbsp;\u6d88</a>";this._contentCls="ke-toolbar-music";this._tip="\u63d2\u5165\u867e\u7c73\u97f3\u4e50";this._contextMenu=u;this._flashRules=["img."+g]},_updateTip:function(f,d){var n=this.editor.restoreRealElement(d);if(n){f.html(d.attr("title"));f.attr("href",this._getFlashUrl(n))}},_initD:function(){function f(s){var r=p.val();if(r.replace(/[^\x00-\xff]/g,"@@").length>30)alert("\u957f\u5ea6\u4e0a\u965030\u4e2a\u5b57\u7b26\uff081\u4e2a\u6c49\u5b57=2\u4e2a\u5b57\u7b26\uff09");else if(!j.trim(r)||
r==e)alert("\u4e0d\u80fd\u4e3a\u7a7a\uff01");else{d._xiami_submit.disable();r={key:encodeURIComponent(p.val()),page:s,random:(new Date).valueOf()};r=c(r);bangpai_xiami.instance=d;bangpai_xiami.page=s;d._xiamia_list.html("<img style='display:block;width:32px;height:32px;margin:5px auto 0 auto;'src='"+y+"'/><p style='width: 130px; margin: 15px auto 0; color: rgb(150, 150, 150);'>\u6b63\u5728\u641c\u7d22\uff0c\u8bf7\u7a0d\u5019......</p>");d._xiamia_list.show();var t=j.getScript(r,{timeout:10,success:function(){},error:function(){t.src="";d._xiami_submit.enable();
d._xiamia_list.html("<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u8d85\u65f6\u4e86\uff0c\u8bf7\u91cd\u8bd5\uff01</p>")}})}}var d=this,n=d.editor,k=d.d;k.el.one(".ke-xiami-form");var p=k.el.one(".ke-xiami-url");d.dAlign=m.Select.decorate(k.el.one(".ke-xiami-align"));d._xiami_input=p;m.Utils.placeholder(p,e);d._xiamia_list=k.el.one(".ke-xiami-list");d._xiami_submit=new m.TripleButton({el:k.el.one(".ke-xiami-submit"),cls:"ke-button",text:"\u641c&nbsp;\u7d22"});d._xiami_submit.on("offClick",function(){f(1)});p.on("keydown",function(s){s.keyCode===
13&&f(1)});d.dMargin=k.el.one(".ke-xiami-margin");d._xiami_url_wrap=k.el.one(".ke-xiami-url-wrap");d._xiamia_title=k.el.one(".ke-xiami-title");var B=k.foot.one(".ke-xiami-ok");k.foot.one(".ke-xiami-cancel").on("click",function(){k.hide()});B.on("click",function(){var s=d.selectedFlash,r=n.restoreRealElement(s);d._dinfo={url:d._getFlashUrl(r),attrs:{title:s.attr("title"),align:d.dAlign.val(),style:"margin:"+(parseInt(d.dMargin.val())||0)+"px;"}};d._gen()},d);d._xiamia_list.on("click",function(s){s.preventDefault();
var r=new q(s.target);s=r._4e_ascendant(function(t){return d._xiamia_list._4e_contains(t)&&t.hasClass("ke-xiami-add")},true);r=r._4e_ascendant(function(t){return d._xiamia_list._4e_contains(t)&&t.hasClass("ke-xiami-page-item")},true);if(s){d._dinfo={url:"http://www.xiami.com/widget/"+s.attr("data-value")+"/singlePlayer.swf",attrs:{title:s.attr("title"),align:d.dAlign.val(),style:"margin:"+(parseInt(d.dMargin.val())||0)+"px;"}};d._gen()}else r&&f(parseInt(r.attr("data-value")))})},_listSearch:function(f){var d,
n=f.results,k="";if(f.key==j.trim(this._xiami_input.val())){this._xiami_submit.enable();if(n&&n.length){k="<ul>";for(d=0;d<n.length;d++){var p=n[d],B=decodeURIComponent(p.song_name)+" - "+decodeURIComponent(p.artist_name);k=k;var s="<li title='"+B+"'><span class='ke-xiami-song'>",r=B;if(r.length>35)r=r.substring(0,35)+"...";k=k+(s+r+"</span><a href='#' title='"+B+"' class='ke-xiami-add' data-value='"+(p.album_id+"_"+p.song_id)+"'>\u6dfb\u52a0</a></li>")}k+="</ul>";n=f.page;f=Math.floor(f.total/8);d=n-1;p=n+
1;if(f>1){k+="<p class='ke-xiami-paging'>";if(d<=2){p=Math.min(2-d+p,f-1);d=2}p=Math.min(p,f-1);if(p==f-1)d=Math.max(2,p-3);if(n!=1)k+=h(n,n-1,"\u4e0a\u4e00\u9875");k+=h(n,1,"1");if(d!=2)k+="<span class='ke-xiami-page-more'>...</span>";for(d=d;d<=p;d++)k+=h(n,d);if(p!=f){if(p!=f-1)k+="<span class='ke-xiami-page-more'>...</span>";k+=h(n,f,f)}if(n!=f)k+=h(n,n+1,"\u4e0b\u4e00\u9875");k+="</p>"}}else k="<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u6ca1\u6709\u627e\u5230\u7ed3\u679c\uff01</p>";this._xiamia_list.html(k)}},_updateD:function(){var f=this.selectedFlash;
if(f){this._xiami_input.val(f.attr("title"));this._xiamia_title.html(f.attr("title"));this.dAlign.val(f.attr("align"));this.dMargin.val(parseInt(f._4e_style("margin"))||0);this._xiami_url_wrap.hide();this.d.foot.show();this._xiamia_title.show()}else{m.Utils.resetInput(this._xiami_input);this.dAlign.val("");this.dMargin.val("5");this._xiami_url_wrap.show();this.d.foot.hide();this._xiamia_title.hide();this._xiami_submit.enable()}this._xiamia_list.hide();this._xiamia_list.html("")},_getDInfo:function(){j.mix(this._dinfo.attrs,
{width:257,height:33});return this._dinfo}});var u={"\u867e\u7c73\u5c5e\u6027":function(f){var d=f.getSelection();d=d&&d.getStartElement();d=l(d);f=f._toolbars["bangpai-music"];d&&f.show(null,d)}};z.registerBubble("bangpai-music","\u867e\u7c73\u97f3\u4e50\uff1a ",l);m.BangPaiMusic=b}();x.addPlugin(function(){new m.BangPaiMusic(x)})},{attach:false,requires:["flashsupport"]});
KISSY.Editor.add("bangpai-sourcearea",function(x){var j=KISSY.Editor,o=KISSY,v=o.Node;UA=o.UA;TripleButton=j.TripleButton;if(!(UA.gecko<1.92)){j.BangPaiSourceArea||function(){function m(y){this.editor=y;this._init()}var w=j.SOURCE_MODE,q=j.WYSIWYG_MODE;o.augment(m,{_init:function(){var y=this.editor,z=y.statusDiv,g=this.el=(new v("<span style='zoom:1;display:inline-block;height:22px;line-height:22px;'><input style='margin:0 5px;vertical-align:middle;' type='checkbox' /><span style='vertical-align:middle;'>\u7f16\u8f91\u6e90\u4ee3\u7801</span></span>")).appendTo(z).one("input");
g.on("click",this._check,this);y.on("sourcemode",function(){g[0].checked=true});y.on("wysiwygmode",function(){g[0].checked=false})},_check:function(){this.el[0].checked?this._show():this._hide()},_show:function(){this.editor.execCommand("sourceAreaSupport",w)},_hide:function(){this.editor.execCommand("sourceAreaSupport",q)}});j.BangPaiSourceArea=m}();x.addPlugin(function(){new j.BangPaiSourceArea(x)})}},{attach:false,requires:["sourceareasupport"]});
KISSY.Editor.add("bangpai-upload",function(x){var j=KISSY,o=j.Editor;if(!o.BangPaiUpload){(function(){function v(a){this.editor=a;this._init()}var m=j.DOM,w=j.JSON,q=j.Node,y=o.SimpleOverlay;w=j.JSON;var z=window[o.STORE],g=o.Config.base+o.Utils.debugUrl("plugins/uploader/uploader.swf"),i={};m.addStyleSheet(".ke-upload-btn-wrap {position:relative;padding:15px 20px 15px 10px;}.ke-upload-list {width:100%;}.ke-upload-list th {border-top:1px solid #c1c8d1;background-color: #E7E9ED;background: -webkit-gradient(linear, left top, left bottom, from(#E7E9ED), to(#F1F4F7));background: -moz-linear-gradient(top, #E7E9ED, #F1F4F7);}.ke-upload-list td,.ke-upload-list th {padding:0em;height:26px;line-height:26px;text-align:center;border-bottom:1px solid #c1c8d1;}",
"ke-BangPaiUpload");j.augment(v,j.EventTarget,{_prepareShow:function(){var a=this,e=a.editor,b=e.cfg.pluginConfig["bangpai-upload"];a.dialog=new y({title:"\u6279\u91cf\u4e0a\u4f20",mask:false,draggable:"all",focusMgr:false,width:"600px"});var c=a.dialog;c.foot.hide();var h=c.body,l=(new q("<div class='ke-upload-btn-wrap'><span style='margin:0 15px 0 0px;color:#969696;display:inline-block;vertical-align:middle;width:469px;'></span></div>")).appendTo(h),A=(new q("<div style='display:none'>")).appendTo(h),u=new o.TripleButton({text:"\u6d4f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u89c8",
cls:"ke-button",container:l}),f=u.el.offset(),d=u.el.width()*2,n=u.el.height()*1.5;h=(new q("<div style='"+("position:absolute;width:"+d+"px;height:"+n+"px;z-index:"+e.baseZIndex(9999)+";")+"'>")).appendTo(l);var k=(new q("<div><table class='ke-upload-list'><thead><tr><th>\u5e8f\u53f7</th><th>\u56fe\u7247</th><th>\u5927\u5c0f</th><th style='width:30%'>\u4e0a\u4f20\u8fdb\u5ea6</th><th>\u56fe\u7247\u64cd\u4f5c</th></tr></thead><tbody></tbody></table></div>")).appendTo(A),p=k.one("tbody"),B=(new q("<p style='margin:15px 20px 30px; 0;text-align:right;'><a class='ke-button ke-bangpiaupload-ok'>\u786e\u5b9a\u4e0a\u4f20</a><a class='ke-button ke-bangpiaupload-insertall' style='margin-left:20px;'>\u5168\u90e8\u63d2\u5165</a></p>")).appendTo(A),
s=B.one(".ke-bangpiaupload-ok");B=B.one(".ke-bangpiaupload-insertall");j.guid("ke-bangpai-upload");var r=(new q("<span></span>")).insertBefore(s);b.extraHtml&&k.append(b.extraHtml);a.statusText=r;a.btn=u;a.up=s;h.offset(f);u=new o.FlashBridge({movie:g,methods:["removeFile","cancel","removeFile","disable","enable","setAllowMultipleFiles","setFileFilters","uploadAll"],holder:h,attrs:{width:d,height:n},params:{wmode:"transparent"},flashVars:{allowedDomain:location.hostname,menu:true}});a.flashPos=h;
a.uploader=u;a._list=p;a._listTable=p.parent("table");a._listWrap=A;a._ds=b.serverUrl;a._dsp=b.serverParams||{};a._fileInput=b.fileInput||"Filedata";a._sizeLimit=b.sizeLimit||1E3;a._numberLimit=b.numberLimit||15;l.one("span").html("\u5141\u8bb8\u7528\u6237\u540c\u65f6\u4e0a\u4f20"+a._numberLimit+"\u5f20\u56fe\u7247\uff0c\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7"+a._sizeLimit/1E3+"M");B.on("click",function(){trs=p.all("tr");for(var t=0;t<trs.length;t++){var C=new q(trs[t]),D=C.attr("url");if(D){e.insertElement(new q("<p>&nbsp;<img src='"+D+"'/>&nbsp;</p>",null,e.document));a._removeTrFile(C)}}if(D){A.hide();
c.hide()}});p.on("click",function(t){var C=new q(t.target);t.halt();if(C.hasClass("ke-upload-insert")){t=C.parent("tr");url=t.attr("url");e.insertElement(new q("<img src='"+url+"'/>",null,e.document))}if(C.hasClass("ke-upload-delete")||C.hasClass("ke-upload-insert")){t=C.parent("tr");a._removeTrFile(t)}});u.on("fileSelect",a._onSelect,a);u.on("uploadStart",a._onUploadStart,a);u.on("uploadProgress",a._onProgress,a);u.on("uploadComplete",a._onComplete,a);u.on("uploadCompleteData",a._onUploadCompleteData,
a);u.on("swfReady",a._ready,a);u.on("uploadError",a._uploadError,a);a._restore()},_removeTrFile:function(a){var e=a.attr("fid"),b=this.uploader;if(e){try{b.cancel(e)}catch(c){}b.removeFile(e)}if(i[e]){i[e].destroy();delete i[e]}a._4e_remove();this.denable();this._syncStatus()},_init:function(){var a=this,e=a.editor,b=new o.TripleButton({contentCls:"ke-toolbar-mul-image",title:"\u6279\u91cf\u63d2\u56fe",container:e.toolBarDiv});b.on("offClick",a.show,a);a.el=b;o.Utils.lazyRun(a,"_prepareShow","_realShow");o.Utils.sourceDisable(e,
a);a.disable();o.storeReady(function(){a.enable()})},disable:function(){this.el.disable()},enable:function(){this.el.boff()},_realShow:function(){this.dialog.show()},show:function(){this._prepareShow()},_uploadError:function(a){var e=a.id,b=this._getFileTr(e);e=i[e];if(b){e&&e.destroy();b.one(".ke-upload-progress").html("<div style='color:red;'>"+a.status+"</div>")}},_getFileTr:function(a){for(var e=this._list.all("tr"),b=0;b<e.length;b++){var c=new q(e[b]);if(c.attr("fid")==a)return c}},_onUploadStart:function(a){this.uploader.removeFile(a.id)},
_onComplete:function(){},_onUploadCompleteData:function(a){var e=j.trim(a.data).replace(/\\r||\\n/g,"");a=a.id;if(e){e=w.parse(e);if(e.error)this._uploadError({id:a,status:e.error});else{if(a=this._getFileTr(a)){a.one(".ke-upload-insert").show();a.attr("url",e.imgUrl)}this._syncStatus()}}},_onProgress:function(a){var e=Math.floor(a.bytesLoaded*100/a.bytesTotal);(a=i[a.id])&&a.set("progress",e)},ddisable:function(){this.uploader.disable();this.btn.disable();this.flashPos.offset({left:-9999,top:-9999})},
denable:function(){this.uploader.enable();this.btn.enable();this.flashPos.offset(this.btn.el.offset())},_syncStatus:function(){var a=this._list,e=1,b=a.all("tr");if(b.length==0)this._listWrap.hide();else{a.all(".ke-upload-seq").each(function(h){h.html(e++)});for(var c=a=0;c<b.length;c++)(new q(b[c])).attr("url")||a++;this.statusText.html("\u961f\u5217\u4e2d\u5269\u4f59"+a+"\u5f20\u56fe\u7247\uff0c\u70b9\u51fb\u786e\u5b9a\u4e0a\u4f20\uff0c\u5f00\u59cb\u4e0a\u4f20\u3002 ")}this._save()},_restore:function(){var a=z.getItem("Multi-Upload-Save"),e=this._list[0];if(a){a=w.parse(decodeURIComponent(a));for(var b=
0;b<a.length;b++){var c=a[b];c.complete=1;c.fid="restore_"+b;this._createFileTr(e,c).attr("url",c.url)}if(c){this._listWrap.show();this._syncStatus()}}},_save:function(){for(var a=this._list.all("tr"),e=[],b=0;b<a.length;b++){var c=new q(a[b]),h=c.attr("url");if(h){var l=c.one(".ke-upload-filesize").html();c=c.one(".ke-upload-filename").html();e.push({name:c,size:l,url:h})}}z.setItem("Multi-Upload-Save",encodeURIComponent(w.stringify(e)))},_getFilesSize:function(a){var e=0,b;for(b in a)a.hasOwnProperty(b)&&
e++;return e},_createFileTr:function(a,e){var b=e.fid,c=a.insertRow(-1);m.attr(c,"fid",b);var h=c.insertCell(-1);m.attr(h,"class","ke-upload-seq");h=c.insertCell(-1);m.html(h,e.name);m.attr(h,"class","ke-upload-filename");h=c.insertCell(-1);m.html(h,e.size);m.attr(h,"class","ke-upload-filesize");h=c.insertCell(-1);m.attr(h,"class","ke-upload-progress");h=c.insertCell(-1);m.html(h,"<a href='#' class='ke-upload-insert' "+(e.complete?"":"style='display:none'")+">[\u63d2\u5165]</a> &nbsp; <a href='#' class='ke-upload-delete'>[\u5220\u9664]</a> &nbsp;");
c=new q(c);c.one(".ke-upload-progress");if(parseInt(e.size)>this._sizeLimit){this._uploadError({id:b,status:"\u56fe\u7247\u592a\u5927\uff0c\u8bf7\u538b\u7f29\u81f3 n M\u4ee5\u4e0b".replace(/n/,this._sizeLimit/1E3)});this.uploader.removeFile(b)}else{i[b]=new o.ProgressBar({container:c.one(".ke-upload-progress"),width:"100px",height:"15px"});e.complete&&i[b].set("progress",100)}return c},_onSelect:function(a){var e=this.uploader,b=this._list,c=0;a=a.fileList;var h=this._numberLimit;if(a){h=b.children("tr");for(b=0;b<h.length;b++){var l=m.attr(h[b],"fid");
l&&a[l]&&delete a[l]}h=this._numberLimit-h.length;l=this._getFilesSize(a);l>h&&alert("\u7cfb\u7edf\u5c06\u53ea\u4fdd\u7559 n \u5f20".replace(/n/,this._numberLimit));l>=h&&this.ddisable();this._listWrap.show();l=this._list[0];for(b in a)if(a.hasOwnProperty(b)){c++;var A=a[b],u=Math.floor(A.size/1E3),f=A.id;c>h?e.removeFile(f):this._createFileTr(l,{size:u+"k",fid:f,name:A.name})}this._syncStatus()}},_ready:function(){var a=this,e=a.uploader,b=a.up,c=a.btn,h=a.flashPos,l=o.Utils.normParams;c.enable();h.offset(c.el.offset());e.setAllowMultipleFiles(true);
e.setFileFilters([{extensions:"*.jpeg;*.jpg;*.png;*.gif",description:"\u56fe\u7247\u6587\u4ef6( png,jpg,jpeg,gif )"}]);b.on("click",function(A){A.halt();e.uploadAll(a._ds,"POST",l(a._dsp),a._fileInput)})}});o.BangPaiUpload=v})();x.addPlugin(function(){new o.BangPaiUpload(x)})}},{attach:false,requires:["flashutils","progressbar","flashbridge","overlay","localStorage"]});
KISSY.Editor.add("bangpai-video",function(x){function j(g){for(var i=0;i<z.length;i++){var a=z[i];if(a.reg.test(g))return a}}var o=KISSY,v=o.Editor,m="ke_video",w=v.Flash,q=x.htmlDataProcessor,y=q&&q.dataFilter;y&&y.addRules({elements:{object:function(g){var i=g.attributes;if(!(i.classid&&String(i.classid).toLowerCase())){for(i=0;i<g.children.length;i++)if(g.children[i].name=="embed"){if(!w.isFlashEmbed(g.children[i]))break;if(j(g.children[i].attributes.src))return q.createFakeParserElement(g,m,"bangpai-video",
true)}return null}for(i=0;i<g.children.length;i++){var a=g.children[i];if(a.name=="param"&&a.attributes.name=="movie")if(j(a.attributes.value))return q.createFakeParserElement(g,m,"bangpai-video",true)}},embed:function(g){if(!w.isFlashEmbed(g))return null;if(j(g.attributes.src))return q.createFakeParserElement(g,m,"bangpai-video",true)}}},4);var z=[{reg:/youku\.com/i,width:480,height:400,detect:function(g){var i=g.match(/id_([^.]+)\.html$/);if(i)return"http://player.youku.com/player.php/sid/"+i[1]+
"/v.swf";g.match(/v_playlist\/([^.]+)\.html$/);return g}},{reg:/tudou\.com/i,width:480,height:400,detect:function(g){return g}},{reg:/ku6\.com/i,width:480,height:400,detect:function(g){var i=g.match(/show[^\/]*\/([^.]+)\.html$/);if(i)return"http://player.ku6.com/refer/"+i[1]+"/v.swf";return g}}];v.BangPaiVideo||function(){function g(){g.superclass.constructor.apply(this,arguments)}function i(b){return b._4e_name()==="img"&&!!b.hasClass(m)&&b}var a=["img."+m];o.extend(g,w,{_config:function(){var b=
this.editor.cfg.pluginConfig;this._cls=m;this._type="bangpai-video";this._title="\u89c6\u9891\u5c5e\u6027";this._bodyHtml="<div style='padding:20px 20px 0 20px'><p><label>\u94fe\u63a5\uff1a <input class='ke-video-url ke-input' style='width:418px;vertical-align:middle;'/></label></p><table style='margin:10px 0 5px  40px;width:400px;'><tr><td><label>\u5bbd\u5ea6\uff1a  <input  data-verify='^(\u81ea\u52a8|((?!0$)\\d+))$'  data-warning='\u5bbd\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-video-width ke-input' style='width:60px;margin-left:2px;vertical-align:middle;' value='\u81ea\u52a8'/> \u50cf\u7d20</label></td><td><label> \u9ad8\u5ea6\uff1a  <input  data-verify='^(\u81ea\u52a8|((?!0$)\\d+))$'  data-warning='\u9ad8\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-video-height ke-input' style='width:60px;vertical-align:middle;' value='\u81ea\u52a8'/> \u50cf\u7d20</label></td></tr><tr><td><label>\u5bf9\u9f50\uff1a <select class='ke-video-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></td><td><label>\u95f4\u8ddd\uff1a <input  data-verify='^\\d+$'  data-warning='\u95f4\u8ddd\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' class='ke-video-margin ke-input' style='width:60px;vertical-align:middle;' value='5'/> \u50cf\u7d20</label></td></tr></table></div>";
this._footHtml="<a class='ke-video-ok ke-button' style='margin-left:40px;margin-right:20px;'>\u786e\u5b9a</button> <a class='ke-video-cancel ke-button'>\u53d6\u6d88</a>";this._contentCls="ke-toolbar-video";this._tip="\u63d2\u5165\u89c6\u9891";this._contextMenu=e;this._flashRules=a;this.urlCfg=b["bangpai-video"]&&b["bangpai-video"].urlCfg;this._urlTip="\u652f\u6301 \u571f\u8c46\uff0c\u4f18\u9177\uff0cku6 \u89c6\u9891\u5206\u4eab"},_initD:function(){var b=this.d,c=b.el;this.dUrl=c.one(".ke-video-url");this.dAlign=v.Select.decorate(c.one(".ke-video-align"));this.dMargin=c.one(".ke-video-margin");this.dWidth=
c.one(".ke-video-width");this.dHeight=c.one(".ke-video-height");var h=c.one(".ke-video-ok");c=c.one(".ke-video-cancel");h.on("click",this._gen,this);c.on("click",function(){b.hide()});v.Utils.placeholder(this.dUrl,this._urlTip)},_getDInfo:function(){var b=this.dUrl.val(),c=j(b);if(c){if(b=c.detect(b))return{url:b,attrs:{height:parseInt(this.dHeight.val())||c.height,width:parseInt(this.dWidth.val())||c.width,align:this.dAlign.val(),style:"margin:"+(parseInt(this.dMargin.val())||0)+"px;"}}}else alert("\u4e0d\u652f\u6301\u8be5\u94fe\u63a5\u6765\u6e90!")},
_gen:function(){var b=this.dUrl.val(),c=this.urlCfg;if(c)for(var h=0;h<c.length;h++){var l=c[h];if(l.reg.test(b)){this.d.loading();g.dynamicUrl.origin=b;g.dynamicUrl.instance=this;setTimeout(function(){o.getScript(l.url.replace(/@url@/,encodeURIComponent(b)).replace(/@callback@/,encodeURIComponent("KISSY.Editor.BangPaiVideo.dynamicUrl")))},30);return}}g.superclass._gen.call(this)},_dynamicUrlPrepare:function(b){this.dUrl.val(b);this.d.unloading();g.superclass._gen.call(this)},_updateD:function(){var b=
this.editor,c=this.selectedFlash;if(c){b=b.restoreRealElement(c);this.dUrl.val(this._getFlashUrl(b));this.dAlign.val(b.attr("align"));this.dMargin.val(parseInt(b._4e_style("margin"))||0);c.css("width")&&this.dWidth.val(parseInt(c.css("width")));c.css("height")&&this.dHeight.val(parseInt(c.css("height")))}else{v.Utils.resetInput(this.dUrl);this.dAlign.val("");this.dMargin.val("5");this.dWidth.val("\u81ea\u52a8");this.dHeight.val("\u81ea\u52a8")}}});g.dynamicUrl=function(b,c){o.trim(b)==o.trim(g.dynamicUrl.origin)&&g.dynamicUrl.instance._dynamicUrlPrepare(c)};
w.registerBubble("bangpai-video","\u89c6\u9891\u94fe\u63a5\uff1a ",i);v.BangPaiVideo=g;var e={"\u89c6\u9891\u5c5e\u6027":function(b){var c=b.getSelection();c=(c=c&&c.getStartElement())&&i(c);b=b._toolbars["bangpai-video"];c&&b.show(null,c)}}}();x.addPlugin(function(){new v.BangPaiVideo(x)})},{attach:false,requires:["flashsupport"]});
