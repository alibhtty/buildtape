if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let l={};const o=e=>s(e,t),d={module:{uri:t},exports:l,require:o};i[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1e11b236.js",revision:null},{url:"assets/index-478fd982.css",revision:null},{url:"index.html",revision:"3b86eb21ee1fd7d6760fa1a451221fb9"},{url:"init/assets/index.57a787fa.js",revision:null},{url:"init/assets/index.7e25d69c.css",revision:null},{url:"init/assets/vendor.da79cdb7.js",revision:null},{url:"init/index.html",revision:"e4e1cfb117a9f8db9ef93237b2aa8a82"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"84611fc4672fdef44b2eb0fd56b33236"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
