
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
        // 完了ボタンが押された時、完了ボタンの親要素(li)を未完了リストから削除する
        deleteFromIncompleteList(completeButton.parentNode);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;
        
        // liの中身を初期化
        addTarget.textContent = null;
        
        // pタグを生成
        const p = document.createElement("p");
        p.innerText = text;

        // button(戻す)タグを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // 押された戻すボタンの親タグ(li)を完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);
        });

        // liタグの子要素に各要素を指定
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);

        // 完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);
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