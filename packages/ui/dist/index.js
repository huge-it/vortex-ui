"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "../../node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports2) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) return cache2.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache2) cache2.set(obj, newObj);
      return newObj;
    }
    exports2._ = _interop_require_wildcard;
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      assign: function() {
        return assign2;
      },
      searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
      }
    });
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      for (const [key, value] of searchParams.entries()) {
        const existing = query[key];
        if (typeof existing === "undefined") {
          query[key] = value;
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          query[key] = [
            existing,
            value
          ];
        }
      }
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string") {
        return param;
      }
      if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            searchParams.append(key, stringifyUrlQueryParam(item));
          }
        } else {
          searchParams.set(key, stringifyUrlQueryParam(value));
        }
      }
      return searchParams;
    }
    function assign2(target, ...searchParamsList) {
      for (const searchParams of searchParamsList) {
        for (const key of searchParams.keys()) {
          target.delete(key);
        }
        for (const [key, value] of searchParams.entries()) {
          target.append(key, value);
        }
      }
      return target;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      formatUrl: function() {
        return formatUrl;
      },
      formatWithValidation: function() {
        return formatWithValidation;
      },
      urlObjectKeys: function() {
        return urlObjectKeys;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _querystring = /* @__PURE__ */ _interop_require_wildcard._(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash2 = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && `?${query}` || "";
      if (protocol && !protocol.endsWith(":")) protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash2 && hash2[0] !== "#") hash2 = "#" + hash2;
      if (search && search[0] !== "?") search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return `${protocol}${host}${pathname}${search}${hash2}`;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function formatWithValidation(url) {
      if (process.env.NODE_ENV === "development") {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (!urlObjectKeys.includes(key)) {
              console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/omit.js
var require_omit = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/omit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "omit", {
      enumerable: true,
      get: function() {
        return omit;
      }
    });
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DecodeError: function() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function() {
        return MissingStaticPage;
      },
      NormalizeError: function() {
        return NormalizeError;
      },
      PageNotFoundError: function() {
        return PageNotFoundError;
      },
      SP: function() {
        return SP;
      },
      ST: function() {
        return ST;
      },
      WEB_VITALS: function() {
        return WEB_VITALS;
      },
      execOnce: function() {
        return execOnce;
      },
      getDisplayName: function() {
        return getDisplayName;
      },
      getLocationOrigin: function() {
        return getLocationOrigin;
      },
      getURL: function() {
        return getURL;
      },
      isAbsoluteUrl: function() {
        return isAbsoluteUrl;
      },
      isResSent: function() {
        return isResSent;
      },
      loadGetInitialProps: function() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function() {
        return stringifyError;
      }
    });
    var WEB_VITALS = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function execOnce(fn) {
      let used = false;
      let result;
      return (...args) => {
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => {
      const c = url.charCodeAt(0);
      const isLetter = c >= 65 && c <= 90 || c >= 97 && c <= 122;
      if (!isLetter) {
        return false;
      }
      return ABSOLUTE_URL_REGEX.test(url);
    };
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return `${protocol}//${hostname}${port ? ":" + port : ""}`;
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? `?${urlParts.slice(1).join("?")}` : "");
    }
    async function loadGetInitialProps(App, ctx) {
      if (process.env.NODE_ENV !== "production") {
        if (App.prototype?.getInitialProps) {
          const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
          throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1035",
            enumerable: false,
            configurable: true
          });
        }
      }
      const res = ctx.res || ctx.ctx && ctx.ctx.res;
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E1025",
          enumerable: false,
          configurable: true
        });
      }
      if (process.env.NODE_ENV !== "production") {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
      }
      return props;
    }
    var SP = typeof performance !== "undefined";
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    var DecodeError = class extends Error {
    };
    var NormalizeError = class extends Error {
    };
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = `Cannot find module for page: ${page}`;
      }
    };
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
      }
    };
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = `Cannot find the middleware module`;
      }
    };
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack
      });
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "removeTrailingSlash", {
      enumerable: true,
      get: function() {
        return removeTrailingSlash;
      }
    });
    function removeTrailingSlash(route) {
      return route.charCodeAt(route.length - 1) === 47 && route.length > 1 ? route.slice(0, -1) : route;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "parsePath", {
      enumerable: true,
      get: function() {
        return parsePath;
      }
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/normalize-trailing-slash.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizePathTrailingSlash", {
      enumerable: true,
      get: function() {
        return normalizePathTrailingSlash;
      }
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _parsepath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (path.charCodeAt(0) !== 47 || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
      }
      const { pathname, query, hash: hash2 } = (0, _parsepath.parsePath)(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return `${(0, _removetrailingslash.removeTrailingSlash)(pathname)}${query}${hash2}`;
        } else if (pathname.endsWith("/")) {
          return `${pathname}${query}${hash2}`;
        } else {
          return `${pathname}/${query}${hash2}`;
        }
      }
      return `${(0, _removetrailingslash.removeTrailingSlash)(pathname)}${query}${hash2}`;
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "pathHasPrefix", {
      enumerable: true,
      get: function() {
        return pathHasPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix2) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix2 || pathname.startsWith(prefix2 + "/");
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/has-base-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "hasBasePath", {
      enumerable: true,
      get: function() {
        return hasBasePath;
      }
    });
    var _pathhasprefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/is-local-url.js
var require_is_local_url = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/is-local-url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isLocalURL", {
      enumerable: true,
      get: function() {
        return isLocalURL;
      }
    });
    var _utils = require_utils();
    var _hasbasepath = require_has_base_path();
    function isLocalURL(url) {
      if (!(0, _utils.isAbsoluteUrl)(url)) return true;
      try {
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getSortedRouteObjects: function() {
        return getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return getSortedRoutes;
      }
    });
    var UrlNode = class _UrlNode {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix2 = "/") {
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh(`${prefix2}${c}/`)).reduce((prev2, curr) => [
          ...prev2,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(`${prefix2}[${this.slugName}]/`));
        }
        if (!this.placeholder) {
          const r = prefix2 === "/" ? "/" : prefix2.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw Object.defineProperty(new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: false,
              configurable: true
            });
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(`${prefix2}[...${this.restSlugName}]/`));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(`${prefix2}[[...${this.optionalRestSlugName}]]/`));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw Object.defineProperty(new Error(`Catch-all must be the last part of the URL.`), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: false,
            configurable: true
          });
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw Object.defineProperty(new Error(`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`), "__NEXT_ERROR_CODE", {
                  value: "E337",
                  enumerable: false,
                  configurable: true
                });
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw Object.defineProperty(new Error(`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: false,
                  configurable: true
                });
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw Object.defineProperty(new Error(`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: false,
                  configurable: true
                });
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("\u2026")) {
            throw Object.defineProperty(new Error(`Detected a three-dot character ('\u2026') at ('${segmentName}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw Object.defineProperty(new Error(`Segment names may not start or end with extra brackets ('${segmentName}').`), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith(".")) {
            throw Object.defineProperty(new Error(`Segment names may not start with erroneous periods ('${segmentName}').`), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: false,
              configurable: true
            });
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw Object.defineProperty(new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw Object.defineProperty(new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: false,
                configurable: true
              });
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new _UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
    function getSortedRouteObjects(objects, getter) {
      const indexes = {};
      const pathnames = [];
      for (let i = 0; i < objects.length; i++) {
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
      }
      const sorted = getSortedRoutes(pathnames);
      return sorted.map((pathname) => objects[indexes[pathname]]);
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ensureLeadingSlash", {
      enumerable: true,
      get: function() {
        return ensureLeadingSlash;
      }
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : `/${path}`;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/segment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
      },
      getSegmentValue: function() {
        return getSegmentValue;
      },
      getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    function computeSelectedLayoutSegment(segments, parallelRouteKey) {
      if (!segments || segments.length === 0) {
        return null;
      }
      const rawSegment = parallelRouteKey === "children" ? segments[0] : segments[segments.length - 1];
      return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
    }
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
      let node2;
      if (first) {
        node2 = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        node2 = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
      }
      if (!node2) return segmentPath;
      const segment = node2[0];
      let segmentValue = getSegmentValue(segment);
      if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node2, parallelRouteKey, false, segmentPath);
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
    var NOT_FOUND_SEGMENT_KEY = "/_not-found";
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      compareAppPaths: function() {
        return compareAppPaths;
      },
      normalizeAppPath: function() {
        return normalizeAppPath;
      },
      normalizeRscURL: function() {
        return normalizeRscURL;
      }
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
          return pathname;
        }
        return `${pathname}/${segment}`;
      }, ""));
    }
    function compareAppPaths(a, b) {
      const aHasSlot = a.includes("/@");
      const bHasSlot = b.includes("/@");
      if (aHasSlot && !bHasSlot) return -1;
      if (!aHasSlot && bHasSlot) return 1;
      return a.localeCompare(b);
    }
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/interception-routes.js
var require_interception_routes = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/interception-routes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
      },
      extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
      },
      isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
      }
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))) !== void 0;
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute;
      let marker;
      let interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        if (marker) {
          ;
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: false,
          configurable: true
        });
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = `/${interceptedRoute}`;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: false,
            configurable: true
          });
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return isDynamicRoute;
      }
    });
    var _interceptionroutes = require_interception_routes();
    var TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
    var TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
    function isDynamicRoute(route, strict = true) {
      if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
      }
      if (strict) {
        return TEST_STRICT_ROUTE.test(route);
      }
      return TEST_ROUTE.test(route);
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
      }
    });
    var _sortedroutes = require_sorted_routes();
    var _isdynamic = require_is_dynamic();
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/path-to-regexp/index.js"(exports2, module2) {
    "use strict";
    (() => {
      "use strict";
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var e = {};
      (() => {
        var n = e;
        Object.defineProperty(n, "__esModule", { value: true });
        n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0;
        function lexer(e2) {
          var n2 = [];
          var r = 0;
          while (r < e2.length) {
            var t = e2[r];
            if (t === "*" || t === "+" || t === "?") {
              n2.push({ type: "MODIFIER", index: r, value: e2[r++] });
              continue;
            }
            if (t === "\\") {
              n2.push({ type: "ESCAPED_CHAR", index: r++, value: e2[r++] });
              continue;
            }
            if (t === "{") {
              n2.push({ type: "OPEN", index: r, value: e2[r++] });
              continue;
            }
            if (t === "}") {
              n2.push({ type: "CLOSE", index: r, value: e2[r++] });
              continue;
            }
            if (t === ":") {
              var a = "";
              var i = r + 1;
              while (i < e2.length) {
                var o = e2.charCodeAt(i);
                if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                  a += e2[i++];
                  continue;
                }
                break;
              }
              if (!a) throw new TypeError("Missing parameter name at ".concat(r));
              n2.push({ type: "NAME", index: r, value: a });
              r = i;
              continue;
            }
            if (t === "(") {
              var c = 1;
              var f = "";
              var i = r + 1;
              if (e2[i] === "?") {
                throw new TypeError('Pattern cannot start with "?" at '.concat(i));
              }
              while (i < e2.length) {
                if (e2[i] === "\\") {
                  f += e2[i++] + e2[i++];
                  continue;
                }
                if (e2[i] === ")") {
                  c--;
                  if (c === 0) {
                    i++;
                    break;
                  }
                } else if (e2[i] === "(") {
                  c++;
                  if (e2[i + 1] !== "?") {
                    throw new TypeError("Capturing groups are not allowed at ".concat(i));
                  }
                }
                f += e2[i++];
              }
              if (c) throw new TypeError("Unbalanced pattern at ".concat(r));
              if (!f) throw new TypeError("Missing pattern at ".concat(r));
              n2.push({ type: "PATTERN", index: r, value: f });
              r = i;
              continue;
            }
            n2.push({ type: "CHAR", index: r, value: e2[r++] });
          }
          n2.push({ type: "END", index: r, value: "" });
          return n2;
        }
        function parse2(e2, n2) {
          if (n2 === void 0) {
            n2 = {};
          }
          var r = lexer(e2);
          var t = n2.prefixes, a = t === void 0 ? "./" : t, i = n2.delimiter, o = i === void 0 ? "/#?" : i;
          var c = [];
          var f = 0;
          var u = 0;
          var p = "";
          var tryConsume = function(e3) {
            if (u < r.length && r[u].type === e3) return r[u++].value;
          };
          var mustConsume = function(e3) {
            var n3 = tryConsume(e3);
            if (n3 !== void 0) return n3;
            var t2 = r[u], a2 = t2.type, i2 = t2.index;
            throw new TypeError("Unexpected ".concat(a2, " at ").concat(i2, ", expected ").concat(e3));
          };
          var consumeText = function() {
            var e3 = "";
            var n3;
            while (n3 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
              e3 += n3;
            }
            return e3;
          };
          var isSafe = function(e3) {
            for (var n3 = 0, r2 = o; n3 < r2.length; n3++) {
              var t2 = r2[n3];
              if (e3.indexOf(t2) > -1) return true;
            }
            return false;
          };
          var safePattern = function(e3) {
            var n3 = c[c.length - 1];
            var r2 = e3 || (n3 && typeof n3 === "string" ? n3 : "");
            if (n3 && !r2) {
              throw new TypeError('Must have text between two parameters, missing text after "'.concat(n3.name, '"'));
            }
            if (!r2 || isSafe(r2)) return "[^".concat(escapeString(o), "]+?");
            return "(?:(?!".concat(escapeString(r2), ")[^").concat(escapeString(o), "])+?");
          };
          while (u < r.length) {
            var v = tryConsume("CHAR");
            var s = tryConsume("NAME");
            var d = tryConsume("PATTERN");
            if (s || d) {
              var g = v || "";
              if (a.indexOf(g) === -1) {
                p += g;
                g = "";
              }
              if (p) {
                c.push(p);
                p = "";
              }
              c.push({ name: s || f++, prefix: g, suffix: "", pattern: d || safePattern(g), modifier: tryConsume("MODIFIER") || "" });
              continue;
            }
            var x = v || tryConsume("ESCAPED_CHAR");
            if (x) {
              p += x;
              continue;
            }
            if (p) {
              c.push(p);
              p = "";
            }
            var h = tryConsume("OPEN");
            if (h) {
              var g = consumeText();
              var l = tryConsume("NAME") || "";
              var m = tryConsume("PATTERN") || "";
              var T = consumeText();
              mustConsume("CLOSE");
              c.push({ name: l || (m ? f++ : ""), pattern: l && !m ? safePattern(g) : m, prefix: g, suffix: T, modifier: tryConsume("MODIFIER") || "" });
              continue;
            }
            mustConsume("END");
          }
          return c;
        }
        n.parse = parse2;
        function compile2(e2, n2) {
          return tokensToFunction(parse2(e2, n2), n2);
        }
        n.compile = compile2;
        function tokensToFunction(e2, n2) {
          if (n2 === void 0) {
            n2 = {};
          }
          var r = flags(n2);
          var t = n2.encode, a = t === void 0 ? function(e3) {
            return e3;
          } : t, i = n2.validate, o = i === void 0 ? true : i;
          var c = e2.map((function(e3) {
            if (typeof e3 === "object") {
              return new RegExp("^(?:".concat(e3.pattern, ")$"), r);
            }
          }));
          return function(n3) {
            var r2 = "";
            for (var t2 = 0; t2 < e2.length; t2++) {
              var i2 = e2[t2];
              if (typeof i2 === "string") {
                r2 += i2;
                continue;
              }
              var f = n3 ? n3[i2.name] : void 0;
              var u = i2.modifier === "?" || i2.modifier === "*";
              var p = i2.modifier === "*" || i2.modifier === "+";
              if (Array.isArray(f)) {
                if (!p) {
                  throw new TypeError('Expected "'.concat(i2.name, '" to not repeat, but got an array'));
                }
                if (f.length === 0) {
                  if (u) continue;
                  throw new TypeError('Expected "'.concat(i2.name, '" to not be empty'));
                }
                for (var v = 0; v < f.length; v++) {
                  var s = a(f[v], i2);
                  if (o && !c[t2].test(s)) {
                    throw new TypeError('Expected all "'.concat(i2.name, '" to match "').concat(i2.pattern, '", but got "').concat(s, '"'));
                  }
                  r2 += i2.prefix + s + i2.suffix;
                }
                continue;
              }
              if (typeof f === "string" || typeof f === "number") {
                var s = a(String(f), i2);
                if (o && !c[t2].test(s)) {
                  throw new TypeError('Expected "'.concat(i2.name, '" to match "').concat(i2.pattern, '", but got "').concat(s, '"'));
                }
                r2 += i2.prefix + s + i2.suffix;
                continue;
              }
              if (u) continue;
              var d = p ? "an array" : "a string";
              throw new TypeError('Expected "'.concat(i2.name, '" to be ').concat(d));
            }
            return r2;
          };
        }
        n.tokensToFunction = tokensToFunction;
        function match2(e2, n2) {
          var r = [];
          var t = pathToRegexp(e2, r, n2);
          return regexpToFunction(t, r, n2);
        }
        n.match = match2;
        function regexpToFunction(e2, n2, r) {
          if (r === void 0) {
            r = {};
          }
          var t = r.decode, a = t === void 0 ? function(e3) {
            return e3;
          } : t;
          return function(r2) {
            var t2 = e2.exec(r2);
            if (!t2) return false;
            var i = t2[0], o = t2.index;
            var c = /* @__PURE__ */ Object.create(null);
            var _loop_1 = function(e3) {
              if (t2[e3] === void 0) return "continue";
              var r3 = n2[e3 - 1];
              if (r3.modifier === "*" || r3.modifier === "+") {
                c[r3.name] = t2[e3].split(r3.prefix + r3.suffix).map((function(e4) {
                  return a(e4, r3);
                }));
              } else {
                c[r3.name] = a(t2[e3], r3);
              }
            };
            for (var f = 1; f < t2.length; f++) {
              _loop_1(f);
            }
            return { path: i, index: o, params: c };
          };
        }
        n.regexpToFunction = regexpToFunction;
        function escapeString(e2) {
          return e2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e2) {
          return e2 && e2.sensitive ? "" : "i";
        }
        function regexpToRegexp(e2, n2) {
          if (!n2) return e2;
          var r = /\((?:\?<(.*?)>)?(?!\?)/g;
          var t = 0;
          var a = r.exec(e2.source);
          while (a) {
            n2.push({ name: a[1] || t++, prefix: "", suffix: "", modifier: "", pattern: "" });
            a = r.exec(e2.source);
          }
          return e2;
        }
        function arrayToRegexp(e2, n2, r) {
          var t = e2.map((function(e3) {
            return pathToRegexp(e3, n2, r).source;
          }));
          return new RegExp("(?:".concat(t.join("|"), ")"), flags(r));
        }
        function stringToRegexp(e2, n2, r) {
          return tokensToRegexp(parse2(e2, r), n2, r);
        }
        function tokensToRegexp(e2, n2, r) {
          if (r === void 0) {
            r = {};
          }
          var t = r.strict, a = t === void 0 ? false : t, i = r.start, o = i === void 0 ? true : i, c = r.end, f = c === void 0 ? true : c, u = r.encode, p = u === void 0 ? function(e3) {
            return e3;
          } : u, v = r.delimiter, s = v === void 0 ? "/#?" : v, d = r.endsWith, g = d === void 0 ? "" : d;
          var x = "[".concat(escapeString(g), "]|$");
          var h = "[".concat(escapeString(s), "]");
          var l = o ? "^" : "";
          for (var m = 0, T = e2; m < T.length; m++) {
            var E = T[m];
            if (typeof E === "string") {
              l += escapeString(p(E));
            } else {
              var w = escapeString(p(E.prefix));
              var y = escapeString(p(E.suffix));
              if (E.pattern) {
                if (n2) n2.push(E);
                if (w || y) {
                  if (E.modifier === "+" || E.modifier === "*") {
                    var R = E.modifier === "*" ? "?" : "";
                    l += "(?:".concat(w, "((?:").concat(E.pattern, ")(?:").concat(y).concat(w, "(?:").concat(E.pattern, "))*)").concat(y, ")").concat(R);
                  } else {
                    l += "(?:".concat(w, "(").concat(E.pattern, ")").concat(y, ")").concat(E.modifier);
                  }
                } else {
                  if (E.modifier === "+" || E.modifier === "*") {
                    throw new TypeError('Can not repeat "'.concat(E.name, '" without a prefix and suffix'));
                  }
                  l += "(".concat(E.pattern, ")").concat(E.modifier);
                }
              } else {
                l += "(?:".concat(w).concat(y, ")").concat(E.modifier);
              }
            }
          }
          if (f) {
            if (!a) l += "".concat(h, "?");
            l += !r.endsWith ? "$" : "(?=".concat(x, ")");
          } else {
            var A = e2[e2.length - 1];
            var _ = typeof A === "string" ? h.indexOf(A[A.length - 1]) > -1 : A === void 0;
            if (!a) {
              l += "(?:".concat(h, "(?=").concat(x, "))?");
            }
            if (!_) {
              l += "(?=".concat(h, "|").concat(x, ")");
            }
          }
          return new RegExp(l, flags(r));
        }
        n.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e2, n2, r) {
          if (e2 instanceof RegExp) return regexpToRegexp(e2, n2);
          if (Array.isArray(e2)) return arrayToRegexp(e2, n2, r);
          return stringToRegexp(e2, n2, r);
        }
        n.pathToRegexp = pathToRegexp;
      })();
      module2.exports = e;
    })();
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/route-pattern-normalizer.js
var require_route_pattern_normalizer = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/route-pattern-normalizer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      PARAM_SEPARATOR: function() {
        return PARAM_SEPARATOR;
      },
      hasAdjacentParameterIssues: function() {
        return hasAdjacentParameterIssues;
      },
      normalizeAdjacentParameters: function() {
        return normalizeAdjacentParameters;
      },
      normalizeTokensForRegexp: function() {
        return normalizeTokensForRegexp;
      },
      stripNormalizedSeparators: function() {
        return stripNormalizedSeparators;
      },
      stripParameterSeparators: function() {
        return stripParameterSeparators;
      }
    });
    var PARAM_SEPARATOR = "_NEXTSEP_";
    function hasAdjacentParameterIssues(route) {
      if (typeof route !== "string") return false;
      if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
      }
      if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
      }
      return false;
    }
    function normalizeAdjacentParameters(route) {
      let normalized = route;
      normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
      normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
      return normalized;
    }
    function normalizeTokensForRegexp(tokens) {
      return tokens.map((token2) => {
        if (typeof token2 === "object" && token2 !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        "modifier" in token2 && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token2.modifier === "*" || token2.modifier === "+") && // Token objects can have different shapes depending on route pattern
        "prefix" in token2 && "suffix" in token2 && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token2.prefix === "" && token2.suffix === "") {
          return {
            ...token2,
            prefix: "/"
          };
        }
        return token2;
      });
    }
    function stripNormalizedSeparators(pathname) {
      return pathname.replace(new RegExp(`\\)${PARAM_SEPARATOR}`, "g"), ")");
    }
    function stripParameterSeparators(params) {
      const cleaned = {};
      for (const [key, value] of Object.entries(params)) {
        if (typeof value === "string") {
          cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), "");
        } else if (Array.isArray(value)) {
          cleaned[key] = value.map((item) => typeof item === "string" ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), "") : item);
        } else {
          cleaned[key] = value;
        }
      }
      return cleaned;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/route-match-utils.js
var require_route_match_utils = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/route-match-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      safeCompile: function() {
        return safeCompile;
      },
      safePathToRegexp: function() {
        return safePathToRegexp;
      },
      safeRegexpToFunction: function() {
        return safeRegexpToFunction;
      },
      safeRouteMatcher: function() {
        return safeRouteMatcher;
      }
    });
    var _pathtoregexp = require_path_to_regexp();
    var _routepatternnormalizer = require_route_pattern_normalizer();
    function safePathToRegexp(route, keys, options) {
      if (typeof route !== "string") {
        return (0, _pathtoregexp.pathToRegexp)(route, keys, options);
      }
      const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
      const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
      try {
        return (0, _pathtoregexp.pathToRegexp)(routeToUse, keys, options);
      } catch (error) {
        if (!needsNormalization) {
          try {
            const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
            return (0, _pathtoregexp.pathToRegexp)(normalizedRoute, keys, options);
          } catch (retryError) {
            throw error;
          }
        }
        throw error;
      }
    }
    function safeCompile(route, options) {
      const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
      const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
      try {
        const compiler = (0, _pathtoregexp.compile)(routeToUse, options);
        if (needsNormalization) {
          return (params) => {
            return (0, _routepatternnormalizer.stripNormalizedSeparators)(compiler(params));
          };
        }
        return compiler;
      } catch (error) {
        if (!needsNormalization) {
          try {
            const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
            const compiler = (0, _pathtoregexp.compile)(normalizedRoute, options);
            return (params) => {
              return (0, _routepatternnormalizer.stripNormalizedSeparators)(compiler(params));
            };
          } catch (retryError) {
            throw error;
          }
        }
        throw error;
      }
    }
    function safeRegexpToFunction(regexp, keys) {
      const originalMatcher = (0, _pathtoregexp.regexpToFunction)(regexp, keys || []);
      return (pathname) => {
        const result = originalMatcher(pathname);
        if (!result) return false;
        return {
          ...result,
          params: (0, _routepatternnormalizer.stripParameterSeparators)(result.params)
        };
      };
    }
    function safeRouteMatcher(matcherFn) {
      return (pathname) => {
        const result = matcherFn(pathname);
        if (!result) return false;
        return (0, _routepatternnormalizer.stripParameterSeparators)(result);
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getRouteMatcher", {
      enumerable: true,
      get: function() {
        return getRouteMatcher;
      }
    });
    var _utils = require_utils();
    var _routematchutils = require_route_match_utils();
    function getRouteMatcher({ re, groups }) {
      const rawMatcher = (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param) => {
          try {
            return decodeURIComponent(param);
          } catch {
            throw Object.defineProperty(new _utils.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: false,
              configurable: true
            });
          }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)) {
          const match2 = routeMatch[group.pos];
          if (match2 !== void 0) {
            if (group.repeat) {
              params[key] = match2.split("/").map((entry) => decode(entry));
            } else {
              params[key] = decode(match2);
            }
          }
        }
        return params;
      };
      return (0, _routematchutils.safeRouteMatcher)(rawMatcher);
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      CACHE_ONE_YEAR_SECONDS: function() {
        return CACHE_ONE_YEAR_SECONDS;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return HTML_CONTENT_TYPE_HEADER;
      },
      INFINITE_CACHE: function() {
        return INFINITE_CACHE;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return JSON_CONTENT_TYPE_HEADER;
      },
      MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_ROOT_PARAM_TAG_ID: function() {
        return NEXT_CACHE_ROOT_PARAM_TAG_ID;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      },
      NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
      },
      NEXT_NAV_DEPLOYMENT_ID_HEADER: function() {
        return NEXT_NAV_DEPLOYMENT_ID_HEADER;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
      },
      NEXT_RESUME_STATE_LENGTH_HEADER: function() {
        return NEXT_RESUME_STATE_LENGTH_HEADER;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      PROXY_FILENAME: function() {
        return PROXY_FILENAME;
      },
      PROXY_LOCATION_REGEXP: function() {
        return PROXY_LOCATION_REGEXP;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
      },
      RSC_SUFFIX: function() {
        return RSC_SUFFIX;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      },
      WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return WEB_SOCKET_MAX_RECONNECTIONS;
      }
    });
    var TEXT_PLAIN_CONTENT_TYPE_HEADER = "text/plain";
    var HTML_CONTENT_TYPE_HEADER = "text/html; charset=utf-8";
    var JSON_CONTENT_TYPE_HEADER = "application/json; charset=utf-8";
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_NAV_DEPLOYMENT_ID_HEADER = "x-nextjs-deployment-id";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_RESUME_STATE_LENGTH_HEADER = "x-next-resume-state-length";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var NEXT_CACHE_ROOT_PARAM_TAG_ID = "_N_RP_";
    var CACHE_ONE_YEAR_SECONDS = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var PROXY_FILENAME = "proxy";
    var PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = "private-next-rsc-track-dynamic-import";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEB_SOCKET_MAX_RECONNECTIONS = 12;
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.apiNode,
          WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/escape-regexp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "escapeStringRegexp", {
      enumerable: true,
      get: function() {
        return escapeStringRegexp;
      }
    });
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/invariant-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super(`Invariant: ${message.endsWith(".") ? message : message + "."} This is a bug in Next.js.`, options);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
          value: "E1179",
          enumerable: false,
          configurable: true
        });
        this.name = "InvariantError";
      }
    };
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/parse-loader-tree.js
var require_parse_loader_tree = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/parse-loader-tree.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "parseLoaderTree", {
      enumerable: true,
      get: function() {
        return parseLoaderTree;
      }
    });
    var _segment = require_segment();
    function parseLoaderTree(tree) {
      const [segment, parallelRoutes, modules, staticSiblings] = tree;
      const { layout, template } = modules;
      let { page } = modules;
      page = segment === _segment.DEFAULT_SEGMENT_KEY ? modules.defaultPage : page;
      const conventionPath = layout?.[1] || template?.[1] || page?.[1];
      return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */
        conventionPath,
        parallelRoutes,
        staticSiblings
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/get-segment-param.js
var require_get_segment_param = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/get-segment-param.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getParamProperties: function() {
        return getParamProperties;
      },
      getSegmentParam: function() {
        return getSegmentParam;
      },
      isCatchAll: function() {
        return isCatchAll;
      }
    });
    var _interceptionroutes = require_interception_routes();
    function getSegmentParam(segment) {
      const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker) => segment.startsWith(marker));
      if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
      }
      if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
          // TODO-APP: Optional catchall does not currently work with parallel routes,
          // so for now aren't handling a potential interception marker.
          paramType: "optional-catchall",
          paramName: segment.slice(5, -2)
        };
      }
      if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
          paramType: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : "catchall",
          paramName: segment.slice(4, -1)
        };
      }
      if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
          paramType: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : "dynamic",
          paramName: segment.slice(1, -1)
        };
      }
      return null;
    }
    function isCatchAll(type) {
      return type === "catchall" || type === "catchall-intercepted-(..)(..)" || type === "catchall-intercepted-(.)" || type === "catchall-intercepted-(..)" || type === "catchall-intercepted-(...)" || type === "optional-catchall";
    }
    function getParamProperties(paramType) {
      let repeat = false;
      let optional = false;
      switch (paramType) {
        case "catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          repeat = true;
          break;
        case "optional-catchall":
          repeat = true;
          optional = true;
          break;
        case "dynamic":
        case "dynamic-intercepted-(..)(..)":
        case "dynamic-intercepted-(.)":
        case "dynamic-intercepted-(..)":
        case "dynamic-intercepted-(...)":
          break;
        default:
          paramType;
      }
      return {
        repeat,
        optional
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/routes/app.js
var require_app = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/routes/app.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      isInterceptionAppRoute: function() {
        return isInterceptionAppRoute;
      },
      isNormalizedAppRoute: function() {
        return isNormalizedAppRoute;
      },
      parseAppRouteSegment: function() {
        return parseAppRouteSegment;
      },
      parseAppRouteWithSlots: function() {
        return parseAppRouteWithSlots;
      },
      parseNormalizedAppRoute: function() {
        return parseNormalizedAppRoute;
      }
    });
    var _invarianterror = require_invariant_error();
    var _getsegmentparam = require_get_segment_param();
    var _interceptionroutes = require_interception_routes();
    function normalizeEncodedDynamicPlaceholder(segment) {
      if (!/%5b|%5d/i.test(segment)) {
        return segment;
      }
      try {
        const decodedSegment = decodeURIComponent(segment);
        return (0, _getsegmentparam.getSegmentParam)(decodedSegment) ? decodedSegment : segment;
      } catch {
        return segment;
      }
    }
    function parseAppRouteSegment(segment) {
      if (segment === "") {
        return null;
      }
      const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
      const param = (0, _getsegmentparam.getSegmentParam)(segment);
      if (param) {
        return {
          type: "dynamic",
          name: segment,
          param,
          interceptionMarker
        };
      } else if (segment.startsWith("(") && segment.endsWith(")")) {
        return {
          type: "route-group",
          name: segment,
          interceptionMarker
        };
      } else if (segment.startsWith("@")) {
        return {
          type: "parallel-route",
          name: segment,
          interceptionMarker
        };
      } else {
        return {
          type: "static",
          name: segment,
          interceptionMarker
        };
      }
    }
    function isNormalizedAppRoute(route) {
      return route.normalized;
    }
    function isInterceptionAppRoute(route) {
      return route.interceptionMarker !== void 0 && route.interceptingRoute !== void 0 && route.interceptedRoute !== void 0;
    }
    var OnlyRoutableSegments = (
      /*   */
      0
    );
    var AllowParallelSegments = (
      /*  */
      1
    );
    var AllowGroupSegments = (
      /*     */
      2
    );
    function parseAppRouteImpl(pathname, allowedTypes) {
      const pathnameSegments = pathname.split("/").filter(Boolean);
      const segments = [];
      let interceptionMarker;
      let interceptingRoute;
      let interceptedRoute;
      for (const segment of pathnameSegments) {
        const normalizedSegment = normalizeEncodedDynamicPlaceholder(segment);
        const appSegment = parseAppRouteSegment(normalizedSegment);
        if (!appSegment) {
          continue;
        }
        if (appSegment.type === "route-group" && !(allowedTypes & AllowGroupSegments)) {
          throw Object.defineProperty(new _invarianterror.InvariantError(`${pathname} is being parsed as a normalized route, but it has a route group segment.`), "__NEXT_ERROR_CODE", {
            value: "E1151",
            enumerable: false,
            configurable: true
          });
        }
        if (appSegment.type === "parallel-route" && !(allowedTypes & AllowParallelSegments)) {
          throw Object.defineProperty(new _invarianterror.InvariantError(`${pathname} is being parsed as a normalized route, but it has a parallel route segment.`), "__NEXT_ERROR_CODE", {
            value: "E1152",
            enumerable: false,
            configurable: true
          });
        }
        segments.push(appSegment);
        if (appSegment.interceptionMarker) {
          const parts = pathname.split(appSegment.interceptionMarker);
          if (parts.length !== 2) {
            throw Object.defineProperty(new Error(`Invalid interception route: ${pathname}`), "__NEXT_ERROR_CODE", {
              value: "E924",
              enumerable: false,
              configurable: true
            });
          }
          interceptingRoute = parseAppRouteImpl(parts[0], allowedTypes);
          interceptedRoute = parseAppRouteImpl(parts[1], allowedTypes);
          interceptionMarker = appSegment.interceptionMarker;
        }
      }
      const dynamicSegments = segments.filter((segment) => segment.type === "dynamic");
      return {
        normalized: allowedTypes === OnlyRoutableSegments,
        pathname,
        segments,
        dynamicSegments,
        interceptionMarker,
        interceptingRoute,
        interceptedRoute
      };
    }
    function parseNormalizedAppRoute(pathname) {
      return parseAppRouteImpl(pathname, OnlyRoutableSegments);
    }
    function parseAppRouteWithSlots(pathname) {
      return parseAppRouteImpl(pathname, AllowParallelSegments);
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/interception-prefix-from-param-type.js
var require_interception_prefix_from_param_type = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/interception-prefix-from-param-type.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "interceptionPrefixFromParamType", {
      enumerable: true,
      get: function() {
        return interceptionPrefixFromParamType;
      }
    });
    function interceptionPrefixFromParamType(paramType) {
      switch (paramType) {
        case "catchall-intercepted-(..)(..)":
        case "dynamic-intercepted-(..)(..)":
          return "(..)(..)";
        case "catchall-intercepted-(.)":
        case "dynamic-intercepted-(.)":
          return "(.)";
        case "catchall-intercepted-(..)":
        case "dynamic-intercepted-(..)":
          return "(..)";
        case "catchall-intercepted-(...)":
        case "dynamic-intercepted-(...)":
          return "(...)";
        case "catchall":
        case "dynamic":
        case "optional-catchall":
        default:
          return null;
      }
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/resolve-param-value.js
var require_resolve_param_value = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/resolve-param-value.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "resolveParamValue", {
      enumerable: true,
      get: function() {
        return resolveParamValue;
      }
    });
    var _invarianterror = require_invariant_error();
    var _interceptionprefixfromparamtype = require_interception_prefix_from_param_type();
    function getParamValueFromSegment(pathSegment, params, paramType) {
      if (pathSegment.type === "dynamic") {
        return params[pathSegment.param.paramName];
      }
      const interceptionPrefix = (0, _interceptionprefixfromparamtype.interceptionPrefixFromParamType)(paramType);
      if (interceptionPrefix === pathSegment.interceptionMarker) {
        return pathSegment.name.replace(pathSegment.interceptionMarker, "");
      }
      return pathSegment.name;
    }
    function resolveParamValue(paramName, paramType, depth, route, params) {
      switch (paramType) {
        case "catchall":
        case "optional-catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          const processedSegments = [];
          for (let index = depth; index < route.segments.length; index++) {
            const pathSegment = route.segments[index];
            if (pathSegment.type === "static") {
              let value = pathSegment.name;
              const interceptionPrefix = (0, _interceptionprefixfromparamtype.interceptionPrefixFromParamType)(paramType);
              if (interceptionPrefix && index === depth && interceptionPrefix === pathSegment.interceptionMarker) {
                value = value.replace(pathSegment.interceptionMarker, "");
              }
              processedSegments.push(value);
            } else {
              if (!params.hasOwnProperty(pathSegment.param.paramName)) {
                if (pathSegment.param.paramType === "optional-catchall") {
                  break;
                }
                return void 0;
              }
              const paramValue = params[pathSegment.param.paramName];
              if (Array.isArray(paramValue)) {
                processedSegments.push(...paramValue);
              } else {
                processedSegments.push(paramValue);
              }
            }
          }
          if (processedSegments.length > 0) {
            return processedSegments;
          } else if (paramType === "optional-catchall") {
            return void 0;
          } else {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Unexpected empty path segments match for a route "${route.pathname}" with param "${paramName}" of type "${paramType}"`), "__NEXT_ERROR_CODE", {
              value: "E931",
              enumerable: false,
              configurable: true
            });
          }
        case "dynamic":
        case "dynamic-intercepted-(..)(..)":
        case "dynamic-intercepted-(.)":
        case "dynamic-intercepted-(..)":
        case "dynamic-intercepted-(...)":
          if (depth < route.segments.length) {
            const pathSegment = route.segments[depth];
            if (pathSegment.type === "dynamic" && !params.hasOwnProperty(pathSegment.param.paramName)) {
              return void 0;
            }
            return getParamValueFromSegment(pathSegment, params, paramType);
          }
          return void 0;
        default:
          paramType;
      }
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js
var require_get_dynamic_param = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      PARAMETER_PATTERN: function() {
        return PARAMETER_PATTERN;
      },
      getDynamicParam: function() {
        return getDynamicParam;
      },
      interpolateParallelRouteParams: function() {
        return interpolateParallelRouteParams;
      },
      parseMatchedParameter: function() {
        return parseMatchedParameter;
      },
      parseParameter: function() {
        return parseParameter;
      }
    });
    var _invarianterror = require_invariant_error();
    var _parseloadertree = require_parse_loader_tree();
    var _app = require_app();
    var _resolveparamvalue = require_resolve_param_value();
    function getParamValue(interpolatedParams, segmentKey, fallbackRouteParams) {
      let value = interpolatedParams[segmentKey];
      if (fallbackRouteParams?.has(segmentKey)) {
        const [searchValue] = fallbackRouteParams.get(segmentKey);
        value = searchValue;
      } else if (Array.isArray(value)) {
        value = value.map((i) => encodeURIComponent(i));
      } else if (typeof value === "string") {
        value = encodeURIComponent(value);
      }
      return value;
    }
    function interpolateParallelRouteParams(loaderTree, params, pagePath, fallbackRouteParams) {
      const interpolated = structuredClone(params);
      const stack = [
        {
          tree: loaderTree,
          depth: 0
        }
      ];
      const route = (0, _app.parseNormalizedAppRoute)(pagePath);
      while (stack.length > 0) {
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, _parseloadertree.parseLoaderTree)(tree);
        const appSegment = (0, _app.parseAppRouteSegment)(segment);
        if (appSegment?.type === "dynamic" && !interpolated.hasOwnProperty(appSegment.param.paramName) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !fallbackRouteParams?.has(appSegment.param.paramName)) {
          const { paramName, paramType } = appSegment.param;
          const paramValue = (0, _resolveparamvalue.resolveParamValue)(paramName, paramType, depth, route, interpolated);
          if (paramValue !== void 0) {
            interpolated[paramName] = paramValue;
          } else if (paramType !== "optional-catchall") {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Could not resolve param value for segment: ${paramName}`), "__NEXT_ERROR_CODE", {
              value: "E932",
              enumerable: false,
              configurable: true
            });
          }
        }
        let nextDepth = depth;
        if (appSegment && appSegment.type !== "route-group" && appSegment.type !== "parallel-route") {
          nextDepth++;
        }
        for (const parallelRoute of Object.values(parallelRoutes)) {
          stack.push({
            tree: parallelRoute,
            depth: nextDepth
          });
        }
      }
      return interpolated;
    }
    function getDynamicParam(interpolatedParams, segmentKey, dynamicParamType, fallbackRouteParams, staticSiblings) {
      let value = getParamValue(interpolatedParams, segmentKey, fallbackRouteParams);
      if (!value || value.length === 0) {
        if (dynamicParamType === "oc") {
          return {
            param: segmentKey,
            value: null,
            type: dynamicParamType,
            treeSegment: [
              segmentKey,
              "",
              dynamicParamType,
              staticSiblings
            ]
          };
        }
        throw Object.defineProperty(new _invarianterror.InvariantError(`Missing value for segment key: "${segmentKey}" with dynamic param type: ${dynamicParamType}`), "__NEXT_ERROR_CODE", {
          value: "E864",
          enumerable: false,
          configurable: true
        });
      }
      const paramCacheKey = Array.isArray(value) ? value.join("/") : value;
      return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        // TODO: If the number of static siblings exceeds some threshold (e.g.,
        // dozens or hundreds), consider sending a Bloom filter instead of the full
        // array to reduce payload size. The client would then use the Bloom filter
        // to check membership with a small false positive rate.
        treeSegment: [
          segmentKey,
          paramCacheKey,
          dynamicParamType,
          staticSiblings
        ],
        type: dynamicParamType
      };
    }
    var PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function parseParameter(param) {
      const match2 = param.match(PARAMETER_PATTERN);
      if (!match2) {
        return parseMatchedParameter(param);
      }
      return parseMatchedParameter(match2[2]);
    }
    function parseMatchedParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
      },
      getNamedRouteRegex: function() {
        return getNamedRouteRegex;
      },
      getRouteRegex: function() {
        return getRouteRegex;
      }
    });
    var _constants = require_constants();
    var _interceptionroutes = require_interception_routes();
    var _escaperegexp = require_escape_regexp();
    var _removetrailingslash = require_remove_trailing_slash();
    var _getdynamicparam = require_get_dynamic_param();
    function getParametrizedRoute(route, includeSuffix, includePrefix) {
      const groups = {};
      let groupIndex = 1;
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN);
        if (markerMatch && paramMatches && paramMatches[2]) {
          const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          segments.push(`/${(0, _escaperegexp.escapeStringRegexp)(markerMatch)}([^/]+?)`);
        } else if (paramMatches && paramMatches[2]) {
          const { key, repeat, optional } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          if (includePrefix && paramMatches[1]) {
            segments.push(`/${(0, _escaperegexp.escapeStringRegexp)(paramMatches[1])}`);
          }
          let s = repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push(`/${(0, _escaperegexp.escapeStringRegexp)(segment)}`);
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        parameterizedRoute: segments.join(""),
        groups
      };
    }
    function getRouteRegex(normalizedRoute, { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = {}) {
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
      let re = parameterizedRoute;
      if (!excludeOptionalTrailingSlash) {
        re += "(?:/)?";
      }
      return {
        re: new RegExp(`^${re}$`),
        groups
      };
    }
    function buildGetSafeRouteKey() {
      let i = 0;
      return () => {
        let routeKey = "";
        let j = ++i;
        while (j > 0) {
          routeKey += String.fromCharCode(97 + (j - 1) % 26);
          j = Math.floor((j - 1) / 26);
        }
        return routeKey;
      };
    }
    function getSafeKeyFromSegment({ interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys }) {
      const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(segment);
      let cleanedKey = key.replace(/\W/g, "");
      if (keyPrefix) {
        cleanedKey = `${keyPrefix}${cleanedKey}`;
      }
      let invalidKey = false;
      if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
      }
      if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
      }
      if (invalidKey) {
        cleanedKey = getSafeRouteKey();
      }
      const duplicateKey = cleanedKey in routeKeys;
      if (keyPrefix) {
        routeKeys[cleanedKey] = `${keyPrefix}${key}`;
      } else {
        routeKeys[cleanedKey] = key;
      }
      const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
      let pattern;
      if (duplicateKey && backreferenceDuplicateKeys) {
        pattern = `\\k<${cleanedKey}>`;
      } else if (repeat) {
        pattern = `(?<${cleanedKey}>.+?)`;
      } else {
        pattern = `(?<${cleanedKey}>[^/]+?)`;
      }
      return {
        key,
        pattern: optional ? `(?:/${interceptionPrefix}${pattern})?` : `/${interceptionPrefix}${pattern}`,
        cleanedKey,
        optional,
        repeat
      };
    }
    function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys, reference = {
      names: {},
      intercepted: {}
    }) {
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      const segments = [];
      const inverseParts = [];
      reference = structuredClone(reference);
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m) => segment.startsWith(m));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN);
        const interceptionMarker = hasInterceptionMarker ? paramMatches?.[1] : void 0;
        let keyPrefix;
        if (interceptionMarker && paramMatches?.[2]) {
          keyPrefix = prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0;
          reference.intercepted[paramMatches[2]] = interceptionMarker;
        } else if (paramMatches?.[2] && reference.intercepted[paramMatches[2]]) {
          keyPrefix = prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0;
        } else {
          keyPrefix = prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : void 0;
        }
        if (interceptionMarker && paramMatches && paramMatches[2]) {
          const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
            getSafeRouteKey,
            interceptionMarker,
            segment: paramMatches[2],
            routeKeys,
            keyPrefix,
            backreferenceDuplicateKeys
          });
          segments.push(pattern);
          inverseParts.push(`/${paramMatches[1]}:${reference.names[key] ?? cleanedKey}${repeat ? optional ? "*" : "+" : ""}`);
          reference.names[key] ??= cleanedKey;
        } else if (paramMatches && paramMatches[2]) {
          if (includePrefix && paramMatches[1]) {
            segments.push(`/${(0, _escaperegexp.escapeStringRegexp)(paramMatches[1])}`);
            inverseParts.push(`/${paramMatches[1]}`);
          }
          const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
            getSafeRouteKey,
            segment: paramMatches[2],
            routeKeys,
            keyPrefix,
            backreferenceDuplicateKeys
          });
          let s = pattern;
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
          inverseParts.push(`/:${reference.names[key] ?? cleanedKey}${repeat ? optional ? "*" : "+" : ""}`);
          reference.names[key] ??= cleanedKey;
        } else {
          segments.push(`/${(0, _escaperegexp.escapeStringRegexp)(segment)}`);
          inverseParts.push(`/${segment}`);
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
          inverseParts.push(paramMatches[3]);
        }
      }
      return {
        namedParameterizedRoute: segments.join(""),
        routeKeys,
        pathToRegexpPattern: inverseParts.join(""),
        reference
      };
    }
    function getNamedRouteRegex(normalizedRoute, options) {
      const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, options.includeSuffix ?? false, options.includePrefix ?? false, options.backreferenceDuplicateKeys ?? false, options.reference);
      let namedRegex = result.namedParameterizedRoute;
      if (!options.excludeOptionalTrailingSlash) {
        namedRegex += "(?:/)?";
      }
      return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: `^${namedRegex}$`,
        routeKeys: result.routeKeys,
        pathToRegexpPattern: result.pathToRegexpPattern,
        reference: result.reference
      };
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: `^/${catchAllRegex}$`
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false, void 0);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js
var require_interpolate_as = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "interpolateAs", {
      enumerable: true,
      get: function() {
        return interpolateAs;
      }
    });
    var _routematcher = require_route_matcher();
    var _routeregex = require_route_regex();
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (
        // Try to match the dynamic route against the asPath
        (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query
      );
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
          replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
          value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/resolve-href.js
var require_resolve_href = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/resolve-href.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "resolveHref", {
      enumerable: true,
      get: function() {
        return resolveHref;
      }
    });
    var _querystring = require_querystring();
    var _formaturl = require_format_url();
    var _omit = require_omit();
    var _utils = require_utils();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var _islocalurl = require_is_local_url();
    var _utils1 = require_utils2();
    var _interpolateas = require_interpolate_as();
    var _routeregex = require_route_regex();
    var _routematcher = require_route_matcher();
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
      const urlProtoMatch = urlAsString.match(/^[a-z][a-z0-9+.-]*:\/\//i);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?", 1);
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href '${urlAsString}' passed to next/router in page: '${router.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        let baseBase = urlAsString.startsWith("#") ? router.asPath : router.pathname;
        if (urlAsString.startsWith("?")) {
          baseBase = router.asPath;
          if ((0, _utils1.isDynamicRoute)(router.pathname)) {
            baseBase = router.pathname;
            const routeRegex = (0, _routeregex.getRouteRegex)(router.pathname);
            const match2 = (0, _routematcher.getRouteMatcher)(routeRegex)(router.asPath);
            if (!match2) {
              baseBase = router.asPath;
            }
          }
        }
        base = new URL(baseBase, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
          const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formaturl.formatWithValidation)({
              pathname: result,
              hash: finalUrl.hash,
              query: (0, _omit.omit)(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addPathPrefix", {
      enumerable: true,
      get: function() {
        return addPathPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix2) {
      if (!path.startsWith("/") || !prefix2) {
        return path;
      }
      const { pathname, query, hash: hash2 } = (0, _parsepath.parsePath)(path);
      return `${prefix2}${pathname}${query}${hash2}`;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale) return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, `/${locale.toLowerCase()}`)) return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, `/${locale}`);
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/add-locale.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var addLocale = (path, ...args) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "../../node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports2) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2._ = _interop_require_default;
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request-idle-callback.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      cancelIdleCallback: function() {
        return cancelIdleCallback;
      },
      requestIdleCallback: function() {
        return requestIdleCallback;
      }
    });
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return self.setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/use-intersection.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "useIntersection", {
      enumerable: true,
      get: function() {
        return useIntersection;
      }
    });
    var _react = require("react");
    var _requestidlecallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    function useIntersection({ rootRef, rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver;
      const [visible, setVisible] = (0, _react.useState)(false);
      const elementRef = (0, _react.useRef)(null);
      const setElement = (0, _react.useCallback)((element) => {
        elementRef.current = element;
      }, []);
      (0, _react.useEffect)(() => {
        if (hasIntersectionObserver) {
          if (isDisabled || visible) return;
          const element = elementRef.current;
          if (element && element.tagName) {
            const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef?.current,
              rootMargin
            });
            return unobserve;
          }
        } else {
          if (!visible) {
            const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
            return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
          }
        }
      }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
      ]);
      const resetVisible = (0, _react.useCallback)(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var cache2 = /* @__PURE__ */ new WeakMap();
    function normalizeLocalePath(pathname, locales) {
      if (!locales) return {
        pathname
      };
      let lowercasedLocales = cache2.get(locales);
      if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale) => locale.toLowerCase());
        cache2.set(locales, lowercasedLocales);
      }
      let detectedLocale;
      const segments = pathname.split("/", 2);
      if (!segments[1]) return {
        pathname
      };
      const segment = segments[1].toLowerCase();
      const index = lowercasedLocales.indexOf(segment);
      if (index < 0) return {
        pathname
      };
      detectedLocale = locales[index];
      pathname = pathname.slice(detectedLocale.length + 1) || "/";
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/normalize-locale-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems) return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        const domainHostname = item.domain?.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || item.locales?.some((locale) => locale.toLowerCase() === detectedLocale)) {
          return item;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/detect-domain-locale.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    var detectDomainLocale = (...args) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/get-domain-locale.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getDomainLocale", {
      enumerable: true,
      get: function() {
        return getDomainLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = `http${domain.http ? "" : "s"}://`;
          const finalLocale = target === domain.defaultLocale ? "" : `/${target}`;
          return `${proto}${domain.domain}${(0, _normalizetrailingslash.normalizePathTrailingSlash)(`${basePath}${finalLocale}${path}`)}`;
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/add-base-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addBasePath", {
      enumerable: true,
      get: function() {
        return addBasePath;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/use-merged-ref.js
var require_use_merged_ref = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/use-merged-ref.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "useMergedRef", {
      enumerable: true,
      get: function() {
        return useMergedRef;
      }
    });
    var _react = require("react");
    function useMergedRef(refA, refB) {
      const cleanupA = (0, _react.useRef)(null);
      const cleanupB = (0, _react.useRef)(null);
      return (0, _react.useCallback)((current) => {
        if (current === null) {
          const cleanupFnA = cleanupA.current;
          if (cleanupFnA) {
            cleanupA.current = null;
            cleanupFnA();
          }
          const cleanupFnB = cleanupB.current;
          if (cleanupFnB) {
            cleanupB.current = null;
            cleanupFnB();
          }
        } else {
          if (refA) {
            cleanupA.current = applyRef(refA, current);
          }
          if (refB) {
            cleanupB.current = applyRef(refB, current);
          }
        }
      }, [
        refA,
        refB
      ]);
    }
    function applyRef(refA, current) {
      if (typeof refA === "function") {
        const cleanup = refA(current);
        if (typeof cleanup === "function") {
          return cleanup;
        } else {
          return () => refA(null);
        }
      } else {
        refA.current = current;
        return () => {
          refA.current = null;
        };
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils/error-once.js
var require_error_once = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils/error-once.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "errorOnce", {
      enumerable: true,
      get: function() {
        return errorOnce;
      }
    });
    var errorOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const errors = /* @__PURE__ */ new Set();
      errorOnce = (msg) => {
        if (!errors.has(msg)) {
          console.error(msg);
        }
        errors.add(msg);
      };
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/link.js"(exports2, module2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      default: function() {
        return _default;
      },
      useLinkStatus: function() {
        return useLinkStatus;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(require("react"));
    var _resolvehref = require_resolve_href();
    var _islocalurl = require_is_local_url();
    var _formaturl = require_format_url();
    var _utils = require_utils();
    var _addlocale = require_add_locale2();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _useintersection = require_use_intersection();
    var _getdomainlocale = require_get_domain_locale();
    var _addbasepath = require_add_base_path();
    var _usemergedref = require_use_merged_ref();
    var prefetched = /* @__PURE__ */ new Set();
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined") {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        return;
      }
      if (!options.bypassPrefetchedCheck) {
        const locale = (
          // Let the link's locale prop override the default router locale.
          typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : void 0
        );
        const prefetchedKey = href + "%" + as + "%" + locale;
        if (prefetched.has(prefetchedKey)) {
          return;
        }
        prefetched.add(prefetchedKey);
      }
      router.prefetch(href, as, options).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          throw err;
        }
      });
    }
    function isModifiedEvent(event) {
      const eventTarget = event.currentTarget;
      const target = eventTarget.getAttribute("target");
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
      event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace2, shallow, scroll, locale, onNavigate) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute("download")) {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace2) {
          e.preventDefault();
          location.replace(href);
        }
        return;
      }
      e.preventDefault();
      const navigate = () => {
        if (onNavigate) {
          let isDefaultPrevented = false;
          onNavigate({
            preventDefault: () => {
              isDefaultPrevented = true;
            }
          });
          if (isDefaultPrevented) {
            return;
          }
        }
        const routerScroll = scroll ?? true;
        if ("beforePopState" in router) {
          router[replace2 ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll: routerScroll
          });
        } else {
          router[replace2 ? "replace" : "push"](as || href, {
            scroll: routerScroll
          });
        }
      };
      navigate();
    }
    function formatStringOrUrl(urlObjOrString) {
      if (typeof urlObjOrString === "string") {
        return urlObjOrString;
      }
      return (0, _formaturl.formatUrl)(urlObjOrString);
    }
    var Link2 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      let children;
      const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace: replace2, shallow, scroll, locale, onClick, onNavigate, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, transitionTypes, ...restProps } = props;
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
          children
        });
      }
      const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
      const prefetchEnabled = prefetchProp !== false;
      if (process.env.NODE_ENV !== "production") {
        let createPropError = function(args) {
          return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: false,
            configurable: true
          });
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          } else {
            const _ = key;
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true,
          onNavigate: true,
          transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart" || key === "onNavigate") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else if (key === "prefetch") {
            if (props[key] != null && valType !== "boolean" && props[key] !== "auto") {
              throw createPropError({
                key,
                expected: '`boolean | "auto"`',
                actual: valType
              });
            }
          } else if (key === "transitionTypes") {
            if (props[key] != null && !Array.isArray(props[key])) {
              throw createPropError({
                key,
                expected: "`string[]`",
                actual: valType
              });
            }
          } else {
            const _ = key;
          }
        });
      }
      const { href, as } = _react.default.useMemo(() => {
        if (!router) {
          const resolvedHref2 = formatStringOrUrl(hrefProp);
          return {
            href: resolvedHref2,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref2
          };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          if (onClick) {
            console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
          }
          if (onMouseEnterProp) {
            console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                value: "E320",
                enumerable: false,
                configurable: true
              });
            }
            throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: false,
              configurable: true
            });
          }
        } else {
          child = _react.default.Children.only(children);
        }
      } else {
        if (process.env.NODE_ENV === "development") {
          if (children?.type === "a") {
            throw Object.defineProperty(new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor"), "__NEXT_ERROR_CODE", {
              value: "E209",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
      });
      const setIntersectionWithResetRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
      }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
      _react.default.useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
          return;
        }
        if (!router) {
          return;
        }
        if (!isVisible || !prefetchEnabled) {
          return;
        }
        prefetch(router, href, as, {
          // dedupe across appear/disappear of the Link.
          bypassPrefetchedCheck: false,
          locale
        });
      }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        router?.locale,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick(e) {
          if (process.env.NODE_ENV !== "production") {
            if (!e) {
              throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                value: "E312",
                enumerable: false,
                configurable: true
              });
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!router) {
            return;
          }
          if (e.defaultPrevented) {
            return;
          }
          linkClicked(e, router, href, as, replace2, shallow, scroll, locale, onNavigate);
        },
        onMouseEnter(e) {
          if (!legacyBehavior && typeof onMouseEnterProp === "function") {
            onMouseEnterProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function onTouchStart(e) {
          if (!legacyBehavior && typeof onTouchStartProp === "function") {
            onTouchStartProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        }
      };
      if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
      } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router?.locale;
        const localeDomain = router?.isLocaleDomain && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router?.locales, router?.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router?.defaultLocale));
      }
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          const { errorOnce } = require_error_once();
          errorOnce("`legacyBehavior` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:\n\nnpx @next/codemod@latest new-link .\n\nLearn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components");
        }
        return /* @__PURE__ */ _react.default.cloneElement(child, childProps);
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children
      });
    });
    var LinkStatusContext = /* @__PURE__ */ (0, _react.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: false
    });
    var useLinkStatus = () => {
      return (0, _react.useContext)(LinkStatusContext);
    };
    var _default = Link2;
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/link.js
var require_link2 = __commonJS({
  "../../node_modules/.pnpm/next@16.3.3_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/link.js"(exports2, module2) {
    "use strict";
    module2.exports = require_link();
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => CustomAccordion,
  AutoPopulate: () => AutoPopulate,
  AutoPopulateItem: () => AutoPopulateItem,
  Backdrop: () => Backdrop,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Card: () => Card,
  Checkbox: () => Checkbox,
  CheckboxGroup: () => CheckboxGroup,
  ChipInput: () => ChipInput,
  ColorModeContext: () => ColorModeContext,
  CountBadge: () => CountBadge_default,
  DataTable: () => DataTable,
  DefaultSelect: () => DefaultSelect,
  Grid: () => Grid,
  Link: () => Link,
  Modal: () => Modal,
  NumberField: () => NumberField,
  Progress: () => Progress_default,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  RangeSlider: () => RangeSlider,
  Select: () => Select,
  Sheet: () => Sheet,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  TextField: () => TextField,
  Textarea: () => Textarea,
  ToggleSwitch: () => ToggleSwitch,
  Tooltip: () => Tooltip2,
  VortexUIProvider: () => VortexUIProvider,
  useColorMode: () => useColorMode,
  vortexTheme: () => getTheme
});
module.exports = __toCommonJS(index_exports);

// src/theme/classNameSetup.ts
var import_className = require("@mui/material/className");
import_className.unstable_ClassNameGenerator.configure(
  (componentName) => componentName.replace("Mui", "VortexUI")
);

// src/components/Accordion/Accordion.tsx
var React = __toESM(require("react"));
var import_styles = require("@mui/material/styles");
var import_ArrowForwardIosSharp = __toESM(require("@mui/icons-material/ArrowForwardIosSharp"));
var import_Accordion = __toESM(require("@mui/material/Accordion"));
var import_AccordionSummary = __toESM(require("@mui/material/AccordionSummary"));
var import_AccordionDetails = __toESM(require("@mui/material/AccordionDetails"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = (0, import_styles.styled)((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Accordion.default, { disableGutters: true, elevation: 0, ...props }))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:first-of-type)": {
    borderTop: 0
  },
  "&:first-of-type": {
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px"
  },
  "&:last-of-type": {
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px"
  },
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&::before": {
    display: "block !important",
    position: "absolute",
    top: 0,
    left: "16px",
    right: "16px",
    height: "1px",
    backgroundColor: theme.palette.divider,
    opacity: "1 !important"
  },
  "&:first-of-type::before": {
    display: "none !important"
  }
}));
var AccordionSummary = (0, import_styles.styled)((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_AccordionSummary.default,
  {
    expandIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ArrowForwardIosSharp.default, { sx: { fontSize: "0.9rem" } }),
    ...props
  }
))(({ theme }) => ({
  [`& .${import_AccordionSummary.accordionSummaryClasses.expandIconWrapper}.${import_AccordionSummary.accordionSummaryClasses.expanded}`]: {
    transform: "rotate(90deg)"
  },
  ...theme.applyStyles("dark", {})
}));
var AccordionDetails = (0, import_styles.styled)(import_AccordionDetails.default)(({ theme }) => ({
  padding: theme.spacing(2)
}));
var AccordionPanel = ({
  title,
  count,
  items = [],
  children,
  expanded,
  onChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, { expanded, onChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionSummary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_Typography.default,
      {
        component: "span",
        fontWeight: 600,
        fontSize: "14px",
        color: "text.primary",
        children: [
          title,
          " ",
          count !== void 0 && `(${count})`
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionDetails, { children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Stack, { spacing: 0.5, children: items.map((term, idx) => {
      if (!term || typeof term === "string" && term.trim() === "")
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_material.Box, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Typography.default, { fontSize: "13px", color: "text.primary", children: [
          idx + 1,
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Typography.default, { fontSize: "13px", color: "text.secondary", children: term })
      ] }, idx);
    }) }) })
  ] });
};
function CustomAccordion({
  data,
  singleOpen = false,
  ...singleProps
}) {
  const [expandedIndex, setExpandedIndex] = React.useState(
    singleOpen ? 0 : false
  );
  const handleChange = (panelIndex) => (event, newExpanded) => {
    if (singleOpen) {
      setExpandedIndex(newExpanded ? panelIndex : false);
    }
  };
  if (data && Array.isArray(data)) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Box, { children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      AccordionPanel,
      {
        ...item,
        expanded: singleOpen ? expandedIndex === index : void 0,
        onChange: singleOpen ? handleChange(index) : void 0
      },
      index
    )) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPanel, { ...singleProps });
}

