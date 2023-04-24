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
    "revision": "0e25a85058ddbfe2e487eba44e27356e"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.42d63d7e.js",
    "revision": "dd968479593012df5068e5f3a476fc89"
  },
  {
    "url": "assets/js/10.62814cfa.js",
    "revision": "9e21249202b0879d645f968fa8c61381"
  },
  {
    "url": "assets/js/11.bf3050e2.js",
    "revision": "fae1c61bcd4e2066abc1cb6ff7129fd8"
  },
  {
    "url": "assets/js/12.781392ba.js",
    "revision": "1017e2acb2add6a737911a86ec985197"
  },
  {
    "url": "assets/js/13.7fe5c3b9.js",
    "revision": "18a25b498c8cf3d80b3b6b7ce7125937"
  },
  {
    "url": "assets/js/14.bd1fb460.js",
    "revision": "c7cc1cc0a8c05242826aabe23743939f"
  },
  {
    "url": "assets/js/15.38b05c20.js",
    "revision": "de0b410c26f43602ce066d549e07b04f"
  },
  {
    "url": "assets/js/16.0dd0fb8e.js",
    "revision": "2aeeb4057d6b70b5dea1f9e14390f3c8"
  },
  {
    "url": "assets/js/17.20c622dd.js",
    "revision": "bda92dea3fca27f7bdf419cb63d03ddd"
  },
  {
    "url": "assets/js/18.81c2ceb4.js",
    "revision": "9ae54da5ae416cd207b31d0ae952a357"
  },
  {
    "url": "assets/js/19.68caf164.js",
    "revision": "7df1cac3dc41f5e61ef2c520bb4753cb"
  },
  {
    "url": "assets/js/20.c738c180.js",
    "revision": "03997690c34c45d7dc67d1579e22309e"
  },
  {
    "url": "assets/js/21.fff8fede.js",
    "revision": "19623b2e47352ce565ff584347379b6b"
  },
  {
    "url": "assets/js/22.5be9fd5d.js",
    "revision": "c8923b70f9e8a45b9c6189833e906dc8"
  },
  {
    "url": "assets/js/23.649f92af.js",
    "revision": "f071b3236444108efae1c13202e27a1e"
  },
  {
    "url": "assets/js/24.a14c4e8d.js",
    "revision": "99535e561fe1145688a4b9319b12ad61"
  },
  {
    "url": "assets/js/4.69f2197a.js",
    "revision": "e4faa11fba3ae6cb2903366f24bc304d"
  },
  {
    "url": "assets/js/5.3f0620d9.js",
    "revision": "d9874189fbf4f9fc224788fb4e7bb70c"
  },
  {
    "url": "assets/js/6.f015ef18.js",
    "revision": "baff84ba3ecc84640e8a7266f43ca8e6"
  },
  {
    "url": "assets/js/7.469cef67.js",
    "revision": "cf16ffdaddfcb175b7dd15226032a68e"
  },
  {
    "url": "assets/js/8.dcd0bb21.js",
    "revision": "0c7c785c5a17ab0f285575f47ccd7009"
  },
  {
    "url": "assets/js/9.8dfd2cc7.js",
    "revision": "c672438b0bbb21d61612fe6130d52a94"
  },
  {
    "url": "assets/js/app.bcb59949.js",
    "revision": "916ee8074a4ca77531d90d1341bf8187"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.101baafc.js",
    "revision": "602a659b662b0171a26cfd4dfb1deda6"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "67301abad063d383d1213ef2bf282f40"
  },
  {
    "url": "categories/农药残留问题及其影响/index.html",
    "revision": "24d6ec53219aa1eef80a26594e3ed982"
  },
  {
    "url": "categories/转基因食品问题及其影响/index.html",
    "revision": "25ef9c188a9619852b65591de54c1fb1"
  },
  {
    "url": "categories/食品中毒的症状和预防方法/index.html",
    "revision": "3057dca05dffaf25c855b0af13f48e36"
  },
  {
    "url": "categories/食品中的添加剂问题及其影响/index.html",
    "revision": "0616fb47b8ef2cb79299e4b559ba02e5"
  },
  {
    "url": "categories/食品中的重金属问题及其影响/index.html",
    "revision": "6b34b5b08fe3696535610a22b80a8acf"
  },
  {
    "url": "categories/食品加工和储存的安全方法/index.html",
    "revision": "7ad4e8815df0d6be58623f7646255e75"
  },
  {
    "url": "categories/食品安全法律法规/index.html",
    "revision": "b60868af398f04c8fed99a44600a03f6"
  },
  {
    "url": "categories/食品安全的定义和意义/index.html",
    "revision": "dba9963aae689caf0587f50fa054e17e"
  },
  {
    "url": "categories/食品接触性过敏的原因和预防方法/index.html",
    "revision": "e26c8e31bfe8b40572662f81dbb6c71e"
  },
  {
    "url": "categories/食品污染的类型和来源/index.html",
    "revision": "fffca86e737d57082aa3c9057c88f00d"
  },
  {
    "url": "categories/食品过敏和不耐受的区别/index.html",
    "revision": "e5cbed8d0fb5aad6ee13f897a02e5b30"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "859a03348ca1bcfbb45bb7334cfbd845"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "9ca67edef361ed1a0d4d2e851d5d050e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4a366b8cf04b48b809f1f9ad7d66c95c"
  },
  {
    "url": "tags/农药残留/index.html",
    "revision": "436d6f6223344c23b084d59f71f3c4da"
  },
  {
    "url": "tags/区别/index.html",
    "revision": "c1664624367c57f32bed34fb912e7a3c"
  },
  {
    "url": "tags/原因/index.html",
    "revision": "e311bcfde3b63d0557330814c69670f0"
  },
  {
    "url": "tags/安全/index.html",
    "revision": "794e0af0ae8a5a20723af1ff66b02b89"
  },
  {
    "url": "tags/定义/index.html",
    "revision": "34bb6302aa10597ef95b430461dc770b"
  },
  {
    "url": "tags/影响/index.html",
    "revision": "cd6cd74af047c1cf0f306a837d7975e3"
  },
  {
    "url": "tags/意义/index.html",
    "revision": "ef7305ac3b6ee981694953ffc07b1681"
  },
  {
    "url": "tags/法规/index.html",
    "revision": "aa3488ea0d8363d8a76c109f79d11de8"
  },
  {
    "url": "tags/添加剂/index.html",
    "revision": "9ed95404e266dd92f34d4675a157e991"
  },
  {
    "url": "tags/症状/index.html",
    "revision": "ccf8c6d750a18f2a929ab26b08f14c11"
  },
  {
    "url": "tags/类型/index.html",
    "revision": "26c49c1c92ddb9b43e0cd66cee128347"
  },
  {
    "url": "tags/转基因食品/index.html",
    "revision": "b9179e0066cc4bec8da8e7ca607e05f3"
  },
  {
    "url": "tags/重金属/index.html",
    "revision": "84bfaf129af9b92200b4cc7b23fc499d"
  },
  {
    "url": "tags/预防方法/index.html",
    "revision": "3ab82952dbc4f199eb4ec88015563abd"
  },
  {
    "url": "tags/食品不耐受/index.html",
    "revision": "50f1e59a3179fe1c8d22b7068864f548"
  },
  {
    "url": "tags/食品中毒/index.html",
    "revision": "b9b92c27245a79eadf2d8eea2244ecf7"
  },
  {
    "url": "tags/食品加工和储存/index.html",
    "revision": "4ed39d0150875f8c49cd02f086031d98"
  },
  {
    "url": "tags/食品安全/index.html",
    "revision": "7358a62e5bdad9386519d5cbe623cdbd"
  },
  {
    "url": "tags/食品接触性过敏/index.html",
    "revision": "9c5ca74baf3918464979e0a55129569b"
  },
  {
    "url": "tags/食品污染/index.html",
    "revision": "ea6dc235a9530985ec16909b5d421ca5"
  },
  {
    "url": "tags/食品过敏/index.html",
    "revision": "c88c7a7ffb6b97d4eafc88319a9b1d91"
  },
  {
    "url": "timeline/index.html",
    "revision": "298de885147675600e98a1dd8584cd28"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "食品安全知识科普/食品中毒的症状和预防方法.html",
    "revision": "05365ee1ac258664eebf2ef6eae3a5e6"
  },
  {
    "url": "食品安全知识科普/食品中的农药残留问题及其影响.html",
    "revision": "3dff0198b5ec9a2070127d18133e1df5"
  },
  {
    "url": "食品安全知识科普/食品中的添加剂问题及其影响.html",
    "revision": "0b4bfa7ba71d17ee0a3d1baddc0b4bd5"
  },
  {
    "url": "食品安全知识科普/食品中的转基因食品问题及其影响.html",
    "revision": "0f5093185f90245dccd6b8cbf8fd2f7a"
  },
  {
    "url": "食品安全知识科普/食品中的重金属问题及其影响.html",
    "revision": "040365ab829bf7cbe498a77d519700a7"
  },
  {
    "url": "食品安全知识科普/食品加工和储存的安全方法.html",
    "revision": "e1cbfd4c98ed07d9b7b508603f7c800c"
  },
  {
    "url": "食品安全知识科普/食品安全法律法规.html",
    "revision": "c8e8be66da330eda14f1f1ff66d32cea"
  },
  {
    "url": "食品安全知识科普/食品安全的定义和意义.html",
    "revision": "bf7bb85dee0b52cce73c0c7de6d7958e"
  },
  {
    "url": "食品安全知识科普/食品接触性过敏的原因和预防方法.html",
    "revision": "4a93ebbe8b85aa7a9a298b41f04c7fda"
  },
  {
    "url": "食品安全知识科普/食品污染的类型和来源.html",
    "revision": "72524e1c6a5d7aadb14b845040c71371"
  },
  {
    "url": "食品安全知识科普/食品过敏和不耐受的区别.html",
    "revision": "c61df4ea4f8b5e784dbc37caf3b7dd0a"
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
