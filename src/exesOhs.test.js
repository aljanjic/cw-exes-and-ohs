const exesOhs = require('./exesOhs');

describe('exesOhs', () => {
  it('"xxoo" should return true', () => {
    expect(exesOhs('xxoo')).toBe(true);
  });

  it('"xxooo" should return false', () => {
    expect(exesOhs('xxooo')).toBe(false);
  });

  it('"xXxoOo" should return true', () => {
    expect(exesOhs('xXxoOo')).toBe(true);
  });

  it('"xXXxoo" should return false', () => {
    expect(exesOhs('xXXxoo')).toBe(false);
  });

});
