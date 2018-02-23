# 用户信息
返回用户基础信息

`GET /user/:id`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | string | 用户名 | 也可使用 UID | ☑️ |


```json
{
    "id": 1,
    "url": "http://bgm.tv/user/sai",
    "username": "sai",
    "nickname": "Sai",
    "avatar": {
        "large": "http://lain.bgm.tv/pic/user/l/000/00/00/1.jpg?r=1391790456",
        "medium": "http://lain.bgm.tv/pic/user/m/000/00/00/1.jpg?r=1391790456",
        "small": "http://lain.bgm.tv/pic/user/s/000/00/00/1.jpg?r=1391790456"
    },
    "sign": "Awesome!"
}
```