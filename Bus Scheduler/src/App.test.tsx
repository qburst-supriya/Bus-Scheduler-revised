import { it, test } from "vitest";

it("should work", (ctx) => {
  console.log(ctx);
});

test("should work1", (ctx) => {
  console.log(ctx);
});

it("math is easy", ({ expect }) => {
  expect(2 + 2).toBe(4);
});

it.concurrent("math is easy", ({ expect }) => {
  expect(2 + 2).toMatchInlineSnapshot(`4`);
});

it("math is hard", ({ skip, expect }) => {
  skip();
  expect(2 + 2).toBe(5);
});
