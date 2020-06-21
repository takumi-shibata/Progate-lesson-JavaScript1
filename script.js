// 「Hello World」とコンソールに出力してください
console.log("Hello World");

// 「にんじゃわんこ」とコンソールに出力してください
console.log("にんじゃわんこ");

// 以下の行をコメントアウトしてください
//console.log("この行をコメントアウトしてください");


//文字列と計算について
// 5と3を足した値を出力してください
console.log(5 + 3);

// 20から8を引いた値を出力してください
console.log(20 - 8);

// "4 + 5" を文字列として出力してください
console.log("4 + 5");

// 8と4をかけた結果を出力してください
console.log(8 * 4);

// 24を4で割った結果を出力してください
console.log(24 / 4);

// 7を2で割った余りを出力してください
console.log(7 % 2);

// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log("ひつじ" + "仙人");

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log("20" + "15");


//変数について
// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";
// 変数nameの値を出力してください
console.log(name);

// 変数lengthを定義してください
let length = 5;
// 変数lengthの値を出力してください
console.log(length);
// 変数lengthを用いて、円の面積を出力してください
console.log(length * length * 3);


//変数の更新について
let name = "にんじゃわんこ";
console.log(name);
// 変数nameの値を"とりずきん"に更新してください
name = "とりずきん";
// 変数nameの値を出力してください
console.log(name);

let number = 7;
console.log(number);
// 変数numberの値に3を加えてください
number += 3;  
console.log(number);
// 変数numberの値を2で割ってください
number /= 2;
console.log(number);


//定数について
// 定数languageを定義してください
const language = "フランス語";
// 定数languageの値を出力してください
console.log(language);
// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language + "を話せます");


//テンプレートリテラル(＋」記号を用いらなくとも文字を連結させる事が出来る方法)
const name = "にんじゃわんこ";
const age = 14;
// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name}です`);
// 「今は〇〇歳です」と出力してください
console.log(`今は${age}歳です`);


//条件分岐if文
const level = 12;
if (level > 10) {
  console.log("レベルが10より大きいです"); //←条件に合う場合出力される。if (level < 10) この場合は、levelの方が大きく条件として正しくないため出力されない。
}


//条件分岐else
const age = 17;
// ifの条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です"); //→ageは20より大きくも等しくもないため、"私は20歳以上"ではない。条件として成り立たないため出力されない。
} else {
  console.log("私は20歳未満です"); //→そうでなければ、"私は20歳未満"、elseとして成り立つので出力される。
}


//条件分岐else if
const age = 17;
// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です"); //ifは条件に成り立たない。出力されない。
} else if (age >= 10) {
  console.log("私は20歳未満ですが、10歳以上です"); //else ifは条件に成り立たつ。出力される。
} else {
  console.log("私は10歳未満です"); //elseは条件に成り立たない。出力されない。
}


//真偽値
const age = 24;
// 「age >= 20」を出力してください
console.log(age >= 20);　//←true
// 「age < 20」を出力してください
console.log(age < 20);  //←false
// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です"); //←上記と同様、条件として成り立つ場合出力される。条件分岐の場合以下同様。
}


//比較演算
const password = "ninjawanko";
// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password === "ninjawanko") { //　===　一致
  console.log("ログインに成功しました");　
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password !== "ninjawanko") { //　!==　異なる
  console.log("パスワードが間違っています"); //今回の場合、条件として成り立たないため出力されない。
}


//かつ&&
const age = 24;
if (age >= 20 && age < 30) {
  console.log("私は20代です"); //複数の条件が全て複数ならtrue(出力される)
}
//(または|| もある。複数の条件のうち１つでもtrueなら出力される)


//switch文
const rank = 2; //←値(右辺)によって出力内容が変わる。この場合2の"銀メダルです！"が出力される。
switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;

  // rankの値が2のcaseを追加してください
  case 2:
    console.log("銀メダルです！"); //→出力される
    break;
  
  // rankの値が3のcaseを追加してください
  case 3:
    console.log("銅メダルです！");
    break;  
}

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
  default :　//条件とされている値に該当するcaseがない場合の出力処理
    console.log("メダルはありません"); //→出力される
    break;
}