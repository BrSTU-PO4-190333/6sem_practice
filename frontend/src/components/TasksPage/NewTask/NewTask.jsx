import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './NewTask.module.css';
import AppFrame from '../../AppFrame/AppFrame';
import AppContainer from '../../AppContainer/AppContainer';
import DateController from '../../../package/DateController/DateController';
import ApiRestTasksPost from '../../../scripts/api/rest/tasks_post';
import { useEffect } from 'react';

const NewTask = (props) => {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [description, setDescription] = useState('');

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const StartDate = new Date();
    const EndDate = new Date(StartDate.getTime() + 1000 * 60 * 5);

    setStartDate(DateController.toStringDate(StartDate));
    setStartTime(DateController.toStringTime(StartDate));
    setEndDate(DateController.toStringDate(EndDate));
    setEndTime(DateController.toStringTime(EndDate));
  }, []);

  const set_start_date = (value) => {
    let StartDate = new Date(`${value} ${startTime}`);
    let EndDate = new Date(`${endDate} ${endTime}`);
    if (StartDate.getTime() >= EndDate.getTime()) {
      EndDate = new Date(StartDate.getTime() + 1000 * 60 * 5);
      setStartDate(DateController.toStringDate(StartDate));
      setStartTime(DateController.toStringTime(StartDate));
      setEndDate(DateController.toStringDate(EndDate));
      setEndTime(DateController.toStringTime(EndDate));
      return;
    }
    setStartDate(DateController.toStringDate(StartDate));
  };

  const set_start_time = (value) => {
    let StartDate = new Date(`${startDate} ${value}`);
    let EndDate = new Date(`${endDate} ${endTime}`);
    if (StartDate.getTime() >= EndDate.getTime()) {
      EndDate = new Date(StartDate.getTime() + 1000 * 60 * 5);
      setStartDate(DateController.toStringDate(StartDate));
      setStartTime(DateController.toStringTime(StartDate));
      setEndDate(DateController.toStringDate(EndDate));
      setEndTime(DateController.toStringTime(EndDate));
      return;
    }
    setStartTime(DateController.toStringTime(StartDate));
  };

  const set_end_date = (value) => {
    let StartDate = new Date(`${startDate} ${startTime}`);
    let EndDate = new Date(`${value} ${endTime}`);
    if (StartDate.getTime() >= EndDate.getTime()) {
      StartDate = new Date(EndDate.getTime() - 1000 * 60 * 5);
      setStartDate(DateController.toStringDate(StartDate));
      setStartTime(DateController.toStringTime(StartDate));
      setEndDate(DateController.toStringDate(EndDate));
      setEndTime(DateController.toStringTime(EndDate));
      return;
    }
    setEndDate(DateController.toStringDate(EndDate));
  };

  const set_end_time = (value) => {
    let StartDate = new Date(`${startDate} ${startTime}`);
    let EndDate = new Date(`${endDate} ${value}`);
    if (StartDate.getTime() >= EndDate.getTime()) {
      StartDate = new Date(EndDate.getTime() - 1000 * 60 * 5);
      setStartDate(DateController.toStringDate(StartDate));
      setStartTime(DateController.toStringTime(StartDate));
      setEndDate(DateController.toStringDate(EndDate));
      setEndTime(DateController.toStringTime(EndDate));
      return;
    }
    setEndTime(DateController.toStringTime(EndDate));
  };

  const onSubmit = async () => {
    const isCreated = await ApiRestTasksPost({
      Name: name,
      StartDate: new Date(`${startDate} ${startTime}`).toJSON(),
      EndDate: new Date(`${endDate} ${endTime}`).toJSON(),
      Description: description,
      IsCompleted: isCompleted,
    });
    if (!isCreated) return;

    const d = new Date(`${startDate} ${startTime}`);
    const d_y = d.getFullYear();
    const d_m = d.getMonth() + 1;
    const d_d = d.getDate();

    navigate(`/year/${d_y}/month/${d_m}/date/${d_d}`);
  };

  return (
    <AppFrame buttons={<button children="Создание таски" />}>
      <AppContainer style={{ height: '100%' }}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.form_head}>
            <div className={styles.buttons_block}>
              <input type="submit" value="Создать новую таску" />
            </div>
            <div className={styles.title_block}>
              <label
                attribute_checked={isCompleted ? 'true' : 'false'}
                onClick={(event) => setIsCompleted(!isCompleted)}
              />
              <input
                {...register('Name', { required: true })}
                type="text"
                placeholder="Название таски"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className={styles.date_block}>
              <input
                {...register('start_date')}
                type="date"
                value={startDate}
                onChange={(event) => set_start_date(event.target.value)}
              />
              <input
                {...register('start_time')}
                type="time"
                value={startTime}
                onChange={(event) => set_start_time(event.target.value)}
              />
              <input
                {...register('end_date')}
                type="date"
                value={endDate}
                onChange={(event) => set_end_date(event.target.value)}
              />
              <input
                {...register('end_time')}
                type="time"
                value={endTime}
                onChange={(event) => set_end_time(event.target.value)}
              />
            </div>
          </div>
          <div className={styles.form_body}>
            <textarea
              {...register('Description')}
              placeholder="Описание"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </form>
      </AppContainer>
    </AppFrame>
  );
};

NewTask.propTypes = {};

export default NewTask;
