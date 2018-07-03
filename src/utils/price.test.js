import {price} from './price';

describe.only('price', () => {
  test('should return "$2.00" when input is 2"', () => {
    expect(price(2)).toBe('$2.00');
  });
  test('should return "$10.65" when input is 10.65"', () => {
    expect(price(10.65)).toBe('$10.65');
  });
});