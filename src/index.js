const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  //テキストボックスを空にする。
  document.getElementById("add-text").value = "";
  //テキストボックスに入力された値をアラートとして表示。
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
