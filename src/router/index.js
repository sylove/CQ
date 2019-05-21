
const Footer = () => import('../layout/footer')
// import Footer from '../layout/footer'


const routes=[
    {
        path: '/',
        // 顶层路由，对应index.html
        component: Footer,
    }
]

export default routes