// src/components/AutoPopulate/AutoPopulate.tsx
var import_react2 = require("react");
var import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_material2 = require("@mui/material");

// src/components/TextField/TextField.tsx
var import_icons_material = require("@mui/icons-material");
var import_Box = __toESM(require("@mui/material/Box"));
var import_TextField = __toESM(require("@mui/material/TextField"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_styles2 = require("@mui/material/styles");
var import_react = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var StyledTextField = (0, import_styles2.styled)(
  import_react.default.forwardRef((props, ref) => {
    const { hasLabel, bgColor, variant = "filled", ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_TextField.default,
      {
        ref,
        variant,
        ...rest,
        InputProps: {
          disableUnderline: true,
          ...rest.InputProps,
          sx: {
            overflow: "hidden",
            borderRadius: "10px",
            backgroundColor: "background.paper",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            height: "46px",
            transition: (theme) => theme.transitions.create([
              "border-color",
              "background-color",
              "box-shadow"
            ]),
            "&:hover": { backgroundColor: bgColor || "background.default" },
            "&:before, &:after": { display: "none" },
            "&.Mui-focused": {
              backgroundColor: bgColor || "background.paper",
              borderColor: (theme) => theme.palette.primary.main
            },
            "&.Mui-error": {
              borderColor: (theme) => theme.palette.error.main,
              backgroundColor: bgColor || "background.paper"
            },
            ...rest.InputProps?.sx || {}
          }
        }
      }
    );
  }),
  {
    shouldForwardProp: (prop) => prop !== "hasLabel" && prop !== "bgColor"
  }
)(({ theme, bgColor, hasLabel }) => {
  return {
    "& .VortexUIInputLabel-root.VortexUIInputLabel-filled": {
      transform: `translate(12px, 14px) scale(1)`,
      fontSize: "14px",
      fontWeight: 400,
      "&.VortexUIInputLabel-shrink": {
        transform: "translate(10px, 8px) scale(0.75)",
        lineHeight: 1
      },
      "&.Mui-error": {
        color: theme.palette.error.main
      }
    },
    "& .VortexUIFilledInput-input": {
      padding: "0 10px",
      fontSize: "14px",
      fontWeight: 400,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center"
    },
    "& .VortexUIInputLabel-shrink ~ .VortexUIFilledInput-root .VortexUIFilledInput-input": {
      padding: `24px 10px 0 10px`
    },
    "& label.Mui-focused": {
      color: theme.palette.text.primary
    },
    "& .VortexUIFormHelperText-root": {
      display: "none"
    }
  };
});
var TextField = import_react.default.forwardRef(
  ({ error, sx, bgColor = "#fff", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_Box.default, { sx: { width: props.fullWidth ? "100%" : "auto", ...sx }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        StyledTextField,
        {
          ref,
          error: !!error,
          hasLabel: !!props.label,
          bgColor,
          ...props
        }
      ),
      error && typeof error === "string" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        import_Box.default,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            mt: "8px",
            ml: 0.5
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_icons_material.InfoOutlined,
              {
                sx: { width: 14, height: 14, color: "error.main", flexShrink: 0 }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_Typography2.default,
              {
                sx: {
                  fontSize: "12px",
                  color: "error.main",
                  lineHeight: 1.4,
                  fontWeight: 400
                },
                children: error
              }
            )
          ]
        }
      )
    ] });
  }
);
TextField.displayName = "TextField";

