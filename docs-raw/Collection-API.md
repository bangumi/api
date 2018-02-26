# 获取指定条目收藏信息


`GET /collection/:subject_id`

* Requires Authentication

| Parameter | Type | Desc | Note | Required  |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject_id  | integer | 条目 ID |  | ☑️ |


# 管理收藏


`POST /collection/:subject_id/:action`

* Requires Authentication

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action  | 收藏动作 | create = 添加收藏 / update = 更新收藏 |  可以统一使用 `update`，系统会自动判断需要新建还是更新收藏  | ☑️ |
| subject_id  | integer | 条目 ID |  | ☑️ |
| status  | string | 收藏状态 | {wish/collect/do/on_hold/dropped} 参考 [Define](./Define.md#collection-type)  | ☑️ |
| comment  | string | 简评 |  |  |
| tags  | string | 标签 | 以半角空格分割 |  |
| rating  | integer | 评分 | 0~10 |  |
| privacy | integer | 收藏隐私 | 0 = 公开 / 1 = 私密 | |


