import {capitalize} from './capitalize';

describe('capitalize', () => {
  test('should return "Foo" when input is "foo"', () => {
    expect(capitalize('foo')).toBe('Foo');
  });
  test('should return "Foo" when input is "FOO"', () => {
    expect(capitalize('FOO')).toBe('Foo');
  });
});