import { add, sub, mul, div } from './calculator';

test('Add two numbers', () => {
  expect(add(2, 5)).toBe(7);
});

test('Subtract two numbers', () => {
  expect(sub(2, 5)).toBe(-3);
});

test('Multiply two numbers', () => {
  expect(mul(2, 5)).toBe(10);
});

test('Div two numbers', () => {
  expect(div(2, 5)).toBe(0.4);
});
