'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "45dfda35c093fe82af7709ad025a4550",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9cd141cc95ad38c40d835970333f06d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b95bdc3fd9cf20a579a8019ae4785b55",
".git/logs/refs/heads/main": "5070203f3828b3838de8fd01601fda22",
".git/logs/refs/remotes/origin/main": "3b97638dd90c7f78df56c7e8f7c5ef14",
".git/objects/02/3f1dc8e7afbdbba845c58a68159c4e1c668581": "54a4fb0d0d5579cf49758e492bee9801",
".git/objects/06/57643b1355fe8aa35aa7ffec092cea75581515": "7654150f5e356e985d80a92cad9bb58f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/13/394471ea187eed884ed29ccad99dc4a778ecbe": "63f7791ccefff43cb336016d361b0875",
".git/objects/13/7fc9999aa436d8985f66c68d15074cc055d8d9": "3d3cf147640115170465e90ba39caff3",
".git/objects/14/fd0e605143010abe879668e251afa613dcdad3": "2bcf0106378fb03e97f0c0dff9f15cd7",
".git/objects/18/01d39600f75bb3156c47b2838bbd4ea422c411": "6d805507eef7e69735dc041fa7c2b84a",
".git/objects/1d/139303b781a64fb3dffdc544da22b185dabf57": "ee88577ead9c3366b1c882b632f45ba6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/85c3db0fc2d9cba2fec3bb5a2ed3be20f62e18": "ff3d7f5e26969260e5639d3c51b66ba6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/aaae7ce7f7158bb7080147e2df7696eed7196f": "b4bc5f06e53c80a27225cc24f3e80d5a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/3aba24c5bb304074bcb2fe6c7ccf9217f447df": "632d56e67c9ac63fc95ec1cb55694920",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/b46909ec5e071a25ce56dc345d2d800d4f4fa9": "4c27e26f53c117139de72d271a084282",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/db2c1b2d2c7ad4cb57e25aa45a74f912b0559b": "d549ed66683c53949cdafa3bf356901c",
".git/objects/58/2f0c0f4c1339c7991aa936f53ce9cd5aabcc54": "0fa51b832d1212b196b3c39d66c48e5f",
".git/objects/63/416cce9b93c85668065edf7b39d8d764333f5d": "97bacd1da5f364b02a6253cbb9cea3c5",
".git/objects/65/815748ca78c7c475dfc69eb13d1931e7604488": "2df03f53f3eb73cad5c45d018c8fbc39",
".git/objects/66/df57561ce54b3f5700a974d9022e015e37a411": "ed310e0ee0c290a0820c917678474de7",
".git/objects/68/ecf311a12828426adb64ea67dfc82504f08978": "a281104d99267e8bc98bbb13b9f77ffd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/6dc683ffa8d1382269e622865bf205c29d7a03": "a000233fed29cc3dbca781a8980c7088",
".git/objects/74/12f4f4b71cc33c7262dd86d49f1f8cc5b5d606": "384a706388a54be4fb83529736519e2b",
".git/objects/7e/c94bb5727e30031f2741a68d19bb7030a097d2": "d9e7da8c76db667553e7b9fb8880013a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/45c04677bc610dde9fc2ede1907f6d784d4910": "a17bee5b37f4ea968b9a346411f7a592",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/b12061ac16389f32d43fcf8965253f57a863c9": "af2d7f95e6af09cab3d2dbdf5c586dac",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/11a7fa7df921fec0dbabd70f212d6115dbcfaf": "3da2aa930426f07ced25bc2d7793b9e6",
".git/objects/9d/10c900df07cec01bd9794852ea0de253aee665": "4c37154d6862eee97f2994197cbad437",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ac/cfd9ab7eb0beec8421a7024e93176191a92782": "7c50d4cc56b5cdc61b0dc7fdf8edf232",
".git/objects/b1/593f043922591410103e7cf20f2ce0c744454b": "1ad661de7d6534c259f1196310d50e56",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/58af97cc99104d1ac93a7d6517e779896816a8": "244c0f1df8ebb9d998ee649ab0a0af25",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/f14b759c9f29995e6f9a0cbd0cc816549a12e7": "a1247f0044b78f2ef61fc1b28c7350e3",
".git/objects/c7/aad5e6eea9cf7765d3b5917d3c1a38b471bdde": "1041d215dd4a911bd17256e4314af460",
".git/objects/ce/0603b5f08662f0146f26e7a296537fa8fd7744": "3c38e7672519b275283841b2d77dd6d8",
".git/objects/cf/fbaab485477efaf576dd7419c452917f76827f": "46cf1ba1ce367873418e79821ac026c1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e7/694cfaa26d62f165ec8a31dff4ff4f87ef5c61": "b3ef3bd53583cd62a353cad58e0e276b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/d9ee554e61037c27b7b3bfc29952f1b980556e": "9da91ff060362e0a3ef7577f5aecfe50",
".git/objects/f8/894bb1714a1763bf1e1a5ae9f3c88c155bd6bb": "0d7b3d2c6a532985cc2291f8d0c52c55",
".git/objects/fd/7493cc5c36a2d7c5dc8f33fc1d8007fb551dee": "b6b0a5b7ee961a1419bd2eaf8410da70",
".git/objects/fd/e590083fa365ec28aceac82c3b3d7f1d84d9d0": "ccbdf321298da45a982362e630c32688",
".git/objects/ff/8bf82a2c954a3863458396cdcb0082b6a23e93": "e646c158d441144a771e717b257cecfe",
".git/refs/heads/main": "da6b25498901b690ce3a54c8aede44a1",
".git/refs/remotes/origin/main": "da6b25498901b690ce3a54c8aede44a1",
"assets/AssetManifest.bin": "aecfa2b091cadcfc8ba030ebf9b1f0ef",
"assets/AssetManifest.bin.json": "1010e4fc68e78275eb275b1a08ed5ffb",
"assets/AssetManifest.json": "941917eef258af0c78de98d0c77d02f7",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/logo.png": "cf7b44bd775b85779402102aa28e7529",
"assets/assets/icons/love.png": "3d6dab9049a289a25b954e733b81e492",
"assets/assets/images/01.jpg": "41b02b1fe1979c2874c74eedd06039a5",
"assets/assets/images/02.jpg": "5297bf4720eeb8cf40ec0925853bde0f",
"assets/assets/images/03.jpg": "af53e82c651c7a314e86e4fc16738533",
"assets/assets/images/04.jpg": "265bd8a21eaa44f2e2532b45968f0322",
"assets/assets/images/05.jpg": "4662ac067ccc1b598ab2d1c9d21156e7",
"assets/assets/images/aa.jpg": "4e27ff83a5963916d79fc96c13e16d96",
"assets/assets/images/aboutHer.jpg": "14cc8129b5d1eb9c3be9ca749cb00b95",
"assets/assets/images/aboutHim.jpg": "0e951b46f96f88511923c38928a54534",
"assets/assets/images/cover.jpg": "48c15cc600361bac113254b2c410dc39",
"assets/assets/images/error404.png": "13d982a0c5611d736e3a627474bbd8b9",
"assets/assets/images/love.png": "15f509d90f8587ab8533df9369ed8d0d",
"assets/assets/images/ocean.jpg": "834b7e203950651d9c17fb94ddb1aa5e",
"assets/assets/images/road.jpg": "0a96d1bd3d97d0413fad9366a31730bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89e4de6f7b66edd6ca4bc51ae8cfdfc0",
"assets/NOTICES": "8b3a57e25de2a7156241a00ca8a05b0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "9f7e30a192e037943216c9e838dc40c2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5e0d6249f8f363cb27fcbb961db23982",
"icons/Icon-192.png": "0855f358e413086c9c7e8eb0770c7a9d",
"icons/Icon-512.png": "48b6c8a6f144b699cd0291d9481c11e1",
"icons/Icon-maskable-192.png": "0855f358e413086c9c7e8eb0770c7a9d",
"icons/Icon-maskable-512.png": "48b6c8a6f144b699cd0291d9481c11e1",
"index.html": "f6b3c05e95c3ad77b590f3db74f281b4",
"/": "f6b3c05e95c3ad77b590f3db74f281b4",
"main.dart.js": "9833e9eb27ca8caddb3dbd648ec4c63a",
"manifest.json": "94c3e66862e2ea8c064a2c95c7dba430",
"version.json": "ae3b9404d74e45e953f0315c85753b7b"};
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
