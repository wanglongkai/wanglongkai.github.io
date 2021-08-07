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
    "revision": "24737e04333ce8f54fe405a361e29124"
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
    "url": "assets/js/10.fd836b88.js",
    "revision": "3fa76c71a5d106f2381e32ba4dbdc523"
  },
  {
    "url": "assets/js/11.07becf8a.js",
    "revision": "e5ca8063eae7732030798281c60cefec"
  },
  {
    "url": "assets/js/12.d5a5a1de.js",
    "revision": "fe82b20b894c03e917ceae5b778639aa"
  },
  {
    "url": "assets/js/13.149f54b7.js",
    "revision": "3e5fe594248403f27d73a3d3c4888c4b"
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
    "url": "assets/js/16.02b08e10.js",
    "revision": "df1625594ebcf6c072e2269e597a7179"
  },
  {
    "url": "assets/js/17.237b8612.js",
    "revision": "cf63c93013d2c0ec9fc94aeddbc0f5fd"
  },
  {
    "url": "assets/js/18.9788266b.js",
    "revision": "f39f0172f44724dfbfc1e2deba9e1cfc"
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
    "url": "assets/js/22.85e1e9d2.js",
    "revision": "06e2fe01de572c1e57357aacb14d357b"
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
    "url": "assets/js/25.9a75c028.js",
    "revision": "3e7ffbfb3a1d5729a07c1bd2f6d8e6af"
  },
  {
    "url": "assets/js/26.d578ec0c.js",
    "revision": "ebe617bf3dbd9807f0efbd2dec33c734"
  },
  {
    "url": "assets/js/27.24fd760b.js",
    "revision": "0985564b46ef08ad2033a232f2686c98"
  },
  {
    "url": "assets/js/28.89c6491a.js",
    "revision": "0e28a5891f9cb9d20147951b6b37feba"
  },
  {
    "url": "assets/js/29.b3746333.js",
    "revision": "0a32d8f204c60c3437fc110e1f926a85"
  },
  {
    "url": "assets/js/3.95016853.js",
    "revision": "6dc65e1dde02732d6c44528e8b9767de"
  },
  {
    "url": "assets/js/30.4b6150b5.js",
    "revision": "868f88a87aa2d8225d32bda56220eb81"
  },
  {
    "url": "assets/js/31.04153c88.js",
    "revision": "92788a97e8804700fa2b0acc0971df92"
  },
  {
    "url": "assets/js/32.d2b19a90.js",
    "revision": "3b0ded35898434607eade719cc4c41f0"
  },
  {
    "url": "assets/js/33.08d14329.js",
    "revision": "ba26717d10d9ee6606d9849477e9ab17"
  },
  {
    "url": "assets/js/34.8a5ca30b.js",
    "revision": "d3c27bdfcc712bee796f5d62e6eb7c71"
  },
  {
    "url": "assets/js/35.86dfdab4.js",
    "revision": "a70f42ccba58c60f6aa3cd60b14bf00d"
  },
  {
    "url": "assets/js/36.2cd990d9.js",
    "revision": "69f8de50bea9fc7721d6096dc5209560"
  },
  {
    "url": "assets/js/37.216a3def.js",
    "revision": "faff8db95650cd721070f39954d87b41"
  },
  {
    "url": "assets/js/38.869e8c65.js",
    "revision": "abedae16be341374a7f0c4ee277b2e41"
  },
  {
    "url": "assets/js/39.efde3c02.js",
    "revision": "d7f45f16019f48956e9740e842f8bbc1"
  },
  {
    "url": "assets/js/4.d956ce5c.js",
    "revision": "072883b2d73e508139704ba8a4cde329"
  },
  {
    "url": "assets/js/40.d624f6da.js",
    "revision": "24f942ff93df9483f728b0d40faa943f"
  },
  {
    "url": "assets/js/41.4e7c2d22.js",
    "revision": "80e77941aa4189184c92c4ac79553cc3"
  },
  {
    "url": "assets/js/42.b75109e3.js",
    "revision": "7ddd6da1f926eef36931b5993ba86586"
  },
  {
    "url": "assets/js/43.f1399116.js",
    "revision": "d6eee6b54ef10252a8ff5abbfdb381a3"
  },
  {
    "url": "assets/js/44.20188c19.js",
    "revision": "8cfdc487cc4d2f1af49eadcd98767187"
  },
  {
    "url": "assets/js/45.7a2d1b27.js",
    "revision": "2471e417d2a69af4e9b39d83c6e2a164"
  },
  {
    "url": "assets/js/46.4c781cb1.js",
    "revision": "306056bae6fa835930977f639417002f"
  },
  {
    "url": "assets/js/47.f40bf83a.js",
    "revision": "ecfb2fc3106460ed3c14379bb661a4cf"
  },
  {
    "url": "assets/js/48.ca29a79a.js",
    "revision": "5c4b2e2ec5c5351b2da0015dba573a33"
  },
  {
    "url": "assets/js/49.a3857f3c.js",
    "revision": "d1fb2241c2a77314068a8e20cbcd6141"
  },
  {
    "url": "assets/js/5.818d73be.js",
    "revision": "f28a4862e278bd36a62e6e6c81cc5853"
  },
  {
    "url": "assets/js/50.f6680565.js",
    "revision": "f8b5919e680d632ee86d6fca2beac403"
  },
  {
    "url": "assets/js/51.67a00522.js",
    "revision": "f887f466b9817b854a73038a013bdadd"
  },
  {
    "url": "assets/js/52.13ad5111.js",
    "revision": "1cdf350d7c5a8b9152e0f760149713ce"
  },
  {
    "url": "assets/js/53.081260e7.js",
    "revision": "32d535b8764a86a55d505bc34cf2633e"
  },
  {
    "url": "assets/js/54.06e730cb.js",
    "revision": "17d4a318788d8d864cc0e197adba7959"
  },
  {
    "url": "assets/js/55.8e08ab45.js",
    "revision": "d5f5a1e393cedd91ec79242486b0e52e"
  },
  {
    "url": "assets/js/56.f33a83f1.js",
    "revision": "3db70c9d2d66c93bbcfd3d1ddd394a57"
  },
  {
    "url": "assets/js/57.a1e117d1.js",
    "revision": "33121a3d985382ee7629661c28a20d1a"
  },
  {
    "url": "assets/js/58.986edf95.js",
    "revision": "2e6fb6736b28a2a900e28f17cae5a345"
  },
  {
    "url": "assets/js/59.ee1909ee.js",
    "revision": "794e3dac64854d41cf9d8d0f750356a9"
  },
  {
    "url": "assets/js/6.481af340.js",
    "revision": "8083b40f0d799f6d2270129c6b601261"
  },
  {
    "url": "assets/js/60.d573c0ee.js",
    "revision": "99ad7618ef801ae5e9a55ce0135c4ca9"
  },
  {
    "url": "assets/js/61.f6f36ced.js",
    "revision": "4c7de0420a681a0a13d639b11385c181"
  },
  {
    "url": "assets/js/62.10871089.js",
    "revision": "67e847954ac2da028279c85beb57ef32"
  },
  {
    "url": "assets/js/63.54a77155.js",
    "revision": "183602d92852cf25341c3b0f37b5944a"
  },
  {
    "url": "assets/js/64.5a08668f.js",
    "revision": "0a20ca3421fe9f94c2e68029aa769b5b"
  },
  {
    "url": "assets/js/65.db2c8b1b.js",
    "revision": "2af79c586111d59cf0f8c28a611fb8e9"
  },
  {
    "url": "assets/js/66.75276445.js",
    "revision": "6ecb69b4a3cb7f29419de8152cd293d8"
  },
  {
    "url": "assets/js/67.e8d8edd5.js",
    "revision": "a0c32b53c55d04e93bfe02a5251f84d5"
  },
  {
    "url": "assets/js/68.475d932e.js",
    "revision": "d72ac7d2bb545335cf0276e5e496c9c7"
  },
  {
    "url": "assets/js/69.aa9884bd.js",
    "revision": "5b4bf721eff489aa6b9384a9d9d8036b"
  },
  {
    "url": "assets/js/7.3b6600bd.js",
    "revision": "3c0f32e18f71c854406f01c7adfbd2ad"
  },
  {
    "url": "assets/js/70.67f4ed33.js",
    "revision": "e8d0c0766a6027f8f80a7e71a6fb68df"
  },
  {
    "url": "assets/js/71.49db07ef.js",
    "revision": "4e19f6f35358f2b3bbeeddd3a1a3ac47"
  },
  {
    "url": "assets/js/72.5bb1734f.js",
    "revision": "855b96760c60f701247f50d2c25fccef"
  },
  {
    "url": "assets/js/73.228cbebe.js",
    "revision": "824065882135f519c5420b7c809cf1ee"
  },
  {
    "url": "assets/js/74.13be6c6f.js",
    "revision": "97a1cd9b8fa31e118f21e924baa50313"
  },
  {
    "url": "assets/js/75.5799362f.js",
    "revision": "d170ee1d4fc3a164fa84c57567b74dfc"
  },
  {
    "url": "assets/js/76.b701cb92.js",
    "revision": "7210eedc8cc751780a44b61b914c79c0"
  },
  {
    "url": "assets/js/77.cd3ee868.js",
    "revision": "5219c171b695de7b3636e0baae448802"
  },
  {
    "url": "assets/js/78.ab73a10d.js",
    "revision": "e653ccdd7d81d88fc5c623558da47d92"
  },
  {
    "url": "assets/js/79.bf52f542.js",
    "revision": "40c7e7b447842e1c57d07dd01f380005"
  },
  {
    "url": "assets/js/8.e576c660.js",
    "revision": "951a0df7a98fca806f4ab6cf1f1ca951"
  },
  {
    "url": "assets/js/80.17d187f5.js",
    "revision": "4545e1fe10af274312fc208284589cb5"
  },
  {
    "url": "assets/js/81.2f84c712.js",
    "revision": "0b3863bdfe14a7f6724f3c40fcba789b"
  },
  {
    "url": "assets/js/82.0b7c1616.js",
    "revision": "a75236d816470bdc06feec08015acea6"
  },
  {
    "url": "assets/js/83.a08b6ed3.js",
    "revision": "41dbc235ea160a608237cafdfb773c48"
  },
  {
    "url": "assets/js/84.afe39273.js",
    "revision": "f339c187feaa6b8e4aeaf502e13d2fbd"
  },
  {
    "url": "assets/js/9.7cecbded.js",
    "revision": "8b7de58200e7fa50dd843ee671f34406"
  },
  {
    "url": "assets/js/app.7cc8bdf2.js",
    "revision": "7a71cfd2c073795a9039757273eaeab8"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "7af79e4df1775deca3e4794931262ecf"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "e743bb36207ec8173725d32bda7d1377"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "5806872c4158bec2006c51f1f01fed06"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "e0bfba1213038ef48885c49db9ecc138"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "23baf27ac3998b3de3cfbd0cc7343546"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "8d9f18cd54f648c51a73bdffd9221ff3"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "ddb880193cd932caab2ec89e6b8da0f3"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "087dadffc1abe3f350caf051118b4049"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "d5eba56317f7c640463bc6709c66ddb8"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "acdd84714ac71ffbbf2de96fd4beb983"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "f3fd08a1c48c7a447b7be7e7f63f3d4c"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "935971e287d8ae41749cb4fdda38204e"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "c752146622783ec0a6dc6a1451899e96"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "69bc4d9d6224fdbd789c2582b1ecbb84"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "fa6650449a71597197fcc9dd48a5b810"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "380e886160c8ac9af253eda24fb4ee67"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "671d140eb8d20129fec01cfb930c6d6b"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "8d51bebeb3931369281ce08f83c3540b"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "fcfb5885e05969b86649c35c89a1c46e"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "1a629bef11a7e9dc6811b6346fcd4eb2"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "ae336891e06c1a406cd7c5f6a97f0c8a"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "254bdceb62b6378a1c25e380bd7efb0b"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "b7c25519c58763b7c6c9dd9b89dfbe9b"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "634ac30ec95a6738be24e465df033488"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "a8c88528c5215cffe14d37c2a39a2752"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "0d59b63bbd5b4cf7319091ea9daf26f6"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "fca6b7c6a55bc4440d7997b559955a7e"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "0caa8ebfe39df883ea70dc306403354b"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "8a833c8a803cfb5ff7385a7ab261ce33"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "9d94ac126481846b386b323851b63eea"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "96444377d29735d314bce81865161ee4"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "7919a3e9c3dcd3da977a8a7c6e2b2041"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "4895a267f0e3451a1cc5425587b74dde"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "def146e8bfcd1b873796ae63e1e9052e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "da56686f3cd18a5ff9f768d0a2d66fcb"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "db14d67678b382a71b8a281b9a2287af"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "dfcddd4c7cee126f4921fa8a25061130"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "18793c84eed57da0dc68ccbb73e4552b"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "6e25affac31c5c5a67d9f419274b25b3"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "4ea6b7859a430b328d77f4b6afd6ce53"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "de663ce14159df5bc2e884260f5ee851"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "946f357451a98c96a0f5083d0c7a5d64"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "09a961fce8b138d7afe30435d7d3eefc"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "80405105a9254d2bf41e61231b19d25e"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "efe7b4d187fc9bf1d9d2734a223c38a0"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "75f5acbfade699b5b4009d20c2184f2d"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "02d49e7c03ad87c87d5669b547ae8e08"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "b970d5251317df8c509299028c83ec65"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "35966d8a6baa7df53ec6e0ad0a5e0d9c"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "3c7ed56bcb0115859c06b0d404253fe6"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "305bcc664220e55202d2ebc627681fd7"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "92686c8cdd14c87e19503cb27a124bbb"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "4187c6902e1cb83557584d1eae987c57"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "89245d8a441d9857c1ca2f5f5b419332"
  },
  {
    "url": "blog/other/git.html",
    "revision": "760c281fc735a381346f8b9af419ada2"
  },
  {
    "url": "blog/other/index.html",
    "revision": "c391381b5efb1831888a6b9a8a5b038f"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "ca72b23447ab80f56c066b29ce6bdee2"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "a8d58b90296afea0b1803027203e517f"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "1923cb3e54ee0eb587e311b8ca13c6ab"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "aca0b205915026acbc794c4e8af96b9d"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "aafc319b50bcf943bcf1d73b9f5fe4e0"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "6e4fa468db1685bcbc913f7748473ba4"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "1cb0c28a5e84f710365d3d0f8393b3b0"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "f02587912153b409ff5b0a80907c7ff3"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "75801450bd7d5193c2218d1900820354"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "5089be4eff933ebb2d1ead836238449a"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "374f13e244b5d8e15728dae0cd37db04"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "26e532b8ce448ec4ca22bc52d633530e"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "5d18290943a8941bb90d9fec3a7993e1"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "3b86ce65e40a1821df9159133cff7cda"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "7ad3d4e0068ac9e0f99770c25a8e9996"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "eeb40014ef7351048c87725bbebc97ac"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "66f64118b89a580dd20b7e0b2ef2b6d0"
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
