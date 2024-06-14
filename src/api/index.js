import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ZhuanyerenyuanController from './Zhuanyerenyuan'
import ShenqingxinxiController from './Shenqingxinxi'
import TiwenxinxiController from './Tiwenxinxi'
import JubaoxinxiController from './Jubaoxinxi'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import DiscusstiwenxinxiController from './Discusstiwenxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/zhuanyerenyuan', ZhuanyerenyuanController({ config, db }))

	api.use('/shenqingxinxi', ShenqingxinxiController({ config, db }))

	api.use('/tiwenxinxi', TiwenxinxiController({ config, db }))

	api.use('/jubaoxinxi', JubaoxinxiController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/discusstiwenxinxi', DiscusstiwenxinxiController({ config, db }))

	return api
}