// src/components/AutoPopulate/AutoPopulate.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var scrollbarStyles = `
  .custom-select-menu::-webkit-scrollbar {
    width: 5px;
  }
  .custom-select-menu::-webkit-scrollbar-track {
    background: transparent;
    margin: 6px 0;
  }
  .custom-select-menu::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 35px;
    max-height: 54px;
    min-height: 54px;
  }
  .custom-select-menu::-webkit-scrollbar-thumb:hover {
    background: #BDBDBD;
  }
`;
var getFocusable = () => Array.from(
  document.querySelectorAll(
    'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  )
).filter((el) => el.offsetParent !== null);
var AutoPopulate = ({
  children,
  bgColor,
  label,
  onChange,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = (0, import_react2.useState)("");
  const [displayValue, setDisplayValue] = (0, import_react2.useState)("");
  const [open, setOpen] = (0, import_react2.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react2.useState)(-1);
  const anchorRef = (0, import_react2.useRef)(null);
  const menuItemRefs = (0, import_react2.useRef)([]);
  const wrapperRef = (0, import_react2.useRef)(null);
  const hasInteractedRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (typeof document !== "undefined") {
      const styleTag = document.getElementById("custom-select-scrollbar");
      if (!styleTag) {
        const s = document.createElement("style");
        s.id = "custom-select-scrollbar";
        s.textContent = scrollbarStyles;
        document.head.appendChild(s);
      }
    }
  }, []);
  const childArray = import_react2.Children.toArray(children).filter(
    Boolean
  );
  const labelMap = {};
  childArray.forEach((child) => {
    if (child.props?.value !== void 0) {
      labelMap[child.props.value] = {
        label: child.props?.children?.toString() || "",
        subtitle: child.props?.subtitle || ""
      };
    }
  });
  const filteredChildren = inputValue ? childArray.filter((child) => {
    const text = child.props?.children?.toString()?.toLowerCase() || "";
    const sub = child.props?.subtitle?.toLowerCase() || "";
    const q = inputValue.toLowerCase();
    return text.includes(q) || sub.includes(q);
  }) : childArray;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDisplayValue(e.target.value);
    setOpen(true);
    setFocusedIndex(-1);
    hasInteractedRef.current = true;
  };
  const handleInputFocus = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFocusedIndex(-1);
    if (inputValue === "" && hasInteractedRef.current) {
      setDisplayValue("");
      if (value !== void 0 && value !== "" && onChange) {
        onChange({ target: { value: "" } });
      }
    } else if (value !== void 0 && labelMap[value]) {
      setDisplayValue(labelMap[value].label);
    } else {
      setDisplayValue("");
    }
    setInputValue("");
    hasInteractedRef.current = false;
  };
  const handleSelect = (child) => {
    const selectedValue = child.props?.value;
    const selectedLabel = child.props?.children?.toString() || "";
    setDisplayValue(selectedLabel);
    setInputValue("");
    setOpen(false);
    setFocusedIndex(-1);
    hasInteractedRef.current = false;
    if (onChange) onChange({ target: { value: selectedValue } });
    setTimeout(() => {
      const focusable = getFocusable();
      const current = anchorRef.current?.querySelector("input");
      const idx = focusable.findIndex((el) => el === current);
      if (idx !== -1 && focusable[idx + 1])
        focusable[idx + 1].focus();
    }, 0);
  };
  const focusItem = (index) => {
    setFocusedIndex(index);
    menuItemRefs.current[index]?.focus();
  };
  const handleInputKeyDown = (0, import_react2.useCallback)(
    (e) => {
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter") setOpen(true);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(filteredChildren.length - 1);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [open, filteredChildren]
  );
  const handleItemKeyDown = (0, import_react2.useCallback)(
    (e, index, child) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusItem((index + 1) % filteredChildren.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index === 0) {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        } else {
          focusItem(index - 1);
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const next2 = index + 1;
        if (next2 < filteredChildren.length) {
          focusItem(next2);
        } else {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(child);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [filteredChildren, onChange]
  );
  const shownValue = open ? inputValue !== "" ? inputValue : displayValue : displayValue;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material2.ClickAwayListener, { onClickAway: handleClose, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_material2.Box, { ref: wrapperRef, sx: { display: "contents" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_material2.Box,
      {
        ref: anchorRef,
        sx: { position: "relative", display: "inline-flex", width: "100%" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TextField,
            {
              bgColor,
              label,
              value: shownValue,
              onChange: handleInputChange,
              onFocus: handleInputFocus,
              onKeyDown: handleInputKeyDown,
              autoComplete: "off",
              fullWidth: true,
              ...props
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_material2.Box,
            {
              onClick: (e) => {
                e.stopPropagation();
                setOpen((prev2) => !prev2);
              },
              sx: {
                position: "absolute",
                right: 8,
                top: "50%",
                transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
                transition: "transform 0.2s",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "rgba(0,0,0,0.54)"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_KeyboardArrowDown.default, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_material2.Popper,
      {
        open,
        anchorEl: anchorRef.current,
        placement: "bottom-start",
        style: {
          zIndex: 1300,
          width: anchorRef.current?.offsetWidth
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_material2.Paper,
          {
            elevation: 0,
            sx: {
              mt: 0.5,
              borderRadius: "10px",
              border: "1px solid #D6DEEA",
              maxHeight: 258,
              overflowY: "auto",
              bgcolor: "#FFFFFF",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)"
            },
            className: "custom-select-menu",
            children: filteredChildren.length > 0 ? filteredChildren.map((child, index) => {
              const primaryLabel = child.props?.children?.toString() || "";
              const subtitle = child.props?.subtitle || "";
              const isFocused = focusedIndex === index;
              return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                import_material2.Box,
                {
                  ref: (el) => {
                    menuItemRefs.current[index] = el;
                  },
                  tabIndex: isFocused ? 0 : -1,
                  role: "option",
                  "aria-selected": value === child.props?.value,
                  onClick: () => handleSelect(child),
                  onKeyDown: (e) => handleItemKeyDown(e, index, child),
                  sx: {
                    px: 1.8,
                    py: 1,
                    cursor: "pointer",
                    outline: "none",
                    pt: index === 0 ? 1.2 : 1,
                    pb: index === filteredChildren.length - 1 ? 1.2 : 1,
                    backgroundColor: value === child.props?.value ? "rgba(25, 118, 210, 0.06)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.06)"
                    },
                    "&:focus": {
                      backgroundColor: "rgba(25, 118, 210, 0.08)"
                    }
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_material2.Typography,
                      {
                        sx: {
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#313952",
                          lineHeight: 1.5
                        },
                        children: primaryLabel
                      }
                    ),
                    subtitle && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_material2.Typography,
                      {
                        sx: {
                          fontSize: "11px",
                          fontWeight: 400,
                          color: "#6F778F",
                          lineHeight: 1.5,
                          mt: 0.2
                        },
                        children: subtitle
                      }
                    )
                  ]
                },
                child.key ?? index
              );
            }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material2.Box, { sx: { px: 2, py: 1.5, fontSize: "13px", color: "#9CA3AF" }, children: "No results found" })
          }
        )
      }
    )
  ] }) });
};

// src/components/AutoPopulate/AutoPopulateItem.tsx
var AutoPopulateItem = () => null;

// src/components/Button/Button.tsx
var import_material3 = require("@mui/material");
var import_icons_material2 = require("@mui/icons-material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var SIZE_MAP = {
  lg: {
    height: 40,
    fontSize: 14,
    px: 2.5,
    borderRadius: "10px",
    iconSize: 20,
    gap: "8px"
  },
  md: {
    height: 36,
    fontSize: 13,
    px: 2,
    borderRadius: "9px",
    iconSize: 18,
    gap: "7px"
  },
  sm: {
    height: 32,
    fontSize: 12,
    px: 1.5,
    borderRadius: "8px",
    iconSize: 16,
    gap: "6px"
  }
};
var ICON_ONLY_SIZE_MAP = {
  lg: { box: 36, iconSize: 22, borderRadius: "10px" },
  md: { box: 32, iconSize: 20, borderRadius: "9px" },
  sm: { box: 28, iconSize: 18, borderRadius: "8px" }
};
var Button = ({
  size = "md",
  variant = "filled",
  severity = "primary",
  icon,
  iconPosition = "start",
  iconOnly = false,
  loading = false,
  loadingText,
  disabled,
  children,
  sx,
  ...rest
}) => {
  const { height, fontSize, px, borderRadius, iconSize, gap } = SIZE_MAP[size] ?? SIZE_MAP.md;
  const theme = (0, import_material3.useTheme)();
  const isDisabled = disabled || loading;
  const paletteColor = theme.palette[severity] || theme.palette.primary;
  const colors2 = {
    main: paletteColor.main,
    hover: paletteColor.hover || paletteColor.dark,
    light: paletteColor.disabledBackground || theme.palette.action.hover,
    lightHover: paletteColor.disabled || theme.palette.action.selected,
    disabledMain: paletteColor.disabled || theme.palette.action.disabledBackground,
    disabledLight: "transparent",
    disabledText: paletteColor.disabled || theme.palette.action.disabled,
    disabledBorder: paletteColor.disabledBackground || theme.palette.action.disabledBackground
  };
  const filledSx = {
    bgcolor: colors2.main,
    color: "#fff",
    border: "none",
    "&:hover": { bgcolor: colors2.hover },
    [`&.${import_material3.buttonClasses.disabled}`]: {
      bgcolor: colors2.disabledMain,
      color: "#ffffff"
    }
  };
  const outlinedSx = {
    bgcolor: colors2.light,
    color: colors2.main,
    border: `1.5px solid ${colors2.main}`,
    "&:hover": {
      bgcolor: colors2.lightHover,
      border: `1.5px solid ${colors2.hover}`
    },
    [`&.${import_material3.buttonClasses.disabled}`]: {
      bgcolor: colors2.disabledLight,
      color: colors2.disabledText,
      border: `1.5px solid ${colors2.disabledBorder}`
    }
  };
  const ghostSx = {
    bgcolor: "transparent",
    color: colors2.main,
    border: "none",
    boxShadow: "none",
    "&:hover": { bgcolor: colors2.light, border: "none" },
    [`&.${import_material3.buttonClasses.disabled}`]: { color: colors2.disabledText }
  };
  const textSx = {
    bgcolor: "transparent",
    color: colors2.main,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      bgcolor: "transparent",
      color: colors2.hover,
      textDecoration: "underline"
    },
    [`&.${import_material3.buttonClasses.disabled}`]: { color: colors2.disabledText }
  };
  const variantSxMap = {
    filled: filledSx,
    outlined: outlinedSx,
    ghost: ghostSx,
    text: textSx
  };
  const variantSx = variantSxMap[variant] ?? filledSx;
  const spinnerColor = variant === "filled" ? "#fff" : isDisabled ? colors2.disabledText : colors2.main;
  if (iconOnly) {
    const {
      box,
      iconSize: ionSize,
      borderRadius: iconBorderRadius
    } = ICON_ONLY_SIZE_MAP[size] ?? ICON_ONLY_SIZE_MAP.md;
    const iconOnlyVariantSx = variant === "text" ? { ...textSx, px: 0 } : variantSx;
    const spinner2 = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material3.CircularProgress,
      {
        size: ionSize - 2,
        thickness: 5,
        sx: { color: spinnerColor, display: "block" }
      }
    );
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material3.Button,
      {
        disableElevation: true,
        disabled: isDisabled,
        sx: {
          minWidth: box,
          width: box,
          height: box,
          padding: 0,
          borderRadius: iconBorderRadius,
          [`& svg:not(.${import_material3.circularProgressClasses.svg})`]: {
            fontSize: ionSize,
            width: ionSize,
            height: ionSize
          },
          ...iconOnlyVariantSx,
          ...sx
        },
        ...rest,
        children: loading ? spinner2 : icon ?? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_material2.Star, { sx: { fontSize: ionSize } })
      }
    );
  }
  const spinner = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_material3.CircularProgress,
    {
      size: iconSize - 2,
      thickness: 5,
      sx: { color: spinnerColor, display: "block" }
    }
  );
  const content = loading ? loadingText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { textTransform: "capitalize" }, children: loadingText }) : children : children;
  const activeIconPosition = icon ? iconPosition : loading ? "start" : null;
  const startIcon = activeIconPosition === "start" ? loading ? spinner : icon : null;
  const endIcon = activeIconPosition === "end" ? loading ? spinner : icon : null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_material3.Button,
    {
      variant: variant === "filled" ? "contained" : variant === "outlined" ? "outlined" : "text",
      disableElevation: true,
      disabled: isDisabled,
      startIcon,
      endIcon,
      sx: {
        textTransform: "none",
        borderRadius,
        height,
        px: variant === "text" ? 0.5 : px,
        py: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        lineHeight: 1,
        minWidth: 90,
        fontWeight: 500,
        letterSpacing: 0,
        gap,
        [`& .${import_material3.buttonClasses.startIcon}`]: {
          marginRight: 0,
          marginLeft: "-4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [`& svg:not(.${import_material3.circularProgressClasses.svg})`]: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize
          }
        },
        [`& .${import_material3.buttonClasses.endIcon}`]: {
          marginLeft: 0,
          marginRight: "-4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [`& svg:not(.${import_material3.circularProgressClasses.svg})`]: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize
          }
        },
        ...variant === "ghost" || variant === "text" ? { border: "none", "&:hover": { border: "none" } } : {},
        ...variantSx,
        ...sx
      },
      ...rest,
      children: content
    }
  );
};

// src/components/ButtonGroup/ButtonGroup.tsx
var import_react7 = require("react");
var import_material7 = require("@mui/material");

// src/components/Select/Select.tsx
var import_react5 = __toESM(require("react"));
var import_material6 = require("@mui/material");
var import_react6 = require("react");

// src/components/Select/SearchableSelect.tsx
var import_react3 = require("react");
var import_material4 = require("@mui/material");
var import_KeyboardArrowDown2 = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var SEARCH_THRESHOLD = 2;
var scrollbarStyles2 = `
  .custom-select-menu::-webkit-scrollbar {
    width: 5px;
  }
  .custom-select-menu::-webkit-scrollbar-track {
    background: transparent;
    margin: 6px 0;
  }
  .custom-select-menu::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 35px;
    max-height: 54px;
    min-height: 54px;
  }
  .custom-select-menu::-webkit-scrollbar-thumb:hover {
    background: #BDBDBD;
  }
