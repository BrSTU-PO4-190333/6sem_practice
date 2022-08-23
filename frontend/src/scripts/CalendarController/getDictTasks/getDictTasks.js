import ApiRestTasksGet from '../../api/rest/tasks_get';

const getDictTasks = async () => {
  let dict = {};
  const array_tasks = await ApiRestTasksGet();
  array_tasks.forEach((element) => {
    const { StartDate, EndDate } = element;

    const start = new Date(StartDate);
    const end = new Date(EndDate);

    for (
      let i = 0;
      new Date(start.getTime() + 1000 * 60 * 60 * 24 * i) <= end.getTime();
      ++i
    ) {
      const d_i = new Date(start.getTime() + 1000 * 60 * 60 * 24 * i);

      const year = d_i.getFullYear();
      const month = d_i.getMonth() + 1;
      const date = d_i.getDate();

      if (dict[year] === undefined) {
        dict[year] = {};
      }

      if (dict[year][month] === undefined) {
        dict[year][month] = {};
      }

      if (dict[year][month][date] === undefined) {
        dict[year][month][date] = [];
      }

      dict[year][month][date].push(element);

      if (
        year === end.getFullYear() &&
        month === end.getMonth() + 1 &&
        date === end.getDate()
      ) {
        break;
      }
    }
  });

  return dict;
};

export default getDictTasks;
