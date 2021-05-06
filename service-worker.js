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
    "revision": "0cc498daafd3088f420858962522cd24"
  },
  {
    "url": "assets/css/0.styles.262b31d0.css",
    "revision": "6b56f71902bb0d09e95bc25f9ee1d068"
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
    "url": "assets/js/10.079934ec.js",
    "revision": "130f1ec002aa5f59e985762202f63a1e"
  },
  {
    "url": "assets/js/11.612cee03.js",
    "revision": "eec02a11381cc5bfdf3205d4c2b938dc"
  },
  {
    "url": "assets/js/12.ffb016d1.js",
    "revision": "4b644342ee82929c49d1772ac0f97477"
  },
  {
    "url": "assets/js/13.0d15f5e6.js",
    "revision": "2276dbb5ed59b01cb5007b155f134b04"
  },
  {
    "url": "assets/js/14.f222a67a.js",
    "revision": "52bf0f8dd706d7bb43c7ad38b0d897c7"
  },
  {
    "url": "assets/js/15.d7a7cc4d.js",
    "revision": "eb9fda12d9a4f3d576354f52b2160376"
  },
  {
    "url": "assets/js/16.79b01f8e.js",
    "revision": "701dba461735724c23ba6e1c94003ca2"
  },
  {
    "url": "assets/js/17.2a41ddcc.js",
    "revision": "5bc3efc699dfe915d0407c722a95d1d7"
  },
  {
    "url": "assets/js/18.395a34e1.js",
    "revision": "2efcd7810bb732b83f718813b91b510f"
  },
  {
    "url": "assets/js/19.6ce5ae4b.js",
    "revision": "9fbb6850a7efc0a43ef58df85c26e3bb"
  },
  {
    "url": "assets/js/2.df3fb21f.js",
    "revision": "68eefee47df5c6e9813f2980aefdd7c8"
  },
  {
    "url": "assets/js/20.762eb605.js",
    "revision": "2b5440d9343a2332f4032b539355bdf2"
  },
  {
    "url": "assets/js/21.fce8aea5.js",
    "revision": "88d3a9f9b1bc825faa7d62a6163669d7"
  },
  {
    "url": "assets/js/22.24c06031.js",
    "revision": "678dec8e25db4c8596468c0cecc6332f"
  },
  {
    "url": "assets/js/23.6f80cba8.js",
    "revision": "47065541bdbcedfd6faa7415285506c1"
  },
  {
    "url": "assets/js/24.ae3a433b.js",
    "revision": "58175f0ff59267aedd861ca298932ec1"
  },
  {
    "url": "assets/js/25.3aa11e5c.js",
    "revision": "c3ef8b01b61e2917be1ea7e5a9592d21"
  },
  {
    "url": "assets/js/26.b70e0515.js",
    "revision": "2967f39232b45f280de19d5d96066c82"
  },
  {
    "url": "assets/js/27.24fd760b.js",
    "revision": "0985564b46ef08ad2033a232f2686c98"
  },
  {
    "url": "assets/js/28.540dddf3.js",
    "revision": "8e59139368d9706886c6ed0726cc253a"
  },
  {
    "url": "assets/js/29.0bb4f07f.js",
    "revision": "6de5389827b3f166bc1103add05f6e40"
  },
  {
    "url": "assets/js/3.6e8a01cc.js",
    "revision": "144e5776951e8b8c09a95521e17d1066"
  },
  {
    "url": "assets/js/30.d7b3f371.js",
    "revision": "564f6e2f87efa200aeeb72b36beda89b"
  },
  {
    "url": "assets/js/31.bd5dd138.js",
    "revision": "7882ad67c7d10b564669416b13996d61"
  },
  {
    "url": "assets/js/32.87944081.js",
    "revision": "451841cd75b582d774c6c51862eb0fad"
  },
  {
    "url": "assets/js/33.9ab1d745.js",
    "revision": "99146f4e2547fd3d5db4e75aec3a969b"
  },
  {
    "url": "assets/js/34.0d4c71d6.js",
    "revision": "0ad06fba8f040728a505eafb952b2bd2"
  },
  {
    "url": "assets/js/35.87536488.js",
    "revision": "8cf784c6273aa596d1358db762424559"
  },
  {
    "url": "assets/js/36.8d8dd354.js",
    "revision": "a0d177b8de66acfd7335756977609c3a"
  },
  {
    "url": "assets/js/37.216a3def.js",
    "revision": "faff8db95650cd721070f39954d87b41"
  },
  {
    "url": "assets/js/38.377554b2.js",
    "revision": "7ac5a7820fa73f323f37bfc651c49eab"
  },
  {
    "url": "assets/js/39.4fbcbef9.js",
    "revision": "4906c46e1a7d2530a47f171769856d51"
  },
  {
    "url": "assets/js/4.0a97cf23.js",
    "revision": "d5b8f02c2942c1fae1e918dd8e20664e"
  },
  {
    "url": "assets/js/40.f0170102.js",
    "revision": "786bf156b89b4429817749b18c1c376c"
  },
  {
    "url": "assets/js/41.412fbe90.js",
    "revision": "eb60d496be82ce416e9abad9e383a9a8"
  },
  {
    "url": "assets/js/42.f75f49c7.js",
    "revision": "9ce33bc4a02cc5010b5770452a912d1e"
  },
  {
    "url": "assets/js/43.980caa8d.js",
    "revision": "45c511ed5b563b9f68b6db6587be7034"
  },
  {
    "url": "assets/js/44.94a98093.js",
    "revision": "8c12b05e7cff52d4e0129768df2332ed"
  },
  {
    "url": "assets/js/45.41097247.js",
    "revision": "657c7005405bc23f261cdf5659936b24"
  },
  {
    "url": "assets/js/46.0951117e.js",
    "revision": "206d4b6a0bae765b355145105b87d646"
  },
  {
    "url": "assets/js/47.bdc51465.js",
    "revision": "6aa45b9d2574086716f7b01c134f4e12"
  },
  {
    "url": "assets/js/48.7bf5fd63.js",
    "revision": "c409f2f0e32ee04fcde196773034ecbe"
  },
  {
    "url": "assets/js/49.6eca350a.js",
    "revision": "ebef5d98f3c4a907e1f2c9893d94c3b6"
  },
  {
    "url": "assets/js/5.8df1c9fd.js",
    "revision": "7fc3b9ff4ae8bc776dbe30d69bb9a547"
  },
  {
    "url": "assets/js/50.b7bebcfc.js",
    "revision": "372468db6d75b4b942064c0c6624fbc6"
  },
  {
    "url": "assets/js/51.7c77b9bd.js",
    "revision": "44e92f1ae37a7e9eb9f003afc8234295"
  },
  {
    "url": "assets/js/52.9f92807b.js",
    "revision": "7d4b0cb7b3126d5abf5f51ede5300b50"
  },
  {
    "url": "assets/js/53.e29d7943.js",
    "revision": "98b7a59dc628dc2d046aa72cb0c4e6d7"
  },
  {
    "url": "assets/js/54.1e50a9ea.js",
    "revision": "d584dd9dc39aba7898cc9330ba4557ed"
  },
  {
    "url": "assets/js/55.e1eb19fe.js",
    "revision": "1d7219a8f87157bbc13c6fcf9a9f4806"
  },
  {
    "url": "assets/js/56.cc64078b.js",
    "revision": "7eebf5aff542b8fd7095be3619a71415"
  },
  {
    "url": "assets/js/57.635c8c22.js",
    "revision": "3c028a3194e8256997b02bf870bdc3db"
  },
  {
    "url": "assets/js/58.857c2d26.js",
    "revision": "e973693087e836233fb59b2da5140dad"
  },
  {
    "url": "assets/js/59.f629d5c2.js",
    "revision": "6b44894511f6a3d04538e1d81f83b7fd"
  },
  {
    "url": "assets/js/6.6690d1de.js",
    "revision": "f3e56cf82af83b3e7529f56bda67b25b"
  },
  {
    "url": "assets/js/60.f7a2e593.js",
    "revision": "d9b44217da2774ac0ed2006965ae611f"
  },
  {
    "url": "assets/js/61.22283711.js",
    "revision": "10103dd94ba82b491f5e56fb71f2d84c"
  },
  {
    "url": "assets/js/62.7213ba01.js",
    "revision": "498f2f4e3dc15d1d6ff8e1f8ca4b520a"
  },
  {
    "url": "assets/js/63.b6cbb480.js",
    "revision": "cb8aabdd30f4e5db936a1a7760edcae2"
  },
  {
    "url": "assets/js/64.50f82491.js",
    "revision": "60aa8a18a30e573751f4f6adf86ec75f"
  },
  {
    "url": "assets/js/65.eb21374e.js",
    "revision": "2b2795bd8ae08117bfdc3ef22566af14"
  },
  {
    "url": "assets/js/66.8fd06fa0.js",
    "revision": "d2f25d4ede9c4d64818e08cb7e6f4fe8"
  },
  {
    "url": "assets/js/67.b12f6013.js",
    "revision": "b93fcc2e06b66e2fca6a99383ad3d180"
  },
  {
    "url": "assets/js/68.613108d6.js",
    "revision": "777b4d2a89bdc0343ccc99ec90fc9ea5"
  },
  {
    "url": "assets/js/69.292b9092.js",
    "revision": "89a5e44e9e58dac8f97af857841dafd6"
  },
  {
    "url": "assets/js/7.3b6600bd.js",
    "revision": "3c0f32e18f71c854406f01c7adfbd2ad"
  },
  {
    "url": "assets/js/70.3cad693f.js",
    "revision": "da27da3fe7242887b220ae0f1095be4c"
  },
  {
    "url": "assets/js/71.1a156e09.js",
    "revision": "4d6fe55c0485554115f4b3b5949224f5"
  },
  {
    "url": "assets/js/72.6284d4f1.js",
    "revision": "f13f95e3f747f76a29e7af8b336305d1"
  },
  {
    "url": "assets/js/73.c2d91c11.js",
    "revision": "719b786c0f2617ae370e7749ebeda522"
  },
  {
    "url": "assets/js/74.35b93487.js",
    "revision": "080804fdea55778929b023031d6f7dde"
  },
  {
    "url": "assets/js/75.72ea94ef.js",
    "revision": "5339a5726ab4a299dd8e24bed0e1b29f"
  },
  {
    "url": "assets/js/76.595164b9.js",
    "revision": "0af4f3319c2c0cd2df427931db0a9e54"
  },
  {
    "url": "assets/js/77.8e81425b.js",
    "revision": "bdd4e36bf988374c71df52e8d1746037"
  },
  {
    "url": "assets/js/78.da590014.js",
    "revision": "22f6f0d14684bb41782b9562b9b378d2"
  },
  {
    "url": "assets/js/79.0c68d18f.js",
    "revision": "db9eb8ab0806227a9574bf4cc48918d6"
  },
  {
    "url": "assets/js/8.e576c660.js",
    "revision": "951a0df7a98fca806f4ab6cf1f1ca951"
  },
  {
    "url": "assets/js/80.bfbef6eb.js",
    "revision": "9915da648cf577ec3eb7836d818ee36e"
  },
  {
    "url": "assets/js/81.2297672f.js",
    "revision": "7b7dc086fa0644990166e92cafda0fcf"
  },
  {
    "url": "assets/js/82.1e1b6a7f.js",
    "revision": "bf7b532a08a78bffa320a06c887f6488"
  },
  {
    "url": "assets/js/83.4a2a590f.js",
    "revision": "b5eaa0c533ea156c3ed21da2f0211d7a"
  },
  {
    "url": "assets/js/9.7cecbded.js",
    "revision": "8b7de58200e7fa50dd843ee671f34406"
  },
  {
    "url": "assets/js/app.e3be854c.js",
    "revision": "1729043808546c059300cb29e93e11dd"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "c0a8abea490c212c50c3b929987f54ce"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "638fd43cf4ccd3b1ca7e49e558a9f0f1"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "790c1ff0ee5a1a5500faec33a43a1f0c"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "7e3ca0a830c5eb900f0fca7b0eccce01"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "da8ca839787d74239c7a6de5f4f59ae6"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "a8aa8b75f3e76dd96da35d7fe3bf22c9"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "96487d675734bbfab1c1cc57d573a2f9"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "3190b7125b3c5372365a1a32a685abed"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "a60fe55f6cabf5744eb98af9a28f8b07"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "07d6ad51152e8b65aae3fadcc506737f"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "352784a13b6a7dcad7e264e16be849db"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "566d958730dcc752827a91f1b8b1baa2"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "a33de250f5f09fdc61352f6cc65e2ecc"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "41e14bc89330074ff0d5e160a8a60ff7"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "28183348733514c9c52f2af1c7ea0367"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "3a8aabea42e692bd13f889c23c19a624"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "8f213884bd8b14867a65fcf80694377f"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "5bdfddb2cde9e9fcc410f163374fff8b"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "a42bea06a0c6fb229ffc0fe26fd7dafa"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "752cba87cd19b74237b1ec10a6b7640a"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "79c7c9624ec756c2d3a6e225c5464694"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "49adb7c1cbf307930b85def316a7df8a"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "15739b35ede568eb1fbc826d3bdc1884"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "73a6e6242cf3ad778518c2ca9c2383d5"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "96476b76a7ccd55966de2ebeb7571774"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "b6c86f59e795ee70f74b52d862c1e96f"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "e06300802edbbda6741ac2a52998adc2"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "ec7fe2abed8d84c72d9ffbe89914c4af"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "6679618b8a0daac1a3a89f374f52be10"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "083b5eb7b067d518f8fa2f66a3ee85e1"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "f1dce3a0c8d7d4d6a9480e8a3eb3c0e9"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "27936b1e8844331491be9aa4eb3a581f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "49e8464b75c48cb35b688da00da766fe"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "7201169bc8eb31d0bc137fbae2a40359"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "804f92968d60d186aefd21115058e912"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "09d0667472b5b819a06b87be6a078bc1"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "c460c9cc0b95af30bdfc898541cf4e71"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "9e2959f5ec5c8d7bcea314c8ba2ff6ba"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "43fb877c4afd4cc84aa1cc6c8a6d44e6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "3ff6b5d330d16c52fef27c9f69218b21"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "246a82f2bb1fcdfd5d541a38fcd087fd"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "683ad10e02231ad2c73accfbcac8a955"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "160571d9d210d5f5f7eafde7c4458c92"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "59c4723d2b4bf2fcc99ed506f431b7a0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "0b060f63963a7dee4ee9806459e6b126"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "c2a32b02773b92d66bda1f81e2ec11ce"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "661f9884f036b3a5c339c56d33b4dd2b"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "c1061cd7ce01ef043cc9017bb783fcad"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "3c432b7a7ea1a5b2d3fa622cf81304a7"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "4e64f33f2ed63fdd56bb93b8da606a30"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "dd56c579a854e3af003d06018e2520a3"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "7d9f38b41fd63ab883aa3826b7b98db6"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "90aca7d1e5ac2bf0ebeb5be8360fd746"
  },
  {
    "url": "blog/other/git.html",
    "revision": "0890ee9e994d2943a2eff04a7cc20cf7"
  },
  {
    "url": "blog/other/index.html",
    "revision": "dc4852bf7c7cbe3f2ace1171ab55d39f"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "b6186371fc271266f63c95735eb7c912"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "0c48aa8bc15cfaa1e7073dbf814d3a48"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "d9c60fcb9f3a1ffcf7f9049a5d7f647b"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "e5323c3f666aaf1a94a20eadbdbd8c48"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "b28f0a1c82ed1c8339721c0a520163a4"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "8d3afed2eca15f090d467644b01be124"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "2650cc8c48f6f3a29593f1ddb946e09f"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "57a99e5224be7438afac59125c2b1c9c"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "a63c95bd486a325dbf746a540f0f162d"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "c90fc475116a3d9ffc93a9a89f8016e3"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "22ae63abdc7f6781fa7da296c2ef5e69"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "a235d6f2902b6d6d66bd44eec61c0a5a"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "f52be715ef59f9fe480b1fc6f6aa4bb6"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "5a811dbe451c5db6bf1c42624eb736c2"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "1b41bbf0b215b2f71095f49dec356634"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "7f0b2a658fcc8d4e5da84ed6b95d2689"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "04735c164e79c9b30383e4a458538f7c"
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
