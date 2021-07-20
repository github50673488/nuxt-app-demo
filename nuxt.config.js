// 自定义路由配置

// module.exports = {
//     router: {
//         base: '/abc'
//     }
// }


// module.exports = {
//     router: {
//         base: '/abc',
//         // routes: 一个数组，路由配置表
//         // resolve: 解析路由组件路径
//         extendRoutes(routes, resolve) {
//             routes.push({
//                 name: 'hello',
//                 path: '/hello',
//                 component: resolve(__dirname, 'pages/about.vue')
//             })
//         }
//     }
// }

// Auto import components: https://go.nuxtjs.dev/config-components
export default {
    components: true,
    // 可以省掉下列
    // // import Foo from '@/components/Foo'
    //   // components: {
    //   //   Foo
    //   // },
}
