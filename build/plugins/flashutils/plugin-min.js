KISSY.Editor.add("flashutils",function(){var i=KISSY,p=i.Editor,n=p.Utils.flash;if(!n){var g=i.DOM,q=i.Node,s=i.UA;n={getUrl:function(b){var c="",d=p.NODE;if(b._4e_name()=="object"){b=b[0].childNodes;for(var a=0;a<b.length;a++)if(b[a].nodeType==d.NODE_ELEMENT)if((g.attr(b[a],"name")||"").toLowerCase()=="movie")c=g.attr(b[a],"value");else if(g._4e_name(b[a])=="embed")c=g.attr(b[a],"src");else if(g._4e_name(b[a])=="object")c=g.attr(b[a],"data")}else if(b._4e_name()=="embed")c=b.attr("src");return c},
createSWF:function(b,c,d){var a=c.attrs||{},h=c.flashVars,j="",m="";c=c.params||{};var e="";d=d||document;i.mix(a,{wmode:"transparent"});for(var f in a)if(a.hasOwnProperty(f))j+=f+"='"+a[f]+"' ";i.mix(c,{quality:"high",movie:b,wmode:"transparent"});for(var k in c)if(c.hasOwnProperty(k))m+="<param name='"+k+"' value='"+c[k]+"'/>";if(h){for(var l in h)if(h.hasOwnProperty(l))e+="&"+l+"="+encodeURIComponent(h[l]);e=e.substring(1)}b="<object "+j+' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" >'+
m+(e?'<param name="flashVars" value="'+e+'"/>':"")+"<embed "+j+" "+(e?'FlashVars="'+e+'"':"")+' pluginspage="http://www.macromedia.com/go/getflashplayer"  quality="high"  src="'+b+'"  type="application/x-shockwave-flash"/></object>';return{el:new q(b,null,d),html:b}},createSWFRuntime2:function(b,c,d){d=d||document;var a=(new q("<div style='width:0;height:0;overflow:hidden;'>",null,d)).appendTo(d.body);a=n.createSWF.apply(this,arguments).el.appendTo(a);s.ie||(a=a.one("object"));return a[0]},createSWFRuntime:function(b,
c,d){var a=c.attrs||{},h=c.flashVars||{},j=c.params||{},m="",e="",f="";d=d||document;a.id=a.id||i.guid("ke-runtimeflash-");for(var k in a)if(a.hasOwnProperty(k))m+=k+"='"+a[k]+"' ";for(var l in j)if(j.hasOwnProperty(l))e+="<param name='"+l+"' value='"+j[l]+"'/>";for(var r in h)if(h.hasOwnProperty(r))f+="&"+r+"="+encodeURIComponent(h[r]);f=f.substring(1);b=s.ie?"<object "+m+' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" >'+e+'<param name="movie" value="'+b+'" />'+(f?'<param name="flashVars" value="'+
f+'" />':"")+"</object>":"<object type='application/x-shockwave-flash' data='"+b+"' "+m+">"+e+(f?'<param name="flashVars" value="'+f+'"/>':"")+"</object>";var o=c.holder;if(!o){o=(new q("<div style='"+(c.style?c.style:"width:1px;height:1px;position:absolute;"+ +"overflow:hidden;")+"'>",null,d)).appendTo(d.body);setTimeout(function(){o.offset({left:g.scrollLeft(),top:g.scrollTop()})},100)}o.html(b);return d.getElementById(a.id)}};p.Utils.flash=n}});
