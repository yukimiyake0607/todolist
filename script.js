

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
        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;
        
        // 完了ボタンが押された時、完了ボタンの親要素(li)を未完了リストから削除する
        deleteFromIncompleteList(completeButton.parentNode);
    });
    
    // button(削除)を生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 削除ボタンが押された時、削除ボタンの親要素(li)を未完了リストから削除する
        deleteFromIncompleteList(deleteButton.parentNode)
    });
    
    // liの子要素に各要素を指定
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // liをulの子要素（未完了リスト）に追加
    document.getElementById("incomplete-list").appendChild(li);
    
};


// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

// 追加ボタンをクリックすると、onClickAddが実行される
document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());