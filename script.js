document.addEventListener('DOMContentLoaded', function () {
  var createNippouTemplateButton = document.getElementById('createNippouTemplateButton');
  var textAreaForNippou = document.getElementById('textAreaForNippou');
  var textAreaForTime = document.getElementById('textAreaForTime');

  // ボタンクリック時の処理
  createNippouTemplateButton.addEventListener('click', function () {
      // 特定の文字列をテキストエリアに表示
      var template = generateSpecificText();
      var time = generateTime();
      textAreaForTime.value = time;
      textAreaForNippou.value = template;
  });

  function generateTime() {
    return "10:00〜19:00";
  }

  // 特定の文字列を生成するメソッド
  function generateSpecificText() {
    return `【今日のGoalsetting】
・aaaa
・bbbb

【Face&Think】
・もっとなになにを考える

【次営業日のGoalsetting】
・cccc
・dddd

【目指す姿】
・XXXになる

【Q目標】
・KKK pjt
・LLLの取り組み

【今期ストレッチ】
・YYYY

【ひとこと】
xxxx`;
  }
});