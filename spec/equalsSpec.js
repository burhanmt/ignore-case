'use strict';

var ignoreCase = require('../lib');

describe('equals', function() {
  it('returns true if the strings are equal ignoring case', function() {
    expect(ignoreCase.equals('abc', 'abc')).toBe(true);
    expect(ignoreCase.equals('aBc', 'AbC')).toBe(true);
    expect(ignoreCase.equals('123', 123)).toBe(true);
    expect(ignoreCase.equals(123, '123')).toBe(true);
    
    expect(ignoreCase.equals('', '')).toBe(true);
    expect(ignoreCase.equals('', null)).toBe(true);
    expect(ignoreCase.equals('', undefined)).toBe(true);
    expect(ignoreCase.equals(null, '')).toBe(true);
    expect(ignoreCase.equals(null, null)).toBe(true);
    expect(ignoreCase.equals(null, undefined)).toBe(true);
    expect(ignoreCase.equals(undefined, '')).toBe(true);
    expect(ignoreCase.equals(undefined, null)).toBe(true);
    expect(ignoreCase.equals(undefined, undefined)).toBe(true);
  });

  it('returns false if the strings are not equal ignoring case', function() {
    expect(ignoreCase.equals('foo', 'bar')).toBe(false);
    expect(ignoreCase.equals('abcd', 'bc')).toBe(false);
    expect(ignoreCase.equals('foobar', 'foo')).toBe(false);
    expect(ignoreCase.equals('foobar', 'bar')).toBe(false);
    expect(ignoreCase.equals('foo', '')).toBe(false);
    expect(ignoreCase.equals('foo', null)).toBe(false);
    expect(ignoreCase.equals('foo', undefined)).toBe(false);
    expect(ignoreCase.equals('', 'foo')).toBe(false);
    expect(ignoreCase.equals(null, 'foo')).toBe(false);
    expect(ignoreCase.equals(undefined, 'foo')).toBe(false);
  });
});
