const sampleData = [
    {
        "設置個所A": {
            "デバイスA": [
                {"ABC1234": {"type": "温度", "state": "running", "threshold": 50, "period": "10秒"}},
                {"EFG9876": {"type": "湿度", "state": "stop", "threshold": null, "period": "5秒"}},
            ],
            "デバイスB": [
                {"HIJ8454": {"type": "温度", "state": "error", "threshold": 15, "period": "60秒"}},
                {"LMN4597": {"type": "振動", "state": "stop", "threshold": 450, "period": "45秒"}},
            ],
        }
    },
    {
        "設置個所B": {
            "デバイスE": [
                {"QIE3368": {"type": "湿度", "state": "init", "threshold": 50, "period": "10秒"}},
            ],
        },
    },
];

export default sampleData;