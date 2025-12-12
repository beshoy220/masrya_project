'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "89773bcfd5c2a22982c25be54eae85fe",
".git/config": "9a328ad70538c6a56374d8cd49d6d8cd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8ef3796810ae40c8e20f4961962a8ad3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8f08946dee45b90a7e5b2fd089f511ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90607e4ae2a51e73be9995bcbdac6cda",
".git/logs/refs/heads/main": "90607e4ae2a51e73be9995bcbdac6cda",
".git/logs/refs/remotes/origin/main": "a0d17ad4ac2b9920207a460699786cdb",
".git/objects/00/3660e74bd90dec09150faa0346b74b78c4eb4f": "6640bfb61d989ea5f35fc54e15749096",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/6ae07789b97e8b2aa058bd8bcd7480e757cd2a": "b680022970426dacdb08b19b877bdadc",
".git/objects/05/ddbb8146ce4033b2951ebed8dc56790e60aeb4": "92492e6edaa5a7f1254c13d64a0c35ef",
".git/objects/0c/5d286a22530093634aae037f974a0979e582e3": "d531748f39665ca60dd264642a7a87c8",
".git/objects/0e/920806bba1e43b9fd6fbcc08ef4782f7e7ceb5": "077fc10bf170dce7effa16dc1023e9e0",
".git/objects/13/a60fe0ec1642e4e02632b981da3ad23e73e50e": "29c82a5ac8d243bf988dc831adb608bd",
".git/objects/13/b0abd95162f0cb72ae6ebacf1616cd43c57b9c": "d4d120b015bcbab0fbad44ef7e22ffb9",
".git/objects/15/c7f5d9cc923b0836490ac47c4381e203e17d8c": "afa62ae42e42e0c0521c1ab6b4d07177",
".git/objects/16/d3d7df7ad9a057fe14a7f4ec9c6ef577c98273": "de321e7c39bd65905faa835ec549832b",
".git/objects/18/709ae59c5e286c20d7e87c245ec6ed7529b334": "ec59f2b0bebe86769c29813e99e15fb6",
".git/objects/19/7d38fa943f4b481c6adac625e570e2bf9b10aa": "1c7c2fef09377e03ff77a07a26ff820c",
".git/objects/1b/d4acdfc1adfe0ed2092ad530d7219eaa81606d": "bc2f4dc40001431afde8536aef69fd8b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/8739b37dd03646056f5d79eec70e1315a64df4": "368521325ab455f81e542458e24646b2",
".git/objects/25/9d9c6327142b0a1a5c8ba0a4e305af38bb15a3": "76edced5ca8946f3e5966a6028d7557a",
".git/objects/27/1f463d1976a819aa45fd7690d6d5559f2b50e5": "792a71d8886ad131a901e55010b4dc9e",
".git/objects/27/8a483da3a510a37de9958394dae3a9af1f7f91": "33b6cbdcb95b2917fb551fc07bc16476",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/7336e654300740f9698d732d7f9e16c49d161c": "70b896828a3ce9e26741599d5af1411b",
".git/objects/2c/59f92281d8a9177bae8b1750624b73bf0f01fc": "348edb3ba22a0507365f9be5fbf69f32",
".git/objects/2e/9958af8f9547f3cf40936b1039c4f0654abfdf": "a1fb8a4ec1080912651f6c0b8b1210b7",
".git/objects/2f/bf22bc000874af14b14a5afba0813166c49ec0": "57a8c36eca81d27a73492164e9f44ff2",
".git/objects/34/70e1a172a92fd2be1f945ff4eafaad1ee5a9b5": "f13f8edd202f60548db328acaf5bfc5c",
".git/objects/41/149362f6977dafe301e30cd76acd7f6ad8cec4": "2fc681c6e086b9f76cc6364adaf050df",
".git/objects/43/52f3e39dd3899a5298e91ad27af91b07a041f7": "a696849feb5587bf03f0761403a4005f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/e4c43ac4b3add02e10cc671e82048d1918ca9f": "13f1c8ae71e06cde7dcc031a75901a2a",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/792ce7add8a191dbac046df32f89ba981fab3a": "fa6d9b6d5d4088576753406bbbc453dc",
".git/objects/52/125e754593b0da2dfb7427fac984b9d70750ac": "2b4404b9b13be568a01c62ba2d70fdb4",
".git/objects/59/5298d6f3b0a65a504acf1fe6f3123890ef937a": "1950ebce580849571c962241960d65b9",
".git/objects/5c/3fd562b7880ee1766219b13f84edaf923916b7": "7be72b9b5c3c0bc102df144507dd115c",
".git/objects/5c/e244d94f446d9eea6336d61794632a51514e7a": "d5be589967aea4ad0aa2f0839680a96a",
".git/objects/5f/7c449c98de7564ad4e854d659022cd8b4adf0d": "65fa1496c97462fb4c53a0c123d6cf40",
".git/objects/5f/95037db5ef2247a50c34748d38c14d1640ed62": "e2262be0d7f3b360b7614ea47ca234d2",
".git/objects/5f/a0aaf2500d588c29deb26bca45357f45ec15a8": "fb13c7a63a794b86daa371719a73cedf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/0da66e6684af1ecfe13a18545b99cc9529f383": "532ab627120a210cb25ac252d1e45fd5",
".git/objects/6e/65f7a7ff72d4a1a19c2d8c5cac38d9788b3bec": "22b511b6f01f926b51a5573cd4becef3",
".git/objects/72/50072d37f6907c46fa8009573ebed51e97db30": "86c7b314baec03fbaf13a31b415e6470",
".git/objects/77/d046f185cf5a4d8546621a6feee5dc0e4eb642": "22ef039c211cae1d43bd234b6f8b49db",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/95dd2c7d83e274036d3aa47cc27848f30f648a": "22be43c3ed5c85a754d9d71f3eee8f37",
".git/objects/7e/e09e185386a158c32a225b1d1a2af107d70b45": "bcccdc139220fcdc0e6924c6676c084d",
".git/objects/82/e412986534c61279d868feab7a2bb829b2d31c": "dc87d76024883c9da7e4b0c809ebdd4e",
".git/objects/83/d60aef3319ff615cfb5446b94995fdefd3d057": "e3137d7d56c46a8c622f24aeea31df81",
".git/objects/86/245718ddf7e7cbd32fe51aebde1983812a4a5e": "92db5fdac1d53a6df166caf5e5a7dd9f",
".git/objects/86/c709a581333679895d16825e74efdf2c7859a4": "a4323455b7e0f3ede2fd94c1a8294c60",
".git/objects/88/c086d700207c81c066663622191d0058d9544a": "911fe9590da0c55fea580c48dc161770",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/514916f918e98a6876d3ac3c02ba6bf1d10d66": "c93bc61663633b40778a49a2c058297f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/ee74fb573b616e91d392cf64d9ea2a00620717": "2c6e345bdabefaba5b0e48e857dd189f",
".git/objects/92/b9b2a61cbbd5ffb3ddb2723970aea049bf1b23": "136482c4148a96cac1eb300edd6b5886",
".git/objects/95/ad968896bbf0205fb122ccb7aec03faa795fe2": "471be51eddd058b6aaa93e51a70033e2",
".git/objects/97/d3fd83d17cee464c8e1a53e026e002b1fd3e65": "1714703ef73833a9498b3b54c0f602ad",
".git/objects/97/ebeb85ab3888cd40e4674183a39d69c9b6a53a": "db323b95178c7a1104c36c7d1f92f9a3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/080981ff3e8cf0ba0ceb31bb914fa7373270ae": "72699dd44401cbd89ed45a1f3a60c956",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a5/0b23d48d2ae6e40e9675093c341fdbc8d36b6a": "80eb4d45a8e5551dbff0f80b59a368d0",
".git/objects/a5/36fd8baa0df58c6928ee10b30a0cc2418af53c": "c5f132bb3fad4dbaaba7ca8a4d77c8dc",
".git/objects/a6/3370f63eb13069fd37d1bfe305424621e71a30": "2764d7ebfe2df58483f61c66ebed2b09",
".git/objects/a6/75972c5f6d04cd39775a8bcc44ee0e20355770": "198109734bcb637bf5575d62d3c54e64",
".git/objects/a7/193db02c5f924f6f29a15ddc917abd3212cebb": "acf1e1f7dbd164667856c5d6c9f84abe",
".git/objects/ae/a1b5aa65ff699f56be20041762b86d4958fc09": "6ad5f68b3a2b840497c2a31d8c29401f",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c8d75232b4862636b11935114cb4112a483e32": "3e37fcb2971f49e475f2521c2541d861",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/062f5ad03122fb99dd2b2a507fd63f4b9365f0": "2f1b3ebe6f740d755e3f777e2dae6f2a",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/242282a7b6e37a509c101bb1916b426b2fe031": "3e42e157d263a3851add54cb61e2083a",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/c2fa707bcabe65a46780f4ecc6a9f76dedf5cb": "c819c00fe8ed896e474caef3d147828a",
".git/objects/cd/b78b74b7795103953fbf97673aba3a7ef7c5f9": "ccfefa37690ea4cf15306f33767ecc51",
".git/objects/d0/5367e097f56cf2d413abc5bbf14aea2694a00f": "230ef459f75d92008eecd9c14d6ce92d",
".git/objects/d2/ed36be2b80babf9090248f878ddbeb18a75500": "8d23af1cbfc46e3b043dda30518bbaa5",
".git/objects/d3/af982b5f0df875a7b9637a83b50eba61a5332a": "87a49bcdeaeb73256c776476a09df5f4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f12e3eaad67e2e092efa7592f964b692ceb6f1": "f3b5f1cc3a61bf629ef57401852384bc",
".git/objects/d6/693cac3b58931711413dbfd42a34d7dfdce4a5": "991e7ed7e9021e98e064add9d92cffc3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dd/cd667191db71c5a784c50eb31f0df66ce2d2c5": "1ed3191764970883985d90c7fb1b2851",
".git/objects/de/36e7cc705295a08539eb60e65bda6ece5f6017": "edfa1eee8f53611227c37d55f3ff653a",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/0ecc6373bb4d092bb269fcbf8505175bdfae08": "da69246905732b0d966e73a5885c6bc3",
".git/objects/e5/e585403acfe8620884a74585ef26670fa1099b": "e2ed2f14a4ea063487fc74b4a792e7c1",
".git/objects/e7/64488ab33920b69ba5bc2e75e051b1b32446e2": "106f82f31f841c0d6ea82c073a310825",
".git/objects/e8/27cd96a6edd3cece91f494005d920ce81e57d0": "9ce3e7e9500d765f2fb1f2caf0861964",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/e1e135fb91211584bcc53fceebb2b1b0f8ba17": "e2c29689986aa5701a5a901ba4cdc0da",
".git/objects/f2/015a551b9d9ab4ad54e83b0cc2538bec6e1e27": "951954b9e9db5aec0c60b9dec4dba436",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/f15f885a7eb8331c7a4f4e6816e9d33b1f372c": "815bdb67449f9f09249c0d04582e36b3",
".git/objects/f7/ab1347b0654c9b419fd11dc570e2fc9b57f9ba": "1986a979b6d3c988dccac39cfac409bc",
".git/objects/fb/4767ba3ff00fd9d730644f352da3b601564778": "06087c225182d62ed9af64a73aa541be",
".git/objects/fc/d24a6779c4b8319ce29356fe40eda4c8623f55": "c3ba80cbd9644bad1cf751fda4dafacd",
".git/objects/fc/d83e445fb73573ca06faea86d746d051e094f4": "29e2a4ffbd8e07ddbd0c599780e1d048",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "86aa2d7c0dfdeed6b48c107ac24bb3e6",
".git/refs/remotes/origin/main": "86aa2d7c0dfdeed6b48c107ac24bb3e6",
"assets/AssetManifest.bin": "cc3520269597a18d49e30910b6668b28",
"assets/AssetManifest.bin.json": "7ec7b709843b0d8c8c2dd2c88408ecd1",
"assets/AssetManifest.json": "f80fa2a2acb64958a4b4f165cd3a0c20",
"assets/assets/app_bar_bg.png": "64961d3044dc9c5fc7b9c14f91505a72",
"assets/assets/chip_pic_1.png": "b118096cd9c01972f9180d59e8bdc471",
"assets/assets/chip_pic_2.png": "2d20b374a4cd011effc5cdb5dcaf6d33",
"assets/assets/chip_pic_3.png": "b88b6d5213a8d3e4f0dfc85dc6e9baf6",
"assets/assets/chip_pic_4.png": "f6424f60f31d69ae351651d59ca78a0f",
"assets/assets/chip_pic_5.png": "e07cb0f267f219f85770120ea6492eb6",
"assets/assets/chip_pic_6.png": "8e1e3de91c9ed8daea623965cd718310",
"assets/assets/facebook_logo.png": "5ef2fc038ae154363b46614a86df51cd",
"assets/assets/footer_bg.png": "5d23f21ba43d30e5b3f13cc00b0f0fc1",
"assets/assets/footer_logo.png": "b54611db5c4b5975f78ad625b21dd537",
"assets/assets/hero.jpg": "dbbb7f6e553bd0b692c289a6a97309a7",
"assets/assets/hero.png": "fca3dd268db73d0497c446ebe068e59a",
"assets/assets/instagram_logo.png": "63808015a2ebbc383000a5d518addba8",
"assets/assets/item.png": "d796f050037967265089c65d40be5954",
"assets/assets/item2.png": "c27a0197579069e84084589c4174e84b",
"assets/assets/item3.png": "48dccb2610db46d4467398124293327a",
"assets/assets/item4.png": "cafddd2feed5cb5066e78f1d5c6fab0f",
"assets/assets/item5.png": "99441a3cb90f2a17696cccfe2628a1c7",
"assets/assets/items/0-0.jpg": "286a2ac100b031bfbdc7b2b05ee3f619",
"assets/assets/items/0-1.jpg": "86123196fdc3640b2b2f6d2727e9a122",
"assets/assets/items/0-2.jpg": "07632c471ebf62475fd3ccff9ce9a255",
"assets/assets/items/0-3.jpg": "8048d88806542ce995ad9254383048c4",
"assets/assets/items/0-4.jpg": "8c338e37a48465128a8d017c93945566",
"assets/assets/items/1-0.jpg": "6eca7485580a5062379d5cee99979589",
"assets/assets/items/1-1.jpg": "8989b6b0f8f97b67e2c3b52d9f8ba6ab",
"assets/assets/items/1-2.jpg": "8048d88806542ce995ad9254383048c4",
"assets/assets/items/10-0.gif": "9667cfcadf43e971b9e154f84f9d2321",
"assets/assets/items/10-1.jpg": "a02a0b2e27a21d28c5671b86bcff8db8",
"assets/assets/items/10-2.gif": "3012e768b5c03c2f56269163811aa578",
"assets/assets/items/11-0.jpg": "b5d31ff4daeef39c4f1050c9a88129b6",
"assets/assets/items/11-1.jpg": "b5d31ff4daeef39c4f1050c9a88129b6",
"assets/assets/items/12-0.jpg": "4907be4ea6abcdadbf41f308bf3d4dd2",
"assets/assets/items/12-1.jpg": "242e890b858945ebda9aee0c18b5e7ec",
"assets/assets/items/13-0.png": "2b158d288b85384c900ef98d4d795d62",
"assets/assets/items/13-1.jpg": "961e3bd4beeab4b767c61673dcd2272a",
"assets/assets/items/13-2.jpg": "6e86b7e18a9ccc2775dbfaf16ea1e0ab",
"assets/assets/items/2-0.jpg": "35c478bc45e876bd4d9c0f2ab4260535",
"assets/assets/items/2-1.jpg": "e2926a86f5cc20a4f803c9415ba9394c",
"assets/assets/items/2-2.jpg": "0df909c5a51d2a3d99dbbe94c23ba228",
"assets/assets/items/2-3.jpg": "8048d88806542ce995ad9254383048c4",
"assets/assets/items/3-0.jpg": "e9e05cabb06c05903acacec3264d18de",
"assets/assets/items/3-1.jpg": "37b97f32cf26f7189f4cc56d8999f244",
"assets/assets/items/3-2.jpg": "b3b85aed35a3a067607c84487e0e0243",
"assets/assets/items/3-3.jpg": "bff20aee04478e08269de5145f2c47c9",
"assets/assets/items/4-0.jpg": "e8ac9ebb1425ba473b68ab629088dad6",
"assets/assets/items/4-1.jpg": "4d59b6ad739e9855814e288950bcfe05",
"assets/assets/items/4-2.gif": "94fc4504c746bddc92af99fc1ce4d740",
"assets/assets/items/5-0.jpg": "f578f1064f8a665a4c10940a559ff3d8",
"assets/assets/items/5-1.gif": "d7140eda1ff5f8400afe3b51e4ca698d",
"assets/assets/items/6-0.jpg": "91ec5c661e8221e2535fc8df4016df17",
"assets/assets/items/6-1.gif": "d95af074f564a7385e20bdde6f65b23d",
"assets/assets/items/7-0.jpg": "a402eeeb47418e052c62cfeed9be39d7",
"assets/assets/items/7-1.gif": "732b03bf6aad4804da5c05dbd7079e4a",
"assets/assets/items/8-0.jpg": "9963905dd33ee1173f7e3036e7b1e46f",
"assets/assets/items/8-1.jpg": "9963905dd33ee1173f7e3036e7b1e46f",
"assets/assets/items/9-0.jpg": "bbb46df3261bbaaee0f71c2df94fdfa1",
"assets/assets/items/9-1.jpg": "bbb46df3261bbaaee0f71c2df94fdfa1",
"assets/assets/linkedin_logo.png": "577fb2aa9c4a910a327cc382049eefc4",
"assets/assets/logo.png": "7b18332a4352162dcfd8f34995e1fc7d",
"assets/assets/pic_1.png": "a72464fa0e619fdcbdbb7c30b731b674",
"assets/assets/pic_2.png": "4856d2e37590f10c668a38b26cbca5a8",
"assets/assets/pic_3.png": "c1969a3b1fb93487a1568ab88ac5a036",
"assets/assets/pic_4.png": "0c3bdc5af833edb460ba7e536a799fd9",
"assets/assets/pic_5.png": "994e1e92dde87b26c618cbeb72552745",
"assets/assets/pic_6.png": "fc6e78f6d554ba79dfd9777bd9626efe",
"assets/assets/x_logo.png": "0c89a99a83c8da758b85ecbb3f29d1c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f37696d5b4c101a898e29eee90d83120",
"assets/NOTICES": "7ef74dc7c5dd075642ab734cd99a3f76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bc96c1ca5191e95b9940a6bdb6255aae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a0026ad5c95c06c1c9c896cf15e1eb9",
"/": "5a0026ad5c95c06c1c9c896cf15e1eb9",
"main.dart.js": "e590217bd14031b87aed18f7459d04ee",
"manifest.json": "cae88d02032acbd6a88307de49a4690d",
"version.json": "9a5d1519d1f79a793af68bbf2f497161"};
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
