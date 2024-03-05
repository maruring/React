const defaultDataset = {
    "init": {
        "answers": [
            {content: "育児について相談する", nextId: "childcare"},
            {content: "家事を依頼する", nextId: "house_work"},
            {content: "旅行を提案する", nextId: "travel"}
        ],
        "question": "家庭のことについて相談を承ります"
    },
    "house_work": {
        "answers": [
            {content: "掃除を依頼する", nextId: "house_cleaning"},
            {content: "食器洗いを依頼する", nextId: "wash_dishes"}
        ],
        "question": "どの家事を依頼しますか?"
    }
}

export default defaultDataset;