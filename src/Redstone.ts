import assert from 'assert';

type RedstonePower =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

export class Redstone {
  private readonly power: RedstonePower;

  constructor(power: RedstonePower) {
    this.power = power;
  }

  getPower(): RedstonePower {
    return this.power;
  }

  substract(number: RedstonePower): Redstone {
    assert(number <= this.power);
    const result = this.power - number;
    this.assertPower(result);
    return new Redstone(result);
  }

  private assertPower(number: number): asserts number is RedstonePower {
    assert(Number.isInteger(number));
    assert(number >= 0);
    assert(number <= 15);
  }
}
