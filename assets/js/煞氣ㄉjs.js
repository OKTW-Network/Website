
// Source : https://github.com/aszx87410/mars-lang-chrome-extension/blob/master/dict.js
var 煞氣ㄉ清單 = {
    '走吧' : '98',
	'你': '泥',
	'妳': '泥',
	'我': '窩',
	'好': '毫',
	'的': 'ㄉ',
	'呵': 'ㄏ',
	'喔': 'ㄛ',
	'看': '抗',
	'一': 'yee',
	'吧': 'ㄅ',
	'嗎': 'ㄇ',
	'廢物': 'ㄈㄨ',
	'是': '4',
	'知': 'ㄓ',
	'隻': 'ㄓ',
	'之': 'ㄓ',
	'阿': 'ㄚ',
	'啊': 'ㄚ',
	'得': 'ㄉ',
	'不': 'ㄅ',
	'喜歡': '洗翻',
	'這樣': '醬',
	'說': '縮',
	'個': 'ㄍ',
	'歌': 'ㄍ',
	'哥': 'ㄍ',
	'無': '5',
	'傘': '3',
	'呢': 'ㄋ',
	'了': 'ㄌ',
	'愛': 'i',
	'最': '醉',
	'很': '狠',
	'加油' : '+u',
	'什麼' : '神馬'
}

function 變煞氣(){
    document.getElementById("full87").style.opacity = "1";
    document.getElementById("full87").style.zIndex = "10";
    var sections = document.getElementsByClassName("section");
    for(煞氣ㄉ in 煞氣ㄉ清單){
        for(文字ㄉ拉 in sections){
            if( typeof sections[文字ㄉ拉].innerHTML === "string"){
                sections[文字ㄉ拉].innerHTML = sections[文字ㄉ拉].innerHTML.replace(煞氣ㄉ,煞氣ㄉ清單[煞氣ㄉ]);
            }
        }
    }
    setTimeout(function(){
        document.getElementById("full87").style.opacity = "0";
        var 文字們 = document.getElementsByClassName("text");
        for (文字 in 文字們){
            文字們[文字].className = 文字們[文字].className + " rainbow";
        }
    init_animation();
    },1200)
    setTimeout(function(){
        document.getElementById("full87").style.zIndex = "-100";
        document.getElementById("btn_87").style.zIndex = "-100";
    },2000)
    
}

document.getElementById("btn_87").onclick = 變煞氣;
