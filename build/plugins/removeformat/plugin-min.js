KISSY.Editor.add("removeformat",function(l){function m(b){this.editor=b;this._init()}function s(b,c){for(var d=0;d<c.length;d++)b.removeAttr(c[d])}var g=KISSY.Editor,t=KISSY,u=g.RANGE,v=g.ElementPath,n=g.NODE,w=g.TripleButton,i="b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var,s",x="class,style,lang,width,height,align,hspace,valign".split(",");i=new RegExp("^(?:"+i.replace(/,/g,"|")+")$","i");t.augment(m,{_init:function(){this.el=new w({title:"\u6e05\u9664\u683c\u5f0f",
contentCls:"ke-toolbar-removeformat",container:this.editor.toolBarDiv});this.el.on("offClick",this._remove,this)},_remove:function(){var b=this.editor,c=i;c.lastIndex=0;var d=b.getSelection().getRanges();b.fire("save");for(var o=0,e;e=d[o];o++)if(!e.collapsed){e.enlarge(u.ENLARGE_ELEMENT);var j=e.createBookmark(),a=j.startNode,p=j.endNode,h=function(q){for(var k=new v(q),y=k.elements,r=1,f;f=y[r];r++){if(f._4e_equals(k.block)||f._4e_equals(k.blockLimit))break;c.test(f._4e_name())&&q._4e_breakParent(f)}};
h(a);h(p);for(a=a._4e_nextSourceNode(true,n.NODE_ELEMENT);a;){if(a._4e_equals(p))break;h=a._4e_nextSourceNode(false,n.NODE_ELEMENT);a._4e_name()=="img"&&a.attr("_cke_realelement")||(c.test(a._4e_name())?a._4e_remove(true):s(a,x));a=h}e.moveToBookmark(j)}b.getSelection().selectRanges(d);b.fire("save")}});l.addPlugin(function(){new m(l)})});
