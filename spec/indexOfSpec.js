'use strict';

var ignoreCase = require('../lib');

describe('indexOf', function() {
  it(
    'returns the index of the first occurrence of the search string in the string ignoring case',
    function() {
      expect(ignoreCase.indexOf('abcd', 'bc')).toBe(1);
      expect(ignoreCase.indexOf('aBcD', 'bc')).toBe(1);
      expect(ignoreCase.indexOf('FooBar', 'FOO')).toBe(0);
      expect(ignoreCase.indexOf('FooBar', 'baR')).toBe(3);
      expect(ignoreCase.indexOf('foofoo', 'foo')).toBe(0);
      expect(ignoreCase.indexOf('foo', 'foo')).toBe(0);
      expect(ignoreCase.indexOf('foO', 'Foo')).toBe(0);
      expect(ignoreCase.indexOf(12345, 234)).toBe(1);

      expect(ignoreCase.indexOf('foo', '')).toBe(0);
      expect(ignoreCase.indexOf('foo', null)).toBe(0);
      expect(ignoreCase.indexOf('foo', undefined)).toBe(0);

      expect(ignoreCase.indexOf('', '')).toBe(0);
      expect(ignoreCase.indexOf('', null)).toBe(0);
      expect(ignoreCase.indexOf('', undefined)).toBe(0);
      expect(ignoreCase.indexOf(null, '')).toBe(0);
      expect(ignoreCase.indexOf(null, null)).toBe(0);
      expect(ignoreCase.indexOf(null, undefined)).toBe(0);
      expect(ignoreCase.indexOf(undefined, '')).toBe(0);
      expect(ignoreCase.indexOf(undefined, null)).toBe(0);
      expect(ignoreCase.indexOf(undefined, undefined)).toBe(0);
    }
  );

  it('returns -1 if the string does not contain the search string ignoring case', function() {
    expect(ignoreCase.indexOf('foo', 'bar')).toBe(-1);
    expect(ignoreCase.indexOf('bc', 'abcd')).toBe(-1);
    expect(ignoreCase.indexOf('abc', 'bcd')).toBe(-1);
    expect(ignoreCase.indexOf('bcd', 'abc')).toBe(-1);

    expect(ignoreCase.indexOf('', 'foo')).toBe(-1);
    expect(ignoreCase.indexOf(null, 'foo')).toBe(-1);
    expect(ignoreCase.indexOf(undefined, 'foo')).toBe(-1);
  });

  it('supports the position parameter', function() {
    expect(ignoreCase.indexOf('abcde', 'cd', 0)).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', 0)).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', -100)).toBe(2);
    expect(ignoreCase.indexOf('abcde', 'cd', null)).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', undefined)).toBe(2);

    expect(ignoreCase.indexOf('abcde', 'cd', 1)).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', 1)).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', '1')).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', 1.5)).toBe(2);
    expect(ignoreCase.indexOf('AbCdE', 'cD', 2)).toBe(2);

    expect(ignoreCase.indexOf('abcde', 'cd', 3)).toBe(-1);
    expect(ignoreCase.indexOf('abcde', 'cd', '3')).toBe(-1);
    expect(ignoreCase.indexOf('abcde', 'cd', 3.5)).toBe(-1);
    expect(ignoreCase.indexOf('abcde', 'cd', 5)).toBe(-1);
    expect(ignoreCase.indexOf('abcde', 'cd', 100)).toBe(-1);

    expect(ignoreCase.indexOf('foofoo', 'foo', 0)).toBe(0);
    expect(ignoreCase.indexOf('foofoo', 'foo', 1)).toBe(3);
    expect(ignoreCase.indexOf('foofoo', 'foo', 3)).toBe(3);
    expect(ignoreCase.indexOf('foofoo', 'foo', 5)).toBe(-1);

    expect(ignoreCase.indexOf('foo', '', -100)).toBe(0);
    expect(ignoreCase.indexOf('foo', '', 0)).toBe(0);
    expect(ignoreCase.indexOf('foo', '', 1)).toBe(1);
    expect(ignoreCase.indexOf('foo', '', 3)).toBe(3);
    expect(ignoreCase.indexOf('foo', '', 100)).toBe(3);
  });
});
