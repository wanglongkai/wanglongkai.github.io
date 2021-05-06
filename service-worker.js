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
    "revision": "af0bb66bbd1182f5df1304eabcb9405b"
  },
  {
    "url": "assets/css/0.styles.42b38289.css",
    "revision": "aee424a01b4157ebd604880284ae0512"
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
    "url": "assets/js/12.a2119d3a.js",
    "revision": "cea319a8b9f7287288eb01bc83a385d7"
  },
  {
    "url": "assets/js/13.d3468fc4.js",
    "revision": "32b7ae90555f8ea95e1a3bdfe157bac1"
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
    "url": "assets/js/17.d7bf1e72.js",
    "revision": "1233c59abf9bcf99840cee34498440ac"
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
    "url": "assets/js/21.0a0707d5.js",
    "revision": "0b03073d5611ddac00959040f2375914"
  },
  {
    "url": "assets/js/22.182880d0.js",
    "revision": "7efc66339b7b85f61c81dabc5454d06a"
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
    "url": "assets/js/28.06e5d1cc.js",
    "revision": "80989449fb9dfb65c7b18e1535282455"
  },
  {
    "url": "assets/js/29.bd4e0213.js",
    "revision": "1128af7614ca15e96e498d9390ef80b6"
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
    "url": "assets/js/32.fe891611.js",
    "revision": "aaa290c07e8b0a7bfa1e966580f39ed8"
  },
  {
    "url": "assets/js/33.9ab1d745.js",
    "revision": "99146f4e2547fd3d5db4e75aec3a969b"
  },
  {
    "url": "assets/js/34.67440a8b.js",
    "revision": "3f1cfc2e21ffe05bd887f2db26446994"
  },
  {
    "url": "assets/js/35.86dfdab4.js",
    "revision": "a70f42ccba58c60f6aa3cd60b14bf00d"
  },
  {
    "url": "assets/js/36.bb8088c5.js",
    "revision": "b2acff89426f02aed6641b2e74962446"
  },
  {
    "url": "assets/js/37.c66fa430.js",
    "revision": "3409de1520cd163e4b0a9696da562bc4"
  },
  {
    "url": "assets/js/38.93a8c724.js",
    "revision": "36d075d5da753b6892445d1e17caea8b"
  },
  {
    "url": "assets/js/39.f5fc87ca.js",
    "revision": "baf9216260e309b883627604dd9b25a3"
  },
  {
    "url": "assets/js/4.d7af6d65.js",
    "revision": "15c61c85d58f78a5b6eaa44de87ea103"
  },
  {
    "url": "assets/js/40.d05c8f01.js",
    "revision": "403fed29332225e20cf9f8ae3c747f1a"
  },
  {
    "url": "assets/js/41.9d4cecf9.js",
    "revision": "cbf0e93d9b9821e7eb3f8300d135c52a"
  },
  {
    "url": "assets/js/42.9aead944.js",
    "revision": "559d68b44732efbb98d33fe47b4501a3"
  },
  {
    "url": "assets/js/43.224c556d.js",
    "revision": "58b9e769585a3df474acecdf270c8805"
  },
  {
    "url": "assets/js/44.48beb27c.js",
    "revision": "f7a3e3ca706c5a7bdfcc2a2b29bfcb9d"
  },
  {
    "url": "assets/js/45.55bd31ba.js",
    "revision": "cfa5978b339d9ed1c9df0129771e4461"
  },
  {
    "url": "assets/js/46.40926b51.js",
    "revision": "a3ede068ac3ea75268d9a812394a4fd7"
  },
  {
    "url": "assets/js/47.e04096df.js",
    "revision": "0b232f10d677cde3b933de4ab8922cc2"
  },
  {
    "url": "assets/js/48.014a5262.js",
    "revision": "7e245c4eded2e90f50b9fba157648daa"
  },
  {
    "url": "assets/js/49.fdb9ec32.js",
    "revision": "c30997a53fc5d07d5884512dd9e5c0dd"
  },
  {
    "url": "assets/js/5.818d73be.js",
    "revision": "f28a4862e278bd36a62e6e6c81cc5853"
  },
  {
    "url": "assets/js/50.6819f8c5.js",
    "revision": "37e2779f3ed486b45d450d50eccb6f4f"
  },
  {
    "url": "assets/js/51.915d5716.js",
    "revision": "aca9d0db71dbf5280a5b12bc90748e1e"
  },
  {
    "url": "assets/js/52.20f35243.js",
    "revision": "e45e47669b24d50d5cdeee830f0b5157"
  },
  {
    "url": "assets/js/53.f2501fa3.js",
    "revision": "2c76386684feaf20f8754203b12c2847"
  },
  {
    "url": "assets/js/54.c76242db.js",
    "revision": "4edccac717f50bccb64b4cc93ec909d2"
  },
  {
    "url": "assets/js/55.23dd87cb.js",
    "revision": "05a22ce1070a4e6074b1ead8b1ce3b93"
  },
  {
    "url": "assets/js/56.82960bc4.js",
    "revision": "ea77fea1720c044bdb05310af78130be"
  },
  {
    "url": "assets/js/57.172db601.js",
    "revision": "d301062eae4823c6dae369d054480637"
  },
  {
    "url": "assets/js/58.de3a8fd3.js",
    "revision": "38fa1781983ca898db110bf7623527d4"
  },
  {
    "url": "assets/js/59.1e3f4fe6.js",
    "revision": "25821c744cd723c80cfceab46bc68a08"
  },
  {
    "url": "assets/js/6.71c332f6.js",
    "revision": "83f2ff7077a2d913cf8f67a1c9b82223"
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
    "url": "assets/js/62.c37ffed7.js",
    "revision": "0de0e07533e8167b2a8cee9102236352"
  },
  {
    "url": "assets/js/63.b6cbb480.js",
    "revision": "cb8aabdd30f4e5db936a1a7760edcae2"
  },
  {
    "url": "assets/js/64.44d9e49b.js",
    "revision": "3ed39d7c4e6eb29decb27682108fee86"
  },
  {
    "url": "assets/js/65.f686fa33.js",
    "revision": "47500eb35362e07f939e95db95b88253"
  },
  {
    "url": "assets/js/66.70d398b6.js",
    "revision": "0506f65c502f9c5fcd13e6d354f1fb74"
  },
  {
    "url": "assets/js/67.fb78f5a1.js",
    "revision": "d88aa62097a3c3c23579c5c596b6a7af"
  },
  {
    "url": "assets/js/68.045e2298.js",
    "revision": "cfe828da8c0a059efa594c554911862d"
  },
  {
    "url": "assets/js/69.292b9092.js",
    "revision": "89a5e44e9e58dac8f97af857841dafd6"
  },
  {
    "url": "assets/js/7.893ecd41.js",
    "revision": "3373fe80c80229e48820f24431e42c81"
  },
  {
    "url": "assets/js/70.ac9daa05.js",
    "revision": "384e677cbc4fc25f23a640ee8dffdcf0"
  },
  {
    "url": "assets/js/71.08e6ee9c.js",
    "revision": "025734e87c2f462afd77ee5f0e7f8470"
  },
  {
    "url": "assets/js/72.4f65537d.js",
    "revision": "1dc3b46fe69a26ebbe32001e0e7d68ab"
  },
  {
    "url": "assets/js/73.3078bbff.js",
    "revision": "0bc6a78e20dac646db417304ac5fa597"
  },
  {
    "url": "assets/js/74.35b93487.js",
    "revision": "080804fdea55778929b023031d6f7dde"
  },
  {
    "url": "assets/js/75.875d7a6d.js",
    "revision": "af5752b9dd7a735a75f4dfa7d1eb5cb8"
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
    "url": "assets/js/79.def9729e.js",
    "revision": "395ecbcc075a00e82a5a85fdbe3979a5"
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
    "url": "assets/js/app.af0b9336.js",
    "revision": "31b5044536d8df471982bfbd386e02c4"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "175e6bde252bd0744bf02734076ca07b"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "197d88ea2af59fd7d2479fc27764dc2e"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "18b04c11f267fdcc8630620936516576"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "f290c2db1428357f53a5915664a8ca9d"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "5610bdd2818c6d006859b0908b6e7e68"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "c4636069e14fe7a65e806285755627f8"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "7be4524ffe348fbdcb04b0f94d92ca56"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "d9d4503cba5f2aff31da80eb2e9eac3e"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "8694f3cb60a6f6bbb2dd6d8db1c56c28"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "c5c61f8aeca1aff33069384e81ec2a00"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "c82353c968fdf8a808a92fb280948551"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "0041f133412dd80185a3de21d1437325"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "9fe595d42b1bbd67673469cbf9764caa"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "b3300d4cbebda0cb61115643c3441c4d"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "241da7650eeccbff58313dbaffa4349b"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "e117a72a4ec68260c898c65145994872"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "00511a1740b3d849602e958a91a94f0d"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "a3d685d5dec8e7cadc0343d36674d7f2"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "25d533865091a673d9a5f64250826c2a"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "a3643653e67a452186dd9e5e8d1e5878"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "6db05029b038373176a30794839d1591"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "a0c70689e4dccfd85805564c34a09594"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "3c770f160ff809a11f29c5699b135423"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "daeebab25fa738fe34b7d6c384c15b0f"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "465b31474581e59737e510dabda75c03"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "f286e9c9d056c7df2aca2dad4482537d"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "c6cf4e74523879e10c52ded646d872ef"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "30cffe2bcdc99e30a68927222480062f"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "bc4ac6b040ec07acdb9548fa0be37b9a"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "6e9eac50564fdf6041df45807357c6db"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "dd2da63152249635dbb48c168a4cd2b4"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "d5b09b9bba486753dec399dababdb9ae"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "d7f33e80d99a479871dfa7d3fb29946e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "b1fd1ecd784a83991c00b35594e972e0"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "ae4b46954311f096b8b5ca818c5cc8ed"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "5994c4d87db54ceda8edce50dda6a817"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "ec894b2975266abda08c85d15af535e3"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "7b6d769cb151ae68e824d5264b4fca07"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "1baaacf02fa2696f877c48be34e43145"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "c90de8ebfe9fd2028561748e39cb6646"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "187cd4135a9474ef5a021bc56be9eb5b"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "938b2f5d4ad7cdf1b3eaf8011991572a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "03bec59c603320ad41ffaac4d7a7c067"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "dde92117438ed6e01d26754ac8f2d668"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "e9759faf19a843d27b2d2a286034a5f6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "e6b0fd74b9083a6425598ae951e50a29"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "c87abfa565e63e0ed34df973f3370be0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "4b44a3cd98a2a12668daa1de23b95ea9"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "9bbf4273a2cb9cefa7eb40685d51a68c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "0730bc472fcc0ec548d148f1cd95ea91"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "bf52c394188276b9e2c45157df60ff61"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "a19bb69594f2bb39dfa1b6906a16db7c"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "9f988269a340e2fd5f8fec3a2bc885a9"
  },
  {
    "url": "blog/other/git.html",
    "revision": "e1a6a7e86d74feba5f704bde837e255c"
  },
  {
    "url": "blog/other/index.html",
    "revision": "3774b7d7266c8f719c8c2922c261f28c"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "efb690a33be5f2ab1a13f92b4b2d28fa"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "59301e60ae6aec0d6a7f6d3ea0d35e95"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "5ce4c820f68e35bb195f89cf63b69e79"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "349c2f7131484ac747a2eb84f2876fa1"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "303df8c9f0f6ea8ddbd6541207d9978e"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "871c20b567acfb7e07293de996a04382"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "1c83c0b894a746d898d5ac34dea9562c"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "c8f165848be93cf2ecfc3ad5d5a6a6f0"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "7492653c4383e311ced032f74d06abad"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "d142c045c4fe8e962247629b558db91d"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "3a7d4094c14fac279dda55928ab5d747"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "c97add3d60a5e3287e346afb55789517"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "1493d847f02b7daca0a07083564baf97"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "b9ad92e7f7146d03eb883e60ecd35251"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "e7b076bd1ccc3c1dc7bebd91c4f6c72b"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "bec417bfaeb668bb978011291e020def"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "9251eda762e3ebe99b3943abfd0f4160"
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
