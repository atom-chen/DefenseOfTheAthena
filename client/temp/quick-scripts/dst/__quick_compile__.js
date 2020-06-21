
(function () {
var scripts = [{"deps":{"./assets/script/entry/model/GameInfo":2,"./assets/script/battle/map/modle/EnumMap":4,"./assets/script/framework/res/ResPath":10,"./assets/script/framework/util/StringUtil":12,"./assets/script/login/model/LoginData":14,"./assets/script/framework/time/Time":15,"./assets/script/battle/map/control/CellController":18,"./assets/script/framework/ui/UIEnum":22,"./assets/script/framework/util/ArrayUtil":23,"./assets/script/framework/util/SyncPromise":25,"./assets/script/battle/map/modle/ConfigMap":30,"./assets/script/battle/map/control/MapController":32,"./assets/script/framework/ui/UIUtil":1,"./assets/script/commonUI/UITip":3,"./assets/script/login/view/UILogin":5,"./assets/script/entry/controller/EntryControler":6,"./assets/script/framework/audio/AudioManager":7,"./assets/script/entry/view/UIEntry":8,"./assets/script/framework/net/Http":9,"./assets/script/framework/ui/UIManager":11,"./assets/script/framework/storage/LocalStorage":13,"./assets/script/login/controller/LoginController":17,"./assets/script/framework/clog/Clog":19,"./assets/script/framework/ui/UIBase":21,"./assets/script/framework/res/ResManager":20,"./assets/script/framework/res/ResUtil":24,"./assets/script/login/view/UILoginFastRegister":26,"./assets/script/framework/util/UIEventCenter":27,"./assets/script/login/view/UILoginFast":28,"./assets/script/battle/map/view/UIMap":16,"./assets/script/battle/map/view/MapCell":29,"./assets/script/battle/map/modle/CellData":31},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../clog/Clog":19,"../util/StringUtil":12,"../res/ResManager":20},"path":"preview-scripts/assets/script/framework/ui/UIUtil.js"},{"deps":{},"path":"preview-scripts/assets/script/entry/model/GameInfo.js"},{"deps":{"../framework/ui/UIBase":21,"../framework/ui/UIManager":11,"../framework/ui/UIEnum":22},"path":"preview-scripts/assets/script/commonUI/UITip.js"},{"deps":{},"path":"preview-scripts/assets/script/battle/map/modle/EnumMap.js"},{"deps":{"../../framework/clog/Clog":19,"../../framework/ui/UIBase":21,"../../framework/util/UIEventCenter":27,"./UILoginFast":28,"../../framework/ui/UIManager":11},"path":"preview-scripts/assets/script/login/view/UILogin.js"},{"deps":{"../../framework/clog/Clog":19,"../../login/view/UILogin":5,"../../framework/ui/UIManager":11,"../../framework/audio/AudioManager":7,"../../login/controller/LoginController":17},"path":"preview-scripts/assets/script/entry/controller/EntryControler.js"},{"deps":{"../clog/Clog":19,"../util/StringUtil":12,"../storage/LocalStorage":13,"../res/ResManager":20},"path":"preview-scripts/assets/script/framework/audio/AudioManager.js"},{"deps":{"../controller/EntryControler":6,"../../framework/ui/UIManager":11},"path":"preview-scripts/assets/script/entry/view/UIEntry.js"},{"deps":{"../clog/Clog":19},"path":"preview-scripts/assets/script/framework/net/Http.js"},{"deps":{},"path":"preview-scripts/assets/script/framework/res/ResPath.js"},{"deps":{"../util/ArrayUtil":23,"../util/StringUtil":12,"../clog/Clog":19,"./UIEnum":22,"../audio/AudioManager":7,"../res/ResManager":20},"path":"preview-scripts/assets/script/framework/ui/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/script/framework/util/StringUtil.js"},{"deps":{"../audio/AudioManager":7,"../clog/Clog":19,"../util/StringUtil":12},"path":"preview-scripts/assets/script/framework/storage/LocalStorage.js"},{"deps":{},"path":"preview-scripts/assets/script/login/model/LoginData.js"},{"deps":{},"path":"preview-scripts/assets/script/framework/time/Time.js"},{"deps":{"../../../framework/ui/UIBase":21,"../../../framework/clog/Clog":19,"../modle/ConfigMap":30,"./MapCell":29},"path":"preview-scripts/assets/script/battle/map/view/UIMap.js"},{"deps":{"../model/LoginData":14,"../../framework/net/Http":9,"../../framework/clog/Clog":19,"../../entry/model/GameInfo":2,"../../commonUI/UITip":3},"path":"preview-scripts/assets/script/login/controller/LoginController.js"},{"deps":{},"path":"preview-scripts/assets/script/battle/map/control/CellController.js"},{"deps":{"../time/Time":15},"path":"preview-scripts/assets/script/framework/clog/Clog.js"},{"deps":{"./ResPath":10,"../util/StringUtil":12},"path":"preview-scripts/assets/script/framework/res/ResManager.js"},{"deps":{"./UIEnum":22},"path":"preview-scripts/assets/script/framework/ui/UIBase.js"},{"deps":{},"path":"preview-scripts/assets/script/framework/ui/UIEnum.js"},{"deps":{},"path":"preview-scripts/assets/script/framework/util/ArrayUtil.js"},{"deps":{"./ResManager":20,"../clog/Clog":19,"../util/StringUtil":12},"path":"preview-scripts/assets/script/framework/res/ResUtil.js"},{"deps":{},"path":"preview-scripts/assets/script/framework/util/SyncPromise.js"},{"deps":{"../../framework/ui/UIEnum":22,"../../framework/ui/UIBase":21,"../../framework/ui/UIManager":11,"../../framework/util/UIEventCenter":27,"../../framework/util/StringUtil":12,"../../commonUI/UITip":3},"path":"preview-scripts/assets/script/login/view/UILoginFastRegister.js"},{"deps":{"./StringUtil":12,"../audio/AudioManager":7},"path":"preview-scripts/assets/script/framework/util/UIEventCenter.js"},{"deps":{"../../framework/ui/UIBase":21,"../../framework/ui/UIEnum":22,"../../framework/util/UIEventCenter":27,"../../framework/util/StringUtil":12,"../../framework/ui/UIManager":11,"../../commonUI/UITip":3,"./UILoginFastRegister":26,"../controller/LoginController":17},"path":"preview-scripts/assets/script/login/view/UILoginFast.js"},{"deps":{"../modle/CellData":31,"../../../framework/ui/UIUtil":1,"../../../framework/clog/Clog":19},"path":"preview-scripts/assets/script/battle/map/view/MapCell.js"},{"deps":{},"path":"preview-scripts/assets/script/battle/map/modle/ConfigMap.js"},{"deps":{"../control/MapController":32,"./EnumMap":4},"path":"preview-scripts/assets/script/battle/map/modle/CellData.js"},{"deps":{},"path":"preview-scripts/assets/script/battle/map/control/MapController.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    