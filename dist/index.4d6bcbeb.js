// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e11Rl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
// html과 연결되는 JS 파일은 이거 하나,
// 따라서 가져오기와 내보내기를 통해 main.js 로 모든 데이터, 출력할 것들을 모아야함
// main.js 에선 라우터 기능을 할 App.js 를 가져오고, 이를 root div 에 출력하는 기능을 담당
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _index = require("./routes/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
const root = document.querySelector("#root");
root.append(new (0, _appDefault.default)().el);
(0, _indexDefault.default)();

},{"./App":"2kQhy","./routes/index":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports) {
/* App.js 는 바뀌는 내용들을 router-view 라는 태그를 만들어서
그 태그 안에 밀어넣을 예정
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("./core/coreComponent");
var _theHeader = require("./components/TheHeader");
var _theHeaderDefault = parcelHelpers.interopDefault(_theHeader);
class App extends (0, _coreComponent.CoreCompoent) {
    render() {
        // router-view 태그 생성
        const routerView = document.createElement("router-view");
        // this.el은 tagName에 따라 만들어지는 태그, 그안에 router-view 태그를 삽입
        this.el.append(new (0, _theHeaderDefault.default)().el, // new SearchBar().el,
        routerView);
    }
}
exports.default = App;

},{"./core/coreComponent":"2sEqF","./components/TheHeader":"3Cyq4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2sEqF":[function(require,module,exports) {
/* 
1. 핵심 컴포넌트 - html에서 출력할 수 있게 받아온 tagName,state,props를 받아와서
이를 출력
2. 라우팅 기능 - 해쉬값을 받아와서 이에 일치하는 js 파일을 출력
3. Store 기능 - 특정한 어떤 데이터를 여러 컴포넌트에서 활용할 수 있도록
*/ // 1. 핵심 컴포넌트
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CoreCompoent", ()=>CoreCompoent);
parcelHelpers.export(exports, "createRoute", ()=>createRoute);
// 3. Store 기능
parcelHelpers.export(exports, "Store", ()=>Store);
class CoreCompoent {
    constructor(payload = {}){
        const { tagName ="div" , state ={} , props ={}  } = payload;
        // 받아온 TagName 대로 html에 태그를 생성
        this.el = document.createElement(tagName);
        this.state = state;
        this.props = props;
        this.render();
    }
    render() {
    // 이 render 함수를 다른 js 파일에서 활용해서 html 에 렌더링할 것들이 들어올 예정
    }
}
// 2. 라우팅 기능
function routeRender(routes) {
    // 예외처리
    if (!location.hash) history.replaceState(null, "", "/#/");
    const routerView = document.querySelector("router-view");
    const [hash, querystring = ""] = location.hash.split("?");
    // 넘어오는 routes 로부터 hash 값 가져오기
    const currentRoute = routes.find((route)=>new RegExp(`${route.path}/?$`).test(hash));
    // 각 객체의 실제 출력물은 속에 component 속성
    // routerview 내용을 컴포넌트의 인스턴스의 el을 밀어넣기
    routerView.innerHTML = ``;
    routerView.append(new currentRoute.component().el);
    //페이지 변경시 스크롤 최상단 고정
    window.scrollTo(0, 0);
}
function createRoute(routes) {
    return function() {
        window.addEventListener("popstate", ()=>{
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        this.state = {};
        this.observers = {};
        for(const key in state)Object.defineProperty(this.state, key, {
            get: ()=>state[key],
            set: (val)=>{
                state[key] = val;
                this.observers[key].forEach((observer)=>observer[val]);
            }
        });
    }
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : this.observers[key] = [
            cb
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Cyq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
class TheHeader extends (0, _coreComponent.CoreCompoent) {
    constructor(){
        super({
            tagName: "header",
            // state data 에 menus 배열을 전달
            // menus 배열에는 라우팅될 페이지와 주소(href)을 저장
            state: {
                menus: [
                    {
                        name: "Home",
                        href: "#/"
                    },
                    {
                        name: "Noun",
                        href: "#/noun"
                    },
                    {
                        name: "Verb",
                        href: "#/verb"
                    },
                    {
                        name: "About",
                        href: "#/about"
                    },
                    {
                        name: "\uD83D\uDD0E",
                        href: "#/search"
                    }
                ]
            }
        });
        // 페이지 변화가 있을때마다 렌더링
        window.addEventListener("popstate", ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /* HTML */ `
    <h1>Al-Klimat</h1>
        <ul>
          <!-- State의 menu 배열을 map 메서드를 이용하여 콜백함수를 호출 -->
          <!-- 콜백함수는 배열내 href 속성과 location 객체의 hash 값을 비교 -->
          ${this.state.menus.map((menu)=>{
            const href = menu.href.split("#/")[1];
            const hash = location.hash.split("#/")[1];
            // 만약 hash값과 같은 href 속성을 가진 페이지에 사용자가 있음 -> isActive 붙여주기
            const isActive = href === hash;
            // console.log(`href: ${href},hash : ${hash}`)
            return /* html */ `
              <li>
                <a
                  class = "${isActive ? "active" : ""}"
                  href = "${menu.href}">
                ${menu.name}
                </a>
              </li>
            `;
        }).join("")}
        </ul>
    `;
    }
}
exports.default = TheHeader;

},{"../core/coreComponent":"2sEqF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L9mC":[function(require,module,exports) {
// 보여줄 각 페이지의 경로와 해당하는 컴포넌트에 대한 Routes를 생성
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _home = require("./Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _about = require("./About");
var _aboutDefault = parcelHelpers.interopDefault(_about);
var _noun = require("./Noun");
var _nounDefault = parcelHelpers.interopDefault(_noun);
var _verb = require("./Verb");
var _verbDefault = parcelHelpers.interopDefault(_verb);
var _coreComponent = require("../core/coreComponent");
var _serach = require("./Serach");
var _serachDefault = parcelHelpers.interopDefault(_serach);
exports.default = (0, _coreComponent.createRoute)([
    {
        path: "#/",
        component: (0, _homeDefault.default)
    },
    {
        path: "#/noun",
        component: (0, _nounDefault.default)
    },
    {
        path: "#/verb",
        component: (0, _verbDefault.default)
    },
    {
        path: "#/about",
        component: (0, _aboutDefault.default)
    },
    {
        path: "#/search",
        component: (0, _serachDefault.default)
    }
]);

},{"./Home":"0JSNG","./About":"gdB30","../core/coreComponent":"2sEqF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Noun":"a4xRt","./Verb":"KYWK6","./Serach":"km0km"}],"0JSNG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
var _wordList = require("../components/WordList");
var _wordListDefault = parcelHelpers.interopDefault(_wordList);
var _serach = require("./Serach");
var _serachDefault = parcelHelpers.interopDefault(_serach);
class Home extends (0, _coreComponent.CoreCompoent) {
    render() {
        this.el.innerHTML = /* HTML */ `
    `;
        this.el.append(new (0, _wordListDefault.default)().el);
    }
}
exports.default = Home;

},{"../core/coreComponent":"2sEqF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/WordList":"baYYT","./Serach":"km0km"}],"baYYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
var _worddata = require("../worddata");
class WordList extends (0, _coreComponent.CoreCompoent) {
    render() {
        const data = (0, _worddata.DATA);
        this.el.innerHTML = /* html */ `
        <ul>
        ${data.map(function(element) {
            return `
            <li id=${element.id} class="unchecked">
                <input type="checkbox" class="unchecked">
                <span class="arabic">${element.single} ${element.plural ? "-" + element.plural : ""}</span>
                <span class="korean">${element.mean}</span>
            </li>
            `;
        }).join("")}
        </ul>
    `;
        const inputEls = this.el.querySelectorAll(".unchecked");
        inputEls.forEach((element)=>{
            element.addEventListener("change", ()=>{
                element.classList.toggle("checked");
            });
        });
    }
}
exports.default = WordList;

},{"../core/coreComponent":"2sEqF","../worddata":"ctuUF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ctuUF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DATA", ()=>DATA);
const DATA = [
    {
        "id": 1,
        "mean": "방향,방면",
        "single": "نحو",
        "plural": "أَنْحَاء",
        "example": "وبذلك كان قد توجه من جديد في طريقه نحو المدينة",
        "exmean": "다시 새롭게 도시를 향해 길에서 걸어갔다",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 2,
        "mean": "강의,강좌",
        "single": "محاظرة",
        "plural": "محاضرات",
        "example": "و هل حصل أحدكم على درس الأحد الماضى؟",
        "exmean": "당신들 중 누가 지난 일요일에 수업을 들었나요?",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 3,
        "mean": "UN(국제연합)",
        "single": "الأمم المتحدة",
        "plural": "",
        "example": "الأمم المتحدة تشرف على الانتخابات التي عقدت في كمبوديا",
        "exmean": "UN은 캄보디아에서 이루어진 선거를 감독한다.",
        "part": "noun",
        "appendix": "الولايات المتحدة:미국(US)"
    },
    {
        "id": 4,
        "mean": "상태",
        "single": "حال",
        "plural": "أحْوَال",
        "example": "مؤشر يميز حالة حساب المتداول في الوقت الحالي.",
        "exmean": "지표는 그 시간의 거래자의 계좌 상태를 나타냈다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 5,
        "mean": "내일",
        "single": "غَدًا",
        "plural": "",
        "example": "المقابلة الشخصية ستكون غدا",
        "exmean": "인터뷰는 내일 시작될 예정입니다.",
        "part": "noun",
        "appendix": "أمس:어제"
    },
    {
        "id": 6,
        "mean": "프로그램",
        "single": "بَرْنَامَج",
        "plural": "بَرَامِج",
        "example": "العلوم والتكنولوجيا الالكترونية هو برنامج رئيسي وطني.",
        "exmean": "대학은 국가의 핵심 프로그램인 전기공학을 제안했다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 7,
        "mean": "아랍어",
        "single": "اللُّغَةُ الْعَرَبِيَّةُ",
        "plural": "",
        "example": "هل تعرفين قراءة اللغة ألعربية",
        "exmean": "당신은 아랍어를 읽는 것을 알고 있나요?",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 8,
        "mean": "이슬람",
        "single": "الإسلام",
        "plural": "",
        "example": "الإسلام كما يثبت اسمُهُ هو السلام.",
        "exmean": "이슬람교는 이름처럼 평화에 관한 것입니다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 9,
        "mean": "종교",
        "single": "دِيَانَة",
        "plural": "ديانات",
        "example": "ديانة الطفل تعتبر أمرًا داخليًا للعائلة",
        "exmean": "아이들의 종교는 가족 안에서 결정할 문제이다",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 11,
        "mean": "회원",
        "single": "عضو",
        "plural": "أعضاء",
        "example": "أنت أهم عضو في فريق علاجك.",
        "exmean": "당신은 치료팀의 가장 중요한 멤버입니다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 12,
        "mean": "시대",
        "single": "عصر",
        "plural": "أَعْصَار",
        "example": 'العالم يعيش "عصر البلاستيك"…',
        "exmean": "우리는 플라스틱의 시대에 살고 있습니다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 13,
        "mean": "확산",
        "single": "اِنْتِشَار",
        "plural": "",
        "example": "المحور الثاني الهام هو انتشار التكنولوجيا.",
        "exmean": "두 번째 주요 동향은 정보 기술의 확산이다.",
        "part": "noun",
        "appendix": "8형اِنْتَشَرَ- يَنْتَشِرُ (م: اِنْتِشارٌ)"
    },
    {
        "id": 14,
        "mean": "감염",
        "single": "عَدْوَى",
        "plural": "",
        "example": "الوقاية الحصول على لقطات لقاح HiB سيمنع العدوى في معظم الأطفال.",
        "exmean": "예정된 HiB 백신 주사를 맞으면 대부분의 아이들의 감염을 막을 수 있다.",
        "part": "noun",
        "appendix": "감염되다: عَدَا - يَعْدُو‎"
    },
    {
        "id": 15,
        "mean": "감기",
        "single": "رَشْح",
        "plural": "",
        "example": "شكرا، هل أصابك الرشح يا تيد ؟",
        "exmean": "고마워, 테드 너 감기 걸렸니?",
        "part": "noun",
        "appendix": "لَعِبَ-يَلْعَبُ:놀다,운동하다"
    },
    {
        "id": 16,
        "mean": "증상",
        "single": "عَرَض",
        "plural": "أَعْرَاض",
        "example": "أي علامات أو أعراض ليست طبيعية.",
        "exmean": "정상적이지 않은 징후나 증상이 있습니다.",
        "part": "noun",
        "appendix": "발생하다:عَرَضَ-يَعْرِضُ"
    },
    {
        "id": 17,
        "mean": "운동장",
        "single": "مَلْعَب",
        "plural": "مَلَاعِب",
        "example": "الملاعب الكبيرة والشوارع لن تستخدم بعد الحدث كثيرا.",
        "exmean": "그 큰 경기장과 거리들은 행사 이후 한번도 쓰이지 않을 것이다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 18,
        "mean": "편의성,쉬움",
        "single": "سُهُولَة",
        "plural": "",
        "example": "التقاط أي نوع من المعلومات وتقاسمها بسهولة.",
        "exmean": "모든 종류의 정보를 쉽게 저장하고 공유할 수 있습니다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 19,
        "mean": "친구",
        "single": "صَدِيق",
        "plural": "أَصْدِقاء",
        "example": "من الصعب الحصول على أصدقاء جدد عندما تسافر منفردا",
        "exmean": "혼자 여행할때 새로운 친구를 만나는 것은 어렵다",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 20,
        "mean": "운동",
        "single": "رِيَاضَة",
        "plural": "رياضات",
        "example": "يشتمل هذا المنتجع على شاطئ خاص ومطاعم ومرافق رياضات مائية.",
        "exmean": "리조트에는 개인 해변, 레스토랑, 수상 스포츠 시설이 있습니다.",
        "part": "noun",
        "appendix": ""
    },
    {
        "id": 21,
        "mean": "제출한다",
        "single": "قَدَّمَ",
        "plural": "يَقْدُمُ",
        "example": "ومن المقرر أن تقدم اللجنة تقريرها في 15 ديسمبر كانون الاول.",
        "exmean": "위원회는 12월15일까지 보고서를 제출할 것입니다.",
        "part": "verb",
        "appendix": "2형قَدَّمَ - يُقَدِّمُ (م: تَقْدِيمٌ)"
    },
    {
        "id": 22,
        "mean": "배우다",
        "single": "تَعَلَّمَ",
        "plural": "يَتَعَلَّمُ",
        "example": "تعلم تداول العملات الأجنبية وبدء الأعمال التجارية الخاصة بك.",
        "exmean": "당신은 영어를 배우고 당신의 사업을 시작할 수 있다.",
        "part": "verb",
        "appendix": "م:تَعَلُّم"
    },
    {
        "id": 23,
        "mean": "일하다",
        "single": "عَمِلَ",
        "plural": "يَعْمَلُ",
        "example": "مركز التوطين Monika يساعد النساء المهاجرات العاطلات عن العمل في العثور على مكان العمل.",
        "exmean": "Monika 이민 센터는 무직 여성들이 직업을 찾도록 돕습니다.",
        "part": "verb",
        "appendix": "م: عَمَل"
    },
    {
        "id": 24,
        "mean": "참여하다",
        "single": "شَارَكَ",
        "plural": "يُشَارِكُ في",
        "example": "شارك ستة مرشحين من الحزب الديمقراطي في هذا الحدث.",
        "exmean": "6명의 민주당 후보자들은 그 행사에 참여했습니다.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 25,
        "mean": "방문하다",
        "single": "زَارَ",
        "plural": "يَزُورُ",
        "example": "لا، لا، هو كَانَ يَزُورُ.",
        "exmean": "아뇨, 그는 방문 했다.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 26,
        "mean": "좋아하다,사랑하다",
        "single": "أَحَبَّ",
        "plural": "يُحِبُّ",
        "example": "القدرة علي أن يُحِبْ وأن يُحَبْ.",
        "exmean": "사랑하는 능력과 사랑받는 능력.",
        "part": "verb",
        "appendix": "م:حُبّ"
    },
    {
        "id": 27,
        "mean": "딱 맞다,적절하다",
        "single": "نَاسَبَ",
        "plural": "يُنَاسِبُ",
        "example": "ولكنه الخاتم كان يناسبها وكأنه صُنع لها",
        "exmean": "그러나 반지는 그녀를 위해 만든 것 처럼 딱 맞았다",
        "part": "verb",
        "appendix": "م:مُنَاسَبَة"
    },
    {
        "id": 28,
        "mean": "감소하다,남다",
        "single": "خَفَضَ",
        "plural": "يَخْفِضُ",
        "example": "شرب كأس من عصير الخضار يومياً يخفض الوزن",
        "exmean": "매일 한잔의 야채주스를 마시면 살이 빠진다.",
        "part": "verb",
        "appendix": "م:خَفْض"
    },
    {
        "id": 29,
        "mean": "들어가다",
        "single": "دَخَلَ",
        "plural": "يَدْخُلُ",
        "example": "، لذا، عندما يدخل الزبائن من الباب أتجاهلهم",
        "exmean": "소비자들이 문으로 들어왔을때, 나는 그들을 무시한다.",
        "part": "verb",
        "appendix": "م:دُخُول"
    },
    {
        "id": 30,
        "mean": "따라잡다, 이기다",
        "single": "تَفَوَّقَ",
        "plural": "يتفوق على",
        "example": "متى يتفوق اقتصاد الصين على نظيره الأميركي؟",
        "exmean": "언제 중국경제가 미국을 따라 잡았습니까?(미국 보다 뛰어나다)",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 31,
        "mean": "거절하다,피하다",
        "single": "جَنَبَ",
        "plural": "يَجْنُبُ",
        "example": "لذا فإن إجراء الانتخابات الآن يجنب ماي هذه المخاطرة.",
        "exmean": "선거를 중지함으로써, 메이는 위험을 피했다.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 32,
        "mean": "거주하다,세우다",
        "single": "أَقَامَ",
        "plural": "يُقِيمُ",
        "example": "يقيم الزوجان في مدريد، إسبانيا.",
        "exmean": "그 커플은 스페인 마드리드에 거주한다",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 33,
        "mean": "바라보다",
        "single": "نَظَرَ",
        "plural": "يَنْظُرُ",
        "example": "إنّه الرجل الوحيد الذي لا ينظر إليكِ.",
        "exmean": "그는 너를 바라보지 않은 유일한 남자이다.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 34,
        "mean": "~에 두다, 설치하다",
        "single": "وَضَعَ",
        "plural": "يَضَعُ",
        "example": "لـماذا يضع القـاتل رسـالته في جريـدة؟",
        "exmean": "왜 그 킬러는 그의 메시지를 신문에 남겨두었나요?",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 35,
        "mean": "마시다",
        "single": "شَرِبَ",
        "plural": "يَشْرَبُ",
        "example": "معظمنا يشرب فنجان قهوة على معدة فارغة.",
        "exmean": "대부분의 사람들은(우리들 중 대부분은) 빈속에 커피를 마신다.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 36,
        "mean": "추천하다, 조언하다",
        "single": "نَصَحَ",
        "plural": "يَنْصَحُ بـ",
        "example": "بعد ذلك، ينصح الأطباء بأخذ استراحة ليوم واحد.",
        "exmean": "그 후에, 의사는 하루 쉬라고 조언했다.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 37,
        "mean": "~을 연습시키다",
        "single": "دَرِبَ",
        "plural": "يَدْرَبُ",
        "example": "وهو مبني على مئات الساعات من الابحاث والتدريب",
        "exmean": "그것은 수백 시간의 연구와 연습에 기반한 것이다.",
        "part": "verb",
        "appendix": "دَرَّبَ - يُدَرِّبُ (م: تَدْرِيبٌ) 2형"
    },
    {
        "id": 38,
        "mean": "웃다",
        "single": "ضَحِكَ",
        "plural": "يَضْحَكُ",
        "example": "وأنا مازلت معك لأنك تحملنيعلى الضحك.",
        "exmean": "너가 날 웃게 하기 때문에 나는 너의 곁에 있는거야.",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 39,
        "mean": "환영하다",
        "single": "رَحَّبَ",
        "plural": "يُرَحِّبُ",
        "example": "ابتسم، ورحب بهم، واسألهم عن أحوالهم.",
        "exmean": "미소 지으세요, 그리고 그들을 환영하세요, 또 그들에게 안부를 물어보세요",
        "part": "verb",
        "appendix": ""
    },
    {
        "id": 40,
        "mean": "결혼하다",
        "single": "زَوَّجَ",
        "plural": "يُزَوِّجُ",
        "example": "لا أحد يجب أن يزوّج ألا الشخص الذي يحبه.",
        "exmean": "아무도 그들이 사랑하는 사람과 결혼하지 않았다.",
        "part": "",
        "appendix": ""
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"km0km":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
var _worddata = require("../worddata");
class Search extends (0, _coreComponent.CoreCompoent) {
    render() {
        this.el.classList.add("search");
        this.el.innerHTML = /* html */ `
    <div id="searcharea">
    <input
        placeholder ="Enter the word mean"
      >
      <button id="lang">
        KR
      </button>
    </div>
      <div>
        <ul>
          <li class="result">단어를 검색해 보세요!</li>
        </ul>
      </div>

    `;
        const inputEl = this.el.querySelector("input");
        const resultEl = this.el.querySelector(".result");
        const langSelectBtnEl = this.el.querySelector("#lang");
        // 언어선택 버튼 - KR을 기본값으로 두고, class 에 "AR"이 추가되면 버튼의 내용이 AR 로 바뀌도록함
        langSelectBtnEl.addEventListener("click", ()=>{
            if (langSelectBtnEl.classList) // toggle 을 사용하여 자유로운 전환이 가능하도록 함
            langSelectBtnEl.classList.toggle("AR");
            langSelectBtnEl.innerHTML = langSelectBtnEl.classList == "AR" ? `AR` : `KR`;
        });
        inputEl.addEventListener("input", ()=>{
            (0, _worddata.DATA).map((item)=>{
                // 만약 class에 "AR"이 활성화된 상태라면
                if (langSelectBtnEl.classList == "AR") // 이때는 input value 와 일치하는 아랍어 단어를 찾도록 함
                // 단수와 복수, 현재와 미완료형과 일치하는 모든 단어를 찾을 수 있도록 OR 연산자를 사용함
                {
                    if (item.single.indexOf(inputEl.value) !== -1 || item.plural.indexOf(inputEl.value) !== -1) resultEl.innerHTML = `
            ${item.single} - ${item.plural} : ${item.mean}
            `;
                }
                // AR 이 없는 경우 = KR
                if (item.mean.indexOf(inputEl.value) !== -1) resultEl.innerHTML = `
            ${item.single} - ${item.plural} : ${item.mean}
            `;
            });
        });
    }
}
exports.default = Search;

},{"../core/coreComponent":"2sEqF","../worddata":"ctuUF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdB30":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
class About extends (0, _coreComponent.CoreCompoent) {
    render() {
        this.el.innerHTML = /* HTML */ `
    <div class="about">
        <a class = "gitHub" href = 'https://github.com/Anas-wg' target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="100" height="100"/>
          <p>GitHub</p>
        </a>
        <a class="velog" href = 'https://velog.io/@false90' target="_blank">
          <img src="https://images.velog.io/images/kim-mg/post/b6928585-e245-4e5f-b878-0bbf278e5886/velog_logo.png" width="100"/>
          <p>Development Process</p>
        </a>
        <a class="email" href = 'https://mail.google.com/mail/?view=cm&fs=1&to=wg12181218@gmai.com' target="_blank">
          <img src="https://workspace.google.com/static/img/products/png/gmail.png?cache=f50ecb6" width="100" height="100"/>
          <p>E-mail</p>
        </a>
      </div>
    `;
    }
}
exports.default = About;

},{"../core/coreComponent":"2sEqF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4xRt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
var _worddata = require("../worddata");
class Noun extends (0, _coreComponent.CoreCompoent) {
    render() {
        const data = (0, _worddata.DATA);
        this.el.innerHTML = /* html */ `
      <div class="word">
        <ul>
        ${data.filter((data)=>data.part === "noun").map(function(element) {
            return `
            <li class = "wordlist">
            <span>${element.single} ${element.plural ? "-" + element.plural : " "}</span>
              <span>${element.mean}</span>
            </li>
            `;
        }).join("")}
        </ul> 
      </div>
    `;
    }
}
exports.default = Noun;

},{"../core/coreComponent":"2sEqF","../worddata":"ctuUF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KYWK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreComponent = require("../core/coreComponent");
var _worddata = require("../worddata");
class Verb extends (0, _coreComponent.CoreCompoent) {
    render() {
        const data = (0, _worddata.DATA);
        this.el.innerHTML = /* html */ `
      <div class="word">
        <ul>
        ${data.filter((data)=>data.part === "verb").map(function(element) {
            return `
            <li class = "wordlist">
            <span>${element.single} ${element.plural ? "-" + element.plural : " "}</span>
              <span>${element.mean}</span>
            </li>
            `;
        }).join("")}
        </ul> 
      </div>
    `;
    }
}
exports.default = Verb;

},{"../core/coreComponent":"2sEqF","../worddata":"ctuUF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["e11Rl","gLLPy"], "gLLPy", "parcelRequiref982")

//# sourceMappingURL=index.4d6bcbeb.js.map
