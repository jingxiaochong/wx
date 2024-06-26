import Vue from 'vue'
import Vuex from 'vuex'
import OfficialAccounts from "./official-account" //存放所有关注的公众号
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)
    // 统一管理接口域名 
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    currentLang: "zh", //当前使用的语言 zh：简体中文 en:英文 后期需要
    newMsgCount: 0, //新消息数量
    allContacts: contact.contacts, //所有联系人
    OfficialAccounts: OfficialAccounts, //所有关注的公众号
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    //backPageName: "", //用于在返回按钮出 显示前一页名字 已遗弃
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    // 所有接口地址 后期需要
    apiUrl: {
        demo: apiPublicDomain + ""
    },
    msgList: {
        stickMsg: [], //置顶消息列表 后期需要
        baseMsg: [{ //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true, //true；已读 false：未读
                "newMsgCount": 1,
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{
                    "text": '如何了',
                    "date": 148811,
                    "name": "",
                    "headerUrl": "/images/header/header01.png"
                },],
                "user": [contact.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "基本原理",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "Meg",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [ contact.getUserInfo('1')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "【星空摄影与后期】3群",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                    "text": '这个角度不错',
                    "date": 1488117964495,
                    "name": "驴大爷",
                    "headerUrl": "/images/header/zhugeliang.jpg"
                }],
                "user": [contact.getUserInfo('2')]
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "小银子-魔都分银(卿)",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '这个好',
                        "date": 1488117964495,
                        "name": "TreeNewBee",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('3')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "喵喵喵",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '[动画表情]',
                        "date": 1488117964495,
                        "name": "悲苦",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('4')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "专家深空之旅",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我现在体重不到150',
                        "date": 1488117964495,
                        "name": "探索未知",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('5')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "极东摄 星空全球群 二群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "天青",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('6')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "猫吉屋摄影CLUB(14群)",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "天青",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('7')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "【F213】像素蛋糕会员群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "天青",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('8'), contact.getUserInfo('wxid_yehua')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "相机【camera】北京风光人像摄影交流群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "天青",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('9'), contact.getUserInfo('wxid_yehua')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "废片大队",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "天青",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua')]
            },            {
                "mid": 2,
                "type": "group",
                "group_name": "大学生学习交流中心",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "天青",
                        "headerUrl": "/images/header/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua')]
            },
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})