`;
if (typeof document !== "undefined") {
  const styleTag = document.getElementById("custom-select-scrollbar");
  if (!styleTag) {
    const s = document.createElement("style");
    s.id = "custom-select-scrollbar";
    s.textContent = scrollbarStyles2;
    document.head.appendChild(s);
  }
}
var getFocusable2 = () => Array.from(
  document.querySelectorAll(
    'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  )
).filter((el) => el.offsetParent !== null);
var SearchableSelect = ({
  children,
  bgColor,
  label,
  onChange,
  value,
  disabled,
  ...props
}) => {
  const [inputValue, setInputValue] = (0, import_react3.useState)("");
  const [displayValue, setDisplayValue] = (0, import_react3.useState)("");
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react3.useState)(-1);
  const anchorRef = (0, import_react3.useRef)(null);
  const menuItemRefs = (0, import_react3.useRef)([]);
  const wrapperRef = (0, import_react3.useRef)(null);
  const childArray = import_react3.Children.toArray(children).filter(Boolean);
  const showSearch = childArray.length > SEARCH_THRESHOLD;
  const labelMap = {};
  childArray.forEach((child) => {
    if (child.props?.value !== void 0) {
      labelMap[child.props.value] = {
        label: child.props?.children?.toString() || "",
        subtitle: child.props?.subtitle || "",
        icon: child.props?.icon || null
      };
    }
  });
  const filteredChildren = showSearch && inputValue ? childArray.filter((child) => {
    const text = child.props?.children?.toString()?.toLowerCase() || "";
    const sub = child.props?.subtitle?.toLowerCase() || "";
    const q = inputValue.toLowerCase();
    return text.includes(q) || sub.includes(q);
  }) : childArray;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDisplayValue(e.target.value);
    setOpen(true);
    setFocusedIndex(-1);
  };
  const handleInputFocus = () => {
    if (!disabled) setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFocusedIndex(-1);
    if (value !== void 0 && labelMap[value]) {
      setDisplayValue(labelMap[value].label);
      setInputValue("");
    } else {
      setInputValue("");
    }
  };
  const handleSelect = (child) => {
    const selectedValue = child.props?.value;
    const selectedLabel = child.props?.children?.toString() || "";
    setDisplayValue(selectedLabel);
    setInputValue("");
    setOpen(false);
    setFocusedIndex(-1);
    if (onChange && selectedValue !== void 0) onChange({ target: { value: selectedValue } });
    setTimeout(() => {
      const focusable = getFocusable2();
      const current = anchorRef.current?.querySelector("input");
      const idx = focusable.findIndex((el) => el === current);
      if (idx !== -1 && focusable[idx + 1]) focusable[idx + 1].focus();
    }, 0);
  };
  const focusItem = (index) => {
    setFocusedIndex(index);
    menuItemRefs.current[index]?.focus();
  };
  const handleInputKeyDown = (0, import_react3.useCallback)(
    (e) => {
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter") setOpen(true);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(filteredChildren.length - 1);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [open, filteredChildren]
  );
  const handleItemKeyDown = (0, import_react3.useCallback)(
    (e, index, child) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusItem((index + 1) % filteredChildren.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index === 0) {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        } else {
          focusItem(index - 1);
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const next2 = index + 1;
        if (next2 < filteredChildren.length) {
          focusItem(next2);
        } else {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(child);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [filteredChildren, onChange]
  );
  const shownValue = open ? inputValue !== "" ? inputValue : displayValue : displayValue;
  const selectedIcon = value !== void 0 && labelMap[value]?.icon ? labelMap[value].icon : null;
  const hasIcon = !!selectedIcon && !open;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material4.ClickAwayListener, { onClickAway: handleClose, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material4.Box, { ref: wrapperRef, sx: { display: "contents" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      import_material4.Box,
      {
        ref: anchorRef,
        sx: { position: "relative", display: "inline-flex", width: "100%" },
        children: [
          hasIcon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_material4.Box,
            {
              sx: {
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
                mt: label ? "6px" : 0
              },
              children: selectedIcon
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            TextField,
            {
              fullWidth: true,
              size: "small",
              label,
              value: shownValue,
              onChange: handleInputChange,
              onFocus: handleInputFocus,
              onKeyDown: handleInputKeyDown,
              autoComplete: "off",
              disabled,
              bgColor,
              ...props,
              InputProps: {
                sx: {
                  ...hasIcon && {
                    "& .VortexUIFilledInput-input": {
                      paddingLeft: "32px !important"
                    }
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_material4.Box,
            {
              onClick: (e) => {
                if (disabled) return;
                e.stopPropagation();
                setOpen((prev2) => !prev2);
              },
              sx: {
                position: "absolute",
                right: 8,
                top: "50%",
                transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
                transition: "transform 0.2s",
                cursor: disabled ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                color: "rgba(0,0,0,0.54)"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_KeyboardArrowDown2.default, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_material4.Popper,
      {
        open,
        anchorEl: anchorRef.current,
        placement: "bottom-start",
        style: {
          zIndex: 1300,
          width: anchorRef.current?.offsetWidth
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_material4.Paper,
          {
            elevation: 0,
            sx: {
              mt: 0.5,
              borderRadius: "10px",
              border: "1px solid #D6DEEA",
              maxHeight: 258,
              overflowY: "auto",
              bgcolor: "#FFFFFF",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)"
            },
            className: "custom-select-menu",
            children: filteredChildren.length > 0 ? filteredChildren.map((child, index) => {
              const primaryLabel = child.props?.children?.toString() || "";
              const subtitle = child.props?.subtitle || "";
              const icon = child.props?.icon || null;
              const isFocused = focusedIndex === index;
              const isSelected = value === child.props?.value;
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                import_material4.Box,
                {
                  ref: (el) => {
                    if (el) menuItemRefs.current[index] = el;
                  },
                  tabIndex: isFocused ? 0 : -1,
                  role: "option",
                  "aria-selected": isSelected,
                  onClick: () => handleSelect(child),
                  onKeyDown: (e) => handleItemKeyDown(e, index, child),
                  sx: {
                    px: 1.5,
                    py: 0.75,
                    cursor: "pointer",
                    outline: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: isSelected ? "rgba(25, 118, 210, 0.06)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.06)"
                    },
                    "&:focus": {
                      backgroundColor: "rgba(25, 118, 210, 0.08)"
                    }
                  },
                  children: [
                    icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                      import_material4.Box,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          width: 24,
                          justifyContent: "center"
                        },
                        children: icon
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                      import_material4.Box,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                            import_material4.Typography,
                            {
                              sx: {
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#313952",
                                lineHeight: 1.5,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              },
                              children: primaryLabel
                            }
                          ),
                          subtitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                            import_material4.Typography,
                            {
                              sx: {
                                fontSize: "11px",
                                fontWeight: 400,
                                color: "#6F778F",
                                lineHeight: 1.5,
                                mt: 0.2
                              },
                              children: subtitle
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                child.key ?? index
              );
            }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material4.Box, { sx: { px: 2, py: 1.5, fontSize: "13px", color: "#9CA3AF" }, children: "No results found" })
          }
        )
      }
    )
  ] }) });
};

// src/components/Select/IconSelect.tsx
var import_react4 = require("react");
var import_material5 = require("@mui/material");
var import_KeyboardArrowDown3 = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconSelect = ({
  value,
  onChange,
  options = [],
  disabled = false,
  label,
  placeholder,
  fullWidth = false,
  size = "small",
  bgColor = "#FFFFFF",
  error,
  helperText,
  name,
  id,
  sx,
  ...rest
}) => {
  const generatedId = (0, import_react4.useId)();
  const selectId = id || generatedId;
  const labelId = `${selectId}-label`;
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const selectedOption = options.find((opt) => String(opt.value) === String(value));
  const selectNode = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    TextField,
    {
      select: true,
      id: selectId,
      label,
      name,
      value: value ?? "",
      onChange: handleChange,
      disabled,
      error,
      helperText,
      fullWidth,
      size,
      bgColor,
      SelectProps: {
        displayEmpty: true,
        IconComponent: import_KeyboardArrowDown3.default,
        renderValue: (selected) => {
          if (!selectedOption || selectedOption.value === "") {
            if (placeholder) {
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_material5.Typography,
                {
                  component: "span",
                  sx: { fontSize: 13, color: "#9CA3AF" },
                  children: placeholder
                }
              );
            }
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_material5.Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            (selectedOption.icon || selectedOption.img) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_material5.Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                  borderRadius: selectedOption.img ? "50%" : 0,
                  overflow: selectedOption.img ? "hidden" : "visible"
                },
                children: selectedOption.img ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Box, { component: "img", src: selectedOption.img, alt: "", sx: { width: "100%", height: "100%", objectFit: "cover" } }) : selectedOption.icon
              }
            ),
            selectedOption.label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_material5.Typography,
              {
                component: "span",
                sx: {
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#1F2937",
                  lineHeight: 1
                },
                children: selectedOption.label
              }
            )
          ] });
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 0.5,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E5E7EB",
              "& .MuiList-root": { py: 1 }
            }
          }
        }
      },
      sx: {
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          py: 0,
          pl: 1.5,
          pr: 4,
          height: "100%",
          boxSizing: "border-box"
        },
        ...!label ? sx : {}
      },
      ...rest,
      children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        import_material5.MenuItem,
        {
          value: opt.value,
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            px: 1.8,
            py: 1,
            fontSize: 13,
            color: "#374151",
            "&:hover": { bgcolor: "#F0F5FF" },
            "&.Mui-selected": { bgcolor: "#F9FAFB", fontWeight: 500 },
            "&.Mui-selected:hover": { bgcolor: "#F0F5FF" }
          },
          children: [
            (opt.icon || opt.img) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_material5.Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  width: 18,
                  height: 18,
                  justifyContent: "center",
                  flexShrink: 0,
                  borderRadius: opt.img ? "50%" : 0,
                  overflow: opt.img ? "hidden" : "visible"
                },
                children: opt.img ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Box, { component: "img", src: opt.img, alt: "", sx: { width: "100%", height: "100%", objectFit: "cover" } }) : opt.icon
              }
            ),
            opt.label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Typography, { component: "span", sx: { fontSize: 13 }, children: opt.label })
          ]
        },
        opt.value
      ))
    }
  );
  return selectNode;
};

// src/components/Select/Select.tsx
var import_icons_material3 = require("@mui/icons-material");
var import_jsx_runtime7 = require("react/jsx-runtime");
var OPTIONS = {
  1: { label: "Low", value: 1, color: "#4772FF" },
  2: { label: "Medium", value: 2, color: "#FF8447" },
  3: { label: "High", value: 3, color: "#FF4750" }
};
var DefaultSelect = ({
  value,
  recordId,
  onUpdate,
  options = OPTIONS,
  disabled = false,
  label,
  placeholder,
  fullWidth = false,
  size = "small",
  bgColor = "#FFFFFF",
  error,
  helperText,
  name,
  id,
  sx
}) => {
  const generatedId = import_react5.default.useId();
  const selectId = id || generatedId;
  const labelId = `${selectId}-label`;
  const [current, setCurrent] = (0, import_react6.useState)(value || 2);
  const [loading, setLoading] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    setCurrent(value || 2);
  }, [value]);
  const handleChange = async (e) => {
    const value2 = e.target.value;
    if (value2 === current) return;
    setLoading(true);
    try {
      if (onUpdate && recordId !== void 0) {
        await onUpdate(recordId, value2);
      }
      setCurrent(value2);
    } catch (err) {
      console.error("Value update failed:", err);
    } finally {
      setLoading(false);
    }
  };
  const selectedOption = options[current] || Object.values(options)[0] || OPTIONS[2];
  const selectNode = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    TextField,
    {
      select: true,
      id: selectId,
      label,
      name,
      value: current ?? "",
      onChange: handleChange,
      disabled: disabled || loading,
      error,
      helperText,
      fullWidth,
      size,
      bgColor,
      SelectProps: {
        displayEmpty: true,
        IconComponent: import_icons_material3.ExpandMore,
        renderValue: (selected) => {
          const cfg = options[selected] || selectedOption;
          if (!cfg) {
            if (placeholder) {
              return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_material6.Typography,
                {
                  component: "span",
                  sx: { fontSize: 13, color: "#9CA3AF" },
                  children: placeholder
                }
              );
            }
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material6.Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            loading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material6.Box,
              {
                sx: {
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  border: `2px solid ${cfg.color}`,
                  borderTopColor: "transparent",
                  animation: "spin 0.6s linear infinite",
                  flexShrink: 0,
                  "@keyframes spin": { to: { transform: "rotate(360deg)" } }
                }
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material6.Box,
              {
                sx: {
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: cfg.color,
                  flexShrink: 0
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material6.Typography,
              {
                component: "span",
                sx: {
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#1F2937",
                  lineHeight: 1
                },
                children: cfg.label
              }
            )
          ] });
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 0.5,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E5E7EB",
              "& .MuiList-root": { py: 1 }
            }
          }
        }
      },
      sx: {
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          py: 0,
          pl: 1.5,
          pr: 4,
          height: "100%",
          boxSizing: "border-box"
        },
        ...!label ? sx : {}
      },
      children: Object.entries(options).map(([key, opt]) => {
        const val = isNaN(Number(key)) ? key : Number(key);
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_material6.MenuItem,
          {
            value: val,
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.8,
              py: 1,
              fontSize: 13,
              color: "#374151",
              "&:hover": { bgcolor: "#F0F5FF" },
              "&.Mui-selected": { bgcolor: "#F9FAFB", fontWeight: 500 },
              "&.Mui-selected:hover": { bgcolor: "#F0F5FF" }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_material6.Box,
                {
                  sx: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: opt.color,
                    flexShrink: 0
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material6.Typography, { component: "span", sx: { fontSize: 13 }, children: opt.label })
            ]
          },
          key
        );
      })
    }
  );
  return selectNode;
};
var Select = (props) => {
  if (props.variant === "searchable") {
    const { variant, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SearchableSelect, { ...rest });
  }
  if (props.variant === "icon") {
    const { variant, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconSelect, { ...rest });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DefaultSelect, { ...props });
};

// src/components/ButtonGroup/ButtonGroup.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var DefaultIcons = {
  video: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "path",
    {
      d: "M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
      stroke: color,
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  location: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "path",
    {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5z",
      fill: color
    }
  ) }),
  phone: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "path",
    {
      d: "M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.56 21 3 13.44 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z",
      fill: color
    }
  ) }),
  whatsapp: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: color, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.44-1.43a9.84 9.84 0 004.55 1.13c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 13.49c-.23.64-1.36 1.22-1.87 1.28-.48.06-1.08.08-1.74-.11-.4-.12-.91-.28-1.56-.55-2.73-1.18-4.5-3.94-4.64-4.12-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.98.95-2.25.23-.26.5-.33.67-.33.17 0 .33 0 .48.01.15.01.36-.06.56.43.2.49.69 1.68.75 1.8.06.12.1.26.02.41-.08.15-.12.25-.24.38-.12.13-.25.29-.36.39-.12.11-.24.22-.1.44.14.22.62.97 1.32 1.57.9.79 1.67 1.04 1.9 1.16.23.12.36.1.5-.06.13-.17.57-.67.72-.9.15-.23.3-.19.5-.11.2.08 1.26.59 1.48.7.22.11.36.17.41.26.05.09.05.53-.18 1.17z" }) }),
  email: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        stroke: color,
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "polyline",
      {
        points: "22,6 12,13 2,6",
        stroke: color,
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] })
};
var ACTIVE_COLOR = "#4772FF";
var DynamicFields = ({
  method,
  values,
  onChange,
  disabled,
  bgColor
}) => {
  if (!method) return null;
  const handlePhoneChange = (fieldName, rawValue, maxLength) => {
    let digitsOnly = rawValue.replace(/\D/g, "");
    if (maxLength) digitsOnly = digitsOnly.slice(0, maxLength);
    onChange(fieldName, digitsOnly);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_material7.Box,
    {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        mt: 1.5,
        animation: "cmsIn 0.22s ease",
        "@keyframes cmsIn": {
          from: { opacity: 0, transform: "translateY(-4px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        }
      },
      children: method.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material7.Box, { sx: { flex: "1 1 160px", minWidth: 140 }, children: field.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Select,
        {
          variant: "icon",
          label: field.label,
          placeholder: field.label,
          value: values?.[field.name] || "",
          onChange: (val) => onChange(field.name, String(val)),
          disabled,
          options: field.options || [],
          fullWidth: true,
          size: "small",
          bgColor
        }
      ) : field.type === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: field.label,
          value: values?.[field.name] || "",
          onChange: (e) => handlePhoneChange(field.name, e.target.value, field.maxLength),
          onKeyDown: (e) => {
            const allowedKeys = [
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Tab",
              "Home",
              "End"
            ];
            if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey)
              return;
            if (!/^[0-9]$/.test(e.key)) {
              e.preventDefault();
            }
          },
          onPaste: (e) => {
            const pasted = e.clipboardData.getData("text");
            if (/\D/.test(pasted)) {
              e.preventDefault();
              handlePhoneChange(
                field.name,
                (values?.[field.name] || "") + pasted,
                field.maxLength
              );
            }
          },
          disabled,
          inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: field.maxLength || void 0
          },
          sx: {
            "& .VortexUIOutlinedInput-root": {
              fontSize: 13,
              bgcolor: bgColor || "#fff",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#E5E7EB" },
              "&.Mui-focused fieldset": { borderColor: ACTIVE_COLOR }
            }
          }
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: field.label,
          value: values?.[field.name] || "",
          onChange: (e) => onChange(field.name, e.target.value),
          disabled,
          sx: {
            "& .VortexUIOutlinedInput-root": {
              fontSize: 13,
              bgcolor: bgColor || "#fff",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#E5E7EB" },
              "&.Mui-focused fieldset": { borderColor: ACTIVE_COLOR }
            }
          }
        }
      ) }, field.name))
    }
  );
};
var SIZE_HEIGHTS = {
  sm: 32,
  md: 36,
  lg: 40
};
var ButtonGroup = ({
  value,
  onChange,
  disabled = false,
  bgColor = "#FFFFFF",
  variant = "icon",
  size = "lg",
  buttonHeight: buttonHeightProp,
  buttonWidth: buttonWidthProp,
  methods: methodsProp,
  fullWidth = false
}) => {
  const methods = methodsProp || [];
  const showIcon = variant === "icon" || variant === "both";
  const showText = variant === "text" || variant === "both";
  const buttonWidth = buttonWidthProp ?? void 0;
  const buttonHeight = buttonHeightProp ?? SIZE_HEIGHTS[size] ?? 40;
  const activeKey = value?.type || null;
  const activeIdx = methods.findIndex((m) => m.key === activeKey);
  const activeMethod = activeIdx !== -1 ? methods[activeIdx] : null;
  const [hoveredIdx, setHoveredIdx] = (0, import_react7.useState)(null);
  const buttonRefs = (0, import_react7.useRef)([]);
  const [pillStyle, setPillStyle] = (0, import_react7.useState)({ left: 0, width: 0 });
  (0, import_react7.useLayoutEffect)(() => {
    if (activeIdx !== -1 && buttonRefs.current[activeIdx]) {
      const el = buttonRefs.current[activeIdx];
      if (el) {
        setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }
  }, [activeIdx, buttonWidth, variant]);
  const handleSelect = (key) => {
    if (disabled) return;
    if (onChange) {
      onChange(
        activeKey === key ? { type: null, fields: {} } : { type: key, fields: {} }
      );
    }
  };
  const handleFieldChange = (fieldName, fieldVal) => {
    if (onChange) {
      onChange({
        type: activeKey,
        fields: { ...value?.fields || {}, [fieldName]: fieldVal }
      });
    }
  };
  const resolveIcon = (m, color) => {
    if (!showIcon) return null;
    if (m.icon) return typeof m.icon === "function" ? m.icon(color) : m.icon;
    if (DefaultIcons[m.key]) return DefaultIcons[m.key](color);
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material7.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_material7.Box,
      {
        sx: {
          position: "relative",
          display: "inline-flex",
          height: buttonHeight,
          borderRadius: "10px",
          bgcolor: "#F3F4F6",
          // Segmented control background
          p: "4px",
          // Inner padding
          width: fullWidth ? "100%" : buttonWidth ? methods.length * buttonWidth + (methods.length - 1) + 8 : "max-content",
          userSelect: "none"
        },
        children: [
          activeMethod && pillStyle.width > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_material7.Box,
            {
              sx: {
                position: "absolute",
                top: "4px",
                height: "calc(100% - 8px)",
                left: pillStyle.left,
                width: pillStyle.width,
                bgcolor: ACTIVE_COLOR,
                borderRadius: "6px",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                zIndex: 0,
                pointerEvents: "none",
                transition: "left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)"
              }
            }
          ),
          methods.map((m, i) => {
            const isActive = activeKey === m.key;
            const isHovered = hoveredIdx === i;
            const iconColor = isActive ? "#fff" : isHovered ? ACTIVE_COLOR : "#9CA3AF";
            const textColor = isActive ? "#fff" : isHovered ? ACTIVE_COLOR : "#6B7280";
            const iconNode = resolveIcon(m, iconColor);
            const button = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
              import_material7.Box,
              {
                ref: (el) => {
                  buttonRefs.current[i] = el;
                },
                onClick: () => handleSelect(m.key),
                onMouseEnter: () => setHoveredIdx(i),
                onMouseLeave: () => setHoveredIdx(null),
                sx: {
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: showIcon && showText ? "8px" : 0,
                  flex: fullWidth ? 1 : void 0,
                  width: fullWidth ? "auto" : buttonWidth || "auto",
                  minWidth: buttonWidth ? void 0 : variant === "icon" ? 48 : 80,
                  px: showText ? 3 : 2,
                  height: "100%",
                  borderRadius: "6px",
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.5 : 1,
                  bgcolor: !isActive && isHovered ? "rgba(0,0,0,0.04)" : "transparent",
                  transition: "background-color 0.15s ease",
                  whiteSpace: "nowrap"
                },
                children: [
                  iconNode && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    import_material7.Box,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "transform 0.15s ease",
                        transform: isActive ? "scale(1.08)" : "scale(1)"
                      },
                      children: iconNode
                    }
                  ),
                  showText && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    import_material7.Typography,
                    {
                      component: "span",
                      sx: {
                        fontSize: 13,
                        fontWeight: isActive ? 500 : 400,
                        color: textColor,
                        lineHeight: 1,
                        transition: "color 0.15s ease"
                      },
                      children: m.label
                    }
                  )
                ]
              },
              m.key
            );
            return variant === "icon" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material7.Tooltip, { title: m.label, placement: "top", arrow: true, children: button }, m.key) : button;
          })
        ]
      }
    ),
    activeMethod && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      DynamicFields,
      {
        method: activeMethod,
        values: value?.fields,
        onChange: handleFieldChange,
        disabled,
        bgColor
      }
    )
  ] });
};

// src/components/ChipInput/ChipInput.tsx
var import_react8 = require("react");
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_Typography3 = __toESM(require("@mui/material/Typography"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_InputAdornment = __toESM(require("@mui/material/InputAdornment"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Chip = ({
  label,
  onDelete,
  disabled
}) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  import_Box2.default,
  {
    sx: {
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      bgcolor: "#E8EDFF",
      border: "1px solid #D4DEFF",
      color: "#313952",
      fontSize: "13px",
      fontWeight: 400,
      px: 1.2,
      py: 0.5,
      borderRadius: "10px",
      userSelect: "none"
    },
    children: [
      label,
      !disabled && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_IconButton.default,
        {
          onClick: onDelete,
          size: "small",
          sx: {
            p: "2px",
            ml: 0.3
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "svg",
            {
              width: "8",
              height: "8",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "path",
                {
                  d: "M13 1L1 13M1 1L13 13",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        }
      )
    ]
  }
);
var ChipInput = ({
  label,
  chips = [],
  onChipsChange,
  bgColor,
  disabled = false,
  error = false,
  helperText,
  fullWidth = false,
  sx
}) => {
  const [inputValue, setInputValue] = (0, import_react8.useState)("");
  const [duplicateError, setDuplicateError] = (0, import_react8.useState)(false);
  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const isDuplicate = chips.some(
      (c) => c.toLowerCase() === trimmed.toLowerCase()
    );
    if (isDuplicate) {
      setDuplicateError(true);
      return;
    }
    onChipsChange?.([...chips, trimmed]);
    setInputValue("");
    setDuplicateError(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (duplicateError) setDuplicateError(false);
  };
  const handleDelete = (chip) => {
    onChipsChange?.(chips.filter((c) => c !== chip));
    if (duplicateError) setDuplicateError(false);
  };
  const showError = error || duplicateError;
  const displayHelperText = duplicateError ? "This entry already exists" : helperText;
  const passErrorToTextField = showError ? displayHelperText || true : false;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_Box2.default, { sx: { width: fullWidth ? "100%" : void 0, ...sx }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      TextField,
      {
        fullWidth,
        label,
        value: inputValue,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        disabled,
        error: passErrorToTextField,
        bgColor,
        inputProps: { "aria-label": label },
        InputProps: {
          endAdornment: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_InputAdornment.default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_IconButton.default,
            {
              onClick: handleAdd,
              size: "small",
              disabled: disabled || !inputValue.trim(),
              sx: {
                mr: -0.5,
                color: "#6B7280",
                "&:hover": {
                  color: "#374151",
                  backgroundColor: "transparent"
                }
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "path",
                {
                  d: "M12 5V19M5 12H19",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ) })
            }
          ) })
        }
      }
    ),
    displayHelperText && !showError && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_Typography3.default,
      {
        sx: {
          fontSize: "11px",
          mt: 0.5,
          fontWeight: 500,
          mx: "1px",
          color: "text.secondary"
        },
        children: displayHelperText
      }
    ),
    chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_Box2.default, { sx: { display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }, children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Chip,
      {
        label: chip,
        onDelete: () => handleDelete(chip),
        disabled
      },
      chip
    )) })
  ] });
};

// src/components/DataTable/DataTable.tsx
var import_react9 = __toESM(require("react"));
var import_material8 = require("@mui/material");
var import_jsx_runtime10 = require("react/jsx-runtime");
var DataTable = import_react9.default.forwardRef(
  ({ columns, data, isLoading = false, emptyMessage = "No data available" }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableContainer, { ref, component: import_material8.Paper, variant: "outlined", sx: { overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material8.Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { sx: { backgroundColor: "background.default" }, children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { align: col.align || "left", sx: { fontWeight: 600 }, children: col.header }, col.key)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { colSpan: columns.length, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.CircularProgress, { size: 32 }) }) }) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { colSpan: columns.length, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.Typography, { variant: "body2", color: "text.secondary", children: emptyMessage }) }) }) : data.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { hover: true, sx: { transition: "background-color 0.2s" }, children: columns.map((col) => {
        const val = row[col.key];
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { align: col.align || "left", children: col.render ? col.render(row) : val }, col.key);
      }) }, row.id || idx)) })
    ] }) });
  }
);
DataTable.displayName = "DataTable";

// src/components/Modal/Modal.tsx
var import_react10 = __toESM(require("react"));
var import_material9 = require("@mui/material");
var import_jsx_runtime11 = require("react/jsx-runtime");
var CloseIcon = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
var Modal = import_react10.default.forwardRef(
  ({ open, title, onClose, actions, children, fullWidth = true, maxWidth = "sm", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_material9.Dialog,
      {
        ref,
        open,
        onClose,
        fullWidth,
        maxWidth,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_material9.Box, { display: "flex", alignItems: "center", justifyContent: "space-between", pr: 1, children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.DialogTitle, { sx: { m: 0, p: 2, flexGrow: 1 }, children: title }),
            onClose && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_material9.IconButton,
              {
                "aria-label": "close",
                onClick: onClose,
                sx: {
                  color: (theme) => theme.palette.grey[500]
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CloseIcon, {})
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.DialogContent, { sx: { p: 3, pt: title ? 1 : 3 }, children }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.DialogActions, { sx: { p: 2 }, children: actions })
        ]
      }
    );
  }
);
Modal.displayName = "Modal";

// src/components/NumberField/NumberField.tsx
var import_material10 = require("@mui/material");
var import_Box3 = __toESM(require("@mui/material/Box"));
var import_IconButton2 = __toESM(require("@mui/material/IconButton"));
var import_styles3 = require("@mui/material/styles");
var import_TextField8 = __toESM(require("@mui/material/TextField"));
var import_react11 = require("react");
var import_icons_material4 = require("@mui/icons-material");
var import_jsx_runtime12 = require("react/jsx-runtime");
var StyledTextField2 = (0, import_styles3.styled)(
  ({
    bgColor = "transparent",
    hasLabel,
    hasValue,
    showButton,
    InputProps,
    ...props
  }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_TextField8.default,
    {
      variant: "filled",
      fullWidth: true,
      InputProps: {
        disableUnderline: true,
        ...InputProps,
        sx: {
          overflow: "visible",
          borderRadius: showButton ? "10px 0 0 10px !important" : "10px !important",
          backgroundColor: bgColor,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRight: showButton ? "none" : (theme) => `1px solid ${theme.palette.divider}`,
          height: "46px",
          transition: (theme) => theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow"
          ]),
          "&:hover": { backgroundColor: bgColor },
          "&:before, &:after": { display: "none" },
          "&.Mui-focused": {
            backgroundColor: bgColor,
            borderColor: (theme) => theme.palette.primary.main
          },
          ...InputProps?.sx || {}
        }
      },
      ...props
    }
  )
)(({ theme, bgColor, hasLabel, hasValue, showButton }) => ({
  "& .VortexUIInputLabel-root": {
    transform: "translate(10px, 13px) scale(1)",
    fontSize: "13px",
    color: theme.palette.text.primary,
    fontWeight: 400,
    transition: "transform 0.2s ease",
    "&.VortexUIInputLabel-shrink": {
      transform: "translate(10px, 6px) scale(0.75)",
      lineHeight: 1
    }
  },
  "& .VortexUIFilledInput-input": {
    padding: "0 8px",
    fontSize: "14px",
    color: theme.palette.text.primary,
    fontWeight: 400,
    backgroundColor: "transparent",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center"
  },
  "& .VortexUIInputLabel-shrink ~ .VortexUIFilledInput-root .VortexUIFilledInput-input": {
    padding: "24px 10px 0 10px"
  },
  "& label.Mui-focused": {
    color: theme.palette.text.secondary
  }
}));
var ArrowContainer = (0, import_styles3.styled)(import_Box3.default, {
  shouldForwardProp: (prop) => prop !== "bgColor"
})(({ theme, bgColor = "transparent" }) => ({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.palette.divider}`,
  borderLeft: `1px solid ${theme.palette.divider}`,
  borderRadius: "0 10px 10px 0",
  overflow: "hidden",
  backgroundColor: bgColor,
  width: "32px",
  height: "46px",
  transition: "border-color 300ms ease"
}));
var ArrowButton = (0, import_styles3.styled)(import_IconButton2.default)(({ theme }) => ({
  borderRadius: 0,
  padding: "2px",
  height: "50%",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  transition: "background-color 100ms ease",
  "&:hover": {
    backgroundColor: "transparent"
  },
  "&:active": {
    backgroundColor: theme.palette.divider
  },
  "&.Mui-disabled": {
    opacity: 0.4
  },
  "& .VortexUISvgIcon-root": {
    fontSize: "16px"
  }
}));
function NumberField({
  label = "Number Field",
  value: externalValue,
  onChange,
  onBlur,
  disabled = false,
  bgColor = "transparent",
  showButton = true,
  allowDecimal = false,
  allowNegative = false,
  min = allowNegative ? -Infinity : 0,
  max = Infinity,
  step = 1,
  decimalPlaces = 2,
  sx,
  prefix: prefix2,
  unit,
  ...props
}) {
  const [internalValue, setInternalValue] = (0, import_react11.useState)(
    externalValue !== void 0 ? String(externalValue) : ""
  );
  const value = externalValue !== void 0 ? String(externalValue) : internalValue;
  const isIntermediate = ["", "-", ".", "-."].includes(value);
  const numericValue = isIntermediate ? 0 : parseFloat(value);
  const valueRef = (0, import_react11.useRef)(numericValue);
  valueRef.current = numericValue;
  const setValue = (val) => {
    setInternalValue(val);
    onChange?.({ target: { value: val } });
  };
  const clamp = (num) => {
    let n = num;
    if (n < min) n = min;
    if (n > max) n = max;
    return n;
  };
  const roundStep = (num) => {
    if (!allowDecimal) return Math.round(num);
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  };
  const getPattern = () => {
    if (allowNegative && allowDecimal) return /^-?\d*\.?\d*$/;
    if (allowNegative && !allowDecimal) return /^-?\d*$/;
    if (!allowNegative && allowDecimal) return /^\d*\.?\d*$/;
    return /^\d*$/;
  };
  const intermediateStates = allowNegative ? allowDecimal ? ["-", ".", "-."] : ["-"] : allowDecimal ? ["."] : [];
  const handleChange = (e) => {
    const raw = e.target.value;
    if (raw === "") {
      setValue("");
      return;
    }
    if (!getPattern().test(raw)) return;
    if (intermediateStates.includes(raw)) {
      setValue(raw);
      return;
    }
    const parsed = parseFloat(raw);
    if (isNaN(parsed)) return;
    setValue(raw);
  };
  const handleBlur = (e) => {
    if (isIntermediate) {
      setValue("");
      onBlur?.(e);
      return;
    }
    let parsed = parseFloat(value);
    if (isNaN(parsed)) parsed = 0;
    parsed = clamp(parsed);
    setValue(allowDecimal ? String(parsed) : String(Math.round(parsed)));
    onBlur?.(e);
  };
  const increment = () => {
    const next2 = clamp(roundStep(valueRef.current + step));
    setValue(String(next2));
  };
  const decrement = () => {
    const next2 = clamp(roundStep(valueRef.current - step));
    setValue(String(next2));
  };
  const repeatTimeoutRef = (0, import_react11.useRef)(null);
  const repeatIntervalRef = (0, import_react11.useRef)(null);
  const stopRepeat = () => {
    if (repeatTimeoutRef.current) {
      clearTimeout(repeatTimeoutRef.current);
      repeatTimeoutRef.current = null;
    }
    if (repeatIntervalRef.current) {
      clearInterval(repeatIntervalRef.current);
      repeatIntervalRef.current = null;
    }
  };
  const startRepeat = (action) => {
    action();
    repeatTimeoutRef.current = setTimeout(() => {
      repeatIntervalRef.current = setInterval(action, 100);
    }, 400);
  };
  (0, import_react11.useEffect)(() => stopRepeat, []);
  const canIncrement = !disabled && numericValue < max;
  const canDecrement = !disabled && numericValue > min;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_Box3.default,
    {
      display: "flex",
      alignItems: "stretch",
      width: "fit-content",
      sx: {
        width: 1,
        "&:focus-within .arrow-container": {
          borderTopColor: (theme) => theme.palette.primary.main,
          borderRightColor: (theme) => theme.palette.primary.main,
          borderBottomColor: (theme) => theme.palette.primary.main
        },
        ...sx
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          StyledTextField2,
          {
            label,
            value,
            onChange: handleChange,
            onBlur: handleBlur,
            hasLabel: !!label,
            hasValue: value !== "",
            disabled,
            bgColor,
            showButton,
            inputProps: {
              inputMode: allowDecimal ? "decimal" : "numeric",
              pattern: allowNegative ? allowDecimal ? "-?[0-9]*\\.?[0-9]*" : "-?[0-9]*" : allowDecimal ? "[0-9]*\\.?[0-9]*" : "[0-9]*",
              min,
              max
            },
            InputProps: {
              ...prefix2 && {
                startAdornment: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.InputAdornment, { position: "start", children: prefix2 })
              },
              ...unit && {
                endAdornment: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.InputAdornment, { position: "end", sx: { mr: 1, ml: 0 }, children: unit })
              }
            },
            ...props
          }
        ),
        showButton && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(ArrowContainer, { className: "arrow-container", bgColor, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            ArrowButton,
            {
              onMouseDown: (e) => {
                e.preventDefault();
                if (canIncrement) startRepeat(increment);
              },
              onMouseUp: stopRepeat,
              onMouseLeave: stopRepeat,
              onTouchStart: (e) => {
                e.preventDefault();
                if (canIncrement) startRepeat(increment);
              },
              onTouchEnd: stopRepeat,
              disableRipple: true,
              size: "small",
              disabled: !canIncrement,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_icons_material4.ExpandLess, { color: "secondary" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.Divider, { orientation: "horizontal", flexItem: true, sx: { marginX: "4px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            ArrowButton,
            {
              onMouseDown: (e) => {
                e.preventDefault();
                if (canDecrement) startRepeat(decrement);
              },
              onMouseUp: stopRepeat,
              onMouseLeave: stopRepeat,
              onTouchStart: (e) => {
                e.preventDefault();
                if (canDecrement) startRepeat(decrement);
              },
              onTouchEnd: stopRepeat,
              disableRipple: true,
              size: "small",
              disabled: !canDecrement,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_icons_material4.ExpandMore, { color: "secondary" })
            }
          )
        ] })
      ]
    }
  );
}

