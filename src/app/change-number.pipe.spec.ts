import { ChangeNumberPipe } from './change-number.pipe';

describe('ChangeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ChangeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
