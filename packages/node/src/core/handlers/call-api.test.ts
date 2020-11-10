import * as adapter from '@airnode/adapter';
import * as fixtures from 'test/fixtures';
import { callApi } from './call-api';
import { RequestErrorCode } from 'src/types';

describe('callApi', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('calls the adapter with the given parameters', async () => {
    process.env.oisTitle_myapiApiScheme = 'supersecret';
    const spy = jest.spyOn(adapter, 'buildAndExecuteRequest') as any;
    spy.mockResolvedValueOnce({ data: { price: 1000 } });
    const parameters = { _type: 'int256', _path: 'price', from: 'ETH' };
    const aggregatedCall = fixtures.createAggregatedApiCall({ parameters });
    const [logs, res] = await callApi(fixtures.buildConfig(), aggregatedCall);
    expect(logs).toEqual([]);
    expect(res).toEqual({ value: '0x0000000000000000000000000000000000000000000000000000000005f5e100' });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      {
        endpointName: 'convertToUsd',
        ois: fixtures.buildOIS(),
        parameters: { from: 'ETH' },
        securitySchemes: [
          {
            in: 'query',
            name: 'access_key',
            securitySchemeName: 'myapiApiScheme',
            type: 'apiKey',
            value: 'supersecret',
          },
        ],
      },
      { timeout: 20000 }
    );
  });

  it('returns an error if the OIS is not found', async () => {
    const aggregatedCall = fixtures.createAggregatedApiCall({ oisTitle: 'unknownOis' });
    const [logs, res] = await callApi(fixtures.buildConfig(), aggregatedCall);
    expect(logs).toEqual([{ level: 'ERROR', message: 'Unknown OIS:unknownOis received for Request:apiCallId' }]);
    expect(res).toEqual({
      errorCode: RequestErrorCode.UnknownOIS,
    });
  });

  it('returns an error if the endpoint is not found', async () => {
    const aggregatedCall = fixtures.createAggregatedApiCall({ endpointName: 'unknownEndpoint' });
    const [logs, res] = await callApi(fixtures.buildConfig(), aggregatedCall);
    expect(logs).toEqual([
      { level: 'ERROR', message: 'Unknown Endpoint:unknownEndpoint in OIS:oisTitle received for Request:apiCallId' },
    ]);
    expect(res).toEqual({
      errorCode: RequestErrorCode.UnknownEndpoint,
    });
  });

  it('returns an error if no _type parameter is found', async () => {
    const aggregatedCall = fixtures.createAggregatedApiCall();
    const [logs, res] = await callApi(fixtures.buildConfig(), aggregatedCall);
    expect(logs).toEqual([
      { level: 'ERROR', message: "No '_type' parameter was found for Endpoint:convertToUsd, OIS:oisTitle" },
    ]);
    expect(res).toEqual({
      errorCode: RequestErrorCode.InvalidResponseParameters,
    });
  });

  it('returns an error if the API call fails to execute', async () => {
    const spy = jest.spyOn(adapter, 'buildAndExecuteRequest') as any;
    spy.mockRejectedValueOnce(new Error('Network is down'));

    const parameters = { _type: 'int256', _path: 'unknown', from: 'ETH' };
    const aggregatedCall = fixtures.createAggregatedApiCall({ parameters });
    const [logs, res] = await callApi(fixtures.buildConfig(), aggregatedCall);
    expect(logs).toEqual([
      { level: 'ERROR', message: 'Failed to call Endpoint:convertToUsd', error: new Error('Network is down') },
    ]);
    expect(res).toEqual({
      errorCode: RequestErrorCode.ApiCallFailed,
    });
  });

  it('returns an error if the value cannot be found with the _path', async () => {
    const spy = jest.spyOn(adapter, 'buildAndExecuteRequest') as any;
    spy.mockResolvedValueOnce({ data: { price: 1000 } });
    const parameters = { _type: 'int256', _path: 'unknown', from: 'ETH' };
    const aggregatedCall = fixtures.createAggregatedApiCall({ parameters });
    const [logs, res] = await callApi(fixtures.buildConfig(), aggregatedCall);
    expect(logs).toEqual([
      { level: 'ERROR', message: 'Unable to find response value from {"price":1000}. Path: unknown' },
    ]);
    expect(res).toEqual({
      errorCode: RequestErrorCode.ResponseValueNotFound,
    });
  });
});