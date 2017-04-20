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
}

document.getElementById("btn2").onclick = function() {
    addText("そふとうぇあ開発<br />");
}
