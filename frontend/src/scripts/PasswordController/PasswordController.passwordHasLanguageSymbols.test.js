import PasswordController from './PasswordController';

test('.passwordHasUpLetters()', () => {
  expect(PasswordController.passwordHasLanguageSymbols('www')).toBe(true);
  expect(PasswordController.passwordHasLanguageSymbols('ццц')).toBe(true);
  expect(PasswordController.passwordHasLanguageSymbols('222')).toBe(false);
});
