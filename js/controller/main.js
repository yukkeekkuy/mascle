// モジュールの宣言
var myAppModule = angular.module('myApp', []);

// コントローラ
myAppModule.controller('mainCtrl', function() {
  // データ
  this.data = {
    info:{
      season1:{
        "title":"無印",
        "members":[
          {"no":1, "name":"バッファローマン", "url":"img/kinnikuman.jpg"},
          {"no":2, "name":"サンシャイン", "url":"img/kinnikuman.jpg"},
          {"no":3, "name":"キン肉マン", "url":"img/kinnikuman.jpg"},
          {"no":4, "name":"キン肉マングレート", "url":"img/kinnikuman.jpg"},
          {"no":5, "name":"ビッグ・ザ・武道", "url":"img/kinnikuman.jpg"},
          {"no":6, "name":"ネプチューンマン", "url":"img/kinnikuman.jpg"},
          {"no":7, "name":"阿修羅マン", "url":"img/kinnikuman.jpg"},
          {"no":8, "name":"モンゴルマン", "url":"img/kinnikuman.jpg"}
        ]
      },
      season2:{
        "title":"黄金のマスク編",
        "members":[
          {"no":9, "name":"ウォーズマン", "url":"img/kinnikuman.jpg"},
          {"no":10, "name":"ロビンマスク", "url":"img/kinnikuman.jpg"},
          {"no":11, "name":"ジェロニモ", "url":"img/kinnikuman.jpg"},
          {"no":12, "name":"ブロッケンJr.", "url":"img/kinnikuman.jpg"},
          {"no":13, "name":"ジャンクマン", "url":"img/kinnikuman.jpg"},
          {"no":14, "name":"ザ・ニンジャ", "url":"img/kinnikuman.jpg"},
          {"no":15, "name":"ラーメンマン", "url":"img/kinnikuman.jpg"},
          {"no":16, "name":"テリーマン", "url":"img/kinnikuman.jpg"},
          {"no":17, "name":"悪魔将軍", "url":"img/kinnikuman.jpg"}
        ]
      },
      season3:{
        "title":"キン肉星王位争奪編1",
        "members":[
          {"no":18, "name":"マリポーサ", "url":"img/kinnikuman.jpg"},
          {"no":19, "name":"スーパーフェニックス", "url":"img/kinnikuman.jpg"},
          {"no":20, "name":"ゼブラ", "url":"img/kinnikuman.jpg"},
          {"no":21, "name":"ソルジャー.", "url":"img/kinnikuman.jpg"}
        ]
      },
      season4:{
        "title":"夢の超人タッグ編",
        "members":[
          {"no":22, "name":"?", "url":"img/kinnikuman.jpg"},
          {"no":23, "name":"ペンタゴン", "url":"img/kinnikuman.jpg"},
          {"no":24, "name":"ブラックホール", "url":"img/kinnikuman.jpg"},
          {"no":25, "name":"リキシーマン.", "url":"img/kinnikuman.jpg"},
          {"no":26, "name":"ケンダマン", "url":"img/kinnikuman.jpg"},
          {"no":27, "name":"スクリュー・キッド", "url":"img/kinnikuman.jpg"}
        ]
      },
      season5:{
        "title":"キン肉星王位争奪編2",
        "members":[
          {"no":28, "name":"レオパルドン", "url":"img/kinnikuman.jpg"},
          {"no":29, "name":"マンリキ", "url":"img/kinnikuman.jpg"},
          {"no":30, "name":"ミスターVTR", "url":"img/kinnikuman.jpg"},
          {"no":31, "name":"ホークマン", "url":"img/kinnikuman.jpg"}
        ]
      }
    }
  };
});
