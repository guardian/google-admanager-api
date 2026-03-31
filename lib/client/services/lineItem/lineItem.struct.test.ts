import { describe, it } from "node:test";
import assert from "node:assert";
import { LineItemStruct } from "./lineItem.struct";
import { lineItems } from "../../../fixtures/line-items";

describe("LineItemStruct", () => {
  lineItems.map((lineItem) => {
    it("should validate a valid object", () => {
      try {
        LineItemStruct.assert(lineItem);
      } catch (error) {
        console.log(error);

        assert.equal(error, undefined);
      }
    });
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

    assert.throws(() => LineItemStruct.assert(invalidLineItem));
  });
});
