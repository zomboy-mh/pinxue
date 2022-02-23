// 管理接口地址
import NetWork from './network'

export const getBanner = () => NetWork.get('')
// 获取职位详情
export const getJobList = (data) => NetWork.get('', data)
