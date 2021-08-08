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
    "revision": "71d870dac5ff7701073fd88a6a18bf18"
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
    "url": "assets/js/10.36b8c1c5.js",
    "revision": "f731a6ca9ac2b6435b2ab6629276ddf7"
  },
  {
    "url": "assets/js/11.e22cf602.js",
    "revision": "f6731b313eacbd810a0f1939c33e468d"
  },
  {
    "url": "assets/js/12.8206f706.js",
    "revision": "ffb1d080714c355a674e755854683c05"
  },
  {
    "url": "assets/js/13.521a4a77.js",
    "revision": "b26a0da9d4a0df8da56949a605aa004e"
  },
  {
    "url": "assets/js/14.8d2f46d7.js",
    "revision": "52e27ec3c25968f241ea3b28d6d9aa81"
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
    "url": "assets/js/17.e16d9f91.js",
    "revision": "fd9ebf4851f76d0d2fb5588f4fb3e491"
  },
  {
    "url": "assets/js/18.3da89251.js",
    "revision": "3e344f1c4ce8e2e08d996a424313c969"
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
    "url": "assets/js/20.603b95c9.js",
    "revision": "1d136fd454a909476170ada3d2f84308"
  },
  {
    "url": "assets/js/21.0bef0d31.js",
    "revision": "74217ee245d0af20b56fb0973658c213"
  },
  {
    "url": "assets/js/22.bd04dc92.js",
    "revision": "6e59bb08d559c6abd5d7864205341737"
  },
  {
    "url": "assets/js/23.ad22b831.js",
    "revision": "7d3a74a3520bae7787ff680a23493307"
  },
  {
    "url": "assets/js/24.c7b7a987.js",
    "revision": "bad6dc9f6b213b1a4ddcf84fea3e9d46"
  },
  {
    "url": "assets/js/25.a5fd2a33.js",
    "revision": "ef566b574d07c32b3bb0a36f2a3e78ea"
  },
  {
    "url": "assets/js/26.b028fcb0.js",
    "revision": "b73ceb76fabe6125fce2ab8cd754b71f"
  },
  {
    "url": "assets/js/27.24fd760b.js",
    "revision": "0985564b46ef08ad2033a232f2686c98"
  },
  {
    "url": "assets/js/28.22c8bcdb.js",
    "revision": "7e16881296d7e8d99ca3257a8be95832"
  },
  {
    "url": "assets/js/29.0bb4f07f.js",
    "revision": "6de5389827b3f166bc1103add05f6e40"
  },
  {
    "url": "assets/js/3.f8750e84.js",
    "revision": "818aac62f175d3fde4e236dad08830dd"
  },
  {
    "url": "assets/js/30.15d55a17.js",
    "revision": "a2d85c509e2e2aab8bb8dde4f63cf71a"
  },
  {
    "url": "assets/js/31.bd5dd138.js",
    "revision": "7882ad67c7d10b564669416b13996d61"
  },
  {
    "url": "assets/js/32.847c6857.js",
    "revision": "3b1c01e6866315a486aac26a47d7db03"
  },
  {
    "url": "assets/js/33.08d14329.js",
    "revision": "ba26717d10d9ee6606d9849477e9ab17"
  },
  {
    "url": "assets/js/34.67440a8b.js",
    "revision": "3f1cfc2e21ffe05bd887f2db26446994"
  },
  {
    "url": "assets/js/35.e693bc73.js",
    "revision": "e2b3b6093963f07c656692b554941251"
  },
  {
    "url": "assets/js/36.6ec5b56f.js",
    "revision": "16952f098a57def577af7397fcfb19de"
  },
  {
    "url": "assets/js/37.0d72436d.js",
    "revision": "3daa6c37b90a84f453f599183deae7c6"
  },
  {
    "url": "assets/js/38.09c25d83.js",
    "revision": "c482b404b833a568b8b1a79c01e56853"
  },
  {
    "url": "assets/js/39.d4f83549.js",
    "revision": "f7ecd565985127f4817c33ae5629dcf8"
  },
  {
    "url": "assets/js/4.4fd654e9.js",
    "revision": "3b1ecdb4393dadf4f29a90d04f97132b"
  },
  {
    "url": "assets/js/40.675cb4a7.js",
    "revision": "b3ca9d6162db82251720c29156ffcc04"
  },
  {
    "url": "assets/js/41.80dee5a2.js",
    "revision": "456591ca011edce61e871ad5eba4da8b"
  },
  {
    "url": "assets/js/42.c025765d.js",
    "revision": "de6d70b1c8973cfac67fc5c93ca3dc3e"
  },
  {
    "url": "assets/js/43.6551d163.js",
    "revision": "e3c65bc470c10a23baf0fefc047a70ed"
  },
  {
    "url": "assets/js/44.377d200e.js",
    "revision": "9830ead32f176c0d703f118d91afeff0"
  },
  {
    "url": "assets/js/45.bd866ed7.js",
    "revision": "73c4c9d7cbdc26778f1ce6ff7a186a9f"
  },
  {
    "url": "assets/js/46.f5f65bef.js",
    "revision": "59a504a7eecf437008a97a702d0fc15e"
  },
  {
    "url": "assets/js/47.ebd2d9c8.js",
    "revision": "4bb5b1ed0a46bc8a114042dc6210a69e"
  },
  {
    "url": "assets/js/48.2aa0e63a.js",
    "revision": "903c15e0f1ea3ffd24f755809b0a87f9"
  },
  {
    "url": "assets/js/49.4305c9d4.js",
    "revision": "3eeb78a5ca8f0b6cfbcc8e93a12d6948"
  },
  {
    "url": "assets/js/5.818d73be.js",
    "revision": "f28a4862e278bd36a62e6e6c81cc5853"
  },
  {
    "url": "assets/js/50.7f97d960.js",
    "revision": "8c65dff3d551ccb0ba700d4ccb1867ed"
  },
  {
    "url": "assets/js/51.b3d49ea7.js",
    "revision": "5e0766c61da4698e3dbe73505936f356"
  },
  {
    "url": "assets/js/52.c6710c47.js",
    "revision": "364ed73dd5fdc79bf19bb428e8eca346"
  },
  {
    "url": "assets/js/53.94ec67f2.js",
    "revision": "cf06a153060d32da95ba1ba12c3cb61b"
  },
  {
    "url": "assets/js/54.f17cf3a6.js",
    "revision": "4657af70cb6ca4ba8b4867624b25f972"
  },
  {
    "url": "assets/js/55.2577aa5b.js",
    "revision": "7279ddaf10ac9b5a7f30fdcbe8574783"
  },
  {
    "url": "assets/js/56.ca052534.js",
    "revision": "860557d8f6f39e6117641eca45243dcb"
  },
  {
    "url": "assets/js/57.22276d09.js",
    "revision": "d77c4ac6a10d08965e5c148a636b3fee"
  },
  {
    "url": "assets/js/58.995c7eef.js",
    "revision": "cd0cf10a0528dc4c2b5d872ac204e778"
  },
  {
    "url": "assets/js/59.0b972d6f.js",
    "revision": "86cfa31ea385c34663e506a8d2437816"
  },
  {
    "url": "assets/js/6.481af340.js",
    "revision": "8083b40f0d799f6d2270129c6b601261"
  },
  {
    "url": "assets/js/60.1739f37f.js",
    "revision": "799e9461764b6eb1490cb9eca992f036"
  },
  {
    "url": "assets/js/61.89585208.js",
    "revision": "2dfe72637b38b665d4724f5e8553951e"
  },
  {
    "url": "assets/js/62.6e04c6cd.js",
    "revision": "19569474759804bf3916d61cb2093d36"
  },
  {
    "url": "assets/js/63.61191889.js",
    "revision": "73ea76a98a69ae4832aa7c1fb2ca3b7b"
  },
  {
    "url": "assets/js/64.aae603e7.js",
    "revision": "220dd7dde44a3640b1fca4abb362023a"
  },
  {
    "url": "assets/js/65.cbc2b0dc.js",
    "revision": "42bc02aa934dbe8cfe7b44f0c8f3a963"
  },
  {
    "url": "assets/js/66.39bdd766.js",
    "revision": "8aacd61acdf4966eaad1b4765c0b823b"
  },
  {
    "url": "assets/js/67.ab280e4e.js",
    "revision": "d6439f88f4b85de769c2a86bda92f164"
  },
  {
    "url": "assets/js/68.50d7db82.js",
    "revision": "030057320a6d2a1bb7842446d6472ebe"
  },
  {
    "url": "assets/js/69.a3a44bfd.js",
    "revision": "747e68b00e1db253a77161f66d3b793c"
  },
  {
    "url": "assets/js/7.6764d0cc.js",
    "revision": "f2c7bc66736eebf730c3a88d0902db25"
  },
  {
    "url": "assets/js/70.355c8b44.js",
    "revision": "d541eb185279a6f2230ffcc27dff663a"
  },
  {
    "url": "assets/js/71.7d7040a2.js",
    "revision": "66d650fc4841212d77d592612716b1be"
  },
  {
    "url": "assets/js/72.6642c51d.js",
    "revision": "b8561eaa13150763b701736a65c082be"
  },
  {
    "url": "assets/js/73.dcd56ff3.js",
    "revision": "9f2893638b2fde6d989d107b7d0a16aa"
  },
  {
    "url": "assets/js/74.6cf9b654.js",
    "revision": "dcf46a90dad0502b89851b8085f72442"
  },
  {
    "url": "assets/js/75.542f01cc.js",
    "revision": "90e906802a4cd2c3e302cc140b45a6fb"
  },
  {
    "url": "assets/js/76.decfd3e0.js",
    "revision": "9576c737673ebb02ce7ddb0b511350a8"
  },
  {
    "url": "assets/js/77.45de26b2.js",
    "revision": "5273cbea7b951edaf9cbd908520c4c50"
  },
  {
    "url": "assets/js/78.3abade70.js",
    "revision": "17e0aff209484eed6a8015d8b393d4e7"
  },
  {
    "url": "assets/js/79.e2bf2c98.js",
    "revision": "185f54d9e3bf755d5885e8ff07df9a82"
  },
  {
    "url": "assets/js/8.3072bd44.js",
    "revision": "08dab0c4952ce7733b37c6e25c218388"
  },
  {
    "url": "assets/js/80.fe0572d8.js",
    "revision": "6e6c5d598da6a87196770c9ceeb5ce88"
  },
  {
    "url": "assets/js/81.7d7cfffa.js",
    "revision": "9b7768a625b4dece62f26c986ba1c39c"
  },
  {
    "url": "assets/js/82.ac999033.js",
    "revision": "d5e4639436e5f842f2daae79a8229316"
  },
  {
    "url": "assets/js/83.34fd51e1.js",
    "revision": "53a833c59a989f186e9097b985057404"
  },
  {
    "url": "assets/js/84.5a00f261.js",
    "revision": "6ab136fc5340b963dbdb8eb133a17316"
  },
  {
    "url": "assets/js/85.0ada97a7.js",
    "revision": "0529b992e48f4704d2e48380bff5645d"
  },
  {
    "url": "assets/js/9.7cecbded.js",
    "revision": "8b7de58200e7fa50dd843ee671f34406"
  },
  {
    "url": "assets/js/app.19419c8c.js",
    "revision": "40a599824ff4de37afaebe8288347572"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "92a7597b61b931a2612159f16595840f"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "738ffc6680336c95bc4355e5fa8b7fe9"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "ef6603c957932ce3fac783ca20313d31"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "6ac5655454195bdb310c04ddd9973245"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "a43b89b499eb6f9cd6d455ad7a64c28e"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "926404e1dacb30e3082cc50dc0d0baab"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "c97321f5b9f75067da01919b0f676a6c"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "37fe06bbe2e41bf87b979a8d5a40e56b"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "166048362285b7aac3c61577488ef6f2"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "9200e2c71fa227d3fee64774bb0ccf6b"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "5bf65f1d0b648847cab2a28f1126d935"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "38ab6b09e8622c83cf128f67f7f69489"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "f59e4bcbc9fc90497458508d9b92c32f"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "9faba2c1daaba329c549d143d41cbdce"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "639d2b44d5567dc3f779fad09a364f13"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "922a701e5fecaa06fc836f55bbc2048d"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "38a0520069e6e3d16b218804907df191"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "b75cd1b784b20d9f7bb15821986f24ef"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "e48bb63273332f9625bf3887319426dd"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "29dbb8faef3fb2826a6d45f42b8c141b"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "358d059d41fa551fad20f82141243366"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "876ccc6503538b587ec71e12c5e96352"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "b4f6d951bc03e6b2b709f8d44e14e73a"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "f7ea2173c6aa3354ed28e622493a47f1"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "19962818844c830fd0eef26f2590694d"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "7724bc004f552e14c9d9f455b720481c"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "bc69684685f0d17f6afcfe9112d5c627"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "21478a8e75d16fbca04b1a53ed028e05"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "78bf6ce4e520e258e936afb40cd8dd54"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "9b60fd5be70bb73aff4251345d15fcc8"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "9d0f54c42a5450c47da723ddea134b60"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "bea0517df2a43d10f9ac67c7dc855269"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "6ba663a69f1f1a3bc92e18a90dc3b070"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "eebde1ff094d796bc465b84b4d140088"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "2eb208fbb647b43484e57022e57b326c"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "2efcdb548ed96a458535b2f442dcdf98"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "b7054023b5dd2004c5127f353d01e9b0"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "35582595c3004ca17cfdc8d653c1e38a"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "21db35b2f7c278b2c8284bae967378a0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "e7d15a895321965117c965b09b452540"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "ae3fe51d027a45a06f59711a18052449"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "d31b871dd01b4a3a28a0b7d0c7b6ccdb"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "85ffa8920f15e19227b1d713df288b96"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "b43302482f8e1b40fb7da6bc18729e50"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "f8dc025bb94be71d12a7f9eea3b2b7ec"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "a4ad266de830ae7abe8ec8cb581d703c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "cc5963b07739d49926a24c884be495b8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "3ade11ff201ecf8fdaf13127796fb2c8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "41779d00eff0a62af756f0a4facc48e7"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "78572e12938f0b2f96b31d9d9270c869"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "d71bf8e85c3265260cd6a5c1c5f673e8"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "61dfeb763883e64fdb137dc9d548a99c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "1ffbd97abc9733ebc341433ae2bfeef4"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "9d579618acfaa7b668b791545e247f04"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "c14f1bfd6f50d6ddf062bb062444b051"
  },
  {
    "url": "blog/other/git.html",
    "revision": "ed79a551c0ef7f5231e3365d8b95562a"
  },
  {
    "url": "blog/other/index.html",
    "revision": "41abdadd55dfbda5f2ec5662ea413a2e"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "49ba9633967a700a4d48553dc8193f78"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "bc8f88c4352353708136381732e56c31"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "06585bb0aed36009d57e0faa3840ab7d"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "7cbaad24912a686f8c077f4386c52b45"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "ef9c27d0f940db505cde65548aa1bd60"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "b038c6da941111a72d872d9cc6a3aa02"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "64e91f11efd0e3e1eebf0fb8b214b2dd"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "e02ca080c82e102c3f4c9a8964e75afb"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "ffbe616f88f530246aea49abea1cc44f"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "c646caff21d838d61d649dfeeae6ae09"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "074709427e3c6857070857f6f39fdfe4"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "bc4273c0f5c5f2913c60f61f60e64c76"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "6639fb9284dca0629efa1fcace2dda05"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "4f9307b20f4baa2d8e143ed110050c81"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "d91e1a6cda98b39bfd699df1b81bc38d"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "83a7469d059947b4b4fb200e967fc24d"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "1e9b266f18ca7d1daca1eaa86436224e"
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
