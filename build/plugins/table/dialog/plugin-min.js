KISSY.Editor.add("table/dialog",function(l){var i=KISSY,h=i.Editor,q=i.Node,r=i.DOM,s=i.UA,f=i.trim,j=h.TableUI,k=j.showBorderClassName,t=h.SimpleOverlay;j.Dialog||function(){function e(b){return f(b).length!=0}function m(b){this.editor=b;h.Utils.lazyRun(this,"_prepareTableShow","_realTableShow")}j.Dialog=m;i.augment(m,{_tableInit:function(){var b=this,a=new t({width:"430px",mask:true,title:"\u8868\u683c"});a.body.html("<div style='padding:20px 20px 10px 20px;'><table class='ke-table-config' style='width:100%'><tr><td><label>\u884c\u6570\uff1a <input  data-verify='^(?!0$)\\d+$'  data-warning='\u884c\u6570\u8bf7\u8f93\u5165\u6b63\u6574\u6570'  value='2'  class='ke-table-rows ke-table-create-only ke-input' style='margin-left:2px;vertical-align:middle;' size='6' /></label></td><td><label>\u5bbd&nbsp;&nbsp;&nbsp;\u5ea6\uff1a <input  data-verify='^(?!0$)\\d+$'  data-warning='\u5bbd\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' value='200' style='margin-left:2px;vertical-align:middle;' class='ke-table-width ke-input' size='6'/></label> <select class='ke-table-width-unit'><option value='px'>\u50cf\u7d20</option><option value='%'>\u767e\u5206\u6bd4</option></select></td></tr><tr><td><label>\u5217\u6570\uff1a <input  data-verify='^(?!0$)\\d+$'  data-warning='\u5217\u6570\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-table-cols ke-table-create-only ke-input' style='margin-left:2px;vertical-align:middle;'value='3' size='6'/></label></td><td><label>\u9ad8&nbsp;&nbsp;&nbsp;\u5ea6\uff1a <input  data-verify='^((?!0$)\\d+)?$'  data-warning='\u9ad8\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' value='' style='margin-left:2px;vertical-align:middle;'class='ke-table-height ke-input' size='6'/></label> &nbsp;\u50cf\u7d20</td></tr><tr><td><label>\u5bf9\u9f50\uff1a <select class='ke-table-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option><option value='center'>\u4e2d\u95f4\u5bf9\u9f50</option></select></label></td><td><label>\u6807\u9898\u683c\uff1a <select class='ke-table-head ke-table-create-only'><option value=''>\u65e0</option><option value='1'>\u6709</option></select></td></tr><tr><td><label>\u8fb9\u6846\uff1a <input  data-verify='^\\d+$'  data-warning='\u8fb9\u6846\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' value='1' style='margin-left:2px;vertical-align:middle;'class='ke-table-border ke-input' size='6'/></label> &nbsp;\u50cf\u7d20</td><td></td></tr><tr><td colspan='2'><label>\u6807\u9898\uff1a <input class='ke-table-caption ke-input' style='width:320px;margin-left:2px;vertical-align:middle;'></label></td></tr></table></div>");
a.foot.html("<a class='ke-table-ok ke-button' style='margin-right:20px;'>\u786e\u5b9a</a> <a class='ke-table-cancel ke-button'>\u53d6\u6d88</a>");var c=a.body;a.twidth=c.one(".ke-table-width");a.theight=c.one(".ke-table-height");a.tborder=c.one(".ke-table-border");a.tcaption=c.one(".ke-table-caption");a.talign=h.Select.decorate(c.one(".ke-table-align"));a.trows=c.one(".ke-table-rows");a.tcols=c.one(".ke-table-cols");a.thead=h.Select.decorate(c.one(".ke-table-head"));var d=a.foot.one(".ke-table-ok"),g=a.foot.one(".ke-table-cancel");
a.twidthunit=h.Select.decorate(c.one(".ke-table-width-unit"));b.tableDialog=a;d.on("click",b._tableOk,b);a.on("hide",function(){b.selectedTable=null});g.on("click",function(){a.hide()})},_tableOk:function(){var b=this.tableDialog,a=b.el.all("input");if(b.twidthunit.val()=="%"){b=parseInt(b.twidth.val());if(!b||b>100||b<0){alert("\u5bbd\u5ea6\u767e\u5206\u6bd4\uff1a\u8bf7\u8f93\u51651-100\u4e4b\u95f4");return}}if(h.Utils.verifyInputs(a))this.selectedTable?this._modifyTable():this._genTable()},_modifyTable:function(){var b=this.tableDialog,a=this.selectedTable,
c=a.one("caption"),d=b.talign.val(),g=b.tborder.val();e(d)?a.attr("align",f(d)):a.removeAttr("align");e(g)?a.attr("border",f(g)):a.removeAttr("border");!e(g)||g=="0"?a.addClass(k):a.removeClass(k);e(b.twidth.val())?a.css("width",f(b.twidth.val())+b.twidthunit.val()):a.css("width","");e(b.theight.val())?a.css("height",f(b.theight.val())):a.css("height","");if(e(b.tcaption.val())){d=h.Utils.htmlEncode(f(b.tcaption.val()));if(c&&c[0])c.html(d);else{a=a[0].createCaption();r.html(a,"<span>"+d+"</span>")}}else c&&
c._4e_remove();b.hide()},_genTable:function(){var b=this.tableDialog,a="<table ",c,d=parseInt(b.tcols.val())||1,g=parseInt(b.trows.val())||1,n=s.ie?"":"<br/>",o=this.editor;if(e(b.talign.val()))a+="align='"+f(b.talign.val())+"' ";if(e(b.tborder.val()))a+="border='"+f(b.tborder.val())+"' ";if(e(b.twidth.val())||e(b.theight.val())){a+="style='";if(e(b.twidth.val()))a+="width:"+f(b.twidth.val())+b.twidthunit.val()+";";if(e(b.theight.val()))a+="height:"+f(b.theight.val())+"px;";a+="' "}if(!e(b.tborder.val())||
f(b.tborder.val())=="0")a+="class='"+k+"' ";a+=">";if(e(b.tcaption.val()))a+="<caption><span>"+h.Utils.htmlEncode(f(b.tcaption.val()))+"</span></caption>";if(b.thead.val()){a+="<thead>";a+="<tr>";for(c=0;c<d;c++)a+="<th>"+n+"</th>";a+="</tr>";a+="</thead>";g-=1}a+="<tbody>";for(var p=0;p<g;p++){a+="<tr>";for(c=0;c<d;c++)a+="<td>"+n+"</td>";a+="</tr>"}a+="</tbody>";a+="</table>";a=new q(a,null,o.document);o.insertElement(a);b.hide()},_fillTableDialog:function(){var b=this.tableDialog,a=this.selectedTable,
c=a.one("caption");b.talign.val(a.attr("align")||"");b.tborder.val(a.attr("border")||"0");var d=a._4e_style("width")||""+a.width();b.twidth.val(d.replace(/px|%|(.*pt)/i,""));d.indexOf("%")!=-1?b.twidthunit.val("%"):b.twidthunit.val("px");b.theight.val((a._4e_style("height")||"").replace(/px|%/i,""));d="";if(c)d=c.text();b.tcaption.val(d);c=a._4e_first(function(g){return g._4e_name()=="thead"});b.trows.val(a.one("tbody").children().length+(c?c.children("tr").length:0));b.tcols.val(a.one("tr").children().length);
b.thead.val(c?"1":"")},_realTableShow:function(){var b=this.tableDialog;if(this.selectedTable){this._fillTableDialog();b.body.all(".ke-table-create-only").attr("disabled","disabled");b.thead.disable()}else{b.body.all(".ke-table-create-only").removeAttr("disabled");b.thead.enable()}this.tableDialog.show()},_prepareTableShow:function(){this._tableInit()},show:function(b){this.selectedTable=b;this._prepareTableShow()}})}();l.addDialog("table/dialog",new j.Dialog(l))});
