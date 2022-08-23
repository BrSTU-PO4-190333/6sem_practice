import DateController from '../../../package/DateController/DateController';
import getDictTasks from '../getDictTasks/getDictTasks';

const getMonthTasks = async (year, month) => {
  const dict = await getDictTasks();
  let month_tasks = DateController.getMonthDays(year, month);
  month_tasks.forEach((element) => {
    const d = new Date(element.date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    if (dict?.[year]?.[month]?.[date] === undefined) {
      element.tasks = [];
      element.has_completed_task = false;
      element.has_not_completed_task = false;
    } else {
      element.tasks = dict[year][month][date];

      let completed_task_counter = 0;
      let not_completed_task_counter = 0;
      element.tasks.forEach((task) => {
        if (task.IsCompleted) {
          completed_task_counter += 1;
        } else {
          not_completed_task_counter += 1;
        }
      });

      element.has_completed_task = completed_task_counter > 0 ? true : false;
      element.has_not_completed_task =
        not_completed_task_counter > 0 ? true : false;
    }
  });

  return month_tasks;
};

export default getMonthTasks;
