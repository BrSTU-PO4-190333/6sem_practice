import PasswordController from './PasswordController';

test('.passwordHasSpecialSymbols()', () => {
  expect(PasswordController.passwordHasSpecialSymbols('!!!')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('@@@')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('###')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('$$$')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('%%%')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('^^^')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('&&&')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('***')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('(((')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols(')))')).toBe(true);

  expect(PasswordController.passwordHasSpecialSymbols('---')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('___')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('===')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('+++')).toBe(true);

  expect(PasswordController.passwordHasSpecialSymbols('///')).toBe(true);

  expect(PasswordController.passwordHasSpecialSymbols('"""')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('№№№')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols(';;;')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols(':::')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('???')).toBe(true);

  expect(PasswordController.passwordHasSpecialSymbols('\\\\\\')).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols("'''")).toBe(true);
  expect(PasswordController.passwordHasSpecialSymbols('```')).toBe(true);

  expect(PasswordController.passwordHasSpecialSymbols('eee')).toBe(false);
});
