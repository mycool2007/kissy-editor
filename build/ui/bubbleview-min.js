KISSY.Editor.add("bubbleview",function(){function d(a){d.superclass.constructor.apply(this,arguments);a.init&&a.init.call(this)}function k(a){a=f[a];if(!a.bubble)a.bubble=new d(a.cfg);return a.bubble}var i=KISSY.Editor,g=KISSY,j=g.Event,l=g.DOM,m=g.Node,f={};d.attach=function(a){var e=a.pluginInstance,h=a.pluginName;a=e.editor;var n=f[h].cfg.func,b=f[h].bubble;a.on("selectionChange",function(c){c=c.path;var o=c.elements;if(c&&o)if(c=c.lastElement)if(c=n(c)){b=k(h);b._selectedEl=c;b._plugin=e;b.show()}else if(b){b._selectedEl=
b._plugin=null;b.hide()}});j.on(a.document,"scroll",function(){b&&b.hide()});j.on(l._4e_getWin(a.document),"blur",function(){b&&b.hide()})};d.register=function(a){f[a.pluginName]={cfg:a}};d.ATTRS={focusMgr:{value:false}};g.extend(d,i.SimpleOverlay,{_initEl:function(){var a=new m('<div class="ke-bubbleview-bubble" onmousedown="return false;"></div>');a.appendTo(document.body);this.el=a;this.set("el",a)},show:function(){var a=this._selectedEl,e=a._4e_getOffset(document);e.top+=a.height()+5;d.superclass.show.call(this,
e)}});i.BubbleView=d});
