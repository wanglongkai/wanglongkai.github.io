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
    "revision": "d17034ac348bfbcfa21bb3c2ef48b5dc"
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
    "url": "assets/js/10.f30a488b.js",
    "revision": "cea24ede7ddfe96431f4be0ff9341156"
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
    "url": "assets/js/14.2cddf8df.js",
    "revision": "9efc2ba33be6802484cc8b049b07a30a"
  },
  {
    "url": "assets/js/15.0dd9413e.js",
    "revision": "3364113e32558fdbba224b2b8c18ec28"
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
    "url": "assets/js/18.45724753.js",
    "revision": "5f916d00d11feef122dfde1b11a2f2eb"
  },
  {
    "url": "assets/js/19.4604ff9b.js",
    "revision": "5b992d6fca08320b2c40ac6e7e3afa5e"
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
    "url": "assets/js/21.3f0829ba.js",
    "revision": "f79046a95a7cb72c6c939b2e38dbbaab"
  },
  {
    "url": "assets/js/22.8a181f30.js",
    "revision": "aebe86e5c7e89387f1267120e30200c1"
  },
  {
    "url": "assets/js/23.a84aaaef.js",
    "revision": "af9063da65ddb03f52a65024832ce8cd"
  },
  {
    "url": "assets/js/24.cf90084d.js",
    "revision": "e823a4c5e822ff1ac6b4c76ed13ec7aa"
  },
  {
    "url": "assets/js/25.39b46bcf.js",
    "revision": "f33a7bcee3a0d8ba4a2e3843571d5c49"
  },
  {
    "url": "assets/js/26.c03f2e20.js",
    "revision": "8f83691d9e498bf820770c862eb08244"
  },
  {
    "url": "assets/js/27.f5c795fc.js",
    "revision": "29a58e4ed0753211ef810d10725f9c8f"
  },
  {
    "url": "assets/js/28.d2937d8e.js",
    "revision": "13fda5927b72e5785b5427e46d13322f"
  },
  {
    "url": "assets/js/29.ddfc2aa2.js",
    "revision": "e2b377fb5e4e0eefe828fe1f97fab590"
  },
  {
    "url": "assets/js/3.bc9338a4.js",
    "revision": "33435560e8f6e601e944e2f8da5be10c"
  },
  {
    "url": "assets/js/30.7f4a9f1e.js",
    "revision": "1070f0f691ae81aa91d90e5d3f13eac1"
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
    "url": "assets/js/33.b0803a18.js",
    "revision": "fb4cb800e0fc770738a21a33648599a8"
  },
  {
    "url": "assets/js/34.0d960b29.js",
    "revision": "470df335314f37c7a93c3a9e43d5d10f"
  },
  {
    "url": "assets/js/35.73c58f77.js",
    "revision": "f05b37df6fe649471ad59d23946b92e0"
  },
  {
    "url": "assets/js/36.fb79491f.js",
    "revision": "88e4510365405a3d9fe3d3bce62f3c2c"
  },
  {
    "url": "assets/js/37.dd87dc0b.js",
    "revision": "be418947c1d11b557358e21747fdca7b"
  },
  {
    "url": "assets/js/38.b6087d40.js",
    "revision": "41b9a3b2e5cd9358f50fc9f04c440984"
  },
  {
    "url": "assets/js/39.525e1ff1.js",
    "revision": "5792da54f7c7bb12f4fc1a68535b598d"
  },
  {
    "url": "assets/js/4.c371a99b.js",
    "revision": "ceb78103a61a5fb00ce56febcc0e51e7"
  },
  {
    "url": "assets/js/40.9bcbb1b4.js",
    "revision": "a69c60706e1af6627cf8e82e4fe5b5e7"
  },
  {
    "url": "assets/js/41.eb375da1.js",
    "revision": "4b6c24a6838e11662038b53eac89fb1a"
  },
  {
    "url": "assets/js/42.39244724.js",
    "revision": "03342acfca34f5006edac9b680f8e8bc"
  },
  {
    "url": "assets/js/43.aa8cc2a3.js",
    "revision": "053b55a4e6fedf2c0928b5817ea06444"
  },
  {
    "url": "assets/js/44.5d103a1c.js",
    "revision": "b5fa7c123336fffbebef8de6e7f850c9"
  },
  {
    "url": "assets/js/45.b24dab11.js",
    "revision": "137c80112e27906d5aaccc5f9988b1be"
  },
  {
    "url": "assets/js/46.2d169110.js",
    "revision": "2443c40e19a5667b841ac92090ed3d9f"
  },
  {
    "url": "assets/js/47.f7908450.js",
    "revision": "98b2877c8c76554e6c871245209fcaf8"
  },
  {
    "url": "assets/js/48.0d0ee781.js",
    "revision": "332f42f96103481aae8ec067bbdf7978"
  },
  {
    "url": "assets/js/49.fd49ec9b.js",
    "revision": "b86566b57001c65681f2efde558db638"
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
    "url": "assets/js/51.97a83311.js",
    "revision": "151c9c5dba46c85c3ce84bd6d33b4192"
  },
  {
    "url": "assets/js/52.3c22f0a2.js",
    "revision": "98fa4c8f30fe364998ba502de4e47b45"
  },
  {
    "url": "assets/js/53.8667cc20.js",
    "revision": "6d948322cde641509b02e2931c7d05ab"
  },
  {
    "url": "assets/js/54.2e331abb.js",
    "revision": "6c872faf55c50745a75f05c2214768fd"
  },
  {
    "url": "assets/js/55.70fd9878.js",
    "revision": "a134dd28b8a91fbeae9a0ff3aa2eb6ed"
  },
  {
    "url": "assets/js/56.8ffb6d99.js",
    "revision": "edc4fb3283e823379b76dbd45f377f73"
  },
  {
    "url": "assets/js/57.f162cce1.js",
    "revision": "44602e52057804c3fd0d25c0fbffcfe4"
  },
  {
    "url": "assets/js/58.8b75f9a4.js",
    "revision": "4e8928975c1027916dc3f18c04a98247"
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
    "url": "assets/js/60.59b6bb75.js",
    "revision": "f1c8b252f022a4aff594a23be2150cb1"
  },
  {
    "url": "assets/js/61.ed7133b8.js",
    "revision": "26c59694b7b49928f751e563e81636fb"
  },
  {
    "url": "assets/js/62.015b3a42.js",
    "revision": "fca7f92796d49396bc56f141ef29e5ed"
  },
  {
    "url": "assets/js/63.704c5a80.js",
    "revision": "de427af10f8b4d16ca787e44c19acbb2"
  },
  {
    "url": "assets/js/64.f78cb7b5.js",
    "revision": "0d1ca94516eca21da5707669751e8acb"
  },
  {
    "url": "assets/js/65.635aed4b.js",
    "revision": "2e29a8b0db7bd422fba79e80685f1657"
  },
  {
    "url": "assets/js/66.15210cb0.js",
    "revision": "aec662b19fc0743c09c561b475b5548e"
  },
  {
    "url": "assets/js/67.9f497606.js",
    "revision": "c2ca7fc3754ed88a6fe3bbe23db2978c"
  },
  {
    "url": "assets/js/68.38369664.js",
    "revision": "e014933c7c0d2c7f04cc68df3ef249dd"
  },
  {
    "url": "assets/js/69.7a140b75.js",
    "revision": "703916d1842db102b68c8cf2f0c1da9c"
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
    "url": "assets/js/71.63ffcfc4.js",
    "revision": "ba9a29352e15bf7d48fa3e6b24fb0ce2"
  },
  {
    "url": "assets/js/72.0ef56144.js",
    "revision": "ce1695657408838292a24132ebc434bf"
  },
  {
    "url": "assets/js/73.0566a4fa.js",
    "revision": "e2faa3736a2bec92faba204d7883f122"
  },
  {
    "url": "assets/js/74.9fd87955.js",
    "revision": "e68bfce906fdd23821f6d984905f86a9"
  },
  {
    "url": "assets/js/75.ca12d16f.js",
    "revision": "a43b78aeca2969584e6e0125b753bc75"
  },
  {
    "url": "assets/js/76.4fa1a935.js",
    "revision": "3af415243cd8e94238724654c7f14135"
  },
  {
    "url": "assets/js/77.645c710e.js",
    "revision": "fe62a876ec312e8dd96292b4366d82e5"
  },
  {
    "url": "assets/js/78.4cf4f8ed.js",
    "revision": "29899ff40ffb0abda08723979eb4c416"
  },
  {
    "url": "assets/js/79.1157156c.js",
    "revision": "9fd6b879e922b2d0f86962b46e15d9f2"
  },
  {
    "url": "assets/js/8.e840d0f8.js",
    "revision": "5f6955d7d3ea233804ec1f5e4995ae06"
  },
  {
    "url": "assets/js/80.c21f5fd6.js",
    "revision": "86df5f9a0f304bb2c72e88413152de15"
  },
  {
    "url": "assets/js/81.d11548b3.js",
    "revision": "deb97d5995d65d8002ad2f4d1be6a7c8"
  },
  {
    "url": "assets/js/82.db11084c.js",
    "revision": "c7eff68f254fd63a578766e21c26b5cf"
  },
  {
    "url": "assets/js/83.046e0255.js",
    "revision": "772766c4506c55280d13323ebc7b78b5"
  },
  {
    "url": "assets/js/84.abbe6d8d.js",
    "revision": "2c66087f76de64ae660b98bd5eced6d2"
  },
  {
    "url": "assets/js/85.97acdfab.js",
    "revision": "48efcc8879d145221c3705dbdb61a5b7"
  },
  {
    "url": "assets/js/86.e4f6ad6c.js",
    "revision": "49cf7eb87775a3f902027112ec47f8ea"
  },
  {
    "url": "assets/js/87.d9da9c94.js",
    "revision": "8f05b616fae479284638bfce1e82c6d2"
  },
  {
    "url": "assets/js/9.58f2bd3e.js",
    "revision": "471fb8ce291bf14a009033b3856cf6df"
  },
  {
    "url": "assets/js/app.bac029b3.js",
    "revision": "7950d18b92b41ad28d8a7b6db9f252e1"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "427310dca02657336886da976adbaf8c"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "86e9070b575fa1a458ff4df7ae793654"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "c7550c479c941218d960c42d886c8fba"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "a9ca78f6d3b443d8e1616c999d81360f"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "607b945082404d7a3306b305fa80e29f"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "3e99c485d90fb4080e3ec8bcb30e4026"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "7f086718511e44e5eb025b4b51dfa80f"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "1a8f9cc409bc891b188402a25eb8563c"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "f1c14865ab358966e3f48915f0347a8c"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "0dbc064c53a4d8af5f589c6531d2c5ba"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "25336df21868b57a594677b13f18db8b"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "a94356d4bd492ae316994d1feb1f5fcd"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "be6909b18ec36313dc20c4021e431925"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "a8eb37dd19df8c7c16353a01ec5b4302"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "8f8acff994d22d681aeb3e1a89f22403"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "1503c2adfedcabc6c81acfa41f56c340"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "7d808c77c27432bbd093e1f81bb92d73"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "9226be10e9b13ef4420a97716bfc768e"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "9152f1d3c1e068af46020fd22169a15e"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "4b3cbefcf44f9034d6e0ed3c40db3305"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "531055eea15e470c65df12d3360abc79"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "81c5a794de8c773c52b4b774d25bf1e8"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "4bb751786e2e6e6d1ef39e0343a39e9b"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "c671dd61834aba5710725cd073d3b635"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "2ce44c73253d9c42fd2d755a7667f2c1"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "bf578e3e2e4657cf71c2ba8a0910cb11"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "2f4bdc00bcf4caa8e72be7f802a48637"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "3fdceb5fab18386a11db8c041b04b377"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "7c7e4de647ac99b916f99bbd5b8fa36a"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "6dbe6416e966ae8ad2e3db0745e7b832"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "da22b4eeff24c1d66a735c14aca2310f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "04755414d9be84cd155b7a3e405f4029"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "11b1635be3b2c3b9b1f08aca27eb2509"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "7c41a578484d2d768caaa737fc419842"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "d0d8f8f68c99ef5c7901895e2f066f0f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "6389da996b3bfda8be1e8365f261394d"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "7e7ccd609567515b432c6c036847636f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "347fda26cd4a86397663166339af2d40"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "329c28ed7b912d2805aaf479c66c0b85"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "d6ef627e60ee42bba7b405750783c9c6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "ca174271977c889feb77434a38542fc8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "33a1d413159686b01055764be8bcae2f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "ec23686678beb97b96cb5d5decf73649"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "6ab266abbd90c420784bbd980b65da4a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "779e71b3a33627af9616cf396d057c2b"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "871e19eec2a3cb92c8808a91ad77d52f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "eb55fa0c7c0d59edf78629bc7e9f3b1e"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "a3b0f38dde0364f028b97cd13f6f83e6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "3a412e1198efd0dccc0d23db8fcd4e75"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "c747841aeaed41eed754347366ab779f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "e89ff877ec407549ff99394a8b76f023"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "19fe972b9c9182faa41504095db299ca"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "82d8b0a021f6e22912ea9f044f393764"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "b17ed80024ba5e6b8f7fe11f37e0a588"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "df66fdcb3be9da772472d39735f2e1ad"
  },
  {
    "url": "blog/other/git.html",
    "revision": "f3d5f60de5a9a377b3225e95a0f0b837"
  },
  {
    "url": "blog/other/index.html",
    "revision": "9de22fcb2756a3535e74f3aeeed0e715"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "f675d883f5d6fedbf21785a5baf58ecd"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "7c49c1d297e2dec72d8f1d689715e86f"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "528867bf18e6267016e4dc1a107801de"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "f9d5f0360237903eba46570ec9811329"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "a7079be7cdf44844be32934ce35242c8"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "5284ae98fb37fefc3ce9c9625a3004ee"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "8a158e623db973966b873456f04552e3"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "6c2c871ff3fd3f3fcf3904f5421f16dd"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "b1ecea1ccf38ec13c9ed1adadbb137d5"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "c0eb5b5912fea00072c31b349b358402"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "c41a380bcfd9db0fce5033649f17714e"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "64c16c5f5e827dbb634d8295c0e74aa1"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "59362b5c42c668514b4c0ae86e7199bc"
  },
  {
    "url": "blog/react/virtualList.html",
    "revision": "4f2ab977fec2728da649df19664fd253"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "e881c5dafe95e5836d1edc6a49ac095b"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "194490cbb87e2020e8416c78a929cbd8"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "b94cd43e00b318e4fce6b24d22349aaa"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "24506e11c5e6b320d4b916b9d16fee13"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "782529a36ca9644502309b2baccce3e2"
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
