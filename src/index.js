const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  //テキストボックスを空にする。
  document.getElementById("add-text").value = "";
  //テキストボックスに入力された値をアラートとして表示。

  //li生成
  const liList = document.createElement("li");
  liList.className = "list-row";

  //li作成
  const pText = document.createElement("p");
  pText.innerText = inputText;

  //ulタグの子要素に各要素を設定
  liList.appendChild(pText);

  //未完了のリストに追加
  document.getElementById("incomplateList").appendChild(liList);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
