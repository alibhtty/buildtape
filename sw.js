if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const r=e=>i(e,o),t={module:{uri:o},exports:c,require:r};s[o]=Promise.all(n.map((e=>t[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-97f1c4be"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-39d5077a.css",revision:null},{url:"assets/index-a675bbf1.js",revision:null},{url:"index.html",revision:"90d3107e7156c23dbd9d79bf73f222ad"},{url:"init/assets/index.57a787fa.js",revision:null},{url:"init/assets/index.7e25d69c.css",revision:null},{url:"init/assets/vendor.da79cdb7.js",revision:null},{url:"init/index.html",revision:"e4e1cfb117a9f8db9ef93237b2aa8a82"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"assets/icons/logo1024.png",revision:"703f305b3e0d2acb4f27d3b1c36b215b"},{url:"assets/icons/logo512.png",revision:"e882126810d38330f3033bf7b6a00fea"},{url:"assets/icons/logo384.png",revision:"84c77085c9240f78d25b733ab1cb7acb"},{url:"assets/icons/logo256.png",revision:"a00c926bcd001341184521929dccbc75"},{url:"assets/icons/logo192.png",revision:"a810769691efe7ceae6435a71a815802"},{url:"assets/icons/logo128.png",revision:"2b02410d80399203a5df631a9349ca96"},{url:"assets/icons/logo96.png",revision:"73cb8fd607df6320ce77f63f51731790"},{url:"assets/icons/logo64.png",revision:"9409194c232e0da1145c1a591ed71926"},{url:"assets/icons/logo32.png",revision:"cab85d5529ceba118fc9ea19bf35850a"},{url:"assets/icons/logo16.png",revision:"6b10a1def4d4bfe9fae9c0456e3906da"},{url:"manifest.webmanifest",revision:"fef449d35a63fe2dcead0a57d929905d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/mix-tape\.web\.app/,new e.NetworkFirst({cacheName:"mixtape-cache",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/^\/image\//,new e.NetworkFirst({cacheName:"img-mixtape",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/assets\/icons\//,new e.CacheFirst({cacheName:"icon-mixtape",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:86400})]}),"GET"),e.registerRoute("./assets/audio/clicktape.mp3",new e.CacheFirst({cacheName:"cancion-cache",plugins:[]}),"GET")}));
