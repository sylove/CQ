<template>
    <div class="home">
        <div class="top">
            <span class="title">Tour CQ</span>
            <div class="search">
                <input type="text" palceholder="搜索你感兴趣的~"  v-model="value">
               
                <span class="iconfont icon1" v-if="value" @click="delSearch()">&#xe621;</span>
                <span class="iconfont icon2">&#xe60c;</span>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: '',
        }
    },
    methods: {
        delSearch(){
            console.log(1)
            this.value='';
        }
    }
}
</script>
<style lang="less" scoped>
    @import '../../assets/less/var.less';
    .home {
        .top{
            width: 100%;
            background: @PrimaryColor;
            height: 10rem;
            text-align: center;
            .title{
                display: inline-block;
                padding: 2rem 0;
                
            }
            .search{
                height: auto;
                width: 80%;
                margin: 0 auto;
                padding: 0 !important;
                position: relative;
                input{
                    width: 70%;
                    height: 1.6rem;
                    border: none;
                    border-radius: 1.6rem;
                    outline:none;
                    padding:0 3rem 0 1rem;
                }
                .icon1{
                    font-size:1rem;
                    position: absolute;
                    right:3rem;
                    bottom:0;
                    z-index: 99;
                }
                .icon2{
                    font-size:1rem;
                    position: absolute;
                    right:1.5rem;
                    bottom:0;
                      z-index: 99;
                }
                
            }
        }
    }
</style>


