KISSY.Editor.add("definition",function(h){function x(b,a){return z+"<html><head><title>${title}</title><link href='"+h.Config.base+A+"' rel='stylesheet'/><style>"+(a||"")+"</style></head><body class='ke-editor'>&nbsp;"+(b?'<script id="ke_actscript" type="text/javascript">'+(h.Utils.isCustomDomain()?'document.domain="'+document.domain+'";':"")+'window.parent.KISSY.Editor._initIFrame("'+b+'");<\/script>':"")+"</body></html>"}var p=KISSY,g=p.UA,o=p.DOM,n=p.Node,r=p.Event,w=h.focusManager,B=h.Utils.tryThese,
z="<!doctype html>",A=h.Utils.debugUrl("theme/editor-iframe.css"),C=1,D="document.open();"+(h.Utils.isCustomDomain()?'document.domain="'+document.domain+'";':"")+"document.close();",E="<div  class='ke-editor-wrap'  > <div class='"+".ke-editor-tools".substring(1)+"'></div><div class='"+".ke-textarea-wrap".substring(1)+'\'><iframe  style="width:100%;height:100%;border:none;"  width="100%"  height="100%"  frameborder="0"  title="kissy-editor"  src="'+(g.ie?"javascript:void(function(){"+encodeURIComponent(D)+
"}())":"")+'"  tabIndex="'+(g.webkit?-1:"$(tabIndex)")+'"  allowTransparency="true" ></iframe></div><div class=\''+".ke-editor-status".substring(1)+"'></div></div>";h.SOURCE_MODE=0;h.WYSIWYG_MODE=1;p.augment(h,{init:function(b){if(g.ie)o.addClass(document.body,"ie"+g.ie);else if(g.gecko)o.addClass(document.body,"gecko");else g.webkit&&o.addClass(document.body,"webkit");var a=this,c=new n(E.replace(/\$\(tabIndex\)/,b.attr("tabIndex")));c.on("mousedown",function(j){if(g.webkit){var t=o._4e_name(j.target);
if(t=="select"||t=="option")return true}j.halt()});b.on("mousedown",function(j){j.stopPropagation()});a.editorWrap=c;a._UUID=C++;w.register(a);a.wrap=c.one(".ke-textarea-wrap");a.iframe=a.wrap.one("iframe");a.toolBarDiv=c.one(".ke-editor-tools");a.textarea=b;a.statusDiv=c.one(".ke-editor-status");a.toolBarDiv._4e_unselectable();a._commands={};a._dialogs={};var e=b._4e_style("width"),d=b._4e_style("height");if(e){c.css("width",e);b.css("width","100%")}a.textarea.css("display","none");c.insertAfter(b);
a.wrap[0].appendChild(b[0]);if(d){a.wrap.css("height",d);b.css("height","100%")}c=a.iframe;a.on("dataReady",function(){a._ready=true;h.fire("instanceCreated",{editor:a})});g.gecko?c.on("load",a._setUpIFrame,a):a._setUpIFrame();a.cfg.attachForm&&b[0].form&&a._attachForm()},_attachForm:function(){(new n(this.textarea[0].form)).on("submit",this.sync,this)},useDialog:function(b,a){var c=this,e=h.SimpleOverlay;e.loading();c.use(b,function(){var d=c.getDialog(b);a(d);e.unloading()})},addDialog:function(b,
a){this._dialogs[b]=a},getDialog:function(b){return this._dialogs[b]},addPlugin:function(b){this.ready(b)},addCommand:function(b,a){this._commands[b]=a},hasCommand:function(b){return this._commands[b]},execCommand:function(b){var a=this._commands[b],c=p.makeArray(arguments);c.shift();c.unshift(this);return a.exec.apply(a,c)},getMode:function(){return this.textarea.css("display")=="none"?h.WYSIWYG_MODE:h.SOURCE_MODE},getData:function(b){var a;a=this.getMode()==h.WYSIWYG_MODE?this.document.body.innerHTML:
this.textarea.val();if(this.htmlDataProcessor)a=b?this.htmlDataProcessor.toHtml(a,"p"):this.htmlDataProcessor.toServer(a,"p");return a},setData:function(b){var a;if(this.htmlDataProcessor)a=this.htmlDataProcessor.toDataFormat(b,"p");this.document.body.innerHTML=a;this.getMode()!=h.WYSIWYG_MODE&&this.textarea.val(b)},sync:function(){this.textarea.val(this.getData())},baseZIndex:function(b){b=b||0;return b+(this.cfg.baseZIndex||0)},_getRawData:function(){return this.document.body.innerHTML},_setRawData:function(b){this.document.body.innerHTML=
b},_prepareIFrameHtml:x,getSelection:function(){return h.Selection.getSelection(this.document)},focus:function(){var b=this.document,a=o._4e_getWin(b);g.webkit&&a&&a.parent&&a.parent.focus();a&&a.focus();b&&b.body.focus();this.notifySelectionChange()},blur:function(){o._4e_getWin(this.document).blur();this.document&&this.document.body.blur()},addCustomStyle:function(b){var a=this.cfg,c=this.document;a.customStyle=a.customStyle||"";a.customStyle+="\n"+b;a=c.createElement("style");c.getElementsByTagName("head")[0].appendChild(a);
if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(c.createTextNode(b))},_setUpIFrame:function(){function b(){j=d.document;a.document=j;c.detach();j.open("text/html","replace");j.write(e);j.close()}var a=this,c=a.iframe,e=x(a._UUID,a.cfg.customStyle),d=c[0].contentWindow,j;try{j=d.document}catch(t){c[0].src=c[0].src;if(g.ie<7){setTimeout(b,10);return}}b()},ready:function(b){this._ready?b():this.on("dataReady",b)},_monitor:function(){var b=this;b._monitorId&&clearTimeout(b._monitorId);b._monitorId=
setTimeout(function(){var a=b.getSelection();if(a&&!a.isInvalid){var c=a.getStartElement(),e=new h.ElementPath(c);if(!b.previousPath||!b.previousPath.compare(e)){b.previousPath=e;b.fire("selectionChange",{selection:a,path:e,element:c})}}},100)},notifySelectionChange:function(){this.previousPath=null;this._monitor()},insertElement:function(b,a){var c=this;c.focus();var e=b._4e_name(),d=h.XHTML_DTD,j=h.RANGE,t=h.NODE,l=d.$block[e],s=c.getSelection(),u=s&&s.getRanges(),m,f,i,q,k;if(!u||u.length==0){var y=
arguments,F=y.callee;setTimeout(function(){F.apply(c,y)},30)}else{c.fire("save");for(var v=u.length-1;v>=0;v--){m=u[v];m.deleteContents();f=!v&&b||b._4e_clone(true);a&&a(f);if(l)for(;(q=m.getCommonAncestor(false,true))&&(k=d[q._4e_name()])&&!(k&&k[e]);)if(q._4e_name()in d.span)m.splitElement(q);else if(m.checkStartOfBlock()&&m.checkEndOfBlock()){m.setStartBefore(q);m.collapse(true);q._4e_remove()}else m.splitBlock();m.insertNode(f);i||(i=f)}e=i._4e_nextSourceNode(true);d=c.document;k=h.XHTML_DTD;
if(k.$inline[f._4e_name()]){e=new n(d.createTextNode(" "));e.insertAfter(i)}else if(e){if(e._4e_name()=="br"&&k[e.parent()._4e_name()].p){k=new n("<p>&nbsp;</p>",null,d);e[0].parentNode.replaceChild(k[0],e[0]);e=k}}else{k=new n("<p>&nbsp;</p>",null,d);k.insertAfter(i);e=k}m.moveToPosition(i,j.POSITION_AFTER_END);e&&e[0].nodeType==t.NODE_ELEMENT&&m.moveToElementEditablePosition(e);s.selectRanges([m]);c.focus();f&&f._4e_scrollIntoView();setTimeout(function(){c.fire("save")},10);return f}},insertHtml:function(b){var a=
this;if(a.htmlDataProcessor)b=a.htmlDataProcessor.toDataFormat(b);if(g.webkit){var c=o.create(b,null,this.document);c=c.nodeType==11?p.makeArray(c.childNodes):[c];for(var e=0;e<c.length;e++)a.insertElement(new n(c[e]))}else{a.focus();e=(c=a.getSelection())&&c.getRanges();if(!e||e.length==0){var d=arguments,j=d.callee;setTimeout(function(){j.apply(a,d)},30)}else{a.fire("save");if(g.ie){c=c.getNative();c.type=="Control"&&c.clear();c.createRange().pasteHTML(b)}else a.document.execCommand("inserthtml",
false,b);a.focus();setTimeout(function(){a.fire("save")},10)}}}});h._initIFrame=function(b){function a(f){B(function(){d.designMode="on";setTimeout(function(){d.designMode="off";l.focus();if(!arguments.callee.retry)arguments.callee.retry=true},50)},function(){d.designMode="off";o.attr(l,"contentEditable",false);o.attr(l,"contentEditable",true);!f&&a(1)})}var c=w.getInstance(b);b=c.textarea[0];var e=c.iframe[0].contentWindow,d=c.document,j=c.cfg,t=d.getElementById("ke_actscript");o._4e_remove(t);var l=
d.body;if(g.ie){l.hideFocus=true;l.disabled=true;l.contentEditable=true;l.removeAttribute("disabled")}else setTimeout(function(){if(g.gecko||g.opera)l.contentEditable=true;else if(g.webkit)l.parentNode.contentEditable=true;else d.designMode="on"},0);if(g.webkit){r.on(d,"click",function(f){var i=new n(f.target);p.inArray(i._4e_name(),["input","select"])&&f.preventDefault()});r.on(d,"mouseup",function(f){var i=new n(f.target);p.inArray(i._4e_name(),["input","textarea"])&&f.preventDefault()})}if(g.gecko||
g.ie||g.opera){var s;s=new n(o.insertAfter((new n('<span tabindex="-1" style="position:absolute; left:-10000" role="presentation"></span>'))[0],b));s.on("focus",function(){c.focus()});c.activateGecko=function(){g.gecko&&c.iframeFocus&&s[0].focus()};c.on("destroy",function(){})}if(g.ie&&d.compatMode=="CSS1Compat"||g.gecko||g.opera){var u=new n(d.documentElement);u.on("mousedown",function(f){if(f.target==u[0]){g.gecko&&a(false);s[0].focus()}})}r.on(e,"focus",function(){if(g.gecko)a(false);else g.opera&&
l.focus();c.notifySelectionChange()});g.gecko&&r.on(c.document,"mousedown",function(){c.iframeFocus||a(false)});if(g.ie){r.on(d,"keydown",function(f){if(f.keyCode in{8:1,46:1}){var i=c.getSelection(),q=i.getSelectedElement();if(q){c.fire("save");var k=i.getRanges()[0].createBookmark();q._4e_remove();i.selectBookmarks([k]);c.fire("save");f.preventDefault()}}});if(d.compatMode=="CSS1Compat"){var m={33:1,34:1};r.on(d,"keydown",function(f){f.keyCode in m&&setTimeout(function(){c.getSelection().scrollIntoView()},
0)})}}setTimeout(function(){g.ie&&setTimeout(function(){if(d){l.runtimeStyle.marginBottom="0px";l.runtimeStyle.marginBottom=""}},1E3)},0);setTimeout(function(){c.fire("dataReady");var f=j.disableObjectResizing,i=j.disableInlineTableEditing;if(f||i)try{d.execCommand("enableObjectResizing",false,!f);d.execCommand("enableInlineTableEditing",false,!i)}catch(q){r.on(l,g.ie?"resizestart":"resize",function(k){if(f||o._4e_name(k.target)==="table"&&i)k.preventDefault()})}},10);g.webkit&&r.on(d,"mousedown",
function(f){f=new n(f.target);p.inArray(f._4e_name(),["img","hr","input","textarea","select"])&&c.getSelection().selectElement(f)});g.gecko&&r.on(d,"dragstart",function(f){var i=new n(f.target);i._4e_name()==="img"&&/ke_/.test(i[0].className)&&f.preventDefault()});w.add(c)}});
