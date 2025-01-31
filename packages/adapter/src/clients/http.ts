import axios, { AxiosRequestConfig } from 'axios';
import { Config, Request } from '../types';

function execute(config: AxiosRequestConfig) {
  return axios({
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data,
    params: config.params,
    timeout: config.timeout,
  });
}

export function get(request: Request, config?: Config) {
  return execute({
    ...request,
    url: `${request.baseUrl}${request.path}`,
    method: 'get',
    params: request.data,
    data: undefined,
    timeout: config?.timeout,
  });
}

export function post(request: Request, config?: Config, raw?:boolean) {

  switch(raw){
    case true:
      return execute({
        ...request,
        url: `${request.baseUrl}${request.path}`,
        method: 'post',
        data: request.data.data,
        timeout: config?.timeout,
      });
    
    default:
      return execute({
        ...request,
        url: `${request.baseUrl}${request.path}`,
        method: 'post',
        data: request.data,
        timeout: config?.timeout,
      });

  }
  
 
}
