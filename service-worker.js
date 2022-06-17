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
    "revision": "04aa5ba6acce8f0303f368f212c30b3a"
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
    "url": "assets/js/12.e3e99f59.js",
    "revision": "383e9f88b6e2a38261d8a9c34d2e181f"
  },
  {
    "url": "assets/js/13.e7dc048e.js",
    "revision": "796675740b98913597d34ab473fe5994"
  },
  {
    "url": "assets/js/14.0c181ae7.js",
    "revision": "06dd0fe508c9177ca0d76885f7e08d62"
  },
  {
    "url": "assets/js/15.0dd9413e.js",
    "revision": "3364113e32558fdbba224b2b8c18ec28"
  },
  {
    "url": "assets/js/16.72ba1c2c.js",
    "revision": "89e77e21ba311e369181b76f3f8981d1"
  },
  {
    "url": "assets/js/17.23d6f8dd.js",
    "revision": "a50c1a4f61de0c58a0dd144d29343c93"
  },
  {
    "url": "assets/js/18.531c75ba.js",
    "revision": "24143b47041bf228e5cd67954c8853de"
  },
  {
    "url": "assets/js/19.3bbe1370.js",
    "revision": "3fc69f68fef9b6e2f843b4d67d1a6c4a"
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
    "url": "assets/js/22.cc854551.js",
    "revision": "18f9e6e1c399892d009bf8d8aacbcfcc"
  },
  {
    "url": "assets/js/23.d208914a.js",
    "revision": "db437bd5a99b067b4e834454925135d1"
  },
  {
    "url": "assets/js/24.988baba4.js",
    "revision": "26dafc1af8e255e94b56e450fe087a6a"
  },
  {
    "url": "assets/js/25.d2649e28.js",
    "revision": "9168e08e1f8d58e73aaaab780e7f4286"
  },
  {
    "url": "assets/js/26.25fd77af.js",
    "revision": "5501d407acb1d6230f7e315f52c21f38"
  },
  {
    "url": "assets/js/27.f48725fe.js",
    "revision": "a6e5591819e27d8d7eed0dea6fa97485"
  },
  {
    "url": "assets/js/28.0f529e99.js",
    "revision": "3bec4f411531bfbc5010d2ed03e79267"
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
    "url": "assets/js/30.94823d45.js",
    "revision": "674f72967923935e874950f1c33de4ff"
  },
  {
    "url": "assets/js/31.9091f46f.js",
    "revision": "d5236160799f8dabedb44c896ec01ac6"
  },
  {
    "url": "assets/js/32.e38e61b5.js",
    "revision": "b26b7583726e254ae7c6f605a8dbb2f8"
  },
  {
    "url": "assets/js/33.199431a4.js",
    "revision": "93a5156593dd848823ed9e43a71b47eb"
  },
  {
    "url": "assets/js/34.492e289a.js",
    "revision": "55cefcbb3620aeb1f7e20043ae647ec2"
  },
  {
    "url": "assets/js/35.5d302290.js",
    "revision": "8c307258533a00835a57dd37425d8ebc"
  },
  {
    "url": "assets/js/36.894d3289.js",
    "revision": "54e927b8598ca8afdb1db9886a43c925"
  },
  {
    "url": "assets/js/37.f642beeb.js",
    "revision": "1f0621a57b53a824d9c5941d820f02e2"
  },
  {
    "url": "assets/js/38.7f23fd79.js",
    "revision": "dcad74a4ac094a0b7390eced90101c0f"
  },
  {
    "url": "assets/js/39.0026e9da.js",
    "revision": "c1120950d8701c10e02463fac005ea89"
  },
  {
    "url": "assets/js/4.02d75679.js",
    "revision": "bc245d8fec4d26b0af28cacb0db75c2c"
  },
  {
    "url": "assets/js/40.401f8112.js",
    "revision": "82879716427469468e4e7ea5d06601b8"
  },
  {
    "url": "assets/js/41.e6220985.js",
    "revision": "138c9029e54e6813cd5c587e5ca27038"
  },
  {
    "url": "assets/js/42.779bc903.js",
    "revision": "49f8c318880607ccc8873523b265bbd3"
  },
  {
    "url": "assets/js/43.b0aaffd8.js",
    "revision": "2b688a515789e1952513872942761da6"
  },
  {
    "url": "assets/js/44.faaec129.js",
    "revision": "4ff2ffa49d5619d8f1e25573015445fb"
  },
  {
    "url": "assets/js/45.9c7e5437.js",
    "revision": "5ae09c9f3703ee3d285c06095bdb1a85"
  },
  {
    "url": "assets/js/46.c0e6a162.js",
    "revision": "d6ffd7f95867c742a99cf28f6d7bb28a"
  },
  {
    "url": "assets/js/47.267a4beb.js",
    "revision": "7d4bdb85a3c3be73b967846dfef7cd25"
  },
  {
    "url": "assets/js/48.6984e200.js",
    "revision": "cc2aba943aaa641c73210351499d693e"
  },
  {
    "url": "assets/js/49.29bc9319.js",
    "revision": "de4115daf4829123d3c9aaf0ec002e85"
  },
  {
    "url": "assets/js/5.ea987f19.js",
    "revision": "6cfa83ed359995e576cd8bf5eb52a091"
  },
  {
    "url": "assets/js/50.10cfc2ae.js",
    "revision": "0896905905a0d6fffd0728c02625482e"
  },
  {
    "url": "assets/js/51.8310a68d.js",
    "revision": "480ac4d204f93a9335c5a602fabc6601"
  },
  {
    "url": "assets/js/52.5923ca20.js",
    "revision": "031b11efcbb0546badcc3eb1117dd3d9"
  },
  {
    "url": "assets/js/53.7027d375.js",
    "revision": "cdafe802b52853f28ce59eaca7b9a7e7"
  },
  {
    "url": "assets/js/54.70e9320e.js",
    "revision": "51d9a74a3308af5b3aaec61a6ba0292e"
  },
  {
    "url": "assets/js/55.e7df94f4.js",
    "revision": "ff69c495893640c2e885093bd9823ab8"
  },
  {
    "url": "assets/js/56.28ecba38.js",
    "revision": "ab8caed0d9148097e3b0645d75dcaee3"
  },
  {
    "url": "assets/js/57.bb8e6578.js",
    "revision": "b28384b52159e2400e36fe5e8c0ef402"
  },
  {
    "url": "assets/js/58.76c8e57e.js",
    "revision": "0a147772276c31a2bb81ab3a2b196081"
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
    "url": "assets/js/60.4da8c1b2.js",
    "revision": "9b8c536188da45a189ae5161624bb639"
  },
  {
    "url": "assets/js/61.77d340b9.js",
    "revision": "0ef6739afebb3266aa317d2f7f2b912f"
  },
  {
    "url": "assets/js/62.7c63bd09.js",
    "revision": "90e514b5f2b8ff481b3992c6d607ef88"
  },
  {
    "url": "assets/js/63.75037cfb.js",
    "revision": "2c01ebd7eb4344d95365a8b5cc2a9bd7"
  },
  {
    "url": "assets/js/64.a555a545.js",
    "revision": "df8fadb4d75935168972ee5477f04c79"
  },
  {
    "url": "assets/js/65.487f34b3.js",
    "revision": "d879f17d21e3820ad14ad8fc1a9d053f"
  },
  {
    "url": "assets/js/66.3249d018.js",
    "revision": "860d93df06f5b5e7b33374b684bf9b9d"
  },
  {
    "url": "assets/js/67.6622d87c.js",
    "revision": "7ea0271d82480d2059f0bc2413147e85"
  },
  {
    "url": "assets/js/68.675c7b01.js",
    "revision": "6f942175763178ba04bbc2cf9372bfca"
  },
  {
    "url": "assets/js/69.25aeed39.js",
    "revision": "768daf341dc57c3b313bbbe9c59f922b"
  },
  {
    "url": "assets/js/7.f4b0b20b.js",
    "revision": "ad8e4a3974dc88be72611e0fdc5cbb1c"
  },
  {
    "url": "assets/js/70.76bbb93b.js",
    "revision": "4625362f6a2f64217e355fdb960e924a"
  },
  {
    "url": "assets/js/71.9af3531a.js",
    "revision": "7e70dbb634f84ef1a426c6707d48f8df"
  },
  {
    "url": "assets/js/72.a7f000db.js",
    "revision": "f1aaf597b135b35cfd8d444f7472eb80"
  },
  {
    "url": "assets/js/73.642462ff.js",
    "revision": "ac1f157d44695ce5c527e524c8d46316"
  },
  {
    "url": "assets/js/74.7189bd12.js",
    "revision": "c10b5e62d47cba211fb9929879aed3a1"
  },
  {
    "url": "assets/js/75.b857e76b.js",
    "revision": "7138abe9a28cacf2d0316e46b96dd9a2"
  },
  {
    "url": "assets/js/76.a5d04946.js",
    "revision": "249ab6e1573991353a2b3f596cff5174"
  },
  {
    "url": "assets/js/77.1d90b4c1.js",
    "revision": "62fe7c7be7b7e1610fe0e1376304e5cd"
  },
  {
    "url": "assets/js/78.7f738fb5.js",
    "revision": "143740bc599e161e6ef657d14becfe91"
  },
  {
    "url": "assets/js/79.4aa9f88d.js",
    "revision": "c3286e9be7efc5ec6e672ffe276527e8"
  },
  {
    "url": "assets/js/8.e0e09ba6.js",
    "revision": "a7ab55d6a0e272d8c878b99ff0e5d7c0"
  },
  {
    "url": "assets/js/80.00e132cb.js",
    "revision": "62959f97761bf48c7d7e2d7ce6302b0c"
  },
  {
    "url": "assets/js/81.4426508a.js",
    "revision": "efcdaed02f3946243c2b57e1efb72458"
  },
  {
    "url": "assets/js/82.1b01c870.js",
    "revision": "1fb1606b177a2f219598dfefdca352d6"
  },
  {
    "url": "assets/js/83.98164fd1.js",
    "revision": "84c04e33fe3f0c78f74d5d0f68c50dac"
  },
  {
    "url": "assets/js/84.42c73eec.js",
    "revision": "656fd8619ba36c8f482714917084ab70"
  },
  {
    "url": "assets/js/85.344d5676.js",
    "revision": "603a1469a2529117b6b44b8059ca59cd"
  },
  {
    "url": "assets/js/86.3df9959a.js",
    "revision": "29c966ff27f513fd93cce49300ef5683"
  },
  {
    "url": "assets/js/87.c1c0960f.js",
    "revision": "d74a8d139ff0267a0675d7c18f3054fa"
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
    "url": "assets/js/app.3ad42564.js",
    "revision": "e03c4d33fe1e21f0767f2be8f5c069cd"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "063d8aaefcfa1f2e0035373dd46fd2e5"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "475194c4d01329aeb0326eb84cde74b6"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "7038ca3e187e6452b12c513db6d63b32"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "a57a6254560cc173c2ef8a66e6bca7a9"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "8d6aa9a80bd8343a561ed6cdefab427f"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "73e08ef94a88652d327ea53c33a9946e"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "d11ff5c0d8b88093472cc5f5e894ad0d"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "109a4cf02fe426328a2edb5549c0cfc1"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "d53c75d66f1424c53eecac719b73d87e"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "4f08b09c2a3bbc28bc30698c0cb0925c"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "23a73fd0aa67ea8dd9534823b4310959"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "a9556db9356cd780717d2fc96b792fd3"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "c103da71774125fc7a3dcfeb9bd88065"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "cec9f2a47b4108134586e95b11f51835"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "412a0ba7a0867623068fa6804d2947bd"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "eaaea5c881e63d852df05fb55581db9c"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "ed39fe37113c54e866d941c7f6f4e385"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "c71381a6367e77252ad8f06aaa7ab008"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "b823df01ce84afabce6d83ece67079b2"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "b7c583329250c6ec7ba425aad010cc42"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "ac4b03669c1f55849e7c70a4a7a4035f"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "a1ac22d08d59ae3b054df3e9f975a144"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "d7897bf0096b7f59a3e98df0f7e0d973"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "70ad481e9ce578f56ae752df95fb1885"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "9be51a6996721c2d8a32498e20c29f4a"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "e3c34af51d07d15223ac1ef9b487a368"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "b75f6cb103d74f31272bd767da59514a"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "c181822c973765dc908470c383205b0e"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "1654d4cbc088430c2e86111fdc25f0d2"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "00d64b6065aac2cbcd4231bf12d77f84"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "8135e2bf791676179e8142a770495c4b"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "ecb0749122349ceaa35921c73c3ca69b"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "432068a040ad16051ce5ca255a18a18f"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "0d6db986bb98405b4771ed1a7c0de0e3"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "41b8b9eab92dc72ae554fd502659d5c4"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "238d5858ae207ef54d7743a0fc0e1553"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "536342df200217cb8432de4b3f082091"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "0cd53bde0fa56a5fd5ea2ba870e53343"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "d5ea957bba97ac8776ef95842d340882"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "f8c6e8eee8e62ae80863227c027c5cc4"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "2cddc4d546601820754f8c42db13ea14"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "1b57068653dcca0fa8c6a6e302767f24"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "47d6d5bf695ba92847aa1023a54af3c1"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "b13645bcdf2558cf2538092f2a6d0002"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "c9338bcb4707f1c0efc166872cff8f9d"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "5501e92f9ec52f0bfdf07e4597c60e18"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "71060a498ece990083cd6d9183e7a545"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "ec8a4046484a43d40ce9860c126b72cb"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "c214ad67a3796d7888b2f18bae3e4bfd"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "c4be78bb260bfd74d2cc0b5b650163bc"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "a1a30c15558d73b118b2ca680082065e"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "9aebe1c256fc847de413e10346c889ff"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "de47cab930580a8f8e74a251ea0ee324"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "aafca1b898f8639df1cbd7c95c5b9c3d"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "500a1872fa565795ee1af5b9e35ea2de"
  },
  {
    "url": "blog/other/git.html",
    "revision": "b2b9bd2e2a6bd31dfb190df85d549454"
  },
  {
    "url": "blog/other/index.html",
    "revision": "bb4dff0e50f994f33293a4506d0439d4"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "4fabd687b92a4da2dcc47a4d8e6f2170"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "3d91e3283095c1b8ff85d83a8bee3b68"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "f4e0f2776aafd86dc01a3930db0e3e28"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "10832a87aec220dc7847c230d769b5e5"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "c154ccd1d011325539e2671d5cf2f465"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "8f168055d38a7e3d615e1c2580277b9d"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "dc4cb2cac6e4dcba269d6551b9c9dd1d"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "ec516b59583c319ef8a46bc12e64b56f"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "bb6148610bf382b1fc02df796c0e7aa0"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "b5699ef9cce8a72a3e4d056b8a1cc086"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "c88844e6b7f7d10c898117dc0848b24d"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "4ea545af5a4fef64e8df1fe9ed7b8d32"
  },
  {
    "url": "blog/react/redux-toolkit.html",
    "revision": "e14897075c6e9e1609ab6e13e72b443e"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "476658f9a90e9545654107569bfbeef4"
  },
  {
    "url": "blog/react/virtualList.html",
    "revision": "584670fb6c3573f76afb9c5dd90938f5"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "8fa553aaacd2621a834223aba3d77b2b"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "bd31f8f841dc0a40cf7ada7df3f6208a"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "afe6990bc5e32e9865c11d007b289463"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "7ef5f146bc3a38870c425ba255d52e35"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "05604f54039546d4892f6c8acf925af3"
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
