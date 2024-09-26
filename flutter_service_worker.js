'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d7d994b252a1b5ef0fd9c1804bb90828",
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
".git/index": "1fd2178a7ccd77bf24f0b9c4c4b37822",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d22b87b1e32239d6d77c82ede3deb3f",
".git/logs/refs/heads/main": "9a4aee6e777bf93d60736346cca847c4",
".git/logs/refs/remotes/origin/main": "3a7fe830604dfa5f1097d6f0a3ddf278",
".git/objects/03/725d2338bc7278a8c097b16f69b1fb2693975b": "7c55f04370941d9fa85a213180666a4e",
".git/objects/04/bf7b17e792357fb7a327a9e5be6ea3f763dabb": "3f934d45ebbebb715b6bbd2683e6dd78",
".git/objects/05/231a4366dc0a5bac020a0156d7e10cbcd638b1": "63e278342af272b74f5d6136fc4aa2bd",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/737493ffab713de75a79f2955f5dbf9534fba1": "29852546d365580c17f91237f2945e8b",
".git/objects/0c/bca79e269357f95bd05a38badc439ab0623719": "0ad3dab3e00afa977cba635d996b59f5",
".git/objects/0f/71d08f5e3b84ecb8e9a6f54b9b7635bce41fba": "650c9e054a634598335b916756303b46",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/b30465f0fe59f345f441b4d4eccfa2d235f813": "10535738ac057351923f454c418e7c61",
".git/objects/15/548f39986f97755005c55245f06105288125a5": "e0fb5b53217656e0370671beab8f8a1f",
".git/objects/16/b258971b2d71882bec4976eae6727d28b5ab97": "645b797d4df84a3fc7e7dca6a2af18f9",
".git/objects/17/6e5bc3a833e77b223ec980ccf7e130bc1c23c4": "9cf36b34805247c78c6e37235dab6996",
".git/objects/17/b03fe4b15f7462d2d44ce9b1c52b120c9c23a1": "884c2651d65f48c350321e8830fca33e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/21bf20586ac809dcf100f5e9940f171b8a0a61": "8d76f3a0dd9f1e7d3e1671173f0ab73e",
".git/objects/1d/76325e086b769c2c13eaa49dd0c8552bef65e3": "2734e555e5e747f5c25116222b8e630d",
".git/objects/1e/96ed68e6dcb6e2be6ecca00bc00b0aaefcb9aa": "320efb977fc97bda2e3c88d9b49776c0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ab0f38fb2aa4dfd98df081a89b5e648352e79b": "ada34681c5de85be957d377566f34658",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/490b4c978da8dfa1e694f3613f7b6a2ea45ef7": "58b5bc5c117176c25bf3bb5a9171f6e2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/8c50bf98877aa2cdf0d141eb142e992a614e7d": "5485806dbaec771362f2010b27e795bb",
".git/objects/26/0072c5af1cbb2197d5f53a8bc1f9d9d51c19eb": "24c854dff39102df91b865c1912b1fe0",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/828b53f51f2e0337ec9c8e6d2b82af1d03279d": "2a24cf4932c4bfcafed1f74eceef7e13",
".git/objects/30/d0e6baf39bef709ee64afae9585f1e047aadbf": "d80b84f0e315e4d082d298e9561dcceb",
".git/objects/34/c7ce916f7bb0661a7d36b44cfca5bc6c19eccc": "771dd7897ab3add2b42d95d43e5b7fee",
".git/objects/35/3a223bc8b20dc8d05bb2233aed719d2d93eb81": "4f28084b52659d2c9bf74597d012b51e",
".git/objects/37/644368561603b276e3074106de2e2e289b7355": "1dcc11171e8dcecfe19d55d5cbb824b2",
".git/objects/37/a0d308f8cfedbe374fa73880c0aff3d95b9efb": "08236e77211a0601e81db10708d504bf",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/691d5b9b9bee88c6be6dbe2f37fc3cccaaeba0": "d0e04f63351e296af87fc59061b4ec00",
".git/objects/40/98e59b0bd55ab6f31e1bbf15a9f607fa3046eb": "562ab9539b55134ba024bc7da4d26e2c",
".git/objects/40/d97aaf05e6f74c1d5ba00f00e265c6c5748145": "7f6935c72e8bad1082fcce135b472f88",
".git/objects/42/143c1e5d49e25626c45b26a499112afc300002": "eefa9c7099da1f87280dcb9ce776d820",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d345b9c6f7857df5d9a27f4e3b11dc372ac374": "3dda00735937a6e8b416906a22eddc66",
".git/objects/47/2efb83bb1b12e3331f0c3abc7be15e900fc50f": "e85220b5066eb9382188273471fddb35",
".git/objects/47/4a3f8e55db655dd1216e561f2e221dd9fa81f5": "1bbc879344556b7c5749d2a913222c7a",
".git/objects/49/ad84f9fdcc7e749a60dcc6b2d13aadf3078a87": "6c023ae9511e68240203a8bc50c8a272",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/05546f8e4ef79c8be45f78e690520b21afa2b6": "ea1dac8f16d058c57dc14c8f6d42e824",
".git/objects/4b/0c7a22d1abf429eedf47b16f93bb70035ef4ce": "5b19dc667d75fddfb129891da896e272",
".git/objects/4c/cbcf12c47bea4870660c2cd86d7855e4173813": "5fe91f040794f81fab0c31095f439ccb",
".git/objects/4d/a662ddb4a9a82a90008b13aed0fab4e5d336a9": "4a75f97623cfd3058ccf9c034e7468b6",
".git/objects/4d/ac989ba70aa536d0fc4900b2e4fcaf0b1f5412": "37b3589a205338e73372d64957107bd1",
".git/objects/55/731c0f1a5d1c36c2ff5e4cb499c1e4ff1ee035": "db868e0573e5012af725cffe5a500a57",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/77746e820d9d927830deb49356c2338617e47f": "377ed9a14d691794c09ba4c39dcc454f",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/fbe6e849ffbe0f5be4b6a7ad6610cbd482bda1": "41b10344dc91a0683e6cec959280d773",
".git/objects/5c/06fe1de1db0a509f72e29c34f3e8afa9bdd021": "0c7bbace2c02aff3d1e282b4f3d7b180",
".git/objects/5c/487755515e0e37838578e8291f2e41c30ffc00": "9b1a6580e0047a16ed32056a973825e4",
".git/objects/5e/a34030a7417981fa2cb9bc08437d449f2fbe11": "add3ec0041962d341abdc40887c308b8",
".git/objects/5f/28c5e910f008ff70d8fe0a287010e22238b31f": "53b09dd4dd1cc2d7fb017361357bf7a6",
".git/objects/60/1bc684cc1b1d871ee0a7126b8102134f961f37": "acc39888af1f81a09e0ec1e967f85ecd",
".git/objects/60/266508fe698ba7df4d6121406307e9927bf635": "82e5d507a0a1091d78f321463fd2c227",
".git/objects/62/92c831162eedd22ddec4147f727c67c2f66f66": "9d56c75d380f10370eff3e3f43d73516",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/7ccaf91ebce32e8cbe97ed76c5aee797d13241": "272bb8cad93bf57949d230ee0ae52671",
".git/objects/65/cab7513c79966b34faa79743dfe178ee506db9": "bdac2b567e207e10a12a2f33c6dd4a91",
".git/objects/67/6a47d8e5b491080328fb9d81423af369b0bcf1": "5959a199d218c8b7b27aa3972f7b5df3",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/f19c1900c0566e238c6c9a08db16d5478bd6e2": "abf8901409213243934316385fb6d843",
".git/objects/74/3e2c292f797ff5f8e135a1aa875f693cadc575": "f5c3bc481a1c141aad36493fb0d35923",
".git/objects/77/4ded293b0fbe92364164e25d123cf06de99470": "41993cf93d6539099e97713c920e8ae0",
".git/objects/78/8d80bedd73829f16f37ff4a3b52d6a1a6bacc1": "4cd79f94945946105dc715cb72b9febd",
".git/objects/79/3eb8748da2ea1b5496d405f4449ec259a2b109": "447e20152c229b72c904321641ce397e",
".git/objects/7a/002e7dc6286aa64866336d6ce19d161653cadf": "98a3ca4440b532253813defeab668a77",
".git/objects/7b/3e7b596846aeb2271509af7cb009973ced7d79": "aca9cb28e75362d68212cc6fffd0f856",
".git/objects/81/bfd944ba27869a844e04aa0a9b9d755d2db573": "fd73b27c641caec761ebbb258f7bfbf2",
".git/objects/83/a33b83bf06cdc40b271e235f61f94e021e90b3": "fc103bb49f3420e00b9fd361ac469db7",
".git/objects/83/dff8d6b154b89449a8fd53521c9befb51f0f19": "5e18dac6592e2ac4cddba683cd5ec899",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5541206b4c12ece1df17652efb34e50dfcb3f7": "6a5b5219f3d3d877c681e586cb1f54c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f0a5b5509b51d69c892a3894be9fc04acabf0b": "69bb3bc3436be1e7c1345f588017464f",
".git/objects/90/66a7207a5833e82a9d09b7263b5d76cd28bfec": "8868129c2e471cdffa32689e70ecde40",
".git/objects/93/8507371337f89540a9f9f00b056e603bb6c843": "5e5dee97929b0257524073f7749dae47",
".git/objects/94/5ec15ba769ad2b3ebd41f8755b9b58affa1fa3": "6a8d559b4f1fe511dc12dca07ab94699",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/90a1f560a6c4a65270cb19f43ec777c968af54": "74846bdfc32998c2875b59f534238746",
".git/objects/98/41840384a4c811f4b15bfc065c99e8d3f12261": "a00151d4a8e05f5becb61940f827d200",
".git/objects/98/61c0a7ce119cc0249152f797fd78d9aa454cbe": "178c9522491170310bfe19877fa8f3f6",
".git/objects/98/74ef21c42628f58c34aa1498f5c0461fe4ffc5": "b19ff0327354dd50a9fb5dfd8d5464b1",
".git/objects/98/91b9400bdaf66b0f1475280c356411f5d8be1f": "dd94f222d00fdade41292f0ebdc35811",
".git/objects/9a/c829ddb52880205d059eedf6aadce8ec85cfac": "6740b2aa6e89f1765c5e838e66420db9",
".git/objects/9c/6b05d52b331dec0cea34f0d0c05a92e65cbff8": "9d374c99c332b4dc8fd4476b2692d1b1",
".git/objects/9d/ba765d243d68129b42495fad331d5a7738aac3": "2a3969a16605625b3695ef6b3dad4def",
".git/objects/9d/caec579d32b814a620159c50efad8868763d89": "64f1d978b2f0f57c9f380062b7bc6690",
".git/objects/9e/697d4a1dc46deb192828486f32859f48e157e4": "0ac7025c8381f5de57c22bf4f66fc9a4",
".git/objects/9e/f59a58751ea010c81c54fbf4fd39c7669fc9af": "05a5969cc40932b6d3605a9e75a25667",
".git/objects/9f/dc295bce0a0fd4768c6fdef8a3f3c77271da8d": "08997e23de1335a12897458a2e4dbef0",
".git/objects/a0/4354998dd3899179cdf60f3a93407d0e87bfed": "cf7d869f626f6964bd0a4102ec038218",
".git/objects/a3/fd8438a212da39bd7f020c03ab0c7b0f807a82": "823ef0d8f2b92151cdedb40e40d700a5",
".git/objects/a4/7fe6d78e83b287347e26982077eb07d81e6c87": "33fe8252fe101de110cbb89595e31db0",
".git/objects/a6/145da08a82cc0a9c796e45490d881f52b460ae": "b1be10b1a29b98ca458368134d51cdfb",
".git/objects/a8/cb878c3bbb35b0d7d3f41089f6aa9a242be777": "7641f363ac6269daf28b4875cd14964f",
".git/objects/ab/b25b8a48c63caf09a87912e24545c60b78cf2b": "c9b99d2be5d98fb17bb715d4b944aa18",
".git/objects/ad/44e3cec39124b21c914940fc287e37cfc55171": "4b51c3605c4c697f8ab00e6f40854390",
".git/objects/ad/9ed0801920ba02ed22306189960e34a65aaed4": "37ea67f41f8026a3289677718aee2008",
".git/objects/ae/7a80e0bdf2fd907ecd4e0f0a72beb6ac7305bb": "db4cb65d687f6f3c685ba90aea7bca99",
".git/objects/ae/b298882ecb5a9d0e6585a3396c645c9668ac00": "077eb024c3c39e253b0f6dc759c6c471",
".git/objects/b0/92ea7662a210f29813ee11660c0e18253cea8d": "3954d5f36be03fd6d79591da5842da15",
".git/objects/b2/e87746e9ccbade377b08ce78794d6e806ceedb": "e630b5b995308412c7aa827c23ca0744",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/6f8d02fe2b62fa281ff7401e8298397e942371": "6332bf3a49b065e2820d819c08dd58bf",
".git/objects/b6/384159833b95f6de636e8e0984bd933aa50ea0": "aa3370eeddf91d033149f7881fc3c80b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/571e44f4e0866ceb97323d72e709a18106df08": "d7460ebef8e99c9494394a5fd63be18b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/469797e34c0832916c8dad443b57a676d6966c": "55427133bf1058bc837932c4a85615a4",
".git/objects/c0/f29ebd6395b6566244026d8ebf2521d71c0390": "e2a290dbfb5e8fbd8a4b0461eaa428ae",
".git/objects/c2/abc18abb14721358fe8f70a97528d0fff67dcb": "11faa6eab291c217ff287649cddefea7",
".git/objects/c3/92f583a47f97e8a39d92679c4c0c609c2e20af": "a87867d9e8bbe2b074224bb40fc777f8",
".git/objects/c3/db9b04fbc588cfbc9379451262f8e02a81bf5c": "007bc7f3a6f9621bde75dd6e7b434bff",
".git/objects/c6/116c422fd04678b97b035c8fecc51e54013609": "e6a096af2b94c2404a5884ae660f9e7b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/33157fdd6fa0e7becd018c679d25d7eabde4de": "0e72c4c5a057b0bd8d6a6815a0f1ba8d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/9ec73d1111db9c0cafa29dcb5e8e83e8b53524": "bdd71b5e072e6566593c7c75c4ccbc00",
".git/objects/cc/c809f00ca47e496c5a71e201bec642410fd5af": "dd3b110af63c4590c33f6176252c2d60",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/cf/3ac90a801446cc20f0210801c57a2a06dd0391": "9a7063c08e9ee29b5c4dd9c4a509a661",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/f01f0570d46c4ffb59779db1ae40aa0ea74175": "c0d88f0e1a3504bff8d5f4258513357c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b3d6c5a52e58e1383821e36ad74ff8a1c94631": "01d1c734f50cf52b3e47da96d1673319",
".git/objects/d6/65077c707efe027600972cc1e866ffb923cd65": "691ace538c190c156554a4061f4fa675",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bea8181c3428ac829f0163152bf014303e073a": "edcb96d65c38a2e8c865080ece563743",
".git/objects/dd/7ef3e5d63f15fe47a352532eadcc43008d688b": "6bc7257057e6eb55f48c5d70888dfad6",
".git/objects/de/be93f465dbd860b9df5a57841fbeec5c5a925d": "5bd35eef6e0ae4dde75f6020835c62f6",
".git/objects/df/b42fdcae2d7dd09eeb51e8ab4b5b309488908e": "02244546318782097b0746bf4eaed191",
".git/objects/e1/2e61950dcf040e65a387f916542fa3a7702512": "f34882eeb22395a3a49f696e3629bd81",
".git/objects/e2/787627879a4f0a0e23e86985bd7cc33460c43b": "073dff8af585ff3b7974709122c3b531",
".git/objects/e3/2970efe822f263518a7ed35e8be11cf2a56991": "7f93b4992dd1e7064836b727a477191e",
".git/objects/e6/bbbd69f5d0bc58ed97759d67898358916a33b7": "281b43e7f603f183f73b74f9aaef1ed0",
".git/objects/e7/1b7c712f8a0b0933ba676c381fd2014dba45be": "218fd508e163b74914edf265be436aa0",
".git/objects/e7/5f9f129eb4aa8f87ff4f40fc3a05110cca060b": "e2a9767e23024707418c7d8ea0a4eca4",
".git/objects/ea/e091d892d7a2e61b58d637a1fa232e605e97be": "5b08749bb990743e81d0aa977de973f9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/c23b5519a4b8763135c7444e87e8deffc5fcac": "07f54071d9ca69ba1c794e0ee43de17a",
".git/objects/f4/413c87e8c2d0150df59d19942893e591ed1bae": "0ce3d6a266ae132fd5af5e7d5a0a943b",
".git/objects/f5/746ad122e8938223d66c581c888ce178196c22": "1f3d9b0998f298f42543c29ca9d13a6a",
".git/objects/f6/e4002e3cbdc2559a4f3ce738ab624756eb5efc": "4120110ca2a5c4a8e6e30f872a461f28",
".git/objects/f7/6a388716ff19ee07816ac43788a9b8aff67cd9": "00c7522488a96036ac754789bcb46ee4",
".git/objects/f8/cbbd26d42be87365462f6ba218cb2e455d6dd8": "fcc876db8474f770ccd27d53a975ae55",
".git/objects/f9/77b1c4ab27583d85b74bc60b4fa8a60a1f555e": "21ca75c21bcc04be5d9bb5c585d27c60",
".git/refs/heads/main": "c93ab2923379ee8cfdfe9f69d4d3ce9c",
".git/refs/remotes/origin/main": "c93ab2923379ee8cfdfe9f69d4d3ce9c",
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
"assets/NOTICES": "b8303d18271341f81f0ab10723c48665",
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
"favicon.png": "ac594b920f5a5a905a469e9bb333583a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "18cbd60bc8814a6409dde45a676e69c0",
"icons/Icon-192.png": "b146b56451cf55b6c9ffb9b3c1323045",
"icons/Icon-512.png": "8bbf6bf52f13f65777d8260f24749411",
"icons/Icon-maskable-192.png": "b146b56451cf55b6c9ffb9b3c1323045",
"icons/Icon-maskable-512.png": "8bbf6bf52f13f65777d8260f24749411",
"index.html": "179afd6696a0d65d629978e3564a90ac",
"/": "179afd6696a0d65d629978e3564a90ac",
"main.dart.js": "bfbb9f3f65366d63b8acf8c8f8526e9f",
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
