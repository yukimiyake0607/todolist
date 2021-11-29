

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liタグを生成
    const li = document.createElement("li");
    li.className = "list-row";
    
    // pタグを生成
    const p = document.createElement("p");
    p.innerText = inputText;
    
    // liの子要素に各要素を指定
    li.appendChild(p);
    console.log(li);
};




// 追加ボタンをクリックすると、onClickAddが実行される
document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());