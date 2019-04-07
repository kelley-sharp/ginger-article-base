import formatData from './formatData';
import example from './example';

describe('formatData', () => {
  it('should return an array', async () => {
    const result = await formatData(example);
    expect(Array.isArray(result)).toBe(true);
  });

  it('should rename author to be plural because it represents an array', async () => {
    const result = await formatData(example);
    expect(result[0]).toHaveProperty('authors');
    expect(result[0]).not.toHaveProperty('author');
  });

  it('should trim whitespace from the text fields', async () => {
    const result = await formatData(example);
    expect(result[0]);
  });
  it('should add an ID to author objects', () => {});
  it('should parse date from time and return both separately', () => {});
  it('should delete unecessary keys');
});
