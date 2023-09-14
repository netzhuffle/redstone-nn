import { expect, test } from 'bun:test';
import { Redstone } from './Redstone';

test('Create Redstone', () => {
  const redstone = new Redstone(15);
  expect(redstone.getPower()).toBe(15);
});

test('15 - 9 = 6', () => {
  const redstone = new Redstone(15);
  const result = redstone.substract(9);
  expect(result.getPower()).toBe(6);
});

test('11 - 11 = 0', () => {
  const redstone = new Redstone(11);
  const result = redstone.substract(11);
  expect(result.getPower()).toBe(0);
});

test('7 - 8 throws', () => {
  const redstone = new Redstone(7);
  expect(() => redstone.substract(8)).toThrow();
});
