'use strict';

var ignoreCase = require('../lib');

describe('startsWith', function() {
  it('returns true if the string starts with the search string ignoring case', function() {
    expect(ignoreCase.startsWith('foobar', 'foo')).toBe(true);
    expect(ignoreCase.startsWith('FooBaR', 'foO')).toBe(true);
    expect(ignoreCase.startsWith('foo', 'foo')).toBe(true);
    expect(ignoreCase.startsWith('foO', 'Foo')).toBe(true);
    expect(ignoreCase.startsWith('foofoo', 'foo')).toBe(true);
    expect(ignoreCase.startsWith(12345, 123)).toBe(true);

    expect(ignoreCase.startsWith('foo', '')).toBe(true);
    expect(ignoreCase.startsWith('foo', null)).toBe(true);
    expect(ignoreCase.startsWith('foo', undefined)).toBe(true);

    expect(ignoreCase.startsWith('', '')).toBe(true);
    expect(ignoreCase.startsWith('', null)).toBe(true);
    expect(ignoreCase.startsWith('', undefined)).toBe(true);
    expect(ignoreCase.startsWith(null, '')).toBe(true);
    expect(ignoreCase.startsWith(null, null)).toBe(true);
    expect(ignoreCase.startsWith(null, undefined)).toBe(true);
    expect(ignoreCase.startsWith(undefined, '')).toBe(true);
    expect(ignoreCase.startsWith(undefined, null)).toBe(true);
    expect(ignoreCase.startsWith(undefined, undefined)).toBe(true);
  });

  it('returns false if the string does not start with the search string ignoring case', function() {
    expect(ignoreCase.startsWith('foo', 'bar')).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc')).toBe(false);
    expect(ignoreCase.startsWith('foobar', 'bar')).toBe(false);
    expect(ignoreCase.startsWith(12345, 345)).toBe(false);

    expect(ignoreCase.startsWith('', 'foo')).toBe(false);
    expect(ignoreCase.startsWith(null, 'foo')).toBe(false);
    expect(ignoreCase.startsWith(undefined, 'foo')).toBe(false);
  });

  it('supports the position parameter', function() {
    expect(ignoreCase.startsWith('abcd', 'bc', 1)).toBe(true);
    expect(ignoreCase.startsWith('AbCd', 'Bc', 1)).toBe(true);
    expect(ignoreCase.startsWith('AbCd', 'Bc', '1')).toBe(true);
    expect(ignoreCase.startsWith('AbCd', 'Bc', 1.5)).toBe(true);

    expect(ignoreCase.startsWith('abcd', 'bc', 2)).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc', '2')).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc', 2.5)).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc', -100)).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc', 0)).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc', 4)).toBe(false);
    expect(ignoreCase.startsWith('abcd', 'bc', 100)).toBe(false);

    expect(ignoreCase.startsWith('foobar', 'foo', 0)).toBe(true);
    expect(ignoreCase.startsWith('FooBaR', 'foO', 0)).toBe(true);
    expect(ignoreCase.startsWith('FooBaR', 'foO', -100)).toBe(true);
    expect(ignoreCase.startsWith('FooBaR', 'foO', null)).toBe(true);
    expect(ignoreCase.startsWith('FooBaR', 'foO', undefined)).toBe(true);

    expect(ignoreCase.startsWith('foobar', 'foo', 3)).toBe(false);
    expect(ignoreCase.startsWith('foobar', 'foo', 100)).toBe(false);

    expect(ignoreCase.startsWith('foo', 'foo', 0)).toBe(true);
    expect(ignoreCase.startsWith('Foo', 'foO', 0)).toBe(true);
    expect(ignoreCase.startsWith('Foo', 'foO', -100)).toBe(true);

    expect(ignoreCase.startsWith('foo', 'foo', 3)).toBe(false);
    expect(ignoreCase.startsWith('foo', 'foo', 100)).toBe(false);

    expect(ignoreCase.startsWith('foo', '', -100)).toBe(true);
    expect(ignoreCase.startsWith('foo', '', 0)).toBe(true);
    expect(ignoreCase.startsWith('foo', '', 1)).toBe(true);
    expect(ignoreCase.startsWith('foo', '', 3)).toBe(true);
    expect(ignoreCase.startsWith('foo', '', 100)).toBe(true);
  });
});
