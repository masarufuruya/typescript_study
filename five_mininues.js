var Measure = (function () {
    function Measure(msg, isStarted) {
        this.msg = msg;
        this.isStarted = isStarted;
    }
    // タイトルをセット
    Measure.prototype.setTitle = function (title) {
        this.msg = title;
    };
    // 現在時刻をセット
    Measure.prototype.setCurrentTime = function (measure) {
        measure.startTime = Date.now();
    };
    return Measure;
})();
// 1個目 初期値をセット
var measure = new Measure('Stop at 00:05!', false);
// 要素を取得
var result1 = document.getElementById('result1');
var btn1 = document.getElementById('btn1');
result1.innerHTML = measure.msg;
// クリックイベント作成
btn1.addEventListener('click', function () {
    if (!measure.isStarted) {
        measure.isStarted = true;
        this.innerHTML = 'STOP';
        // 現在時刻をセット
        measure.setCurrentTime(measure);
        result1.innerHTML = measure.msg;
    }
    else {
        // 開始している場合
        // stopped
        measure.isStarted = false;
        this.innerHTML = 'START';
        // judge, show result
        // ミリ秒を秒に変換して5秒との差を求める
        measure.diff = (Date.now() - measure.startTime) / 1000 - 5;
        if (measure.diff >= -0.1 && measure.diff <= 0.1) {
            result1.innerHTML = 'Perfect!';
        }
        else if (measure.diff > 0) {
            // 遅い場合
            result1.innerHTML = 'You are' + measure.diff.toFixed(2) + ' seconds late!';
        }
        else {
            // 絶対値を求める
            result1.innerHTML = 'You are' + Math.abs(measure.diff).toFixed(2) + 'seconds fast!';
        }
    }
});
// 2個目
var measure2 = new Measure('Stop at 00:05!', false);
var result2 = document.getElementById('result2');
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    if (!measure2.isStarted) {
        // started
        measure2.isStarted = true;
        this.innerHTML = 'STOP';
        // 現在時刻をセット
        measure2.setCurrentTime(measure2);
        result2.innerHTML = measure2.msg;
    }
    else {
        // 開始している場合
        // stopped
        measure2.isStarted = false;
        this.innerHTML = 'START';
        // judge, show result
        // ミリ秒を秒に変換して5秒との差を求める
        measure2.diff = (Date.now() - measure2.startTime) / 1000 - 5;
        if (measure2.diff >= -0.1 && measure2.diff <= 0.1) {
            result2.innerHTML = 'Perfect!';
        }
        else if (measure2.diff > 0) {
            // 遅い場合
            result2.innerHTML = 'You are' + measure2.diff.toFixed(2) + ' seconds late!';
        }
        else {
            // 絶対値を求める
            result2.innerHTML = 'You are' + Math.abs(measure2.diff).toFixed(2) + 'seconds fast!';
        }
    }
});
