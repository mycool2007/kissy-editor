/**
 * select component for kissy editor
 * @author:yiminghe@gmail.com
 */
KISSY.Editor.add("select", function() {
    var S = KISSY,
        UA = S.UA,
        Node = S.Node,
        Event = S.Event,
        DOM = S.DOM,
        KE = S.Editor,
        TITLE = "title",
        ke_select_active = "ke-select-active",
        ke_menu_selected = "ke-menu-selected",
        markup = "<span class='ke-select-wrap'>" +
            "<a onclick='return false;' class='ke-select'>" +
            "<span class='ke-select-text'><span class='ke-select-text-inner'></span></span>" +
            "<span class='ke-select-drop-wrap'>" +
            "<span class='ke-select-drop'></span>" +
            "</span>" +
            "</a></span>",
        menu_markup = "<div onmousedown='return false;'>" +
            "</div>";

    if (KE.Select) return;
    function Select(cfg) {
        var self = this;
        Select.superclass.constructor.call(self, cfg);
        self._init();
    }

    var DISABLED_CLASS = "ke-select-disabled",
        ENABLED = 1,
        DISABLED = 0;
    Select.DISABLED = DISABLED;
    Select.ENABLED = ENABLED;
    var dtd = KE.XHTML_DTD;

    Select.ATTRS = {
        //title标题栏显示值value还是name
        //默认false，显示name
        showValue:{},
        el:{},
        cls:{},
        container:{},
        doc:{},
        value:{},
        width:{},
        title:{},
        items:{},
        //下拉框优先和select左左对齐，上下对齐
        //可以改作右右对齐，下上对齐
        align:{value:["l","b"]},
        menuContainer:{
            valueFn:function() {
                //chrome 需要添加在能够真正包含div的地方
                var c = this.el.parent();
                while (c) {
                    var n = c._4e_name();
                    if (dtd[n] && dtd[n]["div"])
                        return c;
                    c = c.parent();
                }
                return new Node(document.body);
            }
        },
        state:{value:ENABLED}
    };
    Select.decorate = function(el) {
        var width = el.width() ,
            items = [],
            options = el.all("option");
        for (var i = 0; i < options.length; i++) {
            var opt = options[i];
            items.push({
                name:DOM.html(opt),
                value:DOM.attr(opt, "value")
            });
        }
        return new Select({
            width:width + "px",
            el:el,
            items:items,
            cls:"ke-combox",
            value:el.val()
        });

    };

    S.extend(Select, S.Base, {
        _init:function() {
            var self = this,
                container = self.get("container"),
                fakeEl = self.get("el"),
                el = new Node(markup),
                title = self.get(TITLE) || "",
                cls = self.get("cls"),
                text = el.one(".ke-select-text"),
                innerText = el.one(".ke-select-text-inner"),
                drop = el.one(".ke-select-drop");

            if (self.get("value") !== undefined) {
                innerText.html(self._findNameByV(self.get("value")));
            } else {
                innerText.html(title);
            }

            text.css("width", self.get("width"));
            //ie6,7 不失去焦点
            el._4e_unselectable();
            if (title)el.attr(TITLE, title);
            if (cls) {
                el.addClass(cls);
            }
            if (fakeEl) {
                fakeEl[0].parentNode.replaceChild(el[0], fakeEl[0]);
            } else if (container) {
                el.appendTo(container);
            }
            el.on("click", self._click, self);
            self.el = el;
            self.title = innerText;
            self._focusA = el.one("a.ke-select");
            KE.Utils.lazyRun(this, "_prepare", "_real");
            self.on("afterValueChange", self._valueChange, self);
            self.on("afterStateChange", self._stateChange, self);
        },
        _findNameByV:function(v) {
            var self = this,
                name = self.get(TITLE) || "",
                items = self.get("items");
            //显示值，防止下拉描述过多
            if (self.get("showValue")) {
                return v || name;
            }
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.value == v) {
                    name = item.name;
                    break;
                }
            }
            return name;
        },

        /**
         * 当逻辑值变化时，更新select的显示值
         * @param ev
         */
        _valueChange:function(ev) {
            var v = ev.newVal,
                self = this,
                name = self._findNameByV(v);
            self.title.html(name);
        },

        _itemsChange:function(ev) {
            var self = this,items = ev.newVal,
                _selectList = self._selectList;
            _selectList.html("");
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i],a = new Node("<a " +
                        "class='ke-select-menu-item' " +
                        "href='#' data-value='" + item.value + "'>"
                        + item.name + "</a>", item.attrs)
                        .appendTo(_selectList)
                        ._4e_unselectable();
                }
            }
            self.as = _selectList.all("a");
        },
        val:function(v) {
            var self = this;
            if (v !== undefined) {
                self.set("value", v);
                return self;
            }
            else return self.get("value");
        },
        _resize:function() {
            var self = this,
                menu = self.menu;
            if (menu.get("visible")) {
                self._real();
            }
        },
        _prepare:function() {
            var self = this,
                el = self.el,
                popUpWidth = self.get("popUpWidth"),
                focusA = self._focusA,
                menuNode = new Node(menu_markup);
            //要在适当位置插入 !!!
            menuNode.appendTo(self.get("menuContainer"));

            var menu = new KE.SimpleOverlay({
                el:menuNode,
                cls:"ke-menu",
                width:popUpWidth ? popUpWidth : el.width(),
                zIndex:KE.baseZIndex(KE.zIndexManager.SELECT),
                focusMgr:false
            }),
                items = self.get("items");
            self.menu = menu;
            //缩放，下拉框跟随
            Event.on(window, "resize", self._resize, self);
            if (self.get(TITLE)) {
                new Node("<div class='ke-menu-title ke-select-menu-item' " +
                    "style='" +
                    "margin-top:-6px;" +
                    "' " +
                    ">" + self.get("title") + "</div>").appendTo(menuNode);
            }
            self._selectList = new Node("<div>").appendTo(menuNode);

            self._itemsChange({newVal:items});


            menu.on("show", function() {
                focusA.addClass(ke_select_active);
            });
            menu.on("hide", function() {
                focusA.removeClass(ke_select_active);
            });
            Event.on([document,self.get("doc")], "click", function(ev) {
                if (el._4e_contains(ev.target)) return;
                menu.hide();
            });
            menuNode.on("click", self._select, self);
            self.as = self._selectList.all("a");

            //mouseenter kissy core bug
            Event.on(menuNode[0], 'mouseenter', function() {
                self.as.removeClass(ke_menu_selected);
            });

            self.on("afterItemsChange", self._itemsChange, self);
        },
        _stateChange:function(ev) {
            var v = ev.newVal,el = this.el;
            if (v == ENABLED) {
                el.removeClass(DISABLED_CLASS);
            } else {
                el.addClass(DISABLED_CLASS);
            }
        },
        enable:function() {
            this.set("state", ENABLED);
        },
        disable:function() {
            this.set("state", DISABLED);
        },
        _select:function(ev) {
            ev.halt();
            var self = this,
                menu = self.menu,
                menuNode = menu.el,
                t = new Node(ev.target),
                a = t._4e_ascendant(function(n) {
                    return menuNode._4e_contains(n) && n._4e_name() == "a";
                }, true);

            if (!a) return;
            var preVal = self.get("value"),newVal = a.attr("data-value");
            //更新逻辑值
            self.set("value", newVal);

            //触发 click 事件，必要时可监听 afterValueChange
            self.fire("click", {
                newVal:newVal,
                prevVal:preVal,
                name:a.html()
            });
            menu.hide();
        },
        _real:function() {
            var self = this,
                el = self.el,
                xy = el.offset(),
                orixy = S.clone(xy),
                menuHeight = self.menu.el.height(),
                menuWidth = self.menu.el.width(),
                wt = DOM.scrollTop(),
                wl = DOM.scrollLeft(),
                wh = DOM.viewportHeight() ,
                ww = DOM.viewportWidth(),
                //右边界坐标,60 is buffer
                wr = wl + ww - 60,
                //下边界坐标
                wb = wt + wh,
                //下拉框向下弹出的y坐标
                sb = xy.top + (el.height() - 2),
                //下拉框右对齐的最右边x坐标
                sr = xy.left + el.width() - 2,
                align = self.get("align"),
                xAlign = align[0],
                yAlign = align[1];


            if (yAlign == "b") {
                //向下弹出优先
                xy.top = sb;
                if (
                    (
                        //不能显示完全
                        (xy.top + menuHeight) > wb
                        )
                        &&
                        (   //向上弹能显示更多
                            (orixy.top - wt) > (wb - sb)
                            )
                    ) {
                    xy.top = orixy.top - menuHeight;
                }
            } else {
                //向上弹出优先
                xy.top = orixy.top - menuHeight;

                if (
                //不能显示完全
                    xy.top < wt
                        &&
                        //向下弹能显示更多
                        (orixy.top - wt) < (wb - sb)
                    ) {
                    xy.top = sb;
                }
            }

            if (xAlign == "l") {
                //左对其优先
                if (
                //左对齐不行
                    (xy.left + menuWidth > wr)
                        &&
                        //右对齐可以弹出更多
                        (
                            (sr - wl) > (wr - orixy.left)
                            )

                    ) {
                    xy.left = sr - menuWidth;
                }
            } else {
                //右对齐优先
                xy.left = sr - menuWidth;
                if (
                //右对齐不行
                    xy.left < wl
                        &&
                        //左对齐可以弹出更多
                        (sr - wl) < (wr - orixy.left)
                    ) {
                    xy.left = orixy.left;
                }
            }
            self.menu.show(xy);
        },
        _click:function(ev) {
            ev.preventDefault();

            var self = this,
                el = self.el,
                v = self.get("value");

            if (el.hasClass(DISABLED_CLASS)) {
                return;
            }

            if (self._focusA.hasClass(ke_select_active)) {
                self.menu.hide();
                return;
            }

            self._prepare();

            //可能的话当显示层时，高亮当前值对应option
            if (v && self.menu) {
                var as = self.as;
                as.each(function(a) {
                    if (a.attr("data-value") == v) {
                        a.addClass(ke_menu_selected);
                    } else {
                        a.removeClass(ke_menu_selected);
                    }
                });
            }
        }
    });

    KE.Select = Select;
});