'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "00ebb43e31476b451e39d713238b5cdc",
"assets/AssetManifest.bin.json": "06d4a5a6f5da1851255c01ddc4ff3f8c",
"assets/AssetManifest.json": "c23a98ce5e2fbe969d387941e5084a13",
"assets/assets/images/album.png": "2db9b03f0669f8180d3c97b32747005b",
"assets/assets/images/avatar.png": "6baf2e4ea34b4ef954b216accae496ac",
"assets/assets/images/back.png": "5229e39e90266ffa778a7efd7fc8ce59",
"assets/assets/images/branding.png": "a3025e09d1e5a62f5c502276f8170bff",
"assets/assets/images/browse_image.png": "24a8a42f0d6b2a003ce89cbd5d3e7e59",
"assets/assets/images/building.png": "dfe079d162bb90f538404216f708eb63",
"assets/assets/images/building_plus.png": "66c297069f03cb028ff3876f0b413e2c",
"assets/assets/images/check.png": "993328d3f6395c830ea026879bd48775",
"assets/assets/images/checked.png": "5df30ff17387b54aebf5475d53559d76",
"assets/assets/images/check_doc.png": "4ebe34076aa5ab2580dbf2ae22f2eef3",
"assets/assets/images/clipboard.png": "27cce236abda88f871c8e0adb3f29923",
"assets/assets/images/delete_image.png": "eaf2f19a292e01cdb86e18b268f7eb66",
"assets/assets/images/down_arrow.png": "34c3533ce7c298c27f09c0c2dc225cf9",
"assets/assets/images/fail.png": "a00e0c60d1d253e9a785e40ec264c9e2",
"assets/assets/images/friends.png": "c209a353c6c8c0e43d44f2a3265f753b",
"assets/assets/images/kakao_login_large.png": "9fd92e6b9aa7062feffa61edc5d0e5ec",
"assets/assets/images/kakao_login_medium_narrow.png": "0da8218298ae5c038ec7f9d88c95d189",
"assets/assets/images/logo.png": "ec48fcbd26fbbdd221e73745055d56b3",
"assets/assets/images/paper.png": "0971176fc3911e1b3f43b45d66b760b0",
"assets/assets/images/person.png": "31d35389878f6a8b68affdf565728b03",
"assets/assets/images/safety_doc.png": "d10fd33a47b74ac8cd0c607accddfd2f",
"assets/assets/images/setting.png": "b3f9378763d95b58aa04326c7c42533b",
"assets/assets/images/shield.png": "f8dc34a390a0c16c5f0bc384a7b9afb7",
"assets/assets/images/splash.png": "9a25f0701f9f92d5dc66ef039cfb7cb1",
"assets/assets/images/stroke.png": "87ef37ac8cc7a95d040e556a1c8cff75",
"assets/assets/images/unchecked.png": "013440539becb5526b8ec163ed7441ed",
"assets/assets/images/up_down.png": "eeb4091fd618cf06c78db8c2092511ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8a65a345a548919480cb12df3f0db34a",
"assets/NOTICES": "0888caf0e6435c4eb2e2760498b23e78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8d4dd23e4f7f3b4cc37c0b863dcd32da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4710967148a751dfea4cb578db2ad41a",
"/": "4710967148a751dfea4cb578db2ad41a",
"main.dart.js": "63cc476c2466947069541e77c215932c",
"manifest.json": "f9d62f2cd51585da274b5016178fe9e9",
"splash/img/branding-1x.png": "5009f3be03fc1bf3062212849060d117",
"splash/img/branding-2x.png": "52ed165f9648366e85c54b789b57d54e",
"splash/img/branding-3x.png": "0101cb6de9c71b680cebf618d5219be5",
"splash/img/branding-4x.png": "2dec7204d225259af073ca13b868231b",
"splash/img/branding-dark-1x.png": "5009f3be03fc1bf3062212849060d117",
"splash/img/branding-dark-2x.png": "52ed165f9648366e85c54b789b57d54e",
"splash/img/branding-dark-3x.png": "0101cb6de9c71b680cebf618d5219be5",
"splash/img/branding-dark-4x.png": "2dec7204d225259af073ca13b868231b",
"splash/img/dark-1x.png": "6c208233dafb7cd022b68f4f62d5f593",
"splash/img/dark-2x.png": "d46ae5c198e509b4279781b179ff4518",
"splash/img/dark-3x.png": "2eaff5ab492f47773460afae76c2fc72",
"splash/img/dark-4x.png": "35ac2443a7f3ad9d556add366c5a5d7b",
"splash/img/light-1x.png": "6c208233dafb7cd022b68f4f62d5f593",
"splash/img/light-2x.png": "d46ae5c198e509b4279781b179ff4518",
"splash/img/light-3x.png": "2eaff5ab492f47773460afae76c2fc72",
"splash/img/light-4x.png": "35ac2443a7f3ad9d556add366c5a5d7b",
"version.json": "4d4dde4a9f7d5c30291e16f438723fee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
