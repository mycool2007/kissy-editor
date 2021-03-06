/**
 * contextmenu for kissy editor
 * @author: yiminghe@gmail.com
 */
KISSY.Editor.add("contextmenu", function() {
    var KE = KISSY.Editor,
        S = KISSY,
        Node = S.Node,
        DOM = S.DOM,
        Event = S.Event,
        HTML = "<div onmousedown='return false;'>";
    if (KE.ContextMenu) return;

    /**
     * 组合使用 overlay
     * @param config
     */
    function ContextMenu(config) {
        this.cfg = config;
        //editor太复杂，防止循环引用
        //S.clone(config);
        KE.Utils.lazyRun(this, "_prepareShow", "_realShow");
    }

    //暂时将 editor 同 右键关联。
    ContextMenu.ATTRS = {
        editor:{}
    };

    var global_rules = [];
    /**
     * 多菜单管理
     */
    ContextMenu.register = function(cfg) {

        var cm = new ContextMenu(cfg),
            editor = cfg.editor,
            doc = editor.document;

        global_rules.push({
            doc:doc,
            rules:cfg.rules || [],
            instance:cm
        });

        if (!doc.ke_contextmenu) {
            doc.ke_contextmenu = 1;
            Event.on(doc, "mousedown", ContextMenu.hide);
            /*
             Event.on(doc, "contextmenu", function(ev) {
             ev.preventDefault();
             });*/
            Event.on(doc,
                //"mouseup"
                "contextmenu",
                function(ev) {
                    /*
                     if (ev.which != 3)
                     return;
                     */
                    ContextMenu.hide.call(this);
                    var t = new Node(ev.target);
                    while (t) {
                        var name = t._4e_name(),stop = false;
                        if (name == "body")break;
                        for (var i = 0; i < global_rules.length; i++) {
                            var instance = global_rules[i].instance,
                                rules = global_rules[i].rules,
                                doc2 = global_rules[i].doc;
                            if (doc === doc2 && applyRules(t[0], rules)) {
                                ev.preventDefault();
                                stop = true;
                                //ie 右键作用中，不会发生焦点转移，光标移动
                                //只能右键作用完后才能，才会发生光标移动,range变化
                                //异步右键操作
                                //qc #3764,#3767
                                setTimeout(function() {
                                    //console.log("show");
                                    instance.show(KE.Utils.getXY(ev.pageX,
                                        ev.pageY, doc,
                                        document));
                                }, 30);

                                break;
                            }
                        }
                        if (stop) break;
                        t = t.parent();
                    }
                });
        }
        return cm;
    };

    function applyRules(elem, rules) {
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            //增加函数判断
            if (S.isFunction(rule)) {
                if (rule(new Node(elem))) return true;
            }
            else if (DOM.test(elem, rule))return true;
        }
        return false;
    }

    ContextMenu.hide = function() {
        var doc = this;
        for (var i = 0; i < global_rules.length; i++) {
            var instance = global_rules[i].instance,doc2 = global_rules[i].doc;
            if (doc === doc2)
                instance.hide();
        }
    };

    var Overlay = KE.SimpleOverlay;
    S.augment(ContextMenu, {
        /**
         * 根据配置构造右键菜单内容
         */
        _init:function() {
            var self = this,
                cfg = self.cfg,
                funcs = cfg.funcs;
            self.elDom = new Node(HTML);
            var el = self.elDom;

            //使它具备 overlay 的能力，其实这里并不是实体化
            self.el = new Overlay({
                el:el,
                width:cfg.width,
                cls:"ke-menu"
            });

            for (var f in funcs) {
                var a = new Node("<a href='#'>" + f + "</a>");
                el[0].appendChild(a[0]);
                (function(a, func) {
                    a._4e_unselectable();
                    a.on("click", function(ev) {
                        //先 hide 还原编辑器内焦点
                        self.hide();
                        //console.log("contextmenu hide");
                        ev.halt();
                        //给 ie 一点 hide() 中的事件触发 handler 运行机会，原编辑器获得焦点后再进行下步操作
                        setTimeout(func, 30);
                    });
                })(a, funcs[f]);
            }

        },

        hide : function() {
            this.el && this.el.hide();
        },
        _realShow:function(offset) {
            var self = this;
            //防止ie 失去焦点，取不到复制等状态
            KE.fire("contextmenu", {
                contextmenu:self
            });
            this.el.show(offset);
        },
        _prepareShow:function() {
            this._init();
        },
        show:function(offset) {
            this._prepareShow(offset);
        }
    });

    KE.ContextMenu = ContextMenu;
});
