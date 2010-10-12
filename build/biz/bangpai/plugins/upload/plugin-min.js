KISSY.Editor.add("bangpai-upload",function(s){var l=KISSY,h=l.Editor;if(!h.BangPaiUpload){(function(){function t(a){this.editor=a;this._init()}var u=l.DOM,z=l.JSON,i=l.Node,A=h.SimpleOverlay,B=h.Config.base+h.Utils.debugUrl("plugins/uploader/uploader.swf"),o={};name="ke-bangpai-upload";u.addStyleSheet(".ke-upload-head {background-color: #f4f7fc;background: -webkit-gradient(linear, left top, left bottom, from(rgb(244, 247, 252)), to(rgb(235, 239, 244)));background: -moz-linear-gradient(top, rgb(244, 247, 252), rgb(235, 239, 244));filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#f4f7fc', endColorstr = '#ebeff4');height:40px;border-bottom:1px solid #CED5E0;padding-top:1px;}.ke-upload-head-text {height:30px;line-height:30px;width:120px;margin-top:8px;margin-left:30px;text-align:center;border:1px solid #CED5E0;border-bottom-color:#FDFDFD;background:#FDFDFD;padding-bottom:2px;margin-bottom:-2px;position:relative;}.ke-upload-btn-wrap {position:relative;padding:15px 20px 15px 10px;text-align:right;}.ke-upload-list {width:100%;}.ke-upload-list th {border-top:1px solid #c1c8d1;background-color:#EBEDF1;}.ke-upload-list td,.ke-upload-list th {padding:0.5em;text-align:center;border-bottom:1px solid #c1c8d1;}",
"ke-BangPaiUpload");l.augment(t,l.EventTarget,{_prepareShow:function(){var a=this,b=a.editor,c=b.cfg.pluginConfig["bangpai-upload"];a.dialog=new A({title:"批量上传",mask:false,focusMgr:false,width:"700px"});var f=a.dialog;f.foot.hide();var e=f.body,g=(new i("<div class='ke-upload-btn-wrap'><span style='margin:0 15px 0 0px;color:#969696;display:inline-block;vertical-align:middle;width:80%;'></span></div>")).appendTo(e),j=(new i("<div style='display:none'>")).appendTo(e),d=new h.TripleButton({text:"浏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;览",
cls:"ke-button",container:g}),n=d.el.offset(),v=d.el.width()*2,w=d.el.height()*1.5;e=(new i("<div style='"+("position:absolute;width:"+v+"px;height:"+w+"px;z-index:9999;")+"'>")).appendTo(g);var x=(new i("<div><table class='ke-upload-list'><thead><tr><th>序号</th><th>图片</th><th>大小</th><th>上传进度</th><th>图片操作</th></tr></thead><tbody></tbody></table></div>")).appendTo(j),q=x.one("tbody"),p=(new i("<p style='margin:15px 20px 35px; 0;text-align:right;'><a class='ke-button ke-bangpiaupload-ok'>确定上传</a><a class='ke-button ke-bangpiaupload-insertall' style='margin-left:20px;'>全部插入</a></p>")).appendTo(j),
y=p.one(".ke-bangpiaupload-ok");p=p.one(".ke-bangpiaupload-insertall");l.guid(name);var C=(new i("<span></span>")).insertBefore(y);c.extraHtml&&x.append(c.extraHtml);a.statusText=C;a.btn=d;a.up=y;e.offset(n);d=new h.FlashBridge({movie:B,methods:["removeFile","cancel","removeFile","disable","enable","setAllowMultipleFiles","setFileFilters","uploadAll"],holder:e,attrs:{width:v,height:w},params:{wmode:"transparent"},flashVars:{allowedDomain:location.hostname,menu:true}});a.flashPos=e;a.uploader=d;a._list=
q;a._listWrap=j;a._ds=c.serverUrl;a._dsp=c.serverParams||{};a._fileInput=c.fileInput||"Filedata";a._sizeLimit=c.sizeLimit||1E3;a._numberLimit=c.numberLimit||15;g.one("span").html("允许用户同时上传"+a._numberLimit+"张图片，单张图片容量不超过"+a._sizeLimit/1E3+"M");p.on("click",function(){trs=q.all("tr");for(var k=0;k<trs.length;k++){var m=new i(trs[k]),r=m.attr("url");if(r){b.insertElement(new i("<p>&nbsp;<img src='"+r+"'/>&nbsp;</p>",null,b.document));a._removeTrFile(m)}}if(r){j.hide();f.hide()}});q.on("click",function(k){var m=
new i(k.target);k.halt();if(m.hasClass("ke-upload-insert")){k=m.parent("tr");url=k.attr("url");b.insertElement(new i("<img src='"+url+"'/>",null,b.document))}if(m.hasClass("ke-upload-delete")||m.hasClass("ke-upload-insert")){k=m.parent("tr");a._removeTrFile(k)}});d.on("fileSelect",a._onSelect,a);d.on("uploadStart",a._onUploadStart,a);d.on("uploadProgress",a._onProgress,a);d.on("uploadComplete",a._onComplete,a);d.on("uploadCompleteData",a._onUploadCompleteData,a);d.on("swfReady",a._ready,a);d.on("uploadError",
a._uploadError,a)},_removeTrFile:function(a){var b=a.attr("fid"),c=this.uploader;try{c.cancel(b)}catch(f){}c.removeFile(b);if(o[b]){o[b].destroy();delete o[b]}a._4e_remove();this.denable();this._seqPics()},_init:function(){var a=this.editor,b=new h.TripleButton({contentCls:"ke-toolbar-mul-image",title:"批量插图",container:a.toolBarDiv});b.on("offClick",this.show,this);this.el=b;h.Utils.lazyRun(this,"_prepareShow","_realShow");h.Utils.sourceDisable(a,this)},disable:function(){this.el.disable()},enable:function(){this.el.boff()},
_realShow:function(){this.dialog.show()},show:function(){this._prepareShow()},_uploadError:function(a){var b=a.id,c=this._getFileTr(b);b=o[b];if(c){b&&b.destroy();c.one(".ke-upload-progress").html("<span style='color:red'>"+a.status+"</span>")}},_getFileTr:function(a){for(var b=this._list.all("tr"),c=0;c<b.length;c++){var f=new i(b[c]);if(f.attr("fid")==a)return f}},_onUploadStart:function(a){this.uploader.removeFile(a.id);this.ddisable()},_onComplete:function(){},_onUploadCompleteData:function(a){var b=
l.trim(a.data).replace(/\\r||\\n/g,"");a=a.id;if(b){b=z.parse(b);if(b.error)this._uploadError({id:a,status:b.error});else{if(a=this._getFileTr(a)){a.one(".ke-upload-insert").show();a.attr("url",b.imgUrl)}this.denable();this._seqPics()}}},_onProgress:function(a){var b=Math.floor(a.bytesLoaded*100/a.bytesTotal);(a=o[a.id])&&a.set("progress",b)},ddisable:function(){this.uploader.disable();this.btn.disable();this.flashPos.offset({left:-9999,top:-9999})},denable:function(){this.uploader.enable();this.btn.enable();
this.flashPos.offset(this.btn.el.offset())},_seqPics:function(){var a=this._list,b=1,c=a.all("tr");a.all(".ke-upload-seq").each(function(e){e.html(b++)});for(var f=a=0;f<c.length;f++)(new i(c[f])).attr("url")||a++;this.statusText.html("队列中剩余"+a+"张图片，点击确定上传，开始上传。 ")},_getFilesSize:function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b},_onSelect:function(a){var b=this.uploader,c=this._list,f=0;a=a.fileList;var e=this._numberLimit;if(a){var g=this._getFilesSize(a);g>e&&alert("系统将只保留 n 张".replace(/n/,
this._numberLimit));g>=e&&this.ddisable();e=c.children("tr");for(g=0;g<e.length;g++){var j=u.attr(e[g],"fid");j&&a[j]&&delete a[j]}e=this._numberLimit-e.length;this._listWrap.show();for(g in a)if(a.hasOwnProperty(g)){f++;var d=a[g];j=Math.floor(d.size/1E3);var n=d.id;if(f>e)b.removeFile(n);else{d=(new i("<tr fid='"+n+"'><td class='ke-upload-seq'></td><td>"+d.name+"</td><td>"+j+"k</td><td class='ke-upload-progress'></td><td><a href='#' class='ke-upload-insert' style='display:none'>[插入]</a> &nbsp; <a href='#' class='ke-upload-delete'>[删除]</a> &nbsp; </td></tr>")).appendTo(c);
d.one(".ke-upload-progress");if(j>this._sizeLimit){this._uploadError({id:n,status:"图片不能超过 n M".replace(/n/,this._sizeLimit/1E3)});b.removeFile(n)}else o[n]=new h.ProgressBar({container:d.one(".ke-upload-progress"),width:"100px",height:"18px"})}}this._seqPics()}},_ready:function(){var a=this,b=a.uploader,c=a.up,f=a.btn,e=a.flashPos,g=h.Utils.normParams;f.enable();e.offset(f.el.offset());b.setAllowMultipleFiles(true);b.setFileFilters([{extensions:"*.jpeg;*.jpg;*.png;*.gif",description:"图片文件( png,jpg,jpeg,gif )"}]);
c.on("click",function(j){j.halt();b.uploadAll(a._ds,"POST",g(a._dsp),a._fileInput)})}});h.BangPaiUpload=t})();s.addPlugin(function(){new h.BangPaiUpload(s)})}},{attach:false,requires:["flashutils","progressbar","flashbridge","overlay"]});
