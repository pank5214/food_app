import { sum } from "../sum";

test("should be testing the sum of two numbers ", () => {
  const result = sum(5, 6);

  //Assertion
  expect(result).toBe(11);
});
