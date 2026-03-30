import { describe, it } from "node:test";
import assert from "node:assert";
import { InvalidOperationException } from "../common/handlers/exceptions.handler";
import { StatementBuilder } from "../common/utils";

describe("test StatementBuilder", () => {
  it("to statement for pql table", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder
      .select("Id")
      .from("table")
      .where("a = b AND b = c")
      .orderBy("a ASC, b DESC")
      .limit(200)
      .offset(1)
      .toStatement().query;

    assert.equal(
      query,
      "SELECT Id FROM table WHERE a = b AND b = c ORDER BY a ASC, b DESC LIMIT 200 OFFSET 1",
    );
  });

  it("to statement with keywords", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder
      .select("Id")
      .from("FrOM table")
      .where("WHERE a = b AND b = c")
      .orderBy("order BY a ASC, b DESC")
      .limit(200)
      .offset(1)
      .toStatement().query;

    assert.equal(
      query,
      "SELECT Id FROM table WHERE a = b AND b = c ORDER BY a ASC, b DESC LIMIT 200 OFFSET 1",
    );
  });

  it("to statement not pql table", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder
      .where("a = b AND b = c")
      .orderBy("a ASC, b DESC")
      .limit(200)
      .offset(1)
      .toStatement().query;

    assert.equal(
      query,
      "WHERE a = b AND b = c ORDER BY a ASC, b DESC LIMIT 200 OFFSET 1",
    );
  });

  it("to statement not offset", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder
      .where("a = b AND b = c")
      .orderBy("a ASC, b DESC")
      .limit(200)
      .toStatement().query;

    assert.equal(
      query,
      "WHERE a = b AND b = c ORDER BY a ASC, b DESC LIMIT 200",
    );
  });

  it("to statement just limit", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder.limit(500).toStatement().query;

    assert.equal(query, "LIMIT 500");
  });

  it("to statement limit and offset", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder
      .limit(500)
      .offset(1)
      .where("a = b")
      .orderBy("a");

    assert.equal(
      query.toStatement().query,
      "WHERE a = b ORDER BY a LIMIT 500 OFFSET 1",
    );

    assert.equal(
      query.removeLimitAndOffset().toStatement().query,
      "WHERE a = b ORDER BY a",
    );
  });

  it("to statement remove limit and offset", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder.limit(500).offset(1).toStatement().query;

    assert.equal(query, "LIMIT 500 OFFSET 1");
  });

  it("to statement not initial offset", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder.limit(500).where("a = b").orderBy("a");

    assert.equal(query.toStatement().query, "WHERE a = b ORDER BY a LIMIT 500");

    assert.equal(
      query.increaseOffsetBy(120).toStatement().query,
      "WHERE a = b ORDER BY a LIMIT 500 OFFSET 120",
    );
  });

  it("to statement with initial offset", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder
      .limit(500)
      .offset(10)
      .where("a = b")
      .orderBy("a");

    assert.equal(
      query.toStatement().query,
      "WHERE a = b ORDER BY a LIMIT 500 OFFSET 10",
    );

    assert.equal(
      query.increaseOffsetBy(30).toStatement().query,
      "WHERE a = b ORDER BY a LIMIT 500 OFFSET 40",
    );
  });

  it("to statement empty", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder.toStatement().query;

    assert.equal(query, "");
  });

  it("to statement offset without limit", () => {
    const statementBuilder = new StatementBuilder();
    const query = statementBuilder.offset(500);

    assert.throws(() => query.toStatement(), InvalidOperationException);
  });
});
