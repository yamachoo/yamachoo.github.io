if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,a,r)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+n.slice(1)};return Promise.all(a.map((n=>{switch(n){case"exports":return s;case"module":return i;default:return e(n)}}))).then((e=>{const n=r(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.6a495ce9205fd722a252.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/framework.e3de07479da4f2477dea.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/main-ad6a1c14ad5e4980d831.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/pages/_app-397269cfa54fc0276b6d.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/pages/_error-caea47d818a18b73d00d.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/pages/index-ed97a676e03f28da88f5.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/css/02bcf19a1e163f42ff25.css",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/m65xENCafUnd11YWgpJqZ/_buildManifest.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/_next/static/m65xENCafUnd11YWgpJqZ/_ssgManifest.js",revision:"m65xENCafUnd11YWgpJqZ"},{url:"/favicon.ico",revision:"c58d115f688d56d211aff90807f29e03"},{url:"/icons/android-chrome-128x128.png",revision:"9dddf28f4ba002b195390fcf91953133"},{url:"/icons/android-chrome-144x144.png",revision:"b8ea896ce7b6ff96f2bf9618b283e9cf"},{url:"/icons/android-chrome-152x152.png",revision:"6b1547e0a35698311efbb9626423a226"},{url:"/icons/android-chrome-192x192.png",revision:"9c1922c07a11e6e1da326abd79770633"},{url:"/icons/android-chrome-256x256.png",revision:"771da72c55493dbf6a3c35993804f293"},{url:"/icons/android-chrome-384x384.png",revision:"8b68a2a6ff3a36a8d0d35690b956b1d9"},{url:"/icons/android-chrome-48x48.png",revision:"d26dfb014405067879ab2d4212862671"},{url:"/icons/android-chrome-512x512.png",revision:"e3643ab500bb3e4c3b04e3d3cce8d044"},{url:"/icons/android-chrome-72x72.png",revision:"f7fd7115195a803d65732eeef060b45e"},{url:"/icons/android-chrome-96x96.png",revision:"7fd83e1a68fc89446f1a26e235c014a8"},{url:"/icons/apple-touch-icon-180x180.png",revision:"47fd2d806cbc92bf0f697c9043a5067b"},{url:"/manifest.json",revision:"6af564a51dc1575ffd2593bde4dcbc74"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));