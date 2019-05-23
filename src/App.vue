<template>
    <div id="app">
        <Footer></Footer>
        <router-view></router-view>
    </div>
    
</template>
<script>
import Footer from './layout/footer.vue'
export default {
    components:{
        Footer,
    }
}
</script>
<style lang="less" scoped>
@import './assets/less/var.less';
    #app{
        // color:red;
    }
</style>

