KISSY.Editor.add("indent",function(l){var h=KISSY.Editor,j={ol:1,ul:1},k=KISSY,n=h.Walker,r=k.DOM,s=k.Node,y=k.UA,p=h.NODE;h.Indent||function(){function t(a){this.type=a;this.indentCssProperty="margin-left";this.indentOffset=40;this.indentUnit="px"}function u(a){return a.type=CKEDITOR.NODE_ELEMENT&&a.is("li")}function z(a,c,d){var b=c.startContainer;for(a=c.endContainer;b&&b.parent()[0]!==d[0];)b=b.parent();for(;a&&a.parent()[0]!==d[0];)a=a.parent();if(b&&a){var e=b;b=[];for(var f=false;!f;){if(e[0]===
a[0])f=true;b.push(e);e=e.next()}if(!(b.length<1)){e=d._4e_parents(true);for(a=0;a<e.length;a++)if(j[e[a]._4e_name()]){d=e[a];break}e=this.type=="indent"?1:-1;a=b[0];f=b[b.length-1];b={};var g=h.ListUtils.listToArray(d,b),A=g[f._4e_getData("listarray_index")].indent;for(a=a._4e_getData("listarray_index");a<=f._4e_getData("listarray_index");a++){g[a].indent+=e;var v=g[a].parent;g[a].parent=new s(v[0].ownerDocument.createElement(v._4e_name()))}for(a=f._4e_getData("listarray_index")+1;a<g.length&&g[a].indent>
A;a++)g[a].indent+=e;f=h.ListUtils.arrayToList(g,b,null,"p",0);e=[];if(this.type=="outdent"){var q;if((q=d.parent())&&q._4e_name()=="li"){g=f.listNode.childNodes;var i;for(a=g.length-1;a>=0;a--)if((i=new s(g[a]))&&i._4e_name()=="li")e.push(i)}}if(f){r.insertBefore(f.listNode,d[0]);d._4e_remove()}if(e&&e.length)for(a=0;a<e.length;a++){for(i=d=e[a];(i=i.next())&&i._4e_name()in j;){y.ie&&!d._4e_first(function(w){return B(w)&&C(w)})&&d[0].appendChild(c.document.createTextNode("\u00a0"));d[0].appendChild(i[0])}r.insertAfter(d[0],
q[0])}for(a in b)b[a]._4e_clearMarkers(b,true)}}}function D(a,c){c=c.createIterator();c.enforceRealBlocks=true;c.enlargeBr=true;for(var d;d=c.getNextParagraph();)x.call(this,a,d)}function x(a,c){a=parseInt(c._4e_style(this.indentCssProperty),10);if(isNaN(a))a=0;a+=(this.type=="indent"?1:-1)*this.indentOffset;if(a<0)return false;a=Math.max(a,0);a=Math.ceil(a/this.indentOffset)*this.indentOffset;c.css(this.indentCssProperty,a?a+this.indentUnit:"");c[0].style.cssText===""&&c[0].removeAttribute("style");
return true}function o(a){o.superclass.constructor.call(this,a);a=this.get("editor").toolBarDiv;this.el=new m({container:a,contentCls:this.get("contentCls"),title:this.get("title")});this.indentCommand=new t(this.get("type"));this._init()}var B=n.whitespaces(true),C=n.bookmark(false,true);k.augment(t,{exec:function(a){for(var c=a.getSelection(),d=c&&c.getRanges()[0],b=d.startContainer,e=d.endContainer,f=d.getCommonAncestor();f&&!(f[0].nodeType==p.NODE_ELEMENT&&j[f._4e_name()]);)f=f.parent();if(f&&
b[0].nodeType==p.NODE_ELEMENT&&b._4e_name()in j){b=new n(d);b.evaluator=u;d.startContainer=b.next()}if(f&&e[0].nodeType==p.NODE_ELEMENT&&e._4e_name()in j){b=new n(d);b.evaluator=u;d.endContainer=b.previous()}e=c.createBookmarks(true);if(f){for(b=f._4e_first();b&&b[0]&&b._4e_name()!="li";)b=b.next();var g=d.startContainer;(b[0]==g[0]||b._4e_contains(g))&&x.call(this,a,f)||z.call(this,a,d,f)}else D.call(this,a,d);c.selectBookmarks(e)}});var m=h.TripleButton;o.ATTRS={type:{},contentCls:{},editor:{}};
k.extend(o,k.Base,{_init:function(){var a=this.get("editor"),c=this.el;c.on("offClick",this.exec,this);this.get("type")=="outdent"?a.on("selectionChange",this._selectionChange,this):c.set("state",m.OFF)},exec:function(){var a=this.get("editor"),c=this;a.fire("save");setTimeout(function(){c.indentCommand.exec(a);a.fire("save");a.notifySelectionChange()},10)},_selectionChange:function(a){this.get("editor");this.get("type");var c=a.path,d=c.blockLimit;a=this.el;if(c.contains(j))a.set("state",m.OFF);
else(c=c.block||d)&&c._4e_style(this.indentCommand.indentCssProperty)?a.set("state",m.OFF):a.set("state",m.DISABLED)}});h.Indent=o}();l.addPlugin(function(){l.addCommand("outdent",new h.Indent({editor:l,title:"\u51cf\u5c11\u7f29\u8fdb\u91cf ",contentCls:"ke-toolbar-outdent",type:"outdent"}));l.addCommand("indent",new h.Indent({editor:l,title:"\u589e\u52a0\u7f29\u8fdb\u91cf ",contentCls:"ke-toolbar-indent",type:"indent"}))})});
