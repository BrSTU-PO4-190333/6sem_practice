import getDictTasks from '../getDictTasks/getDictTasks';

const getDateTasks = async (year, month, date) => {
  const dict = await getDictTasks();
  return dict?.[year]?.[month]?.[date] === undefined
    ? []
    : dict[year][month][date];
};

export default getDateTasks;
