import PasswordController from './PasswordController';

test('.passwordHasUpLetters()', () => {
  expect(PasswordController.passwordHasDownLetters('www')).toBe(true);
  expect(PasswordController.passwordHasDownLetters('WWW')).toBe(false);
});
