import { Log, Roots } from '../types';
import * as logger from '../utils/logger';
import * as utils from '../utils/utils';
import { processSpecs } from '../processor';
import { combinePaths } from '../utils/utils';

/**
 * Validates parameter from template, that is not a validator keyword
 * @param param - parameter in template that will be validated, this parameter can be also an array
 * @param specs - specification that will be checked if it includes provided parameter
 * @param template - template in which the parameter is nested in
 * @param paramPath - string of parameters separated by ".", representing path to current specs location (empty string in root)
 * @param nonRedundantParams - object containing all required and optional parameters that are being used
 * @param roots - roots of specs and nonRedundantParams
 * @param paramPathPrefix - in case roots are not the top layer parameters, parameter paths in messages will be prefixed with paramPathPrefix
 * @returns errors and warnings that occurred in validation of provided specification
 */
export function validateParameter(
  param: string,
  specs: any,
  template: any,
  paramPath: string,
  nonRedundantParams: any,
  roots: Roots,
  paramPathPrefix = ''
): Log[] {
  const arrayIndex = param.match(/\[([0-9]+)\]$/);

  if (arrayIndex) {
    // parameter is array, item on specified index should be processed
    const processedParam = param.replace(arrayIndex[0], '');

    if (processedParam.length && !specs[processedParam]) {
      return [logger.error(`Missing parameter ${combinePaths(paramPathPrefix, paramPath, processedParam)}`)];
    }

    const index = parseInt(arrayIndex[1]);
    let currentSpecs = specs;

    if (processedParam.length) {
      currentSpecs = specs[processedParam];
      nonRedundantParams[processedParam] = utils.getEmptyNonRedundantParam(
        processedParam,
        template,
        nonRedundantParams,
        specs[processedParam]
      );
      nonRedundantParams = nonRedundantParams[processedParam];
    }

    if (!Array.isArray(currentSpecs)) {
      return [
        logger.error(`Type mismatch: parameter ${combinePaths(paramPathPrefix, paramPath)} is expected to be an array`),
      ];
    }

    if (index >= currentSpecs.length) {
      return [
        logger.error(`Missing parameter ${combinePaths(paramPathPrefix, paramPath, processedParam, `[${index}]`)}`),
      ];
    }

    for (let i = nonRedundantParams.length; i <= index; i++) {
      nonRedundantParams.push({});
    }

    return processSpecs(
      currentSpecs[index],
      template[param],
      combinePaths(paramPath, processedParam, `[${index}]`),
      nonRedundantParams[index],
      roots,
      paramPathPrefix
    ).messages;
  }

  if (!specs[param]) {
    return [logger.error(`Missing parameter ${combinePaths(paramPathPrefix, paramPath, param)}`)];
  }

  nonRedundantParams[param] = utils.getEmptyNonRedundantParam(param, template, nonRedundantParams, specs[param]);

  if (!Object.keys(template[param]).length) {
    return [];
  }

  return processSpecs(
    specs[param],
    template[param],
    combinePaths(paramPath, param),
    nonRedundantParams[param],
    roots,
    paramPathPrefix
  ).messages;
}