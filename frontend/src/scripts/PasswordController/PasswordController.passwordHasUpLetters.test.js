import PasswordController from './PasswordController';

test('.passwordHasUpLetters()', () => {
  expect(PasswordController.passwordHasUpLetters('QQQ')).toBe(true);
  expect(PasswordController.passwordHasUpLetters('qqq')).toBe(false);
});
