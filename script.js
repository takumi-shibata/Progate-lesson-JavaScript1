// 1.文字の出力
// 「Hello World」とコンソールに出力してください
console.log("Hello World");
// →Hello World

// 「にんじゃわんこ」とコンソールに出力してください
console.log("にんじゃわんこ");
// →にんじゃわんこ

// 以下の行をコメントアウトしてください
//console.log("この行をコメントアウトしてください");


// 2.文字列と計算について(1)
// 5と3を足した値を出力してください
console.log(5 + 3);
// →8

// 20から8を引いた値を出力してください
console.log(20 - 8);
// →12

// "4 + 5" を文字列として出力してください
console.log("4 + 5");
// →4 + 5


// 3.文字列と計算について(2)
// 8と4をかけた結果を出力してください
console.log(8 * 4);
// →32

// 24を4で割った結果を出力してください
console.log(24 / 4);
// →6

// 7を2で割った余りを出力してください
console.log(7 % 2);
// →1


// 4.文字の連結
// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log("ひつじ" + "仙人");
// →ひつじ仙人

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log("20" + "15");
// →2015


// 5.変数について(1)
// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";
// 変数nameの値を出力してください
console.log(name);
// →にんじゃわんこ


// 6.変数について(2)
// 変数lengthを定義してください
let length = 5;
// 変数lengthの値を出力してください
console.log(length);
// →5

// 変数lengthを用いて、円の面積を出力してください
console.log(length * length * 3);
// →75


// 7.変数の更新について(1)
let name = "にんじゃわんこ";
console.log(name);
// 変数nameの値を"とりずきん"に更新してください
name = "とりずきん";
// 変数nameの値を出力してください
console.log(name);
// →とりずきん


// 8.変数の更新について(2)
let number = 7;
console.log(number);
// →7

// 変数numberの値に3を加えてください
number += 3;  
console.log(number);
// →10

// 変数numberの値を2で割ってください
number /= 2;
console.log(number);
// →5


// 9.定数について(定数は値を更新することはできない)
// 定数languageを定義してください
const language = "フランス語";
// 定数languageの値を出力してください
console.log(language);
// →フランス語

// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language + "を話せます");
// →フランス語を話せます


// 10.テンプレートリテラル(「＋」記号を用いらなくとも文字を連結させる事が出来る方法)
const name = "にんじゃわんこ";
const age = 14;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name}です`);
// →ぼくの名前はにんじゃわんこです

// 「今は〇〇歳です」と出力してください
console.log(`今は${age}歳です`);
// →今は14歳です
