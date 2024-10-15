'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "05607789bea9601c128813cc30ebbcab",
".git/config": "7ca30347892342956e18d370e842d091",
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
".git/index": "69eb5671b4642d87195963614134dfdd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da65c7290969d32f91ab34a17973b2cc",
".git/logs/refs/heads/main": "6e990633fa99f014f791dc54a44c4393",
".git/logs/refs/remotes/origin/main": "92427079d9778634e01d278cd983fa49",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/737493ffab713de75a79f2955f5dbf9534fba1": "29852546d365580c17f91237f2945e8b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0f/71d08f5e3b84ecb8e9a6f54b9b7635bce41fba": "650c9e054a634598335b916756303b46",
".git/objects/0f/94354657a35f56c0123f4d059e6b103e71135c": "7c47f3379260b30c5a67d7af07a00989",
".git/objects/13/b1fe48ef052f448571e151f0f41bdd0209b0e7": "f2017c38c51befbf68714a1328a3090a",
".git/objects/16/b258971b2d71882bec4976eae6727d28b5ab97": "645b797d4df84a3fc7e7dca6a2af18f9",
".git/objects/1d/21bf20586ac809dcf100f5e9940f171b8a0a61": "8d76f3a0dd9f1e7d3e1671173f0ab73e",
".git/objects/1d/76325e086b769c2c13eaa49dd0c8552bef65e3": "2734e555e5e747f5c25116222b8e630d",
".git/objects/1d/d113237acfe257f518fa9b6b36104ba264f010": "06e657342d4ccb3b3aa000779983ba7a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/490b4c978da8dfa1e694f3613f7b6a2ea45ef7": "58b5bc5c117176c25bf3bb5a9171f6e2",
".git/objects/23/8c50bf98877aa2cdf0d141eb142e992a614e7d": "5485806dbaec771362f2010b27e795bb",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/d0e6baf39bef709ee64afae9585f1e047aadbf": "d80b84f0e315e4d082d298e9561dcceb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/691d5b9b9bee88c6be6dbe2f37fc3cccaaeba0": "d0e04f63351e296af87fc59061b4ec00",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/98e59b0bd55ab6f31e1bbf15a9f607fa3046eb": "562ab9539b55134ba024bc7da4d26e2c",
".git/objects/40/d97aaf05e6f74c1d5ba00f00e265c6c5748145": "7f6935c72e8bad1082fcce135b472f88",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2efb83bb1b12e3331f0c3abc7be15e900fc50f": "e85220b5066eb9382188273471fddb35",
".git/objects/47/4a3f8e55db655dd1216e561f2e221dd9fa81f5": "1bbc879344556b7c5749d2a913222c7a",
".git/objects/49/ad84f9fdcc7e749a60dcc6b2d13aadf3078a87": "6c023ae9511e68240203a8bc50c8a272",
".git/objects/4a/05546f8e4ef79c8be45f78e690520b21afa2b6": "ea1dac8f16d058c57dc14c8f6d42e824",
".git/objects/4d/ac989ba70aa536d0fc4900b2e4fcaf0b1f5412": "37b3589a205338e73372d64957107bd1",
".git/objects/4d/eedfff887961d94ef69283b3bc93d9930d6001": "ed8ed216818e0eea55f697cef543ad0f",
".git/objects/55/731c0f1a5d1c36c2ff5e4cb499c1e4ff1ee035": "db868e0573e5012af725cffe5a500a57",
".git/objects/56/9d7e3ed0ca2980dc05ef441f6d1e34a964f9c6": "100cda92c39c1d168af613898273ac6d",
".git/objects/5b/fbe6e849ffbe0f5be4b6a7ad6610cbd482bda1": "41b10344dc91a0683e6cec959280d773",
".git/objects/5c/487755515e0e37838578e8291f2e41c30ffc00": "9b1a6580e0047a16ed32056a973825e4",
".git/objects/5f/28c5e910f008ff70d8fe0a287010e22238b31f": "53b09dd4dd1cc2d7fb017361357bf7a6",
".git/objects/62/60bf4e3d79c22da6c66fe749a6fd913f6d3ecf": "955a646520bd940d20c19a25ccb820f6",
".git/objects/62/92c831162eedd22ddec4147f727c67c2f66f66": "9d56c75d380f10370eff3e3f43d73516",
".git/objects/65/cab7513c79966b34faa79743dfe178ee506db9": "bdac2b567e207e10a12a2f33c6dd4a91",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/a77ec357b600775c6de7484c85327f1c0a0a0f": "9a3adb28d921155a562a4c57e43dfb65",
".git/objects/73/f19c1900c0566e238c6c9a08db16d5478bd6e2": "abf8901409213243934316385fb6d843",
".git/objects/76/0eb210e48c96c757369ac9ee5b04774f06d80a": "f4f66c849022ae7a11a2f4adaa5da13e",
".git/objects/77/4ded293b0fbe92364164e25d123cf06de99470": "41993cf93d6539099e97713c920e8ae0",
".git/objects/78/8d80bedd73829f16f37ff4a3b52d6a1a6bacc1": "4cd79f94945946105dc715cb72b9febd",
".git/objects/79/3eb8748da2ea1b5496d405f4449ec259a2b109": "447e20152c229b72c904321641ce397e",
".git/objects/7b/3e7b596846aeb2271509af7cb009973ced7d79": "aca9cb28e75362d68212cc6fffd0f856",
".git/objects/82/0892bea2cc9b955d1e45ed20ad54f33b1a2fb4": "31481c4eb17a3db74968f37dd58850eb",
".git/objects/83/dff8d6b154b89449a8fd53521c9befb51f0f19": "5e18dac6592e2ac4cddba683cd5ec899",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/5541206b4c12ece1df17652efb34e50dfcb3f7": "6a5b5219f3d3d877c681e586cb1f54c3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/741bb7a7767e066b8531a8f47322f47998102c": "fc56e32d914c843e20dd4c58fa758e6f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/c829ddb52880205d059eedf6aadce8ec85cfac": "6740b2aa6e89f1765c5e838e66420db9",
".git/objects/9b/e434c328a35c6e146b868f41550f7554068a9a": "22afd1f3ec5a440116e36087e28f574e",
".git/objects/9c/3bda8815f731be2b73e888105453d4fb24d26e": "1202eaa45a081e103339d9610e6547fe",
".git/objects/9d/ba765d243d68129b42495fad331d5a7738aac3": "2a3969a16605625b3695ef6b3dad4def",
".git/objects/9e/f59a58751ea010c81c54fbf4fd39c7669fc9af": "05a5969cc40932b6d3605a9e75a25667",
".git/objects/9f/dc295bce0a0fd4768c6fdef8a3f3c77271da8d": "08997e23de1335a12897458a2e4dbef0",
".git/objects/a0/4354998dd3899179cdf60f3a93407d0e87bfed": "cf7d869f626f6964bd0a4102ec038218",
".git/objects/ae/b298882ecb5a9d0e6585a3396c645c9668ac00": "077eb024c3c39e253b0f6dc759c6c471",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/e87746e9ccbade377b08ce78794d6e806ceedb": "e630b5b995308412c7aa827c23ca0744",
".git/objects/b6/384159833b95f6de636e8e0984bd933aa50ea0": "aa3370eeddf91d033149f7881fc3c80b",
".git/objects/b7/757324c732acd0b58d7b459083c37ccf3d11ce": "8e28a1636e0955bf849ea3e314da2c72",
".git/objects/b9/571e44f4e0866ceb97323d72e709a18106df08": "d7460ebef8e99c9494394a5fd63be18b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/37858a204a72513c53540d3962cb486b970133": "10fd66510bf425376a68c27311fedd70",
".git/objects/bf/469797e34c0832916c8dad443b57a676d6966c": "55427133bf1058bc837932c4a85615a4",
".git/objects/c0/f29ebd6395b6566244026d8ebf2521d71c0390": "e2a290dbfb5e8fbd8a4b0461eaa428ae",
".git/objects/c3/92f583a47f97e8a39d92679c4c0c609c2e20af": "a87867d9e8bbe2b074224bb40fc777f8",
".git/objects/c6/116c422fd04678b97b035c8fecc51e54013609": "e6a096af2b94c2404a5884ae660f9e7b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/6a81c4cd0fe4247e519d675c41f62393e87a43": "2676fc167ec3960593824cd812eeaa6e",
".git/objects/cb/9ec73d1111db9c0cafa29dcb5e8e83e8b53524": "bdd71b5e072e6566593c7c75c4ccbc00",
".git/objects/cd/42c2abf45a188572729974b6442481025de476": "9ffac90f0b707f0e7d3eeb0070240bdd",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/f01f0570d46c4ffb59779db1ae40aa0ea74175": "c0d88f0e1a3504bff8d5f4258513357c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/65077c707efe027600972cc1e866ffb923cd65": "691ace538c190c156554a4061f4fa675",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/2e61950dcf040e65a387f916542fa3a7702512": "f34882eeb22395a3a49f696e3629bd81",
".git/objects/ec/6e756439a6c99729ca5ff69872587bea37c4ff": "4f6047df08b00949b775415068650179",
".git/objects/f0/1d764c0df7ea7e91b101163d460c640e56251a": "04d3cf55d8fb2884416d685289af1f14",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7609712b2df2dcddae513b74d82ca5201ea0db": "b719d0b39cdb02cc9fd054ccddfe8bc4",
".git/objects/f3/c23b5519a4b8763135c7444e87e8deffc5fcac": "07f54071d9ca69ba1c794e0ee43de17a",
".git/objects/f4/813b6c1b3c0751efe29408233987e1fe953567": "0ebe744bcfc77887ae56abcd94a500ef",
".git/objects/f5/ef925c04c2df6efbd8ea4d5b79cf03fc8ecd9b": "344afb7012084c18ed400c23f9b1d2c8",
".git/objects/f6/e4002e3cbdc2559a4f3ce738ab624756eb5efc": "4120110ca2a5c4a8e6e30f872a461f28",
".git/objects/f7/3549b710f08511dbdf3cb383111a99d6e61cd5": "b1c5a4848f985a014ca8c1fb124d12ca",
".git/objects/f9/77b1c4ab27583d85b74bc60b4fa8a60a1f555e": "21ca75c21bcc04be5d9bb5c585d27c60",
".git/refs/heads/main": "a64a4971f1f74a5568e4286c46fec292",
".git/refs/remotes/origin/main": "a64a4971f1f74a5568e4286c46fec292",
"assets/AssetManifest.bin": "00ebb43e31476b451e39d713238b5cdc",
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
"assets/NOTICES": "beddd89ecb4f073a4fbecfd7746e8a72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"favicon.png": "983b003702826643fa29f2b8a269bac7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e6b2c19e380b0e5d5ec11c056addc599",
"icons/Icon-192.png": "b146b56451cf55b6c9ffb9b3c1323045",
"icons/Icon-512.png": "8bbf6bf52f13f65777d8260f24749411",
"icons/Icon-maskable-192.png": "b146b56451cf55b6c9ffb9b3c1323045",
"icons/Icon-maskable-512.png": "8bbf6bf52f13f65777d8260f24749411",
"index.html": "179afd6696a0d65d629978e3564a90ac",
"/": "179afd6696a0d65d629978e3564a90ac",
"main.dart.js": "1e529e466bafc9863ebeb10a3805176c",
"manifest.json": "768855606435747a9dd013231368ef38",
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
