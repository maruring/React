const sampleData = [
    {
        "PlaceName": "設置個所A",
        "Devices": [
            {
                "DeviceName": "デバイスA",
                "DeviceId": "DeviceA",
                "Sensors": [
                    {
                        "SensorId": "SensorA",
                        "SensorName": "温度センサー",
                        "info": {"type": "温度", "state": "running", "threshold": 50, "period": "10秒", "value": 27}
                    },
                    {
                        "SensorId": "SensorB",
                        "SensorName": "湿度センサー",
                        "info": {"type": "湿度", "state": "stop", "threshold": null, "period": "5秒", "value": 45}
                    },
                ]
            },
            {
                "DeviceName": "デバイスB",
                "DeviceId": "DeviceB",
                "Sensors": [
                    {
                        "SensorId": "SensorC",
                        "SensorName": "温度センサー",
                        "info": {"type": "温度", "state": "error", "threshold": 15, "period": "60秒", "value": 10}
                    },
                    {
                        "SensorId": "SensorD",
                        "SensorName": "振動センサー",
                        "info": {"type": "振動", "state": "stop", "threshold": 450, "period": "45秒", "value": 350}
                    },
                ],
            }
        ]
    },
    {
        "PlaceName":"設置個所B",
        "Devices": [
            {
                "DeviceName": "デバイスE",
                "DeviceId": "DeviceE",
                "Sensors": [
                    {
                        "SensorId": "SensorE",
                        "SensorName": "湿度センサー",
                        "info": {"type": "湿度", "state": "init", "threshold": 50, "period": "10秒", "value": 17}
                    },
                ],
            },
        ],
    },
];

export default sampleData;