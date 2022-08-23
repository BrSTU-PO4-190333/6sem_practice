import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from './../DatePage.module.css';

const PrintTime = (props) => {
  const { hour_section_width } = props;
  const [hourSectionWidth, setHourSectionWidth] = useState(0);

  useEffect(() => {
    if (!hour_section_width) return;
    setHourSectionWidth(hour_section_width);
  }, [hour_section_width]);

  return !hourSectionWidth ? null : (
    <div
      className={styles.time_block}
      style={{ width: `${hourSectionWidth * 24}px` }}
    >
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ].map((hour, hour_i) => {
        return (
          <span
            key={hour_i}
            style={{
              width: `${hourSectionWidth}px`,
            }}
            children={`${hour}:00`}
          />
        );
      })}
    </div>
  );
};

PrintTime.propTypes = {
  hour_section_width: PropTypes.number,
};

export default PrintTime;
