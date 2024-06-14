const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-similar",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }], "menu": "用户管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-cardboard",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "专业人员",
                    "menuJump": "列表",
                    "tableName": "zhuanyerenyuan"
                }], "menu": "专业人员管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["查看", "修改", "删除", "审核"],
                    "menu": "申请信息",
                    "menuJump": "列表",
                    "tableName": "shenqingxinxi"
                }], "menu": "申请信息管理"
            },

                {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论", "举报"],
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["查看", "修改", "删除", "查看评论"],
                    "menu": "提问信息",
                    "menuJump": "列表",
                    "tableName": "tiwenxinxi"
                }], "menu": "提问信息管理"
            },

                {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-medal",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "举报信息",
                    "menuJump": "列表",
                    "tableName": "jubaoxinxi"
                }], "menu": "举报信息管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-vipcard",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息",
                    "tableName": "news"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息分类",
                    "tableName": "newstype"
                }], "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论", "举报"],
                    "appFrontIcon": "cuIcon-discover",
                    "buttons": ["查看", "举报"],
                    "menu": "提问信息列表",
                    "menuJump": "列表",
                    "tableName": "tiwenxinxi"
                }], "menu": "提问信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "申请信息",
                    "menuJump": "列表",
                    "tableName": "shenqingxinxi"
                }], "menu": "申请信息管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论", "举报"],
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "提问信息",
                    "menuJump": "列表",
                    "tableName": "tiwenxinxi"
                }], "menu": "提问信息管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-medal",
                    "buttons": ["查看", "删除"],
                    "menu": "举报信息",
                    "menuJump": "列表",
                    "tableName": "jubaoxinxi"
                }], "menu": "举报信息管理"
            }],
            "frontMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论", "举报"],
                    "appFrontIcon": "cuIcon-discover",
                    "buttons": ["查看", "举报"],
                    "menu": "提问信息列表",
                    "menuJump": "列表",
                    "tableName": "tiwenxinxi"
                }], "menu": "提问信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }, {
            "backMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-medal",
                    "buttons": ["查看", "审核"],
                    "menu": "举报信息",
                    "menuJump": "列表",
                    "tableName": "jubaoxinxi"
                }], "menu": "举报信息管理"
            },     {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "查看评论", "举报"],
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["查看", "修改", "查看评论"],
                    "menu": "提问",
                    "menuJump": "列表",
                    "tableName": "discusstiwenxinxi2"
                }], "menu": "提问管理"
            },

                {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息",
                    "tableName": "news"
                }], "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论", "举报"],
                    "appFrontIcon": "cuIcon-discover",
                    "buttons": ["查看", "举报"],
                    "menu": "提问信息列表",
                    "menuJump": "列表",
                    "tableName": "tiwenxinxi"
                }], "menu": "提问信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "专业人员",
            "tableName": "zhuanyerenyuan"
        }]
    }
}
export default menu;
