# 获取指定条目收藏信息


`GET /collection/:subject_id`

* Requires Authentication

| Parameter | Type | Desc | Note | Required  |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject_id  | integer | 条目 ID |  | ☑️ |


# 添加收藏


`POST /collection/:subject_id/create`

* Requires Authentication

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject_id  | integer | 条目 ID |  | ☑️ |


# 更新收藏


`POST /collection/:subject_id/update`

* Requires Authentication

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject_id  | integer | 条目 ID |  | ☑️ |
| status  | string | 收藏状态 | {wish/collect/do/on_hold/dropped} 参考 [Define](./Define#collection-type)  | ☑️ |
| comment  | string | 简评 |  |  |
| tags  | string | 标签 | 以半角空格分割 |  |
| rating  | integer | 评分 | 0~10 |  |


