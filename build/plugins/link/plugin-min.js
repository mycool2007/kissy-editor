KISSY.Editor.add("link",function(h){var e=KISSY.Editor,g=KISSY,n=g.DOM,i=g.Event,o=e.TripleButton,j=e.Style,k=g.Node,p=e.Range,l=e.SimpleOverlay;e.Link||function(){function c(a){this.editor=a;this._init()}var m={element:"a",attributes:{href:"#(href)",target:"#(target)"}};c.init=function(){var a=this;a.d=new l({title:"\u4fee\u6539\u94fe\u63a5",mask:true,width:"300px"});a.d.body.html(q);a.d.foot.html(r);a.urlEl=a.d.body.one(".ke-link-url");a.targetEl=a.d.body.one(".ke-link-blank");var b=a.d.foot.one(".ke-link-cancel");
a.ok=a.d.foot.one(".ke-link-ok");c.ok.on("click",function(d){c.d.link._link();d.halt()},this);b.on("click",function(d){a.d.hide();d.halt()},a);c.init=null};c.tip=function(){var a=this,b=new k('<div class="ke-bubbleview-bubble" onmousedown="return false;">\u524d\u5f80\u94fe\u63a5\ufffd? <a href=""  target="_blank" class="ke-bubbleview-url"></a> -     <span class="ke-bubbleview-link ke-bubbleview-change">\u7f16\u8f91</span> -     <span class="ke-bubbleview-link ke-bubbleview-remove">\u53bb\u9664</span></div>');
b._4e_unselectable();a.tipwin=new l({el:b,focusMgr:false});document.body.appendChild(b[0]);a.tipurl=b.one(".ke-bubbleview-url");var d=b.one(".ke-bubbleview-change");b=b.one(".ke-bubbleview-remove");d.on("click",function(f){c.tipwin.link.show();f.halt()});i.on(document,"click",function(){a.tipwin.hide()});b.on("click",function(f){c.tipwin.link._removeLink();f.halt()});c.tip=null};var q="<div><p><label><span style='color:#0066CC;font-weight:bold;'>\u7f51\u5740\ufffd?/span><input class='ke-link-url' style='width:230px' value='http://'/></label></p><p style='margin-top: 5px;padding-left:45px'><label><input class='ke-link-blank' type='checkbox'/> &nbsp; \u5728\u65b0\u7a97\u53e3\u6253\u5f00\u94fe\u63a5</label></p></div>",
r="<button class='ke-link-ok'>\u786e\u5b9a</button> <button class='ke-link-cancel'>\u53d6\u6d88</button>";g.augment(c,{_init:function(){var a=this.editor;this.el=new o({container:a.toolBarDiv,contentCls:"ke-toolbar-link",title:"\u7f16\u8f91\u8d85\u94fe\ufffd?"});this.el.on("click",this.show,this);a.on("selectionChange",this._selectionChange,this)},_prepareTip:function(){c.tip&&c.tip()},_realTip:function(a){var b=a._4e_getOffset(document);b.top+=a.height()+5;c.tipwin.show(b);this._a=a;c.tipwin.link=
this;c.tipurl.html(a.attr("href"));c.tipurl.attr("href",a.attr("href"))},_showTip:function(a){this._prepareTip(a)},_hideTip:function(){c.tipwin&&c.tipwin.hide()},_removeLink:function(){var a=this._a,b=this.editor;b.focus();var d={href:a.attr("href")};if(a._4e_hasAttribute("target"))d.target=a.attr("target");a=new j(m,d);b.fire("save");a.remove(b.document);b.fire("save");b.focus();b.notifySelectionChange()},_selectionChange:function(a){a=a.path;var b=a.elements;if(a&&b)if(a=a.lastElement)(a=a._4e_ascendant(function(d){return d._4e_name()===
"a"&&!!d.attr("href")},true))?this._showTip(a):this._hideTip()},hide:function(){c.d.hide()},_getSelectedLink:function(){var a=this.editor;if(c.tipwin&&c.tipwin.get("visible")){(a=a.getSelection().getRanges()[0].getCommonAncestor())&&(a=a._4e_ascendant(function(b){return b._4e_name()=="a"&&!!b.attr("href")},true));if(a&&a[0]==c.tipwin.link._a[0])return a}},_link:function(){var a,b=this.editor,d=c.urlEl.val();b.focus();if(g.trim(d)){var f=this._getSelectedLink();if(f){a=new p(b.document);a.selectNodeContents(f);
b.getSelection().selectRanges([a]);this._removeLink()}f={href:d};f.target=c.targetEl[0].checked?"_blank":"_self";a=b.getSelection().getRanges()[0];if(a.collapsed){a=new k("<a href='"+d+"' target='"+f.target+"'>"+d+"</a>",null,b.document);b.insertElement(a)}else{b.fire("save");(new j(m,f)).apply(b.document);b.fire("save")}this.hide();b.focus();b.notifySelectionChange()}},_prepare:function(){c.init&&c.init()},_real:function(){c.d.link=this;var a=this._getSelectedLink();if(a){c.urlEl.val(a.attr("href"));
c.targetEl[0].checked=a.attr("target")=="_blank"}c.d.show()},show:function(){this._prepare()}});e.Utils.lazyRun(c.prototype,"_prepare","_real");e.Utils.lazyRun(c.prototype,"_prepareTip","_realTip");e.Link=c}();h.addPlugin(function(){new e.Link(h);var c=n._4e_getWin(h.document);i.on(c,"scroll",function(){e.Link.tipwin&&e.Link.tipwin.hide()})})});
