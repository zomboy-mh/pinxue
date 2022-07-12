// 管理接口地址
import NetWork from './network'

//注册
export const getRegister = (data) => NetWork.post('/user/register',data)
export const getDelete = () => NetWork.delete('/user/removeByPhone/{phone:15525780621}')
//广告信息
export const getBanner = () => NetWork.get('')
// 获取职位详情
export const getJobList = (data) => NetWork.get('', data)
//获取日结兼职信息
//获取实习岗位信息
//获取全职岗位信息
//获取个人信息
