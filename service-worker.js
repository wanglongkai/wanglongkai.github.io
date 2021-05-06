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
    "revision": "14698c1f37fce7e8cfe6b986f35e3d6c"
  },
  {
    "url": "assets/css/0.styles.d1d9bb2b.css",
    "revision": "c9350ffb710d6d2f21f322cc894418d6"
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
    "url": "assets/js/13.689517c3.js",
    "revision": "8d420b69d32125ec50c5ba0e5ad082ea"
  },
  {
    "url": "assets/js/14.f222a67a.js",
    "revision": "52bf0f8dd706d7bb43c7ad38b0d897c7"
  },
  {
    "url": "assets/js/15.b868aa6c.js",
    "revision": "0a1b6c48800da7bc48699d033f0d1e63"
  },
  {
    "url": "assets/js/16.aae0e7a7.js",
    "revision": "54b63f964a3e40f30f89ca40f09bc2dc"
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
    "url": "assets/js/20.977f7058.js",
    "revision": "cecf8e5a272f37817f3380d22203403a"
  },
  {
    "url": "assets/js/21.a85dc776.js",
    "revision": "e13b62084cda152544000e66b4a27726"
  },
  {
    "url": "assets/js/22.802fbb98.js",
    "revision": "87243ea1b690a76167a92e42a932b86a"
  },
  {
    "url": "assets/js/23.0741aa14.js",
    "revision": "9dd86c02fe861cf240c79579a8ce6f19"
  },
  {
    "url": "assets/js/24.aeca11e8.js",
    "revision": "d70b64318fe9c5b29cf97105b11b8250"
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
    "url": "assets/js/27.f6b4ac5e.js",
    "revision": "b436d6f100c952c31ba6dbb014c3604b"
  },
  {
    "url": "assets/js/28.69e48039.js",
    "revision": "45d15526b949807e0ebebc44d9014eb0"
  },
  {
    "url": "assets/js/29.0bb4f07f.js",
    "revision": "6de5389827b3f166bc1103add05f6e40"
  },
  {
    "url": "assets/js/3.cc2643ca.js",
    "revision": "56cb1eeff0cf67cbe442cc8c25d93da5"
  },
  {
    "url": "assets/js/30.3afa49c7.js",
    "revision": "bacffbbe18f623bfba2fda37a49d019f"
  },
  {
    "url": "assets/js/31.bd5dd138.js",
    "revision": "7882ad67c7d10b564669416b13996d61"
  },
  {
    "url": "assets/js/32.6a945532.js",
    "revision": "934ac97e587766e802cd83bce350cd47"
  },
  {
    "url": "assets/js/33.98d7c295.js",
    "revision": "779fc61779c496b66e78f2c43be3b340"
  },
  {
    "url": "assets/js/34.4843e006.js",
    "revision": "7454f162c919fbc62e96bf39da4c75d5"
  },
  {
    "url": "assets/js/35.86dfdab4.js",
    "revision": "a70f42ccba58c60f6aa3cd60b14bf00d"
  },
  {
    "url": "assets/js/36.8d8dd354.js",
    "revision": "a0d177b8de66acfd7335756977609c3a"
  },
  {
    "url": "assets/js/37.c66fa430.js",
    "revision": "3409de1520cd163e4b0a9696da562bc4"
  },
  {
    "url": "assets/js/38.377554b2.js",
    "revision": "7ac5a7820fa73f323f37bfc651c49eab"
  },
  {
    "url": "assets/js/39.ff678230.js",
    "revision": "e6862512c9fa1fb99710282517d2f72f"
  },
  {
    "url": "assets/js/4.ac9907d5.js",
    "revision": "bba8900c33adf917dcdd9fa818f26e34"
  },
  {
    "url": "assets/js/40.6aa70963.js",
    "revision": "980576ca92d8493a8ff04003258ca298"
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
    "url": "assets/js/43.fb323998.js",
    "revision": "0d83fea9b30d6a6ffd573a2f75daf998"
  },
  {
    "url": "assets/js/44.b2c8a254.js",
    "revision": "0a79c6a68947c5d3c4e55b19219eba7a"
  },
  {
    "url": "assets/js/45.41097247.js",
    "revision": "657c7005405bc23f261cdf5659936b24"
  },
  {
    "url": "assets/js/46.51d3a07a.js",
    "revision": "31b831d87d227787fd3d378df62e0900"
  },
  {
    "url": "assets/js/47.8f5f9129.js",
    "revision": "ecdbc8325b6c5a5dfe5e0f953fe9adaf"
  },
  {
    "url": "assets/js/48.6e940958.js",
    "revision": "62e4c439a7b28de09fd1ad201b7b9768"
  },
  {
    "url": "assets/js/49.fdb9ec32.js",
    "revision": "c30997a53fc5d07d5884512dd9e5c0dd"
  },
  {
    "url": "assets/js/5.8df1c9fd.js",
    "revision": "7fc3b9ff4ae8bc776dbe30d69bb9a547"
  },
  {
    "url": "assets/js/50.6819f8c5.js",
    "revision": "37e2779f3ed486b45d450d50eccb6f4f"
  },
  {
    "url": "assets/js/51.e66351f8.js",
    "revision": "8a486625765cadc70447a493674e9154"
  },
  {
    "url": "assets/js/52.20f35243.js",
    "revision": "e45e47669b24d50d5cdeee830f0b5157"
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
    "url": "assets/js/56.c85f67a6.js",
    "revision": "b647853058a5d05deab1fac0c308f880"
  },
  {
    "url": "assets/js/57.fa097110.js",
    "revision": "c11606e7da50925c8eac5cb65fdbf707"
  },
  {
    "url": "assets/js/58.ad67882e.js",
    "revision": "0c8c28300e8df48c6d660ffcd7692d43"
  },
  {
    "url": "assets/js/59.9d8dbce0.js",
    "revision": "11d2622204aec29d0ba9bc5a70f01983"
  },
  {
    "url": "assets/js/6.6690d1de.js",
    "revision": "f3e56cf82af83b3e7529f56bda67b25b"
  },
  {
    "url": "assets/js/60.d3f1c4a7.js",
    "revision": "a7c40ba0a0c24c2035c69809bcc70990"
  },
  {
    "url": "assets/js/61.1861aff5.js",
    "revision": "323b6a8ba80177626d535ea378e131d4"
  },
  {
    "url": "assets/js/62.084b32a8.js",
    "revision": "9ad273ccb4963dbe22d63a0a87cfd88f"
  },
  {
    "url": "assets/js/63.f15c6adf.js",
    "revision": "47206c876f0054fb3909703a69828655"
  },
  {
    "url": "assets/js/64.dbec6164.js",
    "revision": "a9b22f10643bd63d6c099a79591dbc42"
  },
  {
    "url": "assets/js/65.eb21374e.js",
    "revision": "2b2795bd8ae08117bfdc3ef22566af14"
  },
  {
    "url": "assets/js/66.2f873897.js",
    "revision": "46041829b44f391aef58d100bb87a9fd"
  },
  {
    "url": "assets/js/67.31ff366d.js",
    "revision": "2518236ec26cbb0d5793334843602919"
  },
  {
    "url": "assets/js/68.91cbe2cb.js",
    "revision": "fda8336d5708d2bce0bdf4091d2cd817"
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
    "url": "assets/js/73.5fa0ba99.js",
    "revision": "21d2595d3ba05901922194cedbbc4f80"
  },
  {
    "url": "assets/js/74.bf94d591.js",
    "revision": "c8e9e858733a14bba869c4705d79deac"
  },
  {
    "url": "assets/js/75.72ea94ef.js",
    "revision": "5339a5726ab4a299dd8e24bed0e1b29f"
  },
  {
    "url": "assets/js/76.c27d2ec6.js",
    "revision": "adee9609fc9e14535c25cd36f54f0fa7"
  },
  {
    "url": "assets/js/77.abe2ee22.js",
    "revision": "875a4347909a2437ad06ea00d0b83618"
  },
  {
    "url": "assets/js/78.a7941424.js",
    "revision": "c9920b405a27cb1b95c7bf55fcf1b4a1"
  },
  {
    "url": "assets/js/79.eca4e5d2.js",
    "revision": "f781657fb7b6d525dda80eb77c2a1419"
  },
  {
    "url": "assets/js/8.e576c660.js",
    "revision": "951a0df7a98fca806f4ab6cf1f1ca951"
  },
  {
    "url": "assets/js/80.bbbe21ac.js",
    "revision": "fb1e945995cd65dbd5d692226eb0c2e3"
  },
  {
    "url": "assets/js/81.f76d4579.js",
    "revision": "baa0cd45ba933aa6af89526d89a0aad4"
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
    "url": "assets/js/app.0c14c78c.js",
    "revision": "8a33dad10c03430cbbb70e141a94a74e"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "b8d8611493783dc59747aedbbdc6726d"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "fa740f9641defdd00ab94c1492e17f2d"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "d47410a388fb8a7f2fda0cdada417857"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "bc9ba3d45bf53e5b8110a8f7b3bab9e9"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "98f77eda28dad4ffcd20aad9be19212e"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "44e6bbff27a3d098115a8d0bb83b3872"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "364f609bb9fcfcd92fb115505503312f"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "b8ebafa4b3e78d5aec35853c4cf8b476"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "84a2f0066f8a2872511793f91d40603b"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "b363fbbb7e734896082cb9eb1b92dacc"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "5234abab2b8e47c455fd74ba73f45b34"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "d186c2811a4f85b5bde8acd0ab8852bd"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "702ee24ca3c081d983f9fba725bcf72f"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "9592b08bba13909ff42dd2ea2c4aafe2"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "580b81f21480a71a0e00608942910535"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "181db589fb0d6fa2772a5a0c7afbdf32"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "df15a7fabc094f03e70b83e6d6a8fad3"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "41bffd965174a37b8a097c29adecfab7"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "60e3fca020ce29ceed3314553e87b75e"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "70105566d4cf739f87735a6b79b8fd8f"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "826442b3ef69c507ede184eea0584f46"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "75c29c359e2bc9c108490a89ba6ad6d3"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "2a7aa53a11e9bd842cb87b1c5ebc54dd"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "f04261f803b8845b04952f65e192a850"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "6ac544dda90c6e7a2d408659eb5bc1e4"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "239964b4f14f98997d6ea336d22f6d78"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "4c01d070894ed133be80fac39bb7aa37"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "01ad24552c0fb5e7e49bf2c5d60a4238"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "ac0bfe2826a18ecb074e18b162a95136"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "f98250da8d1dfdc41be49ae3bcf2b20c"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "8cb63df90123df3276ab7ed5ccf7393f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "cfd8c496a15e79451f80d87b64b81bbe"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "3239b55d6699089251e4b3342a8e9724"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "4991d967de4083bde83143f8564432dd"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "c19762d2ab42e4a1bec82cc6d14a6229"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "79cb20ef8d5fbf9f53f8e58072d49c9e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "e85c06c452eee1d482b13eabcb2e7a87"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "48827ebcb4858196d3214cedb6ab58bb"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "f69b6b6c286c91b5f85a32887d6ead79"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "b3d9d1ee07835da391fd0a3864c76aff"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "dfc0f1944a2d5c1c5d562443914187f2"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "362cb768a6389db54dc0fb32ffcf89dc"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "a490962d20630fa35d6a6954a70eb474"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "559ffdd9bbba4a4d578f0dce59cf761d"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "711d5feebc19d6a24d380592c59bf02f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "e21b9bac49efd1c0973d81bb30b7df58"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "eb3d51f16f55aa94afe7ec59b8176bc0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "25ad9c1cb6a0572f3fd807ebf6ec2cb1"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "45fd5255157f770d69220a1593b85a20"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "472e3e25af1816388c1eca68b20f58ec"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "534fd66fac8b75127afde17014692c8c"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "ec1f8baf1c47c8f137c39a1ea98592d5"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "167c2fbc6725f0e26d30d99e07f6efbe"
  },
  {
    "url": "blog/other/git.html",
    "revision": "4d30e5ef0e342de9ead5d109b1f47503"
  },
  {
    "url": "blog/other/index.html",
    "revision": "e48b63e1a8fdeb730d9ecabb2ff7cba4"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "c2b93b1a557279b5c1309f865c1310b5"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "f609faa1aa41ec3ad2d6e5d9b9ed0509"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "43cb855cbfdde371113d331fffd6d03a"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "a4b32864a79817c53de7371e5d93d0cd"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "b739be685e04b3514018b7f0991b609c"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "e27a576e474596d0e589489495a59e4c"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "4e8a90dcfb8a1e749460dc7fcb6fbb64"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "f8211ba8a3fceb8c31c8c5945bdc3439"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "cbe2075a6e0301200acdaee0b1c12740"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "9a21a2c159a95bac6cfbc828f54d7a94"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "d122e419fd9e67fead5a2a2f2c600dea"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "1bde4577fd9ddab7b1995d548435d84e"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "9bd2581baab54d3731e637771abdb7bb"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "b1e3fbd5a493f5dff5f05c33f2a76410"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "bc656eea1d14a76817a5af87b012bfe8"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "fb9fec4c29bd2984dbfd73d63c0653bc"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "78407cd58497f1550f658ed38e0bcbc0"
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
