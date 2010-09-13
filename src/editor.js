/**
 * Constructor for kissy editor and module dependency definition
 * @author: yiminghe@gmail.com, lifesinger@gmail.com
 * @version: 2.0
 * @buildtime: @TIMESTAMP@
 */
KISSY.add("editor", function(S, undefined) {
    function Editor(textarea, cfg) {
        var self = this;

        if (!(self instanceof Editor)) {
            return new Editor(textarea, cfg);
        }

        if (S.isString(textarea)) {
            textarea = S.one(textarea);
        }
        if (!textarea[0]) textarea = new Node(textarea);

        self.cfg = cfg || {pluginConfig:{}};

        S.app(self, S.EventTarget);
        self.use = function(mods) {
            if (S.isString(mods)) {
                mods = mods.split(",");
            }
            var left = mods,current = [],index;
            index = S.indexOf("separator", left);
            var sep = index != -1;
            current = left.splice(0, sep ? index + 1 : left.length);
            if (sep)current.pop();
            if (current.length != 0) {
                S.use.call(self, current.join(","), function() {
                    if (sep) {
                        self.addPlugin(function() {
                            Editor.Utils.addSeparator(self.toolBarDiv);
                        });
                    }
                    //继续加载剩余插件
                    self.use(left);
                }, { order:  true, global:  Editor });
            } else {
                self.on("dataReady", function() {
                    self.setData(textarea.val());
                    self.fire("save");
                });
            }
            return self;
        };
        self.init(textarea);
        return undefined;
    }

    S.app(Editor, S.EventTarget);
    Editor.Config.base = S.Config.base + "editor/";
    function debugUrl(url) {
        if (!debug) return  url.replace(/\.(js|css)/i, "-min.$1");
        if (debug === "dev") {
            return "../src/" + url;
        }
        return url;
    }

    var debug = S.Config.debug,mods = {
        "htmlparser": {
            attach: false,
            path: debugUrl("plugins/htmldataprocessor/htmlparser/htmlparser.js")
        }
    },
        core_mods = [
            "utils","focusmanager","definition",
            "dtd","dom", "elementpath",
            "walker","range","domiterator",
            "selection","styles"
        ],
        plugin_mods = [
            "clipboard",
            {
                name: "color"//,
                //useCss: true
            },
            {
                name: "elementpaths"//,
                //useCss: true
            },
            "enterkey",
            "fakeobjects",
            {
                name:"flash",
                requires:["flashsupport"]
            },
            {
                name: "flashsupport",
                requires: ["contextmenu","fakeobjects","overlay","bubbleview"]
            },
            {
                name:"font",
                requires:["select"]
            },
            "format",
            {
                name: "htmldataprocessor",
                requires: ["htmlparser-text"]
            },
            {
                name: "image",
                requires: ["overlay","contextmenu","bubbleview"]
            },
            "indent",
            "justify",
            {
                name:"link",
                requires: ["bubbleview"]
            },
            "list",
            "maximize",
            {
                name:"music",
                requires:["flashsupport"]
            },
            "preview",
            "removeformat",
            {
                name: "smiley"//,
                //useCss: true
            },
            "sourcearea",
            {
                name: "table",
                //useCss: true,
                requires: ["overlay",
                    "contextmenu"]
            },
            {
                name: "templates",
                requires: ["overlay"]//,
                //useCss: true
            },
            "undo",
            {
                name:"resize",
                requires:["dd"]
            }
        ],
        htmlparser_mods = [
            {
                name: "htmlparser-basicwriter",
                requires: ["htmlparser"]
            },
            {
                name: "htmlparser-element",
                requires: ["htmlparser-fragment"]
            },
            {
                name: "htmlparser-filter",
                requires: ["htmlparser-element"]
            },
            {
                name: "htmlparser-fragment",
                requires: ["htmlparser-htmlwriter"]
            },
            {
                name: "htmlparser-htmlwriter",
                requires: ["htmlparser-basicwriter"]
            },
            {
                name: "htmlparser-text",
                requires: ["htmlparser-comment"]
            }
            ,
            {
                name: "htmlparser-comment",
                requires: ["htmlparser-filter"]
            }
        ],
        ui_mods = [
            {name:"button"},
            {name:"dd"},
            {
                name:"overlay",
                requires:["dd"]
            },
            {
                name: "contextmenu",
                requires: ["overlay"]   //,
                //useCss:true
            },
            {
                name: "bubbleview",
                requires: ["overlay"]   //,
                //useCss:true
            },
            {
                name: "select",
                requires: ["overlay"]   //,
                //useCss:true
            }
        ],
        i, len, mod, name, requires;

    // ui modules
    for (i = 0,len = ui_mods.length; i < len; i++) {
        mod = ui_mods[i];
        name = mod;
        requires = undefined;

        if (!S.isString(mod)) {
            requires = mod.requires;
            name = mod.name;
        }

        mods[name] = {
            attach: false,
            requires: requires,
            path: debugUrl("ui/" + name + ".js"),
            csspath: mod.useCss ? debugUrl("ui/" + name + ".css") : ""
        };
    }

    // plugins modules
    for (i = 0,len = plugin_mods.length; i < len; i++) {
        mod = plugin_mods[i];
        name = mod;
        requires = ["button"];

        if (!S.isString(mod)) {
            mod.requires && (requires = requires.concat(mod.requires));
            name = mod.name;
        }

        mods[name] = {
            attach: false,
            requires: requires,
            csspath: (mod.useCss ? debugUrl("plugins/" + name + "/plugin.css") : undefined),
            path: debugUrl("plugins/" + name + "/plugin.js")
        };
    }

    // htmlparser
    for (i = 0,len = htmlparser_mods.length; i < len; i++) {
        mod = htmlparser_mods[i];
        requires = undefined;

        if (!S.isString(mod)) {
            requires = mod.requires;
            mod = mod.name;
        }

        mods[mod] = {
            attach: false,
            requires: requires,
            path: debugUrl("plugins/htmldataprocessor/htmlparser/" + mod.substring(11) + ".js")
        };
    }

    Editor.add(mods);

    mods = { };
    for (i = 0,len = core_mods.length; i < len; i++) {
        mod = core_mods[i];
        mods[mod] = {
            host: "editor",
            requires: i > 0 ? core_mods[i - 1] : []
        };
    }
    Editor.add(mods);

    S.Editor = Editor;
});