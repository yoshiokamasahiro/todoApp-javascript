const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  //テキストボックスを空にする。
  document.getElementById("add-text").value = "";
  //テキストボックスに入力された値をアラートとして表示。

  //li生成
  const liList = document.createElement("li");
  liList.className = "list-row";

  //ボタンエリア生成
  const btnArea = document.createElement("div");
  btnArea.classList = "btnArea";

  //pタグ作成(テキスト取得)
  const pText = document.createElement("p");
  pText.innerText = inputText;

  //完了ボタン挿入
  const btnComplate = document.createElement("button");
  btnComplate.innerText = "完了";
  btnComplate.addEventListener("click", () => {});

  //削除ボタン挿入
  const btnRemove = document.createElement("button");
  btnRemove.innerText = "削除";
  btnRemove.addEventListener("click", () => {
    // const removeTarget = btnRemove.parentNode.parentNode ←愚行;
    const removeTarget = btnRemove.closest(".list-row");
    document.getElementById("incomplateList").removeChild(removeTarget);
  });

  //ulタグの子要素に各要素を設定
  liList.appendChild(pText);
  liList.appendChild(btnArea);
  btnArea.appendChild(btnComplate);
  btnArea.appendChild(btnRemove);

  //未完了のリストに追加
  document.getElementById("incomplateList").appendChild(liList);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
