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
    "revision": "207690f71a5424e1d583bb1ff1fe081b"
  },
  {
    "url": "assets/css/0.styles.5dd77cff.css",
    "revision": "571290b8f30467a39537c905813c98b1"
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
    "url": "assets/js/11.b7103fe3.js",
    "revision": "d3592009d67f69f6883837f57fec5394"
  },
  {
    "url": "assets/js/12.bf5f0a29.js",
    "revision": "df8abe8c3e5e31dfe1c0f68869e7e79d"
  },
  {
    "url": "assets/js/13.d49e35f8.js",
    "revision": "288041ba92e6c2e63fff9ad9ad4f1766"
  },
  {
    "url": "assets/js/14.0535b321.js",
    "revision": "0c56cff4eacc51ccf857980b40461dc0"
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
    "url": "assets/js/21.3b8d3668.js",
    "revision": "929811a476c660d8a61cb8dc6424678f"
  },
  {
    "url": "assets/js/22.8893d8ca.js",
    "revision": "ff4d082f447385f407ac60fd86282708"
  },
  {
    "url": "assets/js/23.429c7c9f.js",
    "revision": "cc1388d9870720825dd8c8e7b0197292"
  },
  {
    "url": "assets/js/24.806d9e62.js",
    "revision": "7769f5625743b99de18a1a72a7fb4df5"
  },
  {
    "url": "assets/js/25.1324ba84.js",
    "revision": "c0b47d321431d7ba2832a1d9bdc96d97"
  },
  {
    "url": "assets/js/26.4fd1c3ac.js",
    "revision": "87e04cb3900cf27cdfba776a4814c5dc"
  },
  {
    "url": "assets/js/27.c6f48940.js",
    "revision": "84d0524033e37faf9e8aa8fb91800ab3"
  },
  {
    "url": "assets/js/28.1b302cfb.js",
    "revision": "eb0bee51cee8faf5e2265689067b6bb7"
  },
  {
    "url": "assets/js/29.c830567d.js",
    "revision": "5ea84e945ce8fb7c66e3c2365126f0d5"
  },
  {
    "url": "assets/js/3.2f0914b5.js",
    "revision": "922e79c860e7ca4a4a7706b0fcbd9d00"
  },
  {
    "url": "assets/js/30.108b6516.js",
    "revision": "7eac71a3a8228c1af27b2f7fe6734c92"
  },
  {
    "url": "assets/js/31.9fb7cc93.js",
    "revision": "9e335a8ca885976eaff5b7584f9fb71f"
  },
  {
    "url": "assets/js/32.1d389fca.js",
    "revision": "41a8f32dc632ef55b66b9e081ca70301"
  },
  {
    "url": "assets/js/33.daa91a08.js",
    "revision": "2ecea1359366898f0ee0b91ee09fbdeb"
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
    "url": "assets/js/37.b9a6b9da.js",
    "revision": "d5cf09b147a6051a828d6f5c6a418fbe"
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
    "url": "assets/js/4.d7af6d65.js",
    "revision": "15c61c85d58f78a5b6eaa44de87ea103"
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
    "url": "assets/js/42.9abac44f.js",
    "revision": "1b7428f3696279660eb0c809c2cf40a1"
  },
  {
    "url": "assets/js/43.b5b1ef76.js",
    "revision": "3f68c0e64222906969abd6a03c43d3de"
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
    "url": "assets/js/46.e557ae56.js",
    "revision": "aeee7e95c766f7c6c6976850a9a1ebce"
  },
  {
    "url": "assets/js/47.f7908450.js",
    "revision": "98b2877c8c76554e6c871245209fcaf8"
  },
  {
    "url": "assets/js/48.675eb784.js",
    "revision": "03c86cb97333282123a50ed6e8b469fa"
  },
  {
    "url": "assets/js/49.eb2fcfa0.js",
    "revision": "9748597fef0cba9cb34d6dcfa33fbb7b"
  },
  {
    "url": "assets/js/5.1c9b8b09.js",
    "revision": "f2087d7feb59af4680c4fbe0747ccf95"
  },
  {
    "url": "assets/js/50.421ebcaf.js",
    "revision": "4864cde3bfe4a6cc18d52752460d50bb"
  },
  {
    "url": "assets/js/51.26e838a2.js",
    "revision": "21486b1aeb16174447585d66fe8870db"
  },
  {
    "url": "assets/js/52.2f261565.js",
    "revision": "3762b86f12a48f2dbd033f3371e4157e"
  },
  {
    "url": "assets/js/53.38939f33.js",
    "revision": "bc091f774035b833fa1b0c8c1ed4b7cb"
  },
  {
    "url": "assets/js/54.a6d60ba0.js",
    "revision": "7ffb22673c70f95f6c91fd40c1e52e43"
  },
  {
    "url": "assets/js/55.f97c3c20.js",
    "revision": "a0add8508d2aaa36f79d7d4348310bd5"
  },
  {
    "url": "assets/js/56.139a1920.js",
    "revision": "9ff8d23ed0db746ef807ce46bbecc8bd"
  },
  {
    "url": "assets/js/57.7d761c4b.js",
    "revision": "ccce885eacfb383350735b104d66ca24"
  },
  {
    "url": "assets/js/58.69f7ab4a.js",
    "revision": "8d3563db163840520e0b92064dc9123c"
  },
  {
    "url": "assets/js/59.87778f78.js",
    "revision": "04f91f1eed68176f91e9c64b4d85c166"
  },
  {
    "url": "assets/js/6.bee4e456.js",
    "revision": "f533cf7b288718c28da5e8bf9d609ede"
  },
  {
    "url": "assets/js/60.9505c6f6.js",
    "revision": "167b850b8afa75590e9f8653eee998e0"
  },
  {
    "url": "assets/js/61.68319499.js",
    "revision": "8c409826cb4a67e5f61b1bd61ccf6264"
  },
  {
    "url": "assets/js/62.89167137.js",
    "revision": "c83184664350e7e61c5a72602a0a3080"
  },
  {
    "url": "assets/js/63.f79e650b.js",
    "revision": "da85bb51739942bc1a800f9db174366e"
  },
  {
    "url": "assets/js/64.07bdd5c0.js",
    "revision": "d2bfbcf7a30b7df323325a0bfb089f11"
  },
  {
    "url": "assets/js/65.69833db0.js",
    "revision": "8218bc3d64bac4ab1677033a7b302f9c"
  },
  {
    "url": "assets/js/66.115124d9.js",
    "revision": "d2958c669a5fcd1854bdd0515060602c"
  },
  {
    "url": "assets/js/67.9fc5f37c.js",
    "revision": "4f249f48169a0c6c8b2759af68ecacaa"
  },
  {
    "url": "assets/js/68.54302ea2.js",
    "revision": "4d7fbf006a2c1b1efc8521c1b7295aed"
  },
  {
    "url": "assets/js/69.ac423cfa.js",
    "revision": "c41bceae51e08027ec138378cb9defed"
  },
  {
    "url": "assets/js/7.cead4d72.js",
    "revision": "f9ed850ec6769a7de9ebfab4d7902996"
  },
  {
    "url": "assets/js/70.4e1087bd.js",
    "revision": "3ba27730c9ba8229b9cfde924832c944"
  },
  {
    "url": "assets/js/71.858c31c0.js",
    "revision": "dd4de5ddb13dff9afe5d339ca7ac5906"
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
    "url": "assets/js/75.2893ee9b.js",
    "revision": "2030341ead9abcb945f97d8bfb1efc0f"
  },
  {
    "url": "assets/js/76.d3064f36.js",
    "revision": "feae1d3d935eadebdab3b0c8940dd6cf"
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
    "url": "assets/js/80.c21f5fd6.js",
    "revision": "86df5f9a0f304bb2c72e88413152de15"
  },
  {
    "url": "assets/js/81.b3c0f5b6.js",
    "revision": "d8ace463ad9e75554219ecb4444e5d22"
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
    "url": "assets/js/app.4c694526.js",
    "revision": "8af70cfe2f60acb774a608fdc98222bd"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "7f07a31d36107de32f3f25ff83383156"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "a098dc761495c6f48cf44bd6b63296f3"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "8ed38360ec8ed0a18bf03ab75f509fec"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "5f4a99b267fd86c021d42362a6c13d03"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "e01f034aa428893a7ca4eaee20b306fb"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "7b0ee0bd5e0d3bedcf1a7c7402ca982b"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "499a6b76d2ebbf7f50a5677eb9f0c371"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "5425cc12f6bb353a694359c25a0ee56e"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "142b8c180b2a5794f3c9c99541a784e2"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "5a74dc3fc962f1379994d291ec5d1013"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "0c94af407881e2ccb97d72e3b0a0a15b"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "6217808fa4ae47d48fede7e43ded1314"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "5b5fc8e3c5ea332b40a19145f2b44134"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "65e13c798eb97899c2e6eea2ea2f65ff"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "a907ffd15e00995fcdc48894187ea399"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "d984fb389721817421d532263e622043"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "541ed415492b9dbfc57b4add6c4a9ee0"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "541af3c30864bb2735de00eba2ac25dc"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "0d91e2d2e993fcb5d7f41e1fc19dd0f7"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "00d92b7bd0bea6653ef5de812fcb059b"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "333f2750938ed26c5922214219b4192f"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "c0ea40931acecd51106f8763e3a797b7"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "a90afc9995802ccb3b443e9b7aca5231"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "54070334e23be5fbee809042181ab28a"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "467d47dda61d7d1cde2853367c7e2d2a"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "d79bda77214320e5fa894b6fcec2025c"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "cf70268ed6c54cbdec1841918dfe002f"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "91404bf58f5ead48a603d4df1f19f807"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "1f74addedd4a47112189104fd7779bd9"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "a021d6807ca688221d6363a942cc151b"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "9e7a52ecf212608c10d94dc3012510c5"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "fb2c2116d0b3e3c93ea7be8c934e1766"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "5297de2bf745857ef6b91ef8c9022478"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "c53abe26d469f00f1eb10719f77aa4fc"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "e0e363934dee6b40289451396e17cfc5"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "443267c8dc6d85e63a60b9a998a70921"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "8a9d417d1237e477f9e259f45977e7aa"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "8872d3b0a9166448ca9461a8625903b1"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "6b60e7d3c1c1670ad18f3f64797e1b94"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "4bf4f30bd4e8176407bad1d1266d5d78"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "505735d3d3ab7e64849d53b3c26686a6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "2a3e8bbf7b493c8d40d64d1106d58f71"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "723a2c827ae49044d4b5471eb31bdeec"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "fac88034bdeaaece96c4a0d402df56a2"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "000b6c93b2ea24d9dbbb73f444d0055a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "0036c1d1fe1c0ac2d6f9dafcf5bac333"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "3c13a249f12b1147262d6825444f40bd"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "3dc37d135685a5881f47fea3eff91297"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "f09dfa11ac1f49542c504fcbc9134a0a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "e658475834d4e612bbdf30ca34a2e2db"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "755ff7f82b148eb8b3006136b887dbc0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "c62df6a873844e273236ac8963e5d372"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "06efaa6e37d721bb2be0b0665878fd87"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "d94dd30dde72ca1e293be3a39f8e26bc"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "4588835b812235511c3b2331dbd7ca18"
  },
  {
    "url": "blog/other/git.html",
    "revision": "9e96a702d710d306a664fdf6514aa18d"
  },
  {
    "url": "blog/other/index.html",
    "revision": "06a35e6261c2c47e9d1b69fcb1b3e107"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "64da2dadab1a9944f9fc55410c836b0a"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "f5b0ae8b31aa71325e72e76075bcc358"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "f684420f04f0e29c70443a39896ed8f7"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "22439e84f7341f23a242d6044b9bee8b"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "f8e097846c9ca2ce478b358168add777"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "4d793be3878b3f2c89ac950633a384ba"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "0f6102dec9960dd59a289644103c09a7"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "24b38c303d3c0db107f8c3666ba493f5"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "c130da06a053b6e4d0b3695ce1377393"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "b2ec99dd65dff9a91f730d9178e6bea2"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "0fb52ccc7ecd7bd23583dfdc5f98051f"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "ba2fc871c6c7ec028694ac5769e67f5d"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "413732e7f3e842a506d94d8dae08f22e"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "eb7cd054d8ecb847e698cbf39e7959d6"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "1f85aaf65fab927f52c311b48d2fca89"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "f1419db32be0170e1a4c4fc014d832d1"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "3ad9bb963d703258685f20a26ad68404"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "62d346691886583b66ebcceb341f2e7b"
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
