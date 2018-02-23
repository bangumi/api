# 用户信息
返回用户基础信息

`GET /user/:username`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |


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

# 用户收藏
获取用户收藏列表，默认为在看

`GET /user/:username/collection`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |
| cat  | string | 收藏类型 |  目前仅支持 watching  | |

# 用户收视进度

`GET /user/:username/progress`

* Requires Authentication

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |
| subject_id  | integer | 条目 ID | 获取指定条目收视进度  | |

