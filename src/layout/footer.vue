<template>
    <div class="footer">
        <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页" >
            <span slot="icon" class="iconfont">&#xe610;</span>
            <router-link to="/home">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="美食">
            <span slot="icon" class="iconfont">&#xe60a;</span>
            <router-link to="/food">美食</router-link>
        </mt-tab-item>
        <mt-tab-item id="美景">
            <span slot="icon" class="iconfont">&#xe60f;</span>
            <router-link to="/view">美景</router-link>
        </mt-tab-item>
        <mt-tab-item id="攻略">
            <span slot="icon" class="iconfont">&#xe61d;</span>
            <router-link to="/play">攻略</router-link>
        </mt-tab-item>
        <mt-tab-item id="我的">
            <span slot="icon" class="iconfont">&#xe60e;</span>
            <router-link to="/mine">我的</router-link>
        </mt-tab-item>
    </mt-tabbar>
    </div>
    
</template>
<script>
export default {
    data (){
        return {
            selected:'首页',
        }
    }
}
</script>
<style lang="less" scoped>
 @import '../assets/less/var.less';
    .footer{
        .mint-tab-item{
            .mint-tab-item-icon{
                margin: 0 auto;
                .iconfont{
                    color: @IconColor;
                    font-size: 1.4rem;
                }
            }
            
            .mint-tab-item-label{
                a{
                     color: @IconColor;
                     text-decoration: none;
                }
                
            }
             &.is-selected{
                 background: none;
                .iconfont{
                    color: @PrimaryColor;
                }
                .mint-tab-item-label{
                    a{
                        color: #333;
                    }
                }
            };
        }

       
    }
</style>

