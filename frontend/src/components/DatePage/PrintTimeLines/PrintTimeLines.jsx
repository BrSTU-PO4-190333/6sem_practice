import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from './../DatePage.module.css';

const PrintTimeLines = (props) => {
  const { hour_section_width } = props;
  const [hourSectionWidth, setHourSectionWidth] = useState(0);
  useEffect(() => {
    if (!hour_section_width) return;
    setHourSectionWidth(hour_section_width);
  }, [hour_section_width]);

  return !hourSectionWidth ? null : (
    <>
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ].map((hour, hour_i) => {
        return (
          <div
            key={hour_i}
            className={styles.line_hour}
            style={{ left: `${hourSectionWidth * hour}px` }}
          >
            {[10, 20, 30, 40, 50].map((min, min_i) => {
              return (
                <div
                  key={min_i}
                  className={styles.line_minutes}
                  style={{
                    left: `${(hourSectionWidth * min) / 60}px`,
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

PrintTimeLines.propTypes = {
  hour_section_width: PropTypes.number,
};

export default PrintTimeLines;
