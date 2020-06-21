
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/battle/map/control/CellController');
require('./assets/script/battle/map/control/MapController');
require('./assets/script/battle/map/modle/CellData');
require('./assets/script/battle/map/modle/ConfigMap');
require('./assets/script/battle/map/modle/EnumMap');
require('./assets/script/battle/map/view/MapCell');
require('./assets/script/battle/map/view/UIMap');
require('./assets/script/commonUI/UITip');
require('./assets/script/entry/controller/EntryControler');
require('./assets/script/entry/model/GameInfo');
require('./assets/script/entry/view/UIEntry');
require('./assets/script/framework/audio/AudioManager');
require('./assets/script/framework/clog/Clog');
require('./assets/script/framework/net/Http');
require('./assets/script/framework/res/ResManager');
require('./assets/script/framework/res/ResPath');
require('./assets/script/framework/res/ResUtil');
require('./assets/script/framework/storage/LocalStorage');
require('./assets/script/framework/time/Time');
require('./assets/script/framework/ui/UIBase');
require('./assets/script/framework/ui/UIEnum');
require('./assets/script/framework/ui/UIManager');
require('./assets/script/framework/ui/UIUtil');
require('./assets/script/framework/util/ArrayUtil');
require('./assets/script/framework/util/StringUtil');
require('./assets/script/framework/util/SyncPromise');
require('./assets/script/framework/util/UIEventCenter');
require('./assets/script/login/controller/LoginController');
require('./assets/script/login/model/LoginData');
require('./assets/script/login/view/UILogin');
require('./assets/script/login/view/UILoginFast');
require('./assets/script/login/view/UILoginFastRegister');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();