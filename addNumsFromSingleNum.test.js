var sumAdd = require("./addNumSingleNum");

test("adds 1 + 2 to equal 3", () => {
  expect(sumAdd.addNumsFromSingleNum(4)).toBe(10);
  expect(sumAdd.addNumsFromSingleNum(13)).toBe(91);
  expect(sumAdd.addNumsFromSingleNum(600)).toBe(180300);
  expect(sumAdd.addNumsFromSingleNum(392)).toBe(77028);
  expect(sumAdd.addNumsFromSingleNum(53)).toBe(1431);
  expect(sumAdd.addNumsFromSingleNum(897)).toBe(402753);
  expect(sumAdd.addNumsFromSingleNum(23)).toBe(276);
  expect(sumAdd.addNumsFromSingleNum(1000)).toBe(500500);
  expect(sumAdd.addNumsFromSingleNum(738)).toBe(272691);
  expect(sumAdd.addNumsFromSingleNum(100)).toBe(5050);
  expect(sumAdd.addNumsFromSingleNum(925)).toBe(428275);
  expect(sumAdd.addNumsFromSingleNum(1)).toBe(1);
  expect(sumAdd.addNumsFromSingleNum(175)).toBe(15400);
  expect(sumAdd.addNumsFromSingleNum(111)).toBe(6216);
  expect(sumAdd.addNumsFromSingleNum(999)).toBe(499500);
});
