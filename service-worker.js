/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a9bae582f7e2707df517b2d07a1eadf"
  },
  {
    "url": "assets/css/0.styles.3f71f156.css",
    "revision": "7b27ceb8bb3ff39ec3f38e298026680c"
  },
  {
    "url": "assets/img/allnodes.a3c495a4.png",
    "revision": "a3c495a403bb3d684060e60b2969fe87"
  },
  {
    "url": "assets/img/baseline.6679fd23.jpg",
    "revision": "6679fd234595d72532053011abbfc25d"
  },
  {
    "url": "assets/img/deferAsync.ff9ba469.png",
    "revision": "ff9ba469b567d1f020d45dbae088c286"
  },
  {
    "url": "assets/img/element.54cc23b0.png",
    "revision": "54cc23b0d4ef606988fee686a3c41e19"
  },
  {
    "url": "assets/img/flex-align-content.32d839c6.jpg",
    "revision": "32d839c6d6639a3f04d924fcae9ca31f"
  },
  {
    "url": "assets/img/flex-align-item.7d2438aa.jpg",
    "revision": "7d2438aa4718035f1ea8c83c92f4b4fa"
  },
  {
    "url": "assets/img/flex-align-self.8c9ac62c.jpg",
    "revision": "8c9ac62c7aef80d183aa4ff74cf48313"
  },
  {
    "url": "assets/img/flex-direction.25dde35d.jpg",
    "revision": "25dde35d855b32ec4d2cfdc6850346a3"
  },
  {
    "url": "assets/img/flex-grow.6c596211.jpg",
    "revision": "6c596211a1d51d95935f2eb866fac97e"
  },
  {
    "url": "assets/img/flex-justify-content.e372054b.jpg",
    "revision": "e372054b24882107cffa555216016817"
  },
  {
    "url": "assets/img/flex-shrink.79549491.jpg",
    "revision": "79549491da3080dfc00289bef9189c47"
  },
  {
    "url": "assets/img/flex-wrap.891e460a.jpg",
    "revision": "891e460a40432ee2024b6f2c5fc7be90"
  },
  {
    "url": "assets/img/layout2.d2b9b172.jpg",
    "revision": "d2b9b172b3a1ce049ad12c95f4aa273e"
  },
  {
    "url": "assets/img/prototype4.33e81924.png",
    "revision": "33e81924341374473b6f722eb1bb7d97"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/test.151e85f1.jpg",
    "revision": "151e85f16932b694f3e8c075c9195657"
  },
  {
    "url": "assets/js/10.2590fdc0.js",
    "revision": "8de50e4f9b6bf7d51c618b620062f87c"
  },
  {
    "url": "assets/js/11.620c652b.js",
    "revision": "149e0fa6f894d09d05db5715bd1ecb0e"
  },
  {
    "url": "assets/js/12.2e2c5d64.js",
    "revision": "b28eaef9bc62bbe5fb8f05cc2716d35c"
  },
  {
    "url": "assets/js/13.d3468fc4.js",
    "revision": "32b7ae90555f8ea95e1a3bdfe157bac1"
  },
  {
    "url": "assets/js/14.bcfae107.js",
    "revision": "137d3fbf1a315148d018b50220133dfd"
  },
  {
    "url": "assets/js/15.67065fd8.js",
    "revision": "6f724b1cfc6756f3eda1d7d29190af04"
  },
  {
    "url": "assets/js/16.1228dd9d.js",
    "revision": "aefae358c2fe1e976a4903f1884d9316"
  },
  {
    "url": "assets/js/17.252231f2.js",
    "revision": "0a6ff2e24d8d603bfc03ebb394eef45b"
  },
  {
    "url": "assets/js/18.8601b0f7.js",
    "revision": "4e423bb424fab07f47a91cfb9b921bf9"
  },
  {
    "url": "assets/js/19.e4623e0a.js",
    "revision": "73f4fbd124e91eb500589cc3837c0a61"
  },
  {
    "url": "assets/js/2.0d9e74f2.js",
    "revision": "157bea77e0ab6679913771948d11fc4a"
  },
  {
    "url": "assets/js/20.6e2bf3b6.js",
    "revision": "6cefeefac588de46446e367aea685e14"
  },
  {
    "url": "assets/js/21.cdff5d3a.js",
    "revision": "ad74f60426be2928afd140453aeb5e2b"
  },
  {
    "url": "assets/js/22.a2014320.js",
    "revision": "ecab93922b66bd84c640a0df61bbb5e0"
  },
  {
    "url": "assets/js/23.3199b3b7.js",
    "revision": "02b719b5c187e1a65fb3172441deb46b"
  },
  {
    "url": "assets/js/24.988baba4.js",
    "revision": "26dafc1af8e255e94b56e450fe087a6a"
  },
  {
    "url": "assets/js/25.d2649e28.js",
    "revision": "9168e08e1f8d58e73aaaab780e7f4286"
  },
  {
    "url": "assets/js/26.c54782a5.js",
    "revision": "6b2856051a740bb4a4ed747f7df18bbe"
  },
  {
    "url": "assets/js/27.ab2a4197.js",
    "revision": "420ed5cab1d4749d3d007182b0d32840"
  },
  {
    "url": "assets/js/28.0f529e99.js",
    "revision": "3bec4f411531bfbc5010d2ed03e79267"
  },
  {
    "url": "assets/js/29.e3fd5687.js",
    "revision": "c29e80039ce5e4565e686b7657c07fb6"
  },
  {
    "url": "assets/js/3.6e8a01cc.js",
    "revision": "144e5776951e8b8c09a95521e17d1066"
  },
  {
    "url": "assets/js/30.a985760b.js",
    "revision": "5d7cafdb6220228fb65c5b209093c439"
  },
  {
    "url": "assets/js/31.5742fa7d.js",
    "revision": "92ffc599df6a5fb6edc46cffc7f79875"
  },
  {
    "url": "assets/js/32.4053a6cd.js",
    "revision": "e7eef56edc55e7ed00578989b19cccad"
  },
  {
    "url": "assets/js/33.6c459ceb.js",
    "revision": "7ef17e72dd1e2e2f9f710890ac5ff925"
  },
  {
    "url": "assets/js/34.ba15c5c0.js",
    "revision": "900196326dbc719d37dfcdd452b80033"
  },
  {
    "url": "assets/js/35.f0dcfccb.js",
    "revision": "50b36db50835a5596608ced6a839dd40"
  },
  {
    "url": "assets/js/36.fc0e3eb7.js",
    "revision": "a68727ed2a9bb284abb9de10f60d063f"
  },
  {
    "url": "assets/js/37.f642beeb.js",
    "revision": "1f0621a57b53a824d9c5941d820f02e2"
  },
  {
    "url": "assets/js/38.08cee3c1.js",
    "revision": "85539831dd8cda0f0b091860db31c4b1"
  },
  {
    "url": "assets/js/39.f2e0dd88.js",
    "revision": "16d5a0113f0c22ba08a9227bd656608a"
  },
  {
    "url": "assets/js/4.18d6c512.js",
    "revision": "718fc1f53533830836c241223068f870"
  },
  {
    "url": "assets/js/40.e1c7cf34.js",
    "revision": "942e68920265536a77c0d83e0d68e6d7"
  },
  {
    "url": "assets/js/41.29b43adf.js",
    "revision": "5df6c6a5a8261a193fdca3ce2c6f8b9d"
  },
  {
    "url": "assets/js/42.40bc7649.js",
    "revision": "b6d093c3487fd45d3a7a6a68150171de"
  },
  {
    "url": "assets/js/43.b0aaffd8.js",
    "revision": "2b688a515789e1952513872942761da6"
  },
  {
    "url": "assets/js/44.125b75a0.js",
    "revision": "1bdaa493f34eb9c620ea329299d8ba05"
  },
  {
    "url": "assets/js/45.f4da0150.js",
    "revision": "ad1bddfb0dd2f5d4047bfb7a999d3ec8"
  },
  {
    "url": "assets/js/46.e36b7612.js",
    "revision": "2899e9617a90358f8496ed0bb34704df"
  },
  {
    "url": "assets/js/47.20c00e30.js",
    "revision": "6b6e47ea616fccf1a13036af3258c172"
  },
  {
    "url": "assets/js/48.6984e200.js",
    "revision": "cc2aba943aaa641c73210351499d693e"
  },
  {
    "url": "assets/js/49.37588124.js",
    "revision": "b2765f06f26f7c209a8949f4d14258a8"
  },
  {
    "url": "assets/js/5.ea987f19.js",
    "revision": "6cfa83ed359995e576cd8bf5eb52a091"
  },
  {
    "url": "assets/js/50.1707383d.js",
    "revision": "4150c19d6e99d472cf634a0119d8c6c6"
  },
  {
    "url": "assets/js/51.8310a68d.js",
    "revision": "480ac4d204f93a9335c5a602fabc6601"
  },
  {
    "url": "assets/js/52.ec8a2f31.js",
    "revision": "c03a934dc2b2b293b86b4433f51cdfc5"
  },
  {
    "url": "assets/js/53.b013f8a4.js",
    "revision": "db872cef7bd060a77d4939e63223aeed"
  },
  {
    "url": "assets/js/54.70e9320e.js",
    "revision": "51d9a74a3308af5b3aaec61a6ba0292e"
  },
  {
    "url": "assets/js/55.6edf5a8b.js",
    "revision": "b7340fc36474c202fe55401cfd45ea38"
  },
  {
    "url": "assets/js/56.8359df77.js",
    "revision": "1b829c38866b0ef7b4fc9080c7807898"
  },
  {
    "url": "assets/js/57.95c6bc0f.js",
    "revision": "1ea93278cea8383204264efc21046ba9"
  },
  {
    "url": "assets/js/58.76c8e57e.js",
    "revision": "0a147772276c31a2bb81ab3a2b196081"
  },
  {
    "url": "assets/js/59.02b50d48.js",
    "revision": "044d78960e96125b3ed9a5e76e4a22b3"
  },
  {
    "url": "assets/js/6.7e1a4a81.js",
    "revision": "600d6a7f0bde5a91b960a4a818db7a9e"
  },
  {
    "url": "assets/js/60.e62c7321.js",
    "revision": "4d815a16a7ba08b5c2a49f0adac5281d"
  },
  {
    "url": "assets/js/61.34760303.js",
    "revision": "f95707a6e5ee270b19e6b88225182359"
  },
  {
    "url": "assets/js/62.c8dc5d79.js",
    "revision": "07840ff5d1d1d77121094c79a0c00c93"
  },
  {
    "url": "assets/js/63.af82dd4b.js",
    "revision": "a053ec04e58b20b74ecdc2095e9563ea"
  },
  {
    "url": "assets/js/64.b9049ec5.js",
    "revision": "a4d64119eb038b2a005e0f41b26fd64c"
  },
  {
    "url": "assets/js/65.dfa7eea7.js",
    "revision": "7bf1552aad34ae4d64dba2e805940e56"
  },
  {
    "url": "assets/js/66.94cffbc4.js",
    "revision": "ec5fff55ced6ea721cd0bd4ff3a53dd9"
  },
  {
    "url": "assets/js/67.2177e608.js",
    "revision": "07c61ee2ba9ceba4eda75ffa961eedb5"
  },
  {
    "url": "assets/js/68.f6e921d9.js",
    "revision": "82c9a18e9c5766f76c4a4abb61544d26"
  },
  {
    "url": "assets/js/69.81dbc556.js",
    "revision": "322eb72ad5712d7b4b44afe5853857de"
  },
  {
    "url": "assets/js/7.e74ad595.js",
    "revision": "19f2a70df047f762b88ef13e7b87e4c2"
  },
  {
    "url": "assets/js/70.f7b2a8ef.js",
    "revision": "ce6fd9bbdffb96a1864938768e32f787"
  },
  {
    "url": "assets/js/71.f7bc6f59.js",
    "revision": "4d752c2f1753fd6ab225c3064d2c0657"
  },
  {
    "url": "assets/js/72.bc0baaf4.js",
    "revision": "a09898f637639092be5f8cf8a16000c1"
  },
  {
    "url": "assets/js/73.52df21be.js",
    "revision": "63cda1f9956222e69c1bea4d18142bcb"
  },
  {
    "url": "assets/js/74.58854373.js",
    "revision": "b892e19c0f8c28d5c4c03a9103d216eb"
  },
  {
    "url": "assets/js/75.cbd8e983.js",
    "revision": "2b6f6609509b6bacb810dd028a9e7156"
  },
  {
    "url": "assets/js/76.2de9164e.js",
    "revision": "93ef7cd44b93b239c81b5af3c8f824a4"
  },
  {
    "url": "assets/js/77.eaf4a808.js",
    "revision": "71969211b77a6de38c026f2813c57a46"
  },
  {
    "url": "assets/js/78.7f738fb5.js",
    "revision": "143740bc599e161e6ef657d14becfe91"
  },
  {
    "url": "assets/js/79.bb07bb5c.js",
    "revision": "6a7b7e5a3f10405d6c5ee10206afb2e1"
  },
  {
    "url": "assets/js/8.29492824.js",
    "revision": "0ca9e2e4e233a9035b943e9ae144c643"
  },
  {
    "url": "assets/js/80.5d399681.js",
    "revision": "30bf70c8ffd7f997a42b8815cc2f7951"
  },
  {
    "url": "assets/js/81.4426508a.js",
    "revision": "efcdaed02f3946243c2b57e1efb72458"
  },
  {
    "url": "assets/js/82.48bcb05a.js",
    "revision": "341802d94275d4c6283cf4559b6167a5"
  },
  {
    "url": "assets/js/83.f76009d8.js",
    "revision": "4f8def0dd84081b348ed990407729bea"
  },
  {
    "url": "assets/js/84.1981c8eb.js",
    "revision": "51b5aadd23dc6be35d611abd08c299eb"
  },
  {
    "url": "assets/js/85.86f05b0d.js",
    "revision": "8e422d1c533280a481f3b1551641a8bb"
  },
  {
    "url": "assets/js/86.1bb42690.js",
    "revision": "ec8d8527f6362538eb3133c33bd30d01"
  },
  {
    "url": "assets/js/87.bbd84caf.js",
    "revision": "f0d862c7b9d0d05c9a45d05409678eed"
  },
  {
    "url": "assets/js/88.de322231.js",
    "revision": "2faa0b6f7f73a30ac36513e4ee63822e"
  },
  {
    "url": "assets/js/89.4fa63bd1.js",
    "revision": "d938f002dcd3c3a55f8e49d4539356cd"
  },
  {
    "url": "assets/js/9.6b44206c.js",
    "revision": "2bee2673c04e315266fc7a71569019f6"
  },
  {
    "url": "assets/js/app.35cac525.js",
    "revision": "098d172a7c67cf7eb9cd29dc54b158a6"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "72c27a59325e12e04bbcba11e072ffd8"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "d041836a09a8bc3a4ba880ad93db142a"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "d1d94e95c7629037bc621cd1427fb951"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "cff43b74ab0547b6a67420310b84f870"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "0e3f413b63cb50a0e1503b56570b5aac"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "a8d078c5b84d322ff8c5242ac9fc12d8"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "562ea5eef91a8d2372f8949a420d5096"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "55828865c3ebeec2a4eb1fe4945f953f"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "5e440892c4301ee94c4833a797d80cff"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "61b9b5062a283beff012d94bd07700a5"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "11712c02f510fdac15794224dac9e270"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "7ea51a310f8f5047acdb019aca17358c"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "a04ef8a977071d6ab0f828cbd4de9489"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "55e890e0b48d4784bb007388685463ad"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "e9731eee1677eb259bc3934bf315bf62"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "cb4a5fecaa3940cc3ede8a0119627483"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "70eba146547ab0fc30cc843245a464ae"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "2915a8645c948ee5aca9d26687c12310"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "4759f8fec4b75536506266585985803c"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "299daa753c0263ed2f5725b94f5d2cf4"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "6ac50125a18c7ade5c35d38d32e8e76e"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "42c0fb5c94cced079b04adcbe8fa6646"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "aff7364c49ddd6f0849f578a29e30a8c"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "9aaf64f9ac927b45ad9c2bc3f2c5b78b"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "11f8a34a356708ba9dfdc8e4ba1deb46"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "f4a92cceeaa60323690990b784c3fb80"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "d687b2830ddf7038d83d3cd3b28d13ef"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "cee9bce40101937fdc6b20796582afd2"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "d79fdaa3e91db4334ca30c1673fd1299"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "6954a938fdd6c48fca187075cde20a09"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "b00003235f14b5ede82144587eddf8ba"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "d671d83270458801985e797096aba4a1"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "70fb58963aded2156094c8100a82acda"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "318e80fa0b7057754bb555cb0431ed1d"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "b43df02c47e37ea4a8f2c5d7bb3af7e9"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "9c6957c84274b6e2fb85f6ae7d69a23f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "b9cd8ebda5a0d2272fd8e9b7362354b3"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "70c3f13a7204d3367fbc67bc0864d122"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "bd04c05b5a8b7a060e462fd3cc5a30ac"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "6d60aa669b0e973b934d8c4c1c4ed491"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "a153357c4c3341bd357330f5cbb72b11"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "5b0af358e42a0de367579a12d9b31acb"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "ed855f9ef2e7d4e832071ff12042fcf2"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "1a4a414d29a0d8b94bcdce9227cc4221"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "fcf2dca62203e3dfe45cf692d12ef155"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "a1e9e4a6555c71a10338af22cf02f9fa"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "5653dbe3670169647e438361e34dc95f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "d27a8efe715a25765987f35aab9ae3ba"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "1f398978373a840339d248d40ff1d4e8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "cf56e178badd40620f07d52ac3d4d96c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "d4ccd35e51614b22d6de2ae64ab2e17b"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "f9f81f29989da3dfd1de725087a24224"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "0567b572439dd5c90eb46d893dff0266"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "0dd7774f1675bd60eeca029b5dc8f975"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "a6e4fa7695e9e597f0926f698a7ced58"
  },
  {
    "url": "blog/other/git.html",
    "revision": "3ced165ac74ec4e4e4f277ce02881ec8"
  },
  {
    "url": "blog/other/index.html",
    "revision": "bb9eb32724cb91e793d17c5d1de3e306"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "9267d53604f8154f8d04177821bc3cac"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "6313eeb5f240430428aa31e7a0b3789f"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "a58d714817eb8c50991cb088a3ac6ae7"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "be5d3daa5829d3f1552d6a3331c5c0a6"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "bec85bd9736a0b2cdadeef783ff259ce"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "ac64fb301f8698642b93b8423321434c"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "d1d65dc47ebdae91f70eb5596cb60d42"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "85aa74e39aa460ca185bdcb68dde4d1a"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "28abd0670b822a7b27707617591bdc39"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "82645ef79c6a7fe1a99e51571ce171ad"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "6ea60c5eaedd426e87a4fe1669539ed7"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "28ae2d125565e09cc4a96a61019a42cc"
  },
  {
    "url": "blog/react/redux-toolkit.html",
    "revision": "1ca1e9a05431618c0341549f2c24761e"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "c03ebcbc8482a7c01f9a48896e2b6786"
  },
  {
    "url": "blog/react/useWebSocket.html",
    "revision": "2b1d89d67173b6717abc32cfb26c9cdc"
  },
  {
    "url": "blog/react/virtualList.html",
    "revision": "17eaff99d648ab6f712bc15dfaaa708f"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "53068285c5606af04b13ab884060eb31"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "7210d8a97e45ebf5367006a4641ed63d"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "bdea86923ec26a4ec9d75e7141d345a5"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "d5eb2117738ad30bccea85689da94d35"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "04b4ec0148919cfc6de789c4139efef7"
  },
  {
    "url": "navlogo.jpg",
    "revision": "d8c6424ef225ed3eac61d78945cad293"
  },
  {
    "url": "self.jpg",
    "revision": "1a9ef8ddc7ac3babbf843dfaf4b90f74"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
