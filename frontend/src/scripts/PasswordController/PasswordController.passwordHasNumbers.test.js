import PasswordController from './PasswordController';

test('.passwordHasUpLetters()', () => {
  expect(PasswordController.passwordHasNumbers('e345')).toBe(true);
  expect(PasswordController.passwordHasNumbers('eddd')).toBe(false);
});
