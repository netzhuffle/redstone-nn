import { Redstone } from './src/Redstone';

const redstone = new Redstone(15);
const result = redstone.substract(10);
console.log(result.getPower());
