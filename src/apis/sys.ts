// 系统请求

import { RootObject } from '@/model/rootObject'
import https from '@/utils/https'
import { LoginModel } from '@/views/user-manager/login/model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'
import { dictData } from '@/model/sys'

// 根据字典类型名称获取 字典值列表
export const getDictDataByType = (params: any) => {
  return https().request<RootObject<dictData[]>>('api/v1/dict/DictDataByType', Method.GET, params, ContentType.form)
}