// src/components/TextAreas/Textarea.tsx
var import_react12 = __toESM(require("react"));
var import_Box4 = __toESM(require("@mui/material/Box"));
var import_styles4 = require("@mui/material/styles");
var import_Typography4 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Wrapper = (0, import_styles4.styled)(import_Box4.default, {
  shouldForwardProp: (p) => p !== "bgColor" && p !== "isError" && p !== "isDisabled"
})(
  ({ theme, bgColor = "#FAFBFF", isError, isDisabled }) => ({
    width: "100%",
    borderRadius: "10px",
    backgroundColor: isDisabled ? theme.palette.action.disabledBackground : bgColor,
    border: `1px solid ${isError ? theme.palette.error.main : "#D8D9DC"}`,
    padding: "8px 12px",
    boxSizing: "border-box",
    cursor: isDisabled ? "not-allowed" : "text",
    transition: "border-color 0.2s, box-shadow 0.2s, background-color 0.2s",
    "&:focus-within": {
      backgroundColor: "#fff",
      borderColor: isError ? theme.palette.error.main : theme.palette.primary.main
    },
    "&:hover:not(:focus-within)": {
      backgroundColor: isDisabled ? void 0 : "#fff"
    }
  })
);
var StyledTextarea = (0, import_styles4.styled)("textarea", {
  shouldForwardProp: (p) => p !== "isExpandable"
})(({ theme, isExpandable }) => ({
  width: "100%",
  border: "none",
  outline: "none",
  resize: isExpandable ? "vertical" : "none",
  overflow: isExpandable ? "hidden" : void 0,
  backgroundColor: "transparent",
  fontSize: "14px",
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  lineHeight: isExpandable ? "21px" : 1.5,
  padding: 0,
  marginTop: "2px",
  display: "block",
  boxSizing: "border-box",
  "&::placeholder": {
    color: theme.palette.text.disabled
  },
  "&:disabled": {
    cursor: "not-allowed",
    color: theme.palette.text.disabled,
    resize: "none"
  }
}));
var Textarea = import_react12.default.forwardRef(
  ({
    variant = "default",
    label,
    value,
    onChange,
    maxLength,
    rows = 3,
    minRows,
    bgColor = "#FAFBFF",
    error,
    disabled,
    placeholder,
    fullWidth,
    inputProps,
    ...rest
  }, ref) => {
    const isExpandable = variant === "expandable";
    const isMinLength = variant === "minLength";
    const internalRef = (0, import_react12.useRef)(null);
    const textareaRef = ref || internalRef;
    const [internalValue, setInternalValue] = import_react12.default.useState(
      rest.defaultValue !== void 0 ? String(rest.defaultValue) : ""
    );
    const currentValue = value !== void 0 ? String(value) : internalValue;
    const charCount = currentValue.length;
    const showCounter = isMinLength || maxLength != null;
    const minLengthError = isMinLength && charCount > 0 && maxLength != null && charCount < maxLength;
    const resolvedError = isMinLength ? minLengthError || error : error;
    const resolvedLabel = isMinLength ? `${label} (Min ${maxLength} chars)` : label;
    const resolvedRows = isMinLength && rows === 3 ? 4 : rows;
    const effectiveMinRows = minRows ?? resolvedRows;
    const LINE_HEIGHT = 21;
    const resize = (el) => {
      if (!el) return;
      const minH = LINE_HEIGHT * effectiveMinRows;
      el.style.height = "0px";
      el.style.height = `${Math.max(el.scrollHeight, minH)}px`;
    };
    (0, import_react12.useLayoutEffect)(() => {
      if (isExpandable) {
        resize(textareaRef.current);
      }
    }, [currentValue, effectiveMinRows, isExpandable]);
    const handleChange = (e) => {
      if (value === void 0) {
        setInternalValue(e.target.value);
      }
      if (isExpandable) {
        resize(e.target);
      }
      onChange?.(e);
    };
    const counterText = isMinLength ? `${charCount}/${maxLength}` : `${charCount}/${maxLength}`;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_Box4.default, { sx: { width: fullWidth ? "100%" : void 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        Wrapper,
        {
          bgColor,
          isError: !!resolvedError,
          isDisabled: !!disabled,
          children: [
            (resolvedLabel || showCounter) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              import_Box4.default,
              {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  resolvedLabel && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    import_Typography4.default,
                    {
                      component: "span",
                      sx: {
                        fontSize: "11px",
                        color: resolvedError ? "error.main" : "text.secondary",
                        fontWeight: 400,
                        lineHeight: 1,
                        userSelect: "none"
                      },
                      children: resolvedLabel
                    }
                  ),
                  showCounter && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    import_Typography4.default,
                    {
                      component: "span",
                      sx: {
                        fontSize: "12px",
                        color: resolvedError ? "error.main" : "text.secondary",
                        lineHeight: 1,
                        ml: "auto",
                        userSelect: "none",
                        fontWeight: 400
                      },
                      children: counterText
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              StyledTextarea,
              {
                ref: textareaRef,
                isExpandable,
                value: currentValue,
                onChange: handleChange,
                rows: isExpandable ? effectiveMinRows : resolvedRows,
                maxLength: isMinLength ? void 0 : maxLength,
                disabled,
                placeholder,
                ...inputProps,
                ...rest
              }
            )
          ]
        }
      ),
      resolvedError && typeof resolvedError === "string" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_Typography4.default,
        {
          sx: {
            fontSize: "12px",
            mt: 0.5,
            mx: "14px",
            color: "error.main"
          },
          children: resolvedError
        }
      ),
      isMinLength && minLengthError && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_Typography4.default,
        {
          sx: {
            fontSize: "12px",
            mt: 0.5,
            mx: "14px",
            color: "error.main"
          },
          children: `Minimum ${maxLength} characters required.`
        }
      )
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/Link/Link.tsx
var import_link = __toESM(require_link2());
var import_material11 = require("@mui/material");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Link = ({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  underline = "hover",
  startIcon,
  endIcon,
  disabled = false,
  sx = {},
  ...props
}) => {
  const getThemeColors = () => {
    switch (variant) {
      case "secondary":
        return { color: "#6B7280", hover: "#374151" };
      case "neutral":
        return { color: "#111827", hover: "#4772FF" };
      case "success":
        return { color: "#10B981", hover: "#059669" };
      case "danger":
        return { color: "#EF4444", hover: "#DC2626" };
      case "primary":
      default:
        return { color: "#4772FF", hover: "#2F58E6" };
    }
  };
  const getFontSize = () => {
    switch (size) {
      case "sm":
        return "12px";
      case "lg":
        return "16px";
      case "md":
      default:
        return "14px";
    }
  };
  const colors2 = getThemeColors();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_material11.Link,
    {
      component: import_link.default,
      href: disabled ? "#" : href,
      underline,
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.8,
        color: disabled ? "#9CA3AF" : colors2.color,
        fontSize: getFontSize(),
        fontWeight: 500,
        transition: "color 0.2s ease",
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "default" : "pointer",
        "&:hover": {
          color: disabled ? "#9CA3AF" : colors2.hover
        },
        ...sx
      },
      ...props,
      children: [
        startIcon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material11.Box, { component: "span", sx: { display: "flex", alignItems: "center", "& svg": { fontSize: "1.2em" } }, children: startIcon }),
        children,
        endIcon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material11.Box, { component: "span", sx: { display: "flex", alignItems: "center", "& svg": { fontSize: "1.2em" } }, children: endIcon })
      ]
    }
  );
};

