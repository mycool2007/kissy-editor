/**
 * select component for kissy editor
 * @author:yiminghe@gmail.com
 */
KISSY.Editor.add("select", function() {
    var S = KISSY,
        Node = S.Node,
        Event = S.Event,
        DOM = S.DOM,
        KE = S.Editor,
        TITLE = "title",
        ke_select_active = "ke-select-active",
        ke_menu_selected = "ke-menu-selected",
        markup = "<span class='ke-select-wrap'>" +
            "<a onclick='return false;' class='ke-select'>" +
            "<span class='ke-select-text'></span>" +
            "<span class='ke-select-drop-wrap'><span class='ke-select-drop'></span></span>" +
            "</a></span>",
        menu_markup = "<div class='ke-menu' onmousedown='return false;'></div>";

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


    Select.ATTRS = {
        cls:{},
        container:{},
        doc:{},
        value:{},
        width:{},
        title:{},
        items:{},
        state:{value:ENABLED}
    };


    S.extend(Select, S.Base, {
        _init:function() {
            var self = this,
                container = self.get("container"),
                el = new Node(markup),
                title = self.get(TITLE),
                cls = self.get("cls"),
                text = el.one(".ke-select-text"),
                drop = el.one(".ke-select-drop");
            text.html(title);
            text.css("width", self.get("width"));
            //ie6,7 不失去焦点
            el._4e_unselectable();
            el.attr(TITLE, title);
            if (cls) {
                el.addClass(cls);
            }
            el.appendTo(container);
            el.on("click", self._click, self);
            self.el = el;
            self.title = text;
            self._focusA = el.one("a.ke-select");
            KE.Utils.lazyRun(this, "_prepare", "_real");
            self.on("afterValueChange", self._valueChange, self);
            self.on("afterStateChange", self._stateChange, self);
        },

        /**
         * 当逻辑值变化时，更新select的显示值
         * @param ev
         */
        _valueChange:function(ev) {
            var v = ev.newVal,
                self = this,
                name = self.get(TITLE),
                items = self.get("items");
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.value == v) {
                    name = item.name;
                    break;
                }
            }
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
        _prepare:function() {
            var self = this,
                el = self.el,
                focusA = self._focusA,
                menuNode = new Node(menu_markup),
                menu = new KE.SimpleOverlay({
                    el:menuNode,
                    zIndex:990,
                    focusMgr:false
                }),
                items = self.get("items");
            self.menu = menu;
            if (self.get(TITLE)) {
                new Node("<div class='ke-menu-title ke-select-menu-item' " +
                    "style='" +
                    "margin-top:-6px;" +
                    "' " +
                    ">" + self.get("title") + "</div>").appendTo(menuNode);
            }
            self._selectList = new Node("<div>").appendTo(menuNode);

            self._itemsChange({newVal:items});
            self.get("popUpWidth") && menuNode.css("width", self.get("popUpWidth"));
            menuNode.appendTo(document.body);


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
                preVal:preVal,
                name:a.html()
            });
            menu.hide();
        },
        _real:function() {
            var self = this,
                xy = self.el.offset(),
                orixy = S.clone(xy),
                menuHeight = self.menu.el.height(),
                menuWidth = self.menu.el.width(),
                te = xy.top,
                wt = DOM.scrollTop(),
                wh = DOM.viewportHeight() ,
                ww = DOM.viewportWidth();
            xy.top += self.el.height() - 2;
            if (
                (xy.top + menuHeight) >
                    (wt + wh)
                    &&

                    (te - wt)
                        >
                        (wt + wh - xy.top)) {
                xy = orixy;
                xy.top -= menuHeight + 9;
            }
            //xy.left += 1;
            if (xy.left + menuWidth > ww - 60) {
                xy.left = ww - menuWidth - 60;
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