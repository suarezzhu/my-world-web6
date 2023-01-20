/*
 * @Description:网址操作api
 */
import https from '@/utils/https'
import { ContentType, Method } from 'axios-mapper'
import { siteModel } from '@/model/site'
import { RootObject } from '@/model/rootObject'
import { Routes } from '@/model/routesModel'

// 请求公司网址
export const getSites = (params: any) => {
  return https().request<RootObject<siteModel[]>>('/api/v1/getAllSites', Method.GET, params, ContentType.form)
}

//  添加公司网址
export const addCompanySites = (params: siteModel) => {
  return https().request<RootObject<string>>('api/v1/addSite', Method.POST, params, ContentType.form)
}

//  编辑公司网址
export const editCompanySites = (params: any) => {
  return https().request<RootObject<string>>('sites/editCompanySites', Method.POST, params, ContentType.json)
}
