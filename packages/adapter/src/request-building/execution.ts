import { buildRequest } from './build-request';
import * as http from '../clients/http';
import { BuildRequestOptions, Config, Request } from '../types';

export function executeRequest(request: Request, config?: Config, raw?:boolean) {
  switch (request.method) {
    case 'get':
      return http.get(request, config);

    case 'post':
      //console.log("posr req", request);
      return http.post(request, config, raw);
  }
}

export function buildAndExecuteRequest(options: BuildRequestOptions, config?: Config, raw?:boolean) {
  const request = buildRequest(options);
  //console.log("request is", request);
  return executeRequest(request, config,raw);
}
