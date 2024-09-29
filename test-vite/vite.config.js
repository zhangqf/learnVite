import {defineConfig, loadEnv} from 'vite'
import viteBaseConfig from './vite.base.config'
import viteProdConfig from './vite.prod.config'
import viteDevConfig from './vite.dev.config'


// 策略模式

const envResolver = {
	'build': () => Object.assign({}, viteBaseConfig,viteProdConfig),
	'serve': () => Object.assign({}, viteBaseConfig, viteDevConfig)
}


export default defineConfig(({command,mode}) => {
	const env = loadEnv(mode,process.cwd(),'')
	console.log(env)
	return envResolver[command]()
})