// src/components/CheckboxGroup/CheckboxGroup.tsx
var import_react13 = require("react");
var import_material12 = require("@mui/material");
var import_jsx_runtime15 = require("react/jsx-runtime");
var VARIANTS = {
  sm: {
    size: 18,
    tick: 8,
    fontSize: "13px",
    fontWeight: 400,
    borderRadius: "5px",
    iconSize: 10
  },
  md: {
    size: 20,
    tick: 10,
    fontSize: "13px",
    fontWeight: 400,
    borderRadius: "6.25px",
    iconSize: 14
  },
  lg: {
    size: 22,
    tick: 12,
    fontSize: "13px",
    fontWeight: 400,
    borderRadius: "7.5px",
    iconSize: 20
  }
};
var CheckboxGroupContext = (0, import_react13.createContext)(void 0);
var StyledCheckbox = ({
  borderColor = "#D3D6E2",
  checkedColor = "#4772FF",
  variant = "md",
  ...props
}) => {
  const v = VARIANTS[variant] ?? VARIANTS.md;
  const boxBase = {
    width: `${v.size}px`,
    height: `${v.size}px`,
    borderRadius: v.borderRadius
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_material12.Checkbox,
    {
      size: "small",
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_material12.Box,
        {
          sx: {
            ...boxBase,
            border: `1px solid ${borderColor}`,
            backgroundColor: "transparent"
          }
        }
      ),
      checkedIcon: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_material12.Box,
        {
          sx: {
            ...boxBase,
            border: `1px solid ${checkedColor}`,
            backgroundColor: checkedColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "svg",
            {
              width: v.tick,
              height: v.tick,
              viewBox: "0 0 11 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "path",
                {
                  d: "M1 3.5L4 6.5L10 1",
                  stroke: "#fff",
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        }
      ),
      indeterminateIcon: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_material12.Box,
        {
          sx: {
            ...boxBase,
            border: `1px solid ${checkedColor}`,
            backgroundColor: checkedColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            import_material12.Box,
            {
              sx: {
                width: `${v.iconSize}px`,
                height: "1.8px",
                backgroundColor: "#fff",
                borderRadius: "2px"
              }
            }
          )
        }
      ),
      sx: { p: 0, "&:hover": { backgroundColor: "transparent" }, ...props.sx }
    }
  );
};
var Checkbox = ({
  value,
  label,
  disabled,
  color,
  borderColor,
  variant,
  sx = {}
}) => {
  const context = (0, import_react13.useContext)(CheckboxGroupContext);
  if (!context) {
    throw new Error("Checkbox must be used within a CheckboxGroup");
  }
  const isChecked = context.value.includes(value);
  const isDisabled = disabled || context.disabled;
  const activeVariant = variant || context.variant;
  const activeBorderColor = borderColor || context.borderColor;
  const activeColor = color || context.color || "#4772FF";
  const { fontSize, fontWeight } = VARIANTS[activeVariant] ?? VARIANTS.md;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_material12.FormControlLabel,
    {
      control: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        StyledCheckbox,
        {
          checked: isChecked,
          onChange: (e) => context.onChange(value, e.target.checked),
          disabled: isDisabled,
          variant: activeVariant,
          borderColor: activeBorderColor,
          checkedColor: activeColor
        }
      ),
      label,
      disabled: isDisabled,
      sx: {
        m: 0,
        gap: 1,
        "& .MuiFormControlLabel-label": {
          fontSize,
          fontWeight,
          color: isDisabled ? "#9CA3AF" : "#313952"
        },
        ...sx
      }
    }
  );
};
var CheckboxGroup = ({
  value = [],
  onChange,
  options = [],
  orientation = "horizontal",
  variant = "md",
  disabled = false,
  color,
  borderColor = "#D3D6E2",
  label,
  sx = {},
  children
}) => {
  const handleChange = (optionValue, checked) => {
    if (!onChange) return;
    const next2 = checked ? [...value, optionValue] : value.filter((v) => v !== optionValue);
    onChange(next2);
  };
  const contextValue = {
    value,
    onChange: handleChange,
    disabled,
    variant,
    color,
    borderColor
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CheckboxGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_material12.FormControl, { disabled, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      import_material12.FormLabel,
      {
        sx: {
          fontSize: "13px",
          fontWeight: 400,
          color: "#313952",
          mb: 1,
          "&.Mui-focused": { color: "#313952" },
          "&.Mui-disabled": { color: "#313952" }
        },
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material12.FormGroup, { row: orientation === "horizontal", sx: { gap: 1.5, ...sx }, children: options.length > 0 ? options.map((opt, i) => {
      const optObj = typeof opt === "string" ? { label: opt, value: opt } : opt;
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Checkbox,
        {
          value: optObj.value,
          label: optObj.label,
          color: optObj.color
        },
        optObj.value ?? i
      );
    }) : children })
  ] }) });
};

