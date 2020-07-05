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


//　11.if文
const level = 12;
if (level > 10) {
  console.log("レベルが10より大きいです"); 
  // 条件に合う場合出力される。
  // if (level < 10) この場合は、levelの方が大きく条件として正しくないため出力されない。
}
// →レベルが10より大きいです


// 12.真偽値/比較演算(1)
const age = 24;
// 「age >= 20」を出力してください
console.log(age >= 20);
// →true

// 「age < 20」を出力してください
console.log(age < 20);
// →false

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
}
// →私は20歳以上です


// 13.真偽値/比較演算(2)
const password = "ninjawanko";
// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password === "ninjawanko") { 
  //　a === b　(aとbが等しい。一致する)
  console.log("ログインに成功しました");　
}
// →ログインに成功しました

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password !== "ninjawanko") { 
  //　a !== b　(aとbが異なる)
  console.log("パスワードが間違っています");
}
// →falseのため出力されない


// 14.else
const age = 17;
// ifの条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です"); 
  // →ageは20より大きくも等しくもないためfalse。条件として成り立たないため出力されない。
} else {
  console.log("私は20歳未満です");
  // →ifの条件に該当しない場合はelseが出力される
}
// →私は20歳未満です


// 15.else if
const age = 17;
// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
  // →ifの条件はfalseのため出力されない。
} else if (age >= 10) {
  console.log("私は20歳未満ですが、10歳以上です");
  // →else ifは条件に成り立たつため出力される。
} else {
  console.log("私は10歳未満です");
  // →if文/else if文の両方の条件がfalseの時はelseが出力される。
}
// →私は20歳未満ですが、10歳以上です


// 16.複数の条件式
const age = 24;
// 「定数ageの値が20以上かつ30未満」という条件のif文を作成してください。
if (age >= 20 && age < 30) {
　// かつ「&&」 複数の条件が全て複数ならtrue(出力される)
　// または「||」複数の条件のうち１つでもtrueなら出力される)
  console.log("私は20代です"); 
}
// →私は20代です


// 17.switch文(1)
// 値によって処理を分岐する場合にswitch文を用いることができる
const rank = 2; 
switch (rank) {
  case 1: // ←「：」つけ忘れ注意！
    console.log("金メダルです！");
    break; // ←「break;」をしっかり記述すること！

  // rankの値が2のcaseを追加してください
  case 2:
    console.log("銀メダルです！");
    break;
  
  // rankの値が3のcaseを追加してください
  case 3:
    console.log("銅メダルです！");
    break;  
}
// →銀メダルです！


// 18.switch文(2)
const rank = 5;
switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;

  case 2:
    console.log("銀メダルです！");
    break;

  case 3:
    console.log("銅メダルです！");
    break;

  // defaultの処理を追加してください
  // 定数の値に該当するcaseがない場合の出力処理
  default : // ←「：」つけ忘れ注意！
    console.log("メダルはありません");
    break;
}
// →メダルはありません
