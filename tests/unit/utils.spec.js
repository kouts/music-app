import { clone, isEmptyObject, compareAlbumsYear } from '@/common/utils';

describe('clone', () => {
  it('returns a clone of the input object', () => {
    const obj = {
      foo: 'fooVal',
      bar: 'barVal'
    };
    const objClone = clone(obj);
    expect(objClone).toMatchObject(obj);
  });
  it('deep clones the input object', () => {
    const obj = {
      foo: 'fooVal',
      bar: 'barVal'
    };
    const objClone = clone(obj);
    objClone.foo = 'newFooVal';
    expect(obj.foo).toBe('fooVal');
  });
});

describe('isEmptyObject', () => {
  it('checks whether the object empty check is done correctly', () => {
    const isEmpty = isEmptyObject({});
    const isNotEmpty = isEmptyObject({
      foo: 'fooVal'
    });
    expect(isEmpty).toBe(true);
    expect(isNotEmpty).toBe(false);
  });
});

describe('compareAlbumsYear', () => {
  it('checks whether albums year comparison is done correctly', () => {
    const a = { intYearReleased: '1990' };
    const b = { intYearReleased: '2000' };
    const resA = compareAlbumsYear(a, b);
    const resB = compareAlbumsYear(b, a);
    const resEqual = compareAlbumsYear(a, a);
    expect(resA).toBe(-1);
    expect(resB).toBe(1);
    expect(resEqual).toBe(0);
  });
});
