KISSY.Editor.add("walker",function(p){function j(e,c){if(this._.end)return null;var a,b=this.range,f,k=this.guard,l=this.type,q=e?"_4e_previousSourceNode":"_4e_nextSourceNode";if(!this._.start){this._.start=1;b.trim();if(b.collapsed){this.end();return null}}if(!e&&!this._.guardLTR){var r=b.endContainer,s=new m(r[0].childNodes[b.endOffset]);this._.guardLTR=function(d,g){return(d=n._4e_wrap(d))&&d[0]&&(!g||!n._4e_equals(r,d))&&(!s[0]||!d._4e_equals(s))&&(d[0].nodeType!=i.NODE_ELEMENT||!g||d._4e_name()!=
"body")}}if(e&&!this._.guardRTL){var t=b.startContainer,u=b.startOffset>0&&new m(t[0].childNodes[b.startOffset-1]);this._.guardRTL=function(d,g){return(d=n._4e_wrap(d))&&d[0]&&(!g||!d._4e_equals(t))&&(!u[0]||!d._4e_equals(u))&&(d[0].nodeType!=i.NODE_ELEMENT||!g||d._4e_name()!="body")}}var v=e?this._.guardRTL:this._.guardLTR;f=k?function(d,g){if(v(d,g)===false)return false;return k(d,g)}:v;if(this.current)a=this.current[q](false,l,f);else if(e){a=b.endContainer;if(b.endOffset>0){a=new m(a[0].childNodes[b.endOffset-
1]);if(f(a)===false)a=null}else a=f(a,true)===false?null:a._4e_previousSourceNode(true,l,f)}else{a=b.startContainer;if((a=new m(a[0].childNodes[b.startOffset]))&&a[0]){if(f(a)===false)a=null}else a=f(b.startContainer,true)===false?null:b.startContainer._4e_nextSourceNode(true,l,f)}for(;a&&a[0]&&!this._.end;){this.current=a;if(!this.evaluator||this.evaluator(a)!==false){if(!c)return a}else if(c&&this.evaluator)return false;a=a[q](false,l,f)}this.end();return this.current=null}function w(e){for(var c,
a=null;c=j.call(this,e);)a=c;return a}function h(e){this.range=e;this._={}}var o=KISSY,i=p.NODE,n=o.DOM,m=o.Node;o.augment(h,{end:function(){this._.end=1},next:function(){return j.call(this)},previous:function(){return j.call(this,true)},checkForward:function(){return j.call(this,false,true)!==false},checkBackward:function(){return j.call(this,true,true)!==false},lastForward:function(){return w.call(this)},lastBackward:function(){return w.call(this,true)},reset:function(){delete this.current;this._=
{}}});h.blockBoundary=function(e){return function(c){c=n._4e_wrap(c);return!(c&&c[0].nodeType==i.NODE_ELEMENT&&c._4e_isBlockBoundary(e))}};h.listItemBoundary=function(){return this.blockBoundary({br:1})};h.bookmark=function(e,c){function a(b){return b&&b[0]&&b._4e_name()=="span"&&b.attr("_ke_bookmark")}return function(b){var f,k;f=b&&b[0]&&b[0].nodeType==i.NODE_TEXT&&(k=b.parent())&&a(k);f=e?f:f||a(b);return c^f}};h.whitespaces=function(e){return function(c){c=(c=c[0]||c)&&c.nodeType==i.NODE_TEXT&&
!o.trim(c.nodeValue);return e^c}};h.invisible=function(e){var c=h.whitespaces();return function(a){a=c(a)||a[0].nodeType==i.NODE_ELEMENT&&!a[0].offsetHeight;return e^a}};p.Walker=h});
