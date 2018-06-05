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
    "sign": "Awesome!",
    "usergroup" : 11
}
```

`usergroup` 用户组定义参考 [Define](./Define.md#user-group)


# 用户收藏
获取用户收藏列表，默认为在看

`GET /user/:username/collection`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |
| cat  | string | 收藏类型 |  watching = 在看的动画与三次元条目 / all_watching = 在看的动画三次元与书籍条目  | |
| ids  | string | 收藏条目 ID |  批量查询收藏状态，将条目 ID 以半角逗号分隔，如 `1,2,4,6`  | |
| responseGroup  | string |  medium / small  |  默认为 medium。small 时不返回条目详细信息  | |

# 用户收藏概览
获取用户指定类型的收藏概览，固定返回最近更新的收藏，不支持翻页

`GET /user/:username/collections/:subject_type`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |
| subject_type  | string | 条目类型 |  (book/anime/music/game/real)  | |
| max_results  | integer | 显示条数  | 最多 25 | |

# 用户收藏统计
获取用户所有收藏信息

`GET /user/:username/collections/status`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |

# 用户收视进度

`GET /user/:username/progress`

* Requires Authentication

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | string | 用户名 | 也可使用 UID | ☑️ |
| subject_id  | integer | 条目 ID | 获取指定条目收视进度  | |

