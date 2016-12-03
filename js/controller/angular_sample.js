// モジュールの宣言
var myAppModule = angular.module('myApp', []);

// コントローラ
myAppModule.controller('mainCtrl', function() {
  // データ
  this.data = {
    members: [
      {"name":"sugaya", "score": 36.77},
      {"name":"yokoi", "score": 48.37},
      {"name":"yoshitani", "score": 25.45}
    ],
    user: {
      name:"",
      decidedName:""
    }
  };
  // サブミットサンプル
  this.sampleSubmit = function() {
    if (this.data.user.name) {
      this.data.user.decidedName = this.data.user.name;
      this.data.user.name = "";
    };
  };
  // スコア計算
  this.culc = function(type, index) {
    if (type === 'plus') {
      this.data.members[index].score++;
    };
    if (type === 'minus') {
      this.data.members[index].score--;
    };
  };
  // メンバー追加
  this.addMember = function(member) {
    console.log(member);
    this.data.members.push({"name":member.name, "score":member.score})
  };
  // メンバー削除
  this.deleteMember = function(index) {
    console.log(index);
    this.data.members.splice(index, 1);
  };
});
