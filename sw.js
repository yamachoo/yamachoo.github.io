if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WSgIo6gl7dtldN_t9ie5L/_buildManifest.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/WSgIo6gl7dtldN_t9ie5L/_ssgManifest.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/210-8bab19a1c1be88c1a19e.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/489-9f5a32499b348cdb9eb8.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/commons-791119d2a53b22262ef9.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/framework-ec99b0a81bd729d5d19b.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/main-8edab8fa39478c76c278.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/pages/_app-49be7f3bdcb9f123c7dd.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/pages/_error-ef8fee4a08bfcd1ca345.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/pages/index-9b9755f6789b14faf856.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/chunks/webpack-2e70eb2df7716f074c53.js",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/_next/static/css/544f4f987172ece98ea6.css",revision:"WSgIo6gl7dtldN_t9ie5L"},{url:"/favicon.ico",revision:"c58d115f688d56d211aff90807f29e03"},{url:"/icons/android-chrome-128x128.png",revision:"9dddf28f4ba002b195390fcf91953133"},{url:"/icons/android-chrome-144x144.png",revision:"b8ea896ce7b6ff96f2bf9618b283e9cf"},{url:"/icons/android-chrome-152x152.png",revision:"6b1547e0a35698311efbb9626423a226"},{url:"/icons/android-chrome-192x192.png",revision:"9c1922c07a11e6e1da326abd79770633"},{url:"/icons/android-chrome-256x256.png",revision:"771da72c55493dbf6a3c35993804f293"},{url:"/icons/android-chrome-384x384.png",revision:"8b68a2a6ff3a36a8d0d35690b956b1d9"},{url:"/icons/android-chrome-48x48.png",revision:"d26dfb014405067879ab2d4212862671"},{url:"/icons/android-chrome-512x512.png",revision:"e3643ab500bb3e4c3b04e3d3cce8d044"},{url:"/icons/android-chrome-72x72.png",revision:"f7fd7115195a803d65732eeef060b45e"},{url:"/icons/android-chrome-96x96.png",revision:"7fd83e1a68fc89446f1a26e235c014a8"},{url:"/icons/apple-touch-icon-180x180.png",revision:"47fd2d806cbc92bf0f697c9043a5067b"},{url:"/manifest.json",revision:"6af564a51dc1575ffd2593bde4dcbc74"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));