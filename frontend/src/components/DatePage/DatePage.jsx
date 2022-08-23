import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './DatePage.module.css';
import AppFrame from '../AppFrame/AppFrame';
import PrintTime from './PrintTime/PrintTime';
import PrintTimeLines from './PrintTimeLines/PrintTimeLines';
import Error404Page from '../Error404Page/Error404Page';
import AppContainer from '../AppContainer/AppContainer';
import DateController from '../../package/DateController/DateController';
import CalendarController from '../../scripts/CalendarController/CalendarController';

const DatePage = (props) => {
  let navigate = useNavigate();
  const { year, month, date } = useParams();
  const [is404, setIs404] = useState(false);
  const hour_section_width = 120;
  const [calendar, setCalendar] = useState([]);
  const [isViewHours, setIsViewHours] = useState(false);

  useEffect(() => {
    if (!date) {
      const d = new Date();
      const d_y = d.getFullYear();
      const d_m = d.getMonth() + 1;
      const d_d = d.getDate();
      navigate(`/year/${d_y}/month/${d_m}/date/${d_d}`);
      return;
    }

    if (new Date(`${year}-${month}-${date}`).toString() === 'Invalid Date') {
      setIs404(true);
      return;
    }

    const getCalendar = async () => {
      const clndr = await CalendarController.getDateTasks(year, month, date);
      setCalendar(clndr);
    };
    getCalendar();
  }, [date, month, navigate, year]);

  const prev = () => {
    const {
      year: y,
      month: m,
      date: d,
    } = DateController.getPrevDate(year, month, date);
    navigate(`/year/${y}/month/${m}/date/${d}`);
  };

  const next = () => {
    const {
      year: y,
      month: m,
      date: d,
    } = DateController.getNextDate(year, month, date);
    navigate(`/year/${y}/month/${m}/date/${d}`);
  };

  return is404 ? (
    <Error404Page
      message={`Даты со следующим годом (${year}), месяцем (${month}) и днем (${date}) не существует`}
    />
  ) : (
    <AppFrame
      buttons={
        <>
          <button
            title="Перейти к таскам за предыдущий день"
            onClick={prev}
            children={<FontAwesomeIcon icon={faArrowDown} />}
          />
          <button
            title="Перейти к таскам за следующий день"
            onClick={next}
            children={<FontAwesomeIcon icon={faArrowUp} />}
          />
          <button
            title="Перейти к таскам за месяц"
            onClick={(event) => navigate(`/year/${year}/month/${month}`)}
            children={`${year}/${month}/${date}`}
          />
        </>
      }
    >
      <>
        <button
          className={[
            styles.button_view,
            isViewHours ? styles.button_view__on : styles.button_view__off,
          ].join(' ')}
          onClick={(event) => setIsViewHours(!isViewHours)}
        >
          <span>{isViewHours ? 'Часы' : 'Список'}</span>
        </button>
        {isViewHours ? (
          <div className={styles.wrapper}>
            <PrintTime hour_section_width={hour_section_width} />
            <PrintTimeLines hour_section_width={hour_section_width} />
            {calendar.map((task, task_i) => {
              const { id, Name, StartDate, EndDate, IsCompleted } = task;

              const start_date = new Date(StartDate);
              const end_date = new Date(EndDate);

              const now_start = new Date(`${year}-${month}-${date} 00:00`);
              const now_end = new Date(`${year}-${month}-${date} 23:59`);

              const start =
                start_date.getTime() < now_start.getTime()
                  ? now_start
                  : start_date;

              const end =
                end_date.getTime() > now_end.getTime() ? now_end : end_date;

              const timeBefore = start.getHours() * 60 + start.getMinutes();
              let timeLength = (end.getTime() - start.getTime()) / 1000 / 60;
              timeLength = timeLength === 0 ? 5 : timeLength;

              const title =
                DateController.toStringTime(start) +
                '-' +
                DateController.toStringTime(end) +
                ' => ' +
                Name;

              return (
                <div
                  key={task_i}
                  onClick={(event) => navigate(`/tasks/${id}`)}
                  className={styles.task_block}
                  title={title}
                  style={{
                    width: `${(timeLength * hour_section_width) / 60}px`,
                    backgroundColor: IsCompleted
                      ? 'var(--color-task-completed)'
                      : 'var(--color-task-not-completed)',
                    marginLeft: `${(timeBefore * hour_section_width) / 60}px`,
                  }}
                />
              );
            })}
          </div>
        ) : (
          <AppContainer>
            <>
              <div
                className={styles.counter_block}
                children={`${calendar.length} tasks`}
              />
              <ul className={styles.array}>
                {calendar.map((task, task_i) => {
                  const { id, StartDate, EndDate, Name, IsCompleted } = task;

                  const start_date = new Date(StartDate);
                  const start_current_date = new Date(
                    `${year}-${month}-${date} 00:00`
                  );

                  const end_current_date = new Date(
                    `${year}-${month}-${date} 23:59`
                  );
                  const end_date = new Date(EndDate);

                  const start_time =
                    start_date.getTime() < start_current_date.getTime()
                      ? '00:00'
                      : `${DateController.toStringTime(start_date)}`;

                  const end_time =
                    end_current_date.getTime() < end_date.getTime()
                      ? '23:59'
                      : `${DateController.toStringTime(end_date)}`;

                  return (
                    <li
                      key={task_i}
                      className={styles.array_element}
                      onClick={(event) => navigate(`/tasks/${id}`)}
                      title={`${start_time} - ${end_time}`}
                    >
                      <span
                        className={
                          IsCompleted
                            ? styles.task_completed_circle
                            : styles.task_not_completed_circle
                        }
                      />
                      {Name}
                    </li>
                  );
                })}
              </ul>
            </>
          </AppContainer>
        )}
      </>
    </AppFrame>
  );
};

DatePage.propTypes = {};

export default DatePage;
