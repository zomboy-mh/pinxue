// 管理接口地址
import NetWork from './network'

//注册
export const getRegister = (data) => NetWork.post('/user/register',data)
//登录
export const getPsLogin = (data) => NetWork.post('/user/ps_login',data)
//文件上传
export const getSingleUp = (data) => NetWork.post('/file/singleUp',data,'form')
export const getDelete = () => NetWork.delete('/user/removeByPhone/15525780621')
//广告信息
export const getBanner = () => NetWork.get('')
// 获取职位详情
export const getJobList = (data) => NetWork.get('', data)
//获取日结兼职信息
//获取实习岗位信息
//获取全职岗位信息
//获取个人信息
