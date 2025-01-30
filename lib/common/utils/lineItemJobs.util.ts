import { LineItemJobs } from "../types/lineItemJobs.type";

/**
 * A utility class that allows you to build lineItemJobs objects from strings to be used in ad-manager-line-items-jobs repository.
 */
export class LineItemParser {
  /**
   * Converts the lineItems string to an array of LineItemJobs objects
   * @param lineItems The lineItems string.
   * @returns A AdManager array of LineItemJobs object.
   */
  public fromString(lineItems: string): LineItemJobs[] {
    const parsedLineItems: LineItemJobs[] = JSON.parse(lineItems);
    return parsedLineItems;
  }
}
