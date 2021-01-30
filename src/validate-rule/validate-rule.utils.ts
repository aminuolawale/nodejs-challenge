import { ValidateRule } from './dto/validate-rule.dto';

class ValidationResponse {
  field: string;
  ok: boolean;
  message: string;
}

export function validateFields(payload: ValidateRule): ValidationResponse {
  let response = {
    field: '',
    message: '',
    ok: true,
  };
  const rule = payload.rule;
  if (!rule) {
    response.field = 'rule';
    response.message = 'rule is required.';
    response.ok = false;
    return response;
  }
  if (typeof rule !== typeof Object()) {
    response.field = 'rule';
    response.message = 'rule should be an object.';
    response.ok = false;
    return response;
  }
  const ruleFields = ['field', 'condition', 'condition_value'];
  for (let i in ruleFields) {
    if (!Object.keys(rule).includes(ruleFields[i])) {
      response.field = `rule.${ruleFields[i]}`;
      response.message = `${ruleFields[i]} is required.`;
      response.ok = false;
      return response;
    }
  }
  const data = payload.data;
  if (!data) {
    response.field = 'data';
    response.message = 'data is required.';
    response.ok = false;
    return response;
  }
  if (!getFieldValue(data, rule.field)) {
    response.field = `data.${rule.field}`;
    response.message = `field ${rule.field} missing from data.`;
    response.ok = false;
    return response;
  }
  return response;
}

export function useRule(cond: string, condVal: any, fieldVal: any) {
  const ruleFunc = conditionToFunction[cond];
  return ruleFunc(fieldVal, condVal);
}

const conditionToFunction = {
  eq: (a: any, b: any) => a === b,
  neq: (a: any, b: any) => a !== b,
  gt: (a: any, b: any) => a > b,
  gte: (a: any, b: any) => a >= b,
  contains: (a: any, b: any) => a.includes(b),
};

export function getFieldValue(obj: object, name: string): any {
  const splitName = name.split('.');
  for (let i in splitName) {
    obj = obj[splitName[i]];
  }
  return obj;
}
