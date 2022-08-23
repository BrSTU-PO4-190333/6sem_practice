/**
 * Функция, вовзвращает строковый день недели
 * @param {*} day
 * @param {*} lang
 * @returns {string}
 */
export default function getStringDay(day) {
  const ru = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return ru[day];
}
