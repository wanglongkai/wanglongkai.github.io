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
    "revision": "34a386076509715488f843fc1a1aa367"
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
    "url": "assets/js/10.ff7ce18d.js",
    "revision": "034c89f438244ff9ace46f838c71e4f5"
  },
  {
    "url": "assets/js/11.948e8e29.js",
    "revision": "3534892fd9da1641e27442a771a91aa0"
  },
  {
    "url": "assets/js/12.def5c1a1.js",
    "revision": "0ce76f7077a3bd53bb9074ede73382ac"
  },
  {
    "url": "assets/js/13.1def5a3a.js",
    "revision": "7c2fb14a212192dd6eb14d944508a6fe"
  },
  {
    "url": "assets/js/14.bcfae107.js",
    "revision": "137d3fbf1a315148d018b50220133dfd"
  },
  {
    "url": "assets/js/15.baf978d6.js",
    "revision": "59d57d176cdec61042594dcaf7445dae"
  },
  {
    "url": "assets/js/16.aae0e7a7.js",
    "revision": "54b63f964a3e40f30f89ca40f09bc2dc"
  },
  {
    "url": "assets/js/17.0555969d.js",
    "revision": "db7c2271b439ac194cbafc89fb96df2d"
  },
  {
    "url": "assets/js/18.b9cb595a.js",
    "revision": "69434a728d074c9c812da93a736c06ba"
  },
  {
    "url": "assets/js/19.5534f88c.js",
    "revision": "eb127d06313d2609da309534358b866c"
  },
  {
    "url": "assets/js/2.0d9e74f2.js",
    "revision": "157bea77e0ab6679913771948d11fc4a"
  },
  {
    "url": "assets/js/20.e3fb5433.js",
    "revision": "5fc9a48d7a74b37c7f4996d0d7e1c260"
  },
  {
    "url": "assets/js/21.cdff5d3a.js",
    "revision": "ad74f60426be2928afd140453aeb5e2b"
  },
  {
    "url": "assets/js/22.a7bd62cc.js",
    "revision": "13fbffa96f288197b4db72c327ff6da7"
  },
  {
    "url": "assets/js/23.cc97258a.js",
    "revision": "bee47e53a262fac7d29373fd59f19ee3"
  },
  {
    "url": "assets/js/24.2545a609.js",
    "revision": "da9f0ff8a2b1a79540015f472b7bb974"
  },
  {
    "url": "assets/js/25.c32b7599.js",
    "revision": "f9979cca6384fb96d8d9b6b9a65f8d63"
  },
  {
    "url": "assets/js/26.25fd77af.js",
    "revision": "5501d407acb1d6230f7e315f52c21f38"
  },
  {
    "url": "assets/js/27.44a68c1c.js",
    "revision": "9b6fea9ec3d8e40440465a48b26d2ca6"
  },
  {
    "url": "assets/js/28.e1a5cad8.js",
    "revision": "728bc4498b7d9f57128c51e740b376fa"
  },
  {
    "url": "assets/js/29.39b6a420.js",
    "revision": "8b7c227919772057afb17013aaef702c"
  },
  {
    "url": "assets/js/3.7e0cdc3a.js",
    "revision": "2bbc7d1dd373fd43cb2134bfed783cc8"
  },
  {
    "url": "assets/js/30.39981caa.js",
    "revision": "82b6532ddde8e780ffccc3ae6a819d99"
  },
  {
    "url": "assets/js/31.5742fa7d.js",
    "revision": "92ffc599df6a5fb6edc46cffc7f79875"
  },
  {
    "url": "assets/js/32.ca42cb7a.js",
    "revision": "686bc8e37b8deb6f626d1013fe4ea908"
  },
  {
    "url": "assets/js/33.199431a4.js",
    "revision": "93a5156593dd848823ed9e43a71b47eb"
  },
  {
    "url": "assets/js/34.a591a532.js",
    "revision": "d66876d6a8d98bad90f8e7f81325f682"
  },
  {
    "url": "assets/js/35.e3952643.js",
    "revision": "40fb3f08f5950079997a5ecf848d3662"
  },
  {
    "url": "assets/js/36.0a714fba.js",
    "revision": "d23f172033bd739be71ce5cb82f91311"
  },
  {
    "url": "assets/js/37.648d72f0.js",
    "revision": "1ad6ff826edd72112653ed63a21b04c0"
  },
  {
    "url": "assets/js/38.7f23fd79.js",
    "revision": "dcad74a4ac094a0b7390eced90101c0f"
  },
  {
    "url": "assets/js/39.98f5465a.js",
    "revision": "cfdb50f0dd52d26d93fe0367e21874b1"
  },
  {
    "url": "assets/js/4.1468463a.js",
    "revision": "e16f2995334b64292a0f39dafded752d"
  },
  {
    "url": "assets/js/40.be23572b.js",
    "revision": "e7f48abe675c960ad524b2a035b67397"
  },
  {
    "url": "assets/js/41.3da1d18b.js",
    "revision": "985ab3283a7cf8f273051c62d26ba87c"
  },
  {
    "url": "assets/js/42.d8afa607.js",
    "revision": "3b2f0b846f4577b8ac23af5d3170b10f"
  },
  {
    "url": "assets/js/43.b0aaffd8.js",
    "revision": "2b688a515789e1952513872942761da6"
  },
  {
    "url": "assets/js/44.c029a609.js",
    "revision": "3e125a501973217deaca2c3e5ccdcdab"
  },
  {
    "url": "assets/js/45.f4da0150.js",
    "revision": "ad1bddfb0dd2f5d4047bfb7a999d3ec8"
  },
  {
    "url": "assets/js/46.228cddbb.js",
    "revision": "f5e602b23df8ef33eee267049030bee2"
  },
  {
    "url": "assets/js/47.6af307d9.js",
    "revision": "31e6f8d83a5b2a69d62ed47a3fcece43"
  },
  {
    "url": "assets/js/48.2b321227.js",
    "revision": "2b82497aed88722d31c635278fffe91b"
  },
  {
    "url": "assets/js/49.55895075.js",
    "revision": "08d42270c55bf06898a0dfcacebf76b0"
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
    "url": "assets/js/52.9e1ea699.js",
    "revision": "0fdcd98c8e00043928a64e1b2b999c53"
  },
  {
    "url": "assets/js/53.d7661776.js",
    "revision": "b6d2d6742da8891dc1b3abccfa8cabe4"
  },
  {
    "url": "assets/js/54.b623c6b4.js",
    "revision": "f902398bc965067a6814fde6f89b0cb1"
  },
  {
    "url": "assets/js/55.eeb952b6.js",
    "revision": "783a2f08e79fea30260bc9d418e5206d"
  },
  {
    "url": "assets/js/56.eb16a33b.js",
    "revision": "aeddf84dc6fd65a3c130698470142afc"
  },
  {
    "url": "assets/js/57.bb8e6578.js",
    "revision": "b28384b52159e2400e36fe5e8c0ef402"
  },
  {
    "url": "assets/js/58.65f2b206.js",
    "revision": "c4410eedb9777b4487eb19ef41d354a2"
  },
  {
    "url": "assets/js/59.e576e1da.js",
    "revision": "fca5a3168475db84cb4d9694672840e9"
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
    "url": "assets/js/61.1d0c171c.js",
    "revision": "16bea4c5e5a3bf38273eec6eed11dfc7"
  },
  {
    "url": "assets/js/62.c8dc5d79.js",
    "revision": "07840ff5d1d1d77121094c79a0c00c93"
  },
  {
    "url": "assets/js/63.6d0c4e3a.js",
    "revision": "204dc96e37d7adb7d2ebeb0078338192"
  },
  {
    "url": "assets/js/64.6e5af581.js",
    "revision": "c3a65dbf6f452ebca2c0c12a6863e0f2"
  },
  {
    "url": "assets/js/65.0d3d79af.js",
    "revision": "9f42516ec097c0426f3253523f3dcfff"
  },
  {
    "url": "assets/js/66.f8f1fc7d.js",
    "revision": "e36e3dd72c3260767b0b3ce720063cf4"
  },
  {
    "url": "assets/js/67.bdd2a54c.js",
    "revision": "1e35518376607ae386ac80263c57c0ee"
  },
  {
    "url": "assets/js/68.df1441b2.js",
    "revision": "b5578760d4249e3aaa6ead60e2c15b5b"
  },
  {
    "url": "assets/js/69.86710c60.js",
    "revision": "0ff0d3c1308345ed7d43ed364876eb03"
  },
  {
    "url": "assets/js/7.f4b0b20b.js",
    "revision": "ad8e4a3974dc88be72611e0fdc5cbb1c"
  },
  {
    "url": "assets/js/70.ef6a0884.js",
    "revision": "a0fd53029f6578d470276c5b296c3144"
  },
  {
    "url": "assets/js/71.ecdc368f.js",
    "revision": "5a926c291406a868c01eb0b107f82497"
  },
  {
    "url": "assets/js/72.eed3a9b1.js",
    "revision": "60a283a5273a7781d13c31bd779325a5"
  },
  {
    "url": "assets/js/73.30d49b4c.js",
    "revision": "5c95902c985c00078a67f9b4128bf8d5"
  },
  {
    "url": "assets/js/74.5ab72978.js",
    "revision": "f606dac4086f88075534bca4146f9a79"
  },
  {
    "url": "assets/js/75.b857e76b.js",
    "revision": "7138abe9a28cacf2d0316e46b96dd9a2"
  },
  {
    "url": "assets/js/76.a218f8bf.js",
    "revision": "c06ad1bd561dd62173189d3e13e71513"
  },
  {
    "url": "assets/js/77.417879ee.js",
    "revision": "20c736c6270f01aa6e76c29127367217"
  },
  {
    "url": "assets/js/78.0aa3edc4.js",
    "revision": "8b3117d7a2a2e1c0199e24fd12a0b591"
  },
  {
    "url": "assets/js/79.33bd17f8.js",
    "revision": "5815203453705cd3fea2a9c3b1b21ee2"
  },
  {
    "url": "assets/js/8.e0e09ba6.js",
    "revision": "a7ab55d6a0e272d8c878b99ff0e5d7c0"
  },
  {
    "url": "assets/js/80.b8f35565.js",
    "revision": "29badda1fa38cc45cfb3ba4fca1edf19"
  },
  {
    "url": "assets/js/81.1bc4c1b8.js",
    "revision": "e0dab65761d0e679e15130fc5fa335e3"
  },
  {
    "url": "assets/js/82.a358d48c.js",
    "revision": "6790d19c705d0de08c84d91ef383c567"
  },
  {
    "url": "assets/js/83.11276d94.js",
    "revision": "af823ffae85e0cb873988728d260fcae"
  },
  {
    "url": "assets/js/84.f370cf1a.js",
    "revision": "6d1a1b45895ffbf277ce0d6d50204f47"
  },
  {
    "url": "assets/js/85.72db3bd2.js",
    "revision": "bcb59c7fdfa87839244f63aa26cc3517"
  },
  {
    "url": "assets/js/86.b54bbabd.js",
    "revision": "52f54b686e59f4af2b52b01c8af6b272"
  },
  {
    "url": "assets/js/87.0a75670e.js",
    "revision": "64f1e8e633170c89605d1a8547989a8c"
  },
  {
    "url": "assets/js/88.59379263.js",
    "revision": "514889ea9043a78f89c55406531331d1"
  },
  {
    "url": "assets/js/9.6b44206c.js",
    "revision": "2bee2673c04e315266fc7a71569019f6"
  },
  {
    "url": "assets/js/app.b0a4ce1e.js",
    "revision": "577cd4ee4565b864936375b50c6db02a"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "332d9123e71c7442037e0bb12a7c9cee"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "240abe04d42b74bdb8dbc8ce1d909bc5"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "7cf8a19113b2b4d19485de4c965d6432"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "dea952ff482a1b0781101270e7758ef8"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "a12b717b955811ba190d7187adf50b4a"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "399483a0462474675bfc0675d90832d2"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "012fe17200ef57f4c1ceb665e85452ff"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "d9f830b5a7323287c83b7816a8dca03f"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "ca836e31dc411b8ccd030a9ac61bac79"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "d517c85a52da0fc641b91f6468ccbc00"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "c236024dab77b61474755d6271d3bfb7"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "85aca27cb50692a337a7824ef124278f"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "5afe5ec2b30079747997c683b068de46"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "a8802a8382daa648cd3c99ef8d9c8bb8"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "f8594334136529eb69e514abe1b4b749"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "35c02b39b3683b03985cec9d7d70d28b"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "bd5dc3351e6081db4ed2b19b9e84b6ba"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "3fefb54b8cec81ad95dd9a36512db2af"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "6a86eb146cafe7143784ab8b52ec2ebe"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "4dfc76347af41ed8cb1f75a8e3d27b5d"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "49138e83897f37105da1a56902ed96dd"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "0168cff677df380579b216c0ff654809"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "19e4924f9144f960604d173bb0a379ba"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "5abd4c473b24b0ef851b19dc006a3b2e"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "a3c60d42f27472275e671869aa0d6b2c"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "cd2668f5ce5eed64cd33da2a743dad6a"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "e410bfd205a08e285286d29fb3e19776"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "bfa6e1d0b14c916d35e8b0f447e754fa"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "ae0b566b3acb59869615093a6934de48"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "4e5c59aae77d04af090d8c124ce5718d"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "b4634b92c9983f2b614f3ece31acb651"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "044ba58563800ffddb37be7b0307c276"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "fbf1ce4579e9701121cd69cad7cef548"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "1e25bc7ca3c61223454f082c10a1054d"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "a645fe71c6d831dd53e8e75b5142f777"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "deca3c3fae80cc63df91b8feb13f85b7"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "1d060af50d3f913a2661ecbe4513a91e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "01145f15838e2af13225d15c54ad2ef7"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "7a05a7e49bedfc7c4057c124b8f0a28f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "ef89f9f8bd423c39b8a9c91518b30bc2"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "48511a5444f65bbfce6d8e537d7717c8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "ab405ae38a5e5c8a4d139a3d3f152159"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "34ef734bca649a05c9a101416f16425f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "cd163238789e3301480c3ccaa84495ac"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "cd6b2034bd6e02307ab24a56083a0dc2"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "eeec6913b0a8aea406fe0ea28cdd5d45"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "e9851b22aecd5aa3f9e9c55b9b584804"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "2830749d6bde870c71fe17d4b3c40f38"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "cd8b0c221a0539deb013398fd6bff178"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "72477ba80e1728860bce7f8006ee223e"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "d0dbba2a2cd97d706d855decd380dfe4"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "00d0384c29b1af0084897b51ffd83f44"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "2d25201c684f531008b45045e575d409"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "1a547f8274f5e79d9364c97c8c825a3a"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "be6ee34f12a04aac6337491380412d8a"
  },
  {
    "url": "blog/other/git.html",
    "revision": "5b51b6b851da11223527445c05275f1f"
  },
  {
    "url": "blog/other/index.html",
    "revision": "4cca56049d25ae9b6d56b38e43523cea"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "1d9ecf40ed84440c9f0acd5fe73f34a1"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "76a2dfa5e1a930ee2faa9436cf02abf3"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "1fd606fcb3073fbadc78328cb940ec6f"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "38949a0a2f250a07d030bed4b4ae10b3"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "7aec448529fa7d56c5a8efad388a587f"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "4eb0422a1c396920900760e4905b2c6c"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "2e7161ac0f7f5da80ac53b3eeeac8bb6"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "e20ab545abbd517727fdcec82ee4b5d4"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "5eed93bff90e74fa7bdd0e978bd6cc78"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "598e7d6716f4ed1b561ab28afa5653a3"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "bafb5fc350a548274ed9afd34641c473"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "001ea7eaf259feb0443eac5997ab6b53"
  },
  {
    "url": "blog/react/redux-toolkit.html",
    "revision": "bcb6c71210e3a6f4b7dd703542ccb088"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "a0f6e397510e0cdf069b10e290d13830"
  },
  {
    "url": "blog/react/virtualList.html",
    "revision": "17a1e64d6fda18b881abb6e969823c40"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "c729c5877d5db65b62d7c95965cce9d1"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "b0b47031718341d483058d354389e97b"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "9b0dcfa8325695a96ccbb549206d2b63"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "8fa23def0363f637300497481ac29161"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "1d2d5793d52324b381a55046f2038f89"
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
