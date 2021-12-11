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
    "revision": "3abcd558ca9af373320c171f6f277211"
  },
  {
    "url": "assets/css/0.styles.94456445.css",
    "revision": "1136f9ed57bf7a86f81ee06c1af9a9a2"
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
    "url": "assets/js/10.87ea37a2.js",
    "revision": "d5287cb04525dcdd05f69db3659f3b5b"
  },
  {
    "url": "assets/js/11.207ce0d5.js",
    "revision": "b41fda9c86cb2be583229d21558d362a"
  },
  {
    "url": "assets/js/12.a2119d3a.js",
    "revision": "cea319a8b9f7287288eb01bc83a385d7"
  },
  {
    "url": "assets/js/13.0d15f5e6.js",
    "revision": "2276dbb5ed59b01cb5007b155f134b04"
  },
  {
    "url": "assets/js/14.37f76075.js",
    "revision": "fafc8a81427b899fd1790908b0781d1b"
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
    "url": "assets/js/17.10a3b00d.js",
    "revision": "fbc2baa754dff246d04e0dc8119f71f6"
  },
  {
    "url": "assets/js/18.3f1ecc46.js",
    "revision": "d1d2a80d828d88ca4abca8e8eba0c7d4"
  },
  {
    "url": "assets/js/19.00fda91a.js",
    "revision": "f5d60957a2ef101eb36b04d879afff57"
  },
  {
    "url": "assets/js/2.0b44b90b.js",
    "revision": "3afcaf5778025c430229d876a950865e"
  },
  {
    "url": "assets/js/20.9e0c37db.js",
    "revision": "7f55431a6e1adaa9989b9d470f451840"
  },
  {
    "url": "assets/js/21.b82b33ec.js",
    "revision": "24d1a87a0efb7a0d0be26cccda21c1ea"
  },
  {
    "url": "assets/js/22.39e3372e.js",
    "revision": "5dd9411ea1c8611c799c8c07d198cf13"
  },
  {
    "url": "assets/js/23.6686aaa0.js",
    "revision": "72526145bcb9413446debb0933c6a80f"
  },
  {
    "url": "assets/js/24.8982f3e8.js",
    "revision": "e6a2e7c596e9541f429c16de5131935d"
  },
  {
    "url": "assets/js/25.9a975607.js",
    "revision": "cf5932d3db27f0daf3c2a0b2c9f2fe56"
  },
  {
    "url": "assets/js/26.c0b5df06.js",
    "revision": "18eb5970f9d541d722753a0f4400b018"
  },
  {
    "url": "assets/js/27.2a6f4d7b.js",
    "revision": "4a738cefa05fcecc80ee61fd8e23b117"
  },
  {
    "url": "assets/js/28.6ccb8b3d.js",
    "revision": "0da12de9df589598f176cb2757d38bc5"
  },
  {
    "url": "assets/js/29.a8fd208c.js",
    "revision": "4c291c1d996a88a0342510fe9734c445"
  },
  {
    "url": "assets/js/3.cb7ad15e.js",
    "revision": "b4d2658ee4180a621c4ca72fc873afd6"
  },
  {
    "url": "assets/js/30.e98f1846.js",
    "revision": "47d39d9d5f4d00cdf184eab37d1f22cf"
  },
  {
    "url": "assets/js/31.3dc44757.js",
    "revision": "6279a3d956b212296b08b25be9214e48"
  },
  {
    "url": "assets/js/32.285d7899.js",
    "revision": "c9b9dd35f26f5afd4673757dea239c13"
  },
  {
    "url": "assets/js/33.7a7982ea.js",
    "revision": "7007eac657babb78c83841fa329897e1"
  },
  {
    "url": "assets/js/34.4ee0a639.js",
    "revision": "229c269833c6e59a3c460a100f12fde7"
  },
  {
    "url": "assets/js/35.ad87d683.js",
    "revision": "2cb92371346ccdcb05676d9bfa9b5496"
  },
  {
    "url": "assets/js/36.b145d49a.js",
    "revision": "74e58eed3c9cd4793c8017c33e835157"
  },
  {
    "url": "assets/js/37.f8e2d437.js",
    "revision": "8f9c8cf37698545a30c0643754c3aed3"
  },
  {
    "url": "assets/js/38.d2be1467.js",
    "revision": "bcaa1e1ba223383fc798e36ccfdd3339"
  },
  {
    "url": "assets/js/39.cc51f813.js",
    "revision": "6f23a65656b01049ff95285b65754a52"
  },
  {
    "url": "assets/js/4.d7af6d65.js",
    "revision": "15c61c85d58f78a5b6eaa44de87ea103"
  },
  {
    "url": "assets/js/40.cd4aa775.js",
    "revision": "4539289f208ea3641a9327188424dad6"
  },
  {
    "url": "assets/js/41.d1a243fc.js",
    "revision": "537f1456a931d3e33d7a1c8f1d115dd7"
  },
  {
    "url": "assets/js/42.39244724.js",
    "revision": "03342acfca34f5006edac9b680f8e8bc"
  },
  {
    "url": "assets/js/43.6399a4b7.js",
    "revision": "361939c5aad479a9e975c7add37174c9"
  },
  {
    "url": "assets/js/44.14d79209.js",
    "revision": "e774b022ccc8331aa3ef02fd18eba8c4"
  },
  {
    "url": "assets/js/45.bda544bf.js",
    "revision": "4e3573cecdec97f800d25be6ddc11700"
  },
  {
    "url": "assets/js/46.e8ec9797.js",
    "revision": "bf3bb96dcce59714ddc7056790bbe8c7"
  },
  {
    "url": "assets/js/47.64ae6626.js",
    "revision": "5b9c7880661ae9c4488c61acd59a4e2e"
  },
  {
    "url": "assets/js/48.675eb784.js",
    "revision": "03c86cb97333282123a50ed6e8b469fa"
  },
  {
    "url": "assets/js/49.dab3e848.js",
    "revision": "e5aaa244586aae47a96f7f52f1a9c2b6"
  },
  {
    "url": "assets/js/5.55f5d8e7.js",
    "revision": "a24e64608f580f767fb943a27edec738"
  },
  {
    "url": "assets/js/50.613c7429.js",
    "revision": "a5e41ee21c3bcf58ae3a7041bcedbe04"
  },
  {
    "url": "assets/js/51.ccb17673.js",
    "revision": "4c8a67cf4e1171bafe0c6a9f5ee1789b"
  },
  {
    "url": "assets/js/52.e4a82200.js",
    "revision": "1c5bc30b4d6836b35672b0d777f494a4"
  },
  {
    "url": "assets/js/53.263e8e5f.js",
    "revision": "5eea6edd3da7068934ada56be5d4c39d"
  },
  {
    "url": "assets/js/54.1a514507.js",
    "revision": "15f47033e0ee542923ed6998cd858d9d"
  },
  {
    "url": "assets/js/55.e3cc5f42.js",
    "revision": "705036609b1e55cc549c6d91dfbd7fcf"
  },
  {
    "url": "assets/js/56.1dab972b.js",
    "revision": "84eeac6305531d66530e67ce8eb97cf0"
  },
  {
    "url": "assets/js/57.97e8b286.js",
    "revision": "3d1d30f8365f2ed75080398a99755255"
  },
  {
    "url": "assets/js/58.fd812560.js",
    "revision": "4734cdaa54e132e4ef96eb3a442cc4ab"
  },
  {
    "url": "assets/js/59.0ec862ec.js",
    "revision": "2c5075be22b61de064078cf63ebecc11"
  },
  {
    "url": "assets/js/6.bee4e456.js",
    "revision": "f533cf7b288718c28da5e8bf9d609ede"
  },
  {
    "url": "assets/js/60.dd234ebe.js",
    "revision": "1843817ea235e69dad57c0ab616af466"
  },
  {
    "url": "assets/js/61.b5d7e47c.js",
    "revision": "feba59bb1cee90a107c7a83b0ca0367b"
  },
  {
    "url": "assets/js/62.89167137.js",
    "revision": "c83184664350e7e61c5a72602a0a3080"
  },
  {
    "url": "assets/js/63.9f110331.js",
    "revision": "def7fae48828a94cfab55bca518cf7a1"
  },
  {
    "url": "assets/js/64.c1b85383.js",
    "revision": "005a3b934656bce8c1f809df393301e1"
  },
  {
    "url": "assets/js/65.1e548df1.js",
    "revision": "b116e26d93b9ea7e2fd20e749f859558"
  },
  {
    "url": "assets/js/66.0f2463b2.js",
    "revision": "553d98f0e5700052862bbd14fbae64b4"
  },
  {
    "url": "assets/js/67.29fb2cb5.js",
    "revision": "aa26fae28ee0230d3f72314d3a6556dc"
  },
  {
    "url": "assets/js/68.54302ea2.js",
    "revision": "4d7fbf006a2c1b1efc8521c1b7295aed"
  },
  {
    "url": "assets/js/69.4cf558a9.js",
    "revision": "b45a8a8b59eaca92b34aae4121a0d36f"
  },
  {
    "url": "assets/js/7.bb6c1904.js",
    "revision": "d039b498522b62bdf4d1a953b8a74b95"
  },
  {
    "url": "assets/js/70.d3673997.js",
    "revision": "eb1a0d756767a7484c220e7fea87e48f"
  },
  {
    "url": "assets/js/71.f0870ea0.js",
    "revision": "7cfeb7c9900b4affebea7addc9567bb2"
  },
  {
    "url": "assets/js/72.b5b717f8.js",
    "revision": "0b19eb3500d23f918160b8beb9fda28e"
  },
  {
    "url": "assets/js/73.5daa4766.js",
    "revision": "1c8a2f92282958e9fd370690ba1a33ee"
  },
  {
    "url": "assets/js/74.08bf90ff.js",
    "revision": "b8cb573a2c32a9b26f98143e97272bbf"
  },
  {
    "url": "assets/js/75.06541965.js",
    "revision": "6dd6897137ec31bc233ca90aa9fec6b7"
  },
  {
    "url": "assets/js/76.187ca08b.js",
    "revision": "73017744d1834e23e2a1da11845d3ce0"
  },
  {
    "url": "assets/js/77.577a0d73.js",
    "revision": "75e94f51ead95e5b21bd20984f0b68ce"
  },
  {
    "url": "assets/js/78.52ae6a39.js",
    "revision": "3fffa4ddaaa32ae4eca7acd63bcfc657"
  },
  {
    "url": "assets/js/79.af8effb8.js",
    "revision": "6e496ec548cb6477a4df414a3cf3b574"
  },
  {
    "url": "assets/js/8.e840d0f8.js",
    "revision": "5f6955d7d3ea233804ec1f5e4995ae06"
  },
  {
    "url": "assets/js/80.9881b367.js",
    "revision": "781963b75d7870e1974bf465b1f51ff1"
  },
  {
    "url": "assets/js/81.33e06b1a.js",
    "revision": "0dcd6b873a45d96ffac25620297be17e"
  },
  {
    "url": "assets/js/82.003b1f30.js",
    "revision": "8e9ab5639d2919d7ffb30c9ee9408f05"
  },
  {
    "url": "assets/js/83.8352c606.js",
    "revision": "fe4a91adeb2475989b60d5345e565fd8"
  },
  {
    "url": "assets/js/84.10e94f68.js",
    "revision": "4c1260b0be044c84536356e9d5a5670c"
  },
  {
    "url": "assets/js/85.a1f0cca6.js",
    "revision": "0381ab2d0302d9d787e2ecb2e2be44e7"
  },
  {
    "url": "assets/js/86.44226763.js",
    "revision": "26ab2599020e73593dc30de42d94c9dc"
  },
  {
    "url": "assets/js/9.58f2bd3e.js",
    "revision": "471fb8ce291bf14a009033b3856cf6df"
  },
  {
    "url": "assets/js/app.15e8dfe3.js",
    "revision": "8fc0adafd6a9de7465041b439c8dc5ce"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "70b1915c0c6a33dc757ab5b86c67b8f8"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "772d0052cca955178fb553e9a1fe069a"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "9c2bd99d56f7f7d4b67081c4aaa1fdd6"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "fd075aa76aa15e6aef6ea4f4376253f7"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "79ded63127a4d77b66379538b5a55b29"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "0728473cddac1028ff38511d0d106aa3"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "e15e70f68d0d7bbe4d40f78831d5e954"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "4098bb2b9f829cb162848b9ea97265ae"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "d94470610f1e6733d202a224bb3d6c21"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "278ae6b1897591c4b05402b8bad7c858"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "b905931ba22c595b9c4fc9e8723cd43b"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "0ac681a623f6b7d48ae5726c43d8a3e1"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "11bce9aa39713c6b7b05278790ea8db4"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "20a9b1737113ee991d226881e2b8b6ce"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "73024d2236be815c559fc22ab0c8d0e0"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "032d5a23c18bb696683e89793b71ac76"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "41033074c55b697ff7d476a43bf45b26"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "af66d65e20c1f3513b59960dab902114"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "b422516be2010be343fa25f706734687"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "03bd147ba6c3e2f9fbb4e733b56552b7"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "eafaaaabc7746af61b0a32a2489b806a"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "ae3b35c52883fe710f2c03023f3c463a"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "27347a6f2b81afb484f7dcbaef38514b"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "fcc1c585a2a95e72a53c3ec7c5f2af17"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "dfcc7855374f49983fda911dd51662d5"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "79de5da4345c1d2a098a359bcda105c2"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "f369197cb2e435a4dd42abc6f755d3ec"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "700f6bd1c47a08efe2632504c116e3c2"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "e7b0d4b6eaa0a4e2dd1ef35e836a1ed3"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "7d046e5b2773833082381c903df0323d"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "25b1af449e65a65e903a50fcb6d5ab51"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "ca3b58c3986ade86df22ea174f6299ba"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "1db0a89d605cac8a2bd19c8216e9e823"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "f332f17d67ce1e6ce40f4a9c6cf24253"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "19ba8c8ea132eda5b0077b0dc6aa03f5"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "bf5303a406aa518df457b9cc144e710b"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "cf7f233386c1ad0000510ba669b255e3"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "2e199cc0b8dd8edec23243214d680deb"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "f44413582af45368fcd68ba57c1303f7"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "ad8875c1b83d7d6b45cb257fbb1b2d5a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "345c53d2ccdbb3e0ae0b9715aab2d253"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "b8906b8790df16e0458e8a9f99825ca8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "91012e2d95c46764c8a03ae353aa8504"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "295900f790dd323b4404b37b1b3fca45"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "340d5f1209301131033005c808c28035"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "85092519ddcf87d68000a11216c7f580"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "13cc22b6a068cf2c628e807a4954f8bf"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "1f7a881584ee5613115b2aa492f4775c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "6107916a8551b82baec854f62d779129"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "fee4466c64da2dc8b0eb4e0224e0c350"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "d2e439c9c8894903506f71e73e658cdc"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "96dfe48fe25fb8630523c217a77ec193"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "80c2dbd09d17eb1eb1871c5227330db2"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "da377257544c3305833085f43b6cafea"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "91efd96be9029ed250dc482c112a7ed3"
  },
  {
    "url": "blog/other/git.html",
    "revision": "02a3233da77c773c401a250cfe6fd3bd"
  },
  {
    "url": "blog/other/index.html",
    "revision": "725486fe2eb4e343b95841e446e342b2"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "da97c0ee19616bb25a66a1d12caf9a18"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "b0a55b6f7290fdd1744f5f79359305de"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "68e7ea80fe1fc5c08daa5821a3328b29"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "59fea73967bd0d65ebc8e807a2a941b7"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "7eb9af12d9efe8153cce3976678352e2"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "cc911159f3b67c9f7fe2fca6e10478cf"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "7fd2a7f4740101f7327ea4a14f356e65"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "28ba8a8485c4942643d6217bdc69f848"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "6233ef08d5d2c2760c352bc1e71e1870"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "6152d15a89347938a09f8c482e7f9404"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "7d921b920b29fc640eec0cc1b26f3431"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "24caffd68276e23248b0fb8a8fd28860"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "503674c55c5cf1f9de981c5d3130671e"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "12e87a3799f7ac835049ab61409d1ef4"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "602efede6f142ae3dba2dd9bf1f3084a"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "7255af3eff67211d09935ac0fde10746"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "cf7d23a642f60d930fc69976c75107c8"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "f8ae5984befe6a7d48d4e3665ea005d4"
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
