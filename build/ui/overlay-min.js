KISSY.Editor.add("overlay",function(){function d(){var a=this;d.superclass.constructor.apply(a,arguments);a._init();if(i.UA.ie===6){a.on("show",function(){var b=a.get("el"),c=parseInt(b.css("width"));b=b[0].offsetHeight;e&&e.css({width:c+"px",height:b+"px"});e&&e.offset(a.get("el").offset())});a.on("hide",function(){e&&e.offset({left:-999,top:-999})})}if(a.get("mask")){a.on("show",function(){f&&f.css({left:"0px",top:"0px"});g&&g.css({left:"0px",top:"0px"})});a.on("hide",function(){f&&f.css({left:"-9999px",
top:"-9999px"});g&&g.css({left:"-9999px",top:"-9999px"})})}a.hide()}var k=KISSY.Editor,i=KISSY,l=k.focusManager,j=i.Node,h=i.DOM,f,g,e;d.init=function(){var a=document.body;f=new j('<div class="ke-mask">&nbsp;</div>');f.css({left:"-9999px",top:"-9999px"});f.css({width:"100%",height:h.docHeight()+"px",opacity:0.4});f.appendTo(a);if(i.UA.ie==6){e=new j("<iframe class='ke-dialog-iframe'></iframe>");a.appendChild(e[0]);g=new j("<iframe class='ke-mask'></iframe>");g.css({left:"-9999px",top:"-9999px"});
g.css({width:"100%",height:h.docHeight()+"px",opacity:0.4});g.appendTo(a)}d.init=null};d.ATTRS={title:{value:""},width:{value:"450px"},visible:{value:true},focusMgr:{value:true},mask:{value:false}};i.extend(d,i.Base,{_init:function(){var a=this,b=a.get("el");a.on("afterVisibleChange",function(c){if(c=c.newVal){typeof c=="boolean"?a.center():b.offset(c);a.fire("show")}else{b.css({left:"-9999px",top:"-9999px"});a.fire("hide")}});a.get("focusMgr")&&a.on("beforeVisibleChange",a._editorFocusMg,a);if(b){b[0].appendChild((new j("<a href='#' class='ke-focus' style='width:0;height:0;outline:none;font-size:0;'></a>"))[0]);
a.el=b}else{b=new j("<div class='ke-dialog' style='width:"+a.get("width")+"'><div class='ke-hd'><span class='ke-hd-title'>"+a.get("title")+"</span><span class='ke-hd-x'><a class='ke-close' href='#'>X</a></span></div><div class='ke-bd'></div><div class='ke-ft'></div><a href='#' class='ke-focus'></a></div>");document.body.appendChild(b[0]);a.set("el",b);a.el=b;a.body=b.one(".ke-bd");a.foot=b.one(".ke-ft");a._close=b.one(".ke-close");a._title=b.one(".ke-hd-title").one("h1");a._close.on("click",function(c){c.preventDefault();
a.hide()})}},center:function(){var a=this.get("el"),b=parseInt(a.css("width")),c=a[0].offsetHeight,m=h.viewportWidth(),n=h.viewportHeight();b=(m-b)/2+h.scrollLeft();c=(n-c)/2+h.scrollTop();if(c-h.scrollTop()>200)c-=150;a.css({left:b+"px",top:c+"px"})},_prepareShow:function(){d.init()},_getFocusEl:function(){if(this._focusEl)return this._focusEl;return this._focusEl=this.el.one(".ke-focus")[0]},_editorFocusMg:function(a){if(a.newVal){this._focusEditor=l.currentInstance();this._getFocusEl().focus()}else this._focusEditor&&
this._focusEditor.focus()},_realShow:function(a){this.get("el");this.set("visible",a||true)},show:function(a){this._prepareShow(a)},hide:function(){this.get("el");this.set("visible",false)}});k.Utils.lazyRun(d.prototype,"_prepareShow","_realShow");k.SimpleOverlay=d});