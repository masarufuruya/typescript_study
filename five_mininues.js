(function() {
  'use strict';

  var isStarted = false;
  var startTime;
  var diff;
  var msg = 'Stop at 00:05!';

  var btn = document.getElementById('result');
  var btn = document.getElementById('btn');

  result.innerHTML = msg;

  btn.addEventListener('click', function() {
    if (!isStarted) {
      // started
      isStarted = true;
      this.innerHTML = 'STOP';
      // get StartTime
      // 現在時刻を取得
      startTime = Date.now();
      result.innerHTML = msg;
    } else {
      // 開始している場合
      // stopped
      isStarted = false;
      this.innerHTML = 'START';
      // judge, show result
      // ミリ秒を秒に変換して5秒との差を求める
      diff = (Date.now() - startTime) / 1000 - 5;
      if (diff >= -0.1 && diff <= 0.1) {
        result.innerHTML = 'Perfect!';
      } else if (diff > 0) {
        // 遅い場合
        result.innerHTML = 'You are' + diff.toFixed(2) + ' seconds late!';
      } else {
        // 絶対値を求める
        result.innerHTML = 'You are' + Math.abs(diff).toFixed(2) + 'seconds fast!';
      }
    }
  });
})();
