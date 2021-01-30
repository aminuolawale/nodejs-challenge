class Rule {
  readonly field: string;
  readonly condition: string;
  readonly condition_value: number;
}

export class ValidateRule {
  readonly rule: Rule;
  readonly data: any;
}
