import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import zhuanyerenyuanList from '../pages/zhuanyerenyuan/list'
import zhuanyerenyuanDetail from '../pages/zhuanyerenyuan/detail'
import zhuanyerenyuanAdd from '../pages/zhuanyerenyuan/add'
import shenqingxinxiList from '../pages/shenqingxinxi/list'
import shenqingxinxiDetail from '../pages/shenqingxinxi/detail'
import shenqingxinxiAdd from '../pages/shenqingxinxi/add'
import tiwenxinxiList from '../pages/tiwenxinxi/list'
import tiwenxinxiDetail from '../pages/tiwenxinxi/detail'
import tiwenxinxiAdd from '../pages/tiwenxinxi/add'
import jubaoxinxiList from '../pages/jubaoxinxi/list'
import jubaoxinxiDetail from '../pages/jubaoxinxi/detail'
import jubaoxinxiAdd from '../pages/jubaoxinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import discusstiwenxinxiList from '../pages/discusstiwenxinxi/list'
import discusstiwenxinxiDetail from '../pages/discusstiwenxinxi/detail'
import discusstiwenxinxiAdd from '../pages/discusstiwenxinxi/add'
// import discusstiwenxinxiList from '../pages/discusstiwenxinxi/list'
// import discusstiwenxinxiDetail from '../pages/discusstiwenxinxi/detail'
// import discusstiwenxinxiAdd from '../pages/discusstiwenxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'zhuanyerenyuan',
					component: zhuanyerenyuanList
				},
				{
					path: 'zhuanyerenyuanDetail',
					component: zhuanyerenyuanDetail
				},
				{
					path: 'zhuanyerenyuanAdd',
					component: zhuanyerenyuanAdd
				},
				{
					path: 'shenqingxinxi',
					component: shenqingxinxiList
				},
				{
					path: 'shenqingxinxiDetail',
					component: shenqingxinxiDetail
				},
				{
					path: 'shenqingxinxiAdd',
					component: shenqingxinxiAdd
				},
				{
					path: 'tiwenxinxi',
					component: tiwenxinxiList
				},
				{
					path: 'tiwenxinxiDetail',
					component: tiwenxinxiDetail
				},
				{
					path: 'tiwenxinxiAdd',
					component: tiwenxinxiAdd
				},
				{
					path: 'jubaoxinxi',
					component: jubaoxinxiList
				},
				{
					path: 'jubaoxinxiDetail',
					component: jubaoxinxiDetail
				},
				{
					path: 'jubaoxinxiAdd',
					component: jubaoxinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'discusstiwenxinxi',
					component: discusstiwenxinxiList
				},
				{
					path: 'discusstiwenxinxiDetail',
					component: discusstiwenxinxiDetail
				},
				{
					path: 'discusstiwenxinxiAdd',
					component: discusstiwenxinxiAdd
				},
				// {
				// 	path: 'discusstiwenxinxi2',
				// 	component: discusstiwenxinxi2List
				// },
				// {
				// 	path: 'discusstiwenxinxi2Detail',
				// 	component: discusstiwenxinxi2Detail
				// },
				// {
				// 	path: 'discusstiwenxinxi2Add',
				// 	component: discusstiwenxinxi2Add
				// },
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
