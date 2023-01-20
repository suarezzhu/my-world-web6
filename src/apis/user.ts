
import { RootObject } from '@/model/rootObject'
import { UserInfoModel, Users } from '@/model/userModel'
import https from '@/utils/https'
import { LoginModel } from '@/view/user-manager/login/model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

// export const userInfoRequest = () => {
//   return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.json)
// }

export const getUsers = (user: any) => {
  return https().request<RootObject<Users>>('user/getUsers', Method.GET, user, ContentType.form)
}

// ---------------

// 获取token
export const getToken = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('auth', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = (userInfo: RequestParams) => {
  return https().request<RootObject<UserInfoModel>>('api/v1/user/userInfo', Method.POST, userInfo, ContentType.json)
}
