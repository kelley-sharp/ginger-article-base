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

  it('should trim whitespace from the summary fields', async () => {
    const result = await formatData(example);
    expect(result[0]).summary[0].not.toBe(' ');
  });

  it('should add a slugified name as id to author objects', async () => {
    const result = await formatData(example);
    expect(result[0]).authors[0].id.toBe(true);
  });

  it('should only return necessary keys'), aync () => {
    const result = await formatData(example);
    expect(result[0]).link.toBe(false);
    expect(result[0]).updated.toBe(false);
    expect(result[0]).arxiv:comment.toBe(false);    
  };

});
