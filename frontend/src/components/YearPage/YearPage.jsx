import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './YearPage.module.css';
import Error404Page from '../Error404Page/Error404Page';
import AppFrame from '../AppFrame/AppFrame';
import DateController from '../../package/DateController/DateController';
import CalendarController from '../../scripts/CalendarController/CalendarController';

const YearPage = (props) => {
  let navigate = useNavigate();
  const { year } = useParams();
  const [is404, setIs404] = useState(false);
  const [yearCalendar, setYearCalendar] = useState([]);

  useEffect(() => {
    if (!year) {
      const d = new Date();
      const d_year = d.getFullYear();
      navigate(`/year/${d_year}`);
      return;
    }

    if (new Date(year).toString() === 'Invalid Date') {
      setIs404(true);
      return;
    }

    const getCalendar = async () => {
      const calendar = await CalendarController.getYearTasks(year);
      setYearCalendar(calendar);
    };
    getCalendar();
  }, [navigate, year]);

  const prev = () => {
    const prev_year = DateController.getPrevYear(year);
    navigate(`/year/${prev_year}`);
  };

  const next = () => {
    const next_year = DateController.getNextYear(year);
    navigate(`/year/${next_year}`);
  };

  return is404 ? (
    <Error404Page message={`Такого года (${year}) не существует`} />
  ) : (
    <AppFrame
      buttons={
        <>
          <button
            title="Перейти к таскам за предыдущий год"
            onClick={prev}
            children={<FontAwesomeIcon icon={faArrowDown} />}
          />
          <button
            title="Перейти к таскам за следующий год"
            onClick={next}
            children={<FontAwesomeIcon icon={faArrowUp} />}
          />
          <button children={year} />
        </>
      }
    >
      <ul className={styles.array_month}>
        {yearCalendar.map((month, month_i) => {
          return (
            <li
              key={`${year}-${month_i + 1}`}
              className={styles.array_month_element}
              onClick={(event) =>
                navigate(`/year/${year}/month/${month_i + 1}`)
              }
            >
              <h3>{DateController.getStringMonth(month_i + 1)}</h3>
              <ul className={styles.array_days}>
                {[1, 2, 3, 4, 5, 6, 7].map((day, day_i) => {
                  return (
                    <li
                      key={day_i}
                      className={styles.array_days_element}
                      children={DateController.getStringDay(day, 'ru')}
                    />
                  );
                })}
                {month.map((task, task_i) => {
                  const d = new Date(task.date);
                  const date = d.getDate();
                  return (
                    <li
                      key={task_i}
                      className={[
                        styles.array_days_element,
                        task.isThisMonth ? '' : styles.month_alian_day,
                      ].join(' ')}
                    >
                      <div
                        className={styles.array_days_element__number}
                        children={date}
                      />
                      <div className={styles.array_days_element__circles}>
                        {task.has_completed_task && (
                          <span
                            className={
                              styles.array_days_element__has_completed_task_circle
                            }
                          />
                        )}
                        {task.has_not_completed_task && (
                          <span
                            className={
                              styles.array_days_element__has_not_completed_task_circle
                            }
                          />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
};

YearPage.propTypes = {};

export default YearPage;
