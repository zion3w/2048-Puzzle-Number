var CACHE_NAME="11_20_44",urlsToCache=["app-ads.txt","favicon.ico","favicon.png","min.css","min.js",".well-known/assetlinks.json","img/bg.jpg","img/favicon512.png","img/icon512.jpg","a/js/cordova.js","a/js/game2048.min.js","a/js/tweenlite.min.js","a/js/vue.js","a/js/vue.min.js","fonts/roboto/roboto.eot","fonts/roboto/roboto.svg","fonts/roboto/roboto.ttf","fonts/roboto/roboto.woff","fonts/roboto/roboto.woff2","fonts/roboto/roboto500.eot","fonts/roboto/roboto500.svg","fonts/roboto/roboto500.ttf","fonts/roboto/roboto500.woff","fonts/roboto/roboto500.woff2","assets/img/1024.png","assets/img/favicon512.png","fonts/opensans/opensans.eot","fonts/opensans/opensans.svg","fonts/opensans/opensans.ttf","fonts/opensans/opensans.woff","fonts/opensans/opensans.woff2","assets/img/favicons/favicon120.png","assets/img/favicons/favicon144.png","assets/img/favicons/favicon150.png","assets/img/favicons/favicon152.png","assets/img/favicons/favicon16.png","assets/img/favicons/favicon167.png","assets/img/favicons/favicon180.png","assets/img/favicons/favicon192.png","assets/img/favicons/favicon270.png","assets/img/favicons/favicon310.png","assets/img/favicons/favicon32.png","assets/img/favicons/favicon36.png","assets/img/favicons/favicon48.png","assets/img/favicons/favicon512.png","assets/img/favicons/favicon62.png","assets/img/favicons/favicon70.png","assets/img/favicons/favicon72.png","assets/img/favicons/favicon96.png","index.html","privacy.html","rules.html","stats.html"];self.addEventListener("install",function(o){o.waitUntil(caches.open(CACHE_NAME).then(function(o){return o.addAll(urlsToCache)}))});var siteurl=self.location.hostname;self.addEventListener("fetch",function(s){-1!==s.request.url.indexOf(siteurl)&&s.respondWith(caches.match(s.request).then(function(o){return o||fetch(s.request).then(function(o){return o}).catch(function(o){throw console.error("Fetching failed: ",o),o})}))});