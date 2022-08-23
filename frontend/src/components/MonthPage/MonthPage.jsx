import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './MonthPage.module.css';
import AppFrame from '../AppFrame/AppFrame';
import Error404Page from '../Error404Page/Error404Page';
import DateController from '../../package/DateController/DateController';
import CalendarController from '../../scripts/CalendarController/CalendarController';

const MonthPage = (props) => {
  let navigate = useNavigate();
  const { year, month } = useParams();
  const [is404, setIs404] = useState(false);
  const [monthCalendar, setMonthCalendar] = useState([]);

  useEffect(() => {
    if (!month) {
      const d = new Date();
      const d_y = d.getFullYear();
      const d_m = d.getMonth() + 1;
      navigate(`/year/${d_y}/month/${d_m}`);
      return;
    }

    if (new Date(`${year}-${month}`).toString() === 'Invalid Date') {
      setIs404(true);
      return;
    }

    const getCalendar = async () => {
      const calendar = await CalendarController.getMonthTasks(year, month);
      setMonthCalendar(calendar);
    };
    getCalendar();
  }, [month, navigate, year]);

  const prev = () => {
    const { year: y, month: m } = DateController.getPrevMonth(year, month);
    navigate(`/year/${y}/month/${m}`);
  };

  const next = () => {
    const { year: y, month: m } = DateController.getNextMonth(year, month);
    navigate(`/year/${y}/month/${m}`);
  };

  return is404 ? (
    <Error404Page
      message={`Дата со следующим годом (${year}) и месяцем (${month}) не существует`}
    />
  ) : (
    <AppFrame
      buttons={
        <>
          <button
            title="Перейти к таскам за предыдущий месяц"
            onClick={prev}
            children={<FontAwesomeIcon icon={faArrowDown} />}
          />
          <button
            title="Перейти к таскам за следующий месяц"
            onClick={next}
            children={<FontAwesomeIcon icon={faArrowUp} />}
          />
          <button
            title="Перейти к таскам на год"
            onClick={(event) => navigate(`/year/${year}`)}
            children={`${year}/${month}`}
          />
        </>
      }
    >
      <ul className={styles.array}>
        {monthCalendar.map((dateObj, date_i) => {
          const {
            date: d_string,
            isThisMonth,
            has_not_completed_task,
            has_completed_task,
          } = dateObj;

          const d = new Date(d_string);
          const crrnt_y = d.getFullYear();
          const crrnt_m = d.getMonth() + 1;
          const crrnt_d = d.getDate();
          const crrnt_day = d.getDay();

          return (
            <li
              key={date_i}
              className={[
                styles.array_element,
                isThisMonth ? '' : styles.month_alian_day,
              ].join(' ')}
              onClick={(event) =>
                navigate(`/year/${crrnt_y}/month/${crrnt_m}/date/${crrnt_d}`)
              }
            >
              <div
                className={styles.element_day}
                children={DateController.getStringDay(crrnt_day)}
              />
              <div className={styles.element_date} children={crrnt_d} />
              <ul className={styles.element_circles}>
                {has_not_completed_task && (
                  <li className={styles.has_not_completed_task_circle} />
                )}
                {has_completed_task && (
                  <li className={styles.has_completed_task_circle} />
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
};

MonthPage.propTypes = {};

export default MonthPage;
