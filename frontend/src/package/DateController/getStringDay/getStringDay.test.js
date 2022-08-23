import getStringDay from './getStringDay';

test('getStringDay() Мы получили строковой день недели?', () => {
  expect(getStringDay(0)).toBe('Вс');
  expect(getStringDay(1)).toBe('Пн');
  expect(getStringDay(2)).toBe('Вт');
  expect(getStringDay(3)).toBe('Ср');
  expect(getStringDay(4)).toBe('Чт');
  expect(getStringDay(5)).toBe('Пт');
  expect(getStringDay(6)).toBe('Сб');
  expect(getStringDay(7)).toBe('Вс');

  expect(getStringDay(-1)).toBe(undefined);
  expect(getStringDay(8)).toBe(undefined);
});
