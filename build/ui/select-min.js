KISSY.Editor.add("select",function(){function i(a){i.superclass.constructor.call(this,a);this._init()}var g=KISSY,h=g.Node,k=g.Event,l=g.DOM,j=g.Editor;i.ATTRS={container:{},doc:{},value:{},width:{},title:{},items:{}};g.extend(i,g.Base,{_init:function(){var a=this.get("container"),b=new h("<a href='#' class='ke-select'><span class='ke-select-text'></span><span class='ke-select-drop'></span></a>"),c=this.get("title"),d=b.one(".ke-select-text");b.one(".ke-select-drop");d.html(c);d.css("width",this.get("width"));
b._4e_unselectable();b.attr("title",c);b.appendTo(a);b.on("click",this._click,this);this.el=b;this.title=d;j.Utils.lazyRun(this,"_prepare","_real");this.on("afterValueChange",this._valueChange,this)},_valueChange:function(a){a=a.newVal;for(var b=this.get("title"),c=this.get("items"),d=0;d<c.length;d++){var e=c[d];if(e.value==a){b=e.name;break}}this.title.html(b)},_prepare:function(){var a=this.el,b=new h("<div class='ke-menu' onmousedown='return false;'></div>"),c=new j.SimpleOverlay({el:b,focusMgr:false}),
d=this.get("items");this.get("title")&&(new h("<div class='ke-menu-title ke-select-menu-item' style='margin-top:-6px;' >"+this.get("title")+"</div>")).appendTo(b);for(var e=0;e<d.length;e++){var f=d[e];f=new h("<a class='ke-select-menu-item' href='#' data-value='"+f.value+"'>"+f.name+"</a>",f.attrs);f._4e_unselectable();f.appendTo(b)}this.get("popUpWidth")&&b.css("width",this.get("popUpWidth"));b.appendTo(document.body);this.menu=c;c.on("show",function(){a.addClass("ke-select-active")});c.on("hide",
function(){a.removeClass("ke-select-active")});k.on([document,this.get("doc")],"click",function(m){a._4e_contains(m.target)||c.hide()});b.on("click",this._select,this);var n=this.as=b.all("a");k.on(b[0],"mouseenter",function(){n.removeClass("ke-menu-selected")})},_select:function(a){a.halt();var b=this.menu,c=b.el;if(a=(new h(a.target))._4e_ascendant(function(f){return c._4e_contains(f)&&f._4e_name()=="a"},true)){var d=this.get("value"),e=a.attr("data-value");this.set("value",e);this.fire("click",
{newVal:e,preVal:d,name:a.html()});b.hide()}},_real:function(){var a=this.el.offset();a.top+=this.el.height()+8;a.left+=1;if(a.left+this.menu.el.width()>l.viewportWidth()-60)a.left=l.viewportWidth()-this.menu.el.width()-60;this.menu.show(a)},_click:function(a){a.preventDefault();var b=this.get("value");this._prepare();b&&this.menu&&this.as.each(function(c){c.attr("data-value")==b?c.addClass("ke-menu-selected"):c.removeClass("ke-menu-selected")})}});j.Select=i});
