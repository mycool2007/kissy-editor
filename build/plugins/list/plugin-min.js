KISSY.Editor.add("list",function(x){var m=KISSY.Editor,r={ol:1,ul:1},z=["ol","ul"],s=KISSY,A=m.RANGE,G=m.ElementPath,B=m.Walker,n=m.NODE,C=s.UA,o=s.Node,p=s.DOM;m.List||function(){function D(b){this.type=b}function w(b){w.superclass.constructor.call(this,b);b=this.get("editor").toolBarDiv;this.el=new u({contentCls:this.get("contentCls"),title:this.get("title"),container:b});this.listCommand=new D(this.get("type"));this.listCommand.state=this.get("status");this._init()}var q={listToArray:function(b,
h,d,j,i){if(!r[b._4e_name()])return[];j||(j=0);d||(d=[]);for(var e=0,a=b[0].childNodes.length;e<a;e++){var c=new o(b[0].childNodes[e]);if(c._4e_name()=="li"){var g={parent:b,indent:j,element:c,contents:[]};if(i)g.grandparent=i;else{g.grandparent=b.parent();if(g.grandparent&&g.grandparent._4e_name()=="li")g.grandparent=g.grandparent.parent()}h&&c._4e_setMarker(h,"listarray_index",d.length);d.push(g);for(var f=0,k=c[0].childNodes.length,l;f<k;f++){l=new o(c[0].childNodes[f]);l[0].nodeType==n.NODE_ELEMENT&&
r[l._4e_name()]?q.listToArray(l,h,d,j+1,g.grandparent):g.contents.push(l)}}}return d},arrayToList:function(b,h,d,j){d||(d=0);if(!b||b.length<d+1)return null;for(var i=b[d].parent[0].ownerDocument,e=i.createDocumentFragment(),a=null,c=d,g=Math.max(b[d].indent,0),f=null;;){var k=b[c];if(k.indent==g){if(!a||b[c].parent._4e_name()!=a._4e_name()){a=b[c].parent._4e_clone(false,true);e.appendChild(a[0])}f=a[0].appendChild(k.element._4e_clone(false,true)[0]);for(var l=0;l<k.contents.length;l++)f.appendChild(k.contents[l]._4e_clone(true,
true)[0]);c++}else if(k.indent==Math.max(g,0)+1){c=q.arrayToList(b,null,c,j);f.appendChild(c.listNode);c=c.nextIndex}else if(k.indent==-1&&!d&&k.grandparent){if(r[k.grandparent._4e_name()])f=k.element._4e_clone(false,true)[0];else if(k.grandparent._4e_name()!="td"){f=i.createElement(j);k.element._4e_copyAttributes(new o(f))}else f=i.createDocumentFragment();for(l=0;l<k.contents.length;l++){a=k.contents[l]._4e_clone(true,true);f.nodeType==n.NODE_DOCUMENT_FRAGMENT&&k.element._4e_copyAttributes(new o(a));
f.appendChild(a[0])}if(f.nodeType==n.NODE_DOCUMENT_FRAGMENT&&c!=b.length-1){f.lastChild&&f.lastChild.nodeType==n.NODE_ELEMENT&&f.lastChild.getAttribute("type")=="_moz"&&p._4e_remove(f.lastChild);p._4e_appendBogus(f)}if(f.nodeType==n.NODE_ELEMENT&&p._4e_name(f)==j&&f.firstChild){p._4e_trim(f);a=f.firstChild;if(a.nodeType==n.NODE_ELEMENT&&p._4e_isBlockBoundary(a)){a=i.createDocumentFragment();p._4e_moveChildren(f,a);f=a}}a=p._4e_name(f);if(!C.ie&&(a=="div"||a=="p"))p._4e_appendBogus(f);e.appendChild(f);
a=null;c++}else return null;if(b.length<=c||Math.max(b[c].indent,0)<g)break}if(h)for(b=new o(e.firstChild);b&&b[0];){b[0].nodeType==n.NODE_ELEMENT&&b._4e_clearMarkers(h,true);b=b._4e_nextSourceNode()}return{listNode:e,nextIndex:c}}},H=/^h[1-6]$/;D.prototype={changeListType:function(b,h,d,j){var i=q.listToArray(h.root,d),e=[];for(b=0;b<h.contents.length;b++){var a=h.contents[b];a=a._4e_ascendant("li",true);if(!(!a||!a[0]||a._4e_getData("list_item_processed"))){e.push(a);a._4e_setMarker(d,"list_item_processed",
true)}}a=new o(h.root[0].ownerDocument.createElement(this.type));for(b=0;b<e.length;b++){var c=e[b]._4e_getData("listarray_index");i[c].parent=a}d=q.arrayToList(i,d,null,"p");var g;i=d.listNode.childNodes.length;for(b=0;b<i&&(g=new o(d.listNode.childNodes[b]));b++)g._4e_name()==this.type&&j.push(g);p.insertBefore(d.listNode,h.root[0]);h.root._4e_remove()},createList:function(b,h,d){var j=h.contents;b=h.root[0].ownerDocument;var i=[];if(j.length==1&&j[0][0]===h.root[0]){var e=new o(b.createElement("div"));
j[0][0].nodeType!=n.NODE_TEXT&&j[0]._4e_moveChildren(e);j[0][0].appendChild(e[0]);j[0]=e}h=h.contents[0].parent();for(e=0;e<j.length;e++)h=h._4e_commonAncestor(j[e].parent());for(e=0;e<j.length;e++)for(var a=j[e],c;c=a.parent();){if(c[0]===h[0]){i.push(a);break}a=c}if(!(i.length<1)){j=new o(i[i.length-1][0].nextSibling);e=new o(b.createElement(this.type));for(d.push(e);i.length;){d=i.shift();a=new o(b.createElement("li"));if(H.test(d._4e_name()))a[0].appendChild(d[0]);else{d._4e_copyAttributes(a);
d._4e_moveChildren(a);d._4e_remove()}e[0].appendChild(a[0]);C.ie||a._4e_appendBogus()}j[0]?p.insertBefore(e[0],j[0]):h[0].appendChild(e[0])}},removeList:function(b,h,d){function j(l){if((f=new o(g[l?"firstChild":"lastChild"]))&&!(f[0].nodeType==n.NODE_ELEMENT&&f._4e_isBlockBoundary())&&(k=h.root[l?"_4e_previous":"_4e_next"](B.whitespaces(true)))&&!(f[0].nodeType==n.NODE_ELEMENT&&k._4e_isBlockBoundary({br:1})))p[l?"insertBefore":"insertAfter"](b.document.createElement("br"),f[0])}for(var i=q.listToArray(h.root,
d),e=[],a=0;a<h.contents.length;a++){var c=h.contents[a];c=c._4e_ascendant("li",true);if(!(!c||c._4e_getData("list_item_processed"))){e.push(c);c._4e_setMarker(d,"list_item_processed",true)}}c=null;for(a=0;a<e.length;a++){c=e[a]._4e_getData("listarray_index");i[c].indent=-1;c=c}for(a=c+1;a<i.length;a++)if(i[a].indent>Math.max(i[a-1].indent,0)){e=i[a-1].indent+1-i[a].indent;for(c=i[a].indent;i[a]&&i[a].indent>=c;){i[a].indent+=e;a++}a--}var g=q.arrayToList(i,d,null,"p").listNode,f,k;j(true);j(undefined);
p.insertBefore(g,h.root);h.root._4e_remove()},exec:function(b){var h=b.getSelection(),d=h&&h.getRanges();if(!(!d||d.length<1)){for(var j=h.createBookmarks(true),i=[],e={};d.length>0;){var a=d.shift(),c=a.getBoundaryNodes(),g=c.startNode,f=c.endNode;g[0].nodeType==n.NODE_ELEMENT&&g._4e_name()=="td"&&a.setStartAt(c.startNode,A.POSITION_AFTER_START);f[0].nodeType==n.NODE_ELEMENT&&f._4e_name()=="td"&&a.setEndAt(c.endNode,A.POSITION_BEFORE_END);a=a.createIterator();for(a.forceBrBreak=false;c=a.getNextParagraph();)if(!c._4e_getData("list_block")){c._4e_setMarker(e,
"list_block",1);f=new G(c);var k=f.elements,l=null,E=false,y=f.blockLimit,t;for(g=k.length-1;g>=0&&(t=k[g]);g--)if(r[t._4e_name()]&&y.contains(t)){y._4e_removeData("list_group_object");if(g=t._4e_getData("list_group_object"))g.contents.push(c);else{g={root:t,contents:[c]};i.push(g);t._4e_setMarker(e,"list_group_object",g)}E=true;break}if(!E){f=y||f.block;if(f._4e_getData("list_group_object"))f._4e_getData("list_group_object").contents.push(c);else{g={root:f,contents:[c]};f._4e_setMarker(e,"list_group_object",
g);i.push(g)}}}}for(d=[];i.length>0;){g=i.shift();if(this.state=="off")r[g.root._4e_name()]?this.changeListType(b,g,e,d):this.createList(b,g,d);else this.state=="on"&&r[g.root._4e_name()]&&this.removeList(b,g,e)}for(g=0;g<d.length;g++){l=d[g];var I=this;(b=function(F){var v=l[F?"_4e_previous":"_4e_next"](B.whitespaces(true));if(v&&v[0]&&v._4e_name()==I.type){v._4e_remove();v._4e_moveChildren(l,F?true:false)}})();b(true)}m.Utils.clearAllMarkers(e);h.selectBookmarks(j)}}};var u=m.TripleButton;w.ATTRS=
{editor:{},type:{},contentCls:{}};s.extend(w,s.Base,{_init:function(){var b=this.get("editor");this.el.on("offClick onClick",this._change,this);b.on("selectionChange",this._selectionChange,this);m.Utils.sourceDisable(b,this)},disable:function(){this.el.set("state",u.DISABLED)},enable:function(){this.el.set("state",u.OFF)},_change:function(){var b=this.get("editor");this.get("type");var h=this.el;b.fire("save");this.listCommand.state=h.get("state");this.listCommand.exec(b);b.fire("save");b.notifySelectionChange()},
_selectionChange:function(b){this.get("editor");var h=this.get("type"),d=b.path,j;b=this.el;var i=d.blockLimit;d=d.elements;if(i){if(d)for(var e=0;e<d.length&&(j=d[e])&&j[0]!==i[0];e++){var a=s.indexOf(d[e]._4e_name(),z);if(a!==-1)if(z[a]===h){b.set("state",u.ON);return}else break}b.set("state",u.OFF)}}});m.ListUtils=q;m.List=w}();x.addPlugin(function(){new m.List({editor:x,title:"\u9879\u76ee\u5217\u8868",contentCls:"ke-toolbar-ul",type:"ul"});new m.List({editor:x,title:"\u7f16\u53f7\u5217\u8868",contentCls:"ke-toolbar-ol",type:"ol"})})});
