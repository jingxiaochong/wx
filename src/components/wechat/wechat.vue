<template>
    <!--微信组件-->
  <div id="wechat">
    <ul class="wechat-list">
        <!--props传递消息对象 baseMsgObj -->
        <msg-item v-for="(baseMsgObj,index) in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="index"></msg-item>
    </ul>
  </div>
</template>
<script>
    import msgItem from "../wechat/msg-item"
    export default {
        components: {
            msgItem
        },
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "微信(96)"
            }
        },
        created(){
            console.log(this.$store.state.msgList.baseMsg);
        }
    }
</script>
<style lang="less">
    @import "../../assets/less/wechat.less";
</style>