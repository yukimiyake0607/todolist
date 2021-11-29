

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

    // button(完了)を生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        alert("完了");
    });
    
    // button(削除)を生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 削除ボタンが押された時、削除ボタンの親要素(li)を未完了リストから削除する
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });
    
    // liの子要素に各要素を指定
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // liをulの子要素（未完了リスト）に追加
    document.getElementById("incomplete-list").appendChild(li);
    
};




// 追加ボタンをクリックすると、onClickAddが実行される
document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());