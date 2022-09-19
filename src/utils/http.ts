import { AxiosResponseEx } from "../model/params";
import service from "./request";

// Get 请求封装
const getAction = async (url: string, params: object):
  Promise<AxiosResponseEx> => {
  return (await service({
    url,
    method: 'GET',
    params,
  })) as unknown as AxiosResponseEx;
}

const postAction = async (url: string, data: object, params?: object):
  Promise<AxiosResponseEx> => {
  return (await service({
    url,
    method: 'POST',
    params,
    data,
  })) as unknown as AxiosResponseEx;
}

const delAction = async (url: string, params: object):
  Promise<AxiosResponseEx> => {
  return (await service({
    url,
    method: 'DELETE',
    params
  })) as unknown as AxiosResponseEx;
}
const putAction = async (url: string, params: object): Promise<AxiosResponseEx> => {
  return (await service({
    url: '/api',
    method: 'PUT',
    params
  })) as unknown as AxiosResponseEx
}
export {
  getAction,
  postAction,
  delAction,
  putAction
}
