import { isNotNullish } from './is-not-nullish';

describe('isNotNullish', () => {
  it('should work as expected', () => {
    const result = isNotNullish();
    expect(result).toBeDefined();
  });
});