import encrypt from './caesarCypher';

test('Encrypt message', () => {
  expect(encrypt('attack')).toBe('fyyfhp');
});

test('Handle spaces', () => {
  expect(encrypt('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('Wrap from z to a', () => {
  expect(encrypt('zoinks')).toBe('etnspx');
});

test('Handle punctuation', () => {
  expect(encrypt('attack at dawn!')).toBe('fyyfhp fy ifbs!');
});
