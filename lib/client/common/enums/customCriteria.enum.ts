import { type Describe, enums } from "superstruct";

/**
 * Specifies the available comparison operators.
 */
export enum ComparisonOperator {
  IS = "IS",
  IS_NOT = "IS_NOT",
}

/**
 * Represents a ComparisonOperator enum in superstruct format.
 */
export const ComparisonOperatorEnum = enums([
  "IS",
  "IS_NOT",
]) as Describe<ComparisonOperator>;

/**
 * Specifies the available logical operators.
 */
export enum LogicalOperator {
  AND = "AND",
  OR = "OR",
}

/**
 * Represents a LogicalOperator enum in superstruct format.
 */
export const LogicalOperatorEnum = enums([
  "AND",
  "OR",
]) as Describe<LogicalOperator>;

/**
 * Specifies the available comparison operators.
 */
export enum CmsMetadataCriteriaComparisonOperator {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * Represents a CmsMetadataCriteriaComparisonOperator enum in superstruct format.
 */
export const CmsMetadataCriteriaComparisonOperatorEnum = enums([
  "EQUALS",
  "NOT_EQUALS",
]) as Describe<CmsMetadataCriteriaComparisonOperator>;
