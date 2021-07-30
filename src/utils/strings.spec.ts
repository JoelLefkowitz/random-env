import { expect } from 'chai';
import { splitLines } from './strings';

describe('splitLines', () => {
  it('splits lines and remove whitespace.', () => {
    expect(splitLines('abc')).to.equal('abc');
    expect(splitLines('abc\ndef')).to.equal(['abc', 'def']);
    expect(splitLines('abc \n def')).to.equal(['abc', 'def']);
    expect(splitLines('abc\n\ndef')).to.equal(['abc', 'def']);
    expect(splitLines(' abc\ndef ')).to.equal(['abc', 'def']);
  });
});
