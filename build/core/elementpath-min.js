KISSY.Editor.add("elementpath",function(f){function h(a){var c=null,d=null,i=[];for(a=a;a&&a[0];){if(a[0].nodeType==j.NODE_ELEMENT){if(!this.lastElement)this.lastElement=a;var e=a._4e_name();if(m.ie&&a[0].scopeName!="HTML")e=a[0].scopeName.toLowerCase()+":"+e;if(!d){if(!c&&n[e])c=a;if(o[e]){var b;if(b=!c){if(b=e=="div"){a:{b=a;b=b[0]||b;b=b.childNodes;for(var g=0,p=b.length;g<p;g++){var k=b[g];if(k.nodeType==j.NODE_ELEMENT&&q.$block[k.nodeName.toLowerCase()]){b=true;break a}}b=false}b=!b}b=b}if(b)c=
a;else d=a}}i.push(a);if(e=="body")break}a=a.parent()}this.block=c;this.blockLimit=d;this.elements=i}var l=KISSY,r=l.DOM,q=f.XHTML_DTD,j=f.NODE,m=l.UA,n={address:1,blockquote:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,li:1,dt:1,dd:1},o={body:1,div:1,table:1,tbody:1,tr:1,td:1,th:1,caption:1,form:1};h.prototype={compare:function(a){var c=this.elements;a=a&&a.elements;if(!a||c.length!=a.length)return false;for(var d=0;d<c.length;d++)if(!r._4e_equals(c[d],a[d]))return false;return true},contains:function(a){for(var c=
this.elements,d=0;d<c.length;d++)if(c[d]._4e_name()in a)return c[d];return null}};f.ElementPath=h});
