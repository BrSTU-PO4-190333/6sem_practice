import getMonthDays from '../../../package/DateController/getMonthDays/getMonthDays';
import getDictTasks from '../getDictTasks/getDictTasks';

const getYearTasks = async (year) => {
  const dict = await getDictTasks();

  let year_tasks = [];
  for (let month = 1; month <= 12; ++month) {
    const month_tasks = getMonthDays(year, month);
    year_tasks.push(month_tasks);
  }

  year_tasks.forEach((month) => {
    month.forEach((element) => {
      const d = new Date(element.date);
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const date = d.getDate();
      if (dict?.[year]?.[month]?.[date] === undefined) {
        element.has_completed_task = false;
        element.has_not_completed_task = false;
      } else {
        let completed_task_counter = 0;
        let not_completed_task_counter = 0;
        dict[year][month][date].forEach((task) => {
          const { IsCompleted } = task;
          if (IsCompleted === false) not_completed_task_counter += 1;
          if (IsCompleted === true) completed_task_counter += 1;
        });

        element.has_completed_task = completed_task_counter > 0 ? true : false;
        element.has_not_completed_task =
          not_completed_task_counter > 0 ? true : false;
      }
    });
  });
  return year_tasks;
};

export default getYearTasks;