// src/components/RadioGroup/RadioGroup.tsx
var import_react14 = require("react");
var import_material13 = require("@mui/material");
var import_jsx_runtime16 = require("react/jsx-runtime");
var VARIANTS2 = {
  sm: { size: 18 },
  md: { size: 20 },
  lg: { size: 22 }
};
var RadioGroupContext = (0, import_react14.createContext)(
  void 0
);
var Radio = ({
  value,
  label,
  disabled,
  color,
  unselectedColor,
  variant,
  sx = {}
}) => {
  const context = (0, import_react14.useContext)(RadioGroupContext);
  if (!context) {
    throw new Error("Radio must be used within a RadioGroup");
  }
  const isDisabled = disabled || context.disabled;
  const activeVariant = variant || context.variant;
  const activeColor = color || context.color || "#4772FF";
  const activeUnselectedColor = unselectedColor || context.unselectedColor || activeColor;
  const { size } = VARIANTS2[activeVariant] ?? VARIANTS2.md;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_material13.FormControlLabel,
    {
      value,
      control: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_material13.Radio,
        {
          size: "small",
          disabled: isDisabled,
          sx: {
            p: 0,
            width: size,
            height: size,
            color: activeUnselectedColor,
            "&.Mui-checked": { color: activeColor },
            "& svg": { width: size, height: size },
            "&:hover": { bgcolor: "transparent" },
            ...sx
          },
          disableRipple: true
        }
      ),
      label,
      disabled: isDisabled,
      sx: {
        m: 0,
        gap: 0.5,
        "& .MuiFormControlLabel-label": {
          fontSize: "13px",
          color: isDisabled ? "#9CA3AF" : "#313952",
          fontWeight: 400
        }
      }
    }
  );
};
var RadioGroup = ({
  value,
  onChange,
  options = [],
  orientation = "horizontal",
  variant = "md",
  disabled = false,
  color,
  unselectedColor = "#4772FF",
  label,
  sx = {},
  children
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const contextValue = {
    value,
    onChange: (val) => onChange?.(val),
    disabled,
    variant,
    color,
    unselectedColor
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.FormControl, { disabled, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_material13.FormLabel,
      {
        sx: {
          fontSize: "13px",
          fontWeight: 400,
          color: "#313952",
          mb: 1,
          "&.Mui-focused": { color: "#313952" },
          "&.Mui-disabled": { color: "#313952" }
        },
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_material13.RadioGroup,
      {
        row: orientation === "horizontal",
        value,
        onChange: handleChange,
        sx: { gap: 1.5, ...sx },
        children: options.length > 0 ? options.map((opt, i) => {
          const optObj = typeof opt === "string" ? { label: opt, value: opt } : opt;
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Radio,
            {
              value: optObj.value,
              label: optObj.label,
              color: optObj.color
            },
            optObj.value ?? i
          );
        }) : children
      }
    )
  ] }) });
};

// src/components/ToggleSwitch/ToggleSwitch.tsx
var import_react15 = require("react");
var import_material14 = require("@mui/material");
var import_jsx_runtime17 = require("react/jsx-runtime");
var TOGGLE_VARIANTS = {
  sm: {
    trackWidth: 32,
    trackHeight: 18,
    thumbSize: 14,
    padding: 2,
    fontSize: "13px"
  },
  md: {
    trackWidth: 35,
    trackHeight: 20,
    thumbSize: 16,
    padding: 2,
    fontSize: "13px"
  },
  lg: {
    trackWidth: 39,
    trackHeight: 22,
    thumbSize: 18,
    padding: 2,
    fontSize: "13px"
  }
};
var ToggleSwitch = ({
  label = "",
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  variant = "md",
  color = "#4772FF",
  unselectedColor = "#C5C9D6",
  labelProps = {}
}) => {
  const isControlled = checked !== void 0;
  const [internalChecked, setInternalChecked] = (0, import_react15.useState)(
    isControlled ? checked : defaultChecked
  );
  (0, import_react15.useEffect)(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [isControlled, checked]);
  const isOn = isControlled ? checked : internalChecked;
  const { trackWidth, trackHeight, thumbSize, padding, fontSize } = TOGGLE_VARIANTS[variant] || TOGGLE_VARIANTS.md;
  const onOffsetX = trackWidth - thumbSize - padding;
  const handleToggle = () => {
    if (disabled) return;
    const nextState = !isOn;
    if (!isControlled) {
      setInternalChecked(nextState);
    }
    if (onChange) {
      onChange(nextState);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    import_material14.Box,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        userSelect: "none"
      },
      onClick: handleToggle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_material14.Box,
          {
            sx: {
              width: trackWidth,
              height: trackHeight,
              borderRadius: "999px",
              bgcolor: isOn ? color : unselectedColor,
              position: "relative",
              transition: "background-color 0.25s ease",
              flexShrink: 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              import_material14.Box,
              {
                sx: {
                  position: "absolute",
                  top: "50%",
                  transform: `translateY(-50%) translateX(${isOn ? onOffsetX : padding}px)`,
                  width: thumbSize,
                  height: thumbSize,
                  borderRadius: "50%",
                  bgcolor: "#FFFFFF",
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.25)",
                  transition: "transform 0.25s ease"
                }
              }
            )
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_material14.Typography,
          {
            variant: "body2",
            fontWeight: 400,
            fontSize,
            color: "#1F2A40",
            ...labelProps,
            children: label
          }
        )
      ]
    }
  );
};

// src/components/Card/Card.tsx
var import_material15 = require("@mui/material");
var import_jsx_runtime18 = require("react/jsx-runtime");
var SHADOWS = {
  none: "none",
  sm: "0px 2px 4px 0px rgba(0,0,0,0.075)",
  md: "0px 4px 8px 0px rgba(0,0,0,0.075)",
  lg: "0px 8px 12px 0px rgba(0,0,0,0.075)",
  xl: "0px 12px 16px 0px rgba(0,0,0,0.075)"
};
var Card = ({
  variant = "none",
  fullWidth = true,
  children,
  sx,
  ...rest
}) => {
  const shadow = SHADOWS[variant] ?? SHADOWS.none;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_material15.Card,
    {
      elevation: 0,
      sx: {
        ...fullWidth && { width: "100%" },
        bgcolor: "#FFFFFF",
        border: "1px solid #CDCDCD",
        borderRadius: "10px",
        boxShadow: shadow,
        p: 2,
        ...sx
      },
      ...rest,
      children
    }
  );
};

// src/components/Sheet/Sheet.tsx
var import_material16 = require("@mui/material");
var import_jsx_runtime19 = require("react/jsx-runtime");
var SHADOWS2 = {
  none: "none",
  sm: "0px 2px 4px 0px rgba(0,0,0,0.075)",
  md: "0px 4px 8px 0px rgba(0,0,0,0.075)",
  lg: "0px 8px 12px 0px rgba(0,0,0,0.075)",
  xl: "0px 12px 16px 0px rgba(0,0,0,0.075)"
};
var Sheet = ({
  variant = "none",
  fullHeight = false,
  children,
  sx,
  ...rest
}) => {
  const shadow = SHADOWS2[variant] ?? SHADOWS2.none;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_material16.Box,
    {
      sx: {
        bgcolor: "#FFFFFF",
        border: "1px solid #CDCDCD",
        borderRadius: "10px",
        boxShadow: shadow,
        ...fullHeight && { flex: 1 },
        // Default padding — override via sx prop
        p: 2,
        ...sx
      },
      ...rest,
      children
    }
  );
};

// src/components/Grid/Grid.tsx
var import_react16 = __toESM(require("react"));
var import_material17 = require("@mui/material");
var import_jsx_runtime20 = require("react/jsx-runtime");
var CUSTOM_SPACING_MAP = {
  none: 0,
  xs: 1,
  // 8px
  sm: 2,
  // 16px
  md: 3,
  // 24px
  lg: 4,
  // 32px
  xl: 6
  // 48px
};
var Grid = import_react16.default.forwardRef(
  ({ spacing = "sm", children, ...rest }, ref) => {
    const resolvedSpacing = typeof spacing === "string" && spacing in CUSTOM_SPACING_MAP ? CUSTOM_SPACING_MAP[spacing] : spacing;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Grid2, { ref, spacing: resolvedSpacing, ...rest, children });
  }
);
Grid.displayName = "Grid";

// src/components/Badge/CountBadge.tsx
var import_material18 = require("@mui/material");
var import_jsx_runtime21 = require("react/jsx-runtime");
var CountBadge = ({
  count,
  maxCount = 9,
  active = false,
  activeBg = "#4772FF",
  activeColor = "#fff",
  inactiveBg = "#D6DEEA",
  inactiveColor = "#313952",
  fontSize = 11,
  fontWeight = 500,
  size = 17,
  sx = {}
}) => {
  if (count == null) return null;
  const displayCount = typeof count === "number" && maxCount != null && count > maxCount ? `${maxCount}+` : count;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    import_material18.Box,
    {
      sx: {
        bgcolor: active ? activeBg : inactiveBg,
        color: active ? activeColor : inactiveColor,
        fontSize,
        fontWeight,
        borderRadius: "100%",
        minWidth: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: "6px",
        pt: 0.2,
        ...sx
      },
      children: displayCount
    }
  );
};
var CountBadge_default = CountBadge;

// src/components/Slider/Slider.tsx
var import_material19 = require("@mui/material");
var import_jsx_runtime22 = require("react/jsx-runtime");
var getSliderSx = (trackColor, railColor) => ({
  color: trackColor,
  height: 6,
  padding: "13px 0",
  "& .MuiSlider-rail": {
    backgroundColor: railColor,
    opacity: 1,
    height: 6,
    borderRadius: 3
  },
  "& .MuiSlider-track": {
    backgroundColor: trackColor,
    border: "none",
    height: 6,
    borderRadius: 3
  },
  "& .MuiSlider-thumb": {
    width: 18,
    height: 18,
    backgroundColor: trackColor,
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0 0 0 8px ${trackColor}22`
    },
    "&.Mui-active": {
      boxShadow: `0 0 0 10px ${trackColor}33`
    }
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#E8EDFF",
    color: "#1E2746",
    fontSize: 13,
    fontWeight: 400,
    borderRadius: "8px",
    padding: "5px 12px",
    "&::before": {
      backgroundColor: "#E8EDFF",
      width: 8,
      height: 8
    }
  },
  "& .MuiSlider-mark": {
    display: "none"
  },
  "& .MuiSlider-markLabel": {
    fontSize: 13,
    color: "#1E2746",
    fontWeight: 400,
    top: 30,
    '&[data-index="0"]': {
      left: "0px !important",
      transform: "none"
    },
    '&[data-index="1"]': {
      right: "0px !important",
      left: "auto !important",
      transform: "none"
    }
  }
});
var Slider = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  trackColor = "#4772FF",
  railColor = "#E5EBFF",
  showMinMaxLabels = true,
  valueSuffix = "",
  sx = {}
}) => {
  const marks = showMinMaxLabels ? [
    { value: min, label: `${min}` },
    { value: max, label: `${max}` }
  ] : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_material19.Box, { sx: { width: "100%", ...sx }, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      import_material19.Typography,
      {
        variant: "caption",
        fontSize: 13,
        fontWeight: 400,
        color: "#374151",
        mb: 1,
        display: "block",
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_material19.Box, { sx: { px: 0.5, pb: showMinMaxLabels ? 2.5 : 0, pt: 2.5 }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      import_material19.Slider,
      {
        value,
        onChange: (e, newValue) => onChange(newValue),
        min,
        max,
        step,
        disabled,
        marks,
        valueLabelDisplay: "auto",
        sx: getSliderSx(trackColor, railColor)
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      import_material19.Typography,
      {
        fontSize: 13,
        fontWeight: 500,
        color: "#4F6FFA",
        textAlign: "center",
        mt: -6,
        children: [
          value,
          valueSuffix
        ]
      }
    )
  ] });
};

// src/components/Slider/RangeSlider.tsx
var import_material20 = require("@mui/material");
var import_jsx_runtime23 = require("react/jsx-runtime");
var getRangeSliderSx = (trackColor, railColor) => ({
  color: trackColor,
  height: 6,
  padding: "13px 0",
  "& .MuiSlider-rail": {
    backgroundColor: railColor,
    opacity: 1,
    height: 6,
    borderRadius: 4
  },
  "& .MuiSlider-track": {
    backgroundColor: trackColor,
    border: "none",
    height: 6,
    borderRadius: 4
  },
  "& .MuiSlider-thumb": {
    width: 18,
    height: 18,
    backgroundColor: trackColor,
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0 0 0 8px ${trackColor}22`
    },
    "&.Mui-active": {
      boxShadow: `0 0 0 10px ${trackColor}33`
    }
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#E8EDFF",
    color: "#1E2746",
    fontSize: 13,
    fontWeight: 400,
    borderRadius: "8px",
    padding: "5px 12px",
    "&::before": {
      backgroundColor: "#E8EDFF",
      width: 8,
      height: 8
    }
  },
  "& .MuiSlider-mark": {
    display: "none"
  },
  "& .MuiSlider-markLabel": {
    fontSize: 13,
    color: "#1E2746",
    fontWeight: 400,
    top: 30,
    '&[data-index="0"]': {
      left: "0px !important",
      transform: "none"
    },
    '&[data-index="1"]': {
      right: "0px !important",
      left: "auto !important",
      transform: "none"
    }
  }
});
var RangeSlider = ({
  label,
  value,
  // [min, max]
  onChange,
  min = 0,
  max = 100,
  step = 1,
  minDistance = 0,
  disabled = false,
  trackColor = "#4772FF",
  railColor = "#E5EBFF",
  showMinMaxLabels = true,
  showRangeText = true,
  sx = {}
}) => {
  const marks = showMinMaxLabels ? [
    { value: min, label: `${min}` },
    { value: max, label: `${max}` }
  ] : void 0;
  const handleChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        onChange([value[1] - minDistance, value[1]]);
      } else {
        onChange([value[0], value[0] + minDistance]);
      }
    } else {
      onChange(newValue);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_material20.Box, { sx: { width: "100%", ...sx }, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      import_material20.Typography,
      {
        variant: "caption",
        fontSize: 13,
        fontWeight: 400,
        color: "#374151",
        mb: 1,
        display: "block",
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_material20.Box, { sx: { px: 0.5, pb: showMinMaxLabels ? 3.5 : 0, pt: 2.5 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_material20.Slider,
        {
          value,
          onChange: handleChange,
          min,
          max,
          step,
          disabled,
          marks,
          valueLabelDisplay: "auto",
          disableSwap: true,
          sx: getRangeSliderSx(trackColor, railColor)
        }
      ),
      showRangeText && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
        import_material20.Typography,
        {
          sx: {
            textAlign: "center",
            fontSize: 14,
            fontWeight: 500,
            color: "#4F6FFA",
            mt: showMinMaxLabels ? -4 : 1
          },
          children: [
            value[0],
            " - ",
            value[1]
          ]
        }
      )
    ] })
  ] });
};

