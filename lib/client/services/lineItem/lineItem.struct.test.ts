import { LineItemStruct } from "./lineItem.struct";
import { lineItems } from "../../../fixtures/line-items";

describe("LineItemStruct", () => {
  it.each(lineItems)("should validate a valid object", (lineItem) => {
    try {
      LineItemStruct.assert(lineItem);
    } catch (error) {
      console.log(error);

      expect(error).toBeUndefined();
    }
  });

  it("should throw an error for an invalid object", () => {
    const invalidLineItem = {
      ...lineItems[0],
      creativePlaceholders: [
        {
          ...lineItems[0].creativePlaceholders[0],
          size: {
            ...lineItems[0].creativePlaceholders[0].size,
            width: "not a number",
          },
        },
      ],
    };
    expect(() => LineItemStruct.assert(invalidLineItem)).toThrow();
  });
});
