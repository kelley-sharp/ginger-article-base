import formatData from './formatData';
import example from './example';

describe('formatData', () => {
  it('should return an object with an articles array and authors array', async () => {
    const result = await formatData(example);
    expect(Array.isArray(result.articles)).toBe(true);
    expect(Array.isArray(result.authors)).toBe(true);
  });

  it('should rename author to be plural because it represents an array', async () => {
    const result = await formatData(example);
    expect(result.articles[0]).toHaveProperty('authors');
    expect(result.articles[0]).not.toHaveProperty('author');
  });

  it('should only return necessary keys', async () => {
    const result = await formatData(example);
    expect(result.articles[0]).not.toHaveProperty('link');
    expect(result.articles[0]).not.toHaveProperty('updated');
  });
});
