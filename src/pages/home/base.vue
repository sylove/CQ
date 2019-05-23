<template>
    <div class="home">
        <span class="title">Tour CQ</span>
        <mt-search v-model="value">
            <mt-cell
                v-for="item in result"
                :title="item.title"
                :value="item.value">
            </mt-cell>
        </mt-search>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: '',
            result: [
                {title:'ss',value:'yy'},
                {title:'ss',value:'yy'},
                {title:'ss',value:'yy'},
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    @import '../../assets/less/var.less';

</style>


