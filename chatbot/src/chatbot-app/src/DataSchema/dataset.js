const defaultDataset = {
    "init": {
        "answers": [
            {content: "育児について相談する", nextId: "childcare"},
            {content: "家事を依頼する", nextId: "house_work"},
            {content: "旅行を提案する", nextId: "travel"}
        ],
        "question": "家庭のことについて相談を承ります"
    },
    "childcare": {
        "answers": [
            {content: "ネントレの方法について", nextId: "sleep_training"},
            {content: "病気について", nextId: "sick"},
            {content: "学資保険について", nextId: "future"}
        ],
        "question": "具体的にどのような内容でしょうか?"
    },
    "house_work": {
        "answers": [
            {content: "掃除を依頼する", nextId: "house_cleaning"},
            {content: "食器洗いを依頼する", nextId: "wash_dishes"}
        ],
        "question": "どの家事を依頼しますか?"
    },
    "travel": {
        "answers": [
            {content: "東北地方", nextId: "touhoku"},
            {content: "中部地方", nextId: "tyuubu"},
            {content: "九州", nextId: "kyusyu"}
        ],
        "question": "どこに行きたいですか?"
    }
}

export default defaultDataset;