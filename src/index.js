const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  //テキストボックスを空にする。
  document.getElementById("add-text").value = "";
  //テキストボックスに入力された値をアラートとして表示。
  createIncomplateList(inputText);
};

//未完了リストから指定の要素を削除
const delateFromIncomplateList = (target) => {
  document.getElementById("incomplateList").removeChild(target);
};

//未完了汁とを追加する関数
const createIncomplateList = (text) => {
  //li生成
  const liList = document.createElement("li");
  liList.className = "list-row";
  //ボタンエリア生成
  const btnArea = document.createElement("div");
  btnArea.classList = "btnArea";
  //pタグ作成(テキスト取得)
  const pText = document.createElement("p");
  pText.innerText = text;

  //完了ボタン挿入
  const btnComplate = document.createElement("button");
  btnComplate.innerText = "完了";
  btnComplate.addEventListener("click", () => {
    //押された完了ボタンの親タグ(.list-low)を削除
    delateFromIncomplateList(btnRemove.closest(".list-row"));
    //完了リストに追加する要素
    const addTarget = btnComplate.closest(".list-row");
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //li以下を初期化
    addTarget.textContent = null;
    //li以下に代入
    const psec = document.createElement("p");
    psec.innerText = text;
    //ボタンが入る要素を作成
    const divWrap = document.createElement("div");

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      const removeTargetBack = backBtn.closest(".list-row");
      document.getElementById("complateList").removeChild(removeTargetBack);

      //テキストを取得
      const text = removeTargetBack.firstElementChild.innerText;
      //テキストを戻す
      createIncomplateList(text);
    });

    addTarget.appendChild(psec);
    addTarget.appendChild(divWrap);
    divWrap.appendChild(backBtn);

    document.getElementById("complateList").appendChild(addTarget);
  });

  //削除ボタン挿入
  const btnRemove = document.createElement("button");
  btnRemove.innerText = "削除";
  btnRemove.addEventListener("click", () => {
    // const removeTarget = btnRemove.parentNode.parentNode ←愚行;
    // const removeTarget = btnRemove.closest(".list-row");
    // document.getElementById("incomplateList").removeChild(removeTarget);
    delateFromIncomplateList(btnRemove.closest(".list-row"));
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
