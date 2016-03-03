'use strict';

var ignoreCase = require('../lib');

describe('endsWith', function() {
  it('returns true if the string ends with the search string ignoring case', function() {
    expect(ignoreCase.endsWith('foobar', 'bar')).toBe(true);
    expect(ignoreCase.endsWith('FooBaR', 'bAr')).toBe(true);
    expect(ignoreCase.endsWith('foo', 'foo')).toBe(true);
    expect(ignoreCase.endsWith('foO', 'Foo')).toBe(true);
    expect(ignoreCase.endsWith('foofoo', 'foo')).toBe(true);
    expect(ignoreCase.endsWith(12345, 345)).toBe(true);

    expect(ignoreCase.endsWith('foo', '')).toBe(true);
    expect(ignoreCase.endsWith('foo', null)).toBe(true);
    expect(ignoreCase.endsWith('foo', undefined)).toBe(true);

    expect(ignoreCase.endsWith('', '')).toBe(true);
    expect(ignoreCase.endsWith('', null)).toBe(true);
    expect(ignoreCase.endsWith('', undefined)).toBe(true);
    expect(ignoreCase.endsWith(null, '')).toBe(true);
    expect(ignoreCase.endsWith(null, null)).toBe(true);
    expect(ignoreCase.endsWith(null, undefined)).toBe(true);
    expect(ignoreCase.endsWith(undefined, '')).toBe(true);
    expect(ignoreCase.endsWith(undefined, null)).toBe(true);
    expect(ignoreCase.endsWith(undefined, undefined)).toBe(true);
  });

  it('returns false if the string does not end with the search string ignoring case', function() {
    expect(ignoreCase.endsWith('foo', 'bar')).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc')).toBe(false);
    expect(ignoreCase.endsWith('foobar', 'foo')).toBe(false);
    expect(ignoreCase.endsWith(12345, 123)).toBe(false);

    expect(ignoreCase.endsWith('', 'foo')).toBe(false);
    expect(ignoreCase.endsWith(null, 'foo')).toBe(false);
    expect(ignoreCase.endsWith(undefined, 'foo')).toBe(false);
  });

  it('supports the position parameter', function() {
    expect(ignoreCase.endsWith('abcd', 'bc', 3)).toBe(true);
    expect(ignoreCase.endsWith('AbCd', 'Bc', 3)).toBe(true);
    expect(ignoreCase.endsWith('AbCd', 'Bc', '3')).toBe(true);
    expect(ignoreCase.endsWith('AbCd', 'Bc', 3.5)).toBe(true);

    expect(ignoreCase.endsWith('abcd', 'bc', 2)).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc', '2')).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc', 2.5)).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc', -100)).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc', 0)).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc', 4)).toBe(false);
    expect(ignoreCase.endsWith('abcd', 'bc', 100)).toBe(false);

    expect(ignoreCase.endsWith('foobar', 'bar', 6)).toBe(true);
    expect(ignoreCase.endsWith('FooBaR', 'bAr', 6)).toBe(true);
    expect(ignoreCase.endsWith('FooBaR', 'bAr', 100)).toBe(true);

    expect(ignoreCase.endsWith('foobar', 'bar', -100)).toBe(false);
    expect(ignoreCase.endsWith('foobar', 'bar', 0)).toBe(false);
    expect(ignoreCase.endsWith('foobar', 'bar', 3)).toBe(false);

    expect(ignoreCase.endsWith('foo', 'foo', 3)).toBe(true);
    expect(ignoreCase.endsWith('Foo', 'foO', 3)).toBe(true);
    expect(ignoreCase.endsWith('Foo', 'foO', 100)).toBe(true);

    expect(ignoreCase.endsWith('foo', 'foo', -100)).toBe(false);
    expect(ignoreCase.endsWith('foo', 'foo', 0)).toBe(false);
    expect(ignoreCase.endsWith('foo', 'foo', 1)).toBe(false);

    expect(ignoreCase.endsWith('foo', '', -100)).toBe(true);
    expect(ignoreCase.endsWith('foo', '', 0)).toBe(true);
    expect(ignoreCase.endsWith('foo', '', 1)).toBe(true);
    expect(ignoreCase.endsWith('foo', '', 3)).toBe(true);
    expect(ignoreCase.endsWith('foo', '', 100)).toBe(true);
  });
});
