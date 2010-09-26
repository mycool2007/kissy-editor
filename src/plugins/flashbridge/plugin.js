/**
 * simplified flash bridge for yui swf
 * @author:yiminghe@gmail.com
 */
KISSY.Editor.add("flashbridge", function() {
    var S = KISSY,KE = S.Editor;
    if (KE.FlashBridge) return;

    var instances = {};

    function FlashBridge(cfg) {
        this._init(cfg);
    }

    S.augment(FlashBridge, S.EventTarget, {
        _init:function(cfg) {
            var self = this,
                id = S.guid("flashbridge-"),
                callback = "KISSY.Editor.FlashBridge.EventHandler";
            cfg.flashVars = cfg.flashVars || {};
            cfg.attrs = cfg.attrs || {};
            var flashVars = cfg.flashVars,
                attrs = cfg.attrs;
            S.mix(attrs, {
                id:id,
                width:100,
                height:100,
                allowScriptAccess:'always',
                allowNetworking:'all',
                scale:'noScale'
            }, false);
            S.mix(flashVars, {
                allowedDomain : location.hostname,
                shareData: true,
                YUISwfId:id,
                YUIBridgeCallback:callback,
                useCompression:true
            }, false);
            instances[id] = self;
            self.id = id;
            self.swf = KE.Utils.flash.createSWFRuntime(cfg.movie, cfg);
            self._expose(cfg.methods);
        },
        _expose:function(methods) {
            var self = this;
            for (var i = 0; i < methods.length; i++) {
                var m = methods[i];
                (function(m) {
                    self[m] = function() {
                        self._callSWF(m, S.makeArray(arguments));
                    };
                })(m);
            }
        },
        /**
         * Calls a specific function exposed by the SWF's ExternalInterface.
         * @param func {String} the name of the function to call
         * @param args {Array} the set of arguments to pass to the function.
         */
        _callSWF: function (func, args) {
            var self = this;
            args = args || [];
            try {
                if (self.swf[func]) {
                    return self.swf[func].apply(self.swf, args);
                }
            }
                // some version flash function is odd in ie: property or method not supported by object
            catch(e) {
                var params = '';
                if (args.length !== 0) {
                    params = '\'' + args.join('', '') + '\'';
                }
                //avoid eval for compressiong
                return (new Function('self', 'return self.swf.' + func + '(' + params + ');'))(self);
            }
        },
        _eventHandler:function(event) {
            var self = this,
                type = event.type;
            //console.log(self.id + " : " + type);
            if (type === 'log') {
                S.log(event.message);
            } else if (type) {
                self.fire(type, event);
            }
        },
        _destroy:function() {
            delete instances[this.id];
        }
    });

    FlashBridge.EventHandler = function(id, event) {
        var instance = instances[id];
        if (instance) {
            //防止ie同步触发事件，后面还没on呢，另外给 swf 喘息机会
            //否则同步后触发事件，立即调用swf方法会出错
            setTimeout(function() {
                instance._eventHandler.call(instance, event);
            }, 100);
        }
    };

    KE.FlashBridge = FlashBridge;

});