'use strict';

var ignoreCase = require('../lib');

describe('includes', function() {
  it('returns true if the string contains the search string ignoring case', function() {
    expect(ignoreCase.includes('abcd', 'bc')).toBe(true);
    expect(ignoreCase.includes('aBcD', 'bc')).toBe(true);
    expect(ignoreCase.includes('FooBar', 'FOO')).toBe(true);
    expect(ignoreCase.includes('FooBar', 'baR')).toBe(true);
    expect(ignoreCase.includes('foofoo', 'foo')).toBe(true);
    expect(ignoreCase.includes('foo', 'foo')).toBe(true);
    expect(ignoreCase.includes('foO', 'Foo')).toBe(true);
    expect(ignoreCase.includes(12345, 234)).toBe(true);

    expect(ignoreCase.includes('foo', '')).toBe(true);
    expect(ignoreCase.includes('foo', null)).toBe(true);
    expect(ignoreCase.includes('foo', undefined)).toBe(true);

    expect(ignoreCase.includes('', '')).toBe(true);
    expect(ignoreCase.includes('', null)).toBe(true);
    expect(ignoreCase.includes('', undefined)).toBe(true);
    expect(ignoreCase.includes(null, '')).toBe(true);
    expect(ignoreCase.includes(null, null)).toBe(true);
    expect(ignoreCase.includes(null, undefined)).toBe(true);
    expect(ignoreCase.includes(undefined, '')).toBe(true);
    expect(ignoreCase.includes(undefined, null)).toBe(true);
    expect(ignoreCase.includes(undefined, undefined)).toBe(true);
  });

  it('returns false if the string does not contain the search string ignoring case', function() {
    expect(ignoreCase.includes('foo', 'bar')).toBe(false);
    expect(ignoreCase.includes('bc', 'abcd')).toBe(false);
    expect(ignoreCase.includes('abc', 'bcd')).toBe(false);
    expect(ignoreCase.includes('bcd', 'abc')).toBe(false);

    expect(ignoreCase.includes('', 'foo')).toBe(false);
    expect(ignoreCase.includes(null, 'foo')).toBe(false);
    expect(ignoreCase.includes(undefined, 'foo')).toBe(false);
  });

  it('supports the position parameter', function() {
    expect(ignoreCase.includes('abcde', 'cd', 0)).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', 0)).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', -100)).toBe(true);
    expect(ignoreCase.includes('abcde', 'cd', null)).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', undefined)).toBe(true);

    expect(ignoreCase.includes('abcde', 'cd', 1)).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', 1)).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', '1')).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', 1.5)).toBe(true);
    expect(ignoreCase.includes('AbCdE', 'cD', 2)).toBe(true);

    expect(ignoreCase.includes('abcde', 'cd', 3)).toBe(false);
    expect(ignoreCase.includes('abcde', 'cd', '3')).toBe(false);
    expect(ignoreCase.includes('abcde', 'cd', 3.5)).toBe(false);
    expect(ignoreCase.includes('abcde', 'cd', 5)).toBe(false);
    expect(ignoreCase.includes('abcde', 'cd', 100)).toBe(false);

    expect(ignoreCase.includes('foo', '', -100)).toBe(true);
    expect(ignoreCase.includes('foo', '', 0)).toBe(true);
    expect(ignoreCase.includes('foo', '', 1)).toBe(true);
    expect(ignoreCase.includes('foo', '', 3)).toBe(true);
    expect(ignoreCase.includes('foo', '', 100)).toBe(true);
  });
});
