//必要な変数の定義
//アラーム設定用オブジェクト
// 時計の"12:1"を"12:01"と表記

// アラームセット
//アラームは最大5まで
//設定時間を記録
//設定時間を表示
//表示削除用ボタン
//設定時刻と表示を削除

//時計を動かす
//アラーム機能

function move(){
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  if(hour < 10){hour = "0" + hour;}
  if(minute < 10){minute = "0" + minute;}
  if(second < 10){second = "0" + second;}

  document.querySelector('#timerText').innerHTML = hour + ":" + minute + ":" + second;

  for (var i = 0, len = record.length; i < len; i++){
    if(record[i].sethour == hour && record[i].setminute == minute && second == 0){
      alert('アラームです');
    }
  }
}
setInterval(move, 1000);

var set_btn = document.querySelector('#set_btn');
var parent_list = document.querySelector('#parent_list');
var delete_btn = document.querySelector('.delete_btn');
var record = [];
var x = 0;

//アラーム設定用のオブジェクト
var setting = function(sethour, setminute){
  this.sethour = sethour;
  this.setminute = setminute;
}

set_btn.addEventListener('click', function(){
  //アラームは５個まで
  var lis = document.querySelector('li');


  var option_hours = document.alarm_form.option_hours.value;
  var option_minutes = document.alarm_form.option_minutes.value;
  record[x] = new setting(option_hours, option_minutes);

  var container_list = document.createElement('li');
  var list_content = document.createTextNode(`${record[x].sethour}時${record[x].setminute}分`);
  parent_list.appendChild(container_list);
  container_list.appendChild(list_content);

  //表示削除用ボタン
  let list_span = document.createElement('span');
  let id_li = document.createAttribute('id');
  let span_content = document.createTextNode('削除');
  container_list.appendChild(list_span);
  list_span.appendChild(span_content);
  container_list.setAttributeNode(id_li);
  container_list.id = x;
  container_list.classList.add('deletes');
  list_span.classList.add('delete_btn');

  //設定時刻と表示を削除
  let deletes = document.getElementsByClassName('deletes');
  for( var i = 0, de_len = deletes.length; i < de_len; i++) {
      deletes[i].onclick = function () {
          record[this.id] = 'disabled';
          this.id = 'temp';
          var temp = document.getElementById('temp');
          temp.parentNode.removeChild(temp);
      };
  };
  x++;
});
