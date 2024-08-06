let Q = ["apple","banana","melon","mango","starwberry","blueberry","orange"];//問題文
	let Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する

	let Q_i = 0;//回答初期値・現在単語どこまで合っているか判定している文字番号
	let Q_l = Q[Q_No].length;//計算用の文字の長さ


window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){

	let keyCode = event.key;
	if (Q_l == Q_l-Q_i){

		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す

		}


	if (Q[Q_No].charAt(Q_i) == keyCode) { //押したキーが合っていたら

		Q_i++; //判定する文章に１足す
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す

		if (Q_l-Q_i === 0){ //全部正解したら
	
	
			Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
			Q_i = 0;//回答初期値・現在どこまで合っているか判定している文字番号
			Q_l = Q[Q_No].length;//計算用の文字の長さ


			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //新たな問題を書き出す

		}
	}

	// かな->ローマ変換
	function kanaToRoman(kana) {
		const romanMap = {
		  'あ':['a'], 'い':['i', 'yi'], 'う':['u', 'wu'], 'え':['e'], 'お':['o'],
		  'か':['ka', 'ca'], 'き':['ki'], 'く':['ku', 'cu', 'qu'], 'け':['ke'], 'こ':['ko', 'co'],
		  'さ':['sa'], 'し':['si', 'shi', 'ci'], 'す':['su'], 'せ':['se', 'ce'], 'そ':['so'],
		  'た':['ta'], 'ち':['ti', 'chi'], 'つ':['tu', 'tsu'], 'て':['te'], 'と':['to'],
		  'な':['na'], 'に':['ni'], 'ぬ':['nu'], 'ね':['ne'], 'の':['no'],
		  'は':['ha'], 'ひ':['hi'], 'ふ':['fu', 'hu'], 'へ':['he'], 'ほ':['ho'],
		  'ま':['ma'], 'み':['mi'], 'む':['mu'], 'め':['me'], 'も':['mo'],
		  'や':['ya'], 'ゆ':['yu'], 'よ':['yo'],
		  'ら':['ra'], 'り':['ri'], 'る':['ru'], 'れ':['re'], 'ろ':['ro'],
		  'わ':['wa'], 'ゐ':['wyi'], 'ゑ':['wye'], 'を':['wo'], 'ん':['nn', 'xn', 'n'],
		  'が':['ga'], 'ぎ':['gi'], 'ぐ':['gu'], 'げ':['ge'], 'ご':['go'],
		  'ざ':['za'], 'じ':['ji', 'zi'], 'ず':['zu'], 'ぜ':['ze'], 'ぞ':['zo'],
		  'だ':['da'], 'ぢ':['di'], 'づ':['du'], 'で':['de'], 'ど':['do'],
		  'ば':['ba'], 'び':['bi'], 'ぶ':['bu'], 'べ':['be'], 'ぼ':['bo'],
		  'ぱ':['pa'], 'ぴ':['pi'], 'ぷ':['pu'], 'ぺ':['pe'], 'ぽ':['po'],
		  'うぁ':['wha'], 'うぃ':['whi'], 'うぇ':['whe'], 'うぉ':['who'],
		  'きゃ':['kya'], 'きぃ':['kyi'], 'きゅ':['kyu'], 'きぇ':['kye'], 'きょ':['kyo'],
		  'くぁ':['qa', 'qwa'], 'くぃ':['qi', 'qwi'], 'くぇ':['qe', 'qwe'], 'くぉ':['qo', 'qwo'], 'くゃ':['qya'], 'くゅ':['qyu'], 'くょ':['qyo'],
		  'しゃ':['sya', 'sha'], 'しぃ':['syi'], 'しゅ':['syu', 'shu'], 'しぇ':['sye', 'she'], 'しょ':['syo', 'sho'],
		  'つぁ':['tsa'], 'つぃ':['tsi'], 'つぇ':['tse'], 'つぉ':['tso'],
		  'ちゃ':['tya', 'cha'], 'ちぃ':['tyi'], 'ちゅ':['tyu', 'chu'], 'ちぇ':['tye', 'che'], 'ちょ':['tyo', 'cho'],
		  'てゃ':['tha'], 'てぃ':['thi'], 'てゅ':['thu'], 'てぇ':['the'], 'てょ':['tho'],
		  'とぁ':['twa'], 'とぃ':['twi'], 'とぅ':['twu'], 'とぇ':['twe'], 'とぉ':['two'],
		  'ひゃ':['hya'], 'ひぃ':['hyi'], 'ひゅ':['hyu'], 'ひぇ':['hye'], 'ひょ':['hyo'],
		  'ふぁ':['fa'], 'ふぃ':['fi'], 'ふぇ':['fe'], 'ふぉ':['fo'],
		  'にゃ':['nya'], 'にぃ':['nyi'], 'にゅ':['nyu'], 'にぇ':['nye'], 'にょ':['nyo'],
		  'みゃ':['mya'], 'みぃ':['myi'], 'みゅ':['myu'], 'みぇ':['mye'], 'みょ':['myo'],
		  'りゃ':['rya'], 'りぃ':['ryi'], 'りゅ':['ryu'], 'りぇ':['rye'], 'りょ':['ryo'],
		  'ヴぁ':['va'], 'ヴぃ':['vi'], 'ヴ':['vu'], 'ヴぇ':['ve'], 'ヴぉ':['vo'],
		  'ぎゃ':['gya'], 'ぎぃ':['gyi'], 'ぎゅ':['gyu'], 'ぎぇ':['gye'], 'ぎょ':['gyo'],
		  'ぐぁ':['gwa'], 'ぐぃ':['gwi'], 'ぐぅ':['gwu'], 'ぐぇ':['gwe'], 'ぐぉ':['gwo'],
		  'じゃ':['ja', 'zya'], 'じぃ':['jyi', 'zyi'], 'じゅ':['ju', 'zyu'], 'じぇ':['je', 'zye'], 'じょ':['jo', 'zyo'],
		  'でゃ':['dha'], 'でぃ':['dhi'], 'でゅ':['dhu'], 'でぇ':['dhe'], 'でょ':['dho'],
		  'ぢゃ':['dya'], 'ぢぃ':['dyi'], 'ぢゅ':['dyu'], 'ぢぇ':['dye'], 'ぢょ':['dyo'],
		  'びゃ':['bya'], 'びぃ':['byi'], 'びゅ':['byu'], 'びぇ':['bye'], 'びょ':['byo'],
		  'ぴゃ':['pya'], 'ぴぃ':['pyi'], 'ぴゅ':['pyu'], 'ぴぇ':['pye'], 'ぴょ':['pyo'],
		  'ぁ':['la', 'xa'], 'ぃ':['li', 'xi'], 'ぅ':['lu', 'xu'], 'ぇ':['le', 'xe'], 'ぉ':['lo', 'xo'],
		  'ゃ':['lya', 'xya'], 'ゅ':['lyu', 'xyu'], 'ょ':['lyo', 'xyo'], 'っ':['ltu', 'xtu'],
		  'ー':['-'], ',':[','], '.':['.'], '、':[','], '。':['.'],
		  '・':['/'], '、':[','], '。':['.'], '・':['/']
		};
	
		let remStr = String(kana), slStr, roman, next;
		let result = [];
	
		function splice() {
		  let oneChar = remStr.slice(0, 1);
		  remStr = remStr.slice(1);
		  return oneChar;
		}
	
		function isSmallChar() {
		  return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょ]$/);
		}
	
		while (remStr) {
		  slStr = splice();
		  next = romanMap[remStr.slice(0, 1)];
		  if (slStr == 'っ') {
			if (!remStr || remStr.match(/^[,.]/) || !next || next[0].match(/^[aiueon]/)) {
			  roman = [...romanMap[slStr]];
			  result.push(roman);
			} else {
			  slStr = splice();
			  if (isSmallChar()) slStr += splice();
			  roman = [...romanMap[slStr].map(str => str.slice(0, 1) + str)];
			  result.push(roman);
			}
		  } else {
			if (isSmallChar()) slStr += splice();
			if (slStr == '&') {
			  slStr += remStr.slice(0, 7);
			  remStr = remStr.slice(7);
			}
			roman = romanMap[slStr] ? [...romanMap[slStr]] : [...slStr];
			if (slStr == 'ん') {
			  if (!remStr) {
				roman.pop();
			  } else {
				if (next[0].match(/^[aiueony]/)) roman.pop();
			  }
			}
			result.push(roman);
		  }
		}
	
		return result;
	  }
	
	  // 打った部分の色付け
	  function colorTyped() {
		let html = '<div><span class="typed">';
		if (idx1 > 0) {
		  for (let i = 0; i < idx1; i++) {
			html += wordR[i][pattern[i]];
		  }
		}
		for (let i = 0; i <= idx2; i++) {
		  html += wordR[idx1][pattern[idx1]][i];
		}
		html += '</span><span>';
		for (let i = idx2 + 1; i < wordR[idx1][pattern[idx1]].length; i++) {
		  html += wordR[idx1][pattern[idx1]][i];
		}
		for (let i = idx1 + 1; i < wordR.length; i++) {
		  html += wordR[i][pattern[i]];
		}
		html += '</span></div>';
		return html;
	  }
	
	  // テキスト移動処理
	  function textMove() {
		const textS = document.querySelector('#sentence > div');
		const textE = document.querySelector('#example > div');
		const textK = document.querySelector('#kana > div');
		const textS1 = textS.querySelector('.typed');
		const textS2 = textS.querySelector('span:not(.typed)');
		let remLen = textS2.innerText.length;
		if (idx1 == 0) {
		  over1 = textS.clientWidth - 580;
		  over2 = textE.clientWidth - 580;
		  over3 = textK.clientWidth - 580;
		  left1 = 0, left2 = 0, left3 = 0;
		}
		if (textS.clientWidth > 580) {
		  if (textS1.getBoundingClientRect().width > 310) {
			let move1 = textS2.getBoundingClientRect().width / remLen;
			left1 += move1;
			textS.style.left = -left1 + 'px';
		  }
		}
		if (textE.clientWidth > 580) {
		  let move2 = over2 / remLen;
		  left2 += move2;
		  textE.style.left = -left2 + 'px';
		  over2 -= move2;
		}
		if (textK.clientWidth > 580) {
		  let move3 = over3 / remLen;
		  left3 += move3;
		  textK.style.left = -left3 + 'px';
		  over3 -= move3;
		}

		function selActive() {
			const prevActive = keyboard.querySelector('.active');
			const selector = '.key_' + keyConvert(wordR[idx1][pattern[idx1]][idx2]);
			const target = keyboard.querySelector(selector);
			if (prevActive) {
			  prevActive.classList.remove('active');
			}
			if (target && flagG) {
			  target.classList.add('active');
			}
		  }
		
		  // 対応キーの変換
		  function keyConvert(key) {
			const keyMap = {
			  '-':'hyphen', '@':'atmark', ';':'semicolon', ':':'colon', ',':'comma',
			  '.':'period', '/':'slash', ' ':'space'
			}
		
			if (keyMap[key]) {
			  return keyMap[key];
			} else {
			  return key;
			}
		  }
	}
}