// src/components/Progress/Progress.tsx
var import_react17 = require("react");
var import_material21 = require("@mui/material");
var import_styles5 = require("@mui/material/styles");
var import_jsx_runtime24 = require("react/jsx-runtime");
var ProgressBarContainer = (0, import_styles5.styled)(import_material21.Box)(
  ({ theme, bheight, bgcolor, bradius }) => ({
    width: "100%",
    backgroundColor: bgcolor || "#EEF2FF",
    borderRadius: bradius || 10,
    overflow: "hidden",
    height: bheight || 8,
    position: "relative"
  })
);
var ProgressFill = (0, import_styles5.styled)(import_material21.Box)(
  ({ fillcolor, duration, stepjump }) => ({
    height: "100%",
    backgroundColor: fillcolor || "#4772FF",
    transition: (stepjump || 0) > 0 ? `background-color ${duration || 1}s ease` : `width ${duration || 1}s cubic-bezier(0.4, 0, 0.2, 1), background-color ${duration || 1}s ease`,
    borderRadius: "inherit",
    position: "relative"
  })
);
var Progress = ({
  value = 0,
  showValue = false,
  valuePosition = "right",
  height = 8,
  borderRadius = 10,
  bgColor = "#EEF2FF",
  getColor,
  animationDuration = 1.2,
  variant = "default",
  // "default" | "stepper"
  steps = 5,
  stepJump = 0,
  ...props
}) => {
  const [currentValue, setCurrentValue] = (0, import_react17.useState)(0);
  const targetRef = (0, import_react17.useRef)(0);
  const intervalRef = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [stepJump, animationDuration]);
  (0, import_react17.useEffect)(() => {
    let finalTarget = Math.min(100, Math.max(0, value));
    if (stepJump > 0) {
      finalTarget = Math.floor(finalTarget / stepJump) * stepJump;
    }
    targetRef.current = finalTarget;
    if (stepJump > 0) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(
          () => {
            setCurrentValue((prev2) => {
              const target = targetRef.current;
              if (prev2 < target) {
                const next2 = Math.floor((prev2 + 0.01) / stepJump) * stepJump + stepJump;
                return Math.min(target, next2);
              } else if (prev2 > target) {
                const next2 = Math.ceil((prev2 - 0.01) / stepJump) * stepJump - stepJump;
                return Math.max(target, next2);
              } else {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
                return prev2;
              }
            });
          },
          animationDuration * 1e3 / (100 / stepJump || 1)
        );
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      const timer = setTimeout(() => {
        setCurrentValue(targetRef.current);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [value, stepJump, animationDuration]);
  (0, import_react17.useEffect)(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  const defaultGetColor = (val) => {
    if (val >= 90) return "#10B981";
    if (val >= 50) return "#4772FF";
    if (val >= 25) return "#F59E0B";
    return "#FF4750";
  };
  const colorValue = stepJump > 0 ? Math.floor(currentValue / stepJump) * stepJump : currentValue;
  const fillColor = getColor ? getColor(colorValue) : defaultGetColor(colorValue);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_material21.Box,
    {
      sx: [
        {
          display: "flex",
          flexDirection: "column",
          gap: 0.8,
          width: "100%"
        },
        ...Array.isArray(props.sx) ? props.sx : [props.sx]
      ],
      children: [
        showValue && valuePosition === "top" && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          import_material21.Typography,
          {
            variant: "caption",
            sx: {
              alignSelf: "flex-end",
              fontWeight: 600,
              color: "#374151",
              fontSize: "12px"
            },
            children: [
              Math.round(currentValue),
              "%"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          import_material21.Box,
          {
            sx: { display: "flex", alignItems: "center", gap: 2, width: "100%" },
            children: [
              variant === "stepper" ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material21.Box, { sx: { display: "flex", gap: 1, width: "100%" }, children: Array.from({ length: steps }).map((_, i) => {
                const stepPercentage = 100 / steps;
                const stepStart = i * stepPercentage;
                const stepEnd = (i + 1) * stepPercentage;
                let fillPercent = 0;
                if (currentValue >= stepEnd) {
                  fillPercent = 100;
                } else if (currentValue > stepStart) {
                  fillPercent = (currentValue - stepStart) / stepPercentage * 100;
                }
                return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  ProgressBarContainer,
                  {
                    bheight: height,
                    bgcolor: bgColor,
                    bradius: borderRadius,
                    sx: { flex: 1 },
                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      ProgressFill,
                      {
                        style: { width: `${fillPercent}%` },
                        fillcolor: fillColor,
                        duration: animationDuration,
                        stepjump: stepJump
                      }
                    )
                  },
                  i
                );
              }) }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                ProgressBarContainer,
                {
                  bheight: height,
                  bgcolor: bgColor,
                  bradius: borderRadius,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      ProgressFill,
                      {
                        style: { width: `${currentValue}%` },
                        fillcolor: fillColor,
                        duration: animationDuration,
                        stepjump: stepJump,
                        children: showValue && valuePosition === "inside" && currentValue >= 15 && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                          import_material21.Typography,
                          {
                            variant: "caption",
                            sx: {
                              position: "absolute",
                              right: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: currentValue >= 25 && currentValue < 50 ? "#374151" : "#fff",
                              fontWeight: 700,
                              fontSize: "10px"
                            },
                            children: [
                              Math.round(currentValue),
                              "%"
                            ]
                          }
                        )
                      }
                    ),
                    showValue && valuePosition === "inside" && currentValue < 15 && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                      import_material21.Typography,
                      {
                        variant: "caption",
                        sx: {
                          position: "absolute",
                          left: `calc(${currentValue}% + 8px)`,
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#374151",
                          fontWeight: 700,
                          fontSize: "10px"
                        },
                        children: [
                          Math.round(currentValue),
                          "%"
                        ]
                      }
                    )
                  ]
                }
              ),
              showValue && valuePosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                import_material21.Typography,
                {
                  variant: "caption",
                  sx: {
                    fontWeight: 600,
                    minWidth: 35,
                    color: "#374151",
                    fontSize: "13px"
                  },
                  children: [
                    Math.round(currentValue),
                    "%"
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var Progress_default = Progress;

// src/components/Skeleton/Skeleton.tsx
var import_material22 = require("@mui/material");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Skeleton = ({
  variant = "text",
  orientation,
  width,
  height,
  animation = "wave",
  sx,
  lines = 1,
  rows = 1,
  cols = 5,
  rounded,
  ...props
}) => {
  const getBorderRadius = () => {
    if (rounded === true || rounded === "sm") return 1;
    if (rounded === "md") return 2;
    if (rounded === "lg") return 3;
    if (typeof rounded === "number" || typeof rounded === "string") return rounded;
    return void 0;
  };
  const borderRadius = getBorderRadius();
  const BaseSkeleton = (extraSx) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_material22.Skeleton,
    {
      variant: ["card", "list-item", "table-row", "profile"].includes(variant) ? "rectangular" : variant,
      width,
      height,
      animation,
      sx: [
        ...borderRadius !== void 0 ? [{ borderRadius }] : [],
        ...extraSx ? [extraSx] : [],
        ...Array.isArray(sx) ? sx : [sx]
      ],
      ...props
    }
  );
  if (variant === "card") {
    const isHorizontal = orientation === "horizontal";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      import_material22.Box,
      {
        sx: [
          {
            p: 2,
            border: "1px solid #E0E0E0",
            borderRadius: 2,
            width: width || "100%",
            display: isHorizontal ? "flex" : "block",
            gap: isHorizontal ? 2 : 0
          },
          ...Array.isArray(sx) ? sx : [sx]
        ],
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_material22.Skeleton,
            {
              variant: "rectangular",
              height: isHorizontal ? 100 : 140,
              width: isHorizontal ? 100 : "100%",
              animation,
              sx: { borderRadius: 1, flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            import_material22.Box,
            {
              sx: {
                pt: isHorizontal ? 0 : 1.5,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 0.5
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material22.Skeleton, { animation, height: 24, width: "80%" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material22.Skeleton, { animation, height: 20, width: "60%" })
              ]
            }
          )
        ]
      }
    );
  }
  if (variant === "profile") {
    const isVertical = orientation === "vertical";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      import_material22.Box,
      {
        sx: [
          {
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            alignItems: "center",
            gap: 2
          },
          ...Array.isArray(sx) ? sx : [sx]
        ],
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_material22.Skeleton,
            {
              variant: "circular",
              width: width || 48,
              height: height || 48,
              animation,
              sx: { flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            import_material22.Box,
            {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                alignItems: isVertical ? "center" : "flex-start",
                width: "100%"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  import_material22.Skeleton,
                  {
                    animation,
                    height: 20,
                    width: isVertical ? "80%" : "60%"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  import_material22.Skeleton,
                  {
                    animation,
                    height: 16,
                    width: isVertical ? "60%" : "40%"
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
  if (variant === "list-item") {
    const isVertical = orientation === "vertical";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      import_material22.Box,
      {
        sx: [
          {
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            alignItems: isVertical ? "flex-start" : "center",
            gap: 2,
            py: 1
          },
          ...Array.isArray(sx) ? sx : [sx]
        ],
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_material22.Skeleton,
            {
              variant: "rectangular",
              width: width || (isVertical ? "100%" : 40),
              height: height || (isVertical ? 120 : 40),
              sx: { borderRadius: 1, flexShrink: 0 },
              animation
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            import_material22.Box,
            {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                width: "100%"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material22.Skeleton, { animation, height: 20, width: "70%" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material22.Skeleton, { animation, height: 16, width: "40%" })
              ]
            }
          )
        ]
      }
    );
  }
  if (variant === "table-row") {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: Array.from(new Array(rows)).map((_, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      import_material22.Stack,
      {
        direction: "row",
        spacing: 2,
        sx: [
          { py: 1.5, borderBottom: "1px solid #E0E0E0" },
          ...Array.isArray(sx) ? sx : [sx]
        ],
        children: Array.from(new Array(cols)).map((_2, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          import_material22.Skeleton,
          {
            animation,
            height: 20,
            width: `${100 / cols}%`
          },
          colIndex
        ))
      },
      rowIndex
    )) });
  }
  if (variant === "text" && lines > 1) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material22.Box, { sx: [{ width: width || "100%" }, ...Array.isArray(sx) ? sx : [sx]], children: Array.from(new Array(lines)).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      import_material22.Skeleton,
      {
        variant: "text",
        height,
        animation,
        width: index === lines - 1 ? "70%" : "100%",
        sx: { mb: 0.5 },
        ...props
      },
      index
    )) });
  }
  if (variant === "cascading") {
    const numLines = 4;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material22.Box, { sx: [{ width: width || "100%" }, ...Array.isArray(sx) ? sx : [sx]], children: Array.from(new Array(numLines)).map((_, index) => {
      const expansionDuration = 40;
      const stagger = expansionDuration * 0.3;
      const startPercent = index * stagger;
      const endPercent = startPercent + expansionDuration;
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        import_material22.Skeleton,
        {
          variant: "text",
          height,
          animation: "wave",
          width: index === numLines - 1 ? "70%" : `${100 - index * 4}%`,
          sx: {
            mb: 0.5,
            transformOrigin: "left",
            animation: `cascade-${index} 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            [`@keyframes cascade-${index}`]: {
              "0%": { transform: "scaleX(0)" },
              [`${startPercent}%`]: { transform: "scaleX(0)" },
              [`${endPercent}%`]: { transform: "scaleX(1)" },
              "99.99%": { transform: "scaleX(1)" },
              "100%": { transform: "scaleX(0)" }
            }
          },
          ...props
        },
        index
      );
    }) });
  }
  return BaseSkeleton();
};

// src/components/Backdrop/Backdrop.tsx
var import_react18 = require("react");
var import_react_dom = require("react-dom");
var import_jsx_runtime26 = require("react/jsx-runtime");
var Backdrop = ({
  open,
  onClick,
  zIndex = 1300,
  color = "#4772FF",
  absolute = false,
  size = 45
}) => {
  const [mounted, setMounted] = (0, import_react18.useState)(false);
  const ringThickness = Math.max(2, Math.round(size * 0.11));
  (0, import_react18.useEffect)(() => {
    setMounted(true);
  }, []);
  (0, import_react18.useEffect)(() => {
    if (!absolute) {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open, absolute]);
  if (!mounted || !open) return null;
  const overlay = /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("style", { children: `
                @keyframes bd-rotate {
                    to { transform: rotate(360deg); }
                }
                @keyframes bd-fade-in {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            ` }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        onClick,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Loading",
        style: {
          position: absolute ? "absolute" : "fixed",
          inset: 0,
          zIndex,
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(2px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: onClick ? "pointer" : "default",
          animation: "bd-fade-in 0.15s ease"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          "div",
          {
            onClick: (e) => e.stopPropagation(),
            style: {
              position: "relative",
              width: size,
              height: size
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: `${ringThickness}px solid ${color}33`,
                    boxSizing: "border-box"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: `conic-gradient(${color} 0deg, ${color}55 180deg, transparent 270deg)`,
                    WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #fff calc(100% - ${ringThickness}px))`,
                    mask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #fff calc(100% - ${ringThickness}px))`,
                    animation: "bd-rotate 0.9s linear infinite"
                  }
                }
              )
            ]
          }
        )
      }
    )
  ] });
  if (absolute) {
    return overlay;
  }
  return (0, import_react_dom.createPortal)(overlay, document.body);
};

// src/components/Tooltip/Tooltip.tsx
var import_Tooltip = __toESM(require("@mui/material/Tooltip"));
var import_jsx_runtime27 = require("react/jsx-runtime");
var Tooltip2 = ({
  title,
  children,
  placement = "top",
  bgColor = "#fff",
  textColor = "#1F2937",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    import_Tooltip.default,
    {
      title,
      placement,
      arrow: true,
      componentsProps: {
        tooltip: {
          sx: {
            bgcolor: bgColor,
            fontSize: "12px",
            borderRadius: "6px",
            color: textColor,
            boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
            // Added subtle shadow for white tooltip
            "& .MuiTooltip-arrow": {
              color: bgColor
            }
          }
        }
      },
      ...props,
      children
    }
  );
};

// src/providers/VortexUIProvider.tsx
var import_react19 = require("react");
var import_styles6 = require("@mui/material/styles");
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"));
var import_react20 = require("@emotion/react");

// ../../node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ (function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
})();

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}

// ../../node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache2 = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache2.has(arg)) {
      return cache2.get(arg);
    }
    var ret = func(arg);
    cache2.set(arg, ret);
    return ret;
  };
};

// ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0) cache2[arg] = fn(arg);
    return cache2[arg];
  };
}

// ../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.esm.js
var isBrowser = typeof document !== "undefined";
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      // fallthrough
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        // (s)tretch
        case 115:
          return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    // position: sticky
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        // (inline-)?fl(e)x
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            // :placeholder
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var getServerStylisCache = isBrowser ? void 0 : weakMemoize(function() {
  return memoize(function() {
    return {};
  });
});
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (isBrowser && key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (!getServerStylisCache) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];
    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis2(styles) {
      return serialize(compile(styles), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules3 = function getRules4(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === void 0) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert2(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules3(selector, serialized);
      if (cache2.compat === void 0) {
        if (shouldCache) {
          cache2.inserted[name] = true;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache2.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};

// src/theme/theme.ts
var import_material23 = require("@mui/material");

// src/theme/palette.ts
var colors = {
  primary: {
    light: {
      main: "#4772FF",
      light: "#7496FF",
      dark: "#2F50C2",
      contrastText: "#FFFFFF",
      hover: "#3D63E6",
      disabled: "#A8B9F5",
      disabledBackground: "#E8EDFF"
    },
    dark: {
      main: "#4772FF",
      light: "#688CFF",
      dark: "#3352CC",
      contrastText: "#FFFFFF",
      hover: "#5782FF",
      disabled: "#2A3C73",
      disabledBackground: "#1A2642"
    }
  },
  secondary: {
    light: {
      main: "#0088ab",
      light: "#22d3ee",
      dark: "#00647D",
      contrastText: "#ffffff",
      hover: "#0596a7",
      disabled: "#40e0d0",
      disabledBackground: "#ccfbf1"
    },
    dark: {
      main: "#0088ab",
      light: "#33A1C2",
      dark: "#00556B",
      contrastText: "#ffffff",
      hover: "#1A9AB8",
      disabled: "#205C6B",
      disabledBackground: "#0D2B33"
    }
  },
  error: {
    light: {
      main: "#FF4747",
      light: "#FF7373",
      dark: "#E63A3A",
      contrastText: "#FFFFFF",
      hover: "#F23D3D",
      disabled: "#FFBABA",
      disabledBackground: "#FFF0F0"
    },
    dark: {
      main: "#FF4747",
      light: "#FF6666",
      dark: "#CC3939",
      contrastText: "#FFFFFF",
      hover: "#FF5C5C",
      disabled: "#5C2929",
      disabledBackground: "#2E1515"
    }
  },
  warning: {
    light: {
      main: "#FFA347",
      light: "#FFBC70",
      dark: "#E68F3F",
      contrastText: "#1A1A1A",
      hover: "#F2943D",
      disabled: "#FFDDBA",
      disabledBackground: "#FFF6ED"
    },
    dark: {
      main: "#FFA347",
      light: "#FFB366",
      dark: "#CC8239",
      contrastText: "#1A1A1A",
      hover: "#FFAD5C",
      disabled: "#5C3A1A",
      disabledBackground: "#2E1D0D"
    }
  },
  success: {
    light: {
      main: "#47FFA3",
      light: "#70FFB8",
      dark: "#3FE691",
      contrastText: "#06351D",
      hover: "#3DF294",
      disabled: "#BAFFDA",
      disabledBackground: "#EDFFF5"
    },
    dark: {
      main: "#47FFA3",
      light: "#66FFB3",
      dark: "#39CC82",
      contrastText: "#06351D",
      hover: "#5CFFAD",
      disabled: "#1A5C3A",
      disabledBackground: "#0D2E1D"
    }
  },
  info: {
    light: {
      main: "#47C2FF",
      light: "#70CEFF",
      dark: "#3FADE6",
      contrastText: "#06283A",
      hover: "#3DB3F2",
      disabled: "#BAE8FF",
      disabledBackground: "#EDF8FF"
    },
    dark: {
      main: "#47C2FF",
      light: "#66CBFF",
      dark: "#399BCC",
      contrastText: "#06283A",
      hover: "#5CCBFF",
      disabled: "#1A465C",
      disabledBackground: "#0D232E"
    }
  },
  background: {
    light: {
      default: "#f8fafc",
      paper: "#ffffff"
    },
    dark: {
      default: "#1c263c",
      paper: "#1e293b"
    }
  },
  text: {
    light: {
      primary: "#1c263c",
      secondary: "#475569",
      disabled: "#94a3b8"
    },
    dark: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      disabled: "#64748b"
    }
  },
  divider: {
    light: "#e2e8f0",
    dark: "#334155"
  }
};
var getPalette = (mode) => ({
  mode,
  primary: colors.primary[mode],
  secondary: colors.secondary[mode],
  error: colors.error[mode],
  warning: colors.warning[mode],
  success: colors.success[mode],
  info: colors.info[mode],
  background: colors.background[mode],
  text: colors.text[mode],
  divider: colors.divider[mode]
});

// src/theme/typography.ts
var typography = {
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif"
  ].join(","),
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em"
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em"
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.3
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.4
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none"
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.4
  }
};

// src/theme/components.ts
var components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        padding: "8px 16px",
        transition: "all 0.2s ease-in-out",
        fontWeight: 600,
        textTransform: "none"
      },
      containedPrimary: {
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.25)"
        }
      },
      containedSecondary: {
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 4px 12px rgba(6, 182, 212, 0.25)"
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "8px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.light
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px"
        }
      })
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)",
        border: "1px solid #e2e8f0"
      }
    }
  }
};

// src/theme/theme.ts
var getTheme = (mode) => (0, import_material23.createTheme)({
  palette: getPalette(mode),
  typography,
  components,
  shape: {
    borderRadius: 8
  }
});

// src/providers/VortexUIProvider.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var ColorModeContext = (0, import_react19.createContext)({
  toggleColorMode: () => {
  },
  mode: "light"
});
var useColorMode = () => (0, import_react19.useContext)(ColorModeContext);
var cache = createCache({
  key: "vortexui",
  prepend: true
});
function VortexUIProvider({ children, disableCustomCache = false, initialMode = "light" }) {
  const prefersDarkMode = (0, import_useMediaQuery.default)("(prefers-color-scheme: dark)");
  const [mode, setMode] = (0, import_react19.useState)(initialMode);
  (0, import_react19.useEffect)(() => {
    const hasCookie = document.cookie.includes("vortex-ui-theme-mode=");
    if (!hasCookie && prefersDarkMode) {
      setMode("dark");
      document.cookie = `vortex-ui-theme-mode=dark; path=/; max-age=31536000`;
    }
  }, [prefersDarkMode]);
  const colorMode = (0, import_react19.useMemo)(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          document.cookie = `vortex-ui-theme-mode=${newMode}; path=/; max-age=31536000`;
          localStorage.setItem("vortex-ui-theme-mode", newMode);
          return newMode;
        });
      },
      mode
    }),
    [mode]
  );
  const theme = (0, import_react19.useMemo)(() => getTheme(mode), [mode]);
  const content = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ColorModeContext.Provider, { value: colorMode, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_styles6.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_CssBaseline.default, {}),
    children
  ] }) });
  if (disableCustomCache) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: content });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.CacheProvider, { value: cache, children: content });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AutoPopulate,
  AutoPopulateItem,
  Backdrop,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxGroup,
  ChipInput,
  ColorModeContext,
  CountBadge,
  DataTable,
  DefaultSelect,
  Grid,
  Link,
  Modal,
  NumberField,
  Progress,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  Sheet,
  Skeleton,
  Slider,
  TextField,
  Textarea,
  ToggleSwitch,
  Tooltip,
  VortexUIProvider,
  useColorMode,
  vortexTheme
});
//# sourceMappingURL=index.js.map