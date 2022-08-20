const PasswordController = {
  passwordHasUpLetters(password = '') {
    const arr = password.match(new RegExp('[A-ZА-Я]', 'g')) || [];
    const count = arr.length;
    return count > 2;
  },

  passwordHasDownLetters(password = '') {
    const arr = password.match(new RegExp('[a-zа-я]', 'g')) || [];
    const count = arr.length;
    return count > 2;
  },

  passwordHasNumbers(password = '') {
    const arr = password.match(new RegExp('[0-9]', 'g')) || [];
    const count = arr.length;
    return count > 2;
  },

  passwordHasSpecialSymbols(password = '') {
    const arr =
      password.match(new RegExp('[!@#$%^&*()-_=+/"№;:?\\\'/`]', 'g')) || [];
    const count = arr.length;
    return count > 2;
  },

  passwordHasLanguageSymbols(password = '') {
    const arr = password.match(new RegExp('[A-Za-zА-Яа-я]', 'g')) || [];
    const count = arr.length;
    return count > 2;
  },
};

export default PasswordController;
