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
    "revision": "c71d6ff11e73d8d93b8e6699b1f409fc"
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
    "url": "assets/js/10.87ea37a2.js",
    "revision": "d5287cb04525dcdd05f69db3659f3b5b"
  },
  {
    "url": "assets/js/11.207ce0d5.js",
    "revision": "b41fda9c86cb2be583229d21558d362a"
  },
  {
    "url": "assets/js/12.e3e99f59.js",
    "revision": "383e9f88b6e2a38261d8a9c34d2e181f"
  },
  {
    "url": "assets/js/13.dc170ad6.js",
    "revision": "93a7039725f0083ae4bc3bdb2275a89d"
  },
  {
    "url": "assets/js/14.37f76075.js",
    "revision": "fafc8a81427b899fd1790908b0781d1b"
  },
  {
    "url": "assets/js/15.7a610ad9.js",
    "revision": "7a0b24d764cace08be8bee0a4baa8b31"
  },
  {
    "url": "assets/js/16.1228dd9d.js",
    "revision": "aefae358c2fe1e976a4903f1884d9316"
  },
  {
    "url": "assets/js/17.f4f4ff5d.js",
    "revision": "f19375c7d67f31e2b59600a2f91c7987"
  },
  {
    "url": "assets/js/18.f59a9d95.js",
    "revision": "f83793e32b7b8310babe0f7eba215785"
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
    "url": "assets/js/22.302d2564.js",
    "revision": "d4d8547f97e8605b1a02f31ad34eb459"
  },
  {
    "url": "assets/js/23.2fd1cc8b.js",
    "revision": "3aa7eb426da34fbb7acb44bb7ff46fbc"
  },
  {
    "url": "assets/js/24.8d25b048.js",
    "revision": "014be537dd84c6e23bf6bedee2364193"
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
    "url": "assets/js/27.0187076a.js",
    "revision": "ad9ec8e8e8b3e430b060bf2a157c6ce2"
  },
  {
    "url": "assets/js/28.7717ebc0.js",
    "revision": "61c65d0bb857feacfd795bbc98d72eac"
  },
  {
    "url": "assets/js/29.1d860d6c.js",
    "revision": "450f3a6e1739b347dcd91d97a0c4ce31"
  },
  {
    "url": "assets/js/3.7e0cdc3a.js",
    "revision": "2bbc7d1dd373fd43cb2134bfed783cc8"
  },
  {
    "url": "assets/js/30.a52a4438.js",
    "revision": "69847b5c6332204281483e9c317ea1e1"
  },
  {
    "url": "assets/js/31.584ae3bf.js",
    "revision": "4d9b5fc8a4155389aeed411ad6e9ec97"
  },
  {
    "url": "assets/js/32.1d389fca.js",
    "revision": "41a8f32dc632ef55b66b9e081ca70301"
  },
  {
    "url": "assets/js/33.d59cf09d.js",
    "revision": "fe8d08d6cee67296fca1a84dc81d2141"
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
    "url": "assets/js/36.c4559235.js",
    "revision": "abd099addcda12c370c2e787e5c98111"
  },
  {
    "url": "assets/js/37.dd87dc0b.js",
    "revision": "be418947c1d11b557358e21747fdca7b"
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
    "url": "assets/js/4.0a97cf23.js",
    "revision": "d5b8f02c2942c1fae1e918dd8e20664e"
  },
  {
    "url": "assets/js/40.fdd8aa01.js",
    "revision": "87e943afcc1ad8230c09dbc912cd425a"
  },
  {
    "url": "assets/js/41.e8281c5c.js",
    "revision": "7547223ee13752e3a2242adb837ed97e"
  },
  {
    "url": "assets/js/42.dad37556.js",
    "revision": "65f0061a0a7f0276fdc15502e9c0966a"
  },
  {
    "url": "assets/js/43.af1146bb.js",
    "revision": "2c602d48ebfd2ba58127d8cfefe4aaa9"
  },
  {
    "url": "assets/js/44.f2751dcd.js",
    "revision": "98172513fbe552a7239166ab33ba2db0"
  },
  {
    "url": "assets/js/45.48907eaa.js",
    "revision": "3944721816679ef2c4f65c81d5946cfa"
  },
  {
    "url": "assets/js/46.867d08f6.js",
    "revision": "c310897a3475f52b08e9306d185f3be5"
  },
  {
    "url": "assets/js/47.f7908450.js",
    "revision": "98b2877c8c76554e6c871245209fcaf8"
  },
  {
    "url": "assets/js/48.533a4f1c.js",
    "revision": "9642a5512eb912dacd13a422ff5a2cf9"
  },
  {
    "url": "assets/js/49.dab3e848.js",
    "revision": "e5aaa244586aae47a96f7f52f1a9c2b6"
  },
  {
    "url": "assets/js/5.4cdcc44a.js",
    "revision": "019fb2a8ced0402567bb377bfd0b58b1"
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
    "url": "assets/js/52.ab09b1aa.js",
    "revision": "33e8565712fcbe62e10e9c8a918cbb60"
  },
  {
    "url": "assets/js/53.38939f33.js",
    "revision": "bc091f774035b833fa1b0c8c1ed4b7cb"
  },
  {
    "url": "assets/js/54.2e331abb.js",
    "revision": "6c872faf55c50745a75f05c2214768fd"
  },
  {
    "url": "assets/js/55.e3cc5f42.js",
    "revision": "705036609b1e55cc549c6d91dfbd7fcf"
  },
  {
    "url": "assets/js/56.8566fc5d.js",
    "revision": "bcd05981d2eae907b12715e8a3bcefb4"
  },
  {
    "url": "assets/js/57.ad689221.js",
    "revision": "6ce2c1e82c1c55bc5f80be1a3126021d"
  },
  {
    "url": "assets/js/58.fd812560.js",
    "revision": "4734cdaa54e132e4ef96eb3a442cc4ab"
  },
  {
    "url": "assets/js/59.1f315f2e.js",
    "revision": "7966d7b515ce9ca8abc9da92b532b47b"
  },
  {
    "url": "assets/js/6.93c464b1.js",
    "revision": "cbb0ac4adf965af8f6a6d9e038554e8c"
  },
  {
    "url": "assets/js/60.dd234ebe.js",
    "revision": "1843817ea235e69dad57c0ab616af466"
  },
  {
    "url": "assets/js/61.68319499.js",
    "revision": "8c409826cb4a67e5f61b1bd61ccf6264"
  },
  {
    "url": "assets/js/62.fa22e5fd.js",
    "revision": "4b69565f4474721c931d3e29edf58950"
  },
  {
    "url": "assets/js/63.704c5a80.js",
    "revision": "de427af10f8b4d16ca787e44c19acbb2"
  },
  {
    "url": "assets/js/64.a700a0e3.js",
    "revision": "34e0215c4f9b3f2c2cf4833300fca718"
  },
  {
    "url": "assets/js/65.69833db0.js",
    "revision": "8218bc3d64bac4ab1677033a7b302f9c"
  },
  {
    "url": "assets/js/66.28e6045e.js",
    "revision": "5ad8e79991e0beba894868a3ca0e428f"
  },
  {
    "url": "assets/js/67.9f497606.js",
    "revision": "c2ca7fc3754ed88a6fe3bbe23db2978c"
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
    "url": "assets/js/7.bb6c1904.js",
    "revision": "d039b498522b62bdf4d1a953b8a74b95"
  },
  {
    "url": "assets/js/70.d7f5bec4.js",
    "revision": "e5778da3084c7e71f12b75bc968f6103"
  },
  {
    "url": "assets/js/71.28682fc4.js",
    "revision": "b312dceff2587ce8966de75baa94bdda"
  },
  {
    "url": "assets/js/72.21c84165.js",
    "revision": "9336542a476a9758655fbd5ca202735a"
  },
  {
    "url": "assets/js/73.76ee998a.js",
    "revision": "d9cac0269a6fc12673d9539e383219a5"
  },
  {
    "url": "assets/js/74.83b64680.js",
    "revision": "fcf191587edb85f88348c73291aa8644"
  },
  {
    "url": "assets/js/75.0b812439.js",
    "revision": "dce260501e078b87c7c7df20e71d10d5"
  },
  {
    "url": "assets/js/76.b7aa5cf7.js",
    "revision": "def2e2b32ad67a2168bc172c293677e0"
  },
  {
    "url": "assets/js/77.eac28ced.js",
    "revision": "85339234134b3744cd4c047efd9b8828"
  },
  {
    "url": "assets/js/78.4cf4f8ed.js",
    "revision": "29899ff40ffb0abda08723979eb4c416"
  },
  {
    "url": "assets/js/79.5df9fdfb.js",
    "revision": "8a99d2b0a23087041263ccae5a45c554"
  },
  {
    "url": "assets/js/8.e840d0f8.js",
    "revision": "5f6955d7d3ea233804ec1f5e4995ae06"
  },
  {
    "url": "assets/js/80.1f4220a2.js",
    "revision": "5e06979019c1d6121af2362261902f96"
  },
  {
    "url": "assets/js/81.d11548b3.js",
    "revision": "deb97d5995d65d8002ad2f4d1be6a7c8"
  },
  {
    "url": "assets/js/82.18b7d4a2.js",
    "revision": "ec8d9728b79569be1c827d0e30a3434c"
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
    "url": "assets/js/app.36f13d28.js",
    "revision": "108cdd19c519319cc57f87539bbab9cf"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "9c82abb405f2a7fceee28a4ddc53eb22"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "229973ebd0f16408e6eb3884b6edc225"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "a1f3f7d2dc103c7c236dce1f7e5ba9f5"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "ae5e4bc1d38a2ab3d90ab0042a6bebda"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "bcfc2d9c44b3d9eb79bdb3a71c77fba3"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "662cac7da1010a41f2301ae20263e496"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "1a29e2099760840355194acc1cc0abdc"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "2d45d92d0bef3730b69188c658e3d560"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "21815ffca817d10e40c110bc0bcabbd8"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "2449952da0be458e5840bd826b945320"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "2057aaf7bba25a9242a2c014deac93a1"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "e9d9697bcc29cf1f32f6d8df640089a6"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "bd565fca9b9aa197a10f269a13bf0b57"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "b3638c89871ff62fa2d5b0a650592042"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "b1c11464ba6845db637ae10516aa047b"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "19a89f5fc472da95dce9a0cd3cbc9bd6"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "b83675fb5a9a87fe2938d49fe8fa76f0"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "cf795dc053f32a21940969880dd018a7"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "46ff1233e04afdc0e1497ccea3ecb302"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "753c6e58eacca61a292ecee7c48c6cb8"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "3c16fb0ff865bdb95d2d10bbd4f4659d"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "341252dbfc60e8085267f997b13e6d6b"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "0e8c2d610cf0a4cb3575284ca77adadc"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "06647c4f40416960caf75c23570d35c1"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "d5c2bb1bac4a25e1855f6ed1d08c03c3"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "d208a13bd63431eb7dea8279c62f8c6e"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "e0793958ac863233f8b262230e5edf61"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "8e6fa5862f0655ad331a1ea9c8bc56ac"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "3a9e3f9361691fdff4569bafa40296ca"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "d3d3dd46abf48d1d8e62072296ae4236"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "ed7fc238eda568bf7d7586e9cbc7f200"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "773e41d696d06ff5c307cb42616f1295"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "5ad5e80a18b07d9aeb9c6026edee06fc"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "6eece224ea2de759c98390bdf8017475"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "fba4c4150675f6cff62a4ba8751ae1f5"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "e89830c65ad06724bb09c89c4317bf4c"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "4a12a9cf6352b987cbf702261a59a8f0"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "3a8e515916887ffbb17d9cd50bca1fef"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "72d8667041bb52d10a86a10f2292f4a9"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "0ed0601381eb951c46bc8a22eec32f69"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "11cbbd0bdf4499ab00037ae490650208"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "e3a2696b0e9a941c8f72c524bc0a2f4d"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "c47178fd4ac6d354e1b593773b6a0d73"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "69d9d8272583b60412b5099e7e8db11d"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "f20396ee6e09ac64074eb16f8db92137"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "e549a27d4fcb8210de80eeb458821fc7"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "499b9f7dde2833fe9c5bb4a31c2377db"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "4546cd71261fc3e632bb0c2372f51a62"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "e39eae2a20660e166330f88dfa4a56d6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "68a89e3ec789906cd6689f7912e0346e"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "f5d6c1e45c6bd17057610ae500391f04"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "adbf496a5744c6ffb6934979dc597f8a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "621fbf69400e0e8b7f4cf19d3d84458c"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "41d9bd3d4d5888788d2b5a6afcca133e"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "6d604ab440729d4ceefcb6ef0378c584"
  },
  {
    "url": "blog/other/git.html",
    "revision": "fceeba6748935ee2601a9677e41c919b"
  },
  {
    "url": "blog/other/index.html",
    "revision": "3c096eeb9d86164ad99063b6a0af1c84"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "2c65976a32c2f2d967c44960f31547d5"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "9353dd668bf258fcf14b03677bacad0e"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "08b7f9f3f916a2cf3ef09f5f5506a9e2"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "eec669f55163cdc6b26114a4c7f38d00"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "052737287f20fc40234a52fd2874fd95"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "6b49b3ffe035e7529e47b6f68c5733af"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "bbcf550e914ba6c577bf1204f0337cd0"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "ac0b22a479742cf0f0a4155caee4b528"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "9efee87151bc7d4b9c6bf56e432fe8a9"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "3da2cdd9624cc51e0ee9533c8d32d5b5"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "55d2fd272b07a5fc8a5623a095094c57"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "657efacbc957d27556703c6d10f1b3a6"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "fed9bc1eb962b0de35755e1750184429"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "13bd9b990ed6815ecda9c9ffe6f3c154"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "a5e2a2a3e2232be19705432c2fc7ac6e"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "156701b294842a845146d3146cb4366e"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "f239ec5f72caca5f4def974b9aec5823"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "da5befa13b8c8f83c43bc5c9e598ad5b"
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
