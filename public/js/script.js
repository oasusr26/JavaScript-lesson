confirm("JavaScript files");

document.getElementById("test").innerHTML = new Date().toLocaleString();

// document.getElementById("btn").onclick = function() {
//     document.getElementById("lesson").innerHTML = "こんにちは、" +
//     document.getElementById("name").value + "さん！";
// };

document.getElementById("btn1").onclick = function() {
    document.getElementById("test2").innerHTML += "システム活用コース<br />";
};

document.getElementById("btn2").onclick = function() {
    document.getElementById("test2").innerHTML += "ソフトウェア開発<br />";
};

// 関数
function addText(text) {
    document.getElementById("test2").innerHTML += text; 
}

// 関数の呼び出し
document.getElementById("btn1").onclick = function() {
    addText("しすてむ活用<br />");
};

document.getElementById("btn2").onclick = function() {
    addText("そふとうぇあ開発<br />");
};

document.getElementById("btn3").onclick = function() {
    addText("OAシステム科<br />");
    
};

// 処理を遅らせて実行
// contentを受け取って表示する関数
function addSentence(content) {
    // 1000ミリ秒（1秒）後に実行させるように予約
    setTimeout(function() {
    // この中が1秒後に実行される
    document.getElementById("test2").innerHTML += content;
    }, 1000);
}

document.getElementById("btn1").onclick = function() {
    addSentence("システム活用");
};

document.getElementById("btn2").onclick = function() {
    addSentence("ソフトウェア開発");
};

document.getElementById("btn3").onclick = function() {
    addSentence("OAしすてむ科");
};



// 1秒ごとに処理を実行
setInterval(function() {
    document.getElementById("test2").innerHTML += "1秒ごとに実行！";
}, 3000);

// 
setInterval(function() {
    document.getElementById("test2").innerHTML += new Date().toLocaleString() + "<br>";
}, 2000);

// test2の中身をからにする。
document.getElementById("test2").innerHTML = "";
// 10回繰り返す
for (var i = 1; i <= 10; i++) {
    document.getElementById("test2").innerHTML += i + "<br />";
    
}