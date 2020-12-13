import chunk from 'lodash/chunk';

export function createBatches() {
  return chunk([1, 2, 3], 100);
}
