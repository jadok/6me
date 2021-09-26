import { readFileSync } from 'fs';
import 'mocha';
import { expect } from 'chai';

import { Chapter, splitHeaders } from '../src/index';

const output: Chapter[] = [];

describe('split data', () => {
  it('splitHeaders', () => {
    const output: Chapter[] = [];
    try {
      // read contents of the file
      const data = readFileSync('./README.md').toString('utf-8');
    
      // split the contents by new line
      const lines = data.split(/\r?\n/);
      splitHeaders(lines, output);
      expect(output.length).to.equal(1);
      expect(output[0].subs.length).to.equal(1);
    } catch (err) {
      expect(true).to.equal(false);
    }
  });
});
