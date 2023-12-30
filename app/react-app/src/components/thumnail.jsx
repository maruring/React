import React from "react";

// 閉じタグが必ず必要になる
// 最上位コンポーネントを並列にする場合は　React.Fragmentが必要になる => <>で省略形で記載することも可能
const Thumbnail = () => {
    const caption = '始めてのReact';
    const imagePath = './logo.svg' //キャメルケースで記述する
    return (
        <React.Fragment>
            <p>React Fragment</p>
            <p>{caption}</p>
            <img src={imagePath} alt="{練習}" />
        </React.Fragment>
    )
}

export default Thumbnail