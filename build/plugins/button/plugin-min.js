KISSY.Editor.add("button",function(){function b(a){b.superclass.constructor.call(this,a);this._init()}var f=KISSY.Editor,d=KISSY,j=d.Node;if(!f.TripleButton){b.ON="on";b.OFF="off";b.DISABLED="disabled";b.ON_CLASS="ke-triplebutton-on";b.OFF_CLASS="ke-triplebutton-off";b.DISABLED_CLASS="ke-triplebutton-disabled";b.ATTRS={state:{value:"off"},container:{},text:{},contentCls:{},cls:{},el:{}};d.extend(b,d.Base,{_init:function(){var a=this.get("container"),e=this.get("el"),g=this.get("title"),h=this.get("text"),
i=this.get("contentCls"),c=this.el=new j("<a class='ke-triplebutton ke-triplebutton-off' href='#' role=\"button\"></a>");c._4e_unselectable();this._attachCls();if(h)c.html(h);else if(i){c.html("<span class='ke-toolbar-item "+i+"'></span>");c.one("span")._4e_unselectable()}g&&c.attr("title",g);if(e)e[0].parentNode.replaceChild(c[0],e[0]);else a&&a.append(this.el);c.on("click",this._action,this);this.on("afterStateChange",this._stateChange,this)},_attachCls:function(){var a=this.get("cls");a&&this.el.addClass(a)},
_stateChange:function(a){this["_"+a.newVal]();this._attachCls()},disable:function(){this._savedState=this.get("state");this.set("state","disabled")},enable:function(){this.get("state")=="disabled"&&this.set("state",this._savedState)},_action:function(a){this.fire(this.get("state")+"Click",a);this.fire("click",a);a.preventDefault()},bon:function(){this.set("state","on")},boff:function(){this.set("state","off")},_on:function(){this.el[0].className="ke-triplebutton ke-triplebutton-on"},_off:function(){this.el[0].className=
"ke-triplebutton ke-triplebutton-off"},_disabled:function(){this.el[0].className="ke-triplebutton ke-triplebutton-disabled"}});f.TripleButton=b}});
