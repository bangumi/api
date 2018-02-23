# 条目搜索
`GET /search/subject/:keywords`

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keywords  | string | 关键词  | 需要 URL Encode | ☑️ |
| type  | integer | 类型  | 参考 [Define](./Define#subject-type) |
| responseGroup  | string | 返回数据大小  | 参考 [Define](./Define.md#response-group) | |
| start  | integer | 开始条数  |  | |
| max_results  | integer | 每页条数  | 最多 25 | |
