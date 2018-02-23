# 更新收视进度


`GET / POST /ep/:ep_id/status/:status`

* Requires Authentication

| Parameter | Type | Desc | Note | Required  |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ep_id  | integer | 章节 ID |  | ☑️ |
| status  | string | 收视类型 | {watched/queue/drop/remove} 参考 [Define](./Define.md#ep-status)  | ☑️ |
| ep_id  | string | 使用 POST 批量更新 | 将章节以半角逗号分隔，如 `3697,3698,3699`。请求时 URL 中的 ep_id 为最后一个章节 ID  |  |


# 批量更新收视进度


`POST /subject/:subject_id/update/watched_eps`


* Requires Authentication

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject_id  | integer | 条目 ID |  | ☑️ |
| watched_eps  | string | 章节话数 | 如看到第 123 话则 POST `123`  | ☑️ |
| watched_vols  | string | 书籍卷数 | 如看到第 3 卷则 POST `3`, 仅对书籍条目有效  |  |

