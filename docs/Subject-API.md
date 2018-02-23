## 导航
* [条目信息](#条目信息)
* [章节数据](#章节数据)

***

# 条目信息
`GET /subject/:id`

| Parameter | Type |  Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | integer | 条目 ID  | | ☑️ |
| responseGroup  | string | 返回数据大小  | 参考 [Define](./Define.md#response-group) | |

以下为 `responseGroup = large` 时的返回
```json
{
    "id": 12,
    "url": "http://bgm.tv/subject/12",
    "type": 2,
    "name": "ちょびっツ",
    "name_cn": "人形电脑天使心",
    "summary": "在不久的将来,电子技术飞速发展,电脑成为人们生活中不可缺少的一部分.主角的名字是本须和秀树,是个19岁的少年,由于考试失败,来到东京上补习班,过着贫穷潦倒的生活……\r\n到达东京的第一天,他很幸运的在垃圾堆捡到一个人型电脑,一直以来秀树都非常渴望拥有个人电脑.当他抱着她带返公寓后,却不知如何开机,在意想不到的地方找到开关并开启后,故事就此展开\r\n本须和秀树捡到了人型计算机〔唧〕。虽然不晓得她到底是不是〔Chobits〕，但她的身上似乎藏有极大的秘密。看到秀树为了钱而烦恼，唧出去找打工，没想到却找到了危险的工作！为了让秀树开心，唧开始到色情小屋打工。但她在遭到过度激烈的强迫要求之后失控。让周遭计算机因此而强制停摆。\r\n另一方面，秀树发现好友新保与补习班的清水老师有着不可告人的关系……",
    "eps": [
        //章节信息
        {
            "id": 1027,
            "url": "http://bgm.tv/ep/1027",
            "type": 0,
            "sort": 1,
            "name": "ちぃ 目覚める",
            "name_cn": "叽，觉醒了",
            "duration": "24m",
            "airdate": "2002-04-03",
            "comment": 9,
            "desc": "",
            "status": "Air"
        },
    ],
    "air_date": "2002-04-02",
    "air_weekday": 2,
    "rating": {
        "total": 2289,
        "count": {
            "1": 5,
            "2": 3,
            "3": 4,
            "4": 6,
            "5": 46,
            "6": 267,
            "7": 659,
            "8": 885,
            "9": 284,
            "10": 130
        },
        "score": 7.6
    },
    "rank": 573,
    "images": {
        "large": "http://lain.bgm.tv/pic/cover/l/c2/0a/12_24O6L.jpg",
        "common": "http://lain.bgm.tv/pic/cover/c/c2/0a/12_24O6L.jpg",
        "medium": "http://lain.bgm.tv/pic/cover/m/c2/0a/12_24O6L.jpg",
        "small": "http://lain.bgm.tv/pic/cover/s/c2/0a/12_24O6L.jpg",
        "grid": "http://lain.bgm.tv/pic/cover/g/c2/0a/12_24O6L.jpg"
    },
    "collection": {
        //收藏信息
        "wish": 608,
        "collect": 3009,
        "doing": 103,
        "on_hold": 284,
        "dropped": 86
    },
    "crt": [
        //角色信息
        {
            "id": 32,
            "url": "http://bgm.tv/character/32",
            "name": "ちぃ",
            "name_cn": "小叽",
            "role_name": "主角",
            "images": {
                "large": "http://lain.bgm.tv/pic/crt/l/ce/65/32_crt_XMJOj.jpg",
                "medium": "http://lain.bgm.tv/pic/crt/m/ce/65/32_crt_XMJOj.jpg",
                "small": "http://lain.bgm.tv/pic/crt/s/ce/65/32_crt_XMJOj.jpg",
                "grid": "http://lain.bgm.tv/pic/crt/g/ce/65/32_crt_XMJOj.jpg"
            },
            "comment": 26,
            "collects": 173,
            "info": {
                "birth": "4月13日",
                "height": "152cm",
                "gender": "女",
                "alias": {
                    "jp": "ちぃ",
                    "romaji": "chii",
                    "zh": "小唧"
                },
                "source": [
                    "anidb.net"
                ],
                "name_cn": "小叽",
                "cv": "田中理惠"
            },
            "actors": [
                {
                    "id": 3862,
                    "url": "http://bgm.tv/person/3862",
                    "name": "田中理恵",
                    "images": {
                        "large": "http://lain.bgm.tv/pic/crt/l/59/da/3862_prsn_48h9V.jpg?r=1490024954",
                        "medium": "http://lain.bgm.tv/pic/crt/m/59/da/3862_prsn_48h9V.jpg?r=1490024954",
                        "small": "http://lain.bgm.tv/pic/crt/s/59/da/3862_prsn_48h9V.jpg?r=1490024954",
                        "grid": "http://lain.bgm.tv/pic/crt/g/59/da/3862_prsn_48h9V.jpg?r=1490024954"
                    }
                }
            ]
        },
        {
            "id": 33,
            "url": "http://bgm.tv/character/33",
            "name": "本須和 秀樹",
            "name_cn": "本须和秀树",
            "role_name": "主角",
            "images": {
                "large": "http://lain.bgm.tv/pic/crt/l/18/2b/33_0c5cdcd5072bb1864cdee4d3d6e_yyZGp.jpg",
                "medium": "http://lain.bgm.tv/pic/crt/m/18/2b/33_0c5cdcd5072bb1864cdee4d3d6e_yyZGp.jpg",
                "small": "http://lain.bgm.tv/pic/crt/s/18/2b/33_0c5cdcd5072bb1864cdee4d3d6e_yyZGp.jpg",
                "grid": "http://lain.bgm.tv/pic/crt/g/18/2b/33_0c5cdcd5072bb1864cdee4d3d6e_yyZGp.jpg"
            },
            "comment": 2,
            "collects": 8,
            "info": {
                "name_cn": "本须和秀树",
                "gender": "男",
                "birth": "9月3日",
                "height": "180cm"
            },
            "actors": [
                {
                    "id": 4513,
                    "url": "http://bgm.tv/person/4513",
                    "name": "杉田智和",
                    "images": {
                        "large": "http://lain.bgm.tv/pic/crt/l/72/98/4513_prsn_6HNa0.jpg?r=1507271945",
                        "medium": "http://lain.bgm.tv/pic/crt/m/72/98/4513_prsn_6HNa0.jpg?r=1507271945",
                        "small": "http://lain.bgm.tv/pic/crt/s/72/98/4513_prsn_6HNa0.jpg?r=1507271945",
                        "grid": "http://lain.bgm.tv/pic/crt/g/72/98/4513_prsn_6HNa0.jpg?r=1507271945"
                    }
                }
            ]
        }
    ],
    "staff": [
        //制作人员信息
        {
            "id": 39,
            "url": "http://bgm.tv/person/39",
            "name": "CLAMP",
            "name_cn": "",
            "role_name": "",
            "images": {
                "large": "http://lain.bgm.tv/pic/crt/l/d6/7d/39_prsn_anidb.jpg",
                "medium": "http://lain.bgm.tv/pic/crt/m/d6/7d/39_prsn_anidb.jpg",
                "small": "http://lain.bgm.tv/pic/crt/s/d6/7d/39_prsn_anidb.jpg",
                "grid": "http://lain.bgm.tv/pic/crt/g/d6/7d/39_prsn_anidb.jpg"
            },
            "comment": 39,
            "collects": 0,
            "info": {
                "alias": {
                    "jp": "クランプ",
                    "romaji": "CLAMP"
                }
            },
            "jobs": [
                "原作"
            ]
        },
        {
            "id": 40,
            "url": "http://bgm.tv/person/40",
            "name": "浅香守生",
            "name_cn": "浅香守生",
            "role_name": "",
            "images": {
                "large": "http://lain.bgm.tv/pic/crt/l/1e/ef/40_prsn_NnfCf.jpg?r=1409256270",
                "medium": "http://lain.bgm.tv/pic/crt/m/1e/ef/40_prsn_NnfCf.jpg?r=1409256270",
                "small": "http://lain.bgm.tv/pic/crt/s/1e/ef/40_prsn_NnfCf.jpg?r=1409256270",
                "grid": "http://lain.bgm.tv/pic/crt/g/1e/ef/40_prsn_NnfCf.jpg?r=1409256270"
            },
            "comment": 37,
            "collects": 0,
            "info": {
                "name_cn": "浅香守生",
                "alias": {
                    "jp": "浅香守生",
                    "kana": "あさか もりお",
                    "romaji": "Asaka Morio"
                },
                "gender": "男",
                "birth": "1967-03-11"
            },
            "jobs": [
                "导演"
            ]
        },
    ],
    "topic": [
        //讨论版
        {
            "id": 6873,
            "url": "http://bgm.tv/subject/topic/6873",
            "title": "这条目简介也太剧透了吧",
            "main_id": 12,
            "timestamp": 1462335911,
            "lastpost": 1481098545,
            "replies": 8,
            "user": {
                "id": 142527,
                "url": "http://bgm.tv/user/myccyycy",
                "username": "myccyycy",
                "nickname": "Dimpurr",
                "avatar": {
                    "large": "http://lain.bgm.tv/pic/user/l/000/14/25/142527.jpg?r=1371441527",
                    "medium": "http://lain.bgm.tv/pic/user/m/000/14/25/142527.jpg?r=1371441527",
                    "small": "http://lain.bgm.tv/pic/user/s/000/14/25/142527.jpg?r=1371441527"
                },
                "sign": null
            }
        }
    ],
    "blog": [
        //评论日志
        {
            "id": 42647,
            "url": "http://bgm.tv/blog/42647",
            "title": "[A Decade]十年，我的 JPOP Anime Song年华",
            "summary": "不管说骗钱也好，炒冷饭也好，这张专辑见证了ROUND TABLE featuring Nino的历程，Nino的萌音也伴我度过了10年。回想一下，入 JPOP Anime Song这个大坑也差不多10年了。\r\n\r\nROUND TABLE本身的风格属于顽皮跳脱型的，但是加上Nino的话，可以说完全改变了方向。\r\nNino的声音很萌 ...",
            "image": "",
            "replies": 1,
            "timestamp": 1357144903,
            "dateline": "2013-1-2 16:41",
            "user": {
                "id": 3490,
                "url": "http://bgm.tv/user/lhb5883",
                "username": "lhb5883",
                "nickname": "lhb5883-污喵王VIP⑩",
                "avatar": {
                    "large": "http://lain.bgm.tv/pic/user/l/000/00/34/3490.jpg",
                    "medium": "http://lain.bgm.tv/pic/user/m/000/00/34/3490.jpg",
                    "small": "http://lain.bgm.tv/pic/user/s/000/00/34/3490.jpg"
                },
                "sign": null
            }
        }
    ]
}
```

# 章节数据
`GET /subject/:id/ep`
返回条目章节与条目基础信息

| Parameter | Type | Desc | Note | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | integer | 条目 ID  | | ☑️ |


# 每日放送
`GET /calendar`
