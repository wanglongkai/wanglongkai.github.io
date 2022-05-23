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
    "revision": "53b01ababf77086ae3cafd8ad84047e3"
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
    "url": "assets/js/10.f30a488b.js",
    "revision": "cea24ede7ddfe96431f4be0ff9341156"
  },
  {
    "url": "assets/js/11.948e8e29.js",
    "revision": "3534892fd9da1641e27442a771a91aa0"
  },
  {
    "url": "assets/js/12.4de2fb75.js",
    "revision": "963f9f6bd1d0794e541b91f412bb26b0"
  },
  {
    "url": "assets/js/13.0d15f5e6.js",
    "revision": "2276dbb5ed59b01cb5007b155f134b04"
  },
  {
    "url": "assets/js/14.d6c00419.js",
    "revision": "e3eceb41927d6e5599f93c94aff240c0"
  },
  {
    "url": "assets/js/15.43cbedc2.js",
    "revision": "04cf589a0406ad47182a3e938e16179a"
  },
  {
    "url": "assets/js/16.aae0e7a7.js",
    "revision": "54b63f964a3e40f30f89ca40f09bc2dc"
  },
  {
    "url": "assets/js/17.53942e40.js",
    "revision": "1db2ffbf9042189f6eff01983cdef5a0"
  },
  {
    "url": "assets/js/18.cec8c80b.js",
    "revision": "b90ee60ed3653f5c786b2f3254c3bd0c"
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
    "url": "assets/js/21.60551443.js",
    "revision": "2ef433364ed9136d7ad4e63345b3af34"
  },
  {
    "url": "assets/js/22.f58bbb43.js",
    "revision": "07042c7cbfd100ed40e7f6442010c03b"
  },
  {
    "url": "assets/js/23.429c7c9f.js",
    "revision": "cc1388d9870720825dd8c8e7b0197292"
  },
  {
    "url": "assets/js/24.cf90084d.js",
    "revision": "e823a4c5e822ff1ac6b4c76ed13ec7aa"
  },
  {
    "url": "assets/js/25.b6528663.js",
    "revision": "4ebaed1f4b99d843881cbd4d7331edc6"
  },
  {
    "url": "assets/js/26.4b35ef18.js",
    "revision": "d894d0e48d24c2e56a5bcf997c9b56b1"
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
    "url": "assets/js/29.c830567d.js",
    "revision": "5ea84e945ce8fb7c66e3c2365126f0d5"
  },
  {
    "url": "assets/js/3.6e8a01cc.js",
    "revision": "144e5776951e8b8c09a95521e17d1066"
  },
  {
    "url": "assets/js/30.d94a21e0.js",
    "revision": "dfb40218bcf347cb50c2e6cbd1071017"
  },
  {
    "url": "assets/js/31.9fb7cc93.js",
    "revision": "9e335a8ca885976eaff5b7584f9fb71f"
  },
  {
    "url": "assets/js/32.159b4a97.js",
    "revision": "9381a6ee36586c0d2e678da470c41777"
  },
  {
    "url": "assets/js/33.ff10e6e4.js",
    "revision": "093d162f0e1568e689635d1f99bdc49d"
  },
  {
    "url": "assets/js/34.b3bca496.js",
    "revision": "fec64651f2e5e1721890eaf32c32bf7d"
  },
  {
    "url": "assets/js/35.5d6c7750.js",
    "revision": "23d54c2efac2829529e40516c9ce1ef9"
  },
  {
    "url": "assets/js/36.ccd59b3a.js",
    "revision": "51c3d35814578a6b6a525b18f9961e48"
  },
  {
    "url": "assets/js/37.b32e7da5.js",
    "revision": "b5d52541d539f1f5ca84be45216459f5"
  },
  {
    "url": "assets/js/38.89d47057.js",
    "revision": "6a3d8265c7a754228f430d51d66ac86b"
  },
  {
    "url": "assets/js/39.817a05f8.js",
    "revision": "d1d1995b9bd6352ece5c2f78932c1786"
  },
  {
    "url": "assets/js/4.f3e7691b.js",
    "revision": "31549f34d6a932e457407448c9f4781b"
  },
  {
    "url": "assets/js/40.7e3a37a8.js",
    "revision": "841b80ff614689b581caa027d96c3c72"
  },
  {
    "url": "assets/js/41.f18c7ba5.js",
    "revision": "66b1fd1bb3efc26f022518abe564a309"
  },
  {
    "url": "assets/js/42.fcee5a06.js",
    "revision": "39449622c701ad65ea2094a19c24ffd7"
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
    "url": "assets/js/48.14649eae.js",
    "revision": "c9f0bfab39250e140ec008bbb6fb62e8"
  },
  {
    "url": "assets/js/49.c8890a1c.js",
    "revision": "94d941a5214745685577871fdb19b919"
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
    "url": "assets/js/51.68b4413f.js",
    "revision": "96a328fbb9e29ec299b61d215460e7f3"
  },
  {
    "url": "assets/js/52.a783c830.js",
    "revision": "b60fb2d113a6fd6005e732faf67667e8"
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
    "url": "assets/js/55.2cafea5f.js",
    "revision": "d725dd1c61fcbd5b20f044a50ffa29e0"
  },
  {
    "url": "assets/js/56.1da2a0b7.js",
    "revision": "3c4f6cfa19db4253a40de50beacb9ba0"
  },
  {
    "url": "assets/js/57.aeaafa01.js",
    "revision": "904662d3a01a6c231ad7535a6fed6039"
  },
  {
    "url": "assets/js/58.1b4ad97f.js",
    "revision": "6bef5d3e4c74442a0a96dabfc75fa550"
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
    "url": "assets/js/60.b5015dbe.js",
    "revision": "3f35a5877e0ddc07d48e7b3a5befff78"
  },
  {
    "url": "assets/js/61.6e9ac183.js",
    "revision": "5dd998e5c3601f47ea73f335862159b2"
  },
  {
    "url": "assets/js/62.58ab549e.js",
    "revision": "7bb9e6327787b0581b06775188e7c561"
  },
  {
    "url": "assets/js/63.002960ea.js",
    "revision": "6af20bc5c0b3dbcc9d88139ff8a263ce"
  },
  {
    "url": "assets/js/64.c1b85383.js",
    "revision": "005a3b934656bce8c1f809df393301e1"
  },
  {
    "url": "assets/js/65.f55cb220.js",
    "revision": "8925eae644317b53ac6d840c6bd31c8a"
  },
  {
    "url": "assets/js/66.0f2463b2.js",
    "revision": "553d98f0e5700052862bbd14fbae64b4"
  },
  {
    "url": "assets/js/67.cc1260e5.js",
    "revision": "23c4dd02faa3ecdc2fefa523c38345b1"
  },
  {
    "url": "assets/js/68.adddb9ab.js",
    "revision": "5a438068e71aefdf04a1d9c739dbe8bf"
  },
  {
    "url": "assets/js/69.9a6dae5d.js",
    "revision": "c3cd37e4872d1b0cf6f2822601cb1b77"
  },
  {
    "url": "assets/js/7.9f7100a3.js",
    "revision": "84325f2731e7ba7e30f4662170832c63"
  },
  {
    "url": "assets/js/70.4e1087bd.js",
    "revision": "3ba27730c9ba8229b9cfde924832c944"
  },
  {
    "url": "assets/js/71.4626dbc0.js",
    "revision": "c0b29c36c05eb0ed75116c12dc5c7726"
  },
  {
    "url": "assets/js/72.21c84165.js",
    "revision": "9336542a476a9758655fbd5ca202735a"
  },
  {
    "url": "assets/js/73.5daa4766.js",
    "revision": "1c8a2f92282958e9fd370690ba1a33ee"
  },
  {
    "url": "assets/js/74.aedf8c68.js",
    "revision": "91a4772d180e06fd809ba53853a47a7c"
  },
  {
    "url": "assets/js/75.2893ee9b.js",
    "revision": "2030341ead9abcb945f97d8bfb1efc0f"
  },
  {
    "url": "assets/js/76.968bce60.js",
    "revision": "c273442e0b386bb3050d0a93ec043934"
  },
  {
    "url": "assets/js/77.a46ca2a4.js",
    "revision": "f876764c80be252512759f201fe23e26"
  },
  {
    "url": "assets/js/78.49d259d1.js",
    "revision": "dfb2d4925919214bf2787c8889333fc6"
  },
  {
    "url": "assets/js/79.b78ababf.js",
    "revision": "5c735009e606f27868c6dfb72cdf11a1"
  },
  {
    "url": "assets/js/8.83cb16e1.js",
    "revision": "550521be8d1cb2c92fc4cf32a994d70f"
  },
  {
    "url": "assets/js/80.c21f5fd6.js",
    "revision": "86df5f9a0f304bb2c72e88413152de15"
  },
  {
    "url": "assets/js/81.b3c0f5b6.js",
    "revision": "d8ace463ad9e75554219ecb4444e5d22"
  },
  {
    "url": "assets/js/82.fc85f42b.js",
    "revision": "828e0942d617585f961cd0574464974c"
  },
  {
    "url": "assets/js/83.326ba03d.js",
    "revision": "aab64b320a31722208b09e565e851ea7"
  },
  {
    "url": "assets/js/84.1388f29e.js",
    "revision": "45fa6438e050769587cacbddce484a4d"
  },
  {
    "url": "assets/js/85.bdbf5a2d.js",
    "revision": "a2ec5ec666616f3575d7a4128aa66c1f"
  },
  {
    "url": "assets/js/86.1cc4a963.js",
    "revision": "7961e8e0607d037e5310abfd8ce56c35"
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
    "url": "assets/js/app.0fc63d1e.js",
    "revision": "591403a0781f4e98e6caa172d9bdb053"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "66537513eb0e4d0c61d5bd2ff9d41111"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "093a410e3822a86bd6ff80475e85f967"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "683cea5a582cbbbbba9e7f8d6876d737"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "756f7a0c3a8bfd459777bc05976afb1b"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "34bb10a2137914aaad0671c6d9337eaa"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "c82ba32dab6ada39445c41fcbb750632"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "582abcb3a05815633302e18882bdb9e0"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "7d824f033f6271fbfa9de10467644fb3"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "bcf3d48fb77c53d905cfd0278461c1ee"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "5fea455b5a9912a1ba80ca90d231dcec"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "ec5d588c5b8341e28485b2ba7c958399"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "d77059e6510f0734e4dc70faae0fc32f"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "0dd4825a8adc3266bb9de1fd7fbbc861"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "c11bca5a326171c22db3f4186c6e2a9c"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "de01a4415cf26fd6104a8cfe67f0a883"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "a894b857afa27426816f53ef077ae131"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "6cd6d13c8c21fae493c758056bbe1f0a"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "206f8292639e8ed8fe979dd3de840c38"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "8f7d462002829b2609074072b9cdf363"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "820103e0bb6a9a6ffc45470cdfa9469f"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "44f3710f19dcb9d99f13641dd4707b50"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "2c55eac837a791f71c035e0f343edb87"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "b165b949a1443916354b6574f46a4ef4"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "53468d632add81ebfed8288f1108b3ed"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "42e6f372c43152a19c1578adf4ecda24"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "290805ce0b100af655dc2a214e7cfb5d"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "5466e367893cf65af6a6a1a3ac1fd317"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "9d78011e2a8a5c9e3ea30cbb6f7c787a"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "86167368e35ad51ca11ceab6a88b2764"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "9456ac3fc4ac9063333d8be1590c949e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "86e5c3311107fdd10aab9df14c1a14bf"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "43a63a53ec5f188fa82b9b3388499137"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "1bc888cbf202eebd853c2e8b7dfddb89"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "d3d1dfe7731f490ea89cc79b9717cc6d"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "378005ac3c3340884c377e2efbc41208"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "ea2d537572e58a98a862d8f1a1c4c8cd"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "4f362d8927508a215a94a9676904a95b"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "cc561be9c36091192f22c9fdb65f5fca"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "ebb35b275a9334fa0c61db187c0dad3c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "4be82cd5b257876e6f7cc1419b5271c9"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "7e58a288643b3707583151b304576158"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "ff740b9904a8bca72ae595106d2c0592"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "1cae9984c3fdf37e5b403fa75a33efd0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "d425cdd1de1645d2f4ee1eedbff2ce4f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "a5ac93436ca3a87d183dc8b0d1b35049"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "1a03aadec5cb5a6902052e6fd0a4626d"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "20048a8250c01fb7c085325e4496174a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "52136ca2c39bc9e299b007a6ba40e480"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "9f2378f06739c2826b3093288dc26d71"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "5301274d6e5713db91b5daddb746f33c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "bf8acc93afd906ba3a4d0a9940f2fa81"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "7f787b075f3ebf11a58cb7baefb7fe41"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "06f9287c9b43a7ca9b291e9c7b8055b0"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "ca93ba01bfb782a2e505084e74923148"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "8bb83e8289530853cee347da779bcf1f"
  },
  {
    "url": "blog/other/git.html",
    "revision": "49ebd4b569ed07ec401953ca42e0d57c"
  },
  {
    "url": "blog/other/index.html",
    "revision": "e3f632c1ecfeac8dd7c6641b97dcd88d"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "00b001f0d5c4bc540018ce6a1e8ca459"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "f404129108124c94a517678764b926e2"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "c6661749939cd7efeacf363bc68e67e2"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "99b20ebee6f66ade5749810cb21366d9"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "07b1973fb66ec994a2ff62db46a2b43c"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "04fc9693fb1999c847a7284639d81c41"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "648a72538b3279d0a69ddc00474006b4"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "ab7c96f2e48c2a9ec5e02ff69f503d6c"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "670e14c0c02d3480093d8dacc20b239a"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "a1a017b85d0104b6f5d68a97138852a3"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "c44c10f28acadf179c3f7a5150b862a8"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "1720ca4ce05cd273028edf1a4ec1d3fe"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "3d49869ca9c7ab2d0278e9d3b859bb59"
  },
  {
    "url": "blog/react/virtualList.html",
    "revision": "aa442b05523beb616ee483bb3e8851f3"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "020e907a603231fc86ae384074a75cd5"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "b8dc5a6478ed73e4338d4ed5dc49f9d4"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "1cc7a60c07728650df947fdd0528ad6b"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "8b77afd165afd05c1b98411af6b65706"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "2dc423dcd6bbdad107871c89db557567"
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
