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
    "revision": "87ac73de40efa91031caa3500a60918b"
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
    "url": "assets/js/10.f30a488b.js",
    "revision": "cea24ede7ddfe96431f4be0ff9341156"
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
    "url": "assets/js/13.dc170ad6.js",
    "revision": "93a7039725f0083ae4bc3bdb2275a89d"
  },
  {
    "url": "assets/js/14.0535b321.js",
    "revision": "0c56cff4eacc51ccf857980b40461dc0"
  },
  {
    "url": "assets/js/15.baf978d6.js",
    "revision": "59d57d176cdec61042594dcaf7445dae"
  },
  {
    "url": "assets/js/16.5fb47653.js",
    "revision": "6fa1c0499cfaf7327c4960cac01e2677"
  },
  {
    "url": "assets/js/17.d7bf1e72.js",
    "revision": "1233c59abf9bcf99840cee34498440ac"
  },
  {
    "url": "assets/js/18.4efdf459.js",
    "revision": "f2b9b9cbffa412816646c9d5eb8745e4"
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
    "url": "assets/js/22.39e3372e.js",
    "revision": "5dd9411ea1c8611c799c8c07d198cf13"
  },
  {
    "url": "assets/js/23.8d1822ea.js",
    "revision": "7dc3642d8b986b34b036ae528a91ee5e"
  },
  {
    "url": "assets/js/24.aadbf77d.js",
    "revision": "88214fff56dc0ed43db60e8fd141cc13"
  },
  {
    "url": "assets/js/25.81b469cd.js",
    "revision": "75412cadcb216b8255683bccd2a7e134"
  },
  {
    "url": "assets/js/26.ee4c0405.js",
    "revision": "56e742e9d201ba2bce4d209eec284004"
  },
  {
    "url": "assets/js/27.f5c795fc.js",
    "revision": "29a58e4ed0753211ef810d10725f9c8f"
  },
  {
    "url": "assets/js/28.78bfde03.js",
    "revision": "0f80a7465c54ebe42c460792cc367a64"
  },
  {
    "url": "assets/js/29.c25113a8.js",
    "revision": "4e4aceb2a76757f7c8ce1cd064cf686a"
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
    "url": "assets/js/31.76bc30f3.js",
    "revision": "c60e40cda1982ffe8ec62c3a6b9812ef"
  },
  {
    "url": "assets/js/32.159b4a97.js",
    "revision": "9381a6ee36586c0d2e678da470c41777"
  },
  {
    "url": "assets/js/33.ef907076.js",
    "revision": "c3eaae3993ce1a25b9916c15a55a6c99"
  },
  {
    "url": "assets/js/34.3f137856.js",
    "revision": "693a38fe4a834be3cfc5a3d1d89b2d06"
  },
  {
    "url": "assets/js/35.7b49c933.js",
    "revision": "9c36988fe9493ed6dbb86264754d5245"
  },
  {
    "url": "assets/js/36.13eaa54f.js",
    "revision": "a4c9a2eacd0cc7f11c1e502756c1762e"
  },
  {
    "url": "assets/js/37.f8e2d437.js",
    "revision": "8f9c8cf37698545a30c0643754c3aed3"
  },
  {
    "url": "assets/js/38.d2be1467.js",
    "revision": "bcaa1e1ba223383fc798e36ccfdd3339"
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
    "url": "assets/js/44.de80818d.js",
    "revision": "c0cc54f624048aef0d09b75e81ceb1ff"
  },
  {
    "url": "assets/js/45.afd97d07.js",
    "revision": "c3cbf77e1219556ef63c32a4c9b6b025"
  },
  {
    "url": "assets/js/46.867d08f6.js",
    "revision": "c310897a3475f52b08e9306d185f3be5"
  },
  {
    "url": "assets/js/47.50bf4d0e.js",
    "revision": "6a810365e82497032fa5ddec05b8e3be"
  },
  {
    "url": "assets/js/48.55fd9c19.js",
    "revision": "6e535fca607117e574d8529d0068c9a1"
  },
  {
    "url": "assets/js/49.eb2fcfa0.js",
    "revision": "9748597fef0cba9cb34d6dcfa33fbb7b"
  },
  {
    "url": "assets/js/5.55f5d8e7.js",
    "revision": "a24e64608f580f767fb943a27edec738"
  },
  {
    "url": "assets/js/50.b00337ae.js",
    "revision": "9512a6aed051d674a7e360338313ec0c"
  },
  {
    "url": "assets/js/51.16007f37.js",
    "revision": "de92377a42e91b62cf9c3f7aabc8625f"
  },
  {
    "url": "assets/js/52.e4a82200.js",
    "revision": "1c5bc30b4d6836b35672b0d777f494a4"
  },
  {
    "url": "assets/js/53.263e8e5f.js",
    "revision": "5eea6edd3da7068934ada56be5d4c39d"
  },
  {
    "url": "assets/js/54.1be0c5ea.js",
    "revision": "6f002f0815bd80cfbbcfa5a8a1c42b7f"
  },
  {
    "url": "assets/js/55.e3cc5f42.js",
    "revision": "705036609b1e55cc549c6d91dfbd7fcf"
  },
  {
    "url": "assets/js/56.139a1920.js",
    "revision": "9ff8d23ed0db746ef807ce46bbecc8bd"
  },
  {
    "url": "assets/js/57.406a42fd.js",
    "revision": "a0fafde2f009a896de4648e5d390f706"
  },
  {
    "url": "assets/js/58.beff3bc7.js",
    "revision": "8d4d3aa710c9f2698fccbe6ad3387534"
  },
  {
    "url": "assets/js/59.9580bf5e.js",
    "revision": "6d76964a52046f96e3fdbe25a617cd03"
  },
  {
    "url": "assets/js/6.bee4e456.js",
    "revision": "f533cf7b288718c28da5e8bf9d609ede"
  },
  {
    "url": "assets/js/60.be8812f2.js",
    "revision": "b6ec01da5b90ad2b880efe6eebe12e2c"
  },
  {
    "url": "assets/js/61.473796f5.js",
    "revision": "fa36d734c94f1eed2faccf2d1b988c32"
  },
  {
    "url": "assets/js/62.015b3a42.js",
    "revision": "fca7f92796d49396bc56f141ef29e5ed"
  },
  {
    "url": "assets/js/63.a11e1477.js",
    "revision": "b77842d882c8979f0fa079127f957152"
  },
  {
    "url": "assets/js/64.21f466db.js",
    "revision": "be964cf548c202f9a1abc10b1a275fb6"
  },
  {
    "url": "assets/js/65.1e548df1.js",
    "revision": "b116e26d93b9ea7e2fd20e749f859558"
  },
  {
    "url": "assets/js/66.876c3682.js",
    "revision": "e61722c0604cf6221337c1d5e756f454"
  },
  {
    "url": "assets/js/67.cc1260e5.js",
    "revision": "23c4dd02faa3ecdc2fefa523c38345b1"
  },
  {
    "url": "assets/js/68.decfdeef.js",
    "revision": "49c1faa8b0884c4b2b36866a5783dbaa"
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
    "url": "assets/js/71.28682fc4.js",
    "revision": "b312dceff2587ce8966de75baa94bdda"
  },
  {
    "url": "assets/js/72.6a5caad6.js",
    "revision": "24a0e4d9f7048af85156f1074fcfd912"
  },
  {
    "url": "assets/js/73.9f7dee0b.js",
    "revision": "0271f05f7c9602ec3352e489b44402dc"
  },
  {
    "url": "assets/js/74.08bf90ff.js",
    "revision": "b8cb573a2c32a9b26f98143e97272bbf"
  },
  {
    "url": "assets/js/75.0020fa11.js",
    "revision": "e6bd3725ed243cc9c49fd74a9f08259f"
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
    "url": "assets/js/78.cd4ba979.js",
    "revision": "b5aabae247b6fc3c4abdcbf841cc9b53"
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
    "url": "assets/js/80.898a480e.js",
    "revision": "335044198e28e31dcde323a0204310c9"
  },
  {
    "url": "assets/js/81.72a8bc0d.js",
    "revision": "6d87db9d062d45c13c45394ee9ce9d64"
  },
  {
    "url": "assets/js/82.440f7bcd.js",
    "revision": "6caff2fe6d990162984c2893afe3dff0"
  },
  {
    "url": "assets/js/83.046e0255.js",
    "revision": "772766c4506c55280d13323ebc7b78b5"
  },
  {
    "url": "assets/js/84.67a39466.js",
    "revision": "d5266b4bbec6f9658a136bc3c4fba1c7"
  },
  {
    "url": "assets/js/85.e9a2f286.js",
    "revision": "1ecb4ecb147ad27e4c5d27d781a92283"
  },
  {
    "url": "assets/js/86.e4f6ad6c.js",
    "revision": "49cf7eb87775a3f902027112ec47f8ea"
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
    "url": "assets/js/app.a8b38f24.js",
    "revision": "0b5649da28a4b4a7ccc2e914373505bb"
  },
  {
    "url": "blog/daily/生成器求下一个质数.html",
    "revision": "0904e8fd842d7c66e6bb7b2e29a2eeeb"
  },
  {
    "url": "blog/daily/手写bind和call.html",
    "revision": "2d665c72fa171e9ad5ffd48ec511ff97"
  },
  {
    "url": "blog/daily/手写Promise.html",
    "revision": "fbf4d09098fc79188fd532a8817feaa4"
  },
  {
    "url": "blog/daily/artTemplate.html",
    "revision": "3bfc82eb9297e68fd33c8ac2423d01d8"
  },
  {
    "url": "blog/daily/call-apply.html",
    "revision": "7358267a5e124164a94d0545c28762cf"
  },
  {
    "url": "blog/daily/gcb&lcm.html",
    "revision": "c78b33c47215511af14bd3b5a9333c7e"
  },
  {
    "url": "blog/daily/index.html",
    "revision": "be33ccadc482cd2eb36c693550d3f1c4"
  },
  {
    "url": "blog/daily/interview01.html",
    "revision": "bce6384ab0e48885d0b0b97754929bc7"
  },
  {
    "url": "blog/daily/interview02.html",
    "revision": "cbc6928502b409d337de2de3239f3e83"
  },
  {
    "url": "blog/daily/LRU缓存.html",
    "revision": "72aa0f2da15580528df4d8d2bc7f7e99"
  },
  {
    "url": "blog/daily/new.html",
    "revision": "72e99ed6f4f733e733946fba892d9bb4"
  },
  {
    "url": "blog/daily/question1.html",
    "revision": "8673923cdb0d99b6a1c5115c9181da83"
  },
  {
    "url": "blog/daily/Reactcompulicated.html",
    "revision": "0cbca74fb0aa134b92ced975754fec81"
  },
  {
    "url": "blog/daily/URLSearchParams方法.html",
    "revision": "2e50b45c61a04fb58790b3604908669a"
  },
  {
    "url": "blog/DBCss/BFC.html",
    "revision": "ddcbcb95104c827685488d1d033d5cc9"
  },
  {
    "url": "blog/DBCss/classnames.html",
    "revision": "e2a5ea7a829059a274a11ea25fdc0179"
  },
  {
    "url": "blog/DBCss/css_background.html",
    "revision": "80d87741e856523235dedb39b1469f96"
  },
  {
    "url": "blog/DBCss/css_selector.html",
    "revision": "f272411d088b456cd8a4822cae66fc3f"
  },
  {
    "url": "blog/DBCss/css-segment.html",
    "revision": "384f70652dbb83ccb5ea9d696617f16c"
  },
  {
    "url": "blog/DBCss/css-view.html",
    "revision": "da2a1fb3acd07be13652125b31a4d2bc"
  },
  {
    "url": "blog/DBCss/DOM_crud.html",
    "revision": "3ed9585ca2d238f6d370f87ea6b67cae"
  },
  {
    "url": "blog/DBCss/DOM_style.html",
    "revision": "7916917d2f58ca2ee9c87287315fdf81"
  },
  {
    "url": "blog/DBCss/DOM_treewalk.html",
    "revision": "089d69a590c09de416e46f92b2d87d9b"
  },
  {
    "url": "blog/DBCss/flex.html",
    "revision": "0df004d77694b6aca56e0745a5e451a6"
  },
  {
    "url": "blog/DBCss/IFC.html",
    "revision": "4196127b2564682e0021f246946b7a6a"
  },
  {
    "url": "blog/DBCss/iframe.html",
    "revision": "257df0d8b21e4e71a97636bfbf22edbe"
  },
  {
    "url": "blog/DBCss/index.html",
    "revision": "db119daf540e0cfae9f3b70784220dd7"
  },
  {
    "url": "blog/DBCss/layout.html",
    "revision": "d45d59dd5a62ccf3e44db4722bb82349"
  },
  {
    "url": "blog/DBCss/less.html",
    "revision": "e9b3c088d4da40c65244efddc047ed62"
  },
  {
    "url": "blog/DBCss/scss.html",
    "revision": "6f7fe866c929c8c42ab211a32392dc6e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/arrowfunction.html",
    "revision": "1daaee763aa6ddee5ca1a46959b4f226"
  },
  {
    "url": "blog/ECMAScript/ES_Next/async_await.html",
    "revision": "eb43d86bfe4a7f5a446afaf487cab0c2"
  },
  {
    "url": "blog/ECMAScript/ES_Next/class.html",
    "revision": "b717230deef8b1f563f8e924e29803a9"
  },
  {
    "url": "blog/ECMAScript/ES_Next/index.html",
    "revision": "5706ada2963d0b780f0a1ab650e72879"
  },
  {
    "url": "blog/ECMAScript/ES_Next/iterator.html",
    "revision": "54a7d029de979ce549d5cc6d4aeff4fb"
  },
  {
    "url": "blog/ECMAScript/ES_Next/module.html",
    "revision": "57c1dff0acaedc1cee6fb2cec8942014"
  },
  {
    "url": "blog/ECMAScript/ES_Next/promise.html",
    "revision": "9e35b3e63048ef115bdd70115306234a"
  },
  {
    "url": "blog/ECMAScript/ES_Next/ResizeObserverAPI.html",
    "revision": "e1a86a4a45a4326c9ab7110cc4b49c9e"
  },
  {
    "url": "blog/ECMAScript/ES_Next/SetMap.html",
    "revision": "08ef620bb15e3251b3cf8eedefbe2213"
  },
  {
    "url": "blog/ECMAScript/ES3_5/clone.html",
    "revision": "99fad02fafa49bd7117f6aad70ccf766"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cloneDeep.html",
    "revision": "37f1364e801b4067ab7be9d989943c31"
  },
  {
    "url": "blog/ECMAScript/ES3_5/code_segment.html",
    "revision": "ac9b472e318a32a64adf82f57d15d1d4"
  },
  {
    "url": "blog/ECMAScript/ES3_5/cookies.html",
    "revision": "febd679b2a16c318cffee77751e6c1dd"
  },
  {
    "url": "blog/ECMAScript/ES3_5/debounce_throttle.html",
    "revision": "366995b0428864bbad6744c23f665c60"
  },
  {
    "url": "blog/ECMAScript/ES3_5/designModule.html",
    "revision": "809e8fd9972777543dce63502639df81"
  },
  {
    "url": "blog/ECMAScript/ES3_5/hw_offset.html",
    "revision": "3481de1a9be64b654968f3d87b8dd001"
  },
  {
    "url": "blog/ECMAScript/ES3_5/index.html",
    "revision": "e7aa310bb9bd215a0a09140e6d903ded"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_art.html",
    "revision": "e9ea5957081e05bbacc9208905b31f04"
  },
  {
    "url": "blog/ECMAScript/ES3_5/JS_camera.html",
    "revision": "4124f5ee7cfb41f293664e8227f5f060"
  },
  {
    "url": "blog/ECMAScript/ES3_5/js_important.html",
    "revision": "0e79fb02aee05311a3ca9bae874c9bbc"
  },
  {
    "url": "blog/ECMAScript/ES3_5/myCookiejs.html",
    "revision": "094a074437a2eadf905b636abc0d8c2f"
  },
  {
    "url": "blog/ECMAScript/ES3_5/radixChange.html",
    "revision": "8bf0f58e59bacee20fdbe3b15d8025f5"
  },
  {
    "url": "blog/ECMAScript/ES3_5/WebSocket.html",
    "revision": "76dbe44b9ef7ca2d6232282eae653b25"
  },
  {
    "url": "blog/other/axios.html",
    "revision": "356f0fb498fe830e17723fbc4643f3f0"
  },
  {
    "url": "blog/other/cross-origin.html",
    "revision": "df686c5626cf83b87744fbac67724dbf"
  },
  {
    "url": "blog/other/git.html",
    "revision": "fe878d90e25f7cf7368638439f363b86"
  },
  {
    "url": "blog/other/index.html",
    "revision": "6bcc065c693eaab2966961c12fa7f4f1"
  },
  {
    "url": "blog/other/JavaScript.inof.html",
    "revision": "d90a55d78e02ca553dd86db6df9ef3cb"
  },
  {
    "url": "blog/other/markdown_grm.html",
    "revision": "4d01a72be4906eea71c17bf23a02348b"
  },
  {
    "url": "blog/other/regexp.html",
    "revision": "5634ed4e26233ec8c53ceaabca751158"
  },
  {
    "url": "blog/other/reSystem.html",
    "revision": "33a1dc13e6547e8bd0aaaf5812573358"
  },
  {
    "url": "blog/other/vuepress_use.html",
    "revision": "d029cd5ad53b4e59ed08bef4ecec2233"
  },
  {
    "url": "blog/other/webpack5_react_dev.html",
    "revision": "2c2aaf8671dc5230b7e76ce229237433"
  },
  {
    "url": "blog/react/Context.html",
    "revision": "d736c8d98f910ba10abe9bbbbd0fd694"
  },
  {
    "url": "blog/react/Lazy&Suspense.html",
    "revision": "cd14841a457f1c5c2467f2970891eff3"
  },
  {
    "url": "blog/react/mobx-basic.html",
    "revision": "5c5bd46b206b834dc54184acb23320e1"
  },
  {
    "url": "blog/react/react-redux.html",
    "revision": "626ce55aa107e71959af382dc46177e9"
  },
  {
    "url": "blog/react/reactAnswer.html",
    "revision": "9126192e8dfe9a08f9a3b9af7e16023f"
  },
  {
    "url": "blog/react/redux_core.html",
    "revision": "2602a4ac52cd186d5f7ac26b3c185fd4"
  },
  {
    "url": "blog/react/setState.html",
    "revision": "8cd2f4eef58496914e670566928b7070"
  },
  {
    "url": "blog/react/virtualList.html",
    "revision": "7eb14e37c73cbbcfb4c7999c21a4fd00"
  },
  {
    "url": "blog/vue/vue_basic/index.html",
    "revision": "502613f731a247357b626b052dc71b1b"
  },
  {
    "url": "blog/vue/vue_mockjs.html",
    "revision": "26ac6a5aa0e85a3fd940cd20bd79a94c"
  },
  {
    "url": "blog/vue/vue_router.html",
    "revision": "4e1becae7ffc514ccb99019920afd447"
  },
  {
    "url": "blog/vue/vuex.html",
    "revision": "7e1cc92d526d3fb2b1b0ddaba13e515f"
  },
  {
    "url": "icons/desk.jpg",
    "revision": "4edf9fd825f2aa4148f3f644a81e9622"
  },
  {
    "url": "index.html",
    "revision": "15922981d549c97603bca3555e658e48"
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
