window.addEventListener('load', () => {

  // コンテンツ2と3は初めは非表示にしておく
  const contents2 = document.getElementById('contents2');
  const contents3 = document.getElementById('contents3');
  const contents4 = document.getElementById('contents4');
  const contents5 = document.getElementById('contents5');
  contents2.style.display = "none";
  contents3.style.display = "none";
  contents4.style.display = "none";
  contents5.style.display = "none";
  
  document.getElementById('rank1').addEventListener('click', ()=>{
    // コンテンツ1を非表示にする
    const contents1 = document.getElementById('contents1');
    contents1.style.display = "none";
    // コンテンツ2を表示する
    contents2.style.display = "block";
  });
  
  document.getElementById('rank2').addEventListener('click', ()=>{
    // コンテンツ1を非表示にする
    const contents1 = document.getElementById('contents1');
    contents1.style.display = "none";
    // コンテンツ4を表示する
    contents4.style.display = "block";
  });
  
  document.getElementById('rank3').addEventListener('click', ()=>{
    // コンテンツ1を非表示にする
    const contents1 = document.getElementById('contents1');
    contents1.style.display = "none";
    // コンテンツ5を表示する
    contents5.style.display = "block";
  });
  
  // 戻るボタンのコード
  document.getElementById('back').addEventListener('click', ()=>{
    contents2.style.display = "none";
    contents1.style.display = "block";
  })
  document.getElementById('back2').addEventListener('click', ()=>{
    contents4.style.display = "none";
    contents1.style.display = "block";
  })
  document.getElementById('back3').addEventListener('click', ()=>{
    contents5.style.display = "none";
    contents1.style.display = "block";
  })
  // 戻るボタンのコード

  // ===================初級問題（単体①）===================
  document.getElementById('type1').addEventListener('click', ()=>{
    // 本当に始めますか？を表示する 
    var result = window.confirm('タイプ相性（単体①）を始めますか？\n全部で34問あります。\n「OK」を押すと問題がスタートします');
    if(result){
      // コンテンツ1を非表示にする
      contents2.style.display = "none";
      // コンテンツ2を表示する
      contents3.style.display = "block";
      const quiz = [
        {
          question: 'Q.1　ノーマルタイプに効果が抜群なタイプは？',
          answers: ['あく','かくとう','エスパー','じめん'],
          correct: 'かくとう'
        },
        {
          question: 'Q.2　くさタイプに効果が抜群なタイプは？',
          answers: ['ほのお','エスパー','くさ','いわ'],
          correct: 'ほのお'
        },
        {
          question: 'Q.3　みずタイプに効果が抜群なタイプは？',
          answers: ['ひこう','でんき','かくとう','こおり'],
          correct: 'でんき'
        },
        {
          question: 'Q.4　ほのおタイプに効果が抜群なタイプは？',
          answers: ['こおり','はがね','みず','かくとう'],
          correct: 'みず'
        },
        {
          question: 'Q.5　でんきタイプに効果が抜群なタイプは？',
          answers: ['いわ','じめん','ほのお','ドラゴン'],
          correct: 'じめん'
        },
        {
          question: 'Q.6　こおりタイプに効果が抜群なタイプは？',
          answers: ['いわ','みず','ドラゴン','ゴースト'],
          correct: 'いわ'
        },
        {
          question: 'Q.7　かくとうタイプに効果が抜群なタイプは？',
          answers: ['かくとう','ひこう','はがね','どく'],
          correct: 'ひこう'
        },
        {
          question: 'Q.8　どくタイプに効果が抜群なタイプは？',
          answers: ['フェアリー','ゴースト','エスパー','はがね'],
          correct: 'エスパー'
        },
        {
          question: 'Q.9　じめんタイプに効果が抜群なタイプは？',
          answers: ['ひこう','かくとう','ほのお','こおり'],
          correct: 'こおり'
        },
        {
          question: 'Q.10　ひこうタイプに効果が抜群なタイプは？',
          answers: ['でんき','どく','ドラゴン','フェアリー'],
          correct: 'でんき'
        },
        {
          question: 'Q.11　エスパータイプに効果が抜群なタイプは？',
          answers: ['フェアリー','どく','あく','くさ'],
          correct: 'あく'
        },
        {
          question: 'Q.12　むしタイプに効果が抜群なタイプは？',
          answers: ['ひこう','かくとう','こおり','ドラゴン'],
          correct: 'ひこう'
        },
        {
          question: 'Q.13　いわタイプに効果が抜群なタイプは？',
          answers: ['どく','かくとう','ノーマル','こおり'],
          correct: 'かくとう'
        },
        {
          question: 'Q.14　ゴーストタイプに効果が抜群なタイプは？',
          answers: ['ゴースト','フェアリー','どく','はがね'],
          correct: 'ゴースト'
        },
        {
          question: 'Q.15　ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['みず','エスパー','ひこう','ドラゴン'],
          correct: 'ドラゴン'
        },
        {
          question: 'Q.16　あくタイプに効果が抜群なタイプは？',
          answers: ['エスパー','フェアリー','どく','ゴースト'],
          correct: 'フェアリー'
        },
        {
          question: 'Q.17　はがねタイプに効果が抜群なタイプは？',
          answers: ['ドラゴン','でんき','ほのお','こおり'],
          correct: 'ほのお'
        },
        {
          question: 'Q.18　フェアリータイプに効果が抜群なタイプは？',
          answers: ['あく','ゴースト','むし','どく'],
          correct: 'どく'
        },
        // 2周目
        { 
          question: 'Q.19　ほのおタイプに効果が抜群なタイプは？',
          answers: ['かくとう','じめん','でんき','はがね'],
          correct: 'じめん'
        },
        { 
          question: 'Q.20　みずタイプに効果が抜群なタイプは？',
          answers: ['むし','こおり','くさ','いわ'],
          correct: 'くさ'
        },
        { 
          question: 'Q.21　くさタイプに効果が抜群なタイプは？',
          answers: ['ひこう','いわ','ドラゴン','ゴースト'],
          correct: 'ひこう'
        },
        { 
          question: 'Q.22　こおりタイプに効果が抜群なタイプは？',
          answers: ['ドラゴン','みず','どく','かくとう'],
          correct: 'かくとう'
        },
        { 
          question: 'Q.23　かくとうタイプに効果が抜群なタイプは？',
          answers: ['はがね','エスパー','ドラゴン','じめん'],
          correct: 'エスパー'
        },
        { 
          question: 'Q.24　どくタイプに効果が抜群なタイプは？',
          answers: ['いわ','じめん','ゴースト','はがね'],
          correct: 'じめん'
        },
        { 
          question: 'Q.25　じめんタイプに効果が抜群なタイプは？',
          answers: ['みず','ひこう','ほのお','ドラゴン'],
          correct: 'みず'
        },
        { 
          question: 'Q.26　ひこうタイプに効果が抜群なタイプは？',
          answers: ['ドラゴン','みず','こおり','はがね'],
          correct: 'こおり'
        },
        { 
          question: 'Q.27　エスパータイプに効果が抜群なタイプは？',
          answers: ['ゴースト','くさ','どく','フェアリー'],
          correct: 'ゴースト'
        },
        { 
          question: 'Q.28　むしタイプに効果が抜群なタイプは？',
          answers: ['じめん','いわ','ドラゴン','はがね'],
          correct: 'いわ'
        },
        { 
          question: 'Q.29　いわタイプに効果が抜群なタイプは？',
          answers: ['いわ','こおり','はがね','むし'],
          correct: 'はがね'
        },
        { 
          question: 'Q.30　ゴーストタイプに効果が抜群なタイプは？',
          answers: ['あく','どく','エスパー','フェアリー'],
          correct: 'あく'
        },
        { 
          question: 'Q.31　ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['エスパー','みず','フェアリー','ひこう'],
          correct: 'フェアリー'
        },
        { 
          question: 'Q.32　あくタイプに効果が抜群なタイプは？',
          answers: ['いわ','かくとう','どく','エスパー'],
          correct: 'かくとう'
        },
        { 
          question: 'Q.33　はがねタイプに効果が抜群なタイプは？',
          answers: ['かくとう','いわ','でんき','みず'],
          correct: 'かくとう'
        },
        { 
          question: 'Q.34（ラスト）　フェアリータイプに効果が抜群なタイプは？',
          answers: ['ゴースト','じめん','はがね','いわ'],
          correct: 'はがね'
        }
      ];
    
      const quizLength = quiz.length;
      let quizIndex = 0;
      let score = 0;
    
      const button = document.getElementsByClassName('btn-primary');
      const buttonLength = button.length
    
      // クイズの問題文、選択肢を定義
      const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question
        let buttonIndex = 0;
        while(buttonIndex < buttonLength){
          button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
          buttonIndex++;
        }
      }
      setupQuiz();
    
    
      // ボタンを押したら正誤判定
      const clickHandler = (e) =>{
        if(quiz[quizIndex].correct === e.target.textContent){
          window.alert('正解!');
          score++;
        } else {
          window.alert('不正解!');
        }
    
        quizIndex++;
    
        if(quizIndex < quizLength){
          setupQuiz();
        } else {
          window.alert('終了！あなたの正解数は' + quizLength + '問中' + score + '問です!');
          window.alert('お疲れ様でした。トップページに戻ります「OK」を押してください');
          window.location.reload();
        }
      };
    
      let handlerIndex = 0;
      while(handlerIndex < buttonLength){
        button[handlerIndex].addEventListener('click', (e)=> {
          clickHandler(e);
        });
        handlerIndex++;
      }
    }
  });
  // ===================初級問題（単体①）===================


  // ===================初級問題（単体②）===================
  document.getElementById('type2').addEventListener('click', ()=>{
    // 本当に始めますか？を表示する 
    var result = window.confirm('タイプ相性（単体②）を始めますか？\n全部で39問あります。\n「OK」を押すと問題がスタートします');
    if(result){
      // コンテンツ1を非表示にする
      contents2.style.display = "none";
      // コンテンツ2を表示する
      contents3.style.display = "block";
      const quiz = [
        {
          question: 'Q.1　ノーマルタイプに効果がいまひとつな（効果がない）タイプは？',
          answers: ['ノーマル','かくとう','ゴースト','はがね'],
          correct: 'ゴースト'
        },
        {
          question: 'Q.2　ほのおタイプに効果がいまひとつなタイプは？',
          answers: ['くさ','どく','ドラゴン','ノーマル'],
          correct: 'くさ'
        },
        {
          question: 'Q.3　みずタイプに効果がいまひとつなタイプは？',
          answers: ['むし','いわ','こおり','どく'],
          correct: 'こおり'
        },
        {
          question: 'Q.4　でんきタイプに効果がいまひとつなタイプは？',
          answers: ['いわ','はがね','じめん','どく'],
          correct: 'はがね'
        },
        {
          question: 'Q.5　くさタイプに効果がいまひとつなタイプは？',
          answers: ['かくとう','じめん','いわ','はがね'],
          correct: 'じめん'
        },
        {
          question: 'Q.6　こおりタイプに効果がいまひとつなタイプは？',
          answers: ['みず','くさ','じめん','こおり'],
          correct: 'こおり'
        },
        {
          question: 'Q.7　かくとうタイプに効果がいまひとつなタイプは？',
          answers: ['あく','ゴースト','はがね','どく'],
          correct: 'あく'
        },
        {
          question: 'Q.8　どくタイプに効果がいまひとつなタイプは？',
          answers: ['エスパー','フェアリー','ゴースト','はがね'],
          correct: 'フェアリー'
        },
        {
          question: 'Q.9　じめんタイプに効果がいまひとつなタイプは？',
          answers: ['じめん','どく','ほのお','ひこう'],
          correct: 'どく'
        },
        {
          question: 'Q.10　ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['むし','どく','ドラゴン','ゴースト'],
          correct: 'むし'
        },
        {
          question: 'Q.11　エスパータイプに効果がいまひとつなタイプは？',
          answers: ['はがね','フェアリー','どく','エスパー'],
          correct: 'エスパー'
        },
        {
          question: 'Q.12　むしタイプに効果がいまひとつなタイプは？',
          answers: ['いわ','じめん','はがね','みず'],
          correct: 'じめん'
        },
        {
          question: 'Q.13　いわタイプに効果がいまひとつなタイプは？',
          answers: ['むし','いわ','ノーマル','こおり'],
          correct: 'ノーマル'
        },
        {
          question: 'Q.14　ゴーストタイプに効果がいまひとつなタイプは？',
          answers: ['くさ','むし','フェアリー','エスパー'],
          correct: 'むし'
        },
        {
          question: 'Q.15　ドラゴンタイプに効果がいまひとつなタイプは？',
          answers: ['みず','ノーマル','エスパー','はがね'],
          correct: 'みず'
        },
        {
          question: 'Q.16　あくタイプに効果がいまひとつなタイプは？',
          answers: ['フェアリー','あく','どく','ノーマル'],
          correct: 'あく'
        },
        {
          question: 'Q.17　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['みず','でんき','いわ','ゴースト'],
          correct: 'いわ'
        },
        {
          question: 'Q.18　フェアリータイプに効果がいまひとつなタイプは？',
          answers: ['どく','かくとう','ひこう','くさ'],
          correct: 'かくとう'
        },
        // 2周目
        { 
          question: 'Q.19　でんきタイプに効果がいまひとつなタイプは？',
          answers: ['ドラゴン','ひこう','ほのお','かくとう'],
          correct: 'ひこう'
        },
        { 
          question: 'Q.20　かくとうタイプに効果がいまひとつなタイプは？',
          answers: ['ゴースト','かくとう','くさ','むし'],
          correct: 'むし'
        },
        { 
          question: 'Q.21　どくタイプに効果がいまひとつなタイプは？',
          answers: ['かくとう','あく','はがね','ゴースト'],
          correct: 'かくとう'
        },
        { 
          question: 'Q.22　どくタイプに効果がいまひとつなタイプは？',
          answers: ['あく','どく','はがね','エスパー'],
          correct: 'どく'
        },
        { 
          question: 'Q.23　どくタイプに効果がいまひとつなタイプは？',
          answers: ['はがね','フェアリー','みず','ゴースト'],
          correct: 'フェアリー'
        },
        { 
          question: 'Q.24　じめんタイプに効果がいまひとつなタイプは？',
          answers: ['いわ','じめん','ほのお','かくとう'],
          correct: 'いわ'
        },
        { 
          question: 'Q.25　エスパータイプに効果がいまひとつなタイプは？',
          answers: ['ドラゴン','はがね','フェアリー','エスパー'],
          correct: 'エスパー'
        },
        { 
          question: 'Q.26　むしタイプに効果がいまひとつなタイプは？',
          answers: ['ゴースト','かくとう','はがね','どく'],
          correct: 'かくとう'
        },
        { 
          question: 'Q.27　いわタイプに効果がいまひとつなタイプは？',
          answers: ['はがね','あく','どく','ドラゴン'],
          correct: 'どく'
        },
        { 
          question: 'Q.28　ゴーストタイプに効果がいまひとつなタイプは？',
          answers: ['エスパー','どく','はがね','フェアリー'],
          correct: 'どく'
        },
        { 
          question: 'Q.29　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['みず','でんき','ドラゴン','ゴースト'],
          correct: 'ドラゴン'
        },
        { 
          question: 'Q.30　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['ゴースト','じめん','みず','フェアリー'],
          correct: 'フェアリー'
        },
        { 
          question: 'Q.31　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['ほのお','むし','でんき','みず'],
          correct: 'むし'
        },
        { 
          question: 'Q.32　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['エスパー','ゴースト','あく','みず'],
          correct: 'エスパー'
        },
        { 
          question: 'Q.33　はがねタイプに効果がいまひとつなタイプは？？',
          answers: ['じめん','かくとう','でんき','ひこう'],
          correct: 'ひこう'
        },
        { 
          question: 'Q.34　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['かくとう','はがね','でんき','ゴースト'],
          correct: 'はがね'
        },
        { 
          question: 'Q.35　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['ゴースト','ノーマル','みず','でんき'],
          correct: 'ノーマル'
        },
        { 
          question: 'Q.36　はがねタイプに効果がいまひとつなタイプは？',
          answers: ['こおり','みず','でんき','あく'],
          correct: 'こおり'
        },
        { 
          question: 'Q.37　フェアリータイプに効果がいまひとつなタイプは？',
          answers: ['ひこう','ゴースト','ドラゴン','ノーマル'],
          correct: 'ドラゴン'
        },
        { 
          question: 'Q.38　フェアリータイプに効果がいまひとつなタイプは？',
          answers: ['エスパー','むし','フェアリー','ゴースト'],
          correct: 'むし'
        },
        { 
          question: 'Q.39（ラスト）　フェアリータイプに効果がいまひとつなタイプは？',
          answers: ['あく','ゴースト','フェアリー','ノーマル'],
          correct: 'あく'
        }
      ];
    
      const quizLength = quiz.length;
      let quizIndex = 0;
      let score = 0;
    
      const button = document.getElementsByClassName('btn-primary');
      const buttonLength = button.length
    
      // クイズの問題文、選択肢を定義
      const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question
        let buttonIndex = 0;
        while(buttonIndex < buttonLength){
          button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
          buttonIndex++;
        }
      }
      setupQuiz();
    
    
      // ボタンを押したら正誤判定
      const clickHandler = (e) =>{
        if(quiz[quizIndex].correct === e.target.textContent){
          window.alert('正解!');
          score++;
        } else {
          window.alert('不正解!');
        }
    
        quizIndex++;
    
        if(quizIndex < quizLength){
          setupQuiz();
        } else {
          window.alert('終了！あなたの正解数は' + quizLength + '問中' + score + '問です!');
          window.alert('お疲れ様でした。トップページに戻ります「OK」を押してください');
          window.location.reload();
        }
      };
    
      let handlerIndex = 0;
      while(handlerIndex < buttonLength){
        button[handlerIndex].addEventListener('click', (e)=> {
          clickHandler(e);
        });
        handlerIndex++;
      }
    }
  });
  // ===================初級問題（単体②）===================


  // ===================初級問題（複合①）===================
  document.getElementById('type3').addEventListener('click', ()=>{
    // 本当に始めますか？を表示する 
    var result = window.confirm('タイプ相性（複合①）を始めますか？\n全部で28問あります。\n「OK」を押すと問題がスタートします');
    if(result){
      // コンテンツ1を非表示にする
      contents2.style.display = "none";
      // コンテンツ2を表示する
      contents3.style.display = "block";
      const quiz = [
        {
          question: 'Q.1　みず/フェアリータイプに効果が抜群なタイプは？',
          answers: ['あく','ゴースト','どく','はがね'],
          correct: 'どく'
        },
        {
          question: 'Q.2　はがね/ひこうタイプに効果が抜群なタイプは？',
          answers: ['こおり','あく','でんき','いわ'],
          correct: 'でんき'
        },
        {
          question: 'Q.3　みず/じめんタイプに効果が抜群なタイプは？',
          answers: ['でんき','こおり','くさ','みず'],
          correct: 'くさ'
        },
        {
          question: 'Q.4　はがね/いわタイプに効果が抜群なタイプは？',
          answers: ['くさ','みず','ほのお','でんき'],
          correct: 'みず'
        },
        {
          question: 'Q.5　ほのお/ゴーストタイプに効果が抜群なタイプは？',
          answers: ['フェアリー','あく','どく','でんき'],
          correct: 'あく'
        },
        {
          question: 'Q.6　ドラゴン/ひこうタイプに効果が抜群なタイプは？',
          answers: ['はがね','じめん','こおり','エスパー'],
          correct: 'こおり'
        },
        {
          question: 'Q.7　くさ/ひこうタイプに効果が抜群なタイプは？',
          answers: ['こおり','むし','でんき','かくとう'],
          correct: 'こおり'
        },
        {
          question: 'Q.8　あく/どくタイプに効果が抜群なタイプは？',
          answers: ['いわ','じめん','フェアリー','エスパー'],
          correct: 'じめん'
        },
        {
          question: 'Q.9　みず/はがねタイプに効果が抜群なタイプは？',
          answers: ['かくとう','あく','ゴースト','くさ'],
          correct: 'かくとう'
        },
        {
          question: 'Q.10　あく/ノーマルータイプに効果が抜群なタイプは？',
          answers: ['じめん','かくとう','ゴースト','エスパー'],
          correct: 'かくとう'
        },
        {
          question: 'Q.11　みず/かくとうタイプに効果が抜群なタイプは？',
          answers: ['ゴースト','ドラゴン','むし','フェアリー'],
          correct: 'フェアリー'
        },
        {
          question: 'Q.12　みず/ひこうタイプに効果が抜群なタイプは？',
          answers: ['くさ','でんき','ドラゴン','じめん'],
          correct: 'でんき'
        },
        {
          question: 'Q.13　むし/はがねタイプに効果が抜群なタイプは？',
          answers: ['ほのお','かくとう','ひこう','じめん'],
          correct: 'ほのお'
        },
        {
          question: 'Q.14　エスパー/フェアリータイプに効果が抜群なタイプは？',
          answers: ['いわ','あく','どく','じめん'],
          correct: 'どく'
        },
        {
          question: 'Q.15　はがね/エスパータイプに効果が抜群なタイプは？',
          answers: ['むし','ほのお','かくとう','はがね'],
          correct: 'ほのお'
        },
        {
          question: 'Q.16　じめん/ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['くさ','みず','こおり','エスパー'],
          correct: 'こおり'
        },
        {
          question: 'Q.17　はがね/かくとうタイプに効果が抜群なタイプは？',
          answers: ['かくとう','ひこう','エスパー','フェアリー'],
          correct: 'かくとう'
        },
        {
          question: 'Q.18　どく/あくタイプに効果が抜群なタイプは？',
          answers: ['かくとう','じめん','フェアリー','エスパー'],
          correct: 'じめん'
        },
        {
          question: 'Q.19　エスパー/ひこうタイプに効果が抜群なタイプは？',
          answers: ['どく','みず','こおり','フェアリー'],
          correct: 'こおり'
        },
        {
          question: 'Q.20　はがね/ほのおタイプに効果が抜群なタイプは？',
          answers: ['いわ','ほのお','じめん','はがね'],
          correct: 'じめん'
        },
        {
          question: 'Q.21　ゴースト/ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['かくとう','エスパー','どく','あく'],
          correct: 'あく'
        },
        {
          question: 'Q.22　でんき/ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['エスパー','はがね','じめん','いわ'],
          correct: 'じめん'
        },
        {
          question: 'Q.23　じめん/ひこうタイプに効果が抜群なタイプは？',
          answers: ['いわ','でんき','くさ','こおり'],
          correct: 'こおり'
        },
        {
          question: 'Q.24　あく/いわタイプに効果が抜群なタイプは？',
          answers: ['ゴースト','あく','かくとう','いわ'],
          correct: 'かくとう'
        },
        {
          question: 'Q.25　じめん/いわタイプに効果が抜群なタイプは？',
          answers: ['ひこう','みず','でんき','ドラゴン'],
          correct: 'みず'
        },
        {
          question: 'Q.26　みず/ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['でんき','くさ','ドラゴン','こおり'],
          correct: 'ドラゴン'
        },
        {
          question: 'Q.27　はがね/じめんタイプに効果が抜群なタイプは？',
          answers: ['いわ','みず','くさ','こおり'],
          correct: 'みず'
        },
        {
          question: 'Q.28（ラスト）　あく/ドラゴンタイプに効果が抜群なタイプは？',
          answers: ['どく','ノーマル','フェアリー','ゴースト'],
          correct: 'フェアリー'
        }
      ];

      const quizLength = quiz.length;
      let quizIndex = 0;
      let score = 0;
    
      const button = document.getElementsByClassName('btn-primary');
      const buttonLength = button.length
    
      // クイズの問題文、選択肢を定義
      const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question
        let buttonIndex = 0;
        while(buttonIndex < buttonLength){
          button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
          buttonIndex++;
        }
      }
      setupQuiz();
    
    
      // ボタンを押したら正誤判定
      const clickHandler = (e) =>{
        if(quiz[quizIndex].correct === e.target.textContent){
          window.alert('正解!');
          score++;
        } else {
          window.alert('不正解!');
        }
    
        quizIndex++;
    
        if(quizIndex < quizLength){
          setupQuiz();
        } else {
          window.alert('終了！あなたの正解数は' + quizLength + '問中' + score + '問です!');
          window.alert('お疲れ様でした。トップページに戻ります「OK」を押してください');
          window.location.reload();
        }
      };
    
      let handlerIndex = 0;
      while(handlerIndex < buttonLength){
        button[handlerIndex].addEventListener('click', (e)=> {
          clickHandler(e);
        });
        handlerIndex++;
      }
    }
  });
  // ===================初級問題（複合①）===================

  // ===================初級問題（複合②）===================
  document.getElementById('type4').addEventListener('click', ()=>{
    // 本当に始めますか？を表示する 
    var result = window.confirm('タイプ相性（複合②）を始めますか？\n全部で28問あります。\n「OK」を押すと問題がスタートします');
    if(result){
      // コンテンツ1を非表示にする
      contents2.style.display = "none";
      // コンテンツ2を表示する
      contents3.style.display = "block";
      const quiz = [
        {
          question: 'Q.1　みず/フェアリータイプに効果がいまひとつなタイプは？',
          answers: ['ノーマル','ゴースト','あく','フェアリー'],
          correct: 'あく'
        },
        {
          question: 'Q.2　はがね/ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['いわ','ノーマル','こおり','あく'],
          correct: 'ノーマル'
        },
        {
          question: 'Q.3　みず/じめんタイプに効果がいまひとつなタイプは？',
          answers: ['いわ','じめん','みず','こおり'],
          correct: 'いわ'
        },
        {
          question: 'Q.4　はがね/いわタイプに効果がいまひとつなタイプは？',
          answers: ['ゴースト','あく','じめん','いわ'],
          correct: 'いわ'
        },
        {
          question: 'Q.5　ほのお/ゴーストタイプに効果がいまひとつなタイプは？',
          answers: ['ゴースト','あく','フェアリー','エスパー'],
          correct: 'フェアリー'
        },
        {
          question: 'Q.6　ドラゴン/ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['じめん','でんき','ノーマル','はがね'],
          correct: 'じめん'
        },
        {
          question: 'Q.7　くさ/ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['むし','くさ','でんき','はがね'],
          correct: 'くさ'
        },
        {
          question: 'Q.8　あく/どくタイプに効果がいまひとつなタイプは？',
          answers: ['どく','かくとう','ひこう','でんき'],
          correct: 'どく'
        },
        {
          question: 'Q.9　みず/はがねタイプに効果がいまひとつなタイプは？',
          answers: ['くさ','ほのお','いわ','じめん'],
          correct: 'いわ'
        },
        {
          question: 'Q.10　あく/ノーマルータイプに効果がいまひとつなタイプは？',
          answers: ['かくとう','ゴースト','フェアリー','ひこう'],
          correct: 'ゴースト'
        },
        {
          question: 'Q.11　みず/かくとうタイプに効果がいまひとつなタイプは？',
          answers: ['ひこう','ゴースト','かくとう','いわ'],
          correct: 'いわ'
        },
        {
          question: 'Q.12　みず/ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['こおり','みず','ひこう','くさ'],
          correct: 'みず'
        },
        {
          question: 'Q.13　むし/はがねタイプに効果がいまひとつなタイプは？',
          answers: ['じめん','いわ','エスパー','かくとう'],
          correct: 'エスパー'
        },
        {
          question: 'Q.14　エスパー/フェアリータイプに効果がいまひとつなタイプは？',
          answers: ['かくとう','あく','ゴースト','フェアリー'],
          correct: 'かくとう'
        },
        {
          question: 'Q.15　はがね/エスパータイプに効果がいまひとつなタイプは？',
          answers: ['みず','こおり','じめん','あく'],
          correct: 'こおり'
        },
        {
          question: 'Q.16　じめん/ドラゴンタイプに効果がいまひとつなタイプは？',
          answers: ['みず','でんき','くさ','はがね'],
          correct: 'でんき'
        },
        {
          question: 'Q.17　はがね/かくとうタイプに効果がいまひとつなタイプは？',
          answers: ['ひこう','いわ','じめん','ゴースト'],
          correct: 'いわ'
        },
        {
          question: 'Q.18　どく/あくタイプに効果がいまひとつなタイプは？',
          answers: ['ほのお','いわ','ゴースト','ひこう'],
          correct: 'ゴースト'
        },
        {
          question: 'Q.19　エスパー/ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['エスパー','フェアリー','ゴースト','ほのお'],
          correct: 'エスパー'
        },
        {
          question: 'Q.20　はがね/ほのおタイプに効果がいまひとつなタイプは？',
          answers: ['ほのお','くさ','でんき','みず'],
          correct: 'くさ'
        },
        {
          question: 'Q.21　ゴースト/ドラゴンタイプに効果がいまひとつなタイプは？',
          answers: ['どく','はがね','エスパー','ひこう'],
          correct: 'どく'
        },
        {
          question: 'Q.22　でんき/ドラゴンタイプに効果がいまひとつなタイプは？',
          answers: ['いわ','でんき','ゴースト','あく'],
          correct: 'でんき'
        },
        {
          question: 'Q.23　じめん/ひこうタイプに効果がいまひとつなタイプは？',
          answers: ['くさ','はがね','かくとう','いわ'],
          correct: 'かくとう'
        },
        {
          question: 'Q.24　あく/いわタイプに効果がいまひとつなタイプは？',
          answers: ['じめん','いわ','はがね','ドラゴン'],
          correct: 'いわ'
        },
        {
          question: 'Q.25　じめん/いわタイプに効果がいまひとつなタイプは？',
          answers: ['ほのお','はがね','ドラゴン','あく'],
          correct: 'ほのお'
        },
        {
          question: 'Q.26　みず/ドラゴンタイプに効果がいまひとつなタイプは？',
          answers: ['こおり','くさ','でんき','みず'],
          correct: 'みず'
        },
        {
          question: 'Q.27　はがね/じめんタイプに効果がいまひとつなタイプは？',
          answers: ['ノーマル','ゴースト','あく','かくとう'],
          correct: 'ノーマル'
        },
        {
          question: 'Q.28（ラスト）　あく/ドラゴンタイプに効果がいまひとつなタイプは？',
          answers: ['どく','ゴースト','ノーマル','フェアリー'],
          correct: 'ゴースト'
        }
      ];

      const quizLength = quiz.length;
      let quizIndex = 0;
      let score = 0;
    
      const button = document.getElementsByClassName('btn-primary');
      const buttonLength = button.length
    
      // クイズの問題文、選択肢を定義
      const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question
        let buttonIndex = 0;
        while(buttonIndex < buttonLength){
          button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
          buttonIndex++;
        }
      }
      setupQuiz();
    
    
      // ボタンを押したら正誤判定
      const clickHandler = (e) =>{
        if(quiz[quizIndex].correct === e.target.textContent){
          window.alert('正解!');
          score++;
        } else {
          window.alert('不正解!');
        }
    
        quizIndex++;
    
        if(quizIndex < quizLength){
          setupQuiz();
        } else {
          window.alert('終了！あなたの正解数は' + quizLength + '問中' + score + '問です!');
          window.alert('お疲れ様でした。トップページに戻ります「OK」を押してください');
          window.location.reload();
        }
      };
    
      let handlerIndex = 0;
      while(handlerIndex < buttonLength){
        button[handlerIndex].addEventListener('click', (e)=> {
          clickHandler(e);
        });
        handlerIndex++;
      }
    }
  });
  // ===================初級問題（複合②）===================
});