import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import NewTask from './NewTask/NewTask';
import EditTask from './EditTask/EditTask';

const TasksPage = (props) => {
  const { id } = useParams();

  return !id || id === 'new' ? <NewTask /> : <EditTask />;
};

TasksPage.propTypes = {};

export default TasksPage;
