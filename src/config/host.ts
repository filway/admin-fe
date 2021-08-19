/**
 * @description host 配置
 */

 import { isDevNoMock, isPrd, isPrdDev } from '../utils/env'

 // API host
 let APIHost = '' // 默认为本地运行 mock
 if (isDevNoMock) APIHost = 'http://localhost:3003' // 本地，不用 mock
 if (isPrdDev) APIHost = 'http://139.155.58.207:8088' // 测试机
 if (isPrd) APIHost = 'h5admin.filway.cn' // 线上环境，用当前域名即可

 // h5 host
 let H5Host = 'http://139.155.58.207:8083'
 if (isPrd) H5Host = 'http://h5.filway.cn'

 // 统计接口的 host
 let StatHost = 'http://139.155.58.207:8084'
 if (isPrd) StatHost = 'http://h5statistic-res.filway.cn' // 线上环境

 export { APIHost, H5Host, StatHost }
