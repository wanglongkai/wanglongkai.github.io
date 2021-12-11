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
    "revision": "d5778d2269a6fbaf31486b99538a3b9d"
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
    "url": "assets/js/12.cec38004.js",
    "revision": "11813a8704526abce1bc2ae5b86e0df6"
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
    "url": "assets/js/15.baf978d6.js",
    "revision": "59d57d176cdec61042594dcaf7445dae"
  },
  {
    "url": "assets/js/16.aae0e7a7.js",
    "revision": "54b63f964a3e40f30f89ca40f09bc2dc"
  },
  {
    "url": "assets/js/17.237b8612.js",
    "revision": "cf63c93013d2c0ec9fc94aeddbc0f5fd"
  },
  {
    "url": "assets/js/18.f4566738.js",
    "revision": "8f6680fcdf0aaa5004230a4c0e25f22b"
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
    "url": "assets/js/21.cbf9c7a4.js",
    "revision": "026d40084228b01ac8a1d63646d1b3d3"
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
    "url": "assets/js/24.aae3760b.js",
    "revision": "f44e1ceb26efd34f97fcd899d3beb936"
  },
  {
    "url": "assets/js/25.103ad5fa.js",
    "revision": "5e82979b86c126f064efd61496bcfe42"
  },
  {
    "url": "assets/js/26.9dba721d.js",
    "revision": "ed0c1de7e968a57542e3a1594b2f7ceb"
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
    "url": "assets/js/29.56f7506a.js",
    "revision": "5ddb9138de6c13fc9e925d4498061573"
  },
  {
    "url": "assets/js/3.cb7ad15e.js",
    "revision": "b4d2658ee4180a621c4ca72fc873afd6"
  },
  {
    "url": "assets/js/30.5449f4e3.js",
    "revision": "779d0a7ed2ae8f109ca79610ef36e331"
  },
  {
    "url": "assets/js/31.584ae3bf.js",
    "revision": "4d9b5fc8a4155389aeed411ad6e9ec97"
  },
  {
    "url": "assets/js/32.71d9c3ee.js",
    "revision": "0df92933107892e6274d37e65cb8059a"
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
    "url": "assets/js/39.cc51f813.js",
    "revision": "6f23a65656b01049ff95285b65754a52"
  },
  {
    "url": "assets/js/4.0a97cf23.js",
    "revision": "d5b8f02c2942c1fae1e918dd8e20664e"
  },
  {
    "url": "assets/js/40.91d928a1.js",
    "revision": "6f349e0770b44fb25db65f08a706c6fd"
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
    "url": "assets/js/44.ddd13c60.js",
    "revision": "63b417d593f08e8405f482bbf3ff35bb"
  },
  {
    "url": "assets/js/45.b24dab11.js",
    "revision": "137c80112e27906d5aaccc5f9988b1be"
  },
  {
    "url": "assets/js/46.867d08f6.js",
    "revision": "c310897a3475f52b08e9306d185f3be5"
  },
  {
    "url": "assets/js/47.b49d5f81.js",
    "revision": "bb9961845892841970d1c52d8abace41"
  },
  {
    "url": "assets/js/48.8059955c.js",
    "revision": "0787d871edf50d58d5fdadc0ce67b58f"
  },
  {
    "url": "assets/js/49.67df1827.js",
    "revision": "2c630d599b29c48c737c6de07972ce82"
  },
  {
    "url": "assets/js/5.55f5d8e7.js",
    "revision": "a24e64608f580f767fb943a27edec738"
  },
  {
    "url": "assets/js/50.f5b22dfc.js",
    "revision": "2554940d673ca69feb0108eab4465b46"
  },
  {
    "url": "assets/js/51.97a83311.js",
    "revision": "151c9c5dba46c85c3ce84bd6d33b4192"
  },
  {
    "url": "assets/js/52.1c326f48.js",
    "revision": "b46890e142beefffd3c8ee31e30efa01"
  },
  {
    "url": "assets/js/53.b261dd2f.js",
    "revision": "29cb6b0c371939a70f337f34eebe2dd3"
  },
  {
    "url": "assets/js/54.a6d60ba0.js",
    "revision": "7ffb22673c70f95f6c91fd40c1e52e43"
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
    "url": "assets/js/57.7d761c4b.js",
    "revision": "ccce885eacfb383350735b104d66ca24"
  },
  {
    "url": "assets/js/58.8b75f9a4.js",
    "revision": "4e8928975c1027916dc3f18c04a98247"
  },
  {
    "url": "assets/js/59.baf58f53.js",
    "revision": "8f854a45b814dad242602ef6e930afee"
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
    "url": "assets/js/61.b771e743.js",
    "revision": "92ffb99cb8235ea7fb118630e27bcfef"
  },
  {
    "url": "assets/js/62.89167137.js",
    "revision": "c83184664350e7e61c5a72602a0a3080"
  },
  {
    "url": "assets/js/63.48a15a96.js",
    "revision": "a750abde8c482317cbe59c4622fc0d41"
  },
  {
    "url": "assets/js/64.bf21206c.js",
    "revision": "235a2028ac1600309606589ff216a2b5"
  },
  {
    "url": "assets/js/65.bf477060.js",
    "revision": "1744be1d8342d6f573fd17fa664ce601"
  },
  {
    "url": "assets/js/66.876c3682.js",
    "revision": "e61722c0604cf6221337c1d5e756f454"
  },
  {
    "url": "assets/js/67.9fc5f37c.js",
    "revision": "4f249f48169a0c6c8b2759af68ecacaa"
  },
  {
    "url": "assets/js/68.60f4ec58.js",
    "revision": "2e4442267e5c246bb9d4e9693a9cad79"
  },
  {
    "url": "assets/js/69.5e2c41ca.js",
    "revision": "35bfdb101bb73334baa9477f478d9d91"
  },
  {
    "url": "assets/js/7.bb6c1904.js",
    "revision": "d039b498522b62bdf4d1a953b8a74b95"
  },
  {
    "url": "assets/js/70.46293fad.js",
    "revision": "c6fbf958428b597011b4d5e125b7fe90"
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
    "url": "assets/js/73.7af6cb8b.js",
    "revision": "a3f08607dd4252d4abe69cf90a1216f4"
  },
  {
    "url": "assets/js/74.83b64680.js",
    "revision": "fcf191587edb85f88348c73291aa8644"
  },
  {
    "url": "assets/js/75.ca12d16f.js",
    "revision": "a43b78aeca2969584e6e0125b753bc75"
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
    "url": "assets/js/78.d8cca49a.js",
    "revision": "de3864be160da66ce2d3ec8cdb42a171"
  },
  {
    "url": "assets/js/79.ee328f7e.js",
    "revision": "2f2bfc269bf48662e6f077d51c5c26ca"
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
    "url": "assets/js/81.8873231d.js",
    "revision": "034a1791c3ebdbbb35041bc9b8a0efca"
  },
  {
    "url": "assets/js/82.18b7d4a2.js",
    "revision": "ec8d9728b79569be1c827d0e30a3434c"
  },
  {
    "url": "assets/js/83.4b29d3b0.js",
    "revision": "9e45fcfa361cb82d3b55512d07e25141"
  },
  {
    "url": "assets/js/84.8bde1382.js",
    "revision": "2f5a75d17cf1c30fd80bbdfe1f6519d2"
  },
  {
    "url": "assets/js/85.78e4cc7c.js",
    "revision": "da726f667e565105696d876c75e9f57a"
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
    "url": "assets/js/app.bde8e35c.js",
    "revision": "f08b36117be28a8119e3b99de8732015"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "0e2f734c681c76d2c70dde221c8321aa"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "79210fdae7e6c1ca252355ffea120d70"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "a61f26793d660d1f2c469b481074c61c"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "466f288d55d889d430ff7d14f6cb6e2d"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "74583f6668f401b4db1f26d34e64cfe3"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "f0656995091b6e98b9387f7ad74af039"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "5a49e9d9015f3bdc7a600afafe9274c0"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "bf6be0d8a8ad67009013b3f9f0a1cb0a"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "ac29e0b7db5f5ed6973ec2c58f845275"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "6fa403f208f85355a3f0d8fc29415893"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "1898323321162390b168b6925455c143"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "9a02860dfd8686163ab3f64a80534fb0"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "42d52927f5fe2983acd138d6ca24e4e8"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "6dec72262734d84ea5adba1e73e8068d"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "a037cbdf27d952c2c8bcbd2249697101"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "f336c639a84c86d5d2073169305e8b0a"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "734b22322603fb70161fc37eb50f4ddb"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "312082f45bdf0fd82429a2a96dcb2d62"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "b29e2399b42ad5ecd1d08309c23a0475"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "72564e6a1ca43ac9e9c251dd3fd0976c"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "89dc8532f1472cd9ca20418b3e08a519"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "030208366aeb38cec8b291d871da0e21"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "ce3a6360968a7489994efa5fa88f20ca"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "c0eb8aa20a4bbf3a80cca56874b44b5b"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "8c8d3073d4fdcf6d25b60e8a0b269097"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "6ffff01ecbd1ae92b2ca88126a5d8fa7"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "5062921fab32707685772b6bff6e7292"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "4d62d52042f25ace2fc0c2312f9899ed"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "a846d89fe33129c089ce7d39333db0e5"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "81b0b769c580408180ba5d35a45814b5"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "1d2be3dc3b9a2794a63cb010db540f7c"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "7a7dc89e68108415e6b0d5d56d944147"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "e8e365b0c2809114220ed440812bff05"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "6826d3695665c83d5152bc65fc8d2fe9"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "2145df31942219d466ae2c6f9703b593"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "05332c8db0916e7798cb233df4ff5945"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "05f777782ea7de1715b603e1cccca5a2"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "3896d78f7304c1982863d67206e64a60"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "4e296908c988211a238f0392172b21b9"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "1caa1f84884cda79b73ada03c5c6a347"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "c04aebb37e61e0acb4a53dd03d2fbab4"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "fc6ba73f6e67da218206a46d5d88046c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "8c2668c248f74cce856540ba12164b06"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "edb77c1f3823644eb940daa53b0046e6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "bec08a2f2a8955e7be6b8dbdca57cd70"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "fc2f0d8fb178c91448b24bf711039d5b"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "185336a27119e24b3a996c0314d074a1"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "fbe6ae09487ba3d5f6db10c8825cafa0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "fc30ac7e6e38ccee16815e3700419958"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "a72d6d03c10a78e2f8c41e34ebfa5435"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "c00b9f8c22588c6c7918e0414f66da79"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "1ad1ce7091c0a2ed3205f7ea60e49d8a"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "fd44e57c4e9ef9b9f2e74489f60dc19b"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "0a577e716e2571ea5a797df229148613"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "d9aea9f0c37adaf52a0b8a12194e0a26"
  },
  {
    "url": "blog/other/git.html",
    "revision": "2ab13cf660a6b4b0b4fd24d23fdf7fde"
  },
  {
    "url": "blog/other/index.html",
    "revision": "fe695cf88e987824beb75a7353f625f5"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "63a06afd161c8b92e76c926b83ac89ce"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "075ef9c376b9779b0f018bac5919f421"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "85cf13eef1be43d550d8d02bf3c1f5e7"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "7fd265fc088313953e48c854a9e0847a"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "8412499628b8f69e30b19a426327f188"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "d9336f463b4d8bbf4d24df2971cd4a41"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "4734f0a63ffc461c347232a4005fa1cf"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "22ad31c8955c1b3cac21a8af41270a6e"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "6d70bacff769ce2fdbf01263c885a99d"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "a41de0a28469435f05e481b45339299c"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "bfdbdba6613d41c46ed04c0367c97902"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "ffcb27f654bd58b0760678c2ffd76a98"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "4f546e49acac94e7b8839b90dee498c4"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "a6973c2863ff167747047b3555bd89bd"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "aacdf0961ca04c7b7978fad8afe78a9c"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "2f7abf804054e6f3c62afac3c051331d"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "057dcb41b88c50c9d9900ea01bc9b6bf"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "f3c340afe93bbdb42a67358a2f5eba2a"
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
