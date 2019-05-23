//首页
const Home = () => import('../pages/home/base.vue')
//美食
const Food = () => import('../pages/food/base.vue')
//美景
const View = () => import('../pages/view/base.vue')
//景点
const Play = () => import('../pages/play/base.vue')
//用户中心
const Mine = () => import('../pages/mine/base.vue')

const routes=[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/food',
            component:Food,
        },
        {
            path:'/view',
            component:View,
        },
        {
            path:'/play',
            component:Play,
        },
        {
            path:'/mine',
            component:Mine,
        },
    
]

export default routes